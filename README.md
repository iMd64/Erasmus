# Integration Guide for Short Term Study Programs

This guide contains the necessary HTML and CSS to integrate the Short Term Study Programs page content into the main university website structure. 

## 1. HTML Content

Copy the HTML block below. When editing the university website, locate the existing main content wrapper—specifically the element `<div class="wpb_wrapper vc_custom_1461916946657" id="sag-ana">`. **Replace that entire `<div>` and all of its contents** with the new block provided here.

```html
<div id="sag-ana" class="home-content">
  <div class="home-programs">
    <!-- Introduction: photograph and a clear route into the programs. -->
    <section class="home-hero" aria-labelledby="home-heading">
      <div class="home-hero-copy">
        <p class="home-eyebrow">Short Term Study Programs</p>
        <h1 id="home-heading">A short stay.<br>A world of <span class="home-heading-accent">possibility.</span></h1>
        <p class="home-lead">Discover new places, meet new people, and make learning an international experience.</p>
        <p>The <strong>International Short-Term Study Programs Office</strong> coordinates summer and winter schools,
          educational camps, and language training courses for incoming and outgoing students.</p>
        <div class="home-actions">
          <a class="home-button" href="#home-options">Explore your options <span aria-hidden="true">↓</span></a>
          <a class="home-text-link" href="https://www.aydin.edu.tr/en-us/international/shortterm/Pages/Contact.aspx">Talk to our team <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure class="home-hero-visual">
        <img class="hero-photo" src="https://www.aydin.edu.tr/en-us/international/shortterm/PublishingImages/MainPhoto.jpg"
          alt="Students from around the world celebrating together at an IAU short-term program" fetchpriority="high">
        <figcaption><span class="home-photo-mark" aria-hidden="true">↗</span> New places. New perspectives.</figcaption>
      </figure>
    </section>

    <!-- Quick navigation remains visible and easy to tap on small screens. -->
    <nav class="home-pathways" aria-label="Find your study opportunity">
      <a href="#home-outgoing"><span class="home-path-number" aria-hidden="true">01</span><span><strong>Study abroad</strong><small>For IAU students</small></span><span aria-hidden="true">↗</span></a>
      <a href="#home-incoming"><span class="home-path-number" aria-hidden="true">02</span><span><strong>Experience IAU</strong><small>For visiting students</small></span><span aria-hidden="true">↗</span></a>
      <a href="#home-volunteer"><span class="home-path-number" aria-hidden="true">03</span><span><strong>Join the A-Team</strong><small>Volunteer at IAU</small></span><span aria-hidden="true">↗</span></a>
    </nav>

    <div class="home-opportunities" id="home-options">
      <!-- Outgoing opportunities link to the two local program lists. -->
      <section class="home-section" id="home-outgoing" aria-labelledby="home-outgoing-heading">
        <div class="home-section-heading">
          <div><p class="home-eyebrow">Outgoing students</p><h2 id="home-outgoing-heading">Take your learning further.</h2></div>
          <p>Short-term experiences.<br>Perspectives that stay with you.</p>
        </div>
        <p class="home-section-intro">IAU students can participate in short-term study abroad programs at partner universities.
          Find your next opportunity in our <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx">summer and winter programs</a>
          or explore <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/study-abroad-language-programs.aspx">language courses abroad</a>.</p>
        <div class="home-outgoing-grid">
          <article class="home-study-card">
            <a class="home-card-image" href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx" tabindex="-1" aria-hidden="true">
              <img src="https://www.aydin.edu.tr/en-us/international/shortterm/PublishingImages/Pages/index/dnm2.jpg" alt="" loading="lazy">
              <span>Discover &amp; learn</span>
            </a>
            <div class="home-card-copy">
              <h3>Summer &amp; winter programs</h3>
              <p>Gain academic experience, discover new cultures, and make global connections through short-term programs at partner universities.</p>
              <a class="home-card-link" href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx">Explore programs <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article class="home-study-card">
            <a class="home-card-image" href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/study-abroad-language-programs.aspx" tabindex="-1" aria-hidden="true">
              <img src="https://www.aydin.edu.tr/en-us/international/shortterm/PublishingImages/Pages/index/dnm1.jpg" alt="" loading="lazy">
              <span>Connect through language</span>
            </a>
            <div class="home-card-copy">
              <h3>Language programs abroad</h3>
              <p>Develop your language skills and cultural understanding through short-term courses offered by IAU’s international partners.</p>
              <a class="home-card-link" href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/study-abroad-language-programs.aspx">Find a language course <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <!-- All four signature incoming programs retain their official links. -->
      <section class="home-section home-incoming" id="home-incoming" aria-labelledby="home-incoming-heading">
        <div class="home-section-heading">
          <div><p class="home-eyebrow">Incoming students</p><h2 id="home-incoming-heading">Four seasons of discovery.</h2></div>
          <span class="home-section-tag">The Delightful Programs</span>
        </div>
        <p class="home-section-intro">IAU offers four signature Delightful Programs for international university students worldwide.
          Combine academic learning with culture, travel, and new friendships.</p>
        <div class="home-incoming-grid">
          <article class="home-destination">
            <div class="home-season"><span>Winter school</span><span aria-hidden="true">01 /</span></div>
            <h3>Antalya &amp; Istanbul</h3>
            <p>A two-week program combining courses, company visits, and cultural trips in Antalya and Istanbul.</p>
            <a class="home-card-link" href="https://delightful.istanbul/about-the-program-winter/" target="_blank" rel="noopener noreferrer" aria-label="Explore Delightful Antalya and Istanbul Winter School (opens in a new tab)">Explore winter school <span aria-hidden="true">↗</span></a>
          </article>
          <article class="home-destination">
            <div class="home-season"><span>Spring school</span><span aria-hidden="true">02 /</span></div>
            <h3>Cappadocia</h3>
            <p>A short-term program in Cappadocia blending academic learning with cultural discovery.</p>
            <a class="home-card-link" href="https://delightful.istanbul/details-of-the-program-spring/" target="_blank" rel="noopener noreferrer" aria-label="Explore Delightful Cappadocia Spring School (opens in a new tab)">Explore spring school <span aria-hidden="true">↗</span></a>
          </article>
          <article class="home-destination">
            <div class="home-season"><span>Summer school</span><span aria-hidden="true">03 /</span></div>
            <h3>Istanbul</h3>
            <p>An international program offering courses and cultural activities in Istanbul every summer.</p>
            <a class="home-card-link" href="https://delightful.istanbul/about/" target="_blank" rel="noopener noreferrer" aria-label="Explore Delightful Istanbul Summer School (opens in a new tab)">Explore summer school <span aria-hidden="true">↗</span></a>
          </article>
          <article class="home-destination">
            <div class="home-season"><span>Late summer edition</span><span aria-hidden="true">04 /</span></div>
            <h3>Cyprus</h3>
            <p>Courses, seaside activities, and intercultural learning in Northern Cyprus. End your summer with knowledge and new friendships.</p>
            <a class="home-card-link" href="https://delightful.istanbul/cyprus-late-summer-edition-details-of-the-program/" target="_blank" rel="noopener noreferrer" aria-label="Explore Delightful Cyprus Late Summer Edition (opens in a new tab)">Explore late summer <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>
    </div>

    <!-- Volunteer information: a focused invitation, with full details below. -->
    <section class="home-volunteer" id="home-volunteer" aria-labelledby="home-volunteer-heading">
      <div class="home-volunteer-grid">
        <div>
          <p class="home-eyebrow">Only for IAU students</p>
          <h2 id="home-volunteer-heading">Be part of<br>someone’s <span class="home-heading-accent">journey.</span></h2>
          <p class="home-volunteer-intro">Join the Delightful Istanbul A-Team.</p>
          <p>Becoming a volunteer at Istanbul Aydın University is more than lending a hand. It’s a chance to grow,
            connect, and contribute to an inclusive international environment.</p>
        </div>
        <div class="home-volunteer-benefits">
          <p class="home-benefits-label">Make a difference. Grow along the way.</p>
          <ul>
            <li>Welcome and support international students</li>
            <li>Build leadership, communication, and teamwork skills</li>
            <li>Join training, intercultural workshops, and social activities</li>
            <li>Receive certificates recognizing your contribution</li>
          </ul>
          <a class="home-button home-button-gold" href="https://forms.gle/nvMxTyveAd4KUcR79" target="_blank" rel="noopener noreferrer" aria-label="Apply to the A-Team (opens in a new tab)">Apply to the A-Team <span aria-hidden="true">↗</span></a>
          <a class="home-volunteer-email" href="mailto:delightful@aydin.edu.tr">delightful@aydin.edu.tr</a>
        </div>
      </div>
      <details class="home-volunteer-details">
        <summary>More about volunteering with the A-Team</summary>
        <div>
          <p>Volunteering helps you build valuable skills, strengthen your sense of belonging, and take an active role
            in shaping an inclusive international environment. Whether you’re passionate about event organization,
            international communication, or supporting exchange students, you can discover your strengths while making lifelong memories.</p>
          <p>The Delightful Istanbul A-Team is a dynamic group of IAU volunteers who welcome international students,
            assist during short-term programs, and represent our university at global events. As part of the team,
            you’ll gain access to exclusive training sessions, intercultural workshops, social activities, and certificates
            that recognize your contribution.</p>
          <p>Improve your leadership, communication, and teamwork skills while creating unforgettable experiences for others.</p>
        </div>
      </details>
    </section>
  </div>
</div>
```

