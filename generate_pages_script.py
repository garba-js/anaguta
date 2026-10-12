import os
import shutil

print("Starting generation of all upgraded pages...")

# Helper nav and footer
def get_nav(active="home"):
    links = [
        ("index.html", "home", "Home"),
        ("about_us.html", "about", "About"),
        ("projects.html", "projects", "Projects"),
        ("dictionary.html", "dictionary", "Dictionary"),
        ("gallery.html", "gallery", "Gallery"),
        ("articles.html", "articles", "Articles"),
        ("event.html", "event", "Event"),
        ("contact.html", "contact", "Contact")
    ]
    desktop_nav = ""
    mobile_nav = ""
    for href, key, label in links:
        cls = ' class="active"' if key == active else ""
        desktop_nav += f'      <li><a href="{href}"{cls}>{label}</a></li>\n'
        mobile_nav += f'    <a href="{href}"{cls} onclick="closeMobile()">{label}</a>\n'

    return f'''  <!-- NAV -->
  <nav id="navbar">
    <a class="nav-brand-wrap" href="index.html">
      <img src="images/logo-icon.jpg" alt="Bow Icon" class="nav-brand-logo" />
      <span class="nav-logo">Anaguta <span>Trado-Modern</span></span>
    </a>
    <ul class="nav-links">
{desktop_nav}      <li><a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" class="nav-cta" target="_blank" rel="noopener">Join Community</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu">
{mobile_nav}    <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" class="nav-cta" target="_blank" rel="noopener" onclick="closeMobile()">Join Community</a>
  </div>'''

def get_footer():
    return '''  <!-- FOOTER -->
  <footer>
    <div class="footer-top">
      <div>
        <img src="images/logo.png" alt="Anaguta Tradomodern Primary Logo" class="footer-brand-logo" />
        <div class="footer-brand-name">Anaguta Trado-Modern</div>
        <p class="footer-brand-desc">Promoting Anaguta culture, heritage, language, and community development through design, storytelling, and collective action. Jos, Plateau State, Nigeria.</p>
        <img src="images/tri-stripe.png" alt="Tri-Stripe Accent Bar" class="tri-stripe-img" />
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about_us.html">About Us</a></li>
          <li><a href="dictionary.html">Language Dictionary</a></li>
          <li><a href="projects.html">Community Projects</a></li>
          <li><a href="gallery.html">Visual Gallery</a></li>
          <li><a href="articles.html">Cultural Essays</a></li>
          <li><a href="event.html">Annual Festival</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="contact.html">Contact Secretariat</a></li>
          <li><a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener">Join WhatsApp Community</a></li>
          <li><a href="contact.html#secretariat">Jos North, Plateau State</a></li>
          <li><a href="contact.html#inquiries">info@anaguta-tradomodern.org</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; <span id="yr"></span> Anaguta Tradomodern · Jos, Nigeria. All rights reserved.</p>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">in</a>
        <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener" aria-label="WhatsApp">w</a>
      </div>
    </div>
  </footer>

  <!-- PWA OFFLINE TOAST -->
  <div class="pwa-toast" id="pwaToast">
    <span>Offline mode active: browsing cached Anaguta heritage archives.</span>
  </div>'''

# 1. INDEX.HTML
index_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anaguta Trado-Modern | Cultural Heritage, Language & Community</title>
  <meta name="description" content="Anaguta Tradomodern – promoting culture, heritage, and community development through design and storytelling. Jos, Plateau State, Nigeria.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
  <link rel="apple-touch-icon" href="images/icon-192.png">
</head>
<body>
  <!-- EVENT BANNER -->
  <div class="event-bar" id="eventBar">
    <div class="event-bar-text">
      <span class="event-badge">Upcoming</span>
      <span>Annual Anaguta Cultural Festival & Archery Championship 2026 &middot; Jos North</span>
      <a href="event.html" class="event-bar-link">RSVP & Details &rarr;</a>
    </div>
    <button class="event-bar-close" id="closeEventBar" aria-label="Dismiss banner">&times;</button>
  </div>

