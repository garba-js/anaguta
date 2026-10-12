/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - DEDICATED ARTICLES DATA (js/articles-data.js)
 * ============================================================================
 * 
 * HOW TO ADD A NEW ARTICLE:
 * Simply copy and paste this template into the AnagutaArticles array below:
 * 
 * {
 *   id: 7,
 *   title: "Your Article Title",
 *   author: "Author Name & Title",
 *   date: "Month Day, Year",
 *   readTime: "X min read",
 *   category: "Heritage & Warfare | Rituals & Festivals | Linguistics & Oral History | Royal Dynasty | Traditional Arts",
 *   image: "images/your-image.webp",
 *   excerpt: "A brief 1-2 sentence preview summary of the essay...",
 *   tags: ["Tag1", "Tag2"],
 *   content: `
 *     <p>First paragraph of the essay...</p>
 *     <h3>Subheading Title</h3>
 *     <p>Detailed discussion...</p>
 *   `
 * },
 * 
 * ============================================================================
 */

const AnagutaArticles = [
  {
    id: 1,
    title: "The Sacred Bow: Warfare, Medicine & Defense in Anaguta Heritage",
    author: "Elder Bitrus Azi & Tradomodern Heritage Lab",
    date: "October 10, 2026",
    readTime: "7 min read",
    category: "Heritage & Warfare",
    image: "images/culture (11).webp",
    excerpt: "An examination of the Tukwi (Anaguta recurve war bow), the sacred herbal mixtures of ancestral arrows, and tactical highland skirmishes that preserved our sovereignty.",
    tags: ["Archery", "Tukwi", "Highland Defense", "Indigenous Botany"],
    content: `
      <p>For centuries, the rugged highlands of Jos North formed an unassailable fortress for the Anaguta people. But rock and ravine alone did not secure their freedom &mdash; at the heart of Anaguta survival was an instrument of immense reverence: the <strong>Tukwi</strong>, the sacred hunting and war bow.</p>
      
      <h3>The Anatomy of the Tukwi</h3>
      <p>Unlike standard plains bows, the Anaguta bow was carved exclusively from slow-growth mountain acacia wood, cured over smoldering hearth embers to maximize tensile elasticity. Bowstrings were fashioned from twisted antelope sinew or cured wild hemp cordage, capable of withstanding the harsh harmattan winds of the Jos plateau.</p>
      
      <p>Archers were trained from childhood, not solely in marksmanship, but in herbal botany. The tips of war arrows were dipped in secret botanical mixtures known only to master hunters. In tactical skirmishes, Anaguta warriors utilized natural granite caves and watchtowers to spot approaching invaders leagues away, deploying whistling signaling arrows that coordinated defense across clan compounds.</p>

      <h3>Honor and Cultural Ethos</h3>
      <p>The bow was never regarded merely as a weapon of violence; it was an emblem of manhood, responsibility, and defensive honor. To draw the Tukwi unjustly was considered an offense against the ancestors. When a warrior passed into the ancestral realm, his personal bow was hung within the ancestral shrine, symbolizing unbroken vigilance over his descendants.</p>

      <blockquote>
        "Our ancestors never waged wars of territorial conquest. The bow was forged to safeguard our hearths, our children, and the sacred granaries nested inside Naraguta's rock caverns."
        <footer>— Anaguta Council of Elders Archival Oral History</footer>
      </blockquote>

      <h3>Preservation for the Modern Generation</h3>
      <p>Today, as modern sports and digital entertainment capture youth attention, the Anaguta Tradomodern initiative hosts annual archery workshops during the Ishokori festival, ensuring that every young Anaguta can hold the seasoned wood, string the sinew cord, and remember the courage that preserved their freedom.</p>
    `
  },
  {
    id: 2,
    title: "Ishokori: The Spiritual Anatomy of the Annual Harvest Thanksgiving",
    author: "Grace Azi & Cultural Documentation Team",
    date: "September 28, 2026",
    readTime: "5 min read",
    category: "Rituals & Festivals",
    image: "images/events (4).webp",
    excerpt: "The cultural symbolism behind the Ishokori festival, from the first millet blessing by the Ujah to the warrior horns and clan reconciliations.",
    tags: ["Ishokori", "Harvest", "Festivals", "Sacred Rites"],
    content: `
      <p>The annual <strong>Ishokori</strong> festival is the spiritual epicenter of the Anaguta calendar. Marking the culmination of the rainy season and the ripening of fonio (<em>zana</em>) and mountain sorghums, Ishokori is a profound synthesis of thanksgiving, royal blessing, and communal reconciliation.</p>
      
      <h3>The Blessing of the First Grain</h3>
      <p>Before any clan may consume the newly harvested grain, the paramount monarch—His Royal Majesty the Ujah of Anaguta—performs the ancient rite of pouring libation at the ancestral stone sanctuary in Naraguta. With ears of fonio elevated toward the sunrise, prayers are offered for sustained peace, maternal health, and seasonal fertility.</p>

      <h3>The Resonance of Animal-Horn Trumpets</h3>
      <p>No Ishokori is complete without the resonant drone of curved animal-horn trumpets, blown by guild members whose lineage has carried the breath of the ancestors for generations. The music begins at dawn, echoing off the granitic tors of the plateau to awaken the twelve clans for the central procession.</p>

      <h3>Communal Reconciliation</h3>
      <p>Beyond celebration, Ishokori serves as a sacred court of reconciliation. Any unresolved disputes between households or clans must be settled before sharing the communal feast, ensuring that no bitterness enters the new harvest year.</p>
    `
  },
  {
    id: 3,
    title: "The Living Word: Preserving the Anaguta Tongue in a Modern World",
    author: "Garba Joseph & Linguistics Initiative",
    date: "September 15, 2026",
    readTime: "6 min read",
    category: "Linguistics & Oral History",
    image: "images/elders.webp",
    excerpt: "How the Anaguta language encapsulates ecological wisdom, botanical knowledge of the plateau hills, and communal philosophy across generations.",
    tags: ["Linguistics", "Iguta Tongue", "Oral Tradition", "Language Revival"],
    content: `
      <p>Linguistically classified within the Kainji subgroup of the East Benue-Congo language family, the Anaguta language (<em>Iguta</em>) is more than a communication medium; it is an encyclopedia of high-altitude ecology, herbal medicine, and philosophy.</p>
      
      <h3>Ecological Precision</h3>
      <p>The Anaguta lexicon contains distinct names for over forty varieties of highland grasses, twenty-eight types of granite rock formations, and micro-climate wind shifts. A single word can describe the specific gentle breeze that precedes the first rain over Naraguta hills—knowledge developed through centuries of intimate coexistence with the land.</p>

      <h3>Tonal Nuances and Proverbs</h3>
      <p>As a tonal language, Iguta relies on pitch inflection to alter meaning. Everyday discourse is rich with metaphorical proverbs (<em>Zamani</em>) that emphasize modesty, courage, and communal solidarity over individual hubris.</p>

      <h3>Digital Preservation Efforts</h3>
      <p>Through our dedicated interactive Lexicon and mobile audio guides, the Anaguta Tradomodern project is actively recording fluent native elder speakers to ensure that youth both in Jos North and across the worldwide diaspora can speak their mother tongue with precision and pride.</p>
    `
  },
  {
    id: 4,
    title: "The Stool of the Ujah: Sacred Kingship and Elder Governance",
    author: "Dr. Joshua M. Garba",
    date: "August 30, 2026",
    readTime: "8 min read",
    category: "Royal Dynasty",
    image: "images/royalty.webp",
    excerpt: "An archival retrospective on the royal institution of the Ujah of Anaguta, the coronation customs, and the balance of council authority.",
    tags: ["Ujah", "Royalty", "Tradition", "Governance", "Jos North"],
    content: `
      <p>The traditional monarchy of the Anaguta Kingdom—embodied in the paramount stool of the <strong>Ujah</strong>—is one of the oldest institutions of sovereign governance on the Jos Plateau.</p>
      
      <h3>Dual Authority: Monarch and Elders</h3>
      <p>The governance structure of the Anaguta is characterized by a balance of power. While the Ujah serves as supreme spiritual custodian and political representative of the kingdom, major decisions are reached in consensus with the Council of Elders (representing the twelve foundational clans).</p>

      <h3>Coronation Rites</h3>
      <p>Ascension to the throne involves intricate purification ceremonies held at secluded ancestral groves. The incoming sovereign is handed the ancient staff of acacia wood, the sacred quiver, and the royal leopard skin mantle, swearing to govern with compassion, truth, and unwavering protection of the land.</p>

      <h3>Modern Cultural Stewardship</h3>
      <p>Under the reign of His Royal Majesty Pozoh Johnson Jauro Magaji, the royal palace has become a modern center for educational scholarships, conflict resolution, inter-ethnic harmony, and cultural research programs.</p>
    `
  },
  {
    id: 5,
    title: "Origins and Settlement History of the Naraguta Highland People",
    author: "Elder Yakubu Magaji & Historical Research Cell",
    date: "August 12, 2026",
    readTime: "8 min read",
    category: "History & Origins",
    image: "images/main_hero.jpg",
    excerpt: "A comprehensive historical study into the migrations, rock fortresses, and early metallurgy of the Anaguta people in Jos North.",
    tags: ["Origins", "Naraguta", "History", "Highlands"],
    content: `
      <p>The Anaguta represent one of the foundational indigenous populations inhabiting the northern apex of the Jos Plateau. Their continuous settlement along the Naraguta hill cluster predates modern colonial cartography by hundreds of years.</p>
      
      <h3>The Granite Tors as Natural Fortresses</h3>
      <p>Early settlers established their homesteads amidst granitic rock clusters, taking advantage of natural caves as defensible shelters and cold highland breezes that kept grain dry and safe from pests.</p>

      <h3>Early Metallurgy</h3>
      <p>Prior to industrial mining, Anaguta craftsmen operated small-scale bloomery furnaces along the Delimi river, smelting native cassiterite and iron into blades, arrowheads, and household tools.</p>
    `
  },
  {
    id: 6,
    title: "Mastery of the Earth: The Living Tradition of Naraguta Pottery",
    author: "Women's Craft Collective & Grace Azi",
    date: "July 20, 2026",
    readTime: "5 min read",
    category: "Traditional Arts",
    image: "images/food_01.webp",
    excerpt: "How indigenous clay extraction, ancestral firing pits, and female master potters have sustained one of Nigeria's most celebrated ceramic traditions.",
    tags: ["Pottery", "Ceramics", "Women Artisans", "Naraguta"],
    content: `
      <p>Along the seasonal streams of Naraguta lies rich alluvial clay. For generations, Anaguta women have harnessed this earth to mold pots celebrated for their thermal resilience and graceful geometric designs.</p>
      
      <h3>Coiling and Firing</h3>
      <p>Shaped entirely by hand without a wheel, pots are dried in the plateau sun and fired in open pits with elephant grass. The resulting terracotta pieces maintain water at natural cool temperatures even in the height of the dry season.</p>
    `
  }
];

// Export to window for global access
if (typeof window !== 'undefined') {
  window.AnagutaArticles = AnagutaArticles;
}