## 2. CSS Styles (Homepage)

The following styles ensure proper rendering for the homepage components. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
/* Homepage only. Shared header, navigation, and other pages keep their styles. */
/* Local variable fonts: regular, semibold, and bold work without internet. */
@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin-ext.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#study-programs-site .bgGrey .container .row #sag-ana.home-content {
  padding: 0 !important;
  background: #f8f9fb !important;
  border-radius: 18px !important;
  box-shadow: none;
  overflow: hidden;
}

#study-programs-site .home-programs {
  --home-navy: #103653;
  --home-ink: #182e40;
  --home-muted: #536474;
  --home-gold: #e9bc6c;
  /* One type scale across the hero, program directory, and volunteer panel. */
  --home-font: "IAU Open Sans", "Segoe UI", Arial, sans-serif;
  --home-title-size: 40px;
  --home-section-size: 28px;
  --home-card-size: 20px;
  --home-body-size: 16px;
  --home-action-size: 14px;
  --home-small-size: 13px;
  --home-label-size: 12px;
  color: var(--home-ink);
  font-family: var(--home-font);
  font-size: var(--home-body-size);
  font-weight: 400;
  line-height: 1.65;
  text-align: left;
  overflow-wrap: break-word;
}

.home-programs *, .home-programs *::before, .home-programs *::after {
  box-sizing: border-box;
  font-family: inherit;
}

#study-programs-site .home-programs p {
  margin: 0 0 18px;
}

#study-programs-site .home-programs strong {
  font-weight: 600;
}

#study-programs-site .home-programs h1, #study-programs-site .home-programs h2, #study-programs-site .home-programs h3 {
  margin: 0;
  color: var(--home-navy);
  font-family: var(--home-font);
  font-weight: 700;
  text-wrap: balance;
}

#study-programs-site .home-programs a {
  color: var(--home-navy);
}

#study-programs-site .home-programs a:focus-visible, #study-programs-site .home-programs summary:focus-visible {
  outline: 3px solid #b67b22;
  outline-offset: 5px;
  border-radius: 4px;
}

.home-programs section, .home-programs #home-options {
  scroll-margin-top: 30px;
}

.home-programs img {
  display: block;
  max-width: 100%;
}

/* University introduction: restrained headings and a readable text measure. */
.home-hero {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  background: #f5f1e9;
}

.home-hero-copy {
  padding: 42px 30px 42px 36px;
}

#study-programs-site .home-programs .home-eyebrow {
  margin-bottom: 17px;
  color: #536477;
  font-size: var(--home-label-size);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: .8px;
  text-transform: uppercase;
}

#study-programs-site .home-programs h1 {
  margin-bottom: 22px;
  font-family: var(--home-font);
  font-size: var(--home-title-size);
  line-height: 1.2;
  letter-spacing: -.025em;
}

.home-programs .home-heading-accent {
  color: #245b7c;
}

#study-programs-site .home-programs .home-lead {
  font-size: 17px;
  line-height: 1.65;
}

.home-hero-copy > p:not(.home-eyebrow):not(.home-lead) {
  color: var(--home-muted);
  font-size: var(--home-body-size);
}

.home-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px 20px;
  margin-top: 26px;
}

#study-programs-site .home-programs .home-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 48px;
  padding: 12px 18px;
  background: var(--home-navy);
  color: #fff;
  border-radius: 7px;
  font-size: var(--home-action-size);
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  transition: background-color .2s;
}

#study-programs-site .home-programs .home-button:hover {
  background: #215878;
}

.home-button > span, .home-text-link > span {
  font-size: 20px;
  font-weight: 400;
}

#study-programs-site .home-programs .home-text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  font-size: var(--home-action-size);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 5px;
}

.home-hero-visual {
  position: relative;
  min-width: 0;
  min-height: 410px;
  margin: 0;
}

#study-programs-site .home-programs .hero-photo {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: 52% center;
  border-radius: 0;
}

.home-hero-visual figcaption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  border-radius: 8px;
  background: #fff;
  color: var(--home-navy);
  font-size: var(--home-small-size);
  font-weight: 600;
  box-shadow: 0 4px 20px #152b4320;
}

.home-photo-mark {
  font-size: 26px;
  color: #926128;
}

/* Three clear routes, with comfortable pointer and touch targets. */
.home-pathways {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 0 22px;
  background: #fff;
  border-bottom: 1px solid #e1e6eb;
}

.home-pathways a {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  padding: 23px 14px;
  text-decoration: none;
}

.home-pathways a + a {
  border-left: 1px solid #e1e6eb;
}

.home-pathways a:hover {
  background: #f8f9fb;
}

.home-path-number {
  color: #8b6330;
  font-size: var(--home-small-size);
}

.home-pathways strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
}

.home-pathways small {
  display: block;
  color: var(--home-muted);
  font-size: var(--home-small-size);
}

.home-pathways a > span:last-child {
  margin-left: auto;
  font-size: 20px;
}

/* Outgoing study cards. */
.home-opportunities {
  padding: 44px 36px;
}

.home-section + .home-section {
  margin-top: 48px;
}

.home-section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 22px;
  margin-bottom: 20px;
}

#study-programs-site .home-section-heading .home-eyebrow {
  margin-bottom: 9px;
}

#study-programs-site .home-programs h2 {
  font-size: var(--home-section-size);
  line-height: 1.3;
  letter-spacing: -.02em;
}

#study-programs-site .home-section-heading > p {
  flex-shrink: 0;
  margin: 0;
  color: var(--home-muted);
  font-size: var(--home-small-size);
  line-height: 1.6;
}

#study-programs-site .home-programs .home-section-intro {
  max-width: 72ch;
  color: var(--home-muted);
  font-size: var(--home-body-size);
  margin-bottom: 25px;
}

.home-section-intro a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.home-outgoing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.home-study-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e0e6eb;
  border-radius: 12px;
}

.home-card-image {
  position: relative;
  display: block;
  aspect-ratio: 1.9;
  overflow: hidden;
}

.home-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s;
}

.home-card-image:hover img {
  transform: scale(1.035);
}

.home-card-image > span {
  position: absolute;
  left: 16px;
  top: 16px;
  padding: 5px 10px;
  background: #fff;
  border-radius: 4px;
  color: var(--home-navy);
  font-size: var(--home-label-size);
  font-weight: 600;
  letter-spacing: 0;
}

.home-card-copy {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
}

#study-programs-site .home-programs h3 {
  font-size: var(--home-card-size);
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -.01em;
}

#study-programs-site .home-card-copy p {
  margin-top: 12px;
  color: var(--home-muted);
  font-size: var(--home-body-size);
}

#study-programs-site .home-programs .home-card-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 48px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #e1e6eb;
  font-size: var(--home-action-size);
  font-weight: 600;
  text-decoration: none;
}

.home-card-link span {
  font-size: 23px;
  font-weight: 400;
}

.home-card-link:hover {
  text-decoration: underline !important;
  text-underline-offset: 4px;
}

/* Incoming programs: a concise seasonal directory. */
.home-section-tag {
  padding: 6px 10px;
  border: 1px solid #cdd9df;
  border-radius: 20px;
  color: var(--home-muted);
  font-size: var(--home-label-size);
  white-space: nowrap;
}

.home-incoming-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 30px;
  border-top: 1px solid #cdd9df;
}

.home-destination {
  display: flex;
  flex-direction: column;
  padding: 25px 0 17px;
  border-bottom: 1px solid #cdd9df;
}

.home-season {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
  color: #6e5836;
  font-size: var(--home-label-size);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .6px;
}

#study-programs-site .home-destination p {
  margin: 12px 0 14px;
  color: var(--home-muted);
  font-size: var(--home-body-size);
}

#study-programs-site .home-destination .home-card-link {
  border-top: 0;
}

/* A dedicated volunteer invitation, separated from the program directory. */
.home-volunteer {
  margin: 0 22px 24px;
  padding: 36px;
  border-radius: 14px;
  background: var(--home-navy);
  color: #e2ebf2;
}

.home-volunteer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}

#study-programs-site .home-volunteer .home-eyebrow {
  color: #efca87;
}

#study-programs-site .home-volunteer h2 {
  color: #fff;
  font-size: var(--home-section-size);
}

.home-volunteer .home-heading-accent {
  color: #efca87;
}

#study-programs-site .home-volunteer .home-volunteer-intro {
  margin: 22px 0 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.home-volunteer p {
  font-size: var(--home-body-size);
}

.home-volunteer-benefits {
  padding-left: 30px;
  border-left: 1px solid #ffffff30;
}

#study-programs-site .home-volunteer .home-benefits-label {
  color: #fff;
  font-size: var(--home-body-size);
  font-weight: 600;
}

.home-volunteer-benefits ul {
  margin: 0 0 23px;
  padding: 0;
  list-style: none;
}

.home-volunteer-benefits li {
  position: relative;
  margin-bottom: 12px;
  padding-left: 23px;
  font-size: var(--home-body-size);
  line-height: 1.65;
}

.home-volunteer-benefits li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #efca87;
}

#study-programs-site .home-volunteer .home-button-gold {
  background: var(--home-gold);
  color: #142f43;
}

