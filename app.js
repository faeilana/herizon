/* ═══════════════════════════════════════════════════════════
   Herizon — App Logic
   Handles: D3 world map, country hover/click, game flow,
            stat updates, outcome display, results & persona
   ═══════════════════════════════════════════════════════════ */

/* ── ISO 3166-1 numeric → country name lookup ─────────────── */
const COUNTRY_NAMES = {
  4:"Afghanistan",8:"Albania",12:"Algeria",20:"Andorra",24:"Angola",28:"Antigua and Barbuda",
  32:"Argentina",36:"Australia",40:"Austria",31:"Azerbaijan",44:"Bahamas",48:"Bahrain",
  50:"Bangladesh",52:"Barbados",56:"Belgium",84:"Belize",204:"Benin",64:"Bhutan",68:"Bolivia",
  70:"Bosnia and Herzegovina",72:"Botswana",76:"Brazil",96:"Brunei",100:"Bulgaria",
  854:"Burkina Faso",108:"Burundi",116:"Cambodia",120:"Cameroon",124:"Canada",
  132:"Cape Verde",140:"Central African Republic",144:"Sri Lanka",152:"Chile",156:"China",
  170:"Colombia",178:"Congo",188:"Costa Rica",384:"Côte d'Ivoire",191:"Croatia",192:"Cuba",
  196:"Cyprus",203:"Czech Republic",208:"Denmark",262:"Djibouti",214:"Dominican Republic",
  218:"Ecuador",818:"Egypt",222:"El Salvador",231:"Ethiopia",246:"Finland",250:"France",
  266:"Gabon",276:"Germany",288:"Ghana",300:"Greece",320:"Guatemala",324:"Guinea",
  332:"Haiti",340:"Honduras",348:"Hungary",356:"India",360:"Indonesia",364:"Iran",
  368:"Iraq",372:"Ireland",376:"Israel",380:"Italy",388:"Jamaica",392:"Japan",
  400:"Jordan",398:"Kazakhstan",404:"Kenya",408:"North Korea",410:"South Korea",
  414:"Kuwait",418:"Laos",422:"Lebanon",430:"Liberia",434:"Libya",440:"Lithuania",
  442:"Luxembourg",454:"Malawi",458:"Malaysia",466:"Mali",484:"Mexico",496:"Mongolia",
  504:"Morocco",508:"Mozambique",516:"Namibia",524:"Nepal",528:"Netherlands",
  554:"New Zealand",558:"Nicaragua",562:"Niger",566:"Nigeria",578:"Norway",512:"Oman",
  586:"Pakistan",591:"Panama",598:"Papua New Guinea",600:"Paraguay",604:"Peru",
  608:"Philippines",616:"Poland",620:"Portugal",634:"Qatar",642:"Romania",643:"Russia",
  646:"Rwanda",682:"Saudi Arabia",686:"Senegal",694:"Sierra Leone",706:"Somalia",
  710:"South Africa",724:"Spain",729:"Sudan",752:"Sweden",756:"Switzerland",760:"Syria",
  158:"Taiwan",834:"Tanzania",764:"Thailand",768:"Togo",792:"Turkey",800:"Uganda",
  804:"Ukraine",784:"United Arab Emirates",826:"United Kingdom",840:"United States",
  858:"Uruguay",860:"Uzbekistan",862:"Venezuela",704:"Vietnam",887:"Yemen",
  894:"Zambia",716:"Zimbabwe"
};

/* ── Playable countries (ISO numeric → game data) ─────────── */
const PLAYABLE = {
  392: { code: "JPN", name: "Japan",  flag: "🇯🇵" },
  250: { code: "FRA", name: "France", flag: "🇫🇷" },
   76: { code: "BRA", name: "Brazil", flag: "🇧🇷" }
};

/* ── LLM feature flag ─────────────────────────────────────── */
const LLM_ENABLED = true; // set false to always use static scenarios.js

/* ── Game state ───────────────────────────────────────────── */
let state = {
  country:          null,
  scenarioIndex:    0,
  stats:            { safety: 50, confidence: 50, cultural: 50, budget: 50 },
  loadedScenarios:  []   // cache of scenario objects for current playthrough
};

/* ═══════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════ */
function clamp(v)   { return Math.max(0, Math.min(100, v)); }

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ═══════════════════════════════════════════════════════════
   MAP INITIALISATION  (D3 + topojson)
   ═══════════════════════════════════════════════════════════ */
