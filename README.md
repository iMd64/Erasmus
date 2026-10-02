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
