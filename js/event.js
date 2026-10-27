/**
 * Anaguta Tradomodern - Event Page Logic (js/event.js)
 * Handles:
 * - Live ticking festival countdown timer
 *
 * (The RSVP form is handled by js/forms.js.)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
});

// 1. Festival Countdown Timer
function initCountdown() {
  // FESTIVAL START: January 1, 2027 at 6:00 PM Nigerian time (+01:00).
  // Must match the date and time shown on event.html. Format: 'YYYY-MM-DDThh:mm:ss+01:00'
  const targetDate = new Date('2027-01-01T18:00:00+01:00');

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
