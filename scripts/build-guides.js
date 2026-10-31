// Rebuilds the static content pages: the two main guides, the 30 single-reason pages,
// the Terms and Privacy pages, and sitemap.xml.
// The site does not need this script; it only regenerates those files.
// Run from the repo root: node scripts/build-guides.js
const fs = require('fs');
const PAGES = require('./guide-data.js');
const REASONS = require('./guide-reasons.js');

const SITE = 'https://diacr.cdav.io';
const PUBLISHED = '2026-10-28';
const MODIFIED = '2026-10-31';
const COPYRIGHT = 'Copyright &copy; <span id="year">2026</span> CDAV.IO. All rights reserved.';

// Use the real conversion code from index.html, so every "after" example is exactly what the tool produces.
const tool = fs.readFileSync('index.html', 'utf8');
const core = tool.split('/* CORE START */')[1].split('/* CORE END */')[0];
const cleanText = new Function(core + '; return cleanText;')();
const clean = s => cleanText(s).text;

const svg = fs.readFileSync('icon.svg', 'utf8').trim();
const ICON = 'data:image/svg+xml,' + svg.replace(/"/g, "'").replace(/[%#<>&]/g, c => encodeURIComponent(c));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = s => clean(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const UI = {
  en: {
    reasonOf: (n, t) => `Reason ${n} of ${t}`, example: 'Example', why: 'Why it happens', fix: 'How to fix it with DIACR',
    tips: 'Tips', questions: 'Questions', related: 'More reasons to remove diacritics', prev: 'Previous', next: 'Next',
    all: 'All 15 reasons', readMore: 'Read the full guide', guide: 'Guide',
    terms: 'Terms', privacy: 'Privacy Policy', license: 'MIT License', security: 'Security', updated: 'Last updated: 31 October 2026'
  },
  ro: {
    reasonOf: (n, t) => `Motivul ${n} din ${t}`, example: 'Exemplu', why: 'De ce se întâmplă', fix: 'Cum rezolvi cu DIACR',
    tips: 'Sfaturi', questions: 'Întrebări', related: 'Alte motive să elimini diacriticele', prev: 'Anterior', next: 'Următorul',
    all: 'Toate cele 15 motive', readMore: 'Citește ghidul complet', guide: 'Ghid',
    terms: 'Termeni', privacy: 'Politica de confidențialitate', license: 'Licență MIT', security: 'Securitate', updated: 'Ultima actualizare: 31 octombrie 2026'
  }
};

const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></svg>';
const SUN = '<svg id="iconSun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON = '<svg id="iconMoon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
const SOCIALS = `<div class="socials">
      <a href="https://github.com/CDAVIO" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg></a>
      <a href="https://www.linkedin.com/in/cristea-david/" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.1 19H5.1V9.5h3V19zM6.6 8.2a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.75 1.2-1.75 2.4V19h-3V9.5h2.85v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.57 1.98 3.57 4.56V19z"/></svg></a>
      <a href="https://www.instagram.com/cdav.io/" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg></a>
    </div>`;

