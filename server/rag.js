/* ═══════════════════════════════════════════════════════════
   Herizon — RAG Engine
   Handles: embedding user experiences via Vertex AI,
            storing to disk, cosine-similarity retrieval
   ═══════════════════════════════════════════════════════════ */

const fs   = require('fs');
const path = require('path');
const { GoogleAuth } = require('google-auth-library');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, 'data', 'experiences.json');
const auth = new GoogleAuth({ scopes: ['https://www.googleapis.com/auth/cloud-platform'] });

/* ── Ensure data directory and file exist ─────────────────── */
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir))      fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');
}

/* ── Get GCP access token via Application Default Credentials */
async function getAccessToken() {
  const client = await auth.getClient();
  const { token } = await client.getAccessToken();
  return token;
}

/* ── Call Vertex AI text-embedding-004 via REST API ──────── */
async function embed(text) {
  const project  = process.env.GOOGLE_CLOUD_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';
  const token    = await getAccessToken();

  const res = await fetch(
    `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google/models/text-embedding-004:predict`,
    {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({ instances: [{ content: text }] })
    }
  );

  const data = await res.json();
  if (!data.predictions?.[0]?.embeddings?.values) {
    throw new Error('Embedding API error: ' + JSON.stringify(data));
  }
  return data.predictions[0].embeddings.values; // number[]
}

/* ── Cosine similarity between two vectors ───────────────── */
function cosineSim(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot   += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

/* ── Read all stored experiences from disk ───────────────── */
function loadExperiences() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

/* ── Embed and store a new user experience ───────────────── */
async function saveExperience({ country, countryName, title, experience }) {
  // Compose the text to embed — include country and title for better retrieval
  const textToEmbed = `Travel experience in ${countryName}. ${title ? title + '. ' : ''}${experience}`;
  const embedding   = await embed(textToEmbed);

  const entry = {
    id:          uuidv4(),
    country,
    countryName,
    title:       title || 'Untitled',
    experience,
    embedding,            // stored for retrieval, stripped before sending to client
    timestamp:   new Date().toISOString()
  };

  const all = loadExperiences();
  all.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2));

  console.log(`[RAG] Saved experience id=${entry.id} country=${country} (total: ${all.length})`);
  return entry.id;
}

/* ── Retrieve top-K experiences by semantic similarity ───── */
async function retrieveExperiences(countryName, topic, topK = 3) {
  const all = loadExperiences();
  if (all.length === 0) return [];

  // Query embedding: country + topic for targeted semantic match
  const queryText      = `Solo female traveler in ${countryName}. Topic: ${topic}`;
  const queryEmbedding = await embed(queryText);

  const scored = all.map(entry => ({
    id:          entry.id,
    country:     entry.country,
    countryName: entry.countryName,
    title:       entry.title,
    experience:  entry.experience,
    timestamp:   entry.timestamp,
    score:       cosineSim(queryEmbedding, entry.embedding)
  }));

  const results = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  if (results.length > 0) {
    console.log(`[RAG] Retrieved ${results.length} experiences for "${countryName}/${topic}" (top score: ${results[0].score.toFixed(3)})`);
  }

  return results;
}

module.exports = { saveExperience, retrieveExperiences };