#study-programs-site .home-volunteer .home-button-gold:hover {
  background: #f5d699;
}

#study-programs-site .home-volunteer .home-volunteer-email {
  display: block;
  width: fit-content;
  min-height: 44px;
  padding-top: 14px;
  color: #e2ebf2;
  font-size: var(--home-action-size);
  text-decoration: underline;
  text-underline-offset: 4px;
  overflow-wrap: anywhere;
}

.home-volunteer-details {
  margin-top: 28px;
  border-top: 1px solid #ffffff30;
}

.home-volunteer-details summary {
  display: list-item;
  min-height: 48px;
  padding-top: 19px;
  color: #fff;
  cursor: pointer;
  font-size: var(--home-action-size);
  font-weight: 600;
}

.home-volunteer-details > div {
  padding-top: 18px;
  columns: 2;
  column-gap: 32px;
}

.home-volunteer-details p {
  break-inside: avoid;
}

/* Tablet: keep the hierarchy while making room for the two-column cards. */
@media (min-width: 1001px) and (max-width: 1200px) {
  .home-hero {
    grid-template-columns: 1fr;
  }
  .home-hero-visual {
    min-height: 300px;
  }
  .home-hero-copy {
    padding: 32px;
  }
  .home-pathways {
    padding: 0 8px;
  }
  .home-pathways a {
    gap: 8px;
    padding: 20px 10px;
  }
  .home-path-number {
    display: none;
  }
  .home-opportunities {
    padding: 34px 24px;
  }
  .home-section-heading {
    display: block;
  }
  .home-section-heading > p {
    display: none;
  }
  .home-section-tag {
    display: inline-block;
    margin-top: 14px;
  }
  .home-volunteer {
    padding: 28px;
  }
  .home-volunteer-grid {
    gap: 24px;
  }
  .home-volunteer-benefits {
    padding-left: 24px;
  }
}

/* Phones: one reading column, full-width photos, and no cramped controls. */
@media (max-width: 700px) {
  #study-programs-site .home-programs {
    --home-title-size: 32px;
    --home-section-size: 25px;
  }
  #study-programs-site .bgGrey .container .row #sag-ana.home-content {
    border-radius: 12px !important;
  }
  .home-hero {
    grid-template-columns: minmax(0, 1fr);
  }
  .home-hero-copy {
    padding: 30px 22px;
  }
  #study-programs-site .home-hero-copy > p:not(.home-eyebrow):not(.home-lead), #study-programs-site .home-programs .home-section-intro, #study-programs-site .home-card-copy p, #study-programs-site .home-destination p {
    font-size: 16px;
  }
  .home-volunteer p, .home-volunteer-benefits li {
    font-size: var(--home-body-size);
  }
  #study-programs-site .home-programs .home-card-link {
    font-size: 14px;
  }
  #study-programs-site .home-programs h1 {
    font-size: var(--home-title-size);
    letter-spacing: -.025em;
  }
  #study-programs-site .home-programs .home-lead {
    font-size: 17px;
  }
  .home-actions {
    gap: 8px 18px;
    margin-top: 22px;
  }
  .home-hero-visual {
    min-height: 280px;
  }
  .home-hero-visual figcaption {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
  .home-pathways {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 22px;
  }
  .home-pathways a {
    padding: 16px 0;
  }
  .home-pathways a + a {
    border-left: 0;
    border-top: 1px solid #e1e6eb;
  }
  .home-path-number {
    min-width: 22px;
  }
  .home-pathways strong {
    font-size: 15px;
  }
  .home-pathways small {
    font-size: var(--home-small-size);
  }
  .home-opportunities {
    padding: 34px 20px;
  }
  .home-section-heading {
    display: block;
    margin-bottom: 18px;
  }
  #study-programs-site .home-programs h2 {
    font-size: var(--home-section-size);
  }
  .home-section-heading > p {
    display: none;
  }
  .home-section-tag {
    display: inline-block;
    margin-top: 14px;
  }
  .home-outgoing-grid, .home-incoming-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .home-card-copy {
    padding: 21px;
  }
  .home-card-image {
    aspect-ratio: 1.6;
  }
  .home-section + .home-section {
    margin-top: 38px;
  }
  .home-destination {
    padding: 24px 0 14px;
  }
  .home-volunteer {
    margin: 0 12px 16px;
    padding: 26px 22px;
  }
  .home-volunteer-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
  #study-programs-site .home-volunteer h2 {
    font-size: var(--home-section-size);
  }
  .home-volunteer-benefits {
    padding: 20px 0 0;
    border-left: 0;
    border-top: 1px solid #ffffff30;
  }
  .home-volunteer-details > div {
    columns: 1;
  }
}

@media (max-width: 360px) {
  #study-programs-site .home-programs {
    --home-title-size: 30px;
    --home-section-size: 24px;
  }
  .home-hero-copy {
    padding: 26px 18px;
  }
  .home-opportunities {
    padding: 30px 16px;
  }
  .home-card-copy {
    padding: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-card-image img, .home-programs .home-button {
    transition: none;
  }
}
```

## 3. HTML Content (Short Term Study Abroad)

Copy the HTML block below. When editing the university website for the Short Term Study Abroad page, locate the main content wrapper—specifically the element `<article class="abroad-page" aria-labelledby="abroad-title">` inside `<div id="sag-ana">`. **Replace that entire `<article>` element and all of its contents** with the new block provided here.

```html
<article class="abroad-page" aria-labelledby="abroad-title">
  <!-- Introduction. Page-specific styles: assets/css/study-abroad.css. -->
  <header class="abroad-hero">
    <div class="abroad-hero-copy">
      <p class="abroad-eyebrow">International study opportunities</p>
      <h1 id="abroad-title">Short Term Study Abroad</h1>
      <p class="abroad-lead">Explore Erasmus+ and partner programs. Discover new academic
        perspectives, experience another culture, and find an opportunity that fits your studies.</p>
      <div class="abroad-hero-actions">
        <a class="abroad-button" href="#explore-programs">Explore programs <span aria-hidden="true">→</span></a>
        <a class="abroad-hero-link" href="#erasmus">About Erasmus+ <span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <figure class="abroad-hero-visual">
      <img src="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/PublishingImages/Pages/Short-Term-Study-Abroad/outgoing.jpg" width="1200" height="675"
        alt="Three students sharing a moment outdoors during their study-abroad experience"
        fetchpriority="high">
      <figcaption>International learning. Shared experiences.</figcaption>
    </figure>
  </header>

  <nav class="abroad-jump-links" aria-label="On this page">
    <a href="#erasmus">Erasmus+</a>
    <a href="#short-programs">Short-term programs</a>
    <a href="#how-it-works">How it works</a>
    <a href="#explore-programs">Explore programs <span aria-hidden="true">↗</span></a>
  </nav>

  <!-- Erasmus+ overview and the short blended study format. -->
  <section class="abroad-section" id="erasmus" aria-labelledby="erasmus-title">
    <p class="abroad-eyebrow">The Erasmus+ route</p>
    <h2 id="erasmus-title">Erasmus+, in a shorter format</h2>
    <p class="abroad-section-intro">Erasmus+ connects study at a partner institution with your
      degree at home. Alongside longer exchanges, it offers blended study that combines
      a brief period abroad with online learning.</p>

    <div class="abroad-blended-study">
      <div class="abroad-feature-copy">
        <h3>Blended Intensive Programs (BIPs)</h3>
        <p>A BIP is a short course developed by universities together. Students work
          across borders on a shared subject, combining an in-person experience
          with a required virtual component.</p>
      </div>
      <dl class="abroad-facts" aria-label="Blended Intensive Program essentials">
        <div>
          <dt>5–30 days</dt>
          <dd>Physical study abroad, excluding travel</dd>
        </div>
        <div>
          <dt>Online collaboration</dt>
          <dd>A required part of the blended experience</dd>
        </div>
        <div>
          <dt>At least 3 ECTS</dt>
          <dd>Credits for the combined student program</dd>
        </div>
      </dl>
    </div>
    <div class="abroad-section-footer">
      <p><strong>Looking for a longer stay?</strong> Erasmus+ long-term study mobility
        lasts 2–12 months.</p>
      <a class="abroad-text-link" href="https://www.aydin.edu.tr/en-us/international/erasmus/Pages/gidenler-icin-genel-bilgiler.aspx">Erasmus+ at IAU <span aria-hidden="true">↗</span></a>
    </div>
    <p class="abroad-source">Format and credit information:
      <a href="https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-1/higher-education-mobility-projects">European Commission Erasmus+ Programme Guide</a>.</p>
  </section>

  <!-- Partner programs are a separate route with their own arrangements. -->
  <section class="abroad-section abroad-section-tinted" id="short-programs" aria-labelledby="short-programs-title">
    <p class="abroad-eyebrow">The partner-program route</p>
    <h2 id="short-programs-title">A focused experience abroad</h2>
    <p class="abroad-section-intro">IAU’s International Short-Term Study Programs Office
      shares opportunities at partner universities, including seasonal schools,
      educational camps, and language courses. Each program has its own academic
      and funding arrangements.</p>
    <div class="abroad-program-types">
      <div class="abroad-program-type">
        <span class="abroad-type-number" aria-hidden="true">01</span>
        <h3>Summer &amp; winter schools</h3>
        <p>Explore an academic subject in a concentrated course, alongside students
          from other backgrounds.</p>
      </div>
      <div class="abroad-program-type">
        <span class="abroad-type-number" aria-hidden="true">02</span>
        <h3>Language &amp; culture</h3>
        <p>Develop your language skills and discover everyday life in a different
          cultural setting.</p>
      </div>
      <div class="abroad-program-type">
        <span class="abroad-type-number" aria-hidden="true">03</span>
        <h3>Educational camps</h3>
        <p>Experience a focused learning environment beyond your usual classroom.</p>
      </div>
    </div>
    <p class="abroad-source">Program overview:
      <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/Short-Term-Study-Abroad.aspx">IAU Short Term Study Abroad</a>.</p>
  </section>

  <!-- Explain the learning experience, rather than an application procedure. -->
  <section class="abroad-section" id="how-it-works" aria-labelledby="experience-title">
    <p class="abroad-eyebrow">How it works</p>
    <h2 id="experience-title">Learning that connects back to your studies</h2>
    <p class="abroad-section-intro">For Erasmus+ study mobility, the experience has three
      connected parts: an agreed learning plan, study with the host institution,
      and recognition of the completed work.</p>
    <ol class="abroad-learning-path">
      <li>
        <span class="abroad-path-marker" aria-hidden="true">1</span>
        <div>
          <h3>A clear academic purpose</h3>
          <p>A Learning Agreement records the planned studies and recognition,
            agreed by the student, home institution, and host before mobility.</p>
        </div>
      </li>
      <li>
        <span class="abroad-path-marker" aria-hidden="true">2</span>
        <div>
          <h3>Learning with an international group</h3>
          <p>Study takes place with the host. In a BIP, the physical stay and online
            group work form one connected learning experience.</p>
        </div>
      </li>
      <li>
        <span class="abroad-path-marker" aria-hidden="true">3</span>
        <div>
          <h3>Recognising what you achieve</h3>
          <p>The host records your results. Your home institution recognises
            successfully completed work as agreed in the Learning Agreement.</p>
        </div>
      </li>
    </ol>

    <div class="abroad-practical-grid">
      <section class="abroad-practical-card" aria-labelledby="funding-title">
        <h3 id="funding-title">Understanding the costs</h3>
        <p>Erasmus+ grants contribute to travel and living costs; they are not a
          promise to cover every expense. Funding depends on the relevant arrangements.</p>
        <p>Partner programs set their own fees. Some offer IAU students discounts
          or scholarships, as stated in the program announcement.</p>
      </section>
      <section class="abroad-practical-card" aria-labelledby="credits-title">
        <h3 id="credits-title">Credits &amp; certificates</h3>
        <p>ECTS credits describe academic workload. A BIP awards at least 3 ECTS
          to students for its combined activities.</p>
        <p>For other short courses, a certificate does not by itself confirm that
          the course counts toward your degree. Recognition needs to be agreed with IAU.</p>
      </section>
    </div>
    <p class="abroad-source">Learning agreements, recognition, and financial support:
      <a href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad">European Commission guide to studying abroad</a>.</p>
  </section>

  <!-- Links to the existing local program directories. -->
  <section class="abroad-explore" id="explore-programs" aria-labelledby="explore-title">
    <div>
      <p class="abroad-eyebrow">Find your direction</p>
      <h2 id="explore-title">Explore the possibilities</h2>
      <p>Start with a subject that interests you, a language you want to develop,
        or a new academic environment you would like to experience.</p>
    </div>
    <div class="abroad-destinations">
      <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx"><span>Summer &amp; winter programs</span><span aria-hidden="true">→</span></a>
      <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/study-abroad-language-programs.aspx"><span>Study abroad language programs</span><span aria-hidden="true">→</span></a>
    </div>
  </section>