const CSS = `
  :root {
    --yellow: #FFD905;
    --font-ui: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mark: "Montserrat", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  }
  :root[data-theme="dark"] {
    --bg: #0c0c0c; --surface: #161616; --surface-2: #1d1d1d; --border: rgba(255,255,255,.09); --border-strong: rgba(255,255,255,.2);
    --text: #ffffff; --muted: #a3a3a3; --accent-ink: #FFD905; --glow: rgba(255,217,5,.16); --to-bg: #1d1a07; --to-border: rgba(255,217,5,.35);
    --focus: #FFD905; color-scheme: dark;
  }
  :root[data-theme="light"] {
    --bg: #f7f6f1; --surface: #ffffff; --surface-2: #f1f0ea; --border: rgba(17,17,17,.1); --border-strong: rgba(17,17,17,.24);
    --text: #111111; --muted: #5d5d57; --accent-ink: #7a6400; --glow: rgba(255,217,5,.32); --to-bg: #fffbe6; --to-border: rgba(160,130,0,.35);
    --focus: #111111; color-scheme: light;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body { position: relative; margin: 0; background: var(--bg); color: var(--text); font: 17px/1.65 var(--font-ui); overflow-x: hidden; }
  body::after { content: ""; position: absolute; inset: 0 0 auto 0; height: 700px; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 55% 55% at 50% 0%, var(--glow), transparent 70%); }
  body > * { position: relative; z-index: 1; }
  a { color: inherit; }
  :focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
  .wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 16px; }
  .narrow { max-width: 820px; margin: 0 auto; }
  .bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 72px; }
  .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
  .brand img { display: block; border-radius: 9px; }
  .wordmark { font-family: var(--font-mark); font-weight: 800; font-size: 20px; letter-spacing: .02em; color: var(--text); text-decoration: none; white-space: nowrap; }
  .wordmark .io { color: var(--yellow); }
  .bar-actions { display: flex; gap: 8px; }
  .pill-btn { display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px; background: var(--surface); color: var(--text);
    border: 1px solid var(--border); border-radius: 999px; cursor: pointer; font: 600 14px var(--font-ui); text-decoration: none; }
  .pill-btn:hover { border-color: var(--border-strong); }
  .pill-btn svg { width: 18px; height: 18px; }
  .icon-only { width: 40px; padding: 0; justify-content: center; }
  .crumbs { margin: 24px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px; font-size: 14px; color: var(--muted); }
  .crumbs li + li::before { content: "/"; margin-right: 6px; opacity: .6; }
  .crumbs a { text-decoration: none; border-bottom: 1px solid var(--border-strong); }
  header.hero { padding: 18px 0 8px; }
  .eyebrow { display: inline-block; margin: 22px 0 0; padding: 4px 12px; border: 1px solid var(--border); border-radius: 999px; background: var(--surface);
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
  h1 { margin: 16px 0 14px; font-family: var(--font-mark); font-weight: 800; font-size: clamp(32px, 5.6vw, 54px); line-height: 1.06; letter-spacing: -.025em; }
  :root[data-theme="dark"] h1 .hl { color: var(--yellow); }
  :root[data-theme="light"] h1 .hl { background: linear-gradient(transparent 62%, var(--glow) 62%); }
  .intro { margin: 0; font-size: 19px; color: var(--muted); }
  .cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; margin: 26px 0 0; }
  .btn { display: inline-flex; align-items: center; gap: 10px; height: 50px; padding: 0 22px; background: var(--yellow); color: #111; border-radius: 12px;
    font-weight: 800; text-decoration: none; box-shadow: 0 10px 28px -12px rgba(255,217,5,.8); }
  .btn:hover { filter: brightness(.97); }
  .btn svg { width: 18px; height: 18px; }
  .cta-note { font-size: 14px; color: var(--muted); }
  .short { margin: 34px 0 0; padding: 20px 22px; background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--yellow); border-radius: 0; }
  .short h2 { margin: 0 0 6px; font-size: 15px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
  .short p { margin: 0; font-size: 18px; }
  .block { margin: 52px 0 0; scroll-margin-top: 16px; }
  .block > h2 { margin: 0 0 12px; font-family: var(--font-mark); font-size: clamp(25px, 4vw, 32px); line-height: 1.15; letter-spacing: -.02em; }
  .block > p { margin: 0 0 14px; color: var(--muted); }
  .block > p.lead { color: var(--text); font-size: 18px; }
  .toc { margin: 34px 0 0; padding: 20px 22px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
  .toc h2 { margin: 0 0 10px; font-size: 15px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
  .toc .more { margin-top: 16px; }
  .toc ol, .toc ul { margin: 0; padding-left: 22px; columns: 2; column-gap: 32px; font-size: 15px; }
  .toc li { break-inside: avoid; margin: 0 0 6px; }
  .toc a { text-decoration: none; }
  .toc a:hover { color: var(--accent-ink); }
  .reasons { display: grid; gap: 16px; }
  .reason { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 18px; padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; scroll-margin-top: 16px; }
  .num { font-family: var(--font-mark); font-weight: 800; font-size: 34px; line-height: 1; color: var(--accent-ink); }
  .reason h3 { margin: 0 0 6px; font-family: var(--font-mark); font-size: 22px; line-height: 1.25; letter-spacing: -.01em; }
  .reason h3 a { text-decoration: none; }
  .reason h3 a:hover { color: var(--accent-ink); }
  .reason p { margin: 0 0 14px; color: var(--muted); }
  .more-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; font-weight: 700; font-size: 15px; color: var(--accent-ink); text-decoration: none; }
  .more-link svg { width: 16px; height: 16px; }
  .ex { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 10px; align-items: stretch; }
  .ex .from, .ex .to { padding: 10px 14px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface-2); min-width: 0; }
  .ex .to { background: var(--to-bg); border-color: var(--to-border); }
  .ex .tag { display: block; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
  .ex code { display: block; font-family: var(--font-mono); font-size: 15px; overflow-wrap: anywhere; color: var(--text); }
  .ex-block code { white-space: pre-wrap; line-height: 1.6; }
  .ex .arrow { display: grid; place-items: center; color: var(--accent-ink); }
  .ex .arrow svg { width: 20px; height: 20px; }
  .example { margin: 0 0 18px; padding: 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .example figcaption { margin: 0 0 12px; font-weight: 800; font-family: var(--font-mark); font-size: 18px; }
  .note { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
  .note code { font-family: var(--font-mono); color: var(--accent-ink); overflow-wrap: anywhere; }
  .table-wrap { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: var(--surface); }
  table { width: 100%; border-collapse: collapse; font-size: 15px; }
  th, td { padding: 12px 16px; text-align: left; vertical-align: top; border-top: 1px solid var(--border); }
  thead th { border-top: 0; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); background: var(--surface-2); }
  tbody th { font-weight: 600; }
  td code { font-family: var(--font-mono); font-size: 16px; overflow-wrap: anywhere; }
  td:last-child code { color: var(--accent-ink); font-weight: 700; }
  .table-note { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
  .steps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
  .steps li { display: flex; gap: 14px; padding: 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .step-num { flex: none; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; background: var(--yellow); color: #111; font-weight: 800; }
  .steps h3 { margin: 0 0 4px; font-size: 17px; }
  .steps p { margin: 0; font-size: 15px; color: var(--muted); }
  .tips { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
  .tips li { position: relative; padding: 14px 18px 14px 46px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; }
  .tips li::before { content: ""; position: absolute; left: 18px; top: 22px; width: 12px; height: 12px; border-radius: 50%; background: var(--yellow); }
  .keep { padding: 22px 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .keep h2 { margin: 0 0 8px; font-family: var(--font-mark); font-size: 24px; letter-spacing: -.01em; }
  .keep p { margin: 0; color: var(--muted); }
  details { border: 1px solid var(--border); background: var(--surface); border-radius: 14px; padding: 0 20px; margin: 0 0 10px; }
  summary { cursor: pointer; padding: 16px 0; font-weight: 700; font-size: 18px; list-style: none; display: flex; justify-content: space-between; gap: 12px; }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: "+"; color: var(--accent-ink); font-size: 22px; line-height: 1; }
  details[open] summary::after { content: "\\2212"; }
  details p { margin: 0 0 16px; color: var(--muted); }
  .pager { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 52px 0 0; }
  .pager a { display: block; padding: 18px 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; text-decoration: none; }
  .pager a:hover { border-color: var(--border-strong); }
  .pager .next { text-align: right; }
  .pager small { display: block; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--accent-ink); }
  .pager span { font-weight: 700; }
  .related { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
  .related a { display: block; height: 100%; padding: 16px 18px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; text-decoration: none; font-weight: 700; }
  .related a:hover { border-color: var(--border-strong); color: var(--accent-ink); }
  .all-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-weight: 700; color: var(--accent-ink); text-decoration: none; }
  .all-link svg { width: 16px; height: 16px; }
  .legal h2 { margin: 34px 0 8px; font-family: var(--font-mark); font-size: 22px; letter-spacing: -.01em; }
  .legal p, .legal li { color: var(--muted); }
  .legal ul { padding-left: 22px; }
  .updated { margin: 0; font-size: 14px; color: var(--muted); }
  .end { margin: 56px 0 0; padding: 34px 28px; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: 22px; position: relative; }
  .end::before { content: ""; position: absolute; top: -1px; left: 15%; right: 15%; height: 1px; background: linear-gradient(90deg, transparent, var(--yellow), transparent); }
  .end h2 { margin: 0 0 6px; font-family: var(--font-mark); font-size: clamp(24px, 4vw, 32px); letter-spacing: -.02em; }
  .end p { margin: 0 0 20px; color: var(--muted); }
  footer { padding: 56px 0 40px; text-align: center; }
  .socials { display: flex; justify-content: center; gap: 16px; margin-bottom: 26px; }
  .socials a { display: grid; place-items: center; width: 52px; height: 52px; border: 1px solid var(--border-strong); border-radius: 50%; color: var(--text); }
  .socials a:hover { border-color: var(--yellow); }
  .socials svg { width: 22px; height: 22px; }
  .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; margin: 0 0 22px; padding: 0; list-style: none; }
  .links a { text-decoration: none; border-bottom: 1px solid var(--border-strong); padding-bottom: 2px; }
  .links a:hover { border-color: var(--yellow); }
  .copy { margin: 0; font-size: 14px; color: var(--muted); }

  @media (max-width: 400px) {
    .bar-actions { gap: 6px; }
    .pill-btn { padding: 0 10px; }
    .icon-only { padding: 0; width: 38px; }
    .brand { gap: 8px; }
    .brand img { width: 30px; height: 30px; }
    .wordmark { font-size: 18px; }
  }
  @media (max-width: 340px) {
    .brand img { display: none; }
  }
  [data-l] { display: none; }
  :root[lang="en"] [data-l="en"], :root[lang="ro"] [data-l="ro"] { display: revert; }
  @media (max-width: 760px) {
    .toc ol, .toc ul { columns: 1; }
    .reason { grid-template-columns: minmax(0, 1fr); gap: 6px; padding: 18px; }
    .num { font-size: 26px; }
    .ex { grid-template-columns: minmax(0, 1fr); }
    .ex .arrow svg { transform: rotate(90deg); }
    .steps, .related, .pager { grid-template-columns: minmax(0, 1fr); }
    .pager .next { text-align: left; }
    th, td { padding: 10px 12px; }
    td code { font-size: 14px; }
  }`;

