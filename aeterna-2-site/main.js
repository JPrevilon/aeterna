/* ==========================================================================
   Aeterna 2.0 — site behaviour
   Implementation of "Aeterna 2.0 Site.dc.html" (Claude Design)
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------- config -- */

  /* Cache buster for the tour clips. The files are served with a week-long
     max-age and their names are not content-hashed, so replacing a clip in
     place leaves returning visitors on the old one until it expires.
     Bump this whenever a clip is re-cut. */
  var CLIP_VERSION = '2';

  // Six clips, one per gap between the seven tour chapters.
  var TOUR_CLIPS = [
    'assets/tour/clip-01.mp4',
    'assets/tour/clip-02.mp4',
    'assets/tour/clip-03.mp4',
    'assets/tour/clip-04.mp4',
    'assets/tour/clip-05.mp4',
    'assets/tour/clip-06.mp4'
  ].map(function (src) { return src + '?v=' + CLIP_VERSION; });

  /* Origin of the Aeterna app that serves /api/contact and /api/newsletter.
     Empty means same origin. Point it at the deployed app when this static
     site is hosted separately, e.g. 'https://aeterna.example.com'. */
  var API_BASE = '';

  var CHAPTER_COUNT = 7;          // chapters, incl. the opening and closing cards
  var QUOTE_INTERVAL = 5000;      // testimonial auto-advance, ms
  var SHOW_BEFORE_AFTER = true;   // set false to drop the comparison sliders

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  var clamp = function (v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; };

  /* ---------------------------------------------------------- spa tour --- */

  function initTour() {
    var track = $('.tour');
    if (!track) return;

    var videos   = $$('.tour__clip');
    var captions = $$('.tour__caption');
    var railItems = $$('.tour__rail-item');
    var openCard  = $('#tourOpen');
    var closeCard = $('#tourClose');
    var loader    = $('#tourLoader');
    var loaderBar = $('#tourLoaderBar');

    var gaps = CHAPTER_COUNT - 1;   // 6 clips across 7 chapters
    var smoothed = null;            // eased scroll progress, 0..1
    var lastActive = -1;
    var blobUrls = [];
    var ready = [];

    // Point each element at its clip up front so the first frames can decode
    // while the sequential prefetch below is still running.
    videos.forEach(function (v, i) {
      if (TOUR_CLIPS[i]) v.src = TOUR_CLIPS[i];
    });

    /* Sequential prefetch: clip 1 first so the tour is scrubbable immediately,
       then the rest in order, so bandwidth isn't split six ways. Each clip is
       swapped to a fully-buffered blob, which makes seeking stall-free. */
    function prefetch(i) {
      if (i >= TOUR_CLIPS.length) return;
      fetch(TOUR_CLIPS[i])
        .then(function (r) { return r.ok ? r.blob() : null; })
        .then(function (blob) {
          if (blob) {
            var url = URL.createObjectURL(blob);
            blobUrls.push(url);
            var v = videos[i];
            if (v) {
              var at = v.currentTime;
              v.src = url;
              v.load();
              v.addEventListener('loadeddata', function () {
                ready[i] = true;
                // Warm the decoder so the first seek into this clip isn't a stall.
                try { v.currentTime = 0.04; } catch (err) { /* not seekable yet */ }
                paintLoader();
              }, { once: true });
              try { v.currentTime = at; } catch (err) { /* not seekable yet */ }
            }
          }
          paintLoader();
          prefetch(i + 1);
        })
        .catch(function () { prefetch(i + 1); });
    }

    function paintLoader() {
      if (!loader) return;
      var done = ready.filter(Boolean).length;
      if (loaderBar) loaderBar.style.width = Math.round((done / TOUR_CLIPS.length) * 100) + '%';
      loader.classList.toggle('is-done', done >= TOUR_CLIPS.length);
    }

    function progress() {
      var span = track.offsetHeight - window.innerHeight;
      if (span <= 0) return 0;
      return clamp((window.scrollY - track.offsetTop) / span, 0, 1);
    }

    function render() {
      var raw = progress();

      // Ease towards the raw value so flick-scrolling doesn't judder the scrub.
      if (smoothed === null || reduceMotion) smoothed = raw;
      else {
        smoothed += (raw - smoothed) * 0.14;
        if (Math.abs(smoothed - raw) < 0.0005) smoothed = raw;
      }

      var p = smoothed;
      var x = p * gaps;
      var index = Math.min(gaps - 1, Math.floor(x));
      var local = x - index;

      // Keep the neighbouring clips barely painted, so the compositor holds a
      // decoded frame ready and the cut to the next clip doesn't flash black.
      videos.forEach(function (v, i) {
        v.style.opacity = i === index ? 1 : (i === index - 1 || i === index + 1) ? 0.001 : 0;
      });

      var active = videos[index];
      if (active && active.readyState >= 1 && !active.seeking) {
        var duration = isFinite(active.duration) && active.duration > 0 ? active.duration : 5;
        var t = clamp(local * duration, 0, duration - 0.05);
        if (Math.abs(active.currentTime - t) > 0.033) active.currentTime = t;
      }

      var chapter = clamp(Math.round(x), 0, CHAPTER_COUNT - 1);
      if (chapter !== lastActive) {
        lastActive = chapter;
        railItems.forEach(function (item, i) {
          item.classList.toggle('is-active', i === chapter);
        });
      }

      captions.forEach(function (cap) {
        var i = Number(cap.dataset.chapter);
        cap.classList.toggle('is-active', Math.abs(p - i / gaps) < 0.045);
      });

      if (openCard) {
        var o = clamp(1 - p / 0.055, 0, 1);
        openCard.style.opacity = o;
        openCard.style.pointerEvents = o > 0.4 ? 'auto' : 'none';
      }
      if (closeCard) {
        var c = clamp((p - 0.9) / 0.07, 0, 1);
        closeCard.style.opacity = c;
        closeCard.style.pointerEvents = c > 0.4 ? 'auto' : 'none';
      }
    }

    railItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var i = Number(item.dataset.jump);
        var span = track.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: track.offsetTop + (i / gaps) * span,
          behavior: reduceMotion ? 'auto' : 'smooth'
        });
      });
    });

    var running = true;
    (function loop() {
      if (!running) return;
      if (!document.hidden) render();
      requestAnimationFrame(loop);
    }());

    window.addEventListener('pagehide', function () {
      running = false;
      blobUrls.forEach(URL.revokeObjectURL);
    });

    paintLoader();
    prefetch(0);
    render();
  }

  /* --------------------------------------------------------------- nav --- */

  function initNav() {
    var nav = $('#nav');
    var track = $('.tour');
    if (!nav) return;

    function paint() {
      var threshold = 40;
      if (track) {
        threshold = Math.max(track.offsetTop + track.offsetHeight - window.innerHeight - 80, 40);
      }
      var solid = window.scrollY > threshold;
      nav.classList.toggle('nav--solid', solid);
      nav.classList.toggle('nav--over-media', !solid);
    }

    var queued = false;
    function schedule() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; paint(); });
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    paint();
  }

  /* ------------------------------------------------------- reveal-on-scroll */

  function initReveals() {
    var targets = $$('.reveal');
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
      io.observe(el);
      // Catch anything already on screen (scroll restore, deep link).
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  }

  /* -------------------------------------------------------- treatments --- */

  function initTreatments() {
    var tabs   = $$('.cats__btn');
    var panels = $$('.menu__panel');
    var shots  = $$('.shots__img');
    var fallbackCard = $('.shots__fallback');
    if (!tabs.length) return;

    function select(index) {
      tabs.forEach(function (tab, i) {
        tab.setAttribute('aria-selected', String(i === index));
      });
      panels.forEach(function (panel, i) { panel.hidden = i !== index; });
      shots.forEach(function (shot, i) { shot.classList.toggle('is-active', i === index); });
      paintShotFallback();
    }

    // The symbol card shows only while the active still is missing.
    function paintShotFallback() {
      if (!fallbackCard) return;
      var active = shots.filter(function (s) { return s.classList.contains('is-active'); })[0];
      fallbackCard.hidden = !(active && active.dataset.failed === '1');
    }

    shots.forEach(function (shot) {
      shot.addEventListener('error', function () {
        shot.dataset.failed = '1';
        shot.style.display = 'none';
        paintShotFallback();
      });
    });

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i); });
      tab.addEventListener('keydown', function (e) {
        var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        e.preventDefault();
        var next = (i + step + tabs.length) % tabs.length;
        tabs[next].focus();
        select(next);
      });
    });

    // Footer treatment links jump to the section with that category open.
    $$('[data-cat]').forEach(function (link) {
      if (link.classList.contains('cats__btn')) return;
      link.addEventListener('click', function () { select(Number(link.dataset.cat)); });
    });

    select(0);
  }

  /* ------------------------------------------------------- testimonials -- */

  function initQuotes() {
    var root  = $('#quotes');
    var track = $('#quotesTrack');
    if (!root || !track) return;

    var count = track.children.length;
    var index = 0;
    var timer = null;

    function paint() { track.style.transform = 'translateX(-' + index * 100 + '%)'; }

    function step(delta) {
      index = (index + delta + count) % count;
      paint();
    }

    function start() {
      if (reduceMotion || timer) return;
      timer = setInterval(function () { step(1); }, QUOTE_INTERVAL);
    }

    function stop() { clearInterval(timer); timer = null; }

    $$('[data-quote-step]', root).forEach(function (btn) {
      btn.addEventListener('click', function () {
        step(Number(btn.dataset.quoteStep));
        stop();
        start();
      });
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    paint();
    start();
  }

  /* ------------------------------------------------ before / after slider  */

  function initBeforeAfter() {
    var section = $('#beforeAfter');
    if (!section) return;

    if (!SHOW_BEFORE_AFTER) {
      section.remove();
      return;
    }

    $$('[data-ba]', section).forEach(function (frame) {
      var clip   = $('[data-ba-clip]', frame);
      var handle = $('[data-ba-handle]', frame);
      var before = $('[data-ba-before]', frame);
      var after  = $('[data-ba-after]', frame);

      function setPosition(pct) {
        pct = clamp(pct, 2, 98);
        // Clip from the right rather than shrinking the box, so the two images
        // stay in register at every handle position.
        clip.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
        handle.style.left = pct + '%';
      }

      function fromEvent(e) {
        var r = frame.getBoundingClientRect();
        setPosition(((e.clientX - r.left) / r.width) * 100);
      }

      frame.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        fromEvent(e);
        function move(ev) { fromEvent(ev); }
        function up() {
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
        }
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
      });

      // Missing photo: show the symbol card instead of a broken image.
      [before, after].forEach(function (img) {
        if (!img) return;
        img.addEventListener('error', function () {
          if ($('.ba__fallback', frame)) return;
          var card = document.createElement('div');
          card.className = 'ba__fallback';
          card.innerHTML = '<img src="assets/brand/aeterna-symbol.png" alt="" aria-hidden="true">';
          frame.appendChild(card);
        });
      });

      setPosition(50);
    });
  }

  /* --------------------------------------------------------- form posts -- */

  function say(el, message, isError) {
    el.textContent = message;
    el.classList.toggle('form-status--error', !!isError);
  }

  function post(path, payload) {
    return fetch(API_BASE + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (res.ok) return true;
      // 429 is the API's own rate limit; surface it as its own message.
      var err = new Error(res.status === 429 ? 'rate-limited' : 'failed');
      err.status = res.status;
      throw err;
    });
  }

  function failureMessage(err) {
    if (err && err.status === 429) return 'Too many messages just now — please try again shortly.';
    if (err && err.status === 400) return 'Please check the details above and try again.';
    return 'Could not send just now. Please call (305) 206-2630 or email us directly.';
  }

  /* Contact form → /api/contact ({name, email, phone?, interest?, message}),
     matching the project's leadSchema. */
  function initContactForm() {
    var form   = $('#contactForm');
    var status = $('#cfStatus');
    var submit = $('#cfSubmit');
    if (!form || !status) return;

    var fields = ['cfName', 'cfEmail', 'cfMessage'].map(function (id) { return $('#' + id); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var invalid = null;
      fields.forEach(function (el) {
        var ok = el.checkValidity();
        el.setAttribute('aria-invalid', String(!ok));
        if (!ok && !invalid) invalid = el;
      });
      if (invalid) {
        say(status, 'Please complete the required fields.', true);
        invalid.focus();
        return;
      }

      var payload = {
        name: $('#cfName').value.trim(),
        email: $('#cfEmail').value.trim(),
        message: $('#cfMessage').value.trim()
      };
      var phone = $('#cfPhone').value.trim();
      var interest = $('#cfInterest').value;
      if (phone) payload.phone = phone;
      if (interest) payload.interest = interest;

      submit.disabled = true;
      say(status, 'Sending…');

      post('/api/contact', payload)
        .then(function () {
          // Opt-in is a separate list; a failure here must not fail the message.
          if ($('#cfNewsletter').checked) {
            return post('/api/newsletter', { email: payload.email, name: payload.name })
              .catch(function () {});
          }
        })
        .then(function () {
          form.reset();
          fields.forEach(function (el) { el.removeAttribute('aria-invalid'); });
          say(status, 'Thank you — your message is on its way. We will be in touch shortly.');
        })
        .catch(function (err) { say(status, failureMessage(err), true); })
        .then(function () { submit.disabled = false; });
    });
  }

  /* Footer list sign-up → /api/newsletter ({email, name?}). */
  function initSignup() {
    var form   = $('#signup');
    var status = $('#signupStatus');
    if (!form || !status) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = $('#signupEmail');
      if (!input.value || !input.checkValidity()) {
        say(status, 'Please enter a valid email address.', true);
        input.focus();
        return;
      }
      say(status, 'Joining…');
      post('/api/newsletter', { email: input.value.trim() })
        .then(function () { form.reset(); say(status, 'Welcome to the Aeterna list.'); })
        .catch(function (err) { say(status, failureMessage(err), true); });
    });
  }

  /* --------------------------------------------------------------- boot -- */

  function boot() {
    initNav();
    initReveals();
    initTour();
    initTreatments();
    initQuotes();
    initBeforeAfter();
    initContactForm();
    initSignup();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
}());