</article>
```

## 4. CSS Styles (Short Term Study Abroad)

The following styles ensure proper rendering for the Short Term Study Abroad page components. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
/* Short Term Study Abroad only. Keep the shared university layout intact. */
/* Use the same locally stored typeface as the homepage. */
@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin-ext.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#study-programs-site .bgGrey .container .row #sag-ana.abroad-content {
  padding: 0 !important;
  background: #fff !important;
  border-radius: 12px !important;
  box-shadow: none;
  overflow: hidden;
}

#study-programs-site .abroad-page {
  --abroad-navy: #103653;
  --abroad-ink: #182e40;
  --abroad-muted: #536474;
  --abroad-border: #dce3e8;
  --abroad-font: "IAU Open Sans", "Segoe UI", Arial, sans-serif;
  color: var(--abroad-ink);
  font-family: var(--abroad-font);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  text-align: left;
  overflow-wrap: break-word;
}

.abroad-page *, .abroad-page *::before, .abroad-page *::after {
  box-sizing: border-box;
  font-family: inherit;
}

#study-programs-site .abroad-page p {
  margin: 0 0 16px;
}

#study-programs-site .abroad-page h1,
#study-programs-site .abroad-page h2,
#study-programs-site .abroad-page h3 {
  margin: 0 0 16px;
  color: var(--abroad-navy);
  font-family: var(--abroad-font);
  font-weight: 700;
  line-height: 1.3;
  text-wrap: balance;
}

#study-programs-site .abroad-page h1 {
  max-width: 14ch;
  font-size: 36px;
  letter-spacing: -.025em;
  line-height: 1.2;
}

#study-programs-site .abroad-page h2 {
  font-size: 28px;
  letter-spacing: -.02em;
}

#study-programs-site .abroad-page h3 {
  font-size: 19px;
  letter-spacing: -.01em;
}

#study-programs-site .abroad-page strong {
  font-weight: 600;
}

#study-programs-site .abroad-page a {
  color: var(--abroad-navy);
  text-decoration: underline;
  text-underline-offset: 4px;
}

#study-programs-site .abroad-page a:hover {
  color: #286888;
}

#study-programs-site .abroad-page a:focus-visible {
  outline: 3px solid #a76b16;
  outline-offset: 4px;
  border-radius: 3px;
}

.abroad-page [id] {
  scroll-margin-top: 28px;
}

#study-programs-site .abroad-page .abroad-eyebrow {
  margin-bottom: 12px;
  color: var(--abroad-muted);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .09em;
  line-height: 1.6;
  text-transform: uppercase;
}

/* Introduction: a concise heading and natural photograph on an open layout. */
.abroad-hero {
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  align-items: center;
  gap: 44px;
  padding: 40px 36px;
  background: #fff;
}

.abroad-hero-copy, .abroad-hero-visual {
  min-width: 0;
}

#study-programs-site .abroad-page .abroad-lead {
  max-width: 46ch;
  margin: 18px 0 0;
  color: var(--abroad-muted);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
}

.abroad-hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 24px;
  margin-top: 24px;
}

#study-programs-site .abroad-page .abroad-button {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 5px;
  background: var(--abroad-navy);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  text-decoration: none;
}

#study-programs-site .abroad-page .abroad-button:hover {
  background: #245b7c;
}

#study-programs-site .abroad-page .abroad-hero-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
}

.abroad-hero-visual {
  margin: 0;
}

.abroad-hero-visual img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

.abroad-hero-visual figcaption {
  padding-top: 12px;
  color: var(--abroad-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.65;
}

/* In-page navigation wraps naturally, including narrow phone screens. */
.abroad-jump-links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 22px;
  padding: 10px 36px;
  border-block: 1px solid var(--abroad-border);
  background: #fff;
}

#study-programs-site .abroad-page .abroad-jump-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 6px 0;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

#study-programs-site .abroad-page .abroad-jump-links a:hover {
  text-decoration: underline;
}

/* Program formats. */
.abroad-section {
  padding: 40px 36px;
}

#study-programs-site .abroad-page .abroad-section-intro {
  max-width: 76ch;
  margin-bottom: 26px;
  color: var(--abroad-muted);
}

.abroad-blended-study {
  color: var(--abroad-muted);
}

#study-programs-site .abroad-page .abroad-feature-copy h3 {
  margin-bottom: 12px;
}

#study-programs-site .abroad-page .abroad-feature-copy p {
  max-width: 76ch;
}

#study-programs-site .abroad-page .abroad-feature-copy p:last-child {
  margin-bottom: 0;
}

.abroad-facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 24px 0 0;
  padding: 20px 0;
  border-block: 1px solid var(--abroad-border);
}

.abroad-facts > div + div {
  padding-left: 24px;
  border-left: 1px solid var(--abroad-border);
}

.abroad-facts dt {
  margin-bottom: 6px;
  color: var(--abroad-navy);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

.abroad-facts dd {
  margin: 0;
  color: var(--abroad-muted);
  font-size: 13px;
  line-height: 1.65;
}

.abroad-section-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 20px;
}

#study-programs-site .abroad-page .abroad-section-footer p {
  flex: 1 1 360px;
  margin-bottom: 0;
  color: var(--abroad-muted);
  font-size: 14px;
}

#study-programs-site .abroad-page .abroad-text-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  font-size: 14px;
  font-weight: 600;
}

#study-programs-site .abroad-page .abroad-source {
  margin: 22px 0 0;
  color: var(--abroad-muted);
  font-size: 12px;
  line-height: 1.7;
}

.abroad-section-tinted {
  border-block: 1px solid var(--abroad-border);
  background: #f6f8fa;
}

.abroad-program-types {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 30px 0;
}

.abroad-program-type {
  padding-top: 16px;
  border-top: 2px solid #b9cbd7;
}

.abroad-type-number {
  display: block;
  margin-bottom: 18px;
  color: #687d8d;
  font-size: 13px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

#study-programs-site .abroad-page .abroad-program-type p {
  margin-bottom: 0;
  color: var(--abroad-muted);
  font-size: 15px;
}

/* The academic experience, followed by concise funding and credit guidance. */
.abroad-learning-path {
  list-style: none;
  margin: 30px 0 32px;
  padding: 0;
}

.abroad-learning-path li {
  position: relative;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 20px;
  padding: 0 0 28px;
}

.abroad-learning-path li:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 38px;
  bottom: 0;
  left: 18px;
  width: 2px;
  background: var(--abroad-border);
}

.abroad-learning-path li:last-child { padding-bottom: 0; }

.abroad-path-marker {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid #c7d5df;
  border-radius: 50%;
  background: #f0f5f8;
  color: var(--abroad-navy);
  font-size: 14px;
  font-weight: 700;
}

#study-programs-site .abroad-page .abroad-learning-path h3 {
  margin: 5px 0 8px;
}

#study-programs-site .abroad-page .abroad-learning-path p {
  max-width: 72ch;
  margin: 0;
  color: var(--abroad-muted);
}

.abroad-practical-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.abroad-practical-card {
  padding: 24px;
  border: 1px solid var(--abroad-border);
  border-radius: 6px;
}

#study-programs-site .abroad-page .abroad-practical-card p {
  color: var(--abroad-muted);
  font-size: 15px;
}

#study-programs-site .abroad-page .abroad-practical-card p:last-child { margin: 0; }

/* Program directory links have generous touch targets. */
.abroad-explore {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 32px 36px;
  border-block: 1px solid var(--abroad-border);
  background: #edf3f6;
}

#study-programs-site .abroad-page .abroad-explore h2 { font-size: 24px; }
#study-programs-site .abroad-page .abroad-explore p:not(.abroad-eyebrow) {
  margin: 0;
  color: var(--abroad-muted);
  font-size: 15px;
}

.abroad-destinations {
  display: grid;
  gap: 10px;
}

#study-programs-site .abroad-page .abroad-destinations a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-height: 56px;
  padding: 14px 18px;
  border: 1px solid #c5d3dd;
  border-radius: 5px;
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
}

#study-programs-site .abroad-page .abroad-destinations a:hover {
  border-color: #507991;
  background: #f8fbfd;
}

#study-programs-site .abroad-page .abroad-review-note {
  margin: 0;
  padding: 20px 36px;
  color: var(--abroad-muted);
  font-size: 12px;
}

/* Tablet and phone: preserve reading size while simplifying the columns. */
@media (max-width: 1199px) {
  .abroad-hero { gap: 24px; padding: 32px 28px; }
  #study-programs-site .abroad-page h1 { font-size: 34px; }
  .abroad-section { padding: 34px 28px; }
  .abroad-jump-links { padding-inline: 28px; gap: 4px 18px; }
  .abroad-facts { gap: 18px; }
  .abroad-facts > div + div { padding-left: 18px; }
  .abroad-explore { grid-template-columns: 1fr; gap: 22px; padding: 30px 28px; }
  .abroad-destinations { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  #study-programs-site .abroad-page .abroad-review-note { padding-inline: 28px; }
}

@media (max-width: 767px) {
  .abroad-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 22px; }
  #study-programs-site .abroad-page h1 { font-size: 32px; }
  #study-programs-site .abroad-page h2 { font-size: 25px; }
  #study-programs-site .abroad-page h3 { font-size: 19px; }
  #study-programs-site .abroad-page .abroad-lead { max-width: none; }
  .abroad-hero-actions { gap: 10px 20px; margin-top: 20px; }
  .abroad-jump-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 16px; padding: 12px 22px; }
  .abroad-section { padding: 32px 22px; }
  .abroad-facts { grid-template-columns: 1fr; gap: 0; padding: 0; }
  .abroad-facts > div { padding: 16px 0; }
  .abroad-facts > div + div { padding-left: 0; border-left: 0; border-top: 1px solid var(--abroad-border); }
  .abroad-program-types { grid-template-columns: 1fr; gap: 22px; }
  .abroad-type-number { margin-bottom: 10px; }
  #study-programs-site .abroad-page .abroad-program-type h3 { margin-bottom: 10px; }
  .abroad-practical-grid { grid-template-columns: 1fr; }
  .abroad-practical-card { padding: 22px 20px; }
  .abroad-learning-path li { gap: 14px; }
  .abroad-explore { padding: 28px 22px; }
  .abroad-destinations { grid-template-columns: 1fr; }
  #study-programs-site .abroad-page .abroad-review-note { padding: 20px 22px; }
}

@media (max-width: 359px) {
  #study-programs-site .abroad-page h1 { font-size: 30px; }
  #study-programs-site .abroad-page h2 { font-size: 24px; }
  .abroad-hero, .abroad-section, .abroad-explore { padding-inline: 18px; }
  .abroad-jump-links { padding-inline: 18px; }
}
```
 