{get_nav("home")}

  <!-- HERO -->
  <section class="hero">
    <div class="hero-img">
      <img src="images/home_page_hero.webp" alt="Anaguta Traditional Homeland" />
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-tag">Plateau State &middot; Nigeria</span>
      <h1>Anaguta<br><em>To The World</em></h1>
      <p>Anaguta the <em>"people of bow and arrow"</em>, custodians of a living cultural legacy rooted in tradition, honor, and resilience.</p>
      <div class="hero-btns">
        <a href="about_us.html" class="btn-primary">Explore Our Story</a>
        <a href="dictionary.html" class="btn-secondary">Language Lexicon</a>
        <a href="projects.html" class="btn-outline">Current Projects</a>
      </div>
    </div>
    <div class="hero-scroll">
      <span>Scroll to explore</span>
      <div class="hero-scroll-line"></div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-text reveal">
      <span class="section-label">Who We Are</span>
      <h2 class="section-title">A People of<br><em>Deep Roots</em></h2>
      <div class="divider"></div>
      <p>The Anaguta have a unique identity shaped by their <strong>traditional farming practices</strong>, sacred archery heritage, warrior spirit, and captivating storytelling passed down through generations in the highlands of Jos North, Plateau State.</p>
      <p>Anaguta Tradomodern is committed to sharing this powerful heritage with the world &mdash; bridging ancestral wisdom with contemporary expression, educational technology, and community development.</p>
      
      <div class="about-stat-bar">
        <div class="stat-item">
          <div class="stat-num">500+</div>
          <div class="stat-label">Years of History</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">12</div>
          <div class="stat-label">Cultural Pillars</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">3K+</div>
          <div class="stat-label">Community Members</div>
        </div>
      </div>

      <a href="about_us.html" class="btn-primary">Discover More of Our Story</a>
    </div>

    <div class="about-visual reveal">
      <img class="about-img-main" src="images/main_hero.jpg" alt="Anaguta community" loading="lazy" />
      <img class="about-img-accent" src="images/the_king.webp" alt="Traditional culture" loading="lazy" />
    </div>
  </section>

  <!-- CULTURE PREVIEW -->
  <section class="culture" id="culture">
    <span class="section-label reveal">Living Traditions</span>
    <h2 class="section-title reveal">Our <em>Culture</em></h2>
    <div class="divider reveal"></div>
    <p class="culture-intro reveal">From the rhythm of ancient festivals to the precision of our language and the warmth of traditional cuisine &mdash; Anaguta culture is a rich tapestry woven through time.</p>

    <div class="culture-grid">
      <div class="culture-card reveal">
        <img src="images/elders.webp" alt="Language and Oral History" loading="lazy" />
        <div class="culture-card-overlay">
          <span class="culture-card-tag">Heritage</span>
          <div class="culture-card-title">Language & Wisdom</div>
          <a href="dictionary.html" class="culture-card-link">Open Lexicon &rarr;</a>
        </div>
      </div>

      <div class="culture-card reveal">
        <img src="images/events (4).webp" alt="Festivals and Dance" loading="lazy" />
        <div class="culture-card-overlay">
          <span class="culture-card-tag">Celebration</span>
          <div class="culture-card-title">Sacred Festivals</div>
          <a href="articles.html" class="culture-card-link">Learn More &rarr;</a>
        </div>
      </div>

      <div class="culture-card reveal">
        <img src="images/food_01.webp" alt="Traditional Cuisine" loading="lazy" />
        <div class="culture-card-overlay">
          <span class="culture-card-tag">Cuisine</span>
          <div class="culture-card-title">Plateau Cuisine</div>
          <a href="gallery.html" class="culture-card-link">Discover Food &rarr;</a>
        </div>
      </div>

      <div class="culture-card reveal">
        <img src="images/06.webp" alt="Archery Tradition" loading="lazy" />
        <div class="culture-card-overlay">
          <span class="culture-card-tag">Identity</span>
          <div class="culture-card-title">The Sacred Bow</div>
          <a href="articles.html" class="culture-card-link">Read History &rarr;</a>
        </div>
      </div>
    </div>

    <div class="projects-more reveal">
      <a href="articles.html" class="btn-primary">Explore Cultural Essays</a>
    </div>
  </section>

  <!-- QUOTE BANNER -->
  <div class="quote-banner reveal">
    <blockquote>"A people without the knowledge of their past history, origin and culture is like a tree without roots."</blockquote>
    <cite>&mdash; Marcus Garvey &middot; Honoring the Anaguta Ancestors</cite>
  </div>

  <!-- LEADERSHIP -->
  <section class="leadership" id="leadership">
    <div class="leadership-img reveal">
      <img src="images/king.webp" alt="His Royal Majesty Ujah Anaguta" loading="lazy" />
    </div>
    <div class="reveal">
      <span class="section-label">The Custodians</span>
      <h2 class="section-title">Anaguta<br><em>Leaders</em></h2>
      <div class="divider"></div>
      <p class="section-sub">The Anaguta leadership upholds centuries of sacred tradition while guiding the community towards a prosperous, educated, and united future.</p>
      
      <div class="leader-card">
        <div class="leader-card-name">Pozoh Johnson Jauro Magaji</div>
        <span class="leader-card-title-label">His Royal Majesty &middot; Ujah of Anaguta Kingdom</span>
        <p>A sovereign deeply rooted in the traditions of his forebears, His Royal Majesty continues to champion the cultural identity, welfare, and unity of the Anaguta people with wisdom and grace.</p>
      </div>

      <div class="projects-more">
        <a href="about_us.html#royalty" class="btn-primary">Read Royal Lineage</a>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="projects" id="projects">
    <span class="section-label reveal">What We Do</span>
    <h2 class="section-title reveal">Recent <em>Projects</em></h2>
    <div class="divider reveal"></div>

    <div class="projects-grid">
      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/AFM.webp" alt="AFM Documentation" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Documentation &middot; 2026</span>
          <h3 class="project-card-title">AFM Cultural Documentation Project</h3>
          <p>Comprehensive multimedia recording of oral histories, elder interviews, and clan genealogical lines across Jos North.</p>
          <button class="btn-text open-modal"
            data-title="AFM Cultural Documentation Project"
            data-year="Documentation &middot; 2026"
            data-image="images/AFM.webp"
            data-description="The AFM Cultural Documentation Project captures interviews, archival photographs, and stories from village elders to preserve the ancestral identity of the Anaguta people for future generations.">
            View Details
          </button>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/love_culture.webp" alt="Love and Culture" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Culture &middot; 2026</span>
          <h3 class="project-card-title">Anaguta Love and Culture &mdash; Then and Now</h3>
          <p>A visual and oral history project documenting the evolution of courtship, marriage rites, and community bonds.</p>
          <button class="btn-text open-modal"
            data-title="Anaguta Love and Culture &mdash; Then and Now"
            data-year="Culture &middot; 2026"
            data-image="images/love_tandn.jpg"
            data-description="A visual and oral history project documenting the evolution of Anaguta courtship and family customs across generations. Captured through archival photography and storytelling with elders.">
            View Details
          </button>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/barbing.webp" alt="Youth Empowerment" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Community &middot; 2026</span>
          <h3 class="project-card-title">Youth Heritage &amp; Vocational Empowerment Drive</h3>
          <p>Practical vocational skills, mentorship, and creative arts workshops equipping Anaguta youths for modern entrepreneurship.</p>
          <button class="btn-text open-modal"
            data-title="Youth Heritage &amp; Vocational Empowerment Drive"
            data-year="Community &middot; 2026"
            data-image="images/barbing.webp"
            data-description="A grassroots initiative providing technical vocational skills, business mentorship, and cultural leadership for young men and women in Naraguta and Jos North communities.">
            View Details
          </button>
        </div>
      </div>
    </div>

    <div class="projects-more reveal">
      <a href="projects.html" class="btn-primary">View All Projects</a>
    </div>
  </section>

  <!-- DEDICATED LANGUAGE SPOTLIGHT SECTION -->
  <section class="dict-section" id="dictionary-preview">
    <div class="container">
      <span class="section-label reveal">Living Language</span>
      <h2 class="section-title reveal">Dedicated <em>Anaguta</em> Lexicon</h2>
      <div class="divider reveal"></div>
      <p class="section-sub reveal">Preserving the sacred tongue of the bow and arrow. Search our interactive dictionary, listen to pronunciations, and explore ancestral terminology.</p>

      <div class="dict-search-container reveal">
        <div class="dict-search-wrapper">
          <span class="dict-search-icon">&telrec;</span>
          <input type="text" class="dict-input" id="homeSearchInput" placeholder="Quick search Anaguta words (e.g. Ujah, Ishokori, Mba, Tukwi)..." />
        </div>
      </div>

      <div class="dict-grid" id="homeDictPreview">
        <!-- Rendered by JS from data.js -->
      </div>

      <div class="projects-more reveal">
        <a href="dictionary.html" class="btn-primary">Launch Dedicated Dictionary Hub &rarr;</a>
      </div>
    </div>
  </section>

  <!-- WHATSAPP BANNER -->
  <section class="container reveal">
    <div class="wa-banner">
      <div>
        <h3>Join the Anaguta Tradomodern Community</h3>
        <p>Connect directly with researchers, elders, youths, and cultural ambassadors in Jos and worldwide.</p>
      </div>
      <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener" class="btn-primary">Join WhatsApp Group &rarr;</a>
    </div>
  </section>

