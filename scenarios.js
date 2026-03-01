/* ═══════════════════════════════════════════════════════════
   Herizon — Scenario Data
   Countries: Japan (JPN), France (FRA), Brazil (BRA)
   Each scenario: title, question, 4 options
   Each option:  text, effects {safety,confidence,cultural,budget},
                 outcome, why, tip
   ═══════════════════════════════════════════════════════════ */

const SCENARIOS = {

  /* ─────────────────────────── JAPAN ─────────────────────────── */
  JPN: {
    name: "Japan",
    flag: "🇯🇵",
    scenarios: [

      {
        title: "Late-Night Airport Arrival",
        question: "It's 11 PM. You've just landed at Narita Airport and your hotel is in central Tokyo. Which option do you choose?",
        options: [
          {
            text: "Take the Narita Express (N'EX) — fast, well-lit, affordable direct train",
            effects: { safety: 10, confidence: 5, cultural: 5, budget: -5 },
            outcome: "You arrive safely at your hotel before midnight. The N'EX is smooth, staffed, and easy to navigate even with jet lag.",
            why: "Well-lit, busy public transport dramatically reduces risk for solo women arriving in an unfamiliar city at night.",
            tip: "Buy a Suica IC card at the airport — it works on almost every train and bus in Japan and is the easiest way to travel."
          },
          {
            text: "Share a taxi with two other travelers you met on the flight",
            effects: { safety: 5, confidence: 10, cultural: 5, budget: -10 },
            outcome: "You bond with new travel friends and arrive safely, though it costs a bit more than the train.",
            why: "Traveling in a group in a new city adds a layer of security and confidence, especially late at night.",
            tip: "Licensed taxis in Japan are safe and honest — just confirm your destination is understood before departing."
          },
          {
            text: "Pre-book the Airport Limousine Bus to your hotel district",
            effects: { safety: 15, confidence: 5, cultural: 0, budget: -10 },
            outcome: "The comfortable bus drops you close to your hotel. Slower than the train but completely stress-free.",
            why: "Pre-booked transport removes the need to navigate unknown transit at night — a meaningful safety advantage.",
            tip: "Book the Airport Limousine Bus online before your trip — it goes directly to major hotel areas and runs late."
          },
          {
            text: "Accept a ride from the man at arrivals offering a 'special price'",
            effects: { safety: -20, confidence: -5, cultural: -5, budget: -5 },
            outcome: "Unlicensed touts typically overcharge and the ride feels uncomfortable. Always use licensed options.",
            why: "Unofficial transport at airports is one of the most common safety risks for women travelers worldwide.",
            tip: "Japan's official taxis have distinctive signage — always go to the designated taxi stand outside the terminal."
          }
        ]
      },

      {
        title: "Shrine Etiquette in Kyoto",
        question: "You're visiting a beautiful Shinto shrine and want to participate authentically, but you're unsure of the rituals. What do you do?",
        options: [
          {
            text: "Observe other visitors carefully before approaching — follow what they do",
            effects: { safety: 0, confidence: 5, cultural: 15, budget: 0 },
            outcome: "By watching first you participate respectfully. A nearby woman even smiles and gestures for you to join her.",
            why: "Observing before acting is a core principle in Japanese culture — it shows respect and prevents accidental offense.",
            tip: "At Shinto shrines the standard ritual is: bow twice, clap twice, pray silently, then bow once more."
          },
          {
            text: "Ask a shrine attendant (miko) to briefly explain the ritual",
            effects: { safety: 0, confidence: 10, cultural: 20, budget: 0 },
            outcome: "The shrine maiden is delighted by your genuine curiosity and gives a gentle explanation. One of your best moments of the trip.",
            why: "Asking questions signals respect and often leads to the richest cultural exchanges you'll have while traveling.",
            tip: "Many major shrines have bilingual signs or staff with basic English. 'Sumimasen' (excuse me) opens nearly every door."
          },
          {
            text: "Follow along with a nearby tour group to learn the basics",
            effects: { safety: 0, confidence: 5, cultural: 10, budget: -5 },
            outcome: "You pick up the ritual basics from the guide's commentary. A quick, effective way to learn.",
            why: "Guided context accelerates cultural learning and helps you understand meaning you'd otherwise miss.",
            tip: "Many shrines offer free audio guides via QR code at the entrance — always worth checking."
          },
          {
            text: "Take selfies freely — it's a tourist site after all",
            effects: { safety: 0, confidence: -5, cultural: -15, budget: 0 },
            outcome: "You notice disapproving glances from worshippers in active prayer areas. The mood shifts.",
            why: "Treating sacred spaces as photo backdrops is a common misstep that limits authentic connection and cultural respect.",
            tip: "Look for 'No Photography' signs before raising your camera. When in doubt, lower it and observe first."
          }
        ]
      },

      {
        title: "Solo Dining in Tokyo",
        question: "You're hungry but feel self-conscious eating alone at a sit-down restaurant. Japan actually has some world-class options for solo diners. What do you choose?",
        options: [
          {
            text: "Visit an Ichiran-style ramen shop with private solo dining booths",
            effects: { safety: 5, confidence: 15, cultural: 10, budget: 10 },
            outcome: "You discover solo dining booths designed exactly for this — a bowl of incredible ramen in peaceful, private comfort.",
            why: "Japan has a strong ichiban (solo) dining culture. Embracing it is both empowering and deeply authentic.",
            tip: "Ichiran Ramen has individual curtained booths in Tokyo — a famous, affordable, and perfect solo dining experience."
          },
          {
            text: "Order delivery to your hotel room instead",
            effects: { safety: 5, confidence: -5, cultural: -5, budget: -5 },
            outcome: "Food arrives quickly, but you miss the incredible street food culture that makes Japan legendary.",
            why: "Staying inside due to social anxiety is one of the most common barriers women face while traveling — and one of the most costly.",
            tip: "Japan's convenience stores (konbini) sell hot, fresh, cheap meals that are genuinely delicious — a perfect compromise."
          },
          {
            text: "Pick up a bento from a convenience store and eat in a nearby park",
            effects: { safety: 5, confidence: 5, cultural: 10, budget: 15 },
            outcome: "The Japanese konbini bento is genuinely excellent. Eating in a local park gives you a beautiful, authentic slice of city life.",
            why: "Convenience store culture is beloved in Japan — it's not settling, it's participating in something uniquely Japanese.",
            tip: "7-Eleven, Lawson, and FamilyMart in Japan offer hot dishes, fresh sushi, and quality snacks at astonishing prices."
          },
          {
            text: "Skip dinner and wait until you meet other travelers at the hostel tomorrow",
            effects: { safety: 0, confidence: -10, cultural: -10, budget: 0 },
            outcome: "You go to bed hungry and miss one of the world's greatest food cultures out of social anxiety.",
            why: "Letting self-consciousness dictate your travel choices is the single biggest barrier to transformative experiences.",
            tip: "A standing sushi bar (kaiten-zushi) is a perfect solo starter — no awkward seating and incredibly delicious."
          }
        ]
      },

      {
        title: "Rush Hour Discomfort",
        question: "During Tokyo's rush hour, a man on the crowded subway keeps pressing against you despite having space to move. What do you do?",
        options: [
          {
            text: "Move to a women-only train car — marked on the platform during rush hour",
            effects: { safety: 20, confidence: 15, cultural: 10, budget: 0 },
            outcome: "Women-only cars exist precisely for this situation. You finish your journey in complete comfort and relief.",
            why: "Japan proactively created women-only spaces because harassment on transit is a documented global issue — using this resource is smart, not timid.",
            tip: "Look for pink floor markers on the platform indicating the women-only car position — usually near the front of the train."
          },
          {
            text: "Loudly say 'Yamete kudasai!' (Please stop!) and step away firmly",
            effects: { safety: 10, confidence: 20, cultural: 5, budget: 0 },
            outcome: "In Japan, public attention on an offender is highly effective. The man immediately steps away.",
            why: "Audible, clear refusal is a globally effective deterrent. Using the local language makes it even more powerful.",
            tip: "'Chikan desu!' (This is groping!) is specifically recognized in Japan and will draw immediate bystander support."
          },
          {
            text: "Stay silent and endure it to avoid making a scene",
            effects: { safety: -15, confidence: -15, cultural: 0, budget: 0 },
            outcome: "The man continues, emboldened by your silence. You feel unsafe and shaken for hours afterward.",
            why: "Silence is often misread as permission. Your safety and comfort always take priority over perceived social awkwardness.",
            tip: "You never have to endure harassment. Both the women-only car and speaking up loudly are valid, supported choices in Japan."
          },
          {
            text: "Get off at the next stop and wait for a less-crowded train",
            effects: { safety: 10, confidence: 5, cultural: 5, budget: 0 },
            outcome: "You remove yourself from an uncomfortable situation. The next train is noticeably more comfortable.",
            why: "Removing yourself from a situation you can't directly control is always a valid, empowered choice.",
            tip: "Off-peak travel (9:30 AM–4 PM or after 8 PM) is dramatically more comfortable on Tokyo's subway lines."
          }
        ]
      },

      {
        title: "Unwanted Contact on the Osaka Metro",
        question: "You're on a crowded Osaka Metro train during rush hour when you realize someone pressed behind you is making deliberate, uncomfortable contact. What do you do?",
        options: [
          {
            text: "Move immediately to the women-only car (marked with pink signs on the platform)",
            effects: { safety: 20, confidence: 15, cultural: 10, budget: 0 },
            outcome: "The women-only car is nearly empty and calm. You travel the rest of the way without incident.",
            why: "Japan's women-only train cars (女性専用車両) exist precisely because of chikan (groping) — using them is smart, not fearful.",
            tip: "Women-only cars operate during rush hours; look for pink markings on the platform floor and signs on the carriage doors."
          },
          {
            text: "Turn, look directly at the person, and loudly say 'Yamete!' (Stop!) or 'Chikan desu!' (This person is a groper!)",
            effects: { safety: 10, confidence: 20, cultural: 5, budget: 0 },
            outcome: "The public call-out causes the person to move away immediately. Several bystanders step in to help.",
            why: "In Japan, public shame is a powerful deterrent — speaking out shifts social pressure immediately onto the harasser.",
            tip: "The phrase 'Chikan desu!' is widely understood and will alert bystanders and station staff to intervene."
          },
          {
            text: "Stay silent and try to shift position without causing a scene",
            effects: { safety: -10, confidence: -15, cultural: 0, budget: 0 },
            outcome: "The discomfort continues for the rest of the journey. Staying silent sends no signal.",
            why: "Silence in harassment situations is rarely a safe strategy — the behavior tends to continue or escalate.",
            tip: "Japanese police (keisatsu) take groping reports seriously. At the next station, find staff and file a report — even if the person has left."
          },
          {
            text: "Get off at the very next stop even if it's not your destination",
            effects: { safety: 5, confidence: 0, cultural: 0, budget: -5 },
            outcome: "You leave the immediate situation but lose time and may have to pay a fare difference.",
            why: "Leaving is always valid, but using the women-only car is a more efficient solution that doesn't disrupt your journey.",
            tip: "Japan's anti-groping hotline (0120-8103-77) is available 24/7 and can direct you to the nearest police contact."
          }
        ]
      },

      {
        title: "Protest Route Near Shinjuku",
        question: "Your hotel concierge mentions a large political demonstration is scheduled along your planned route through Shinjuku today. What do you do?",
        options: [
          {
            text: "Research the protest on NHK World News and adjust your route to avoid it entirely",
            effects: { safety: 15, confidence: 10, cultural: 5, budget: 0 },
            outcome: "You find an alternate route and reach your destination without disruption. You spot peaceful marchers from a safe distance.",
            why: "In Japan, political demonstrations are generally peaceful and heavily police-managed — but crowds create transit delays and can be unpredictable.",
            tip: "Check NHK World News and the Japan Times app each morning for current events — major demonstrations are always reported in advance."
          },
          {
            text: "Walk to the edge of the march to observe Japanese civic culture from a safe distance",
            effects: { safety: 0, confidence: 10, cultural: 15, budget: 0 },
            outcome: "The protest is orderly and peaceful. You witness an interesting side of Japanese civic life.",
            why: "Japan's Public Safety Act strictly regulates demonstrations — confrontations with police are extremely rare, but stay near exits.",
            tip: "Demonstrations in Japan are heavily permitted and policed — crowd violence is rare, but solo female observers should stay near side streets with clear exit routes."
          },
          {
            text: "Join the protest out of solidarity with the cause",
            effects: { safety: -10, confidence: 5, cultural: -10, budget: 0 },
            outcome: "Participating in a political demonstration as a foreign visitor can create legal and visa complications.",
            why: "Japan's immigration law allows tourists to be refused reentry or have visas affected for participation in political activities — observe, don't participate.",
            tip: "Foreign nationals in Japan should be cautious about participating in political activities — photography and observation are fine, but active participation can affect your immigration status."
          },
          {
            text: "Ignore the warning and follow your original route as planned",
            effects: { safety: -5, confidence: 0, cultural: -5, budget: -5 },
            outcome: "You get caught in demonstration-related metro station closures and miss your timed reservation.",
            why: "Protests in Japan regularly close metro stations and reroute buses — not checking local news costs you time and money.",
            tip: "Download the Tokyo Metro app and NAVITIME Japan — both show real-time station closures and alternative routes during disruptions."
          }
        ]
      },

      {
        title: "Traditional Dining Customs in Kyoto",
        question: "You've found a beautiful kappo restaurant in Gion. The owner greets you at the entrance. Which approach best shows cultural awareness — and how do you handle food and water decisions?",
        options: [
          {
            text: "Bow slightly, remove shoes at the genkan entryway, and say 'Ohitori sama desu ga, yoroshii deshou ka?' (I'm alone — is that alright?)",
            effects: { safety: 5, confidence: 10, cultural: 20, budget: 0 },
            outcome: "The owner visibly appreciates your effort and shows you a beautiful counter seat with a kitchen view.",
            why: "Ohitori-sama (solo dining) culture is respected in Japan — using the correct phrase shows you understand the custom.",
            tip: "Japan's tap water is among the cleanest in the world — tap water (suido-sui) in any Japanese city is completely safe to drink. Skip the bottled water."
          },
          {
            text: "Walk in and point to a free table to indicate where you'd like to sit",
            effects: { safety: 0, confidence: 5, cultural: -10, budget: 0 },
            outcome: "The staff seems uncomfortable. Pointing with a single finger is considered impolite in Japan.",
            why: "Pointing with one finger is considered rude in Japan — use an open hand to gesture direction, or bow-nod to indicate a preference.",
            tip: "Street food in Japan (yakitori, takoyaki, festival stalls) is extremely safe — yatai vendors follow strict city hygiene regulations. Hot, freshly cooked food is your safest choice."
          },
          {
            text: "Stick to convenience store food to avoid any cultural missteps in a traditional restaurant",
            effects: { safety: 5, confidence: -10, cultural: -10, budget: 10 },
            outcome: "You save money but miss a genuine experience. Japan's counter-dining culture is specifically designed to welcome solo diners.",
            why: "Sushi bars, ramen counters, and kappo restaurants all embrace ohitori-sama culture — you'll rarely feel awkward dining alone in Japan.",
            tip: "Avoid sticking your chopsticks upright in rice (funeral symbolism) or passing food chopstick-to-chopstick — set them on the provided rest instead."
          },
          {
            text: "Bow deeply multiple times, ask many questions about every ingredient, and request a fork",
            effects: { safety: 0, confidence: 0, cultural: -15, budget: 0 },
            outcome: "Excessive bowing and interrogating the menu creates a tense atmosphere. One brief bow is the right greeting level for a restaurant.",
            why: "Over-bowing and questioning the chef's menu choices is seen as distrust of the establishment — a nod-and-bow is the appropriate greeting.",
            tip: "Raw fish from licensed Japanese restaurants is safe — Japan has some of the world's strictest food hygiene regulations. Trust the kitchen."
          }
        ]
      }

    ]
  },

  /* ─────────────────────────── FRANCE ────────────────────────── */
  FRA: {
    name: "France",
    flag: "🇫🇷",
    scenarios: [

      {
        title: "Arriving in Paris After Dark",
        question: "Your flight lands late at Charles de Gaulle airport. You need to reach your hotel in central Paris. What's your plan?",
        options: [
          {
            text: "Take the RER B train — direct to central Paris, inexpensive, well-used",
            effects: { safety: 5, confidence: 10, cultural: 5, budget: 15 },
            outcome: "The RER B gets you into central Paris in 40 minutes. Busy enough at most hours to feel safe and secure.",
            why: "Well-trafficked public transit routes offer natural safety through the presence of other passengers at almost any hour.",
            tip: "Buy your ticket at the airport before boarding — it covers the full RER B journey into central Paris."
          },
          {
            text: "Use the official airport taxi rank — licensed, metered, regulated",
            effects: { safety: 15, confidence: 10, cultural: 0, budget: -10 },
            outcome: "The professional driver takes the direct route. You arrive relaxed and at a known, fair price.",
            why: "Official taxi stands eliminate the risk of being overcharged or misdirected — a small premium worth paying at night.",
            tip: "Paris taxis have fixed rates from CDG to central Paris. Confirm the fare range before you set off."
          },
          {
            text: "Pre-book a ride via Uber or Bolt — door-to-door with a tracked trip",
            effects: { safety: 15, confidence: 15, cultural: 0, budget: -5 },
            outcome: "Your pre-booked driver is waiting with your name on a sign. Stress-free, tracked, and comfortable.",
            why: "Ride apps provide a digital record of your route, driver identity, and journey — all meaningful safety advantages.",
            tip: "Screenshot your driver's details and share them with someone at home before every ride in a new city."
          },
          {
            text: "Accept a ride from the unofficial taxi tout who approached you at arrivals",
            effects: { safety: -20, confidence: -10, cultural: -5, budget: -20 },
            outcome: "The driver takes a very long route and charges three times the normal fare. You arrive rattled and over budget.",
            why: "Unlicensed transport is one of the most common ways travelers are exploited, particularly late at night.",
            tip: "Never accept rides from anyone who approaches you — always go to official stands or pre-book a verified driver."
          }
        ]
      },

      {
        title: "The Parisian Café",
        question: "You sit at a classic Parisian café. The server gives you a curt look when you don't immediately order. What do you do?",
        options: [
          {
            text: "Say 'Bonjour!' warmly and attempt to order in French, even imperfectly",
            effects: { safety: 0, confidence: 15, cultural: 20, budget: 0 },
            outcome: "The server's demeanor softens visibly. Your effort, however imperfect, is genuinely and warmly appreciated.",
            why: "Starting any interaction with 'Bonjour' is the single most important cultural norm in France — it signals basic respect.",
            tip: "Even just 'Bonjour, un café s'il vous plaît' (Hello, one coffee please) transforms how you're received everywhere in France."
          },
          {
            text: "Speak English directly and confidently — you're a tourist, it's expected",
            effects: { safety: 0, confidence: 10, cultural: 5, budget: 0 },
            outcome: "The server switches to competent English. The exchange is functional, if a little transactional.",
            why: "Confidence is always an asset, but even a simple French greeting first makes interactions noticeably warmer.",
            tip: "'Excusez-moi, parlez-vous anglais?' (Excuse me, do you speak English?) is polite and almost always gets a yes."
          },
          {
            text: "Get flustered and leave, feeling too intimidated to order",
            effects: { safety: 0, confidence: -15, cultural: -10, budget: 0 },
            outcome: "You miss one of the great pleasures of Paris — the café as a daily ritual and cultural sanctuary.",
            why: "Fear of judgment is the most common reason women limit their own travel experiences — and the most regrettable.",
            tip: "Parisian directness is cultural, not personal. A warm smile and 'Bonjour' will soften almost any interaction."
          },
          {
            text: "Show the server your phone with a translation app open",
            effects: { safety: 0, confidence: 5, cultural: 10, budget: 0 },
            outcome: "The server chuckles and helps you order. Technology bridges the gap effectively enough.",
            why: "Using available tools to communicate respectfully shows initiative and genuine effort — that matters.",
            tip: "Google Translate's camera feature can translate French menus in real time — genuinely useful throughout the trip."
          }
        ]
      },

      {
        title: "Aggressive Vendors Near the Eiffel Tower",
        question: "Near a major landmark, men are approaching you repeatedly, grabbing your arm and trying to sell trinkets or force friendship bracelets onto your wrist. What do you do?",
        options: [
          {
            text: "Walk assertively with no eye contact, repeat 'Non merci' firmly without slowing",
            effects: { safety: 10, confidence: 20, cultural: 10, budget: 5 },
            outcome: "Your body language signals confidence and clarity. Most vendors quickly shift their attention elsewhere.",
            why: "Assertive, non-confrontational refusal is consistently the most effective response to aggressive vending and street harassment.",
            tip: "Walk with purpose and keep your bag close. Hesitation signals that you can be engaged or followed."
          },
          {
            text: "Engage politely and try to explain you're not interested",
            effects: { safety: -5, confidence: -5, cultural: 5, budget: -15 },
            outcome: "Engaging invites sustained pressure. You end up buying an overpriced trinket simply to end the interaction.",
            why: "In high-pressure environments, even polite engagement is often read as encouragement — not a path to resolution.",
            tip: "You are never obligated to purchase anything from street vendors. 'Non merci' repeated firmly is a complete sentence."
          },
          {
            text: "Step into the nearest café or museum entrance until they move on",
            effects: { safety: 15, confidence: 10, cultural: 5, budget: -5 },
            outcome: "You enjoy a quiet coffee and emerge to find the pressure has moved elsewhere. A smart tactical pause.",
            why: "Removing yourself from a harassment environment is always a valid and empowered choice.",
            tip: "Paris's museums are extraordinary — and often free for under-26 EU residents. Always worth stepping inside."
          },
          {
            text: "Give a small amount hoping they'll leave you alone afterward",
            effects: { safety: -10, confidence: -15, cultural: -5, budget: -20 },
            outcome: "Paying signals that this tactic works on you. You spend the rest of the afternoon being approached relentlessly.",
            why: "Any payment confirms the approach works — it always results in more of the same behavior.",
            tip: "Plan major landmark visits for early morning when crowds (and vendors) are thinner. Dawn at the Eiffel Tower is magical."
          }
        ]
      },

      {
        title: "Budget Crunch in Paris",
        question: "You're running low on funds halfway through your Paris trip. How do you make the most of your remaining days?",
        options: [
          {
            text: "Visit free museums — many Paris museums are free on the first Sunday of each month",
            effects: { safety: 5, confidence: 10, cultural: 20, budget: 15 },
            outcome: "You spend an extraordinary day at the Louvre for free and discover smaller museums that become trip highlights.",
            why: "Knowing about free cultural resources maximizes both your experience and your budget — it's the savviest kind of travel.",
            tip: "The Louvre, Musée d'Orsay, and Centre Pompidou are all free on the first Sunday. Plan your Paris dates around this."
          },
          {
            text: "Book a last-minute group tour — at least your remaining time will be structured",
            effects: { safety: 5, confidence: 5, cultural: 10, budget: -15 },
            outcome: "The tour is efficient but rushes you through places you'd love to linger in for hours.",
            why: "Tours have value but self-guided exploration of free sites typically yields deeper, more personal experiences.",
            tip: "Free walking tours (tip-only) exist in most Paris neighborhoods and are led by passionate local guides."
          },
          {
            text: "Stay in your accommodation most of the time to conserve every euro",
            effects: { safety: 10, confidence: -10, cultural: -10, budget: 10 },
            outcome: "You save money but spend precious Paris days on your phone, watching a city unfold without you.",
            why: "Paris's greatest assets are free: its streets, architecture, parks, and light. You don't need money to experience them.",
            tip: "Jardin du Luxembourg, Canal Saint-Martin, and Montmartre are all free, beautiful, and deeply Parisian."
          },
          {
            text: "Explore local markets, picnic in parks, and walk the city's neighborhoods",
            effects: { safety: 5, confidence: 15, cultural: 15, budget: 20 },
            outcome: "You discover a more authentic Paris — locals in parks, fresh produce, the Seine at golden hour. Some of your best memories.",
            why: "Budget constraints often force the best discoveries. Local life is far richer than the tourist circuit.",
            tip: "Marché d'Aligre and Rue Mouffetard are beloved local food markets where you can eat like a Parisian on very little."
          }
        ]
      },

      {
        title: "Street Harassment Near Sacré-Cœur",
        question: "You're walking toward Sacré-Cœur in Montmartre when a man starts following you up the steps, making persistent comments and repeatedly asking where you're from. What do you do?",
        options: [
          {
            text: "Walk confidently into the nearest café or shop without making eye contact or responding",
            effects: { safety: 15, confidence: 10, cultural: 5, budget: -5 },
            outcome: "The follower gives up when you enter a staffed space. The café owner notices and nods reassuringly.",
            why: "Entering a staffed public space is the most reliable response to street following — it removes your isolation instantly.",
            tip: "Street harassment (outrage sexiste) has been illegal in France since 2018. Report incidents via the Stop-Harcèlement de Rue app or at any commissariat de police."
          },
          {
            text: "Turn, make firm eye contact, and say clearly: 'Laissez-moi tranquille' (Leave me alone)",
            effects: { safety: 10, confidence: 20, cultural: 5, budget: 0 },
            outcome: "The direct, firm response causes immediate backing off. Other pedestrians visibly approve of your assertiveness.",
            why: "France's 2018 anti-harassment law (Loi Schiappa) normalizes direct confrontation — bystander intervention in Paris is increasingly common.",
            tip: "Carrying pepper spray (bombe lacrymogène) is legal in France for adults — available at armureries (licensed gun shops) and some sporting goods stores."
          },
          {
            text: "Give a brief, polite response hoping to satisfy his curiosity and be left alone",
            effects: { safety: -10, confidence: -10, cultural: -5, budget: 0 },
            outcome: "Brief polite engagement is read as openness. The attention intensifies and you feel increasingly trapped.",
            why: "Engaging at all — even briefly — signals willingness to interact and prolongs the situation.",
            tip: "Non-verbal non-engagement — no eye contact, no response, confident pace toward a public space — is the most effective combination."
          },
          {
            text: "Call the police on 17 (Police Secours) immediately while still on the street",
            effects: { safety: 5, confidence: 5, cultural: 0, budget: 0 },
            outcome: "Police response in tourist areas varies, but the call creates an official record and can deter the harasser.",
            why: "Paris has a dedicated tourist police brigade (Brigade de Répression de la Délinquance contre les Touristes) specifically for incidents in tourist areas.",
            tip: "The European emergency number 112 works across France and all EU countries for police, fire, and medical emergencies."
          }
        ]
      },

      {
        title: "Navigating a Paris Transport Strike",
        question: "You wake up to news of a nationwide SNCF rail strike affecting trains and several metro lines. You have a full day trip to Versailles planned. What do you do?",
        options: [
          {
            text: "Check the SNCF Connect and RATP apps for real-time updates, then take whichever line is running (or rent a Vélib' city bike)",
            effects: { safety: 5, confidence: 15, cultural: 10, budget: -5 },
            outcome: "You adapt and still reach Versailles via a running RER line. Flexibility and preparation pay off.",
            why: "French transport strikes (grèves) are legally required to give 48 hours notice — advance planning is almost always possible if you check the night before.",
            tip: "Always book French train tickets as refundable (échangeable/remboursable) — strike refunds are automatic but only for refundable fares."
          },
          {
            text: "Take a rideshare (Uber or Bolt) at surge pricing",
            effects: { safety: 10, confidence: 0, cultural: 0, budget: -25 },
            outcome: "You arrive comfortably but pay significantly more than planned.",
            why: "During strike days, rideshares surge 2–4x — expensive but reliable. Having both Uber and Bolt installed means you can compare prices.",
            tip: "France has a strong strike culture enshrined in law (droit de grève) — political demonstrations and strikes are frequent but typically peaceful and announced in advance."
          },
          {
            text: "Go to Gare Saint-Lazare and hope a train is running without checking first",
            effects: { safety: -5, confidence: -10, cultural: -5, budget: -5 },
            outcome: "The station is packed with frustrated travelers. Your day is mostly spent waiting in queues with no trip achieved.",
            why: "Not checking strike status before major rail travel is one of the most avoidable trip disruptions in France.",
            tip: "France's political landscape (Macron's centrists, left-wing coalition, Marine Le Pen's National Rally) produces regular large demonstrations — these are generally peaceful but can close roads and metro stations."
          },
          {
            text: "Cancel the day trip and attempt to join a political protest you pass on the street out of curiosity",
            effects: { safety: -15, confidence: -5, cultural: -10, budget: 0 },
            outcome: "French protests can escalate into clashes with riot police (CRS) without warning. As a foreign national, you risk detention.",
            why: "While most French demonstrations are peaceful, CRS riot police responses can be unpredictable — and foreign nationals can be detained for active participation.",
            tip: "Non-EU visitors participating in French political demonstrations can face legal complications including deportation proceedings. Photography and distant observation are generally fine."
          }
        ]
      },

      {
        title: "Café Customs and the Art of Bonjour",
        question: "You sit down at a Left Bank café and the waiter seems cold and dismissive. You want free tap water, you're unsure about the 'OK' hand gesture a local just used, and you spotted enticing street crêpes outside. How do you navigate this?",
        options: [
          {
            text: "Greet the waiter with 'Bonjour Monsieur' before anything else, then confidently order 'une carafe d'eau, s'il vous plaît' (a jug of free tap water)",
            effects: { safety: 0, confidence: 15, cultural: 20, budget: 5 },
            outcome: "The waiter's demeanor shifts noticeably. You get free water, skip the expensive bottled option, and the service becomes warm.",
            why: "In France, saying 'Bonjour' before anything else is non-optional — skipping it is the single most common reason tourists receive cold service.",
            tip: "Paris tap water is among Europe's cleanest and is your legal right to request free at any restaurant. 'Une carafe d'eau' saves €3–6 per meal."
          },
          {
            text: "Get the waiter's attention by snapping your fingers, then ask for bottled water only",
            effects: { safety: 0, confidence: 5, cultural: -20, budget: -10 },
            outcome: "The waiter is visibly offended and service deteriorates for the rest of your meal.",
            why: "Snapping fingers, whistling, or clicking at French service workers is deeply disrespectful — it implies servitude rather than service.",
            tip: "The 'OK' hand gesture (circle with thumb and index finger) means 'zero' or 'worthless' in France — not approval. Use a thumbs up (pouce en l'air) instead."
          },
          {
            text: "Greet warmly, order free tap water, and afterwards try the licensed street crêpes from the vendor outside",
            effects: { safety: 0, confidence: 10, cultural: 15, budget: 5 },
            outcome: "A genuinely pleasant Parisian afternoon — great coffee, free water, and an excellent street crêpe.",
            why: "Licensed street food vendors in Paris (look for city-issued permits) operate under strict food hygiene inspections — they are safe and delicious.",
            tip: "Be cautious with meat or egg dishes at outdoor market stalls sitting in warm weather without refrigeration. Fresh crêpes cooked to order are always a safe choice."
          },
          {
            text: "Avoid the café entirely due to the waiter's attitude and eat only from supermarkets to avoid cultural misunderstandings",
            effects: { safety: 5, confidence: -15, cultural: -15, budget: 10 },
            outcome: "You save money but miss the quintessential Parisian café experience. French directness is rarely personal.",
            why: "French service can seem cold to visitors — this is cultural directness, not hostility. Café culture is central to French social life and worth learning to navigate.",
            tip: "Avoid drinking tap water from bathroom sink taps in older Paris buildings — use kitchen taps, which are always filtered and safe."
          }
        ]
      }

    ]
  },

  /* ─────────────────────────── BRAZIL ────────────────────────── */
  BRA: {
    name: "Brazil",
    flag: "🇧🇷",
    scenarios: [

      {
        title: "First Morning in Rio de Janeiro",
        question: "You've just arrived in Rio de Janeiro, buzzing with excitement but mindful of the city's reputation. How do you plan your first full day?",
        options: [
          {
            text: "Join a small group day tour organized by your hostel",
            effects: { safety: 15, confidence: 10, cultural: 15, budget: -10 },
            outcome: "Your guide shares invaluable real-time local knowledge. You see the city through local eyes and feel oriented from day one.",
            why: "Local guides provide context about risk and opportunity that no app or guidebook can replicate — priceless for a first arrival.",
            tip: "Ask hostel staff which neighborhoods to avoid at which hours — this advice is far more current than any published guide."
          },
          {
            text: "Ask your accommodation for a thorough safety briefing before stepping out",
            effects: { safety: 20, confidence: 15, cultural: 10, budget: 0 },
            outcome: "You learn the safe zones, the trusted taxi apps, the best local spots. You leave prepared and genuinely confident.",
            why: "Accommodation staff have your safety interest at heart and their local knowledge is your most reliable on-the-ground resource.",
            tip: "Save your accommodation's number and share your rough itinerary with them daily — they can be a genuine lifeline."
          },
          {
            text: "Head straight to Copacabana beach with your camera, passport, and spending cash",
            effects: { safety: -20, confidence: -5, cultural: 0, budget: -15 },
            outcome: "You become a target. Losing your passport and most of your cash derails the entire rest of your trip.",
            why: "Carrying irreplaceable documents and visible valuables on tourist beaches is an avoidable and serious risk in any city.",
            tip: "Leave your passport in the hotel safe. Carry only a small amount of cash and a secondary, budget-friendly phone to the beach."
          },
          {
            text: "Spend your first morning researching safe areas and walking routes before exploring",
            effects: { safety: 10, confidence: 15, cultural: 10, budget: 5 },
            outcome: "Your prepared approach pays off. You explore confidently and recognize when something feels off.",
            why: "Informed travelers are meaningfully safer travelers. Preparation is the true foundation of confident solo travel.",
            tip: "Santa Teresa, Leblon, and Ipanema are generally considered among Rio's safest neighborhoods for solo daytime exploration."
          }
        ]
      },

      {
        title: "Beach Day on Ipanema",
        question: "It's your big beach day at Ipanema! How do you handle your belongings while you swim?",
        options: [
          {
            text: "Bring only a small amount of cash and a cheap phone — leave everything else locked at the hostel",
            effects: { safety: 20, confidence: 15, cultural: 0, budget: 10 },
            outcome: "You swim freely and without anxiety, completely enjoying your beach day from first to last minute.",
            why: "Only bring what you can afford to lose — this simple mindset converts beach anxiety directly into freedom.",
            tip: "A cheap waterproof phone pouch worn while swimming means you never have to leave anything unattended on the sand."
          },
          {
            text: "Leave all valuables in the hostel safe and bring only bare essentials",
            effects: { safety: 25, confidence: 15, cultural: 0, budget: 5 },
            outcome: "Your most relaxed beach day yet — zero concern about your belongings the entire time.",
            why: "Hotel safes exist precisely for this. Using them is smart travel, not excessive caution.",
            tip: "Ask your accommodation if they have a beach locker or safe specifically sized for essentials — many do."
          },
          {
            text: "Bring your DSLR camera to capture the beautiful beach scenery",
            effects: { safety: -20, confidence: 5, cultural: 5, budget: -10 },
            outcome: "Your camera attracts immediate attention and is snatched while you wade into the water.",
            why: "Expensive visible equipment is one of the strongest risk factors for theft at busy tourist beaches worldwide.",
            tip: "Rent a GoPro-style waterproof camera locally for beach days — far less of a target and much more practical in water."
          },
          {
            text: "Ask friendly-looking beachgoers nearby to keep an eye on your things while you swim",
            effects: { safety: -5, confidence: 5, cultural: 10, budget: 0 },
            outcome: "Most of your things are there when you return — but your cash is noticeably lighter.",
            why: "Strangers have no reliable ability to protect your belongings, regardless of how warm they seem.",
            tip: "Brazilian beach culture is genuinely warm and social — but always keep anything irreplaceable on your person."
          }
        ]
      },

      {
        title: "Stumbling Upon a Samba Festival",
        question: "Wandering a local neighborhood, you stumble upon a vibrant street Samba festival in full swing. What do you do?",
        options: [
          {
            text: "Observe the atmosphere for 10 minutes first, then join in if it feels genuinely safe and welcoming",
            effects: { safety: 5, confidence: 20, cultural: 20, budget: 0 },
            outcome: "You dance and laugh with locals, and it becomes the highlight of your entire trip — a spontaneous, irreplaceable memory.",
            why: "Reading the environment before committing is a real skill. When the situation feels right, spontaneous moments are irreplaceable.",
            tip: "A mixed crowd (families, older people, children, tourists) is generally a positive safety signal at street events."
          },
          {
            text: "Watch from a well-lit, busy area and take in the energy from a comfortable distance",
            effects: { safety: 15, confidence: 10, cultural: 15, budget: 0 },
            outcome: "You absorb the spectacle and connect with other observers. A perfect blend of caution and genuine cultural experience.",
            why: "You can fully experience a cultural moment without being at its center — your position matters as much as your presence.",
            tip: "Standing near a local family or another group of travelers while observing gives you natural social anchoring."
          },
          {
            text: "Leave immediately — you assume all spontaneous street events in Brazil are dangerous",
            effects: { safety: 5, confidence: -15, cultural: -15, budget: 0 },
            outcome: "You later hear other travelers describe an incredible night at exactly that festival.",
            why: "Reflexive avoidance driven by fear and generalisation limits your world. Not all unfamiliar situations are dangerous.",
            tip: "Brazil has one of the world's richest street cultures. Blanket avoidance means missing some of the most joyful experiences on earth."
          },
          {
            text: "Accept every drink offered by enthusiastic strangers — everyone seems so friendly!",
            effects: { safety: -20, confidence: -5, cultural: 5, budget: -5 },
            outcome: "You feel unwell later in the evening. Always know where your drink came from in any crowd.",
            why: "Never accept open drinks from strangers — this is a universal safety rule for women in any country, any setting.",
            tip: "At Brazilian festivals, buy your own caipirinha from a visible vendor and keep it in your hand at all times."
          }
        ]
      },

      {
        title: "Evening Transport",
        question: "It's evening and you need to get from your accommodation to a restaurant 15 minutes away. How do you travel?",
        options: [
          {
            text: "Use 99 or Uber — book a verified driver with full trip tracking",
            effects: { safety: 20, confidence: 15, cultural: 5, budget: -5 },
            outcome: "Your verified driver arrives promptly. You share the live trip with a friend and arrive safely and on time.",
            why: "Ride-hailing apps provide digital accountability — your route, driver identity, and location are all trackable in real time.",
            tip: "Share your live trip via the app's share feature with someone you trust before every night journey in a new city."
          },
          {
            text: "Walk — it looks close on the map and you could use the fresh air",
            effects: { safety: -15, confidence: 5, cultural: 5, budget: 10 },
            outcome: "What looks like 15 minutes on the map leads you through poorly lit streets for nearly 30 minutes after dark.",
            why: "Map distance doesn't capture real-world pedestrian safety. Always research the route before walking at night in any city.",
            tip: "In most Brazilian cities, walking alone after dark is not recommended regardless of how short the distance appears."
          },
          {
            text: "Ask your hostel to call their trusted local taxi contact for you",
            effects: { safety: 20, confidence: 10, cultural: 5, budget: -5 },
            outcome: "The recommended driver is courteous, knows the city well, and your accommodation vouches personally for him.",
            why: "Accommodation-recommended drivers are vetted by people invested in your safety — this trust chain is genuinely valuable.",
            tip: "Build a relationship with your accommodation's taxi contact. A trusted driver in a new city is one of your best travel assets."
          },
          {
            text: "Accept the friendly offer of a ride from someone who approaches you at your door",
            effects: { safety: -25, confidence: -10, cultural: -5, budget: -5 },
            outcome: "The route becomes unclear and increasingly uncomfortable. This is one of the highest-risk situations for solo travelers.",
            why: "Unsolicited offers of transport are consistently among the highest risk scenarios documented for women travelers globally.",
            tip: "Never get into a vehicle with someone who approaches you unsolicited. Only use verified, booked, or accommodation-recommended transport."
          }
        ]
      },

      {
        title: "Unwanted Attention on Ipanema Beach",
        question: "You're walking along Ipanema beach when a man begins following you, matching your pace and making persistent comments. He shows no sign of stopping. What do you do?",
        options: [
          {
            text: "Walk directly toward a group of families or a beach kiosk and position yourself among people",
            effects: { safety: 20, confidence: 10, cultural: 5, budget: 0 },
            outcome: "The follower backs off immediately when you join a visible, populated area. Beach kiosk vendors look out for each other.",
            why: "In Brazil, staying within visible groups is one of the most effective deterrents — harassers rely on isolation.",
            tip: "Brazil's Maria da Penha Law (Lei 11.340) provides strong legal protections for women. Polícia Militar are legally obligated to respond to harassment complaints."
          },
          {
            text: "Turn, make firm direct eye contact, and say clearly: 'Me deixa em paz' (Leave me alone)",
            effects: { safety: 10, confidence: 20, cultural: 5, budget: 0 },
            outcome: "The direct, firm response works. Nearby bystanders nod approvingly.",
            why: "Brazil has been strengthening anti-harassment laws — direct verbal assertiveness is increasingly normalized and backed by bystanders.",
            tip: "Pepper spray (spray de pimenta) is legal in Brazil for self-defense. Purchase it at pharmacies or sporting goods stores before visiting beaches or isolated areas."
          },
          {
            text: "Smile back politely and give a brief friendly response to de-escalate",
            effects: { safety: -15, confidence: -10, cultural: 0, budget: 0 },
            outcome: "The friendly response is misread as romantic interest. The attention becomes more intense and harder to shake.",
            why: "In Brazilian street culture, brief friendly engagement with an unknown man is frequently read as romantic openness — non-engagement is safer.",
            tip: "If you are robbed, do NOT fight back or resist — give up your valuables immediately. Brazilian street crime rarely becomes violent when compliance is immediate."
          },
          {
            text: "Attempt to film the person with your phone as evidence for a report",
            effects: { safety: -10, confidence: 5, cultural: -5, budget: 0 },
            outcome: "Attempting to film can escalate the confrontation and attract attention from people who misread the situation.",
            why: "In Brazil, filming harassers in public can escalate confrontations — verbal assertiveness or moving to safety is more consistently effective.",
            tip: "Brazil's Delegacia da Mulher (Women's Police Station) exists in all major Brazilian cities specifically for crimes against women — more experienced than general police stations."
          }
        ]
      },

      {
        title: "Political Demonstration on Paulista Avenue",
        question: "You're in central São Paulo and notice a large political demonstration forming near Avenida Paulista — you can see rival PT (red flags) and Bolsonaro supporter (green-yellow) groups converging. What do you do?",
        options: [
          {
            text: "Check Globo News or UOL immediately and reroute to avoid the demonstration area entirely",
            effects: { safety: 15, confidence: 10, cultural: 5, budget: 0 },
            outcome: "Smart call. Paulista Avenue demonstrations between rival political factions have turned confrontational since 2022.",
            why: "Brazil's political polarization between PT (Lula/left) and PL (Bolsonaro/right) has produced heated confrontations — rival groups at the same location is a warning sign.",
            tip: "Download Google News Brazil and follow @g1 (Globo's news account) for real-time protest updates — demonstrations on Paulista Avenue are a regular occurrence."
          },
          {
            text: "Watch from inside a nearby café at a safe distance to observe Brazilian civic culture",
            effects: { safety: 5, confidence: 5, cultural: 15, budget: -5 },
            outcome: "Observing from inside a café gives you genuine insight into Brazil's intensely political culture without risk.",
            why: "Brazil has one of Latin America's most engaged political populations — demonstrations are culturally significant and safe to observe from a distance.",
            tip: "Brazil's constitution protects the right to protest, but Polícia Militar use of force during large demonstrations has been documented — always maintain a buffer distance."
          },
          {
            text: "Walk directly through the crowd to reach your destination more quickly",
            effects: { safety: -25, confidence: -10, cultural: -5, budget: 0 },
            outcome: "You get caught between rival factions. Police use tear gas to separate groups. Leaving safely takes over an hour.",
            why: "Walking through politically polarized demonstrations in Brazil is genuinely dangerous — rival groups and police tear gas are both unpredictable.",
            tip: "Brazil's Lei de Segurança Nacional can be applied to foreign nationals in serious political incidents — contact your embassy immediately if detained during a demonstration."
          },
          {
            text: "Ask locals nearby if it's safe and follow their advice",
            effects: { safety: 5, confidence: 10, cultural: 10, budget: 0 },
            outcome: "Locals happily advise you to wait 20 minutes and take a specific back street. Local knowledge is invaluable.",
            why: "Brazilians are generally warm and helpful to tourists — asking locals for guidance is both culturally appropriate and practically effective.",
            tip: "Register with your country's embassy before traveling in Brazil. The US has STEP (Smart Traveler Enrollment Program); UK travelers use FCDO travel alerts."
          }
        ]
      },

      {
        title: "Street Food and Social Customs in Salvador",
        question: "A friendly local at Salvador's Mercado Modelo invites you to share acarajé (fried black-eyed pea fritter) from her favorite vendor and makes an 'OK' circle sign as she recommends it. You're unsure about the gesture — and the food. What do you do?",
        options: [
          {
            text: "Accept warmly with a thumbs up (never mimic the circle 'OK' gesture), check the vendor is frying in fresh hot oil, and enjoy",
            effects: { safety: 5, confidence: 10, cultural: 20, budget: 5 },
            outcome: "You share a wonderful cultural moment. The acarajé is delicious and safe — freshly fried food is among the safest street food options anywhere.",
            why: "The 'OK' circle sign is deeply offensive in Brazil (equivalent to the middle finger) — your host likely doesn't know the cultural mismatch. Always respond with a thumbs up ('joia!') instead.",
            tip: "Freshly fried street food in Brazil is generally safe — hot oil kills bacteria. Avoid pre-cooked foods sitting at room temperature, and buy cut fresh fruit only from vendors with visible ice."
          },
          {
            text: "Politely decline the food entirely, citing hygiene concerns",
            effects: { safety: 5, confidence: -10, cultural: -20, budget: 0 },
            outcome: "Your host is visibly hurt. You miss a genuine cultural connection over a largely unfounded concern.",
            why: "Brazil's street food culture from busy, high-turnover vendors is generally safe — declining food offered as an act of hospitality is a significant cultural slight.",
            tip: "Tap water in São Paulo and Rio de Janeiro is technically treated and safe. In smaller cities and rural areas, stick to bottled water (água mineral sem gás/com gás)."
          },
          {
            text: "Return the circle 'OK' sign enthusiastically, then point directly at the vendor with one finger to ask about prices",
            effects: { safety: 0, confidence: 0, cultural: -25, budget: 0 },
            outcome: "You've inadvertently deeply offended both your host and the vendor with two culturally offensive gestures in one moment.",
            why: "The 'OK' circle sign in Brazil is equivalent to a middle finger. Pointing directly at a person with one finger is also considered rude — use an open hand gesture or chin-nod instead.",
            tip: "Brazil's greeting culture is warm and physically affectionate — hugs and cheek-to-cheek air kisses (dois beijos) are standard between people who have just met. Pulling away from a warm greeting is considered cold."
          },
          {
            text: "Accept the food but request individually wrapped utensils and ask the vendor detailed questions about preparation",
            effects: { safety: 0, confidence: 5, cultural: -10, budget: 0 },
            outcome: "Your elaborate requests seem distrustful and create unnecessary awkwardness at a busy market stall.",
            why: "Acarajé is traditionally eaten by hand from paper wrapping — excessive hygiene demands at market stalls can be read as distrust of the local food culture.",
            tip: "Ice in restaurants in major Brazilian cities is generally made from filtered water and is safe. In smaller towns, ask 'o gelo é de água filtrada?' (Is the ice from filtered water?) before accepting drinks with ice."
          }
        ]
      }

    ]
  }

};
