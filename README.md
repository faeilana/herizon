# Herizon — Women's Travel Simulator

A web-based interactive tourism simulation game designed for women travelers.
Built as a hackathon MVP — frontend only, no build tools required.

---

## File Structure

```
tourism/
├── index.html     # App shell & all three screen layouts
├── style.css      # Dark, modern, empowering design system
├── scenarios.js   # All game data (Japan, France, Brazil)
├── app.js         # D3 world map + game logic
└── README.md
```

---

## How to Run

### Option A — VS Code Live Server (easiest)
1. Open the `tourism/` folder in VS Code
2. Install the **Live Server** extension (if not already installed)
3. Right-click `index.html` → **Open with Live Server**
4. The game opens at `http://127.0.0.1:5500`

### Option B — Python (no extensions needed)
```bash
cd tourism
python3 -m http.server 8080
# then open http://localhost:8080
```

### Option C — Node / npx
```bash
cd tourism
npx serve .
# follow the printed URL
```

> **Important:** The game must be served over HTTP(S) — not opened as a
> `file://` URL — because D3 fetches the world map JSON from a CDN.
> An internet connection is required for the first load (map tiles are cached
> by the browser afterward).

---

## How to Play

1. **Choose a destination** by clicking one of the three highlighted (pink)
   countries on the interactive world map — Japan, France, or Brazil.
   Hovering shows the country name. Clicking a non-playable country shows
   "Coming soon".

2. **Complete 4 scenarios** per country. Each scenario presents a realistic
   situation a solo woman traveler might face and offers 4 choices.

3. **Choices affect four stats** (all start at 50, range 0–100):
   - 🔵 **Safety** — how well you protect yourself
   - 🟣 **Confidence** — how boldly you engage with the world
   - 🟢 **Cultural Awareness** — how deeply you connect with local culture
   - 🟡 **Budget** — how wisely you manage your money

4. After each choice, an **outcome panel** appears showing:
   - What happened as a result
   - Why it matters specifically for women travelers
   - A practical, actionable tip

5. After all 4 scenarios, see your **final stats** and earn a **Traveler Persona**:

   | Highest Stat | Persona |
   |---|---|
   | Safety | 🛡️ The Strategic Explorer |
   | Confidence | ✨ The Bold Traveler |
   | Cultural | 🌸 The Cultural Insider |
   | Budget | 💡 The Savvy Planner |
   | All within ~10 pts | 🧭 The Balanced Navigator |

6. Hit **Explore Another Destination** to replay with a different country.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Vanilla HTML / CSS / JS | No framework, no build step |
| [D3.js v7](https://d3js.org/) (CDN) | SVG world map with projections |
| [TopoJSON v3](https://github.com/topojson/topojson) (CDN) | Efficient geographic data |
| [world-atlas v2](https://github.com/topojson/world-atlas) (CDN) | 110m resolution country shapes |

---

## Extending the Game

**Add a new playable country:**
1. Find the ISO 3166-1 numeric code for the country (e.g. India = `356`)
2. Add it to `PLAYABLE` in `app.js`:
   ```js
   356: { code: "IND", name: "India", flag: "🇮🇳" }
   ```
3. Add a matching entry in `scenarios.js` under `SCENARIOS.IND` with 4 scenarios

**Change the color palette:**
All colors are CSS custom properties at the top of `style.css` — edit `--primary`,
`--accent`, and the `--c-*` stat colors to restyle the entire app instantly.

---

*"Traveling smart isn't about fear — it's about informed freedom."*
