/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - CONTENT DATA (js/articles-data.js)
 * ============================================================================
 * This ONE file feeds the whole Projects + Articles page.
 *
 * TO ADD ANYTHING NEW: copy the template below, paste it into the array, and
 * change the values. Nothing else needs editing:
 *   - It appears on articles.html in the right tab (Projects or Articles)
 *   - A filter button for its category is created automatically
 *   - Newest items (by "date") are shown first, wherever you paste it
 *   - It opens at article-detail.html?id=YOUR_ID
 *
 * {
 *   id: 14,                       // unique number, never reuse one
 *   type: "project",              // "project" or "article"
 *   title: "Your Title",
 *   author: "Author or Team",
 *   date: "October 24, 2026",     // "Month Day, Year" so sorting works
 *   readTime: "3 min read",
 *   category: "Expeditions",      // any text; same text = same filter button
 *   image: "images/your-image.webp",
 *   excerpt: "One or two sentences shown on the card and in Google results.",
 *   tags: ["Tag1", "Tag2"],
 *   gallery: ["images/a.webp", "images/b.webp"],   // OPTIONAL: shows a swipeable photo carousel under the article
 *   content: `
 *     <p>First paragraph...</p>
 *     <h3>Subheading</h3>
 *     <p>More text...</p>
 *   `
 * },
 *
 * Current project categories: Expeditions | Documentation & Archiving | Community & Outreach
 * Current article categories: Heritage & Warfare | Rituals & Festivals | Linguistics & Oral History | Royal Dynasty | History & Origins | Traditional Arts
 * ============================================================================
 */