## 5. HTML Content (Application Process: After Acceptance)

Copy the HTML block below. When editing the university website for the Application Process page, locate the main content wrapper—specifically the element `<article class="acceptance-page" aria-labelledby="acceptance-title">` inside `<div id="sag-ana">` (or `<div id="sag-ana" class="acceptance-content">`). **Replace that entire `<article>` element and all of its contents** with the new block provided here.

```html
<article class="acceptance-page" aria-labelledby="acceptance-title">
  <!-- After acceptance only. Styles and behavior live in assets/css and assets/js. -->
  <header class="acceptance-intro">
    <div class="acceptance-intro-copy">
      <p class="acceptance-eyebrow">Application process · Outgoing students</p>
      <h1 id="acceptance-title">Your next steps<br>after acceptance</h1>
      <p class="acceptance-lead">Your host university has accepted you. Use this checklist
        to prepare for your stay, make the most of your program, and complete the steps
        when you return.</p>
      <div class="acceptance-intro-actions">
        <a class="acceptance-primary" href="#student-checklist">Start your checklist <span aria-hidden="true">↓</span></a>
        <a href="#acceptance-help">Need help?</a>
        <button type="button" class="acceptance-print" data-checklist-print hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V8h16v9h-3M7 14h10v7H7z"/><path d="M16 11h1"/></svg>
          Print checklist</button>
      </div>
    </div>
    <nav class="acceptance-stage-nav" aria-label="Checklist stages">
      <details open>
        <summary>Jump to a stage <span class="acceptance-nav-toggle" aria-hidden="true"></span></summary>
        <ol>
          <li><a href="#confirm-place" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">01</span><span>Confirm your place<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#academic-approval" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">02</span><span>Academic approval<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#prepare-travel" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">03</span><span>Prepare for travel<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#before-departure" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">04</span><span>Before departure<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#during-program" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">05</span><span>During your program<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#after-return" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">06</span><span>When you return<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
          <li><a href="#acceptance-help" data-stage-link><span class="acceptance-nav-number" aria-hidden="true">07</span><span>Help &amp; contacts<span class="acceptance-nav-status"></span></span><span class="acceptance-nav-arrow" aria-hidden="true">↗</span></a></li>
        </ol>
      </details>
    </nav>
  </header>

  <section class="acceptance-checklist" id="student-checklist" aria-labelledby="checklist-title">
    <div class="acceptance-checklist-heading">
      <div>
        <p class="acceptance-eyebrow">From confirmation to return</p>
        <h2 id="checklist-title">One checklist. Seven stages.</h2>
      </div>
    </div>
    <p class="acceptance-instructions">Tick each item when complete, or after confirming
      it does not apply to your stay. Follow your host’s instructions and any requirements
      confirmed by IAU.</p>
    <div class="acceptance-progress-controls" id="checklist-controls" hidden>
      <div class="acceptance-progress-heading">
        <div><span class="acceptance-progress-label">Your progress</span>
          <span class="acceptance-count" id="checklist-count" role="status" aria-live="polite" hidden>0 items complete</span></div>
        <span class="acceptance-percentage" id="checklist-percentage" aria-hidden="true">0<span>%</span></span>
      </div>
      <progress id="checklist-progress" value="0" max="19" aria-label="Checklist progress"></progress>
      <div class="acceptance-preferences">
        <label class="acceptance-remember"><input type="checkbox" id="remember-checklist"> Remember progress on this browser</label>
        <button type="button" class="acceptance-reset" id="reset-checklist">Reset checklist</button>
      </div>
      <p class="acceptance-storage-note" id="checklist-storage-note" role="status">Progress is kept for this visit. Nothing is submitted to IAU.</p>
    </div>

    <ol class="acceptance-stages">
      <li class="acceptance-stage" id="confirm-place">
        <span class="acceptance-stage-number" aria-hidden="true">01</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>Confirm your place</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="accept-offer" data-checklist-item>
              <label for="accept-offer"><strong>Accept the host university’s offer.</strong>
                <span>Use the confirmation method in your offer and keep a copy of the acceptance.</span></label></li>
            <li><input type="checkbox" id="read-welcome" data-checklist-item>
              <label for="read-welcome"><strong>Read your welcome information.</strong>
                <span>Review the host’s email, arrival instructions, and any actions they ask you to complete.</span></label></li>
            <li><input type="checkbox" id="notify-iau" data-checklist-item>
              <label for="notify-iau"><strong>Notify IAU where required.</strong>
                <span>Share your acceptance with the relevant IAU office or coordinator if your program requires it.</span></label></li>
          </ul>
        </div>
      </li>

      <li class="acceptance-stage" id="academic-approval">
        <span class="acceptance-stage-number" aria-hidden="true">02</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>Arrange academic approval</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="agree-recognition" data-checklist-item>
              <label for="agree-recognition"><strong>Discuss credit recognition before travelling.</strong>
                <span>If you want the study to count toward your degree, contact your faculty coordinator
                  and confirm the approval process. For Erasmus+ study mobility, the Learning Agreement
                  must be approved by you, IAU, and the host before the exchange.</span></label></li>
            <li><input type="checkbox" id="prepare-records" data-checklist-item>
              <label for="prepare-records"><strong>Know which academic records to keep.</strong>
                <span>Ask what your faculty needs: course descriptions, assessment information,
                  a transcript, certificate, and attendance confirmation. Keep the written approval too.</span></label></li>
          </ul>
          <p class="acceptance-related-links"><a href="https://www.aydin.edu.tr/en-us/international/erasmus/Pages/koordinatorler-listesi.aspx">IAU Erasmus+ faculty coordinators</a>
            <a href="https://erasmus-plus.ec.europa.eu/resources-and-tools/mobility-and-learning-agreements/learning-agreements">Official Learning Agreement guidance</a></p>
        </div>
      </li>

      <li class="acceptance-stage" id="prepare-travel">
        <span class="acceptance-stage-number" aria-hidden="true">03</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>Prepare for travel</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="check-passport" data-checklist-item>
              <label for="check-passport"><strong>Check your passport’s validity.</strong>
                <span>Check the destination’s passport validity and blank-page requirements,
                  including any country you transit through.</span></label></li>
            <li><input type="checkbox" id="check-visa" data-checklist-item>
              <label for="check-visa"><strong>Confirm the correct entry and visa arrangements.</strong>
                <span>Use the destination’s official embassy, consulate, or immigration website.
                  Requirements depend on your nationality, passport, purpose, and length of stay.</span></label></li>
            <li><input type="checkbox" id="arrange-insurance" data-checklist-item>
              <label for="arrange-insurance"><strong>Arrange travel health insurance.</strong>
                <span>Check the host’s and destination’s requirements. Confirm cover for your full stay,
                  planned activities, and emergency assistance, and save the insurer’s contact details.</span></label></li>
            <li><input type="checkbox" id="arrange-stay" data-checklist-item>
              <label for="arrange-stay"><strong>Confirm accommodation and travel.</strong>
                <span>Use the host university’s arrangements or verified providers. Check the address,
                  check-in instructions, and booking conditions before you commit.</span></label></li>
          </ul>
          <p class="acceptance-related-links"><a href="https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en">Official Schengen visa guidance</a>
            <a href="https://www.mfa.gov.tr/turk-vatandaslarinin-tabi-oldugu-vize-uygulamalari.tr.mfa">Visa information for Turkish citizens (MFA, Turkish)</a></p>
        </div>
      </li>

      <li class="acceptance-stage" id="before-departure">
        <span class="acceptance-stage-number" aria-hidden="true">04</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>Get ready to depart</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="save-contacts" data-checklist-item>
              <label for="save-contacts"><strong>Save your support contacts.</strong>
                <span>Keep the host’s program team, IAU office, accommodation contact, and local
                  emergency number available on your phone and offline.</span></label></li>
            <li><input type="checkbox" id="check-arrival" data-checklist-item>
              <label for="check-arrival"><strong>Review arrival and orientation details.</strong>
                <span>Know where to go, how to reach your accommodation, and who to contact if your
                  arrival is delayed. Check the host’s emergency and out-of-hours information.</span></label></li>
            <li><input type="checkbox" id="copy-documents" data-checklist-item>
              <label for="copy-documents"><strong>Keep your documents accessible.</strong>
                <span>Keep secure copies of your passport, visa if needed, insurance, acceptance letter,
                  and bookings. Carry the originals required for travel.</span></label></li>
          </ul>
        </div>
      </li>

      <li class="acceptance-stage" id="during-program">
        <span class="acceptance-stage-number" aria-hidden="true">05</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>During your program</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="take-part" data-checklist-item>
              <label for="take-part"><strong>Attend and participate.</strong>
                <span>Follow the host’s timetable, attendance requirements, and agreed learning activities.</span></label></li>
            <li><input type="checkbox" id="keep-evidence" data-checklist-item>
              <label for="keep-evidence"><strong>Keep evidence of your participation.</strong>
                <span>Retain attendance records and completed work. Ask the host how your certificate
                  or transcript will be issued.</span></label></li>
            <li><input type="checkbox" id="discuss-changes" data-checklist-item>
              <label for="discuss-changes"><strong>Discuss changes before making them.</strong>
                <span>If your dates, study plan, or arrangements change, contact the host and the
                  relevant IAU office. Keep any revised approval in writing.</span></label></li>
          </ul>
        </div>
      </li>

      <li class="acceptance-stage" id="after-return">
        <span class="acceptance-stage-number" aria-hidden="true">06</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>When you return</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="collect-results" data-checklist-item>
              <label for="collect-results"><strong>Collect your final documents.</strong>
                <span>Obtain the certificate, transcript, or proof of participation relevant to your program.
                  Check your name, dates, and recorded results.</span></label></li>
            <li><input type="checkbox" id="submit-records" data-checklist-item>
              <label for="submit-records"><strong>Complete academic recognition, if applicable.</strong>
                <span>Submit the documents requested by your faculty or IAU office. For Erasmus+,
                  complete the return requirements given by the Erasmus+ Office and confirm that
                  successfully completed, agreed studies are recognised.</span></label></li>
            <li><input type="checkbox" id="share-feedback" data-checklist-item>
              <label for="share-feedback"><strong>Share your experience.</strong>
                <span>Provide any requested feedback. If you would like to share a student story,
                  ask the Short-Term Study Programs Office how to contribute.</span></label></li>
          </ul>
          <p class="acceptance-related-links"><a href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad">Erasmus+ study and recognition guidance</a></p>
        </div>
      </li>

      <li class="acceptance-stage acceptance-help" id="acceptance-help">
        <span class="acceptance-stage-number" aria-hidden="true">07</span>
        <div class="acceptance-stage-body">
          <div class="acceptance-stage-heading">
            <h3>Need help? Stay in touch.</h3>
            <span class="acceptance-stage-status" data-stage-status hidden></span>
          </div>
          <ul class="acceptance-tasks">
            <li><input type="checkbox" id="know-support" data-checklist-item>
              <label for="know-support"><strong>Know who to contact before making a change.</strong>
                <span>Contact the host and the relevant IAU office before changing your dates, study plan,
                  or participation. For Erasmus+ matters, include the Erasmus+ Office and your coordinator.</span></label></li>
          </ul>
          <div class="acceptance-office">
            <div>
              <h4>Short-Term Study Programs Office</h4>
              <a class="acceptance-office-email" href="mailto:shortterm@aydin.edu.tr">shortterm@aydin.edu.tr</a>
              <p>+90 444 1 428 · Extension 14914</p>
              <a href="https://www.aydin.edu.tr/en-us/international/shortterm/Pages/Contact.aspx">Office team &amp; contact details <span aria-hidden="true">→</span></a>
            </div>
            <dl>
              <div><dt>Office hours</dt><dd>Monday–Friday, 09:00–17:00<br>Istanbul time · Closed on official holidays</dd></div>
              <div><dt>Visit us</dt><dd>J Block, 2nd floor<br>Istanbul Aydin University, Florya Campus</dd></div>
            </dl>
          </div>
          <p class="acceptance-small">For an urgent emergency abroad, use the local emergency
            services and your host’s emergency support.</p>
        </div>
      </li>
    </ol>
    <p class="acceptance-complete" id="checklist-complete" role="status" hidden>You’ve reviewed every item.
      Confirm any outstanding requirements with your host and IAU, and keep this checklist with your records.</p>
  </section>

  <footer class="acceptance-sources">
    <details>
      <summary>Official guidance &amp; sources</summary>
      <p>Use this official guidance alongside the instructions you receive from your host and IAU.</p>
      <ul>
        <li><a href="https://www.aydin.edu.tr/en-us/international/shortterm/Pages/Contact.aspx">IAU office contacts and location</a></li>
        <li><a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/Short-Term-Study-Abroad.aspx">IAU published office email and hours</a></li>
        <li><a href="https://erasmus-plus.ec.europa.eu/resources-and-tools/mobility-and-learning-agreements/learning-agreements">European Commission: Learning Agreements</a></li>
        <li><a href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad">European Commission: Erasmus+ study and recognition</a></li>
        <li><a href="https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en">European Commission: Schengen travel documents and insurance</a></li>
        <li><a href="https://www.mfa.gov.tr/turk-vatandaslarinin-tabi-oldugu-vize-uygulamalari.tr.mfa">Türkiye Ministry of Foreign Affairs: visa information for Turkish citizens</a></li>
      </ul>
    </details>
    <p>Guidance reviewed on 16 October 2026. Confirm current travel rules with the destination’s
      authorities and current arrangements with the host and IAU.</p>
  </footer>
</article>
```

