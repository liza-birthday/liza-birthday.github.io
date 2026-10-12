/* =========================================================
   BIRTHDAY WEBSITE — script.js
   1) CONFIG  → edit ALL your personal content here
   2) Engine  → particles, helpers, sections (no need to edit)
   Most effects fire ON CLICK/TAP.
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIG — personalise everything in this one object
   Use {name} for her name and {me} for your name in text.
--------------------------------------------------------- */
const CONFIG = {
  herName: "Lizaa",                 // <-- her name
  myName: "Neev",                 // <-- your name
  birthday: "2026-10-16T00:00:00",     // her birthday, local time (YYYY-MM-DDTHH:MM:SS)
  startDate: "2024-02-14",             // the day your story began (YYYY-MM-DD)
  musicFile: "audio/song.mp3",         // put your song in the audio folder
  candleCount: 5,

  heroGreeting: "Happy Birthday,",
  heroPre: "Tap anywhere on the page — every tap has a little magic ✨",
  heroSub: "This little corner of the internet is made only for you, {name}. Open every part of it.",

  wishTitle: "Make a wish ❤️",
  wishSub: "Whatever you wish for, I'll spend my life helping it come true.",

  footerText: "Forever yours, {me}",

  /* Our Story — add / remove / edit events freely */
  timeline: [
    { date: "The very beginning", emoji: "✨", title: "The day we met",
      text: "I didn't know it then, but my whole life was about to change. Write how and where you first met here." },
    { date: "Our first date", emoji: "🍽️", title: "Nervous smiles",
      text: "Describe the place, what you ate, the thing she said that you still remember." },
    { date: "A special day", emoji: "💌", title: "When I knew",
      text: "The moment you realised she was the one. Make it personal." },
    { date: "Our first trip", emoji: "🧳", title: "Adventures together",
      text: "Where did you go? What went wrong and made it even more fun?" },
    { date: "A hard day", emoji: "🤝", title: "You stayed",
      text: "A time you got through something together and came out stronger." },
    { date: "Today", emoji: "🎂", title: "Still choosing you",
      text: "Every single day, I would choose you again. Happy birthday, my love." }
  ],

  /* Gallery — src is the file in /images. caption shows on hover and in the viewer */
  photos: [
    { src: "images/photo1.jpg",  caption: "Where it all began" },
    { src: "images/photo2.jpg",  caption: "That smile" },
    { src: "images/photo3.jpg",  caption: "Our favourite place" },
    { src: "images/photo4.jpg",  caption: "Laughing for no reason" },
    { src: "images/photo5.jpg",  caption: "Golden hour with you" },
    { src: "images/photo6.jpg",  caption: "Perfect day" },
    { src: "images/photo7.jpg",  caption: "Us being us" },
    { src: "images/photo8.jpg",  caption: "My favourite person" },
    { src: "images/photo9.jpg",  caption: "Adventure mode" },
    { src: "images/photo10.jpg", caption: "Cosy moments" },
    { src: "images/photo11.jpg", caption: "Just you" },
    { src: "images/photo12.jpg", caption: "Forever starts here" }
  ],

  /* Memories — flip cards (front photo, back text) */
  memories: [
    { img: "images/photo2.jpg",  title: "That first hello",   text: "Write the memory here. The little details are what make her smile." },
    { img: "images/photo5.jpg",  title: "Our best day",       text: "The day everything felt perfect, and why." },
    { img: "images/photo7.jpg",  title: "Inside joke",        text: "Something only the two of you understand." },
    { img: "images/photo9.jpg",  title: "That trip",          text: "A place you went together and what you'll never forget about it." },
    { img: "images/photo10.jpg", title: "Quiet moments",      text: "The small, ordinary times that mean the most." },
    { img: "images/photo12.jpg", title: "Our future",         text: "What you promise her for all the days to come." }
  ],

  /* Reasons I love you */
  reasons: [
    "Your smile fixes my worst days.",
    "You listen like what I say really matters.",
    "You laugh at my silly jokes (even the bad ones).",
    "You make ordinary moments feel special.",
    "You are kind to everyone you meet.",
    "You believe in me, even when I don't.",
    "The way you say my name.",
    "You are brave in ways you don't even notice.",
    "You make home feel like a person.",
    "Your hugs are my favourite place.",
    "You care so deeply about the people you love.",
    "You make me want to be better every day.",
    "Your eyes light up when you talk about what you love.",
    "You are my best friend and my favourite adventure.",
    "Because it's you. It was always going to be you."
  ],

  /* Love letter — each string is one paragraph, typed out line by line */
  letter: {
    title: "My dearest {name},",
    lines: [
      "Happy Birthday, my love. Today the world celebrates the day it got you, and I'm the luckiest person in it.",
      "Since you came into my life, everything feels softer and brighter. Even the plain days have a little sparkle because you're in them.",
      "Thank you for your patience, your laughter, and the way you love me exactly as I am.",
      "Write your own heartfelt words here: a promise, a memory, something only you would say to her.",
      "I hope this year brings you every happiness you deserve, and I hope I'm beside you for all of it.",
      "I love you more than these words can ever hold."
    ],
    signature: "Forever yours, Neev ❤"
  }
};