const AnagutaArticles = [
  /* ===================== PROJECTS ===================== */
  {
    id: 7,
    type: "project",
    title: "Anaguta Ancestral Trail: Our Expedition to the Sacred Peaks and Amanza Waterfalls",
    author: "Anaguta Tradomodern Media",
    date: "October 24, 2026",
    readTime: "3 min read",
    category: "Expeditions",
    image: "images/beyound_rocks_01.webp",
    excerpt: "Anaguta Tradomodern team treks Anaguta sacred mountains and Amanza Waterfalls to document untold oral histories and indigenous heritage in Jos, Plateau State.",
    tags: ["Anaguta", "Anaguta people", "Amanza Waterfalls", "Jos history", "Plateau heritage", "Anaguta Tradomodern"],
    
    // PHOTO CAROUSEL: remove the // from the lines below and list your photos (8 or more is fine)
 gallery: [
   { src: "images/beyound_rocks_02.webp", caption: "The team with an Elder" },
   { src: "images/beyound_rocks_03.webp", caption: "The team begins the journey" },
   { src: "images/beyound_rocks_04.webp", caption: "The team climbs the hill" },
   { src: "images/beyound_rocks_05.webp", caption: "View from the sacred peak" },
   { src: "images/beyound_rocks_06.webp", caption: "View of the sacred historical hill" },
   { src: "images/beyound_rocks_07.webp", caption: "The team climbs the hill" },
   { src: "images/beyound_rocks_08.webp", caption: "View from the sacred peak" },
   { src: "images/beyound_rocks_09.webp", caption: "Our guide" },
   "images/beyound_rocks_01.webp",
 ],
    content: `
      <p>The story of a people is not only found in books. It is found in the mountains they climbed, the waterfalls they revered, and the stories elders still carry.</p>

      <p>On Saturday, October 24, 2026 the Anaguta Tradomodern team carried out a heritage documentation expedition across two of the most significant sites of Anaguta land in Jos North, Plateau State.</p>

      <h3>The Journey</h3>
      <p>What started as a routine morning meetup quickly became a rigorous trek through bush paths, rocky outcrops, and steep ancestral routes. The team, which included both male and female members, navigated difficult terrain that once served as home and fortress for Anaguta ancestors.</p>
      <p>The peak offered more than a view. It offered perspective. From the top, the entire landscape of Anaguta land unfolds &mdash; a reminder of why our ancestors chose the high ground for safety, identity, and spirituality.</p>

      <h3>The History Session</h3>
      <p>A major highlight of the expedition was an oral history session with an Anaguta Elder who narrated the authentic origin and significance of the mountain. This is history you will not find on Google. The full video interview will be published on our platforms in the coming days.</p>

      <!-- WHEN VIDEO IS READY, uncomment and replace VIDEO_ID:      -->
      <div style="position:relative;padding-bottom:56.25%;height:0;margin:2rem 0;">
        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2291402401700294%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="Anaguta Elder oral history interview" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen loading="lazy"></iframe>
      </div>


      <h3>Amanza Waterfalls</h3>
      <p>The team proceeded to Amanza Waterfalls, a sacred and historical landmark central to Anaguta identity. Known for its cultural and historical depth, Amanza remains one of the most important heritage sites in Jos.</p>

      <h3>Why This Project Matters</h3>
      <p>At Anaguta Tradomodern, our mission is simple: <strong>Document. Preserve. Project.</strong></p>
      <p>Expeditions like this are part of our ongoing effort to physically trace, record, and share Anaguta heritage before it is lost to urbanization and misrepresentation. We are grateful to all team members who participated.</p>

      <p><strong>Team:</strong> Emmanuel Kinaru, Garba Joseph, Mayam Dauji, Zamuta Ishaya, Kefas Ishaya, Enoch Barandu, Nanman Danan <br>
      <strong>Documentation by:</strong> Anaguta Tradomodern Media<br>
      <strong>Location:</strong> Anaguta Mountains &amp; Amanza Falls, Jos, Plateau State</p>


      <p>Support our work by following, sharing, and volunteering for the next expedition. <a href="articles.html?type=project">See more projects</a>.</p>
    `
  },
  {
    id: 8,
    type: "project",
    title: "AFM Cultural Documentation Project",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Documentation & Archiving",
    image: "images/AFM.webp",
    excerpt: "Comprehensive multimedia recording of oral histories, elder genealogies, clan boundaries, and ritual songs across Jos North.",
    tags: ["Documentation", "Oral History", "Elders", "Jos North"],
    content: `
      <p>The AFM Cultural Documentation Project records video interviews, genealogical chants, and sacred rites with surviving village elders across Jos North.</p>
      <h3>What We Record</h3>
      <p>Oral histories, elder genealogies, clan boundaries, and ritual songs.</p>
      <h3>Impact</h3>
      <p>Over 60 hours of high-definition oral testimony have been preserved in digital archives to guarantee the transmission of Anaguta ancestral knowledge.</p>
    `
  },
  {
    id: 9,
    type: "project",
    title: "Anaguta Love and Culture \u2014 Then & Now",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Documentation & Archiving",
    image: "images/love_culture.webp",
    excerpt: "An archival photo and interview exhibition examining the evolution of courtship, marriage rites, and community solidarity across generations.",
    tags: ["Culture", "Courtship", "Marriage", "Archive"],
    content: `
      <p>A visual and oral history project documenting the evolution of Anaguta customs across generations.</p>
      <h3>About the Project</h3>
      <p>This project captures interviews, archival photographs, and stories from elders to preserve the identity of the Anaguta people for future generations, looking at courtship, marriage rites, and community solidarity then and now.</p>
    `
  },
  {
    id: 10,
    type: "project",
    title: "Youth Heritage & Vocational Empowerment Drive",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Community & Outreach",
    image: "images/barbing.webp",
    excerpt: "Hands-on skills workshops in barbering, tailoring, craftsmanship, and entrepreneurship for Anaguta young men and women.",
    tags: ["Youth", "Skills", "Entrepreneurship", "Community"],
    content: `
      <p>Empowering the rising generation of Anaguta youth through practical vocational skills training, modern entrepreneurship, and digital storytelling while anchoring them in cultural leadership and civic pride.</p>
      <h3>Workshops</h3>
      <p>Hands-on skills workshops in barbering, tailoring, craftsmanship, and entrepreneurship for Anaguta young men and women.</p>
    `
  },
  {
    id: 11,
    type: "project",
    title: "Naraguta Hills Heritage Eco-Hike & Archery Rites",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Expeditions",
    image: "images/hike.webp",
    excerpt: "Annual guided mountain expeditions tracing ancestral watchtower caves, natural defensive ridges, and live archery exhibitions.",
    tags: ["Hike", "Archery", "Naraguta", "Conservation"],
    content: `
      <p>A community expedition that brings together youths, tourists, and cultural enthusiasts to explore the rocky granite peaks of Naraguta.</p>
      <h3>What Happens</h3>
      <p>Guided hikes trace ancestral watchtower caves and natural defensive ridges, with live demonstrations of traditional archery by master hunters and environmental conservation awareness.</p>
    `
  },
  {
    id: 12,
    type: "project",
    title: "Anaguta Traditional Music & Chant Archiving",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Documentation & Archiving",
    image: "images/uwenni_jaja.webp",
    excerpt: "Digitizing sacred drum rhythms, hunting horns, and choral chants performed during the Ishokori harvest festival.",
    tags: ["Music", "Chants", "Ishokori", "Archive"],
    content: `
      <p>Studio and field recordings capturing traditional percussion, ceremonial animal-horn instruments, and call-and-response oral chants to ensure ancient musical rhythms are passed to upcoming musicians.</p>
    `
  },
  {
    id: 13,
    type: "project",
    title: "Plateau Elder Care & Health Screening Clinic",
    author: "Anaguta Tradomodern Media",
    date: "2026",
    readTime: "2 min read",
    category: "Community & Outreach",
    image: "images/community (1).webp",
    excerpt: "Grassroots health support providing free blood pressure, vision, and wellness screenings for elder community members.",
    tags: ["Health", "Elders", "Outreach", "Naraguta"],
    content: `
      <p>Partnering with medical volunteers to bring mobile health screening, wellness supplies, and nutritional counseling directly to village elders and rural families across Naraguta.</p>
      <h3>Services</h3>
      <p>Free blood pressure, vision, and wellness screenings for elder community members.</p>
    `
  },

  /* ===================== ARTICLES ===================== */
  {
    id: 1,
    type: "article",
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
    type: "article",
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
    type: "article",
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
    type: "article",
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
    type: "article",
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
    type: "article",
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
