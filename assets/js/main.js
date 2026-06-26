/* =============================================================================
 *  main.js — renders content from data.js and wires up interactions.
 * ========================================================================== */
(function () {
  'use strict';

  /* Signal that JS is active (enables the reveal animation; content stays
     visible without JS). */
  document.documentElement.classList.add('js');

  /* -------------------------- inline SVG icons --------------------------- */
  const ICON = {
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/><path d="M5 13.18v3.2L12 20l7-3.62v-3.2L12 17l-7-3.82z"/></svg>',
    github:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.64 3.01 8.57 7.18 9.96.53.1.72-.23.72-.5l-.01-1.94c-2.92.63-3.54-1.25-3.54-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.81-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07a9.96 9.96 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.67.73 1.08 1.66 1.08 2.81 0 4.02-2.46 4.9-4.8 5.16.38.33.71.97.71 1.96l-.01 2.91c0 .28.19.61.73.5A10.5 10.5 0 0 0 22.5 12 10.5 10.5 0 0 0 12 1.5z"/></svg>',
    email:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="M3 6.5l9 6 9-6"/></svg>',
    paper:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2.5h7l5 5v14H6z"/><path d="M13 2.5v5h5"/></svg>',
    cv:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3"/><path d="M7 10l5 5 5-5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  };

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* tiny inline-markdown: [text](url) and **bold** */
  function md(s) {
    return String(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }
  function boldName(authors, name) {
    if (!name) return authors;
    return authors.split(name).join('<b>' + name + '</b>');
  }

  /* ------------------------------ Profile -------------------------------- */
  function fillText(id, val) { const n = document.getElementById(id); if (n) n.textContent = val; }

  fillText('brandName', PROFILE.name);
  fillText('sideName', PROFILE.name);
  fillText('sideNameZh', PROFILE.nameZh);
  fillText('sideRole', PROFILE.role);
  fillText('sideOrg', PROFILE.affiliationShort);
  fillText('heroName', PROFILE.name);
  fillText('heroNameZh', PROFILE.nameZh);
  $('#heroRole').textContent = PROFILE.role + ' · ' + PROFILE.affiliationShort;
  $('#heroTagline').textContent = PROFILE.tagline;
  $('#sideAvatar').src = PROFILE.avatar;
  $('#heroAvatar').src = PROFILE.avatar;
  document.querySelectorAll('.topbar__name').forEach(n => { n.innerHTML = PROFILE.name + '<span class="zh">' + PROFILE.nameZh + '</span>'; });

  const mailto = 'mailto:' + PROFILE.email;
  const gh = 'https://github.com/' + PROFILE.github;

  /* sidebar socials */
  $('#sideSocials').innerHTML =
    '<a href="' + PROFILE.scholar + '" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">' + ICON.scholar + '</a>' +
    '<a href="' + gh + '" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">' + ICON.github + '</a>' +
    '<a href="' + mailto + '" title="Email" aria-label="Email">' + ICON.email + '</a>';

  /* hero action buttons */
  $('#heroActions').innerHTML =
    '<a class="btn btn-primary" href="' + PROFILE.cv + '" target="_blank" rel="noopener">' + ICON.cv + ' Download CV</a>' +
    '<a class="btn btn-default" href="' + PROFILE.scholar + '" target="_blank" rel="noopener">' + ICON.scholar + ' Scholar</a>' +
    '<a class="btn btn-default" href="' + gh + '" target="_blank" rel="noopener">' + ICON.github + ' GitHub</a>' +
    '<a class="btn btn-default" href="' + mailto + '">' + ICON.email + ' Email</a>';

  /* ------------------------------- About --------------------------------- */
  $('#aboutBody').innerHTML = ABOUT.map(p => '<p>' + md(p) + '</p>').join('');

  /* ----------------------------- Research -------------------------------- */
  $('#researchGrid').innerHTML = RESEARCH.map(r =>
    '<div class="research-card ' + r.color + '"><div class="emoji">' + r.icon + '</div>' +
    '<h3>' + r.title + '</h3><p>' + r.desc + '</p></div>').join('');

  /* --------------------------- Publications ------------------------------ */
  const TYPES = [
    { key: 'all', label: 'All' },
    { key: 'conference', label: 'Conference' },
    { key: 'journal', label: 'Journal' },
    { key: 'preprint', label: 'Preprint' },
  ];
  const pubFilter = $('#pubFilter');
  const pubList = $('#pubList');

  function renderPubs(type) {
    const items = PUBLICATIONS.filter(p => type === 'all' || p.type === type);
    pubList.innerHTML = items.map(p => {
      const isArxiv = /arxiv|abs\//i.test(p.url);
      const linkLabel = isArxiv ? 'arXiv' : 'Paper';
      return '<article class="pub-card">' +
        '<div class="pub-card__top"><span class="pub-tag ' + p.type + '">' + p.venue + '</span>' +
          (p.award ? '<span class="pub-tag conference">' + p.award + '</span>' : '') +
        '</div>' +
        '<h3 class="pub-card__title">' + p.title + '</h3>' +
        '<p class="pub-card__authors">' + boldName(p.authors, PROFILE.name) + '</p>' +
        '<p class="pub-card__excerpt">' + p.excerpt + '</p>' +
        '<div class="pub-card__links">' +
          '<a class="btn btn-default btn-sm" href="' + p.url + '" target="_blank" rel="noopener">' + ICON.paper + ' ' + linkLabel + '</a>' +
        '</div></article>';
    }).join('');
  }
  pubFilter.innerHTML = TYPES.map((t, i) =>
    '<button data-type="' + t.key + '"' + (i === 0 ? ' class="active"' : '') + '>' + t.label + '</button>').join('');
  pubFilter.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    pubFilter.querySelectorAll('button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderPubs(b.dataset.type);
  });
  renderPubs('all');

  /* ------------------------------- News ---------------------------------- */
  $('#newsList').innerHTML = NEWS.map(n =>
    '<li><span class="date">' + n.date + '</span><div class="body">' + n.text + '</div></li>').join('');

  /* ---------------------------- Education -------------------------------- */
  $('#eduList').innerHTML = EDUCATION.map(e =>
    '<li><span class="date">' + e.period + '</span>' +
    '<div class="body"><span class="degree">' + e.degree + '</span><br>' +
    '<span class="org">' + e.org + '</span></div></li>').join('');
  $('#cvDownload').innerHTML =
    '<a class="btn btn-teal" href="' + PROFILE.cv + '" target="_blank" rel="noopener">' + ICON.cv + ' Full CV (PDF)</a>';

  /* ------------------------------ Contact -------------------------------- */
  $('#contactText').innerHTML = 'Interested in my work or up for a discussion? ' +
    'Feel free to reach out — I\'m always happy to chat about LLMs, reasoning, and learning theory.';
  $('#contactActions').innerHTML =
    '<a class="btn btn-primary" href="' + mailto + '">' + ICON.email + ' ' + PROFILE.email + '</a>' +
    '<a class="btn btn-default" href="' + PROFILE.scholar + '" target="_blank" rel="noopener">' + ICON.scholar + ' Google Scholar</a>' +
    '<a class="btn btn-default" href="' + gh + '" target="_blank" rel="noopener">' + ICON.github + ' GitHub</a>';

  /* --------------------------- Visitor map ------------------------------- */
  (function () {
    const host = document.getElementById('visitorMap');
    if (!host) return;
    const embed = (typeof VISITOR_MAP_EMBED === 'string') ? VISITOR_MAP_EMBED.trim() : '';
    if (embed) {
      host.innerHTML = embed;
      // innerHTML does not execute <script> — recreate them so widgets load.
      host.querySelectorAll('script').forEach(old => {
        const s = document.createElement('script');
        Array.from(old.attributes).forEach(a => s.setAttribute(a.name, a.value));
        s.text = old.textContent || '';
        old.replaceWith(s);
      });
    } else {
      host.innerHTML =
        '<div class="visitor-placeholder">' +
        '<div class="globe">🌍</div>' +
        '<p>A live visitor map will appear here.</p>' +
        '<p class="hint">To activate it, generate a free embed from ' +
        '<a href="https://clustrmaps.com/" target="_blank" rel="noopener">ClustrMaps</a> or ' +
        '<a href="https://www.revolvermaps.com/" target="_blank" rel="noopener">RevolverMaps</a> ' +
        'and paste it into <code>VISITOR_MAP_EMBED</code> in <code>assets/js/data.js</code>.</p>' +
        '</div>';
    }
  })();

  /* ------------------------------ Footer --------------------------------- */
  const year = new Date().getFullYear();
  $('#footerCopy').innerHTML = '© ' + year + ' ' + PROFILE.name + ' (' + PROFILE.nameZh + ') · ' + PROFILE.location;

  /* ------------------------------- Clock --------------------------------- */
  const WD = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function tick() {
    const d = new Date();
    $('#clkWeekday').textContent = WD[d.getDay()];
    $('#clkMonthday').textContent = MO[d.getMonth()] + ' ' + d.getDate();
    let h = d.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const m = String(d.getMinutes()).padStart(2, '0');
    $('#clkTime').innerHTML = h + '<span class="clock__colon">:</span>' + m +
      '<span style="font-size:.45em;font-weight:800;margin-left:6px;vertical-align:top">' + ampm + '</span>';
  }
  tick(); setInterval(tick, 1000);

  /* -------------------------- Mobile drawer ------------------------------ */
  const sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menuBtn');
  function openMenu() { sidebar.classList.add('open'); scrim.classList.add('show'); }
  function closeMenu() { sidebar.classList.remove('open'); scrim.classList.remove('show'); }
  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (scrim) scrim.addEventListener('click', closeMenu);

  /* ----------------------- Nav: smooth + close drawer -------------------- */
  const navLinks = Array.from(document.querySelectorAll('.nav a'));
  navLinks.forEach(a => a.addEventListener('click', () => { if (window.innerWidth <= 900) closeMenu(); }));

  /* --------------------------- Scroll-spy -------------------------------- */
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = '#' + en.target.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));

  /* --------------------------- Reveal on scroll -------------------------- */
  const rev = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
  document.querySelectorAll('.reveal').forEach(s => rev.observe(s));

  /* Safety net: if anything hasn't revealed shortly after load, show it. */
  window.addEventListener('load', () => setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(s => s.classList.add('in'));
  }, 1200));
})();