// Shared page shell. `lang` is the page language, or null for pages that switch language in place.
function shell({ lang, title, description, url, alternates, ogType, jsonld, langLink, body, footer, published }) {
  const head = [];
  head.push(`<title>${esc(title)}</title>`, `<meta name="description" content="${esc(description)}">`, `<link rel="canonical" href="${url}">`);
  for (const [l, href] of alternates || []) head.push(`<link rel="alternate" hreflang="${l}" href="${href}">`);
  head.push('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="author" content="David Constantin Cristea">',
    '<meta name="theme-color" content="#0c0c0c">', '<meta name="color-scheme" content="dark light">',
    `<meta property="og:type" content="${ogType}">`, '<meta property="og:site_name" content="CDAV.IO">',
    `<meta property="og:title" content="${esc(title)}">`, `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${url}">`, `<meta property="og:image" content="${SITE}/preview.png">`,
    '<meta property="og:image:width" content="1920">', '<meta property="og:image:height" content="1080">');
  if (lang) head.push(`<meta property="og:locale" content="${lang === 'ro' ? 'ro_RO' : 'en_US'}">`);
  if (published) head.push(`<meta property="article:published_time" content="${published}">`, `<meta property="article:modified_time" content="${MODIFIED}">`);
  head.push('<meta name="twitter:card" content="summary_large_image">', '<meta name="twitter:site" content="@cdav_io">',
    `<meta name="twitter:title" content="${esc(title)}">`, `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${SITE}/preview.png">`, `<link rel="icon" type="image/svg+xml" href="${ICON}">`);
  if (jsonld) head.push(`<script type="application/ld+json">\n${JSON.stringify(jsonld, null, 2)}\n</script>`);

  // Language: fixed for single-language pages, otherwise taken from the visitor's saved choice.
  const langInit = lang
    ? `try { localStorage.setItem('dr-lang', '${lang}'); } catch (e) {}`
    : `var l = null; try { l = localStorage.getItem('dr-lang'); } catch (e) {}
    if (l !== 'en' && l !== 'ro') l = /^ro\\b/i.test(navigator.language || '') ? 'ro' : 'en';
    d.setAttribute('lang', l);`;

  return `<!doctype html>
<html lang="${lang || 'en'}" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; base-uri 'none'; form-action 'none'">
${head.join('\n')}
<script>
  (function () {
    var d = document.documentElement, t = null;
    try { t = localStorage.getItem('dr-theme'); } catch (e) {}
    d.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
    ${langInit}
  })();
</script>
<style>${CSS}
</style>
</head>
<body>
<div class="wrap bar">
  <a class="brand" href="/" aria-label="DIACR by CDAV.IO"><img src="${ICON}" alt="" width="34" height="34"><span class="wordmark">CDAV.<span class="io">IO</span></span></a>
  <div class="bar-actions">
    <a class="pill-btn icon-only" href="https://github.com/CDAVIO/Diacritics-remover" rel="noopener" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg></a>
    ${langLink}
    <button type="button" class="pill-btn icon-only" id="themeBtn">${SUN}${MOON}</button>
  </div>
</div>

<main class="wrap">
${body}
</main>

<footer>
  <div class="wrap">
    ${SOCIALS}
    ${footer}
    <p class="copy">${COPYRIGHT}</p>
  </div>
</footer>

<script>
  (function () {
    var root = document.documentElement, btn = document.getElementById('themeBtn');
    var labels = { en: ['Switch to light theme', 'Switch to dark theme'], ro: ['Comută la tema deschisă', 'Comută la tema întunecată'] };
    function paint() {
      var dark = root.getAttribute('data-theme') === 'dark', l = labels[root.lang] || labels.en;
      document.getElementById('iconSun').style.display = dark ? '' : 'none';
      document.getElementById('iconMoon').style.display = dark ? 'none' : '';
      btn.setAttribute('aria-label', dark ? l[0] : l[1]); btn.title = dark ? l[0] : l[1];
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('dr-theme', next); } catch (e) {}
      paint();
    });
    var langBtn = document.getElementById('langLink');
    if (langBtn) langBtn.addEventListener('click', function (e) {
      if (langBtn.tagName === 'BUTTON') {
        var next = root.lang === 'ro' ? 'en' : 'ro';
        root.setAttribute('lang', next);
        try { localStorage.setItem('dr-lang', next); } catch (err) {}
        paint();
      } else {
        try { localStorage.setItem('dr-lang', langBtn.getAttribute('hreflang')); } catch (err) {}
      }
    });
    document.getElementById('year').textContent = String(new Date().getFullYear());
    paint();
  })();
</script>
</body>
</html>
`.replace(/\u2014/g, '&#8212;');
}