## 6. CSS Styles (Application Process: After Acceptance)

The following styles ensure proper rendering for the Application Process checklist components, progress tracking, and print optimization. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
/* After-acceptance checklist. All rules are scoped to this page. */
@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin-ext.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "IAU Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#study-programs-site .bgGrey .container .row #sag-ana.acceptance-content {
  padding: 0 !important;
  border-radius: 10px !important;
  background: #fff !important;
  box-shadow: none;
}

#study-programs-site .acceptance-page {
  --acceptance-ink: #182e40;
  --acceptance-navy: #103653;
  --acceptance-muted: #526575;
  --acceptance-line: #dce4ea;
  --acceptance-font: "IAU Open Sans", "Segoe UI", Arial, sans-serif;
  color: var(--acceptance-ink);
  font: 400 16px/1.7 var(--acceptance-font);
  text-align: left;
  overflow-wrap: break-word;
}

.acceptance-page *, .acceptance-page *::before, .acceptance-page *::after {
  box-sizing: border-box;
  font-family: inherit;
}

#study-programs-site .acceptance-page [hidden] { display: none !important; }
.acceptance-page [id] { scroll-margin-top: 24px; }

#study-programs-site .acceptance-page h1,
#study-programs-site .acceptance-page h2,
#study-programs-site .acceptance-page h3,
#study-programs-site .acceptance-page h4 {
  margin: 0;
  color: var(--acceptance-navy);
  font-family: var(--acceptance-font);
  font-weight: 700;
  line-height: 1.3;
  text-wrap: balance;
}

