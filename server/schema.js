/* ═══════════════════════════════════════════════════════════
   Herizon — Gemini Response Schema
   Passed as generationConfig.responseSchema to enforce that
   the model returns valid scenario JSON — no parsing heuristics.
   ═══════════════════════════════════════════════════════════ */

const SCENARIO_SCHEMA = {
  type: 'object',
  properties: {
    title:    { type: 'string' },
    question: { type: 'string' },
    options: {
      type: 'array',
      minItems: 4,
      maxItems: 4,
      items: {
        type: 'object',
        properties: {
          text:    { type: 'string' },
          effects: {
            type: 'object',
            properties: {
              safety:     { type: 'integer', minimum: -30, maximum: 30 },
              confidence: { type: 'integer', minimum: -30, maximum: 30 },
              cultural:   { type: 'integer', minimum: -30, maximum: 30 },
              budget:     { type: 'integer', minimum: -30, maximum: 30 }
            },
            required: ['safety', 'confidence', 'cultural', 'budget']
          },
          outcome: { type: 'string' },
          why:     { type: 'string' },
          tip:     { type: 'string' }
        },
        required: ['text', 'effects', 'outcome', 'why', 'tip']
      }
    }
  },
  required: ['title', 'question', 'options']
};

module.exports = { SCENARIO_SCHEMA };