{get_footer()}

  <!-- PROJECT MODAL -->
  <div class="project-modal" id="projectModal">
    <div class="modal-content">
      <button class="close-modal" id="closeModal" aria-label="Close modal">&times;</button>
      <img id="modalImage" src="images/love_tandn.jpg" alt="Project image" />
      <div class="modal-body">
        <p class="modal-label" id="modalYear">Culture &middot; 2026</p>
        <h2 id="modalTitle">Project Title</h2>
        <p id="modalDescription">Project description will appear here.</p>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      const container = document.getElementById('homeDictPreview');
      if (container && window.AnagutaData && window.AnagutaData.dictionary) {{
        const sample = window.AnagutaData.dictionary.slice(0, 3);
        container.innerHTML = sample.map(entry => `
          <div class="dict-card reveal visible">
            <div class="dict-card-top">
              <div>
                <div class="dict-word-title">${{entry.word}}</div>
                <div class="dict-phonetic">${{entry.phonetic}} &middot; <span class="dict-pos">${{entry.partOfSpeech}}</span></div>
              </div>
              <button class="dict-play-btn" onclick="playWord('${{entry.word}}')" title="Pronounce word" aria-label="Pronounce ${{entry.word}}">&#9658;</button>
            </div>
            <div class="dict-meaning">${{entry.meaning}}</div>
            <div class="dict-example">"${{entry.exampleAnaguta}}"<br><em>${{entry.exampleEnglish}}</em></div>
            <span class="dict-badge">${{entry.category}}</span>
          </div>
        `).join('');
      }}

      const input = document.getElementById('homeSearchInput');
      if (input) {{
        input.addEventListener('keydown', (e) => {{
          if (e.key === 'Enter') {{
            window.location.href = 'dictionary.html?search=' + encodeURIComponent(input.value.trim());
          }}
        }});
      }}
    }});

    function playWord(word) {{
      if ('speechSynthesis' in window) {{
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(word);
        utter.rate = 0.85;
        window.speechSynthesis.speak(utter);
      }}
    }}
  </script>
</body>
</html>'''

with open("index.html", "w") as f:
    f.write(index_content)
print("Generated index.html")

# 2. ABOUT_US.HTML
about_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Discover the mission, heritage, royal lineage, and visionary team behind Anaguta Tradomodern.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("about")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/main_hero.jpg" alt="About Anaguta Tradomodern" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Our Mission &middot; Our Roots</p>
      <h1>About <em>Anaguta</em><br>Trado-Modern</h1>
      <p>Bridging centuries of indigenous wisdom with modern storytelling, digital preservation, and grassroots community impact across Jos Plateau.</p>
    </div>
  </div>

  <!-- THE STORY -->
  <section class="about">
    <div class="about-text reveal">
      <span class="section-label">The Vision</span>
      <h2 class="section-title">Rooted in Earth,<br><em>Driven by Purpose</em></h2>
      <div class="divider"></div>
      <p>Anaguta Tradomodern was founded to celebrate, record, and safeguard the rich cultural identity of the Anaguta ethnic group &mdash; the traditional custodians and indigenous archers of Jos North Local Government Area, Plateau State, Nigeria.</p>
      <p>As the modern world transforms societies, sacred oral narratives, indigenous craftsmanship, traditional architectural styles, and native vocabulary risk fading into obscurity. Tradomodern acts as an open, accessible cultural sanctuary &mdash; combining archival research with vibrant digital platforms.</p>
      
      <div class="about-stat-bar">
        <div class="stat-item">
          <div class="stat-num">12</div>
          <div class="stat-label">Ancestral Clans</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">50+</div>
          <div class="stat-label">Elders Documented</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">100%</div>
          <div class="stat-label">Community Driven</div>
        </div>
      </div>
    </div>

    <div class="about-visual reveal">
      <img class="about-img-main" src="images/elders.webp" alt="Anaguta council of elders" loading="lazy" />
      <img class="about-img-accent" src="images/culture (16).webp" alt="Traditional attire" loading="lazy" />
    </div>
  </section>

  <!-- VALUES -->
  <section class="container reveal">
    <span class="section-label">Our Pillars</span>
    <h2 class="section-title">Core <em>Values</em></h2>
    <div class="divider"></div>

    <div class="values-grid">
      <div class="value-card">
        <div class="value-num">01</div>
        <h3 class="value-title">Ancestral Authenticity</h3>
        <p>Grounding all documentation in direct testimony from elders, clan historians, and royal custodians of the Anaguta kingdom.</p>
      </div>

      <div class="value-card">
        <div class="value-num">02</div>
        <h3 class="value-title">Youth Empowerment</h3>
        <p>Igniting pride among the next generation through digital skills, photography, language preservation, and cultural mentorship.</p>
      </div>

      <div class="value-card">
        <div class="value-num">03</div>
        <h3 class="value-title">Open Access Heritage</h3>
        <p>Making our language lexicon, historical essays, photo archives, and cultural knowledge freely accessible to researchers and the global diaspora.</p>
      </div>
    </div>
  </section>

  <!-- ROYAL LINEAGE -->
  <section class="leadership" id="royalty">
    <div class="leadership-img reveal">
      <img src="images/royalty.webp" alt="The Royal Throne of Anaguta" loading="lazy" />
    </div>
    <div class="reveal">
      <span class="section-label">Royal Dynasty</span>
      <h2 class="section-title">The Royal Stool of<br><em>The Ujah</em></h2>
      <div class="divider"></div>
      <p class="section-sub">The Ujah of Anaguta is the supreme traditional ruler, spiritual father, and paramount custodian of the Anaguta Kingdom.</p>
      
      <div class="leader-card">
        <div class="leader-card-name">His Royal Majesty Pozoh Johnson Jauro Magaji</div>
        <span class="leader-card-title-label">Ujah of Anaguta &middot; Jos North, Plateau State</span>
        <p>Leading with steadfast wisdom, HRM Pozoh Johnson Jauro Magaji champions communal peace, educational empowerment, and the renaissance of Anaguta arts, language, and sacred festivals across Plateau State and Nigeria.</p>
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section class="container reveal">
    <span class="section-label">Custodians &amp; Creators</span>
    <h2 class="section-title">Our <em>Team</em></h2>
    <div class="divider"></div>
    <p class="section-sub">A dedicated collective of local researchers, historians, digital storytellers, and community organizers.</p>

    <div class="team-grid">
      <div class="team-card">
        <img src="images/team_pic.jpg" alt="Project Leadership" loading="lazy" />
        <div class="team-body">
          <div class="team-name">Garba Joseph</div>
          <div class="team-role">Founder &amp; Lead Researcher</div>
        </div>
      </div>

      <div class="team-card">
        <img src="images/team_aron.jpg" alt="Aron" loading="lazy" />
        <div class="team-body">
          <div class="team-name">Aron Anaguta</div>
          <div class="team-role">Cultural Historian</div>
        </div>
      </div>

      <div class="team-card">
        <img src="images/team_mercy.jpg" alt="Mercy" loading="lazy" />
        <div class="team-body">
          <div class="team-name">Mercy Ishaya</div>
          <div class="team-role">Community Coordinator</div>
        </div>
      </div>

      <div class="team-card">
        <img src="images/team_trippy.jpg" alt="Creative Lead" loading="lazy" />
        <div class="team-body">
          <div class="team-name">Trippy Visuals</div>
          <div class="team-role">Archival Photography</div>
        </div>
      </div>
    </div>
  </section>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>'''

