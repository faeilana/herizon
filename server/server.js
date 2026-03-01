/* ═══════════════════════════════════════════════════════════
   Herizon — Express Server + Vertex AI Proxy
   Serves the static frontend, proxies /api/scenario to Gemini,
   and manages user experience submissions via RAG.
   ═══════════════════════════════════════════════════════════ */

require('dotenv').config();

const express   = require('express');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');
const path      = require('path');
const { VertexAI }                    = require('@google-cloud/vertexai');
const { SCENARIO_SCHEMA }             = require('./schema');
const { SYSTEM_PROMPT, buildUserPrompt, TOPIC_ROTATION } = require('./prompts');
const { saveExperience, retrieveExperiences }            = require('./rag');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Middleware ─────────────────────────────────────────── */
app.use(express.json());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use('/api/', rateLimit({ windowMs: 60_000, max: 30, standardHeaders: true, legacyHeaders: false }));

/* ── Serve static frontend from project root ────────────── */
app.use(express.static(path.join(__dirname, '..')));

/* ── Vertex AI client ───────────────────────────────────── */
const vertexAI = new VertexAI({
  project:  process.env.GOOGLE_CLOUD_PROJECT,
  location: process.env.GOOGLE_CLOUD_LOCATION || 'us-central1'
});

const model = vertexAI.getGenerativeModel({
  model: 'gemini-2.0-flash-001',
  generationConfig: {
    responseMimeType: 'application/json',
    responseSchema:   SCENARIO_SCHEMA
  },
  systemInstruction: SYSTEM_PROMPT
});

/* ── POST /api/scenario ─────────────────────────────────── */
app.post('/api/scenario', async (req, res) => {
  const { country, countryName, scenarioIndex, stats } = req.body;

  if (!country || typeof scenarioIndex !== 'number' || !stats) {
    return res.status(400).json({ error: 'Missing required fields: country, scenarioIndex, stats' });
  }

  try {
    // Determine current topic for RAG query
    const topic = TOPIC_ROTATION[scenarioIndex % 7];

    // Retrieve relevant user experiences (non-fatal if it fails)
    let retrievedExperiences = [];
    try {
      retrievedExperiences = await retrieveExperiences(countryName || country, topic, 3);
    } catch (ragErr) {
      console.warn('[RAG retrieve warning]', ragErr.message);
    }

    const userPrompt = buildUserPrompt(countryName || country, scenarioIndex, stats, retrievedExperiences);
    const result     = await model.generateContent(userPrompt);
    const text       = result.response.candidates[0].content.parts[0].text;
    const scenario   = JSON.parse(text);

    validateScenario(scenario);

    return res.json({ scenario, source: 'llm' });

  } catch (err) {
    console.error('[Vertex AI error]', err.message);
    // Return fallback signal — frontend will substitute static scenario data
    return res.json({ scenario: null, source: 'fallback', reason: err.code || 'vertex_error' });
  }
});

/* ── POST /api/experiences — store a user travel experience  */
app.post('/api/experiences', async (req, res) => {
  const { country, countryName, title, experience } = req.body;

  if (!country || !experience || experience.trim().length < 20) {
    return res.status(400).json({ error: 'country and experience (min 20 characters) are required' });
  }
  if (experience.length > 3000) {
    return res.status(400).json({ error: 'experience must be 3000 characters or fewer' });
  }

  try {
    const id = await saveExperience({
      country,
      countryName: countryName || country,
      title:       title?.trim() || '',
      experience:  experience.trim()
    });
    return res.json({ success: true, id });
  } catch (err) {
    console.error('[RAG save error]', err.message);
    return res.status(500).json({ error: 'Failed to save experience. Please try again.' });
  }
});

/* ── Scenario validator (secondary check after schema enforcement) ── */
function validateScenario(s) {
  if (!s.title || !s.question || !Array.isArray(s.options) || s.options.length !== 4) {
    throw new Error('Invalid scenario structure');
  }
  for (const opt of s.options) {
    if (!opt.text || !opt.effects || !opt.outcome || !opt.why || !opt.tip) {
      throw new Error('Invalid option structure');
    }
    for (const v of Object.values(opt.effects)) {
      if (typeof v !== 'number' || v < -30 || v > 30) {
        throw new Error(`Effect value out of range: ${v}`);
      }
    }
  }
}

/* ── Start ──────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`Herizon server running at http://localhost:${PORT}`);
  console.log(`  Google Cloud Project: ${process.env.GOOGLE_CLOUD_PROJECT || '(not set)'}`);
  console.log(`  Location: ${process.env.GOOGLE_CLOUD_LOCATION || 'us-central1'}`);
});
