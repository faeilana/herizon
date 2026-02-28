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
      }
    ]
  }

};