with open("about_us.html", "w") as f:
    f.write(about_content)
shutil.copy("about_us.html", "about.html")
print("Generated about_us.html and about.html")


# 4. PROJECTS.HTML (and project.html)
projects_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community Initiatives &amp; Research &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Explore ongoing cultural documentation, language preservation, youth empowerment, and community initiatives of the Anaguta people.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("projects")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/project.webp" alt="Anaguta Projects" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Action &middot; Impact &middot; Heritage</p>
      <h1>Our <em>Projects</em></h1>
      <p>Grassroots community initiatives, anthropological field recordings, and youth development programs bridging our past and future.</p>
    </div>
  </div>

  <!-- IMPACT BAR -->
  <section class="container reveal">
    <div class="about-stat-bar">
      <div class="stat-item">
        <div class="stat-num">4+</div>
        <div class="stat-label">Active Initiatives</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">12</div>
        <div class="stat-label">Communities Reached</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">60+</div>
        <div class="stat-label">Hours of Audio/Video</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">1,200+</div>
        <div class="stat-label">Youths Engaged</div>
      </div>
    </div>
  </section>

  <!-- PROJECTS GRID -->
  <section class="projects">
    <div class="container">
      <span class="section-label reveal">Initiatives Showcase</span>
      <h2 class="section-title reveal">Living <em>Endeavors</em></h2>
      <div class="divider reveal"></div>

      <div class="projects-grid">
        <!-- PROJECT 1 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/AFM.webp" alt="AFM Documentation" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Documentation &middot; 2026</span>
            <h3 class="project-card-title">AFM Cultural Documentation Project</h3>
            <p>Comprehensive multimedia recording of oral histories, elder genealogies, clan boundaries, and ritual songs across Jos North.</p>
            <button class="btn-text open-modal"
              data-title="AFM Cultural Documentation Project"
              data-year="Documentation &middot; 2026"
              data-image="images/AFM.webp"
              data-description="The AFM Cultural Documentation Project records video interviews, genealogical chants, and sacred rites with surviving village elders across Jos North. Over 60 hours of high-definition oral testimony have been preserved in digital archives to guarantee the transmission of Anaguta ancestral knowledge.">
              View Details
            </button>
          </div>
        </div>

        <!-- PROJECT 2 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/love_culture.webp" alt="Love & Culture" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Culture &middot; 2026</span>
            <h3 class="project-card-title">Anaguta Love and Culture &mdash; Then &amp; Now</h3>
            <p>An archival photo and interview exhibition examining the evolution of courtship, marriage rites, and community solidarity across generations.</p>
            <button class="btn-text open-modal"
              data-title="Anaguta Love and Culture &mdash; Then &amp; Now"
              data-year="Culture &middot; 2026"
              data-image="images/love_tandn.jpg"
              data-description="A visual and oral history project documenting the evolution of Anaguta customs across generations. This project captures interviews, archival photographs, and stories from elders to preserve the identity of the Anaguta people for future generations.">
              View Details
            </button>
          </div>
        </div>

        <!-- PROJECT 3 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/barbing.webp" alt="Youth Vocational" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Community &middot; 2026</span>
            <h3 class="project-card-title">Youth Heritage &amp; Vocational Empowerment Drive</h3>
            <p>Hands-on skills workshops in barbering, tailoring, craftsmanship, and entrepreneurship for Anaguta young men and women.</p>
            <button class="btn-text open-modal"
              data-title="Youth Heritage &amp; Vocational Empowerment Drive"
              data-year="Community &middot; 2026"
              data-image="images/barbing.webp"
              data-description="Empowering the rising generation of Anaguta youth through practical vocational skills training, modern entrepreneurship, and digital storytelling while anchoring them in cultural leadership and civic pride.">
              View Details
            </button>
          </div>
        </div>

        <!-- PROJECT 4 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/hike.webp" alt="Hike and Archery" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Recreation &middot; 2026</span>
            <h3 class="project-card-title">Naraguta Hills Heritage Eco-Hike &amp; Archery Rites</h3>
            <p>Annual guided mountain expeditions tracing ancestral watchtower caves, natural defensive ridges, and live archery exhibitions.</p>
            <button class="btn-text open-modal"
              data-title="Naraguta Hills Heritage Eco-Hike &amp; Archery Rites"
              data-year="Recreation &middot; 2026"
              data-image="images/hike.webp"
              data-description="A community expedition that brings together youths, tourists, and cultural enthusiasts to explore the rocky granite peaks of Naraguta. Features live demonstrations of traditional archery by master hunters and environmental conservation awareness.">
              View Details
            </button>
          </div>
        </div>

        <!-- PROJECT 5 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/uwenni_jaja.webp" alt="Music Preservation" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Music &middot; 2026</span>
            <h3 class="project-card-title">Anaguta Traditional Music &amp; Chant Archiving</h3>
            <p>Digitizing sacred drum rhythms, hunting horns, and choral chants performed during the Ishokori harvest festival.</p>
            <button class="btn-text open-modal"
              data-title="Anaguta Traditional Music &amp; Chant Archiving"
              data-year="Music &middot; 2026"
              data-image="images/uwenni_jaja.webp"
              data-description="Studio and field recordings capturing traditional percussion, ceremonial animal-horn instruments, and call-and-response oral chants to ensure ancient musical rhythms are passed to upcoming musicians.">
              View Details
            </button>
          </div>
        </div>

        <!-- PROJECT 6 -->
        <div class="project-card reveal">
          <div class="project-card-img">
            <img src="images/community (1).webp" alt="Community Health" loading="lazy" />
          </div>
          <div class="project-card-body">
            <span class="project-card-label">Outreach &middot; 2026</span>
            <h3 class="project-card-title">Plateau Elder Care &amp; Health Screening Clinic</h3>
            <p>Grassroots health support providing free blood pressure, vision, and wellness screenings for elder community members.</p>
            <button class="btn-text open-modal"
              data-title="Plateau Elder Care &amp; Health Screening Clinic"
              data-year="Outreach &middot; 2026"
              data-image="images/community (1).webp"
              data-description="Partnering with medical volunteers to bring mobile health screening, wellness supplies, and nutritional counseling directly to village elders and rural families across Naraguta.">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