async function initMap() {
  const container = document.getElementById("map-container");
  const W = container.clientWidth  || 900;
  const H = Math.round(W * 0.52);

  /* Build SVG */
  const svg = d3.select("#world-map")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto");

  const proj = d3.geoNaturalEarth1()
    .scale(W / 6.3)
    .translate([W / 2, H / 2]);

  const path = d3.geoPath().projection(proj);

  /* Ocean sphere */
  svg.append("path")
    .datum({ type: "Sphere" })
    .attr("class", "sphere")
    .attr("d", path);

  /* Graticule */
  svg.append("path")
    .datum(d3.geoGraticule()())
    .attr("class", "graticule")
    .attr("d", path);

  /* Load world data */
  let world;
  try {
    world = await d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    );
  } catch (err) {
    showMapError();
    return;
  }

  const countries = topojson.feature(world, world.objects.countries);

  /* Draw countries */
  svg.selectAll(".country")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("class", d => PLAYABLE[+d.id] ? "country playable" : "country")
    .attr("d", path)
    .on("mouseover",  onMouseOver)
    .on("mousemove",  onMouseMove)
    .on("mouseout",   onMouseOut)
    .on("click",      onCountryClick);
}

/* ── Map event handlers ─────────────────────────────────── */
function onMouseOver(event, d) {
  const id       = +d.id;
  const playable = !!PLAYABLE[id];
  const name     = PLAYABLE[id]?.name || COUNTRY_NAMES[id] || "Unknown Territory";

  d3.select(event.currentTarget).classed("hovered", true);

  const tt = document.getElementById("tooltip");
  tt.innerHTML = playable
    ? `<span class="tooltip-name">${name}</span>
       <span class="tooltip-cta">✈ Click to start your adventure!</span>`
    : `<span class="tooltip-name">${name}</span>
       <span class="tooltip-soon">🌍 Coming soon</span>`;

  tt.classList.remove("hidden");
  positionTooltip(event, tt);
}

function onMouseMove(event) {
  positionTooltip(event, document.getElementById("tooltip"));
}

function onMouseOut(event) {
  d3.select(event.currentTarget).classed("hovered", false);
  document.getElementById("tooltip").classList.add("hidden");
}

function onCountryClick(event, d) {
  const id = +d.id;
  if (PLAYABLE[id]) {
    startGame(PLAYABLE[id].code);
  } else if (LLM_ENABLED && COUNTRY_NAMES[id]) {
    // With LLM enabled, any mapped country can generate scenarios dynamically
    const name       = COUNTRY_NAMES[id];
    const pseudoCode = name.toUpperCase().replace(/\s/g, '').slice(0, 3);
    startGame(pseudoCode, name);
  } else {
    const tt = document.getElementById("tooltip");
    const name = COUNTRY_NAMES[id] || "This destination";
    tt.innerHTML = `<span class="tooltip-soon">🌍 ${name} — Coming soon!</span>`;
    tt.classList.remove("hidden");
    positionTooltip(event, tt);
    setTimeout(() => tt.classList.add("hidden"), 2000);
  }
}

function positionTooltip(event, tt) {
  const rect = document.getElementById("map-container").getBoundingClientRect();
  let x = event.clientX - rect.left + 14;
  let y = event.clientY - rect.top  - 42;
  if (x + 180 > rect.width)  x = rect.width  - 185;
  if (y < 4)                  y = 4;
  tt.style.left = x + "px";
  tt.style.top  = y + "px";
}

function showMapError() {
  document.getElementById("map-container").innerHTML =
    `<div style="text-align:center;color:#8899bb;padding:4rem 1rem">
       <p style="font-size:2rem">🌐</p>
       <p>Could not load map data. Please check your internet connection and refresh.</p>
     </div>`;
}

/* ═══════════════════════════════════════════════════════════
   GAME  —  start / render / choice / outcome / next / end
   ═══════════════════════════════════════════════════════════ */

