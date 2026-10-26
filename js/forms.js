/**
 * ============================================================================
 * ANAGUTA TRADOMODERN - CONTACT & RSVP FORMS (js/forms.js)
 * ============================================================================
 * Makes the contact form (contact.html) and the festival RSVP form (event.html)
 * really deliver the visitor's message.
 *
 * TWO MODES - you choose by the one line marked "ENDPOINT" below:
 *
 *  1) ENDPOINT left empty (works today, no account needed)
 *     The visitor's details are written into a WhatsApp message to the secretariat
 *     number, WhatsApp opens with it ready, and they tap Send.
 *
 *  2) ENDPOINT filled in (messages arrive in your email inbox)
 *     Create a free form at https://formspree.io, copy its address
 *     (it looks like https://formspree.io/f/abcdwxyz) and paste it below.
 *     The form then sends in the background and shows a "received" message.
 *     If sending ever fails, the visitor is offered the WhatsApp route instead.
 * ============================================================================
 */
(function () {
  'use strict';

  var CONFIG = {
    ENDPOINT: '',                       // <-- paste your Formspree address here (or leave empty)
    WHATSAPP_NUMBER: '2347068969598',   // secretariat WhatsApp, international format, no + or spaces
    SENDING_LABEL: 'Sending\u2026'
  };

  // Each form: which fields to collect (label shown in the message, id of the input)
  var FORMS = {
    contactForm: {
      successId: 'contactSuccess',
      subject: 'Website inquiry',
      intro: 'Hello Anaguta Tradomodern, I am contacting you from your website.',
      fields: [
        ['Name', 'senderName'],
        ['Email', 'senderEmail'],
        ['Topic', 'inquiryType'],
        ['Message', 'senderMessage']
      ],
      received: 'Message received! Thank you for contacting Anaguta Tradomodern. We will reply within 24 to 48 hours.'
    },
    rsvpForm: {
      successId: 'rsvpSuccess',
      subject: 'Festival RSVP',
      intro: 'Hello, I would like to RSVP for the Usara Anaguta Cultural Festival.',
      fields: [
        ['Name', 'rsvpName'],
        ['Email', 'rsvpEmail'],
        ['Phone', 'rsvpPhone'],
        ['Clan / Delegation', 'rsvpClan'],
        ['Days attending', 'rsvpDays']
      ],
      received: 'RSVP confirmed! We look forward to welcoming you to the Anaguta Royal Festival Arena.'
    }
  };

  function readValue(el) {
    if (!el) return '';
    if (el.tagName === 'SELECT') {
      return el.selectedIndex >= 0 ? el.options[el.selectedIndex].text.trim() : '';
    }
    return (el.value || '').trim();
  }

  function collect(cfg) {
    return cfg.fields
      .map(function (f) {
        return { label: f[0], value: readValue(document.getElementById(f[1])) };
      })
      .filter(function (f) {
        return f.value;
      });
  }

  function whatsappUrl(cfg, data) {
    var lines = [cfg.intro, ''].concat(
      data.map(function (d) {
        return d.label + ': ' + d.value;
      })
    );
    return 'https://wa.me/' + CONFIG.WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  // Show a message in the form's result box (built with the DOM so visitor text is never run as HTML)
  function show(box, parts, isError) {
    box.textContent = '';
    parts.forEach(function (p) {
      if (typeof p === 'string') {
        box.appendChild(document.createTextNode(p));
      } else {
        var a = document.createElement('a');
        a.href = p.href;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = p.text;
        box.appendChild(a);
      }
    });
    box.classList.toggle('is-error', !!isError);
    box.style.display = 'block';
    if (box.scrollIntoView) box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function setup(formId, cfg) {
    var form = document.getElementById(formId);
    var box = document.getElementById(cfg.successId);
    if (!form || !box) return;

    box.setAttribute('role', 'status');
    box.setAttribute('aria-live', 'polite');

    // Hidden trap field: real people never see it, spam bots fill it in
    var trap = document.createElement('input');
    trap.type = 'text';
    trap.name = '_gotcha';
    trap.className = 'hp-field';
    trap.tabIndex = -1;
    trap.autocomplete = 'off';
    trap.setAttribute('aria-hidden', 'true');
    form.appendChild(trap);

    var button = form.querySelector('button[type="submit"]');
    var buttonText = button ? button.innerHTML : '';

    function busy(on) {
      if (!button) return;
      button.disabled = on;
      button.innerHTML = on ? CONFIG.SENDING_LABEL : buttonText;
    }

    function viaWhatsApp(data) {
      var url = whatsappUrl(cfg, data);
      window.open(url, '_blank', 'noopener');
      show(box, [
        'Almost done! WhatsApp is opening with your message ready \u2014 tap Send to deliver it. ',
        { href: url, text: 'WhatsApp did not open? Tap here.' }
      ]);
      form.reset();
    }

    // Capture phase + stopImmediatePropagation: this handler is the only one that runs
    form.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Spam trap triggered: pretend it worked, send nothing
        if (trap.value) {
          show(box, [cfg.received]);
          form.reset();
          return;
        }

        var data = collect(cfg);

        if (!CONFIG.ENDPOINT) {
          viaWhatsApp(data);
          return;
        }

        var payload = { _subject: cfg.subject + ' \u2014 Anaguta Tradomodern website' };
        data.forEach(function (d) {
          payload[d.label] = d.value;
        });
        var emailField = document.getElementById(cfg.fields[1][1]);
        if (emailField && emailField.value) payload._replyto = emailField.value.trim();

        busy(true);
        fetch(CONFIG.ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            show(box, [cfg.received]);
            form.reset();
          })
          .catch(function () {
            show(
              box,
              [
                'Sorry, we could not send that just now. Please send it on WhatsApp instead: ',
                { href: whatsappUrl(cfg, data), text: 'Open WhatsApp with my message' }
              ],
              true
            );
          })
          .then(function () {
            busy(false);
          });
      },
      true
    );
  }

  Object.keys(FORMS).forEach(function (id) {
    setup(id, FORMS[id]);
  });
})();