{get_footer()}

  <!-- PROJECT MODAL -->
  <div class="project-modal" id="projectModal">
    <div class="modal-content">
      <button class="close-modal" id="closeModal" aria-label="Close modal">&times;</button>
      <img id="modalImage" src="images/love_tandn.jpg" alt="Project image" />
      <div class="modal-body">
        <p class="modal-label" id="modalYear">Culture &middot; 2026</p>
        <h2 id="modalTitle">Project Title</h2>
        <p id="modalDescription">Project description will appear here.</p>
      </div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>'''

with open("projects.html", "w") as f:
    f.write(projects_content)
shutil.copy("projects.html", "project.html")
print("Generated projects.html and project.html")

# 5. DICTIONARY.HTML
dictionary_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anaguta Language Dictionary &amp; Lexicon &mdash; Trado-Modern</title>
  <meta name="description" content="Dedicated interactive dictionary and audio pronunciation guide for the Anaguta language. Search words, meanings, categories, and phonetics.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("dictionary")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/culture (12).webp" alt="Anaguta Language Lexicon" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Living Lexicon &middot; Oral Audio Guide</p>
      <h1>The <em>Dedicated</em><br>Anaguta Lexicon</h1>
      <p>Speak the ancestral tongue of the plateau archers. Explore authentic words, phonetic transcriptions, definitions, and native audio pronunciations.</p>
    </div>
  </div>

  <!-- DICTIONARY ENGINE SECTION -->
  <section class="dict-section">
    <div class="container">
      <!-- WORD OF THE DAY -->
      <div class="leader-card reveal" class="leader-card reveal wotd-card">
        <span class="leader-card-title-label">Word of the Day</span>
        <div class="wotd-header">
          <div>
            <div class="dict-word-title" class="dict-word-title wotd-title">Ishokori</div>
            <div class="dict-phonetic">/ee-shoh-KOH-ree/ &middot; noun</div>
          </div>
          <button class="dict-play-btn" onclick="playAudio('Ishokori')" title="Play pronunciation" class="dict-play-btn wotd-play-btn">&#9658;</button>
        </div>
        <div class="dict-meaning" class="dict-meaning wotd-meaning">
          The sacred annual cultural harvest thanksgiving festival and warrior archery convocation of the Anaguta people.
        </div>
        <div class="dict-example">
          "Ishokori ri na biki mai girma a garin Jos."<br>
          <em>The Ishokori festival brings our kingdom together in jubilation and unity.</em>
        </div>
      </div>

      <!-- SEARCH INPUT -->
      <div class="dict-search-container reveal">
        <div class="dict-search-wrapper">
          <span class="dict-search-icon">&telrec;</span>
          <input type="text" class="dict-input" id="dictSearchInput" placeholder="Search Anaguta words, English meanings, or categories..." autocomplete="off" />
          <button class="dict-clear-btn" id="dictClearBtn" aria-label="Clear search">&times;</button>
        </div>

        <!-- CATEGORY PILLS -->
        <div class="filter-pills" id="categoryFilterBar">
          <button class="filter-pill active" data-cat="all">All Terms</button>
          <button class="filter-pill" data-cat="Greetings & Social">Greetings &amp; Social</button>
          <button class="filter-pill" data-cat="Traditions & Archery">Traditions &amp; Archery</button>
          <button class="filter-pill" data-cat="Nature & Wildlife">Nature &amp; Wildlife</button>
          <button class="filter-pill" data-cat="Family & Kinship">Family &amp; Kinship</button>
          <button class="filter-pill" data-cat="Food & Cuisine">Food &amp; Cuisine</button>
          <button class="filter-pill" data-cat="Numbers & Living">Numbers &amp; Living</button>
        </div>

        <!-- ALPHABET BAR -->
        <div class="dict-alpha-bar" id="alphabetBar">
          <!-- Populated by JS -->
        </div>

        <div class="results-counter" id="resultsCount">
          Showing all lexicon entries
        </div>
      </div>

      <!-- LEXICON CARDS GRID -->
      <div class="dict-grid" id="lexiconGrid">
        <!-- Rendered by js/dictionary.js -->
      </div>
    </div>
  </section>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/dictionary.js"></script>
  <script src="js/app.js"></script>
</body>
</html>'''

with open("dictionary.html", "w") as f:
    f.write(dictionary_content)
print("Generated dictionary.html")

# 6. GALLERY.HTML (and media.html)
gallery_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Heritage &amp; Gallery &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Visual photo and media gallery celebrating Anaguta royalty, elders, festivals, food, and highland life.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("gallery")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/gallery_hero.webp" alt="Anaguta Visual Gallery" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Visual Heritage Archive</p>
      <h1>The <em>Gallery</em></h1>
      <p>A window into the soul of the Anaguta &mdash; archival portraits of royalty and elders, the kinetic energy of dances, and the majesty of the plateau hills.</p>
    </div>
  </div>

  <!-- GALLERY SECTION -->
  <section class="gallery-section">
    <div class="container">
      <!-- FILTER BUTTONS -->
      <div class="filter-bar reveal">
        <button class="filter-btn active" data-filter="all">All Photos</button>
        <button class="filter-btn" data-filter="royalty">Royalty &amp; Elders</button>
        <button class="filter-btn" data-filter="culture">Festivals &amp; Dance</button>
        <button class="filter-btn" data-filter="cuisine">Traditional Cuisine</button>
        <button class="filter-btn" data-filter="community">Community Life</button>
      </div>

      <!-- MASONRY GRID -->
      <div class="masonry" id="galleryMasonry">
        <!-- ITEM 1 -->
        <div class="masonry-item" data-category="royalty" data-src="images/king.webp" data-caption="Pozoh Johnson Jauro Magaji &middot; Ujah of Anaguta">
          <img src="images/king.webp" alt="The King" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Pozoh Johnson Jauro Magaji &middot; Ujah of Anaguta</div>
          </div>
        </div>

        <!-- ITEM 2 -->
        <div class="masonry-item" data-category="royalty" data-src="images/elders.webp" data-caption="Anaguta Council of Elders in Royal Assembly">
          <img src="images/elders.webp" alt="Council of Elders" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Anaguta Council of Elders in Royal Assembly</div>
          </div>
        </div>

        <!-- ITEM 3 -->
        <div class="masonry-item" data-category="culture" data-src="images/dance_02.webp" data-caption="Traditional Horn Blowers &amp; Warrior Dancers">
          <img src="images/dance_02.webp" alt="Festive Dance" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Traditional Horn Blowers &amp; Warrior Dancers</div>
          </div>
        </div>

        <!-- ITEM 4 -->
        <div class="masonry-item" data-category="cuisine" data-src="images/food_01.webp" data-caption="Highland Millet &amp; Indigenous Vegetable Dish">
          <img src="images/food_01.webp" alt="Traditional Food" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Highland Millet &amp; Indigenous Vegetable Dish</div>
          </div>
        </div>

        <!-- ITEM 5 -->
        <div class="masonry-item" data-category="cuisine" data-src="images/food_04.webp" data-caption="Plateau Yam Pottage with Mountain Herbs">
          <img src="images/food_04.webp" alt="Plateau Cuisine" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Plateau Yam Pottage with Mountain Herbs</div>
          </div>
        </div>

        <!-- ITEM 6 -->
        <div class="masonry-item" data-category="culture" data-src="images/events (4).webp" data-caption="Ishokori Cultural Gathering &amp; Archery Rite">
          <img src="images/events (4).webp" alt="Ishokori Festival" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Ishokori Cultural Gathering &amp; Archery Rite</div>
          </div>
        </div>

        <!-- ITEM 7 -->
        <div class="masonry-item" data-category="community" data-src="images/community (1).webp" data-caption="Village Gathering in Naraguta Valley">
          <img src="images/community (1).webp" alt="Village Life" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Village Gathering in Naraguta Valley</div>
          </div>
        </div>

        <!-- ITEM 8 -->
        <div class="masonry-item" data-category="community" data-src="images/hike.webp" data-caption="Youth Hikers on the Granite Hills of Naraguta">
          <img src="images/hike.webp" alt="Hike" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Youth Hikers on the Granite Hills of Naraguta</div>
          </div>
        </div>

        <!-- ITEM 9 -->
        <div class="masonry-item" data-category="culture" data-src="images/06.webp" data-caption="Archery Master Demonstrating Bow Drawing">
          <img src="images/06.webp" alt="Archery Master" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Archery Master Demonstrating Bow Drawing</div>
          </div>
        </div>

        <!-- ITEM 10 -->
        <div class="masonry-item" data-category="culture" data-src="images/12.webp" data-caption="Ceremonial Regalia &amp; Hand-Beaded Adornments">
          <img src="images/12.webp" alt="Regalia" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Ceremonial Regalia &amp; Hand-Beaded Adornments</div>
          </div>
        </div>

        <!-- ITEM 11 -->
        <div class="masonry-item" data-category="royalty" data-src="images/royalty.webp" data-caption="Emblems of the Anaguta Royal Throne">
          <img src="images/royalty.webp" alt="Royal Regalia" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Emblems of the Anaguta Royal Throne</div>
          </div>
        </div>

        <!-- ITEM 12 -->
        <div class="masonry-item" data-category="community" data-src="images/barbing.webp" data-caption="Grassroots Youth Vocational Training">
          <img src="images/barbing.webp" alt="Skills Training" loading="lazy" />
          <div class="masonry-overlay">
            <div class="masonry-caption">Grassroots Youth Vocational Training</div>
          </div>
        </div>
      </div>
    </div>
  </section>

