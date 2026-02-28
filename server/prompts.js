/* ═══════════════════════════════════════════════════════════
   Herizon — Prompt Templates for Vertex AI / Gemini
   ═══════════════════════════════════════════════════════════ */

const SYSTEM_PROMPT = `You are a scenario writer for Herizon, a women's travel simulator game.
Generate ONE realistic travel dilemma for a solo woman traveler.

RULES:
- Scenario must be specific to the country (reference real places, transit systems, cultural norms)
- Address a real challenge that specifically affects women traveling solo
- Educational and empowering — not sensationalist
- Never frame women's travel as inherently dangerous — frame it as requiring informed choices
- Option 1: safest/most-prepared choice (high safety or confidence)
- Option 4: naive/uninformed choice (clearly negative, educational)
- Best option total effects: +25 to +45. Worst option: negative in at least 2 stats (-10 to -25 each)
- The "why" field must explain why this matters specifically for women travelers
- The "tip" must be concrete and immediately actionable

TOPIC-SPECIFIC GUIDANCE:
- For HARASSMENT topics: address whether local police are effective responders, whether walking away / ignoring is safer than confronting, and whether carrying pepper spray is legal and advisable in that country. Include the local word for groping or harassment.
- For POLITICAL/ECONOMIC topics: address current political tensions (rival parties, protests), any laws that could affect foreign women travelers (photography, dress, protest participation), and economic conditions (scams, currency issues, tourist traps).
- For BODY LANGUAGE topics: address specific gestures that are offensive or respectful in that country (e.g. pointing, the OK sign, eye contact norms, greetings like bowing or cheek kisses). Weave in one food or water safety fact as a tip.
- For FOOD/WATER SAFETY topics: address whether tap water is safe, which street foods are safe vs. risky, food-handling red flags to watch for, and how to assess vendor safety.

TONE: Direct, warm, knowledgeable — like advice from a well-traveled friend.`;

/* Topic rotation ensures variety across the 7 scenarios in a playthrough */
const TOPIC_ROTATION = [
  'transportation or arrival logistics',
  'accommodation, food, or solo dining',
  'cultural etiquette, sacred sites, or local customs',
  'street safety in crowded public spaces',
  'harassment response — how to react, whether police help, and local legal protections for women',
  'political and economic climate — current tensions, protests, laws affecting foreign travelers',
  'body language and communication customs — respectful and offensive gestures, food and water safety'
];

/**
 * Build the user-turn prompt for a scenario request.
 * @param {string} countryName  - Human-readable country name (e.g. "Japan")
 * @param {number} scenarioIndex - 0-6, position in the playthrough
 * @param {object} stats         - Current player stats {safety, confidence, cultural, budget}
 * @returns {string}
 */
function buildUserPrompt(countryName, scenarioIndex, stats) {
  const avg = (stats.safety + stats.confidence + stats.cultural + stats.budget) / 4;
  const difficulty = avg < 40 ? 'LOW' : avg > 65 ? 'HIGH' : 'MEDIUM';
  const topic = TOPIC_ROTATION[scenarioIndex % 7];

  const difficultyGuidance = difficulty === 'LOW'
    ? 'Present a challenging situation with higher stakes — the player needs to learn more.'
    : difficulty === 'HIGH'
    ? 'Present a nuanced, complex dilemma where even good options have tradeoffs — reward the experienced player with depth.'
    : 'Balance education with genuine choice.';

  return `Generate a travel scenario for a solo woman traveler in ${countryName}.

SCENARIO FOCUS: ${topic}
SCENARIO NUMBER: ${scenarioIndex + 1} of 7 in this playthrough

PLAYER CONTEXT:
- Current stats: Safety ${stats.safety}, Confidence ${stats.confidence}, Cultural ${stats.cultural}, Budget ${stats.budget}
- Difficulty level: ${difficulty}

Difficulty guidance: ${difficultyGuidance}

Set the scenario in a specific, named location within ${countryName} (a real neighborhood, transit system, landmark, or type of venue).`;
}

module.exports = { SYSTEM_PROMPT, buildUserPrompt };