const langLinkTo = (lang, href) => `<a class="pill-btn" href="${href}" hreflang="${lang === 'en' ? 'ro' : 'en'}" aria-label="${lang === 'en' ? 'Change language to Romanian' : 'Schimbă limba în engleză'}" id="langLink">${GLOBE}<span>${lang === 'en' ? 'English' : 'Română'}</span></a>`;

const footerLinks = lang => {
  const u = UI[lang];
  return `<ul class="links">
      <li><a href="/terms/">${u.terms}</a></li>
      <li><a href="/privacy/">${esc(u.privacy)}</a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/LICENSE" rel="noopener">${u.license}</a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/SECURITY.md" rel="noopener">${u.security}</a></li>
    </ul>`;
};

const pair = (before, after, tagB, tagA, block) => `
          <div class="ex${block ? ' ex-block' : ''}">
            <div class="from"><span class="tag">${tagB}</span><code>${esc(before)}</code></div>
            <span class="arrow" aria-hidden="true">${ARROW}</span>
            <div class="to"><span class="tag">${tagA}</span><code>${esc(after)}</code></div>
          </div>`;

const reasonUrl = (lang, i) => `${PAGES[lang].path}${REASONS[lang][i].slug}/`;

const author = { '@type': 'Person', name: 'David Constantin Cristea', url: 'https://www.linkedin.com/in/cristea-david/' };
const publisher = { '@type': 'Organization', name: 'CDAV.IO', url: 'https://cdav.io/', logo: { '@type': 'ImageObject', url: SITE + '/icon.svg' } };
const app = { '@type': 'SoftwareApplication', name: 'DIACR', url: SITE + '/', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };
const faqLd = faq => ({ '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const faqHtml = faq => faq.map(([q, a]) => `
        <details>
          <summary>${esc(q)}</summary>
          <p>${esc(a)}</p>
        </details>`).join('');

function hub(lang) {
  const p = PAGES[lang], o = PAGES[p.other], u = UI[lang];
  const url = SITE + p.path;
  const ids = p.reasons.map((r, i) => `${i + 1}-${slug(r[0])}`);
  const sec = { what: slug(p.what.title), examples: slug(p.examples.title), table: slug(p.table.title), steps: slug(p.steps.title), keep: slug(p.keep.title), faq: slug(p.faqTitle) };
  const plainH1 = p.h1.replace(/<[^>]+>/g, '');

  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': url + '#article', headline: plainH1, description: p.description, inLanguage: lang, mainEntityOfPage: url,
      image: SITE + '/preview.png', datePublished: PUBLISHED, dateModified: MODIFIED, author, publisher, about: app },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: p.crumbs[0], item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: p.crumbs[1], item: url }] },
    { '@type': 'ItemList', name: p.reasonsTitle, numberOfItems: p.reasons.length,
      itemListElement: p.reasons.map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: r[0], url: SITE + reasonUrl(lang, i) })) },
    { '@type': 'HowTo', name: p.steps.title, inLanguage: lang, step: p.steps.items.map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: t })) },
    faqLd(p.faq)
  ] };

  const reasons = p.reasons.map((r, i) => `
      <section class="reason" id="${ids[i]}">
        <span class="num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <div class="body">
          <h3><a href="${reasonUrl(lang, i)}">${esc(r[0])}</a></h3>
          <p>${esc(r[1])}</p>${pair(r[2], clean(r[2]), p.before, p.after)}
          <a class="more-link" href="${reasonUrl(lang, i)}">${u.readMore} ${ARROW}</a>
        </div>
      </section>`).join('');

  const examples = p.examples.items.map(([label, text, note]) => `
      <figure class="example">
        <figcaption>${esc(label)}</figcaption>${pair(text, clean(text), p.before, p.after, true)}${note ? `
        <p class="note">${esc(note)} <code>/${slug(text)}</code></p>` : ''}
      </figure>`).join('');

  const rows = p.table.rows.map(([name, chars]) => `
          <tr><th scope="row">${esc(name)}</th><td><code>${esc(chars)}</code></td><td><code>${esc(chars.split(' ').map(clean).join(' '))}</code></td></tr>`).join('');

  const steps = p.steps.items.map(([n, t], i) => `
        <li><span class="step-num" aria-hidden="true">${i + 1}</span><div><h3>${esc(n)}</h3><p>${esc(t)}</p></div></li>`).join('');

  const toc = p.reasons.map((r, i) => `<li><a href="#${ids[i]}">${esc(r[0])}</a></li>`).join('\n          ');
  const tocMore = [[sec.what, p.what.title], [sec.examples, p.examples.title], [sec.table, p.table.title], [sec.steps, p.steps.title], [sec.keep, p.keep.title], [sec.faq, p.faqTitle]]
    .map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('\n          ');

  const body = `  <article class="narrow">
    <nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="/">${p.crumbs[0]}</a></li><li aria-current="page">${esc(p.crumbs[1])}</li></ol></nav>
    <header class="hero">
      <span class="eyebrow">${p.eyebrow}</span>
      <h1>${p.h1}</h1>
      <p class="intro">${esc(p.intro)}</p>
      <div class="cta-row">
        <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
        <span class="cta-note">${esc(p.ctaNote)}</span>
      </div>
    </header>

    <section class="short">
      <h2>${esc(p.short[0])}</h2>
      <p>${esc(p.short[1])}</p>
    </section>

    <section class="block" id="${sec.what}">
      <h2>${esc(p.what.title)}</h2>
      ${p.what.paras.map((t, i) => `<p${i === 0 ? ' class="lead"' : ''}>${esc(t)}</p>`).join('\n      ')}
    </section>

    <nav class="toc" aria-label="${esc(p.tocTitle)}">
      <h2>${esc(p.tocTitle)}</h2>
      <ol>
          ${toc}
      </ol>
      <h2 class="more">${esc(p.tocMore)}</h2>
      <ul>
          ${tocMore}
      </ul>
    </nav>

    <section class="block">
      <h2>${esc(p.reasonsTitle)}</h2>
      <div class="reasons">${reasons}
      </div>
    </section>

    <section class="block" id="${sec.examples}">
      <h2>${esc(p.examples.title)}</h2>
      <p>${esc(p.examples.intro)}</p>${examples}
    </section>

    <section class="block" id="${sec.table}">
      <h2>${esc(p.table.title)}</h2>
      <p>${esc(p.table.intro)}</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th scope="col">${esc(p.table.head[0])}</th><th scope="col">${esc(p.table.head[1])}</th><th scope="col">${esc(p.table.head[2])}</th></tr></thead>
          <tbody>${rows}
          </tbody>
        </table>
      </div>
      <p class="table-note">${esc(p.table.note)}</p>
    </section>

    <section class="block" id="${sec.steps}">
      <h2>${esc(p.steps.title)}</h2>
      <ol class="steps">${steps}
      </ol>
    </section>

    <section class="block keep" id="${sec.keep}">
      <h2>${esc(p.keep.title)}</h2>
      <p>${esc(p.keep.text)}</p>
    </section>

    <section class="block" id="${sec.faq}">
      <h2>${esc(p.faqTitle)}</h2>${faqHtml(p.faq)}
    </section>

    <section class="end">
      <h2>${esc(p.endTitle)}</h2>
      <p>${esc(p.endText)}</p>
      <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
    </section>
  </article>`;

  return shell({
    lang, title: p.title, description: p.description, url, ogType: 'article', jsonld, published: PUBLISHED,
    alternates: [[lang, url], [p.other, SITE + o.path], ['x-default', SITE + PAGES.en.path]],
    langLink: langLinkTo(lang, o.path), body, footer: footerLinks(lang)
  });
}

function reasonPage(lang, i) {
  const p = PAGES[lang], u = UI[lang], R = REASONS[lang], r = R[i];
  const other = p.other, n = R.length;
  const path = reasonUrl(lang, i), url = SITE + path;
  const intro = p.reasons[i][1];
  const title = `${r.title} | DIACR`;
  const slugNote = p.examples.items.find(x => x[2]);

  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': url + '#article', headline: r.h1, description: r.description, inLanguage: lang, mainEntityOfPage: url,
      image: SITE + '/preview.png', datePublished: MODIFIED, dateModified: MODIFIED, author, publisher, about: app,
      isPartOf: { '@type': 'Article', name: p.title.replace(' | DIACR', ''), url: SITE + p.path } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'DIACR', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: p.crumbs[1], item: SITE + p.path },
      { '@type': 'ListItem', position: 3, name: r.h1, item: url }] },
    faqLd(r.faq)
  ] };

  const prev = (i + n - 1) % n, next = (i + 1) % n;
  const related = [1, 2, 3].map(k => (i + k + 1) % n).filter(k => k !== next);
  while (related.length < 3) related.push((related[related.length - 1] + 1) % n);

  const steps = p.steps.items.map(([s, t], k) => `
        <li><span class="step-num" aria-hidden="true">${k + 1}</span><div><h3>${esc(s)}</h3><p>${esc(t)}</p></div></li>`).join('');

  const body = `  <article class="narrow">
    <nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="/">DIACR</a></li><li><a href="${p.path}">${esc(p.crumbs[1])}</a></li><li aria-current="page">${esc(r.h1)}</li></ol></nav>
    <header class="hero">
      <span class="eyebrow">${u.reasonOf(i + 1, n)}</span>
      <h1>${esc(r.h1)}</h1>
      <p class="intro">${esc(intro)}</p>
      <div class="cta-row">
        <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
        <span class="cta-note">${esc(p.ctaNote)}</span>
      </div>
    </header>

    <section class="block">
      <h2>${u.example}</h2>
      <figure class="example">${pair(r.example, clean(r.example), p.before, p.after, true)}${r.slugNote ? `
        <p class="note">${esc(slugNote[2])} <code>/${slug(r.example)}</code></p>` : ''}
      </figure>
    </section>

    <section class="block">
      <h2>${u.why}</h2>
      <p class="lead">${esc(r.why)}</p>
    </section>

    <section class="block">
      <h2>${u.fix}</h2>
      <ol class="steps">${steps}
      </ol>
    </section>

    <section class="block">
      <h2>${u.tips}</h2>
      <ul class="tips">
        ${r.tips.map(t => `<li>${esc(t)}</li>`).join('\n        ')}
      </ul>
    </section>

    <section class="block">
      <h2>${u.questions}</h2>${faqHtml(r.faq)}
    </section>

    <nav class="pager" aria-label="${u.all}">
      <a class="prev" href="${reasonUrl(lang, prev)}"><small>${u.prev}</small><span>${esc(R[prev].h1)}</span></a>
      <a class="next" href="${reasonUrl(lang, next)}"><small>${u.next}</small><span>${esc(R[next].h1)}</span></a>
    </nav>

    <section class="block">
      <h2>${u.related}</h2>
      <ul class="related">
        ${related.map(k => `<li><a href="${reasonUrl(lang, k)}">${esc(R[k].h1)}</a></li>`).join('\n        ')}
      </ul>
      <a class="all-link" href="${p.path}">${u.all} ${ARROW}</a>
    </section>

    <section class="end">
      <h2>${esc(p.endTitle)}</h2>
      <p>${esc(p.endText)}</p>
      <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
    </section>
  </article>`;

  return shell({
    lang, title, description: r.description, url, ogType: 'article', jsonld, published: MODIFIED,
    alternates: [[lang, url], [other, SITE + reasonUrl(other, i)], ['x-default', SITE + reasonUrl('en', i)]],
    langLink: langLinkTo(lang, reasonUrl(other, i)), body, footer: footerLinks(lang)
  });
}

// Terms and Privacy: one URL each, both languages on the page, switched in place.
const LEGAL = {
  terms: {
    title: { en: 'Terms of use', ro: 'Termeni de utilizare' },
    description: 'Terms of use for DIACR, the free diacritics remover by CDAV.IO. Termeni de utilizare pentru DIACR, aplicația gratuită de eliminare a diacriticelor.',
    sections: {
      en: [
        ['The service', 'DIACR (diacr.cdav.io) is a free tool by CDAV.IO that removes diacritics and special characters from text, directly in your browser.'],
        ['Free use', 'You may use DIACR for personal and commercial purposes, free of charge and without an account. There are no ads.'],
        ['No warranty', 'DIACR is provided "as is", without any warranty. Check the result before using it in important documents, payments or official forms. CDAV.IO is not liable for any loss caused by using the tool or its results.'],
        ['Your content', 'Your text and files are processed on your device and are never sent to CDAV.IO. You are responsible for the content you process.'],
        ['Open source code and brand', 'The source code is available under the MIT License on GitHub. The names CDAV.IO and DIACR, the logo and the website design and content are not covered by that licence and remain the property of CDAV.IO. All rights reserved.'],
        ['Changes', 'These terms may be updated. The date at the top shows the latest version.'],
        ['Contact', 'For questions about these terms, contact CDAV.IO through cdav.io.']
      ],
      ro: [
        ['Serviciul', 'DIACR (diacr.cdav.io) este o aplicație gratuită CDAV.IO care elimină diacriticele și caracterele speciale din text, direct în browserul tău.'],
        ['Utilizare gratuită', 'Poți folosi DIACR în scop personal și comercial, gratuit și fără cont. Nu există reclame.'],
        ['Fără garanție', 'DIACR este oferit „ca atare”, fără nicio garanție. Verifică rezultatul înainte să-l folosești în documente importante, plăți sau formulare oficiale. CDAV.IO nu răspunde pentru pierderi cauzate de folosirea aplicației sau a rezultatelor ei.'],
        ['Conținutul tău', 'Textul și fișierele tale sunt procesate pe dispozitivul tău și nu sunt trimise niciodată către CDAV.IO. Tu răspunzi pentru conținutul pe care îl procesezi.'],
        ['Cod open source și marcă', 'Codul sursă este disponibil sub licența MIT pe GitHub. Numele CDAV.IO și DIACR, logo-ul, designul și conținutul site-ului nu sunt acoperite de această licență și rămân proprietatea CDAV.IO. Toate drepturile rezervate.'],
        ['Modificări', 'Acești termeni pot fi actualizați. Data de sus arată ultima versiune.'],
        ['Contact', 'Pentru întrebări despre acești termeni, contactează CDAV.IO prin cdav.io.']
      ]
    }
  },
  privacy: {
    title: { en: 'Privacy Policy', ro: 'Politica de confidențialitate' },
    description: 'Privacy Policy for DIACR: no tracking, no ads, no cookies, your text never leaves your device. Politica de confidențialitate DIACR: fără urmărire, fără reclame.',
    sections: {
      en: [
        ['In short', 'DIACR does not collect, store or send your text. There is no account, no advertising, no analytics and no cookies.'],
        ['Your text and files', 'Everything you paste, type or upload is processed only in your browser. The page blocks all network requests with a strict Content Security Policy, so your text cannot be sent anywhere.'],
        ['What is stored in your browser', 'Two preferences are saved in your browser’s local storage: the theme (dr-theme) and the language (dr-lang). They never leave your device, and you can delete them at any time by clearing your browser data.'],
        ['Hosting', 'The site is hosted on Netlify. Like any web host, Netlify may process standard technical data such as IP address and browser type in server logs to deliver the page securely. CDAV.IO does not use these logs for tracking or advertising.'],
        ['Third parties', 'DIACR loads no third-party scripts, fonts, trackers or ads.'],
        ['Your rights', 'Because the tool does not collect personal data, there is nothing to access, correct or delete. For any privacy question, contact CDAV.IO through cdav.io.'],
        ['Changes', 'This policy may be updated. The date at the top shows the latest version.']
      ],
      ro: [
        ['Pe scurt', 'DIACR nu colectează, nu salvează și nu trimite textul tău. Nu există cont, reclame, statistici sau cookie-uri.'],
        ['Textul și fișierele tale', 'Tot ce lipești, scrii sau încarci este procesat doar în browserul tău. Pagina blochează orice cerere în rețea printr-o politică de securitate strictă (Content Security Policy), deci textul tău nu poate fi trimis nicăieri.'],
        ['Ce se salvează în browser', 'Două preferințe sunt salvate în memoria locală a browserului: tema (dr-theme) și limba (dr-lang). Nu părăsesc dispozitivul tău și le poți șterge oricând ștergând datele browserului.'],
        ['Găzduire', 'Site-ul este găzduit de Netlify. Ca orice serviciu de găzduire, Netlify poate procesa date tehnice obișnuite, cum ar fi adresa IP și tipul browserului, în jurnalele serverului, ca să livreze pagina în siguranță. CDAV.IO nu folosește aceste jurnale pentru urmărire sau reclame.'],
        ['Terți', 'DIACR nu încarcă scripturi, fonturi, instrumente de urmărire sau reclame de la terți.'],
        ['Drepturile tale', 'Pentru că aplicația nu colectează date personale, nu există nimic de accesat, corectat sau șters. Pentru orice întrebare despre confidențialitate, contactează CDAV.IO prin cdav.io.'],
        ['Modificări', 'Această politică poate fi actualizată. Data de sus arată ultima versiune.']
      ]
    }
  }
};

function legalPage(key) {
  const L = LEGAL[key], url = `${SITE}/${key}/`;
  const block = lang => `    <div data-l="${lang}" lang="${lang}">
      <nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="/">DIACR</a></li><li aria-current="page">${esc(L.title[lang])}</li></ol></nav>
      <header class="hero">
        <h1>${esc(L.title[lang])}</h1>
        <p class="updated">${UI[lang].updated}</p>
      </header>
${L.sections[lang].map(([h, t]) => `      <h2>${esc(h)}</h2>\n      <p>${esc(t)}</p>`).join('\n')}
    </div>`;
  const footer = `<ul class="links">
      <li><a href="/terms/"><span data-l="en">Terms</span><span data-l="ro">Termeni</span></a></li>
      <li><a href="/privacy/"><span data-l="en">Privacy Policy</span><span data-l="ro">Politica de confidențialitate</span></a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/LICENSE" rel="noopener"><span data-l="en">MIT License</span><span data-l="ro">Licență MIT</span></a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/SECURITY.md" rel="noopener"><span data-l="en">Security</span><span data-l="ro">Securitate</span></a></li>
    </ul>`;
  const langLink = `<button type="button" class="pill-btn" id="langLink" aria-label="Change language / Schimbă limba">${GLOBE}<span data-l="en">English</span><span data-l="ro">Română</span></button>`;
  return shell({
    lang: null, title: `${L.title.en} | DIACR`, description: L.description, url, ogType: 'website',
    langLink, body: `  <article class="narrow legal">\n${block('en')}\n${block('ro')}\n  </article>`, footer
  });
}

function write(path, html) {
  const dir = path.replace(/^\/|\/$/g, '');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dir + '/index.html', html);
}

let count = 0;
for (const lang of ['en', 'ro']) {
  write(PAGES[lang].path, hub(lang)); count++;
  REASONS[lang].forEach((r, i) => { write(reasonUrl(lang, i), reasonPage(lang, i)); count++; });
}
for (const key of Object.keys(LEGAL)) { write(`/${key}/`, legalPage(key)); count++; }

// Sitemap with every page and its language alternates.
const urls = [{ loc: '/', priority: '1.0' }, { loc: '/terms/', priority: '0.3' }, { loc: '/privacy/', priority: '0.3' }];
urls.push({ loc: PAGES.en.path, alt: { en: PAGES.en.path, ro: PAGES.ro.path }, priority: '0.8' });
urls.push({ loc: PAGES.ro.path, alt: { en: PAGES.en.path, ro: PAGES.ro.path }, priority: '0.8' });
REASONS.en.forEach((r, i) => {
  const alt = { en: reasonUrl('en', i), ro: reasonUrl('ro', i) };
  urls.push({ loc: alt.en, alt, priority: '0.7' }, { loc: alt.ro, alt, priority: '0.7' });
});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(x => `  <url>
    <loc>${SITE}${x.loc}</loc>${x.alt ? `
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${x.alt.en}"/>
    <xhtml:link rel="alternate" hreflang="ro" href="${SITE}${x.alt.ro}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${x.alt.en}"/>` : ''}
    <lastmod>${MODIFIED}</lastmod>
    <priority>${x.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync('sitemap.xml', sitemap);
console.log(`wrote ${count} pages and sitemap.xml with ${urls.length} URLs`);