async function startGame(countryCode, overrideName = null) {
  state.country         = countryCode;
  state.scenarioIndex   = 0;
  state.loadedScenarios = [];
  state.stats           = { safety: 50, confidence: 50, cultural: 50, budget: 50 };

  // Support both static countries (have a SCENARIOS entry) and LLM-only countries
  const countryData = SCENARIOS[countryCode];
  const countryName = overrideName || countryData?.name || countryCode;
  const flag        = countryData?.flag || '🌍';

  document.getElementById("destination-flag").textContent = flag;
  document.getElementById("destination-name").textContent = countryName;

  updateStatBars();
  showScreen("game-screen");
  await renderScenario(countryName);
}

/* ── Render the current scenario ───────────────────────── */
async function renderScenario(countryName) {
  // Use cached scenario if already loaded for this index
  let scenario = state.loadedScenarios[state.scenarioIndex];
  if (!scenario) {
    scenario = await fetchScenario(countryName);
    state.loadedScenarios[state.scenarioIndex] = scenario;
  }

  document.getElementById("scenario-num").textContent      = state.scenarioIndex + 1;
  document.getElementById("scenario-title").textContent    = scenario.title;
  document.getElementById("scenario-question").textContent = scenario.question;

  /* Build choice buttons */
  const container = document.getElementById("choices-container");
  container.innerHTML = "";
  scenario.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className   = "choice-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => handleChoice(i));
    container.appendChild(btn);
  });

  /* Show question, hide outcome */
  document.getElementById("scenario-panel").classList.remove("hidden");
  document.getElementById("outcome-panel").classList.add("hidden");
}

/* ── Handle a player's choice ──────────────────────────── */
function handleChoice(index) {
  const option = state.loadedScenarios[state.scenarioIndex].options[index];

  /* Apply stat effects */
  const fx = option.effects;
  state.stats.safety     = clamp(state.stats.safety     + (fx.safety     || 0));
  state.stats.confidence = clamp(state.stats.confidence + (fx.confidence || 0));
  state.stats.cultural   = clamp(state.stats.cultural   + (fx.cultural   || 0));
  state.stats.budget     = clamp(state.stats.budget     + (fx.budget     || 0));

  /* Visual feedback on buttons */
  document.querySelectorAll(".choice-btn").forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.add(i === index ? "selected" : "dimmed");
  });

  updateStatBars();
  showOutcome(option);
}

/* ── Animate stat bars ─────────────────────────────────── */
function updateStatBars() {
  const map = [
    ["stat-safety",     "safety"],
    ["stat-confidence", "confidence"],
    ["stat-cultural",   "cultural"],
    ["stat-budget",     "budget"]
  ];
  map.forEach(([id, key]) => {
    const fill = document.querySelector(`#${id} .stat-fill`);
    if (fill) fill.style.width = state.stats[key] + "%";
  });
}

/* ── Show outcome panel ────────────────────────────────── */
function showOutcome(option) {
  document.getElementById("outcome-summary").textContent = option.outcome;
  document.getElementById("outcome-why").textContent     = option.why;
  document.getElementById("outcome-tip").textContent     = option.tip;

  const panel = document.getElementById("outcome-panel");
  panel.classList.remove("hidden");
  // Smooth scroll to outcome
  setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "nearest" }), 80);
}

