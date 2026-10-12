import os
import shutil

print("Writing full site pages...")

# -------------------------------------------------------------
# 1. NAVBAR & FOOTER HTML HELPERS
# -------------------------------------------------------------
def get_header(active_page="home"):
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
    
    nav_links_html = ""
    mobile_links_html = ""
    for href, key, label in links:
        cls = ' class="active"' if key == active_page else ""
        nav_links_html += f'      <li><a href="{href}"{cls}>{label}</a></li>\n'
        mobile_links_html += f'    <a href="{href}"{cls} onclick="closeMobile()">{label}</a>\n'
    
    return f'''  <!-- NAV -->
  <nav id="navbar">
    <a class="nav-brand-wrap" href="index.html">
      <img src="images/logo-icon.jpg" alt="Anaguta Bow Logo" class="nav-brand-logo" />
      <span class="nav-logo">Anaguta <span>Trado-Modern</span></span>
    </a>
    <ul class="nav-links">
{nav_links_html}      <li><a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" class="nav-cta" target="_blank" rel="noopener">Join Community</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu">
{mobile_links_html}    <a href="https://chat.whatsapp.com/Hre6TpsxCXdEBAmFoIc1O5" class="nav-cta" target="_blank" rel="noopener" onclick="closeMobile()">Join Community</a>
  </div>'''

def get_footer():
    return '''  <!-- FOOTER -->
  <footer>
    <div class="footer-top">
      <div>
        <div class="footer-brand-name">Anaguta Trado-Modern</div>
        <p class="footer-brand-desc">Promoting Anaguta culture, heritage, and community development through design, storytelling, and action. Jos, Plateau State, Nigeria.</p>
        <div class="tri-stripe-bar"></div>
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
    <span>Offline mode active: viewing cached Anaguta heritage resources.</span>
  </div>'''

print("Helper functions ready.")