{get_footer()}

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close Lightbox">&times;</button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="Enlarged gallery view" />
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script>
    // Gallery Filter & Lightbox logic
    document.addEventListener('DOMContentLoaded', () => {{
      const filterBtns = document.querySelectorAll('.filter-btn');
      const items = document.querySelectorAll('.masonry-item');
      const lightbox = document.getElementById('lightbox');
      const lbImg = document.getElementById('lightboxImg');
      const lbCaption = document.getElementById('lightboxCaption');
      const lbClose = document.getElementById('lightboxClose');

      filterBtns.forEach(btn => {{
        btn.addEventListener('click', () => {{
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.filter;

          items.forEach(item => {{
            if (cat === 'all' || item.dataset.category === cat) {{
              item.style.display = 'block';
            }} else {{
              item.style.display = 'none';
            }}
          }});
        }});
      }});

      items.forEach(item => {{
        item.addEventListener('click', () => {{
          lbImg.src = item.dataset.src;
          lbCaption.textContent = item.dataset.caption;
          lightbox.classList.add('active');
        }});
      }});

      lbClose.addEventListener('click', () => lightbox.classList.remove('active'));
      lightbox.addEventListener('click', (e) => {{
        if (e.target === lightbox) lightbox.classList.remove('active');
      }});
      document.addEventListener('keydown', (e) => {{
        if (e.key === 'Escape') lightbox.classList.remove('active');
      }});
    }});
  </script>
</body>
</html>'''

with open("gallery.html", "w") as f:
    f.write(gallery_content)
shutil.copy("gallery.html", "media.html")
print("Generated gallery.html and media.html")

# 7. ARTICLES.HTML
articles_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cultural Essays &amp; Historical Stories &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Explore documented essays, clan histories, oral traditions, and cultural analysis of the Anaguta kingdom.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("articles")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/culture (15).webp" alt="Anaguta Cultural Essays" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Essays &middot; Archives &middot; Memoirs</p>
      <h1>Cultural <em>Essays</em> &amp;<br>Stories</h1>
      <p>In-depth historical analyses, elder memoirs, anthropological records, and literary reflections on Anaguta heritage.</p>
    </div>
  </div>

  <!-- ARTICLES LIST -->
  <section class="container reveal" class="articles-section">
    <div class="projects-grid" id="articlesListGrid">
      <!-- Article 1 -->
      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/culture (11).webp" alt="The Sacred Bow" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Warfare &amp; Philosophy &middot; 7 min read</span>
          <h3 class="project-card-title">The Sacred Bow: Warfare, Medicine &amp; Defense in Anaguta Heritage</h3>
          <p>An examination of the Tukwi (Anaguta recurve war bow), the sacred herbal mixtures of ancestral arrows, and tactical highland skirmishes that preserved our sovereignty.</p>
          <a href="article-detail.html?id=1" class="btn-text">Read Full Essay</a>
        </div>
      </div>

      <!-- Article 2 -->
      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/events (4).webp" alt="Ishokori Rites" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Rituals &middot; 5 min read</span>
          <h3 class="project-card-title">Ishokori: The Spiritual Anatomy of the Annual Harvest Thanksgiving</h3>
          <p>The cultural symbolism behind the Ishokori festival, from the first millet blessing by the Ujah to the warrior horns and clan reconciliations.</p>
          <a href="article-detail.html?id=2" class="btn-text">Read Full Essay</a>
        </div>
      </div>

      <!-- Article 3 -->
      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/elders.webp" alt="Oral History" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Linguistics &middot; 6 min read</span>
          <h3 class="project-card-title">The Living Word: Preserving the Anaguta Tongue in a Modern World</h3>
          <p>How the Anaguta language encapsulates ecological wisdom, botanical knowledge of the plateau hills, and communal philosophy across generations.</p>
          <a href="article-detail.html?id=3" class="btn-text">Read Full Essay</a>
        </div>
      </div>

      <!-- Article 4 -->
      <div class="project-card reveal">
        <div class="project-card-img">
          <img src="images/royalty.webp" alt="Royal Lineage" loading="lazy" />
        </div>
        <div class="project-card-body">
          <span class="project-card-label">Royal Dynasty &middot; 8 min read</span>
          <h3 class="project-card-title">The Stool of the Ujah: Sacred Kingship and Elder Governance</h3>
          <p>An archival retrospective on the royal institution of the Ujah of Anaguta, the coronation customs, and the balance of council authority.</p>
          <a href="article-detail.html?id=4" class="btn-text">Read Full Essay</a>
        </div>
      </div>
    </div>
  </section>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>'''

with open("articles.html", "w") as f:
    f.write(articles_content)
print("Generated articles.html")