/* ── Advance to next scenario or end ───────────────────── */
async function advanceScenario() {
  state.scenarioIndex++;
  if (state.scenarioIndex >= 7) {
    showResults();
  } else {
    const countryData = SCENARIOS[state.country];
    const countryName = countryData?.name || state.country;
    await renderScenario(countryName);
    document.getElementById("scenario-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ═══════════════════════════════════════════════════════════
   LLM SCENARIO FETCHING  (Vertex AI / Gemini via backend proxy)
   ═══════════════════════════════════════════════════════════ */

/* ── Fetch a scenario from the LLM backend or fall back ─── */
async function fetchScenario(countryName) {
  if (!LLM_ENABLED) return getStaticFallback();
  showLoadingState();
  try {
    const resp = await fetch('/api/scenario', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        country:       state.country,
        countryName:   countryName,
        scenarioIndex: state.scenarioIndex,
        stats:         state.stats
      })
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    if (data.source === 'fallback' || !data.scenario) return getStaticFallback();
    return data.scenario;
  } catch (err) {
    console.warn('[Herizon] LLM fetch failed, using static fallback:', err.message);
    return getStaticFallback();
  }
}

/* ── Return a static scenario as fallback ──────────────── */
function getStaticFallback() {
  const countryData = SCENARIOS[state.country];
  if (countryData) {
    const idx = state.scenarioIndex % countryData.scenarios.length;
    return countryData.scenarios[idx];
  }
  return GENERIC_FALLBACK_SCENARIO;
}

/* ── Show loading spinner while awaiting LLM ───────────── */
function showLoadingState() {
  document.getElementById("choices-container").innerHTML = `
    <div class="loading-state" aria-live="polite" aria-busy="true">
      <div class="loading-spinner"></div>
      <p class="loading-text">Preparing your scenario...</p>
    </div>`;
  document.getElementById("scenario-title").textContent    = "";
  document.getElementById("scenario-question").textContent = "";
  document.getElementById("scenario-panel").classList.remove("hidden");
  document.getElementById("outcome-panel").classList.add("hidden");
}

/* ── Generic fallback scenario for LLM-only countries ─── */
const GENERIC_FALLBACK_SCENARIO = {
  title: "Navigating the Unfamiliar",
  question: "You've arrived in an unfamiliar part of the city and feel uncertain about your surroundings. What do you do?",
  options: [
    {
      text: "Step into the nearest well-lit café or shop to reorient",
      effects: { safety: 15, confidence: 10, cultural: 5, budget: -5 },
      outcome: "You gather your bearings safely. A barista helpfully points you in the right direction.",
      why: "Ducking into a staffed public space is one of the most effective de-escalation moves for any traveler.",
      tip: "Hotels, cafés, and shops are always valid safe harbors — use them freely."
    },
    {
      text: "Open your maps app and plan a clear route before moving",
      effects: { safety: 10, confidence: 15, cultural: 5, budget: 0 },
      outcome: "A few minutes of planning reveals a safe, direct route. Confidence restored.",
      why: "A moment of digital navigation is always worth more than moving blindly in the wrong direction.",
      tip: "Download offline maps for every destination before you leave home — they work with no signal."
    },
    {
      text: "Ask a nearby woman or family for help",
      effects: { safety: 10, confidence: 10, cultural: 15, budget: 0 },
      outcome: "They are warm and helpful. You find your way and exchange a few kind words.",
      why: "Asking local women or families for directions is consistently the safest choice in any country.",
      tip: "A smile, the destination name, and a questioning look work in any language."
    },
    {
      text: "Keep walking quickly without a plan, hoping you'll recognize something",
      effects: { safety: -10, confidence: -10, cultural: 0, budget: 0 },
      outcome: "You end up more lost and more anxious than when you started.",
      why: "Moving without a plan when disoriented amplifies risk. Pause, orient, then move with purpose.",
      tip: "Always know the name and address of your accommodation before leaving it."
    }
  ]
};

/* ═══════════════════════════════════════════════════════════
   RESULTS  &  PERSONA
   ═══════════════════════════════════════════════════════════ */

const PERSONAS = {
  safety: {
    title:       "The Strategic Explorer",
    icon:        "🛡️",
    description: "You prioritize smart, informed choices above all else. Your careful approach means you experience the world deeply while minimizing unnecessary risk — and you rarely get caught off guard."
  },
  confidence: {
    title:       "The Bold Traveler",
    icon:        "✨",
    description: "You embrace unfamiliar situations with fearless confidence. Your energy opens doors, starts conversations, and creates connections that more cautious travelers often miss."
  },
  cultural: {
    title:       "The Cultural Insider",
    icon:        "🌸",
    description: "You seek authentic connection with every culture you visit. Locals recognize your genuine curiosity, and your experiences go far beyond the tourist trail into the heart of each place."
  },
  budget: {
    title:       "The Savvy Planner",
    icon:        "💡",
    description: "You travel brilliantly with your resources and have discovered that the best experiences rarely require the most money. You know the hidden gems, the local spots, and the smart shortcuts."
  },
  balanced: {
    title:       "The Balanced Navigator",
    icon:        "🧭",
    description: "You balance safety, confidence, cultural depth, and financial sense with remarkable poise. You are the kind of traveler who adapts to any situation — and every trip benefits from your presence."
  }
};

function calculatePersona() {
  const { safety, confidence, cultural, budget } = state.stats;
  const vals = [safety, confidence, cultural, budget];
  const max  = Math.max(...vals);
  const min  = Math.min(...vals);

  if (max - min <= 10) return PERSONAS.balanced;

  if (safety     === max) return PERSONAS.safety;
  if (confidence === max) return PERSONAS.confidence;
  if (cultural   === max) return PERSONAS.cultural;
  return PERSONAS.budget;
}

function showResults() {
  const persona = calculatePersona();
  const { safety, confidence, cultural, budget } = state.stats;

  document.getElementById("persona-icon").textContent        = persona.icon;
  document.getElementById("persona-title").textContent       = persona.title;
  document.getElementById("persona-description").textContent = persona.description;

  /* Final stat bars */
  [
    ["final-safety",     "final-safety-val",     safety],
    ["final-confidence", "final-confidence-val", confidence],
    ["final-cultural",   "final-cultural-val",   cultural],
    ["final-budget",     "final-budget-val",     budget]
  ].forEach(([barId, valId, v]) => {
    document.getElementById(barId).style.width      = v + "%";
    document.getElementById(valId).textContent      = v;
  });

  showScreen("results-screen");
}

/* ═══════════════════════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════════════════════ */
document.getElementById("continue-btn").addEventListener("click", advanceScenario);

document.getElementById("replay-btn").addEventListener("click", () => {
  showScreen("map-screen");
});

document.getElementById("back-btn").addEventListener("click", () => {
  if (confirm("Return to the map? Your current progress will be lost.")) {
    showScreen("map-screen");
  }
});

/* ═══════════════════════════════════════════════════════════
   SHARE EXPERIENCE MODAL
   ═══════════════════════════════════════════════════════════ */

function openShareModal(prefillCountry = '') {
  const overlay = document.getElementById('share-modal-overlay');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent background scroll
  resetShareForm();
  if (prefillCountry) {
    document.getElementById('exp-country').value = prefillCountry;
  }
  document.getElementById('exp-country').focus();
}

function closeShareModal() {
  document.getElementById('share-modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function resetShareForm() {
  document.getElementById('share-experience-form').reset();
  document.getElementById('exp-char-count').textContent = '0';
  document.getElementById('share-form-error').classList.add('hidden');
  document.getElementById('share-form-success').classList.add('hidden');
  const btn = document.getElementById('share-submit-btn');
  btn.disabled    = false;
  btn.textContent = 'Submit Experience';
}

async function submitExperience(e) {
  e.preventDefault();
  const country    = document.getElementById('exp-country').value.trim();
  const title      = document.getElementById('exp-title').value.trim();
  const experience = document.getElementById('exp-text').value.trim();
  const errorEl    = document.getElementById('share-form-error');
  const successEl  = document.getElementById('share-form-success');
  const submitBtn  = document.getElementById('share-submit-btn');

  errorEl.classList.add('hidden');

  if (!country) {
    errorEl.textContent = 'Please enter a country.';
    errorEl.classList.remove('hidden');
    return;
  }
  if (experience.length < 20) {
    errorEl.textContent = 'Please write at least 20 characters about your experience.';
    errorEl.classList.remove('hidden');
    return;
  }

  submitBtn.disabled    = true;
  submitBtn.textContent = 'Submitting…';

  try {
    const resp = await fetch('/api/experiences', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country, countryName: country, title, experience })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Submission failed');

    successEl.classList.remove('hidden');
    document.getElementById('share-experience-form').reset();
    document.getElementById('exp-char-count').textContent = '0';
    setTimeout(closeShareModal, 2500);

  } catch (err) {
    errorEl.textContent = 'Something went wrong. Please try again.';
    errorEl.classList.remove('hidden');
    submitBtn.disabled    = false;
    submitBtn.textContent = 'Submit Experience';
  }
}

/* ── Modal event wiring ─────────────────────────────────── */
document.getElementById('share-story-btn').addEventListener('click', () => openShareModal());

document.getElementById('results-share-btn').addEventListener('click', () => {
  const countryData = SCENARIOS[state.country];
  openShareModal(countryData?.name || state.country || '');
});

document.getElementById('modal-close-btn').addEventListener('click', closeShareModal);

document.getElementById('share-modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeShareModal(); // click outside to close
});

document.getElementById('share-experience-form').addEventListener('submit', submitExperience);

document.getElementById('exp-text').addEventListener('input', e => {
  document.getElementById('exp-char-count').textContent = e.target.value.length;
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeShareModal();
});

/* ═══════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════ */
initMap();
