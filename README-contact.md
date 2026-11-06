# Contact Page — CMS Integration Guide

This guide provides the standalone, production-ready HTML and scoped CSS to integrate the modernized **Contact** page component into the university CMS/SharePoint portal.

---

## 1. Target Container to Replace

When editing the university website for the Contact page:
- **Locate Target**: Find the existing main content container:
  ```html
  <div id="sag-ana" class="wpb_wrapper vc_custom_1461916946657"> ... </div>
  ```
  *(or any existing element with `id="sag-ana"` in the main content column)*.
- **Action**: Replace that entire `<div>` and all of its nested contents with the HTML block below.

---

## 2. Standalone HTML Content Block

Copy the block below into the target container area:

```html
<article id="sag-ana" class="office-page" aria-labelledby="office-title">
  <div class="office-intro">
    <header class="office-welcome">
      <p class="office-kicker">International · Short-term study programs</p>
      <h1 id="office-title">Contact the office</h1>
      <p class="office-lead">Have a question about studying abroad? Email the Short-Term Study Programs team with the programme name, the host university, and what you’d like to know.</p>
      <div class="office-channel">
        <p class="office-label">General enquiries</p>
        <a class="office-email" href="mailto:shortterm@aydin.edu.tr">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
          shortterm@aydin.edu.tr
        </a>
      </div>
      <div class="office-channel">
        <p class="office-label">Call the university</p>
        <a class="office-phone" href="tel:+904441428">+90 444 1 428</a>
        <span class="office-extension">Ask for extension <strong>14914</strong></span>
      </div>
    </header>

    <section class="office-visit" aria-labelledby="visit-title">
      <p class="office-kicker"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.4"/></svg> Florya Campus</p>
      <h2 id="visit-title">Visit the office</h2>
      <address><strong>J Block, 2nd floor</strong><br>Istanbul Aydın University<br>Beşyol Mah., İnönü Cad. No: 38<br>Sefaköy, Küçükçekmece, İstanbul</address>
      <a class="office-map" href="https://www.google.com/maps/dir/?api=1&amp;destination=Istanbul+Aydin+University+Florya+Campus%2C+Besyol%2C+Kucukcekmece%2C+Istanbul">Directions to campus <span aria-hidden="true">↗</span></a>
      <div class="office-hours">
        <p class="office-label">Office hours · Istanbul time</p>
        <p><strong>Monday–Friday, 09:00–17:00</strong><br>Closed on official holidays.</p>
      </div>
    </section>
  </div>

  <section class="office-team" aria-labelledby="team-title">
    <h2 id="team-title">Meet the coordinators</h2>
    <div class="office-directory">
      <div class="office-person">
        <img src="../assets/images/pages/gurkan-donat.jpg" width="400" height="400" alt="Gürkan Donat">
        <div><h3>Gürkan Donat</h3>
          <p>Short-Term Study Programs Coordinator</p>
          <a href="mailto:gurkandonat@aydin.edu.tr">gurkandonat@aydin.edu.tr</a>
        </div>
      </div>
      <div class="office-person">
        <img src="../assets/images/pages/yazid-munsari.jpeg" width="980" height="980" alt="Yazid Munsari">
        <div><h3>Yazid Munsari</h3>
          <p>Assistant Coordinator, Short-Term Study Programs</p>
          <a href="mailto:yazidmunsari@aydin.edu.tr">yazidmunsari@aydin.edu.tr</a>
        </div>
      </div>
    </div>
  </section>

  <nav class="office-guides" aria-label="Study abroad guidance">
    <a href="faq.html"><span><strong>Frequently asked questions</strong><small>Applying, costs, and academic credit</small></span><span aria-hidden="true">→</span></a>
    <a href="application-process.html"><span><strong>Already accepted?</strong><small>Your checklist for travel, study, and return</small></span><span aria-hidden="true">→</span></a>
  </nav>
</article>
```

---

## 3. Scoped CSS Styles

The following styles govern component typography, layout, container queries, and team cards. Add them to the site stylesheet or inside a `<style>` block in the page `<head>`:

```css
/* Contact directory. All typography and layout rules are local to this page. */
@font-face {
  font-family: "Office Open Sans";
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  font-weight: 300 800;
  font-display: swap;
}
@font-face {
  font-family: "Office Open Sans";
  src: url("../fonts/open-sans-latin-ext.woff2") format("woff2");
  font-weight: 300 800;
  font-display: swap;
  unicode-range: U+0100-024F, U+1E00-1EFF;
}

#study-programs-site .bgGrey .container .row #sag-ana.office-page {
  --ink: #123852;
  --text: #465c6a;
  --line: #d9e3e7;
  --teal: #23635f;
  --pad: clamp(20px, 3vw, 44px);
  padding: 0 !important;
  border-radius: 10px !important;
  background: white !important;
  color: var(--text);
  font: 400 16px/1.65 "Office Open Sans", "Segoe UI", sans-serif;
  text-align: left;
  container-type: inline-size;
}
#sag-ana.office-page * { box-sizing: border-box; font-family: inherit; }
#sag-ana.office-page :is(h1,h2,h3,p,address) { margin: 0; }
#sag-ana.office-page :is(h1,h2,h3) { color: var(--ink); font-weight: 700; line-height: 1.22; letter-spacing: -.025em; }
#sag-ana.office-page h1 { font-size: clamp(31px, 3vw, 40px); }
#sag-ana.office-page h2 { font-size: 24px; }
#sag-ana.office-page h3 { font-size: 19px; }
#sag-ana.office-page a { color: var(--ink); text-decoration: underline; text-underline-offset: 4px; overflow-wrap: anywhere; }
#sag-ana.office-page a:hover { color: var(--teal); }
#sag-ana.office-page a:focus-visible { outline: 3px solid #27789b; outline-offset: 3px; }
.office-page svg { width: 20px; height: 20px; flex: none; }

/* Give the general inbox first priority; keep visiting details together. */
.office-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  align-items: start;
  gap: var(--pad);
  padding: var(--pad);
  border-top: 4px solid var(--ink);
  border-radius: 10px 10px 0 0;
}
.office-welcome { padding-block: 10px; }
#sag-ana.office-page .office-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  color: var(--teal);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .085em;
  text-transform: uppercase;
}
#sag-ana.office-page .office-lead { max-width: 52ch; margin: 15px 0 24px; font-size: 16px; line-height: 1.7; }
.office-page .office-label { font-size: 13px; font-weight: 600; }
.office-channel + .office-channel { margin-top: 18px; }
#sag-ana.office-page a.office-email {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  min-height: 46px;
  margin-top: 6px;
  padding: 8px 15px;
  border-radius: 5px;
  background: var(--ink);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}
#sag-ana.office-page a.office-email:hover { background: #205477; }
.office-phone { display: inline-flex; align-items: center; min-height: 44px; font-size: 17px; font-weight: 600; }
.office-extension { display: inline-block; margin-inline-start: 10px; font-size: 13px; }
.office-visit { padding: clamp(20px, 2vw, 29px); background: #eff6f5; border: 1px solid #d3e3e0; border-radius: 8px; }
#sag-ana.office-page .office-visit address { margin-top: 16px; font: inherit; font-size: 15px; }
.office-visit address strong { color: var(--ink); }
.office-map { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; font-size: 14px; font-weight: 600; }
.office-hours { margin-top: 10px; padding-top: 15px; border-top: 1px solid #c9dcd8; }
.office-hours > p + p { padding-top: 4px; font-size: 14px; }
.office-hours strong { color: var(--ink); }

/* Portraits stay beside the names at all but the narrowest widths. */
.office-team { margin-inline: var(--pad); padding: 28px 0 30px; border-top: 1px solid var(--line); }
.office-directory, .office-guides { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; }
.office-directory { margin-top: 22px; }
.office-person { display: grid; grid-template-columns: 80px minmax(0, 1fr); gap: 16px; align-items: center; }
.office-person img { display: block; width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
#sag-ana.office-page .office-person p { margin-top: 5px; font-size: 14px; line-height: 1.5; }
.office-person a { display: inline-flex; align-items: center; min-height: 44px; font-size: 14px; }
.office-guides { margin-inline: var(--pad); padding-block: 16px; border-block: 1px solid var(--line); }
#sag-ana.office-page .office-guides a { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 9px 12px; border-radius: 4px; text-decoration: none; }
#sag-ana.office-page .office-guides a:hover { background: #f1f6f7; }
.office-guides strong, .office-guides small { display: block; }
.office-guides strong { font-size: 15px; }
.office-guides small { margin-top: 2px; color: var(--text); font-size: 13px; }

/* Respond to the content column, including when the site sidebar is visible. */
@container (max-width: 730px) {
  .office-intro { grid-template-columns: 1fr; gap: 22px; }
  .office-welcome { padding: 0; }
  .office-directory { grid-template-columns: 1fr; gap: 18px; }
  .office-person + .office-person { border-top: 1px solid var(--line); padding-top: 18px; }
}
@container (max-width: 480px) {
  .office-intro { padding-block: 26px; }
  .office-extension { display: block; margin: -3px 0 0; }
  .office-person { grid-template-columns: 58px minmax(0, 1fr); gap: 12px; }
  .office-person img { width: 58px; height: 58px; }
  .office-guides { grid-template-columns: 1fr; gap: 2px; }
  #sag-ana.office-page .office-guides a { padding-inline: 0; }
}
```

---

## 4. Required Assets

- **Images**:
  - Gürkan Donat: `assets/images/pages/gurkan-donat.jpg`
  - Yazid Munsari: `assets/images/pages/yazid-munsari.jpeg`
- **Fonts**:
  - `assets/fonts/open-sans-latin.woff2`
  - `assets/fonts/open-sans-latin-ext.woff2`
- **Interactive Links**:
  - General Email: `mailto:shortterm@aydin.edu.tr`
  - Coordinator Emails: `mailto:gurkandonat@aydin.edu.tr`, `mailto:yazidmunsari@aydin.edu.tr`
  - University Telephone: `tel:+904441428` (ext. 14914)
  - Google Directions: Direct query to Istanbul Aydın University Florya Campus