# 8. ARTICLE-DETAIL.HTML
article_detail_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Reader &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Read full cultural essays and documented histories of the Anaguta kingdom.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("articles")}

  <div class="article-reader-container" id="articleContainer">
    <div class="article-reader-header">
      <div class="article-reader-meta">
        <span id="articleCategory">Heritage &middot; Warfare</span>
        <span>&middot;</span>
        <span id="articleReadTime">7 min read</span>
        <span>&middot;</span>
        <span id="articleDate">October 2026</span>
      </div>
      <h1 class="article-reader-title" id="articleTitle">The Sacred Bow: Warfare, Medicine &amp; Defense in Anaguta Heritage</h1>
      <p class="reader-author" id="articleAuthor">By Elder Yakubu Magaji &amp; Garba Joseph</p>
    </div>

    <img class="article-reader-img" id="articleImg" src="images/culture (11).webp" alt="Article Header" />

    <div class="article-reader-body" id="articleBody">
      <p>For centuries, the rugged highlands of Jos North formed an unassailable fortress for the Anaguta people. But rock and ravine alone did not secure their freedom &mdash; at the heart of Anaguta survival was an instrument of immense reverence: the <strong>Tukwi</strong>, the sacred hunting and war bow.</p>
      
      <h3>The Anatomy of the Tukwi</h3>
      <p>Unlike standard plains bows, the Anaguta bow was carved exclusively from slow-growth mountain acacia wood, cured over smoldering hearth embers to maximize tensile elasticity. Bowstrings were fashioned from twisted antelope sinew or cured wild hemp cordage, capable of withstanding the harsh harmattan winds of the Jos plateau.</p>
      
      <p>Archers were trained from childhood, not solely in marksmanship, but in herbal botany. The tips of war arrows were dipped in secret botanical mixtures known only to master hunters. In tactical skirmishes, Anaguta warriors utilized natural granite caves and watchtowers to spot approaching invaders leagues away, deploying whistling signaling arrows that coordinated defense across clan compounds.</p>

      <h3>Honor and Cultural Ethos</h3>
      <p>The bow was never regarded merely as a weapon of violence; it was an emblem of manhood, responsibility, and defensive honor. To draw the Tukwi unjustly was considered an offense against the ancestors. When a warrior passed into the ancestral realm, his personal bow was hung within the ancestral shrine, symbolizing unbroken vigilance over his descendants.</p>

      <p>Today, as modern sports and digital entertainment capture youth attention, the Anaguta Tradomodern initiative hosts annual archery workshops during the Ishokori festival, ensuring that every young Anaguta can hold the seasoned wood, string the sinew cord, and remember the courage that preserved their freedom.</p>
    </div>

    <div class="reader-actions">
      <a href="articles.html" class="btn-primary">&larr; Back to All Essays</a>
      <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener" class="btn-outline dark">Discuss with Community</a>
    </div>
  </div>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get('id') || '1', 10);
      
      if (window.AnagutaData && window.AnagutaData.articles) {{
        const article = window.AnagutaData.articles.find(a => a.id === id) || window.AnagutaData.articles[0];
        if (article) {{
          document.getElementById('articleTitle').textContent = article.title;
          document.getElementById('articleCategory').textContent = article.category;
          document.getElementById('articleReadTime').textContent = article.readTime;
          document.getElementById('articleDate').textContent = article.date;
          document.getElementById('articleAuthor').textContent = 'By ' + article.author;
          if (article.image) {{
            document.getElementById('articleImg').src = article.image;
          }}
          if (article.content) {{
            document.getElementById('articleBody').innerHTML = article.content;
          }}
        }}
      }}
    }});
  </script>
</body>
</html>'''

with open("article-detail.html", "w") as f:
    f.write(article_detail_content)
print("Generated article-detail.html")

# 9. EVENT.HTML
event_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annual Cultural Festival &amp; Archery Championship &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Official landing page for the Annual Anaguta Cultural Festival & Archery Gathering 2026. Schedule, venue, and RSVP.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("event")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/events (3).jpg" alt="Festival Celebration" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Ishokori 2026 &middot; Royal Convocation</p>
      <h1>Annual <em>Cultural</em><br>Festival &amp; Archery</h1>
      <p>Join His Royal Majesty, the council of elders, and sons and daughters of Anaguta worldwide for three days of sacred thanksgiving, archery championships, and cultural jubilation.</p>
    </div>
  </div>

  <!-- COUNTDOWN SECTION -->
  <section class="container reveal" class="event-countdown-section">
    <span class="section-label">Gathering Countdown</span>
    <h2 class="section-title">Counting Down to <em>Festival Day</em></h2>
    <div class="divider center"></div>

    <div class="event-countdown-container" id="countdownGrid">
      <div class="countdown-box">
        <div class="countdown-number" id="cdDays">42</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number" id="cdHours">14</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number" id="cdMins">36</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number" id="cdSecs">20</div>
        <div class="countdown-label">Seconds</div>
      </div>
    </div>
  </section>

  <!-- EVENT DETAILS & RSVP -->
  <section class="container reveal" class="event-details-section">
    <div class="contact-body">
      <!-- DETAILS & SCHEDULE -->
      <div>
        <span class="section-label">Festival Itinerary</span>
        <h2 class="section-title">Schedule of <em>Rites</em></h2>
        <div class="divider"></div>

        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">&calendar;</div>
            <div class="info-text">
              <h4>Dates &amp; Time</h4>
              <p>December 18 &ndash; 20, 2026 &middot; 9:00 AM Daily</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&pin;</div>
            <div class="info-text">
              <h4>Location &amp; Venue</h4>
              <p>Naraguta Royal Festival Arena &amp; Hills Amphitheatre<br>Jos North LGA, Plateau State, Nigeria</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&bull;</div>
            <div class="info-text">
              <h4>Day 1: Sacred Rites &amp; Royal Convocation</h4>
              <p>Opening blessing by His Royal Majesty the Ujah of Anaguta, pouring of libations, and grand parade of the 12 clans.</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&bull;</div>
            <div class="info-text">
              <h4>Day 2: The Grand Archery Championship</h4>
              <p>Warrior bowmen compete in traditional target marksmanship, mountain tracking runs, and martial exhibition.</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&bull;</div>
            <div class="info-text">
              <h4>Day 3: Harvest Feast &amp; Musical Jubilation</h4>
              <p>Showcase of indigenous Anaguta cuisine, horn-blower ensembles, youth cultural dance troupes, and closing honors.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RSVP FORM -->
      <div class="contact-form">
        <span class="section-label">Reserve Your Seat</span>
        <h3 class="contact-form-title">Register for Attendance</h3>
        <p class="contact-form-desc">Free admission. RSVP to receive VIP seating, festival program brochures, and parking passes.</p>

        <form id="rsvpForm" onsubmit="handleRsvp(event)">
          <div class="form-group">
            <label for="rsvpName">Full Name</label>
            <input type="text" id="rsvpName" required placeholder="e.g. Samuel Garba" />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="rsvpEmail">Email Address</label>
              <input type="email" id="rsvpEmail" required placeholder="name@domain.com" />
            </div>
            <div class="form-group">
              <label for="rsvpPhone">Phone Number</label>
              <input type="tel" id="rsvpPhone" placeholder="+234 803 000 0000" />
            </div>
          </div>

          <div class="form-group">
            <label for="rsvpClan">Clan / Delegation</label>
            <input type="text" id="rsvpClan" placeholder="e.g. Naraguta, Diaspora, Guest" />
          </div>

          <div class="form-group">
            <label for="rsvpDays">Days Attending</label>
            <select id="rsvpDays">
              <option value="all">All 3 Days (Full Festival)</option>
              <option value="day1">Day 1: Royal Convocation</option>
              <option value="day2">Day 2: Archery Championship</option>
              <option value="day3">Day 3: Harvest Feast</option>
            </select>
          </div>

          <button type="submit" class="btn-primary" class="btn-primary btn-block">Confirm Festival RSVP</button>
          
          <div class="form-success" id="rsvpSuccess">
            &check; RSVP confirmed! We look forward to welcoming you to the Anaguta Royal Festival Arena.
          </div>
        </form>
      </div>
    </div>
  </section>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script>
    // Live ticking countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);

    function updateCountdown() {{
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {{
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        document.getElementById('cdDays').textContent = days;
        document.getElementById('cdHours').textContent = hours;
        document.getElementById('cdMins').textContent = mins;
        document.getElementById('cdSecs').textContent = secs;
      }}
    }}
    setInterval(updateCountdown, 1000);
    updateCountdown();

    function handleRsvp(e) {{
      e.preventDefault();
      document.getElementById('rsvpSuccess').style.display = 'block';
      e.target.reset();
    }}
  </script>
</body>
</html>'''

