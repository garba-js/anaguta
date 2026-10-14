/**
 * Anaguta Tradomodern - Event Page Logic (js/event.js)
 * Handles:
 * - Live ticking festival countdown timer
 * - RSVP form submission handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initRsvpForm();
});

// 1. Festival Countdown Timer
function initCountdown() {
  // Target date: December 31, 2026 at 00:00:00 (Month index 11 = December)
  const targetDate = new Date(2026, 11, 31, 0, 0, 0);

  function updateCountdown() {
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins = document.getElementById('cdMins');
    const cdSecs = document.getElementById('cdSecs');

    // Prevent errors if timer elements aren't present
    if (!cdDays || !cdHours || !cdMins || !cdSecs) return;

    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      cdDays.textContent = days;
      cdHours.textContent = hours;
      cdMins.textContent = mins;
      cdSecs.textContent = secs;
    } else {
      cdDays.textContent = 0;
      cdHours.textContent = 0;
      cdMins.textContent = 0;
      cdSecs.textContent = 0;
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// 2. RSVP Form Handler
function initRsvpForm() {
  const rsvpForm = document.getElementById('rsvpForm'); // Ensure your <form> has id="rsvpForm" or use window handler below
  
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', handleRsvp);
  }
}

function handleRsvp(e) {
  e.preventDefault();
  const successMsg = document.getElementById('rsvpSuccess');
  if (successMsg) {
    successMsg.style.display = 'block';
  }
  e.target.reset();
}

// Attach to window so inline target onsubmit="handleRsvp(event)" works if needed
window.handleRsvp = handleRsvp;