#study-programs-site .acceptance-page h1 { font-size: 36px; letter-spacing: -.025em; }
#study-programs-site .acceptance-page h2 { font-size: 25px; letter-spacing: -.015em; }
#study-programs-site .acceptance-page h3 { font-size: 21px; letter-spacing: -.01em; }
#study-programs-site .acceptance-page h4 { font-size: 16px; }
#study-programs-site .acceptance-page p { margin: 0 0 16px; }
#study-programs-site .acceptance-page a { color: #164c70; text-decoration: underline; text-underline-offset: 4px; }
#study-programs-site .acceptance-page a:hover { color: #276f99; }

#study-programs-site .acceptance-page a:focus-visible,
#study-programs-site .acceptance-page button:focus-visible,
#study-programs-site .acceptance-page input:focus-visible,
#study-programs-site .acceptance-page summary:focus-visible {
  outline: 3px solid #397f9f;
  outline-offset: 4px;
}

#study-programs-site .acceptance-page button {
  min-width: 0;
  min-height: 44px;
  margin: 0;
  padding: 8px 14px;
  border: 1px solid #bbcbd7;
  border-radius: 5px;
  background: #fff;
  color: var(--acceptance-navy);
  font: 600 13px/1.5 var(--acceptance-font);
  cursor: pointer;
}

#study-programs-site .acceptance-page button:hover { background: #eff4f7; }
#study-programs-site .acceptance-page button:disabled { opacity: .5; cursor: default; }

/* The introduction and stage index share one calm, open composition. */
.acceptance-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  align-items: center;
  gap: 44px;
  padding: 42px 38px 40px;
  border-top: 4px solid var(--acceptance-navy);
  border-radius: 10px 10px 0 0;
}
.acceptance-intro-copy { min-width: 0; }
#study-programs-site .acceptance-page .acceptance-eyebrow {
  margin: 0 0 12px;
  color: var(--acceptance-muted);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  letter-spacing: .09em;
}

#study-programs-site .acceptance-page .acceptance-lead {
  max-width: 68ch;
  margin: 18px 0 0;
  color: var(--acceptance-muted);
  font-size: 16px;
}

.acceptance-intro-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  margin-top: 24px;
}

#study-programs-site .acceptance-page .acceptance-intro-actions a {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  min-height: 44px;
  font-size: 14px;
  font-weight: 600;
}

#study-programs-site .acceptance-page .acceptance-primary {
  min-height: 48px;
  padding: 10px 18px;
  border-radius: 5px;
  background: var(--acceptance-navy);
  color: #fff;
  text-decoration: none;
}

#study-programs-site .acceptance-page .acceptance-primary:hover { background: #245b7c; }
#study-programs-site .acceptance-page .acceptance-print {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-inline: 0;
  border-color: transparent;
  font-size: 13px;
}
.acceptance-print svg { width: 18px; height: 18px; }

.acceptance-stage-nav { padding-left: 26px; border-left: 1px solid var(--acceptance-line); }
.acceptance-stage-nav summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  color: var(--acceptance-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;
}
.acceptance-stage-nav summary::-webkit-details-marker { display: none; }
.acceptance-nav-toggle {
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg);
}
.acceptance-stage-nav details[open] .acceptance-nav-toggle { transform: rotate(225deg); }
.acceptance-stage-nav ol { margin: 4px 0 0; padding: 0; list-style: none; }
#study-programs-site .acceptance-page .acceptance-stage-nav a {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) 12px;
  align-items: center;
  gap: 9px;
  min-height: 44px;
  padding: 5px 4px;
  border-radius: 4px;
  color: var(--acceptance-navy);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
