/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - SHARED HEADER & FOOTER (js/layout.js)
 * ============================================================================
 * Every page contains just two tags:
 *
 *     <site-header></site-header>     (menu bar + mobile menu)
 *     <site-footer></site-footer>     (footer + offline toast + update banner)
 *
 * and this file draws them. To change the menu, the footer links, the social
 * links or the footer text, edit the lists below ONCE, upload this file, and
 * every page updates.
 *
 * The page you are on is highlighted automatically.
 * ============================================================================
 */
(function () {
  'use strict';

  var WHATSAPP = 'https://whatsapp.com/channel/0029Vb9959Z6mYPP4mNX4o0q';

  /* ---------------------------------------------------------------------------
     1. MAIN MENU  (top bar and phone menu both come from this list)
     A plain link:     { label: 'Event', href: 'event.html', page: 'event.html' }
     A drop-down menu: { label: 'About', children: [ ...plain links... ] }
     page    = the file name that should highlight this item
     navType = for Projects / Articles, which live together on articles.html
     On phones the drop-downs open out as one simple list.
     --------------------------------------------------------------------------- */
  var NAV = [
    { label: 'Home', href: 'index.html', page: 'index.html' },
    {
      label: 'About',
      children: [
        { label: 'About Us', href: 'about_us.html', page: 'about_us.html' },
        { label: 'History',  href: 'history.html',  page: 'history.html' }
      ]
    },
    {
      label: 'Stories',
      children: [
        { label: 'Projects', href: 'articles.html?type=project', navType: 'project' },
        { label: 'Articles', href: 'articles.html?type=article', navType: 'article' }
      ]
    },
    {
      label: 'Culture',
      children: [
        { label: 'Dictionary', href: 'dictionary.html', page: 'dictionary.html' },
        { label: 'Gallery',    href: 'gallery.html',    page: 'gallery.html' }
      ]
    },
    { label: 'Event',   href: 'event.html',   page: 'event.html' },
    { label: 'Contact', href: 'contact.html', page: 'contact.html' }
  ];

  /* ---------------------------------------------------------------------------
     2. FOOTER TEXT AND LINKS
     --------------------------------------------------------------------------- */
  var BRAND_NAME = 'Anaguta Trado-Modern';
  var BRAND_DESC =
    'Promoting Anaguta culture, heritage, language, and community development through design, storytelling, and collective action. Jos, Plateau State, Nigeria.';

  var FOOTER_EXPLORE = [
    ['Home',                'index.html'],
    ['About Us',            'about_us.html'],
    ['History',             'history.html'],
    ['Language Dictionary', 'dictionary.html'],
    ['Community Projects',  'articles.html?type=project'],
    ['Visual Gallery',      'gallery.html'],
    ['Cultural Essays',     'articles.html?type=article'],
    ['Annual Festival',     'event.html']
  ];

  // third item: true = opens in a new tab
  var FOOTER_CONNECT = [
    ['Contact Secretariat',                'contact.html',              false],
    ['Join WhatsApp Community',            WHATSAPP,                    true],
    ['Jos North, Plateau State',           'contact.html#secretariat',  false],
    ['anagutatradomodern01@gmail.com',     'contact.html#inquiries',    false]
  ];

  // icon = the picture inside the round button (simple outline icons)
  var ICONS = {
    facebook:
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    whatsapp:
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  };

  var SOCIAL = [
    { label: 'Facebook',  icon: 'facebook',  href: 'https://web.facebook.com/Anagutatradomodern' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/anagutatradomodern/' },
    { label: 'WhatsApp',  icon: 'whatsapp',  href: WHATSAPP }
  ];

  /* ---------------------------------------------------------------------------
     Work out which page we are on
     --------------------------------------------------------------------------- */
  var file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (file.indexOf('.') === -1) file += '.html'; // GitHub Pages also serves /about_us without ".html"
  var params = new URLSearchParams(window.location.search);

  function isActive(item) {
    if (item.navType) {
      // Projects / Articles share articles.html. On article-detail.html the page's own
      // script (js/articles.js) highlights the right one once it knows the article's type.
      return file === 'articles.html' && (params.get('type') === 'project' ? 'project' : 'article') === item.navType;
    }
    return item.page === file;
  }

  /* ---------------------------------------------------------------------------
     HTML builders
     --------------------------------------------------------------------------- */
  function linkAttrs(item) {
    var a = 'href="' + item.href + '"';
    if (item.navType) a += ' data-nav-type="' + item.navType + '"';
    if (isActive(item)) a += ' class="active" aria-current="page"';
    return a;
  }

  var CHEVRON = '<svg viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 4l4 4 4-4"/></svg>';

  function desktopItem(n) {
    if (!n.children) return '<li><a ' + linkAttrs(n) + '>' + n.label + '</a></li>';

    var id = 'nav-menu-' + n.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    var parentActive = n.children.some(isActive);
    var kids = n.children
      .map(function (c) {
        return '<li><a ' + linkAttrs(c) + '>' + c.label + '</a></li>';
      })
      .join('\n          ');

    return (
      '<li class="has-dropdown">\n' +
      '        <button type="button" class="nav-dropdown-toggle' + (parentActive ? ' active' : '') +
      '" aria-expanded="false" aria-haspopup="true" aria-controls="' + id + '">' + n.label + CHEVRON + '</button>\n' +
      '        <ul class="nav-dropdown" id="' + id + '">\n          ' + kids + '\n        </ul>\n' +
      '      </li>'
    );
  }

  // Phone menu: drop-downs are flattened into one list
  function flatten(list) {
    var out = [];
    list.forEach(function (n) {
      if (n.children) out = out.concat(n.children);
      else out.push(n);
    });
    return out;
  }

  function headerHTML() {
    var desktop = NAV.map(desktopItem).join('\n      ');

    var mobile = flatten(NAV).map(function (n) {
      return '<a ' + linkAttrs(n) + ' onclick="closeMobile()">' + n.label + '</a>';
    }).join('\n    ');

    return (
      '<nav id="navbar">\n' +
      '    <a class="nav-brand-wrap" href="index.html">\n' +
      '      <img src="images/mobile_icon.png" alt="Bow Icon" class="nav-brand-logo" />\n' +
      '      <span class="nav-logo">Anaguta <span>Trado-Modern</span></span>\n' +
      '    </a>\n' +
      '    <ul class="nav-links">\n      ' + desktop + '\n' +
      '      <li><a href="' + WHATSAPP + '" class="nav-cta" target="_blank" rel="noopener">Join Community</a></li>\n' +
      '    </ul>\n' +
      '    <button class="hamburger" id="hamburger" aria-label="Open menu">\n' +
      '      <span></span><span></span><span></span>\n' +
      '    </button>\n' +
      '  </nav>\n\n' +
      '  <div class="mobile-menu" id="mobileMenu">\n    ' + mobile + '\n' +
      '    <a href="' + WHATSAPP + '" class="nav-cta" target="_blank" rel="noopener" onclick="closeMobile()">Join Community</a>\n' +
      '  </div>'
    );
  }

  function footerHTML() {
    var explore = FOOTER_EXPLORE.map(function (l) {
      return '<li><a href="' + l[1] + '">' + l[0] + '</a></li>';
    }).join('\n          ');

    var connect = FOOTER_CONNECT.map(function (l) {
      return '<li><a href="' + l[1] + '"' + (l[2] ? ' target="_blank" rel="noopener"' : '') + '>' + l[0] + '</a></li>';
    }).join('\n          ');

    var social = SOCIAL.map(function (s) {
      return (
        '<a href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.label + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[s.icon] + '</svg></a>'
      );
    }).join('\n        ');

    return (
      '<footer>\n' +
      '    <div class="footer-top">\n' +
      '      <div>\n' +
      '        <img src="images/logo.png" alt="Anaguta Tradomodern Primary Logo" class="footer-brand-logo" />\n' +
      '        <div class="footer-brand-name">' + BRAND_NAME + '</div>\n' +
      '        <p class="footer-brand-desc">' + BRAND_DESC + '</p>\n' +
      '        <img src="images/tri-stripe.png" alt="Tri-Stripe Accent Bar" class="tri-stripe-img" />\n' +
      '      </div>\n' +
      '      <div class="footer-col">\n' +
      '        <h4>Explore</h4>\n' +
      '        <ul>\n          ' + explore + '\n        </ul>\n' +
      '      </div>\n' +
      '      <div class="footer-col">\n' +
      '        <h4>Connect</h4>\n' +
      '        <ul>\n          ' + connect + '\n        </ul>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="footer-bottom">\n' +
      '      <p class="footer-copyright">&copy; <span id="yr"></span> Anaguta Tradomodern \u00b7 Jos, Nigeria. All rights reserved.</p>\n' +
      '      <div class="social-links">\n        ' + social + '\n      </div>\n' +
      '    </div>\n' +
      '  </footer>\n\n' +
      '  <div class="pwa-toast" id="pwaToast">\n' +
      '    <span>Offline mode active: browsing cached Anaguta heritage archives.</span>\n' +
      '  </div>\n' +
      '  <div class="pwa-update-banner" id="pwaUpdateBanner">\n' +
      '    <p>A new version of Anaguta Tradomodern is available.</p>\n' +
      '    <button type="button" onclick="applyPwaUpdate()">Update now</button>\n' +
      '  </div>'
    );
  }

  /* ---------------------------------------------------------------------------
     Custom tags. This file is loaded in the <head>, so the tags are filled in the
     moment the browser reaches them: no flash of an empty menu.
     --------------------------------------------------------------------------- */
  function define(tag, build) {
    if (window.customElements.get(tag)) return;
    window.customElements.define(
      tag,
      class extends HTMLElement {
        connectedCallback() {
          this.innerHTML = build();
        }
      }
    );
  }

  define('site-header', headerHTML);
  define('site-footer', footerHTML);
})();
