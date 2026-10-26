/**
 * Anaguta Tradomodern - Core Application Logic (js/app.js)
 * Matching the UI/UX behavior from garba-js.github.io/anaguta
 * Handles:
 * - Scrolled Navbar & Mobile Menu Toggle
 * - Scroll Reveal Animations with IntersectionObserver
 * - Project Details Modal Popups
 * - Event Announcement Bar Dismissal
 * - PWA Service Worker Registration, Update Prompt & Offline Toast
 * - Pronunciation Speech Synthesis
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initProjectModal();
  initEventBanner();
  initServiceWorker();
  initCopyrightYear();
});

// Global variable to store the waiting service worker instance
let newWorker;

// 1. Scrolled Navbar
// The event announcement bar sits at the top of the page, and the navbar is fixed.
// updateNavOffset() keeps the navbar just under the bar, then lets it slide up to the top
// of the screen as the bar scrolls out of view (or when the bar is dismissed).
function updateNavOffset() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const bar = document.getElementById('eventBar');
  const barHeight = bar && bar.offsetParent !== null ? bar.getBoundingClientRect().height : 0;
  navbar.style.top = Math.max(0, barHeight - window.scrollY) + 'px';
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateNavOffset();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateNavOffset);
  window.addEventListener('load', updateNavOffset); // web fonts can change the bar height
  onScroll();
}

// 2. Mobile Menu
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'mobileMenu');

    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobile();
        hamburger.focus();
      }
    });
  }
}

function closeMobile() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }
}
window.closeMobile = closeMobile;

// 3. Scroll Reveal with IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, (i % 6) * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}

// 4. Project Modal Handler
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalYear = document.getElementById('modalYear');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');
  const openButtons = document.querySelectorAll('.open-modal');

  if (!modal) return;

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (modalTitle) modalTitle.textContent = button.dataset.title || 'Project Details';
      if (modalYear) modalYear.textContent = button.dataset.year || 'Initiative · 2026';
      if (modalImage && button.dataset.image) modalImage.src = button.dataset.image;
      if (modalDescription) modalDescription.textContent = button.dataset.description || '';
      modal.classList.add('active');
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

// 5. Dismissable Event Banner
function initEventBanner() {
  const eventBar = document.getElementById('eventBar');
  const closeBtn = document.getElementById('closeEventBar');

  if (!eventBar) return;

  if (sessionStorage.getItem('anaguta_event_dismissed') === 'true') {
    eventBar.style.display = 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      eventBar.style.display = 'none';
      sessionStorage.setItem('anaguta_event_dismissed', 'true');
      updateNavOffset();
    });
  }

  updateNavOffset();
}

// 6. Service Worker, Update Detection & Offline Status
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Automatically detect if we are on GitHub Pages or Localhost
      const swUrl = window.location.pathname.startsWith('/anaguta') 
        ? '/anaguta/sw.js' 
        : './sw.js';

      navigator.serviceWorker.register(swUrl)
        .then((reg) => {
          console.log('Service Worker registered successfully:', reg.scope);

          // Check if a new service worker is already waiting
          if (reg.waiting) {
            newWorker = reg.waiting;
            showUpdatePopup();
          }

          // Listen for new updates installed in the background
          reg.addEventListener('updatefound', () => {
            newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  showUpdatePopup();
                }
              });
            }
          });
        })
        .catch((err) => console.error('Service Worker registration failed:', err));
    });

// Only reload on updates, not on the very first install
const hadController = !!navigator.serviceWorker.controller;
let refreshing = false;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (!hadController || refreshing) return;
  refreshing = true;
  window.location.reload();
});
  }

  // Offline / Online Toast logic
  const toast = document.getElementById('pwaToast');
  function updateOnlineStatus() {
    if (toast) {
      if (!navigator.onLine) {
        toast.classList.add('show');
      } else {
        toast.classList.remove('show');
      }
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

// Helper: Show the update popup banner
function showUpdatePopup() {
  const updateBanner = document.getElementById('pwaUpdateBanner');
  if (updateBanner) {
    updateBanner.classList.add('show');
  }
}

// Global function to trigger update on button click
window.applyPwaUpdate = function () {
  if (newWorker) {
    newWorker.postMessage({ type: 'SKIP_WAITING' });
  }
};

// 7. Dynamic Copyright Year
function initCopyrightYear() {
  const yr = document.getElementById('yr');
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
}

// 8. Global Speech Synthesis Helper
window.playWord = function (word, phonetic) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(word);
    utter.rate = 0.85;
    utter.pitch = 1.0;
    utter.lang = 'en-NG';
    window.speechSynthesis.speak(utter);
  }
};