/* =========================================================
   2) ENGINE — you don't need to edit below this line
   ========================================================= */
(() => {
  'use strict';

  /* ---------- Helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const R = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // fewer particles on phones / reduced-motion
  const scale = () => (reduce ? 0.3 : window.innerWidth < 640 ? 0.6 : 1);
  const fill = s => String(s).split('{name}').join(CONFIG.herName).split('{me}').join(CONFIG.myName);
  const pad = n => String(n).padStart(2, '0');

  function h(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function restart(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function center(el) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  /* ---------- Typewriter (supports skipping) ---------- */
  function typeText(el, text, speed = 50, signal) {
    return new Promise(resolve => {
      const chars = Array.from(text);
      if (reduce || (signal && signal.skip)) { el.textContent = text; return resolve(); }
      el.textContent = '';
      el.classList.add('typing');
      let i = 0;
      const id = setInterval(() => {
        if (signal && signal.skip) { clearInterval(id); el.textContent = text; el.classList.remove('typing'); return resolve(); }
        el.textContent += chars[i++];
        if (i >= chars.length) { clearInterval(id); el.classList.remove('typing'); resolve(); }
      }, speed);
    });
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
  }

  /* =======================================================
     PARTICLE ENGINE (canvas) — only runs while particles exist
  ======================================================= */
  const FX = (() => {
    const cv = $('#fx');
    const ctx = cv.getContext('2d');
    const parts = [];
    const MAX = 1100;
    const PINKS = ['#ff6b9d', '#ff8fab', '#ffb3c8', '#ff4f87', '#f4a6c8', '#c084fc'];
    const ALL = ['#ff6b9d', '#ffb3c8', '#c084fc', '#f9c97c', '#ffffff', '#ff8fab', '#b794f6', '#9ec5ff'];
    let W = 0, H = 0, running = false, last = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', resize);
    resize();

    function heartPath(x, y, s) {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.35);
      ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.35);
      ctx.bezierCurveTo(x - s * 0.5, y + s * 0.7, x, y + s * 0.9, x, y + s * 1.1);
      ctx.bezierCurveTo(x, y + s * 0.9, x + s * 0.5, y + s * 0.7, x + s * 0.5, y + s * 0.35);
      ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.35);
      ctx.closePath();
    }

    function base(o) {
      return Object.assign({ type: 'spark', x: 0, y: 0, vx: 0, vy: 0, g: 0, drag: 1, age: 0, life: 60, size: 4, color: '#fff', rot: 0, vr: 0, wob: R(0, 6.28) }, o);
    }

    function add(p) {
      if (parts.length >= MAX) return;
      parts.push(p);
      if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
    }

    function step(p, dt) {
      p.age += dt;
      if (p.age >= p.life) { p.dead = true; return; }
      const d = Math.pow(p.drag, dt);
      p.vx *= d; p.vy *= d;
      p.vy += p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.type === 'rocket') {
        if (Math.random() < 0.7) add(base({ type: 'spark', x: p.x, y: p.y, vx: R(-.3, .3), vy: R(.2, 1), g: .02, drag: .95, life: 18, size: 1.6, color: '#ffe9b0' }));
        if (p.vy > -0.6) { explode(p.x, p.y, p.color); p.dead = true; }
      }
      if (p.type === 'confetti' && p.y > H + 40) p.dead = true;
    }

    function draw(p) {
      const t = p.age / p.life;
      ctx.globalAlpha = Math.max(0, 1 - Math.pow(t, 3));
      ctx.fillStyle = p.color;
      switch (p.type) {
        case 'heart':
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          heartPath(0, -p.size * 0.55, p.size); ctx.fill(); ctx.restore(); break;
        case 'confetti':
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.scale(1, Math.cos(p.wob + p.age * 0.2));
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2); ctx.restore(); break;
        case 'star':
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const r = i % 2 ? p.size * 0.28 : p.size, a = i * Math.PI / 4;
            ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
          }
          ctx.closePath(); ctx.fill(); ctx.restore(); break;
        case 'rocket':
          ctx.beginPath(); ctx.arc(p.x, p.y, 2.6, 0, 6.283); ctx.fill(); break;
        default:
          ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(.1, p.size * (1 - t * 0.5)), 0, 6.283); ctx.fill();
      }
    }

    function frame(now) {
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      ctx.clearRect(0, 0, W, H);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        step(p, dt);
        if (p.dead) parts.splice(i, 1); else draw(p);
      }
      ctx.globalAlpha = 1;
      if (parts.length) requestAnimationFrame(frame);
      else { running = false; ctx.clearRect(0, 0, W, H); }
    }

    /* ----- effects ----- */
    function hearts(x, y, n = 8) {
      n = Math.max(1, Math.round(n));
      for (let i = 0; i < n; i++) {
        const a = R(0, 6.283), sp = R(2, 6.5);
        add(base({ type: 'heart', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.5, g: .09, drag: .965, life: R(45, 80), size: R(10, 22), color: pick(PINKS), rot: R(-.5, .5), vr: R(-.05, .05) }));
      }
    }
    function confettiBurst(x, y, n = 80) {
      n = Math.round(n * scale());
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + R(-1.1, 1.1), sp = R(5, 13);
        add(base({ type: 'confetti', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: .25, drag: .985, life: R(110, 180), size: R(7, 13), color: pick(ALL), rot: R(0, 6.28), vr: R(-.3, .3) }));
      }
    }
    function confettiRain(n = 120) {
      n = Math.round(n * scale());
      for (let i = 0; i < n; i++) {
        setTimeout(() => add(base({ type: 'confetti', x: R(0, W), y: R(-60, -10), vx: R(-1, 1), vy: R(1.5, 4), g: .02, drag: .995, life: R(220, 380), size: R(7, 12), color: pick(ALL), rot: R(0, 6.28), vr: R(-.15, .15) })), R(0, 1400));
      }
    }
    function sparkles(x, y, n = 10) {
      n = Math.max(1, Math.round(n * scale()));
      for (let i = 0; i < n; i++) {
        const a = R(0, 6.283), sp = R(1, 4);
        add(base({ type: 'star', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: .02, drag: .94, life: R(30, 55), size: R(5, 10), color: pick(['#fff7b0', '#ffffff', '#ffd1e3', '#f9c97c']), rot: R(0, 3), vr: R(-.1, .1) }));
      }
    }
    function explode(x, y, color) {
      const n = Math.round(62 * scale());
      for (let i = 0; i < n; i++) {
        const a = (i / n) * 6.283 + R(-.05, .05), sp = R(1.5, 6.2) * (Math.random() < .3 ? .6 : 1);
        add(base({ type: 'spark', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: .06, drag: .965, life: R(55, 85), size: R(1.6, 3.2), color: Math.random() < .2 ? '#fff' : color }));
      }
      for (let i = 0; i < 5; i++) {
        const a = R(0, 6.283), sp = R(1, 3.5);
        add(base({ type: 'heart', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: .05, drag: .96, life: R(55, 80), size: R(8, 13), color, rot: R(-.4, .4) }));
      }
    }
    function firework(x, targetY) {
      const g = 0.1, v0 = Math.sqrt(2 * g * Math.max(60, H - targetY));
      add(base({ type: 'rocket', x, y: H + 10, vx: R(-.6, .6), vy: -v0, g, drag: 1, life: 400, color: pick(['#ff6b9d', '#c084fc', '#f9c97c', '#9ec5ff', '#ff8fab']) }));
    }
    function fireworksShow(count = 5) {
      for (let i = 0; i < count; i++) {
        setTimeout(() => firework(R(W * .15, W * .85), R(H * .12, H * .45)), i * 450 + R(0, 200));
      }
    }
    return { hearts, confettiBurst, confettiRain, sparkles, firework, fireworksShow };
  })();

  /* ---------- Balloons (DOM) — pop them by tapping ---------- */
  function balloons(n = 10) {
    const colors = ['#ff7aa8', '#c79bff', '#ffd0a0', '#ff9ec0', '#9ec5ff', '#ffe08a'];
    n = Math.max(3, Math.round(n * (reduce ? 0.4 : 1)));
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        const b = h('div', 'balloon');
        b.style.left = R(4, 92) + 'vw';
        b.style.setProperty('--c', pick(colors));
        b.style.setProperty('--d', R(7, 11).toFixed(1) + 's');
        b.style.setProperty('--sx', R(-40, 40).toFixed(0) + 'px');
        b.addEventListener('animationend', () => b.remove());
        b.addEventListener('click', e => {
          e.stopPropagation();
          const c = center(b);
          FX.hearts(c.x, c.y, 10 * scale());
          FX.sparkles(c.x, c.y, 8);
          b.remove();
        });
        document.body.appendChild(b);
      }, i * 180);
    }
  }

  /* ---------- Global click magic ---------- */
  document.addEventListener('pointerdown', e => {
    FX.hearts(e.clientX, e.clientY, 6 * scale());
  });
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-love, .btn-ghost');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const rip = h('span', 'ripple');
    rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    btn.appendChild(rip);
    rip.addEventListener('animationend', () => rip.remove());
  });

  /* =======================================================
     LOADER + GATE (envelope)
  ======================================================= */
  function initLoader() {
    const loader = $('#loader');
    let hidden = false;
    const hide = () => { if (!hidden) { hidden = true; loader.classList.add('done'); } };
    const minWait = sleep(1200);
    const loaded = new Promise(res => (document.readyState === 'complete' ? res() : window.addEventListener('load', res)));
    Promise.all([minWait, loaded]).then(hide);
    setTimeout(hide, 4000); // safety net if a CDN is slow
  }

  let appOpened = false;
  function initGate() {
    $('#envFor').textContent = 'For ' + CONFIG.herName;
    $('#navBrand').textContent = CONFIG.herName;
    const env = $('#envelope');
    env.addEventListener('click', async () => {
      env.classList.add('open');
      $('#gateTap').textContent = 'Here we go… ❤';
      const c = center(env);
      FX.hearts(c.x, c.y, 16 * scale());
      FX.sparkles(c.x, c.y - 60, 14);
      startMusic();
      await sleep(1800);
      $('#gate').classList.add('leaving');
      await sleep(800);
      $('#gate').classList.add('gone');
      document.body.classList.remove('locked');
      document.body.classList.add('opened');
      $('#app').classList.add('show');
      appOpened = true;
      if (window.AOS) AOS.refresh();
      FX.confettiRain(130);
      playHeroIntro();
      if (birthdayReached) FX.fireworksShow(6);
    }, { once: true });
  }

  /* =======================================================
     HERO + COUNTDOWN
  ======================================================= */
  let birthdayReached = false;

  function initHero() {
    $('#heroPre').textContent = CONFIG.heroPre;
    $('#heroSub').textContent = fill(CONFIG.heroSub);
    $('#btnSurprise').addEventListener('click', () => {
      const c = center($('#btnSurprise'));
      FX.confettiBurst(c.x, c.y, 110);
      FX.hearts(c.x, c.y, 14 * scale());
      balloons(9);
    });
    $('#btnFireworks').addEventListener('click', () => FX.fireworksShow(5));
  }

  async function playHeroIntro() {
    await typeText($('#heroLine1'), CONFIG.heroGreeting, 60);
    await typeText($('#heroName'), CONFIG.herName, 90);
    $$('.hero-fade').forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 220));
  }

  function initCountdown() {
    const target = new Date(CONFIG.birthday).getTime();
    const ids = ['cdDays', 'cdHours', 'cdMins', 'cdSecs'];
    const els = ids.map(id => $('#' + id));
    const prev = [];

    function setVals(vals) {
      vals.forEach((v, i) => {
        const s = pad(v);
        if (prev[i] !== s) {
          els[i].textContent = s;
          if (prev[i] !== undefined) restart(els[i], 'tick');
          prev[i] = s;
        }
      });
    }
    function update() {
      const diff = target - Date.now();
      if (isNaN(target)) { clearInterval(timer); return; }
      if (diff <= 0) { celebrationMode(target); clearInterval(timer); return; }
      const s = Math.floor(diff / 1000);
      setVals([Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]);
    }
    const timer = setInterval(update, 1000);
    update();
  }

  function celebrationMode(target) {
    birthdayReached = true;
    $('#countdownWrap').hidden = true;
    $('#todayBanner').hidden = false;
    const sameDay = new Date().toDateString() === new Date(target).toDateString();
    $('#todayTitle').textContent = sameDay ? 'Today is your day! 🎉' : 'Your special day made the world brighter 🎉';
    if (appOpened) { FX.fireworksShow(6); FX.confettiRain(120); }
  }

  /* ---------- Together counter ---------- */
  function initTogether() {
    $('#btnTogether').addEventListener('click', () => {
      const start = new Date(CONFIG.startDate + 'T00:00:00');
      const box = $('#togetherBox');
      const num = $('#togetherNum');
      const txt = $('#togetherText');
      box.hidden = false;
      if (isNaN(start)) { num.textContent = '?'; txt.textContent = 'Set startDate in script.js (YYYY-MM-DD).'; return; }
      const now = new Date();
      const days = Math.max(0, Math.floor((now - start) / 864e5));
      let y = now.getFullYear() - start.getFullYear();
      let m = now.getMonth() - start.getMonth();
      let d = now.getDate() - start.getDate();
      if (d < 0) { m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (m < 0) { y--; m += 12; }
      txt.textContent = `days of loving you, that's ${y} year${y === 1 ? '' : 's'}, ${m} month${m === 1 ? '' : 's'} and ${d} day${d === 1 ? '' : 's'} ❤`;
      const t0 = performance.now(), dur = reduce ? 1 : 1800;
      (function tick(t) {
        const k = Math.min(1, (t - t0) / dur);
        num.textContent = Math.round(days * (1 - Math.pow(1 - k, 3))).toLocaleString();
        if (k < 1) requestAnimationFrame(tick);
        else { const c = center(num); FX.hearts(c.x, c.y, 18 * scale()); FX.confettiBurst(c.x, c.y, 50); }
      })(t0);
    });
  }

  /* =======================================================
     TIMELINE (tap to open)
  ======================================================= */
  function initTimeline() {
    const wrap = $('#timeline');
    CONFIG.timeline.forEach((ev, i) => {
      const item = h('article', 'tl-item ' + (i % 2 ? 'right' : 'left'));
      item.setAttribute('data-aos', i % 2 ? 'fade-left' : 'fade-right');
      const dot = h('span', 'tl-dot', ev.emoji || '❤');
      const card = h('button', 'tl-card glass');
      card.type = 'button';
      card.setAttribute('aria-expanded', 'false');
      const body = h('div', 'tl-body');
      const inner = h('div');
      inner.appendChild(h('p', '', fill(ev.text)));
      body.appendChild(inner);
      card.append(h('span', 'tl-date', fill(ev.date)), h('h3', '', fill(ev.title)), body, h('span', 'tl-tap', 'Tap to read ♡'));
      item.append(dot, card);
      wrap.appendChild(item);

      card.addEventListener('click', () => {
        const open = item.classList.toggle('open');
        card.setAttribute('aria-expanded', String(open));
        if (open) {
          const c = center(dot);
          FX.hearts(c.x, c.y, 10 * scale());
          FX.sparkles(c.x, c.y, 8);
        }
      });
    });
  }

  /* =======================================================
     GALLERY + LIGHTBOX
  ======================================================= */
  const lb = { el: null, img: null, cap: null, count: null, i: 0, x0: 0 };

  function lbShow(i) {
    const n = CONFIG.photos.length;
    lb.i = (i + n) % n;
    const p = CONFIG.photos[lb.i];
    lb.img.src = p.src;
    lb.img.alt = fill(p.caption);
    lb.cap.textContent = fill(p.caption);
    lb.count.textContent = `${lb.i + 1} / ${n}`;
    restart(lb.img, 'swap');
  }
  function lbOpen(i) {
    lbShow(i);
    lb.el.classList.add('open');
    lb.el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }
  function lbClose() {
    lb.el.classList.remove('open');
    lb.el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  function initGallery() {
    lb.el = $('#lightbox'); lb.img = $('#lbImg'); lb.cap = $('#lbCap'); lb.count = $('#lbCount');
    const grid = $('#galleryGrid');

    CONFIG.photos.forEach((p, i) => {
      const fig = h('figure', 'g-item');
      fig.tabIndex = 0;
      fig.setAttribute('role', 'button');
      fig.setAttribute('data-aos', 'zoom-in');
      const img = document.createElement('img');
      img.src = p.src; img.alt = fill(p.caption); img.loading = 'lazy';
      fig.append(img, h('figcaption', '', fill(p.caption)));
      grid.appendChild(fig);

      fig.addEventListener('click', () => { restart(fig, 'pop'); lbOpen(i); });
      fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lbOpen(i); } });

      // 3D tilt on mouse hover (desktop only)
      fig.addEventListener('pointermove', e => {
        if (e.pointerType !== 'mouse' || reduce) return;
        const r = fig.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        fig.style.setProperty('--ry', (px * 12).toFixed(1) + 'deg');
        fig.style.setProperty('--rx', (-py * 12).toFixed(1) + 'deg');
      });
      fig.addEventListener('pointerleave', () => { fig.style.setProperty('--rx', '0deg'); fig.style.setProperty('--ry', '0deg'); });
    });

    $('#lbClose').addEventListener('click', lbClose);
    $('#lbPrev').addEventListener('click', () => lbShow(lb.i - 1));
    $('#lbNext').addEventListener('click', () => lbShow(lb.i + 1));
    lb.el.addEventListener('click', e => { if (e.target === lb.el) lbClose(); });
    document.addEventListener('keydown', e => {
      if (!lb.el.classList.contains('open')) return;
      if (e.key === 'Escape') lbClose();
      if (e.key === 'ArrowLeft') lbShow(lb.i - 1);
      if (e.key === 'ArrowRight') lbShow(lb.i + 1);
    });
    // swipe on mobile
    lb.el.addEventListener('touchstart', e => { lb.x0 = e.changedTouches[0].clientX; }, { passive: true });
    lb.el.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - lb.x0;
      if (Math.abs(dx) > 50) lbShow(lb.i + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* =======================================================
     MEMORY FLIP CARDS
  ======================================================= */
  function initMemories() {
    const grid = $('#memoryGrid');
    CONFIG.memories.forEach(m => {
      const card = h('div', 'flip');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Flip memory card: ' + fill(m.title));
      card.setAttribute('data-aos', 'flip-left');

      const inner = h('div', 'flip-inner');
      const front = h('div', 'flip-face flip-front');
      const img = document.createElement('img');
      img.src = m.img; img.alt = fill(m.title); img.loading = 'lazy';
      front.append(img, h('span', 'flip-hint', 'Tap to flip ♡'));
      const back = h('div', 'flip-face flip-back');
      back.append(h('h3', '', fill(m.title)), h('p', '', fill(m.text)));
      inner.append(front, back);
      card.appendChild(inner);
      grid.appendChild(card);

      const flip = () => {
        const on = card.classList.toggle('flipped');
        if (on) { const c = center(card); FX.hearts(c.x, c.y, 10 * scale()); FX.sparkles(c.x, c.y, 8); }
      };
      card.addEventListener('click', flip);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
    });
  }

  /* =======================================================
     REASONS — heart jar
  ======================================================= */
  function initReasons() {
    const total = CONFIG.reasons.length;
    const order = CONFIG.reasons.map((_, i) => i).sort(() => Math.random() - 0.5);
    let n = 0;
    const wrap = $('#jarWrap'), card = $('#reasonText'), btn = $('#btnReason');
    const count = $('#reasonCount'), list = $('#reasonList');
    count.textContent = `0 / ${total} reasons found`;

    // decorative hearts inside the jar (static)
    const fillEl = $('#jarFill');
    const emojis = ['❤️', '💗', '💖', '💕', '💜'];
    for (let i = 0; i < 16; i++) {
      const s = h('span', '', pick(emojis));
      s.style.left = R(2, 78) + '%';
      s.style.bottom = R(0, 62) + '%';
      s.style.transform = `rotate(${R(-30, 30).toFixed(0)}deg)`;
      fillEl.appendChild(s);
    }

    function pull() {
      if (n >= total) {            // reset
        n = 0; list.innerHTML = '';
        order.sort(() => Math.random() - 0.5);
        card.textContent = 'Tap the button below ♡';
        count.textContent = `0 / ${total} reasons found`;
        btn.textContent = '💌 Pull out a reason';
        return;
      }
      restart(wrap, 'shake');
      const flyer = h('span', 'jar-heart', '❤️');
      wrap.appendChild(flyer);
      flyer.addEventListener('animationend', () => flyer.remove());

      const text = fill(CONFIG.reasons[order[n]]);
      n++;
      card.textContent = text;
      restart(card, 'pop-in');
      list.appendChild(h('span', 'chip', `${n}. ${text.length > 34 ? text.slice(0, 32) + '…' : text}`));
      count.textContent = `${n} / ${total} reasons found`;
      const c = center(card);
      FX.hearts(c.x, c.y, 12 * scale());
      if (n >= total) {
        btn.textContent = '🔁 Start again';
        FX.confettiBurst(c.x, c.y, 80);
        setTimeout(() => { card.textContent = 'And a million more that don\'t fit in a jar… ❤'; restart(card, 'pop-in'); }, 1600);
      }
    }
    btn.addEventListener('click', pull);
    wrap.addEventListener('click', pull);
  }

  /* =======================================================
     LOVE LETTER
  ======================================================= */
  function initLetter() {
    const seal = $('#sealBtn'), paperWrap = $('#paperWrap'), body = $('#letterBody');
    const sign = $('#letterSign'), skipHint = $('#paperSkip');
    const signal = { skip: false };
    let opened = false;

    $('#letterTitle').textContent = fill(CONFIG.letter.title);
    $('#paper').addEventListener('click', () => { signal.skip = true; });

    seal.addEventListener('click', async () => {
      if (opened) return;
      opened = true;
      const c = center(seal);
      FX.hearts(c.x, c.y, 16 * scale());
      FX.sparkles(c.x, c.y, 14);
      seal.classList.add('broken');
      await sleep(700);
      $('#sealWrap').hidden = true;
      paperWrap.classList.add('open');
      await sleep(reduce ? 50 : 1200);

      for (const line of CONFIG.letter.lines) {
        const p = h('p');
        body.appendChild(p);
        await typeText(p, fill(line), 28, signal);
        if (!signal.skip) await sleep(250);
      }
      sign.textContent = fill(CONFIG.letter.signature);
      sign.classList.add('show');
      skipHint.hidden = true;
      const pc = center($('#paper'));
      FX.hearts(pc.x, pc.y, 20 * scale());
      FX.confettiBurst(pc.x, pc.y - 100, 70);
    });
  }

  /* =======================================================
     CAKE — blow the candles
  ======================================================= */
  function initCake() {
    const candlesEl = $('#candles'), cake = $('#cake');
    const wishMsg = $('#wishMsg'), relight = $('#btnRelight'), blowBtn = $('#btnBlow'), micBtn = $('#btnMic');
    const micStatus = $('#micStatus');
    $('#wishTitle').textContent = fill(CONFIG.wishTitle);
    $('#wishSub').textContent = fill(CONFIG.wishSub);

    for (let i = 0; i < CONFIG.candleCount; i++) {
      const c = h('button', 'candle');
      c.type = 'button';
      c.setAttribute('aria-label', 'Candle ' + (i + 1));
      c.append(h('span', 'flame'), h('span', 'smoke'));
      c.addEventListener('click', e => { e.stopPropagation(); snuff(c); checkDone(); });
      candlesEl.appendChild(c);
    }
    const candles = () => $$('.candle', candlesEl);

    function snuff(c) {
      if (c.classList.contains('out')) return;
      c.classList.add('out');
      const p = center(c);
      FX.sparkles(p.x, p.y - 30, 6);
    }
    let finished = false;
    function checkDone() {
      if (finished || candles().some(c => !c.classList.contains('out'))) return;
      finished = true;
      stopMic();
      wishMsg.classList.add('show');
      blowBtn.hidden = true; relight.hidden = false;
      const cp = center(cake);
      FX.confettiBurst(cp.x, cp.y, 140);
      FX.fireworksShow(7);
      FX.confettiRain(90);
      balloons(10);
      setTimeout(() => wishMsg.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }), 500);
    }
    async function blowAll() {
      stopMic();
      for (const c of candles()) { snuff(c); await sleep(150); }
      checkDone();
    }

    blowBtn.addEventListener('click', blowAll);
    relight.addEventListener('click', () => {
      candles().forEach(c => c.classList.remove('out'));
      wishMsg.classList.remove('show');
      finished = false; relight.hidden = true; blowBtn.hidden = false;
      micStatus.textContent = '';
    });
    cake.addEventListener('click', () => { restart(cake, 'spin'); const c = center(cake); FX.sparkles(c.x, c.y, 14); });

    /* --- microphone blow detection (optional, needs permission + https) --- */
    let stream = null, ac = null, timer = null;
    function stopMic() {
      clearInterval(timer); timer = null;
      if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
      if (ac) { ac.close().catch(() => {}); ac = null; }
      micBtn.textContent = '🎤 Use my microphone';
    }
    micBtn.addEventListener('click', async () => {
      if (timer) { stopMic(); micStatus.textContent = ''; return; }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        micStatus.textContent = 'Microphone is not available here, so use the button instead 💨'; return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        micStatus.textContent = 'Microphone blocked, so use the button instead 💨'; return;
      }
      const Ctx = window.AudioContext || window.webkitAudioContext;
      ac = new Ctx();
      const an = ac.createAnalyser();
      an.fftSize = 512;
      ac.createMediaStreamSource(stream).connect(an);
      const data = new Uint8Array(an.fftSize);
      let loud = 0;
      micBtn.textContent = '🛑 Stop listening';
      micStatus.textContent = 'Listening… take a deep breath and blow! 🌬️';
      timer = setInterval(() => {
        an.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v; }
        const rms = Math.sqrt(sum / data.length);
        loud = rms > 0.12 ? loud + 1 : Math.max(0, loud - 1);
        if (loud >= 5) { micStatus.textContent = ''; blowAll(); }
      }, 50);
    });
  }

  /* =======================================================
     MUSIC PLAYER
  ======================================================= */
  const music = { audio: null, box: null, btn: null, broken: false, playing: false };

  function setPlaying(v) {
    music.playing = v;
    music.box.classList.toggle('playing', v);
    music.btn.textContent = v ? '❚❚' : '▶';
    music.btn.setAttribute('aria-label', v ? 'Pause music' : 'Play music');
  }
  async function startMusic() {
    try {
      await music.audio.play();
      setPlaying(true);
    } catch (err) {
      setPlaying(false);
      if (music.broken || (err && err.name === 'NotSupportedError')) {
        setTimeout(() => toast('Add your song as audio/song.mp3 to play music 🎵'), 3000);
      }
    }
  }
  function initMusic() {
    music.audio = $('#bgm'); music.box = $('#musicBox'); music.btn = $('#musicBtn');
    music.audio.src = CONFIG.musicFile;
    music.audio.loop = true;
    music.audio.volume = 0.6;
    music.audio.addEventListener('error', () => { music.broken = true; });
    music.btn.addEventListener('click', async () => {
      if (music.playing) { music.audio.pause(); setPlaying(false); }
      else {
        await startMusic();
        if (!music.playing) toast('Add your song as audio/song.mp3 to play music 🎵');
      }
    });
    $('#musicVol').addEventListener('input', e => { music.audio.volume = parseFloat(e.target.value); });
  }

  /* =======================================================
     NAV, THEME, FOOTER
  ======================================================= */
  function initNav() {
    const nav = $('#nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // close the mobile menu after choosing a link
    $$('#navMenu .nav-link').forEach(a => a.addEventListener('click', () => {
      const menu = $('#navMenu');
      if (menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }));

    // highlight the section in view
    if ('IntersectionObserver' in window) {
      const links = new Map($$('#navMenu .nav-link').map(a => [a.getAttribute('href').slice(1), a]));
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          links.forEach(a => a.classList.remove('active'));
          const a = links.get(en.target.id);
          if (a) a.classList.add('active');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  function initTheme() {
    const stars = $('#stars');
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('i');
      s.style.left = R(0, 100) + '%';
      s.style.top = R(0, 100) + '%';
      s.style.animationDelay = R(0, 3).toFixed(2) + 's';
      const sz = R(1, 3).toFixed(1) + 'px';
      s.style.width = sz; s.style.height = sz;
      stars.appendChild(s);
    }
    const btn = $('#themeBtn');
    btn.addEventListener('click', () => {
      const night = document.body.classList.toggle('night');
      btn.textContent = night ? '☀️' : '🌙';
      const c = center(btn);
      FX.sparkles(c.x, c.y, 16);
    });
  }

  function initFooter() {
    $('#footerText').textContent = fill(CONFIG.footerText);
    $('#footerHeart').addEventListener('click', e => {
      const c = center(e.currentTarget);
      FX.hearts(c.x, c.y, 26 * scale());
      FX.sparkles(c.x, c.y, 12);
    });
    $('#toTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      FX.confettiBurst(window.innerWidth / 2, window.innerHeight * 0.8, 50);
    });
  }

  /* =======================================================
     BOOT
  ======================================================= */
  function init() {
    document.title = 'Happy Birthday ' + CONFIG.herName + ' ❤️';
    if (window.AOS) AOS.init({ duration: 900, once: true, offset: 80, disable: reduce });
    initLoader();
    initGate();
    initHero();
    initCountdown();
    initTogether();
    initTimeline();
    initGallery();
    initMemories();
    initReasons();
    initLetter();
    initCake();
    initMusic();
    initNav();
    initTheme();
    initFooter();
  }
  init();
})();
