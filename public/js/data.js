/**
 * Anaguta Tradomodern - Local Database (js/data.js)
 * Stores authentic dictionary entries, cultural articles, research projects, active event, and gallery media.
 */

const AnagutaData = {
  // 1. Interactive Language Lexicon Entries
  dictionary: [
    {
      id: 1,
      word: "Ujah",
      phonetic: "/oo-JAH/",
      partOfSpeech: "noun",
      meaning: "The paramount monarch, royal ruler, and custodian of the Anaguta Kingdom.",
      category: "Traditions & Archery",
      exampleAnaguta: "Ujah Anaguta tiri ku rigiza nishi.",
      exampleEnglish: "The Ujah of Anaguta blesses the harvest of the people.",
      audioPath: "audio/ujah.mp3"
    },
    {
      id: 2,
      word: "Kinaru",
      phonetic: "/kee-NAH-roo/",
      partOfSpeech: "noun",
      meaning: "Heritage, ancestral lineage, or the unbroken cultural identity of the Anaguta people.",
      category: "Traditions & Archery",
      exampleAnaguta: "Kinaru ka Anaguta bu re zamani.",
      exampleEnglish: "The heritage of Anaguta stands firm across generations.",
      audioPath: "audio/kinaru.mp3"
    },
    {
      id: 3,
      word: "Mba",
      phonetic: "/m-BAH/",
      partOfSpeech: "greeting",
      meaning: "Traditional greeting of respect; hello, greetings, or welcome.",
      category: "Greetings & Social",
      exampleAnaguta: "Mba ba baki nashi!",
      exampleEnglish: "Greetings and welcome to our esteemed guests!",
      audioPath: "audio/mba.mp3"
    },
    {
      id: 4,
      word: "Tukwi",
      phonetic: "/TOO-kwee/",
      partOfSpeech: "noun",
      meaning: "Traditional hunting and war bow, hand-carved from seasoned acacia wood.",
      category: "Traditions & Archery",
      exampleAnaguta: "Tukwi ka babi ri ka taba kpe.",
      exampleEnglish: "The bow of our forefathers protected the hills with courage.",
      audioPath: "audio/tukwi.mp3"
    },
    {
      id: 5,
      word: "Gwash",
      phonetic: "/GWAH-sh/",
      partOfSpeech: "noun",
      meaning: "Granite hills, rocky plateau outcrop, or natural highland fortress.",
      category: "Nature & Wildlife",
      exampleAnaguta: "Gwash Naraguta da gari mai sanyi.",
      exampleEnglish: "The granite hills of Naraguta cradle our ancient settlements.",
      audioPath: "audio/gwash.mp3"
    },
    {
      id: 6,
      word: "Miri",
      phonetic: "/MEE-ree/",
      partOfSpeech: "noun",
      meaning: "Fresh spring water, flowing highland river, or sacred brook.",
      category: "Nature & Wildlife",
      exampleAnaguta: "Miri kaza ri ka sha'an kano.",
      exampleEnglish: "The cool mountain water refreshes the traveling archer.",
      audioPath: "audio/miri.mp3"
    },
    {
      id: 7,
      word: "Biro",
      phonetic: "/BEE-roh/",
      partOfSpeech: "noun",
      meaning: "Family compound, household hearth, or ancestral homestead.",
      category: "Family & Kinship",
      exampleAnaguta: "Biro ka dodo na zama lafiya.",
      exampleEnglish: "Peace and harmony reside within our grandfather's homestead.",
      audioPath: "audio/biro.mp3"
    },
    {
      id: 8,
      word: "Shanu",
      phonetic: "/SHAH-noo/",
      partOfSpeech: "greeting",
      meaning: "Peaceful morning greeting; 'Did you wake well?'",
      category: "Greetings & Social",
      exampleAnaguta: "Shanu gari, mun gode Ubangiji.",
      exampleEnglish: "Good morning; we give thanks for the sunrise.",
      audioPath: "audio/shanu.mp3"
    },
    {
      id: 9,
      word: "Zana",
      phonetic: "/ZAH-nah/",
      partOfSpeech: "noun",
      meaning: "Fonio (Acha grain), the sacred indigenous cereal cultivated on Jos Plateau.",
      category: "Food & Agriculture",
      exampleAnaguta: "Zana na ba da lafiya da karfi.",
      exampleEnglish: "Fonio grain brings nourishment and strength to our youth.",
      audioPath: "audio/zana.mp3"
    },
    {
      id: 10,
      word: "Nishi",
      phonetic: "/NEE-shee/",
      partOfSpeech: "noun",
      meaning: "The Anaguta people collectively; community, brotherhood, and kin.",
      category: "Family & Kinship",
      exampleAnaguta: "Nishi Anaguta suna son juna.",
      exampleEnglish: "The Anaguta people stand united in fraternal love.",
      audioPath: "audio/nishi.mp3"
    },
    {
      id: 11,
      word: "Igbun",
      phonetic: "/EENG-boon/",
      partOfSpeech: "noun",
      meaning: "Arrow quiver woven from treated hide and vegetal fiber, slung over the shoulder.",
      category: "Traditions & Archery",
      exampleAnaguta: "Igbun nashi cike yake da kibau.",
      exampleEnglish: "His quiver is filled with seasoned arrows of precision.",
      audioPath: "audio/igbun.mp3"
    },
    {
      id: 12,
      word: "Kuta",
      phonetic: "/KOO-tah/",
      partOfSpeech: "noun",
      meaning: "Traditional terra-cotta clay pot, skillfully molded by Naraguta master potters.",
      category: "Food & Agriculture",
      exampleAnaguta: "Kuta ta adana ruwan sha mai sanyi.",
      exampleEnglish: "The earthenware pot keeps drinking water naturally cool.",
      audioPath: "audio/kuta.mp3"
    },
    {
      id: 13,
      word: "Ran",
      phonetic: "/RAHN/",
      partOfSpeech: "noun",
      meaning: "Sun, dawn light, or new day.",
      category: "Numbers & Time",
      exampleAnaguta: "Ran ta fito a bayan duwatsun Jos.",
      exampleEnglish: "The sun rises gracefully behind the Jos hills.",
      audioPath: "audio/ran.mp3"
    },
    {
      id: 14,
      word: "Watash",
      phonetic: "/WAH-tash/",
      partOfSpeech: "noun",
      meaning: "Moon, lunar month, or the harvest night festival cycle.",
      category: "Numbers & Time",
      exampleAnaguta: "Watash ya cika da hasken dare.",
      exampleEnglish: "The full moon illuminates the nighttime cultural dance.",
      audioPath: "audio/watash.mp3"
    },
    {
      id: 15,
      word: "San-Kpa",
      phonetic: "/SAHN-kpah/",
      partOfSpeech: "greeting",
      meaning: "Parting farewell; 'Go in strength and peace.'",
      category: "Greetings & Social",
      exampleAnaguta: "San-kpa, har sai mun sake haduwa.",
      exampleEnglish: "Farewell in peace, until our paths cross once again.",
      audioPath: "audio/san-kpa.mp3"
    }
  ],

  // 2. Cultural Essays & Historical Research Articles
  articles: [
    {
      id: "heritage-of-the-bow",
      title: "The Heritage of the Bow: Archery as Sacred Defense and Identity",
      author: "Elder Bitrus Azi & Tradomodern Heritage Lab",
      date: "October 8, 2026",
      readTime: "6 min read",
      category: "Traditions & Regalia",
      image: "images/logo-icon.jpg",
      excerpt: "Unpacking the deep symbolic, tactical, and spiritual significance of the Anaguta recurve bow (Tukwi) and the highland archers who protected Jos Plateau.",
      tags: ["Archery", "Indigenous Defense", "Culture", "Symbolism"],
      content: `
        <p>Throughout the centuries, the Anaguta people—traditionally settled along the rugged granitic ridges of Naraguta and Jos North in Plateau State—were revered across Northern Central Nigeria as legendary archers. Far from being a mere hunting implement or martial weapon, the bow (<em>Tukwi</em>) is the central visual and spiritual emblem of Anaguta self-determination.</p>
        
        <h3>The Anatomy of the Anaguta Bow</h3>
        <p>A master bowmaker selected hardened upland acacia or mountain bamboo seasoned over smoke for three dry seasons. Strings were spun from twisted wild ram sinew treated with indigenous tree resin to resist humidity during the Plateau monsoons. The archer carried an armband featuring the tripartite band of colors: forest green for ancestral soil and mountain forests, white for communal peace and truth, and deep crimson for the sacrificial blood of defenders.</p>
        
        <blockquote>
          "Our ancestors never waged wars of territorial conquest. The bow was forged to safeguard our hearths, our children, and the sacred granaries nested inside Naraguta's rock caverns."
          <footer>— Anaguta Council of Elders Archival Oral History</footer>
        </blockquote>

        <h3>From Battlefield to Festival Regalia</h3>
        <p>Today, in the tradomodern era, the bow has evolved into a triumphant emblem of cultural pride. During the annual Ujah coronation ceremonies and the Anaguta Cultural Carnival, young men and women don traditional woven sashes, armbands, and carry ornamental bows, demonstrating precise distance shooting and honoring the ancestral guardians of Jos North.</p>

        <h3>Preservation for the Modern Generation</h3>
        <p>Through the Tradomodern Project, senior bowmen are now teaching youth apprentices the mathematics of draw weight, timber selection, and traditional fletching techniques, ensuring this living heritage survives intact into the digital age.</p>
      `
    },
    {
      id: "origins-of-the-anaguta",
      title: "Origins and Settlement History of the Naraguta Highland People",
      author: "Dr. Joshua M. Garba",
      date: "September 24, 2026",
      readTime: "8 min read",
      category: "History & Origins",
      image: "images/logo.png",
      excerpt: "A comprehensive historical study into the migrations, rock fortresses, and early metallurgy of the Anaguta (Iguta) people in Jos North.",
      tags: ["History", "Settlement", "Jos North", "Origins"],
      content: `
        <p>The Anaguta (who refer to themselves in their mother tongue as <em>Iguta</em> or <em>Nishi Anaguta</em>) represent one of the foundational indigenous populations inhabiting the northern apex of the Jos Plateau. Their continuous settlement along the Naraguta hill cluster predates colonial cartography by millennia.</p>
        
        <h3>The Highlands as Natural Fortress</h3>
        <p>Geographically situated amidst granitic tors, rocky valleys, and high-altitude plateau breezes, early Anaguta villages utilized the landscape as an ingenious defense infrastructure. Rock shelters provided natural granaries for storing <em>zana</em> (fonio/acha) and sorghums that could withstand siege for months.</p>

        <blockquote>
          "The granite hills did not merely surround us; they shaped our worldview, our language, and our resilience."
        </blockquote>

        <h3>Early Metallurgy and Tin Smelting</h3>
        <p>Before the arrival of colonial mining concessions in the late 19th century, Anaguta metallurgists had already developed sophisticated small-scale bloomery furnaces along the Rafin Pa and Delimi river systems. Indigenous cassiterite (tin ore) was collected, smelted into high-grade ingots, and traded through ancient trans-Plateau networks.</p>

        <h3>Language Classification</h3>
        <p>Linguistically, the Anaguta language belongs to the Kainji subgroup of the East Benue-Congo language family. It possesses intricate tonal inflections, rich prefix systems, and proverbs that reflect high-altitude agriculture, archery terminology, and mountain weather patterns.</p>
      `
    },
    {
      id: "traditional-pottery-naraguta",
      title: "Mastery of the Earth: The Living Tradition of Naraguta Pottery",
      author: "Grace Azi & Women's Heritage Collective",
      date: "August 15, 2026",
      readTime: "5 min read",
      category: "Traditional Craft",
      image: "images/tri-stripe.png",
      excerpt: "How indigenous clay extraction, ancestral firing kilns, and female master potters have sustained one of Nigeria's most celebrated ceramic traditions.",
      tags: ["Pottery", "Ceramics", "Women Artisans", "Craft"],
      content: `
        <p>Along the gentle banks of Naraguta's seasonal streams lies a rich seam of naturally tempered alluvial clay. For centuries, Anaguta women have harnessed this earth to produce pottery world-renowned for its structural resilience, aesthetic symmetry, and thermal properties.</p>
        
        <h3>The Crafting Process</h3>
        <p>Unlike modern pottery that utilizes mechanical wheels, Naraguta pottery is shaped purely through the ancient pinch and coil method. Artisans walk backward around stationary mounds of clay, coaxing graceful contours with wooden scrapers, smooth river stones, and corn cobs for surface texturing.</p>

        <h3>Open-Pit Straw Firing</h3>
        <p>The pots are seasoned in the sun for several days before being stacked in open firing pits cushioned with dried elephant grass and acacia firewood. The smoke imparts a lustrous natural patina ranging from terracotta orange to smoke obsidian.</p>

        <p>Today, Naraguta pottery vessels are collected by art galleries internationally while remaining everyday essentials in Plateau homes for natural water purification and herbal decoctions.</p>
      `
    },
    {
      id: "preservation-of-iguta-language",
      title: "Revitalizing the Iguta Language: Challenges and Digital Solutions",
      author: "Tradomodern Linguistics Initiative",
      date: "July 30, 2026",
      readTime: "7 min read",
      category: "Language & Oral Traditions",
      image: "images/logo-icon.jpg",
      excerpt: "Documenting endangered vocabulary, tonal structures, and deploying mobile-first PWA tools to empower the next generation of native speakers.",
      tags: ["Linguistics", "Language Revitalization", "PWA", "Education"],
      content: `
        <p>With urbanization rapidly reshaping the linguistic fabric of Jos metropolis, smaller indigenous languages face mounting attrition. The Anaguta Tradomodern Linguistics Initiative was born from the imperative to document, celebrate, and digitally archive our mother tongue.</p>
        
        <h3>Tonal Nuances and Morphosyntax</h3>
        <p>Iguta features delicate tonal contours where a shift from high to low pitch transforms greetings into ceremonial declarations. Recording native elder pronunciations in lossless audio preserves these endangered acoustic nuances that static dictionaries cannot capture.</p>

        <h3>The Role of This PWA</h3>
        <p>By building this offline-capable Progressive Web App, every young Anaguta student with a smartphone can access interactive vocabulary, audio samples, and phonetic guides without relying on costly mobile data. Language preservation is now accessible in every classroom, church, and family compound.</p>
      `
    }
  ],

  // 3. Community Research & Development Initiatives
  projects: [
    {
      id: "digital-lexicon",
      title: "Anaguta Digital Audio Lexicon Project",
      tagline: "Comprehensive audio recording & phonetic archiving of 1,500+ indigenous words.",
      category: "Language Revitalization",
      status: "Active",
      lead: "Linguistic Working Group",
      year: "2026–2027",
      description: "A collaborative community-driven archive interviewing native elder speakers across Babale, Naraguta, and Gwash settlements to preserve rare idioms, kinship terms, and botanical nomenclature.",
      milestones: [
        "Phase 1: 300 foundational words recorded & phonetically transcribed (Completed)",
        "Phase 2: Offline audio player integration within the PWA (Live)",
        "Phase 3: Interactive audio flashcards for Jos North primary schools (In Progress)"
      ],
      badgeColor: "badge-green"
    },
    {
      id: "archery-academy",
      title: "Traditional Archery & Guild Apprenticeship",
      tagline: "Mentoring Jos North youth in indigenous archery craft, safety, and sportsmanship.",
      category: "Cultural Documentation",
      status: "Ongoing",
      lead: "Master Archer Bitrus Azi",
      year: "2025–Present",
      description: "Restoring the bow-making guild tradition. Youth learn how to sustainably harvest acacia timber, carve bows, spin ram-sinew bowstrings, and participate in regional traditional archery competitions.",
      milestones: [
        "Trained 45 young archers in equipment crafting and tournament safety",
        "Established dedicated practice range at Naraguta Community Center",
        "Hosted annual inter-ward target championship"
      ],
      badgeColor: "badge-maroon"
    },
    {
      id: "pottery-cooperative",
      title: "Naraguta Ceramic Artisan Cooperative",
      tagline: "Modern micro-grants and eco-kiln innovations for women master potters.",
      category: "Youth & Economic Empowerment",
      status: "Active",
      lead: "Women's Craft Guild",
      year: "2026",
      description: "Empowering female ceramic artists through smoke-reducing kiln designs, digital sales distribution, and international fair exhibitions, preserving a thousand-year craft.",
      milestones: [
        "Secured clean-burning fuel subsidies for 60 female potters",
        "Documented 14 ancestral decorative surface stamping patterns",
        "Launched regional craft distribution catalogue"
      ],
      badgeColor: "badge-gold"
    },
    {
      id: "heritage-monuments",
      title: "Naraguta Sacred Rock Sites & Tors Conservation",
      tagline: "Mapping and ecological protection of ancestral rock shelters and water springs.",
      category: "Heritage & Environment",
      status: "Ongoing",
      lead: "Heritage Conservation Committee",
      year: "2024–2028",
      description: "Collaborating with Plateau State tourism and ecological authorities to demarcate sacred hill shrines, prevent illegal quarrying, and plant indigenous acacias.",
      milestones: [
        "Digitally mapped 12 ancestral rock shelters around Jos North",
        "Erected educational heritage markers with QR code links",
        "Planted 1,200 native acacia saplings on deforested hill slopes"
      ],
      badgeColor: "badge-green"
    }
  ],

  // 4. Active Featured Event
  activeEvent: {
    id: "anaguta-heritage-festival-2026",
    title: "Annual Anaguta Cultural Heritage & Archery Festival",
    theme: "Reclaiming Our Roots, Empowering the Tradomodern Future",
    bannerText: "Upcoming Gathering: Annual Anaguta Cultural Festival & Archery Championship — Dec 18-20, 2026 in Jos!",
    date: "December 18–20, 2026",
    isoDate: "2026-12-18T09:00:00",
    time: "9:00 AM – 6:00 PM WAT daily",
    location: "Ujah Palace Grounds & Naraguta Cultural Arena, Jos North, Plateau State",
    shortLocation: "Jos North, Plateau State",
    description: "Join thousands of Anaguta sons, daughters, cultural scholars, and guests for three days of traditional archery exhibitions, folklore storytelling, indigenous music, pottery demonstrations, and the coronation anniversary of the Ujah.",
    schedule: [
      {
        day: "Day 1 (Friday, Dec 18)",
        events: [
          { time: "9:00 AM", title: "Royal Procession & Opening Blessing", venue: "Ujah Royal Pavilion" },
          { time: "11:30 AM", title: "Keynote Address: Preserving the Jos Plateau Indigenous Heritage", venue: "Grand Assembly Hall" },
          { time: "2:30 PM", title: "Traditional Pottery Demonstration & Exhibition", venue: "Artisan Courtyard" },
          { time: "5:00 PM", title: "Evening Fireside Folklore & Anaguta Poetry Night", venue: "Heritage Amphitheatre" }
        ]
      },
      {
        day: "Day 2 (Saturday, Dec 19)",
        events: [
          { time: "8:30 AM", title: "Youth Traditional Archery Tournament (Preliminaries)", venue: "Naraguta Archery Grounds" },
          { time: "1:00 PM", title: "Community Feast: Traditional Acha (Zana) & Highland Delicacies", venue: "Banqueting Tent" },
          { time: "3:30 PM", title: "Championship Archery Finals & Master Bowman Exhibition", venue: "Main Arena" },
          { time: "6:30 PM", title: "Tradomodern Musical Showcase & Indigenous Drumming", venue: "Concert Lawn" }
        ]
      },
      {
        day: "Day 3 (Sunday, Dec 20)",
        events: [
          { time: "10:00 AM", title: "Thanksgiving Service & Cultural Ecumenical Gathering", venue: "Royal Pavilion" },
          { time: "1:30 PM", title: "Conferment of Heritage Honors & Youth Scholarships", venue: "Assembly Hall" },
          { time: "4:00 PM", title: "Closing Remarks by the Ujah & Traditional Dance Farewell", venue: "Main Arena" }
        ]
      }
    ],
    features: [
      "Live Traditional Archery Contests & Trophies",
      "Interactive Anaguta Language Pavilion",
      "Naraguta Ceramic & Metal Crafts Bazaar",
      "Ancestral Drumming, Flute & Dance Troupes",
      "Free Community Health & Cultural Screenings"
    ],
    rsvpCount: 348
  },

  // 5. Media Gallery Grid Items
  media: [
    {
      id: "media-1",
      title: "The Master Archer at Full Draw",
      category: "Archery & Regalia",
      type: "image",
      src: "images/logo-icon.jpg",
      year: "2026",
      location: "Naraguta Shooting Range",
      caption: "A seasoned Anaguta bowman demonstrating traditional recurve draw technique in full ancestral regalia."
    },
    {
      id: "media-2",
      title: "Official Emblem of Anaguta Tradomodern",
      category: "Archery & Regalia",
      type: "image",
      src: "images/logo.png",
      year: "2026",
      location: "Cultural Council Headquarters",
      caption: "The brand emblem uniting traditional warrior courage with modern digital renaissance."
    },
    {
      id: "media-3",
      title: "Traditional Tri-Stripe Regalia Band",
      category: "Archery & Regalia",
      type: "image",
      src: "images/tri-stripe.png",
      year: "2026",
      location: "Jos North Weavers Guild",
      caption: "The sacred green, white, and crimson stripes symbolizing the land, peace, and sacrificial valor."
    },
    {
      id: "media-4",
      title: "Granite Tors & Sacred Highland Ridges",
      category: "Landscapes & Sacred Sites",
      type: "image",
      src: "images/icon-512.png",
      year: "2025",
      location: "Naraguta Hills, Jos North",
      caption: "The towering rock shelters and granite formations that served as natural fortress for centuries."
    },
    {
      id: "media-5",
      title: "The Ujah Palace Durbar & Council",
      category: "Festivals & Gathering",
      type: "image",
      src: "images/logo.png",
      year: "2026",
      location: "Ujah Royal Pavilion",
      caption: "Dignitaries and community leaders gathered during the annual royal council meeting in Jos North."
    },
    {
      id: "media-6",
      title: "Mastery of Naraguta Earthenware",
      category: "Crafts & Pottery",
      type: "image",
      src: "images/icon-192.png",
      year: "2026",
      location: "Naraguta Pottery Center",
      caption: "Handcrafted terracotta cooling vessels molded with ancestral techniques by women artisans."
    }
  ]
};

// Expose globally and synchronize with dedicated standalone modules
if (typeof window !== 'undefined') {
  if (window.AnagutaDictionary) {
    AnagutaData.dictionary = window.AnagutaDictionary;
  }
  if (window.AnagutaArticles) {
    AnagutaData.articles = window.AnagutaArticles;
  }
  window.AnagutaData = AnagutaData;
}