with open("event.html", "w") as f:
    f.write(event_content)
print("Generated event.html")

# 10. CONTACT.HTML
contact_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Secretariat &amp; Community &mdash; Anaguta Trado-Modern</title>
  <meta name="description" content="Get in touch with the Anaguta Tradomodern cultural secretariat, research coordinators, and elders in Jos North, Plateau State.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#2C1A0E">
  <link rel="icon" type="image/jpeg" href="images/logo-icon.jpg">
</head>
<body>
{get_nav("contact")}

  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero-img">
      <img src="images/community (2).webp" alt="Contact Anaguta Tradomodern" />
    </div>
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
      <p class="page-hero-eyebrow">Connect &middot; Collaborate &middot; Inquire</p>
      <h1>Get In <em>Touch</em></h1>
      <p>Whether you are a researcher, community member, cultural enthusiast, or diaspora indigene &mdash; we welcome your collaboration and inquiries.</p>
    </div>
  </div>

  <!-- CONTACT BODY -->
  <section class="contact-section">
    <div class="contact-body">
      <!-- SECRETARIAT INFO -->
      <div>
        <span class="section-label">Secretariat</span>
        <h2 class="section-title">Anaguta <em>Liaison</em></h2>
        <div class="divider"></div>
        <p class="section-sub">Our team operates directly from the heart of Jos North, Plateau State, coordinating research, elder welfare, and cultural archiving.</p>

        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">&pin;</div>
            <div class="info-text">
              <h4>Headquarters</h4>
              <p>Naraguta Heritage Secretariat, Jos North LGA<br>Plateau State, Nigeria</p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&mail;</div>
            <div class="info-text">
              <h4>Email Address</h4>
              <p><a href="mailto:info@anaguta-tradomodern.org">info@anaguta-tradomodern.org</a></p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&phone;</div>
            <div class="info-text">
              <h4>Telephone / WhatsApp</h4>
              <p><a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener">+234 (0) 803 847 9201</a></p>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">&bull;</div>
            <div class="info-text">
              <h4>Office Hours</h4>
              <p>Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM (WAT)</p>
            </div>
          </div>
        </div>

        <div class="wa-banner">
          <div>
            <h3>Join Our Global WhatsApp Circle</h3>
            <p>Engage with thousands of Anaguta youths, researchers, and elders.</p>
          </div>
          <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" target="_blank" rel="noopener" class="btn-primary">Join WhatsApp &rarr;</a>
        </div>
      </div>

      <!-- CONTACT FORM -->
      <div class="contact-form">
        <span class="section-label">Direct Message</span>
        <h3 class="contact-form-title">Send Us an Inquiry</h3>
        <p class="contact-form-desc">Fill out the form below. Our secretariat team responds within 24 to 48 hours.</p>

        <form action="https://formspree.io/f/xyz" method="POST" id="contactForm" onsubmit="handleContactSubmit(event)">
          <div class="form-row">
            <div class="form-group">
              <label for="senderName">Your Full Name</label>
              <input type="text" id="senderName" name="name" required placeholder="e.g. John Danladi" />
            </div>
            <div class="form-group">
              <label for="senderEmail">Email Address</label>
              <input type="email" id="senderEmail" name="email" required placeholder="john@example.com" />
            </div>
          </div>

          <div class="form-group">
            <label for="inquiryType">Topic / Area of Interest</label>
            <select id="inquiryType" name="inquiryType">
              <option value="research">Historical &amp; Cultural Research</option>
              <option value="language">Language Lexicon &amp; Dictionary</option>
              <option value="community">Youth Empowerment &amp; Projects</option>
              <option value="festival">Ishokori Annual Festival</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div class="form-group">
            <label for="senderMessage">Your Message</label>
            <textarea id="senderMessage" name="message" rows="5" required placeholder="Write your message or inquiry here..."></textarea>
          </div>

          <button type="submit" class="btn-primary" class="btn-primary btn-block">Transmit Message &rarr;</button>

          <div class="form-success" id="contactSuccess">
            &check; Message received! Thank you for contacting Anaguta Tradomodern.
          </div>
        </form>
      </div>
    </div>
  </section>

{get_footer()}

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script>
    function handleContactSubmit(e) {{
      e.preventDefault();
      document.getElementById('contactSuccess').style.display = 'block';
      e.target.reset();
    }}
  </script>
</body>
</html>'''

with open("contact.html", "w") as f:
    f.write(contact_content)
print("Generated contact.html")

# -------------------------------------------------------------
# SYNC PUBLIC ASSETS
# -------------------------------------------------------------
os.makedirs("public/css", exist_ok=True)
os.makedirs("public/js", exist_ok=True)

for html_file in ["index.html", "about_us.html", "about.html", "projects.html", "project.html", "dictionary.html", "gallery.html", "media.html", "articles.html", "article-detail.html", "event.html", "contact.html"]:
    if os.path.exists(html_file):
        shutil.copy(html_file, os.path.join("public", html_file))

shutil.copy("css/style.css", "public/css/style.css")
shutil.copy("manifest.json", "public/manifest.json")
shutil.copy("sw.js", "public/sw.js")

if os.path.exists("js/data.js"):
    shutil.copy("js/data.js", "public/js/data.js")
if os.path.exists("js/app.js"):
    shutil.copy("js/app.js", "public/js/app.js")
if os.path.exists("js/dictionary.js"):
    shutil.copy("js/dictionary.js", "public/js/dictionary.js")

print("All site pages generated and synced to public/.")