#study-programs-site .acceptance-page .acceptance-stage-nav a:hover { background: #edf3f6; }
.acceptance-nav-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 1px solid #dce5eb;
  border-radius: 50%;
  color: #526575;
  font-size: 10px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.acceptance-nav-arrow { color: #5c788a; font-size: 15px; }
.acceptance-stage-nav .is-complete .acceptance-nav-number { border-color: #b9d4cc; background: #e9f4ef; color: #245f4d; }
.acceptance-nav-status { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* Progress is optional and local to the student's browser. */
.acceptance-checklist { padding: 34px 38px 0; border-top: 1px solid var(--acceptance-line); }
.acceptance-checklist-heading { display: flex; align-items: end; justify-content: space-between; gap: 12px 24px; flex-wrap: wrap; }
#study-programs-site .acceptance-page .acceptance-checklist-heading .acceptance-eyebrow { margin-bottom: 8px; }
.acceptance-progress-controls { padding: 20px 24px 18px; border: 1px solid #dae5eb; border-radius: 8px; background: #f4f8fa; }
.acceptance-progress-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
.acceptance-progress-label { display: block; margin-bottom: 3px; color: var(--acceptance-muted); font-size: 11px; font-weight: 600; }
.acceptance-count { display: block; color: var(--acceptance-navy); font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; }
.acceptance-percentage { color: var(--acceptance-navy); font-size: 28px; font-weight: 600; line-height: 1.2; font-variant-numeric: tabular-nums; }
.acceptance-percentage > span { margin-left: 2px; font-size: 14px; }
#study-programs-site .acceptance-page .acceptance-instructions { max-width: 78ch; margin: 14px 0 18px; color: var(--acceptance-muted); font-size: 14px; }

.acceptance-page progress {
  display: block;
  width: 100%;
  height: 7px;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #e5ecf0;
  color: #287366;
  appearance: none;
}

.acceptance-page progress::-webkit-progress-bar { background: #e5ecf0; }
.acceptance-page progress::-webkit-progress-value { background: #287366; }
.acceptance-page progress::-moz-progress-bar { background: #287366; }
.acceptance-preferences { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 4px 18px; margin-top: 12px; }
.acceptance-remember { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; margin: 0; color: var(--acceptance-muted); font-size: 13px; font-weight: 400; cursor: pointer; }
.acceptance-page input[type="checkbox"] { flex-shrink: 0; width: 20px; height: 20px; margin: 0; accent-color: #16476a; cursor: pointer; }
#study-programs-site .acceptance-page .acceptance-reset { border-color: transparent; padding-inline: 0; background: transparent; font-size: 12px; text-decoration: underline; text-underline-offset: 3px; }
#study-programs-site .acceptance-page .acceptance-storage-note { margin: 2px 0 0; color: var(--acceptance-muted); font-size: 12px; }

/* A continuous numbered guide, with quiet row feedback and stage completion. */
.acceptance-stages { margin: 8px 0 0; padding: 0; list-style: none; }
.acceptance-stage {
  position: relative;
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: 20px;
  padding: 32px 0;
}
.acceptance-stage:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 76px;
  bottom: -24px;
  left: 17px;
  width: 1px;
  background: var(--acceptance-line);
}
.acceptance-stage-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid #cbdbe4;
  border-radius: 50%;
  background: #f4f8fa;
  color: #285776;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.acceptance-stage-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px 14px; min-height: 36px; padding-bottom: 14px; border-bottom: 1px solid var(--acceptance-line); }
.acceptance-stage-status { padding: 3px 9px; border-radius: 4px; background: #f1f4f6; color: #526575; font-size: 11px; font-weight: 600; white-space: nowrap; font-variant-numeric: tabular-nums; }
.acceptance-stage.is-complete .acceptance-stage-number,
.acceptance-stage.is-complete .acceptance-stage-status { border-color: #b9d4cc; background: #e9f4ef; color: #245f4d; }
.acceptance-stage:target .acceptance-stage-heading { border-bottom-color: #7595aa; }
.acceptance-tasks { margin: 6px 0 0; padding: 0; list-style: none; }
.acceptance-tasks > li { display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: 14px; padding: 15px 12px; border-bottom: 1px solid #edf1f4; border-radius: 4px; }
.acceptance-tasks > li:last-child { border-bottom-color: transparent; }
.acceptance-tasks > li:hover, .acceptance-tasks > li:focus-within { background: #f6f9fb; }
.acceptance-tasks > li:has(input:checked) { background: #f1f7f4; border-bottom-color: #e0ece6; }
.acceptance-page .acceptance-tasks input { margin-top: 3px; }
.acceptance-tasks label { display: block; min-height: 44px; margin: 0; cursor: pointer; }
.acceptance-tasks strong { display: block; color: var(--acceptance-ink); font-size: 16px; font-weight: 600; line-height: 1.6; }
.acceptance-tasks label > span { display: block; max-width: 80ch; margin-top: 4px; color: var(--acceptance-muted); font-size: 15px; line-height: 1.7; }
.acceptance-tasks input:checked + label strong { color: #296647; }
.acceptance-tasks input:checked + label { opacity: 1; }
#study-programs-site .acceptance-page .acceptance-related-links { display: flex; flex-wrap: wrap; gap: 4px 24px; margin: 8px 0 0 46px; }
.acceptance-related-links a { display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; line-height: 1.7; }

/* Office details belong to the final checklist stage. */
.acceptance-office { display: grid; grid-template-columns: 1.1fr 1fr; gap: 28px; padding: 24px; margin-top: 16px; border: 1px solid var(--acceptance-line); border-radius: 6px; background: #f7f9fa; }
#study-programs-site .acceptance-page .acceptance-office h4 { margin: 0 0 12px; }
.acceptance-office a { display: inline-block; min-height: 34px; font-size: 13px; }
#study-programs-site .acceptance-page .acceptance-office-email { font-size: 15px; font-weight: 600; overflow-wrap: anywhere; }
#study-programs-site .acceptance-page .acceptance-office p { margin: 4px 0 10px; color: var(--acceptance-muted); font-size: 13px; }
.acceptance-office dl { margin: 0; }
.acceptance-office dl > div + div { margin-top: 14px; }
.acceptance-office dt { color: var(--acceptance-navy); font-size: 13px; font-weight: 600; }
.acceptance-office dd { margin: 4px 0 0; color: var(--acceptance-muted); font-size: 13px; line-height: 1.7; }
#study-programs-site .acceptance-page .acceptance-small { margin: 8px 0 0; color: var(--acceptance-muted); font-size: 12px; }
#study-programs-site .acceptance-page .acceptance-complete { margin: 0 0 28px; padding: 18px 20px; border: 1px solid #bcd6c7; border-radius: 5px; background: #f1f8f4; color: #245c3c; font-size: 14px; }

.acceptance-sources { padding: 22px 38px; border-top: 1px solid var(--acceptance-line); border-radius: 0 0 10px 10px; background: #f7f9fa; }
.acceptance-sources summary { min-height: 44px; padding: 10px 0; color: var(--acceptance-navy); font-size: 13px; font-weight: 600; cursor: pointer; }
.acceptance-sources ul { margin: 0 0 16px; padding-left: 20px; font-size: 12px; }
.acceptance-sources li { padding: 5px 0; }
#study-programs-site .acceptance-page .acceptance-sources p { max-width: 90ch; margin: 10px 0 0; color: var(--acceptance-muted); font-size: 12px; line-height: 1.7; }
#study-programs-site .acceptance-page .acceptance-sources details p { margin-bottom: 10px; }

@media (max-width: 1199px) {
  .acceptance-intro { grid-template-columns: minmax(0, 1fr) 220px; gap: 24px; padding: 34px 28px 30px; }
  .acceptance-stage-nav { padding-left: 18px; }
  #study-programs-site .acceptance-page h1 { font-size: 32px; }
  .acceptance-checklist { padding: 28px 28px 0; }
  .acceptance-stage { gap: 16px; }
  .acceptance-sources { padding: 20px 28px; }
}

@media (max-width: 991px) {
  .acceptance-intro { grid-template-columns: 1fr; gap: 24px; }
  .acceptance-stage-nav { padding: 10px 0 0; border-left: 0; border-top: 1px solid var(--acceptance-line); }
  .acceptance-stage-nav ol { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; }
}

@media (max-width: 767px) {
  #study-programs-site .acceptance-page h1 { font-size: 30px; }
  #study-programs-site .acceptance-page h2 { font-size: 23px; }
  #study-programs-site .acceptance-page h3 { font-size: 20px; }
  .acceptance-intro { padding: 28px 22px 18px; gap: 20px; }
  .acceptance-intro-actions { gap: 8px 20px; }
  #study-programs-site .acceptance-page .acceptance-print { margin-left: 0; }
  .acceptance-checklist { padding: 26px 22px 0; }
  .acceptance-stage-nav ol { grid-template-columns: 1fr; }
  #study-programs-site .acceptance-page .acceptance-stage-nav a { font-size: 13px; }
  .acceptance-progress-controls { padding: 16px; }
  .acceptance-count { font-size: 13px; }
  .acceptance-percentage { font-size: 24px; }
  .acceptance-preferences { gap: 0 12px; }
  .acceptance-remember { font-size: 12px; }
  .acceptance-stage { grid-template-columns: 1fr; gap: 12px; padding: 28px 0; }
  .acceptance-stage:not(:last-child)::before { display: none; }
  .acceptance-stage-number { width: 32px; height: 32px; font-size: 11px; }
  .acceptance-stage-heading { padding-bottom: 12px; }
  .acceptance-tasks > li { gap: 12px; padding: 14px 4px; }
  .acceptance-tasks strong { font-size: 15px; }
  .acceptance-tasks label > span { font-size: 14px; }
  .acceptance-office { grid-template-columns: 1fr; gap: 22px; padding: 18px; }
  .acceptance-sources { padding: 20px 22px; }
  #study-programs-site .acceptance-page .acceptance-related-links { margin-left: 0; }
}

@media (max-width: 359px) {
  #study-programs-site .acceptance-page h1 { font-size: 28px; }
  .acceptance-intro, .acceptance-checklist, .acceptance-sources { padding-inline: 18px; }
}

/* Print only the guide, preserving checked boxes and the full support details. */
@page { margin: 14mm; }
@media print {
  .cd-main-header, .university-navigation, .programs-sidebar,
  body > .ms-WPBody, .a11y-fab, #a11yPanel, .skip-link,
  .acceptance-intro-actions, .acceptance-progress-controls, .acceptance-count,
  .acceptance-related-links, .acceptance-complete { display: none !important; }
  .acceptance-stage-nav, .acceptance-stage-status { display: none !important; }
  html, body, #s4-workspace, #s4-bodyContainer, #main-content,
  #main-content .bgGrey, #main-content .container, #main-content .row,
  #main-content .col-md-9, #sag-ana.acceptance-content {
    width: auto !important; height: auto !important; min-height: 0 !important;
    max-width: none !important; margin: 0 !important; padding: 0 !important;
    overflow: visible !important; float: none !important; background: #fff !important;
  }
  #study-programs-site .acceptance-page { font-size: 10pt; }
  #study-programs-site .acceptance-page h1 { font-size: 24pt; }
  #study-programs-site .acceptance-page h2 { font-size: 16pt; }
  #study-programs-site .acceptance-page h3 { font-size: 13pt; }
  #study-programs-site .acceptance-page .acceptance-lead { font-size: 10pt; }
  .acceptance-intro { display: block; padding: 0 0 16px; border: 0; }
  .acceptance-checklist { padding: 16px 0 0; }
  .acceptance-stages { margin-top: 16px; }
  .acceptance-stage { display: block; padding: 16px 0; break-inside: avoid; }
  .acceptance-stage::before { display: none; }
  .acceptance-stage-number { display: block; width: auto; height: auto; margin-bottom: 6px; padding: 0; border: 0; background: none; font-size: 9pt; }
  .acceptance-stage-heading { min-height: 0; padding: 0; border: 0; }
  .acceptance-tasks { margin-top: 8px; }
  .acceptance-tasks > li { padding: 5px 0; border: 0; break-inside: avoid; background: none !important; }
  .acceptance-tasks strong { font-size: 10pt; }
  .acceptance-tasks label > span { font-size: 9pt; }
  .acceptance-page input[type="checkbox"] { width: 14px; height: 14px; print-color-adjust: exact; }
  .acceptance-tasks input:checked + label { opacity: 1; }
  .acceptance-office { display: grid; grid-template-columns: 1fr 1fr; padding: 12px 0 0; border: 0; border-top: 1px solid var(--acceptance-line); background: none; }
  .acceptance-sources { padding: 16px 0; background: none; }
  .acceptance-sources details { break-inside: avoid; }
  #study-programs-site .acceptance-page a::after { content: none; }
  .acceptance-sources summary { min-height: 0; padding: 4px 0; font-size: 9pt; }
  .acceptance-sources ul { margin: 4px 0 8px; font-size: 8pt; line-height: 1.4; }
  .acceptance-sources li { padding: 2px 0; }
  #study-programs-site .acceptance-page .acceptance-sources p { margin: 6px 0 0; font-size: 8pt; line-height: 1.4; }
  #study-programs-site .acceptance-page .acceptance-sources a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 7pt; overflow-wrap: anywhere; }
}
```