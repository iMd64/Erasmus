# Integration Guide for Short Term Study Programs

This guide contains the necessary HTML and CSS to integrate the Short Term Study Programs page content into the main university website structure.

## Table of Contents

- [1. HTML Content (Homepage)](#1-html-content)
- [2. CSS Styles (Homepage)](#2-css-styles-homepage)
- [3. HTML Content (Short Term Study Abroad)](#3-html-content-short-term-study-abroad)
- [4. CSS Styles (Short Term Study Abroad)](#4-css-styles-short-term-study-abroad)
- [5. HTML Content (Application Process: After Acceptance)](#5-html-content-application-process-after-acceptance)
- [6. CSS Styles (Application Process: After Acceptance)](#6-css-styles-application-process-after-acceptance)
- [7. HTML Content (Frequently Asked Questions)](#7-html-content-frequently-asked-questions)
- [8. CSS Styles (Frequently Asked Questions)](#8-css-styles-frequently-asked-questions)
- [9. HTML Content (Contact)](#9-html-content-contact)
- [10. CSS Styles (Contact)](#10-css-styles-contact)
- [11. HTML Content (Student Experiences)](#11-html-content-student-experiences)
- [12. CSS Styles (Student Experiences)](#12-css-styles-student-experiences)

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

## 7. HTML Content (Frequently Asked Questions)

Copy the HTML block below. When editing the university website for the Frequently Asked Questions (FAQ) page, locate the main content wrapper—specifically the element `<article class="faq-page" aria-labelledby="faq-title">` inside `<div id="sag-ana">` (or `<div id="sag-ana" class="faq-content">`). **Replace that entire `<article>` element and all of its contents** with the new block provided here.

```html
<article class="faq-page" aria-labelledby="faq-title">
  <!-- General guidance only. Programme-specific details remain in the listings. -->
  <header class="faq-intro">
    <div>
      <p class="faq-eyebrow">Student guidance · Outgoing students</p>
      <h1 id="faq-title">Frequently asked<br>questions</h1>
    </div>
    <div class="faq-intro-copy">
      <p>From choosing a programme to preparing for departure,
        find clear answers to the questions students ask most.</p>
      <a href="#faq-support">Can’t find your answer? <span aria-hidden="true">↓</span></a>
    </div>
  </header>
  <nav class="faq-topics" aria-label="FAQ topics">
    <p class="faq-eyebrow">Find your topic</p>
    <ul>
      <li><a href="#understanding-programmes">Programme basics <span aria-hidden="true">03</span></a></li>
      <li><a href="#applying">Applying <span aria-hidden="true">04</span></a></li>
      <li><a href="#costs">Costs &amp; funding <span aria-hidden="true">03</span></a></li>
      <li><a href="#academic-travel">Credits &amp; travel <span aria-hidden="true">03</span></a></li>
      <li><a href="#updates-support">Updates &amp; support <span aria-hidden="true">02</span></a></li>
    </ul>
  </nav>
  <div class="faq-toolbar">
    <p>Choose a question to read its answer.</p>
    <button type="button" id="faq-toggle-all" aria-controls="faq-questions" aria-expanded="false" hidden>Expand all answers</button>
  </div>
  <div class="faq-questions" id="faq-questions">
    <section class="faq-group" id="understanding-programmes" aria-labelledby="basics-title">
      <header class="faq-group-heading">
        <span class="faq-section-number" aria-hidden="true">01</span>
        <h2 id="basics-title">Programme basics</h2>
        <p>Understand your options.</p>
      </header>
      <div class="faq-group-items">
        <details class="faq-item" id="what-is-short-term">
          <summary><h3>What is a short-term study abroad programme?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>A focused learning experience abroad, such as a summer or winter school,
              an educational camp, or a language course. The subject, length, and learning
              activities depend on the host programme.</p>
            <a href="short-term-study-abroad.html">Explore short-term study abroad <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <details class="faq-item" id="programme-differences">
          <summary><h3>What is the difference between a summer/winter programme and a language programme?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Summer and winter schools often centre on an academic subject or practical
              project. Language programmes focus on developing language skills. Both may
              include cultural activities, so compare the course content rather than the season alone.</p>
            <div class="faq-answer-links">
              <a href="summer-winter-programs.html">See Summer &amp; Winter Programmes <span aria-hidden="true">→</span></a>
              <a href="language-programs.html">See Language Programmes <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </details>
        <details class="faq-item" id="is-it-erasmus">
          <summary><h3>Is every programme an Erasmus+ programme?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>No. A partner university’s short course is not automatically an Erasmus+
              activity. Erasmus+ mobility has its own institutional arrangements and
              selection process. Confirm the route with IAU before assuming that Erasmus+
              funding or recognition rules apply.</p>
            <a href="short-term-study-abroad.html">Read about Erasmus+ and short-term options <span aria-hidden="true">→</span></a>
          </div>
        </details>
      </div>
    </section>
    <section class="faq-group" id="applying" aria-labelledby="applying-title">
      <header class="faq-group-heading">
        <span class="faq-section-number" aria-hidden="true">02</span>
        <h2 id="applying-title">Applying</h2>
        <p>Know your next step.</p>
      </header>
      <div class="faq-group-items">
        <details class="faq-item" id="eligibility">
          <summary><h3>How do I know whether I am eligible?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Read the eligibility section in the programme listing, then check the host’s
              current announcement. Requirements vary. Ask the listed contact if anything
              is unclear before submitting an application.</p>
            <div class="faq-answer-links">
              <a href="summer-winter-programs.html">Check Summer &amp; Winter Programmes <span aria-hidden="true">→</span></a>
              <a href="language-programs.html">Check Language Programmes <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </details>
        <details class="faq-item" id="application-route">
          <summary><h3>Do I apply through IAU or directly to the host university?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Follow the route given in the programme announcement. Some opportunities
              use a host application; others require IAU involvement. For Erasmus+,
              contact the IAU Erasmus+ Office about its selection process.
              If the route is unclear, ask before applying.</p>
            <div class="faq-answer-links">
              <a href="summer-winter-programs.html">Find the programme’s application instructions <span aria-hidden="true">→</span></a>
              <a href="contact.html">Ask the IAU office <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </details>
        <details class="faq-item" id="missed-deadline">
          <summary><h3>What happens if I miss a deadline?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Contact the host or the office named in the announcement to ask whether
              applications are still being considered. Do not assume an extension or
              late place is available. If the call is closed, look for another opportunity.</p>
            <a href="summer-winter-programs.html">Browse programme listings and host links <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <details class="faq-item" id="withdrawal">
          <summary><h3>What should I do if I want to withdraw after applying?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Write to the host and inform the relevant IAU office if it is involved.
              Ask for written confirmation of the withdrawal and check the cancellation,
              refund, and any grant-agreement terms that apply to you. Check travel and
              accommodation bookings separately.</p>
            <a href="application-process.html#during-program">Read the guidance on changes after acceptance <span aria-hidden="true">→</span></a>
          </div>
        </details>
      </div>
    </section>
    <section class="faq-group" id="costs" aria-labelledby="costs-title">
      <header class="faq-group-heading">
        <span class="faq-section-number" aria-hidden="true">03</span>
        <h2 id="costs-title">Costs &amp; funding</h2>
        <p>Plan the whole experience.</p>
      </header>
      <div class="faq-group-items">
        <details class="faq-item" id="total-cost">
          <summary><h3>Where can I see the total programme cost?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Start with the listing’s fee and the host’s current cost breakdown.
              The advertised fee may not be your full budget: add any travel,
              accommodation, meals, insurance, visa, and personal expenses that are
              not covered. Ask the host about anything missing from the breakdown.</p>
            <div class="faq-answer-links">
              <a href="summer-winter-programs.html">See programme fees and host details <span aria-hidden="true">→</span></a>
              <a href="language-programs.html">See Language Programmes <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </details>
        <details class="faq-item" id="included-excluded">
          <summary><h3>What do “included” and “excluded” costs mean?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>“Included” means covered by the stated programme fee. “Excluded” means
              outside that fee and something you may need to budget for separately.
              What is covered differs between programmes; use the host’s itemised
              description rather than assuming a package includes everything.</p>
            <a href="summer-winter-programs.html">Check what each programme includes <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <details class="faq-item" id="scholarships">
          <summary><h3>Are scholarships or discounts available?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Some partner programmes offer support or reduced fees for IAU students.
              Availability and conditions vary, so check the individual announcement.
              A partner discount is separate from an Erasmus+ grant; neither should be
              assumed until confirmed through the relevant process.</p>
            <a href="summer-winter-programs.html">Check the programme’s funding information <span aria-hidden="true">→</span></a>
          </div>
        </details>
      </div>
    </section>
    <section class="faq-group" id="academic-travel" aria-labelledby="academic-title">
      <header class="faq-group-heading">
        <span class="faq-section-number" aria-hidden="true">04</span>
        <h2 id="academic-title">Credits &amp; travel</h2>
        <p>Prepare with confidence.</p>
      </header>
      <div class="faq-group-items">
        <details class="faq-item" id="academic-credit">
          <summary><h3>Can I receive academic credit for a programme?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Credit recognition needs to be agreed with your faculty. A certificate or
              advertised ECTS value alone does not confirm that a partner course will
              count towards your IAU degree. For Erasmus+ study, agree recognition in
              the Learning Agreement before mobility and keep the required academic records.</p>
            <a href="application-process.html#academic-approval">Read the academic approval checklist <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <details class="faq-item" id="ask-faculty">
          <summary><h3>Should I ask my faculty before applying?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Yes, especially if you want academic credit or your plans could affect
              classes or assessments at IAU. Share the course description and ask
              your coordinator about approval and the records you will need.
              Confirm recognition arrangements before committing.</p>
            <a href="application-process.html#academic-approval">See academic approval and coordinator guidance <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <details class="faq-item" id="travel-documents">
          <summary><h3>Do I need a passport, visa, or travel insurance?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Check the destination’s official entry rules for your nationality, travel
              document, and length and purpose of stay, including any transit country.
              Confirm insurance requirements with the host and destination authorities.
              Acceptance by a university does not replace permission to enter a country.</p>
            <div class="faq-answer-links">
              <a href="application-process.html#prepare-travel">Read After You Are Accepted: travel preparation <span aria-hidden="true">→</span></a>
              <a href="https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en">Official Schengen visa guidance <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </details>
      </div>
    </section>
    <section class="faq-group" id="updates-support" aria-labelledby="updates-title">
      <header class="faq-group-heading">
        <span class="faq-section-number" aria-hidden="true">05</span>
        <h2 id="updates-title">Updates &amp; support</h2>
        <p>Stay informed and connected.</p>
      </header>
      <div class="faq-group-items">
        <details class="faq-item" id="list-updates">
          <summary><h3>How often does IAU update the programme lists?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>IAU states that it updates the summer/winter list as information arrives
              from partner universities; it does not give a fixed timetable there.
              Check the live listing and student announcements, and confirm current
              details with the host. The saved listings in this folder do not refresh automatically.</p>
            <a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx">Check the live IAU programme list <span aria-hidden="true">↗</span></a>
          </div>
        </details>
        <details class="faq-item" id="who-to-contact">
          <summary><h3>Who should I contact if I cannot find an answer?</h3><span class="faq-plus" aria-hidden="true"></span></summary>
          <div class="faq-answer">
            <p>Contact the Short-Term Study Programs Office with the programme name,
              host university, and your question. Ask the host about its course or
              booking terms, your faculty about academic recognition, and the IAU
              Erasmus+ Office about Erasmus+ arrangements.</p>
            <a href="contact.html">Find the IAU office team and contact details <span aria-hidden="true">→</span></a>
          </div>
        </details>
      </div>
    </section>
  </div>
  <aside class="faq-support" id="faq-support" aria-labelledby="support-title">
    <div>
      <p class="faq-eyebrow">A little guidance goes a long way</p>
      <h2 id="support-title">Still have a question?</h2>
      <p>Tell the Short-Term Study Programs Office which programme you are
        considering and what you would like to clarify.</p>
    </div>
    <div class="faq-support-actions">
      <a class="faq-contact-button" href="contact.html">Contact the office <span aria-hidden="true">→</span></a>
      <a href="application-process.html">Already accepted? See your next steps</a>
    </div>
  </aside>
  <footer class="faq-sources">
    <details>
      <summary>Official guidance behind these answers</summary>
      <ul>
        <li><a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/Short-Term-Study-Abroad.aspx">IAU: short-term opportunities and application guidance</a></li>
        <li><a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/programs.aspx">IAU: summer/winter listings, fee breakdowns, and update notice</a></li>
        <li><a href="https://www.aydin.edu.tr/en-us/international/shortterm/outgoing/Pages/study-abroad-language-programs.aspx">IAU: language programmes</a></li>
        <li><a href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad">European Commission: Erasmus+ study, funding, and recognition</a></li>
        <li><a href="https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en">European Commission: official Schengen visa guidance</a></li>
      </ul>
    </details>
    <p>Guidance reviewed on 20 October 2026. For programme-specific requirements and
      arrangements, use the current host announcement and the relevant IAU office.</p>
  </footer>
</article>
```

## 8. CSS Styles (Frequently Asked Questions)

The following styles ensure proper rendering for the Frequently Asked Questions page, topic navigation pills, native disclosure items, responsive layouts, and dedicated `@media print` view. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
/* FAQ page: local typography, topic navigation, and accessible native disclosures. */
@font-face {
  font-family: "IAU FAQ Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin-ext.woff2") format("woff2");
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "IAU FAQ Sans";
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#study-programs-site .bgGrey .container .row #sag-ana.faq-content {
  padding: 0 !important;
  border-radius: 10px !important;
  background: #fff !important;
  box-shadow: none;
}
#study-programs-site .faq-page {
  --faq-navy: #103653;
  --faq-ink: #203747;
  --faq-muted: #526575;
  --faq-line: #dce5eb;
  --faq-font: "IAU FAQ Sans", "Segoe UI", Arial, sans-serif;
  color: var(--faq-ink);
  font: 400 16px/1.7 var(--faq-font);
  text-align: left;
  overflow-wrap: break-word;
}
.faq-page *, .faq-page *::before, .faq-page *::after { box-sizing: border-box; font-family: inherit; }
#study-programs-site .faq-page [hidden] { display: none !important; }
.faq-page [id] { scroll-margin-top: 24px; }
#study-programs-site .faq-page h1,
#study-programs-site .faq-page h2,
#study-programs-site .faq-page h3 {
  margin: 0;
  color: var(--faq-navy);
  font-family: var(--faq-font);
  font-weight: 700;
  line-height: 1.35;
}
#study-programs-site .faq-page h1 { font-size: 36px; letter-spacing: -.025em; }
#study-programs-site .faq-page h2 { font-size: 22px; letter-spacing: -.015em; }
#study-programs-site .faq-page h3 { font-size: 16px; font-weight: 600; line-height: 1.6; }
#study-programs-site .faq-page p { margin: 0; }
#study-programs-site .faq-page a { color: #164c70; text-decoration: underline; text-underline-offset: 4px; }
#study-programs-site .faq-page a:hover { color: #246d98; }
#study-programs-site .faq-page :is(a, button, summary):focus-visible { outline: 3px solid #397f9f; outline-offset: 4px; }
.faq-page summary { cursor: pointer; }

/* Quiet institutional header; the introduction stays separate from the controls. */
.faq-intro {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 48px;
  padding: 42px 38px 36px;
  border-top: 4px solid var(--faq-navy);
  border-radius: 10px 10px 0 0;
}
#study-programs-site .faq-page .faq-eyebrow {
  margin: 0 0 12px;
  color: var(--faq-muted);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: .09em;
  text-transform: uppercase;
}
.faq-intro-copy { padding-left: 28px; border-left: 1px solid var(--faq-line); }
#study-programs-site .faq-page .faq-intro-copy p { color: var(--faq-muted); font-size: 16px; }
.faq-intro-copy a { display: inline-flex; align-items: center; gap: 14px; min-height: 44px; margin-top: 12px; font-size: 13px; font-weight: 600; }

/* All topics are ordinary anchor links, so they work offline and without scripts. */
.faq-topics { padding: 24px 38px; border-block: 1px solid var(--faq-line); background: #f6f9fb; }
.faq-topics ul { display: flex; flex-wrap: wrap; gap: 10px; margin: 0; padding: 0; list-style: none; }
#study-programs-site .faq-page .faq-topics a {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  min-height: 44px;
  padding: 9px 13px;
  border: 1px solid #cfdee7;
  border-radius: 5px;
  background: #fff;
  color: var(--faq-navy);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}
#study-programs-site .faq-page .faq-topics a:hover { border-color: #7e9fb4; background: #edf4f8; }
.faq-topics a span { color: #607b8c; font-size: 10px; font-variant-numeric: tabular-nums; }
.faq-toolbar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px 16px; padding: 22px 38px 0; }
#study-programs-site .faq-page .faq-toolbar p { color: var(--faq-muted); font-size: 12px; }
#study-programs-site .faq-page button {
  min-height: 44px;
  margin: 0;
  padding: 8px 0;
  border: 0;
  background: transparent;
  color: #164c70;
  font: 600 12px/1.6 var(--faq-font);
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
}

/* Category captions and question rows create a readable editorial hierarchy. */
.faq-questions { padding: 0 38px; }
.faq-group { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 34px; padding: 30px 0; }
.faq-group + .faq-group { border-top: 1px solid var(--faq-line); }
.faq-group-heading { padding-top: 12px; }
.faq-section-number { display: block; margin-bottom: 12px; color: #38718b; font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
#study-programs-site .faq-page .faq-group-heading p { margin-top: 10px; color: var(--faq-muted); font-size: 12px; line-height: 1.7; }
.faq-group-items { min-width: 0; }
.faq-item { margin: 0; border: 1px solid transparent; border-bottom-color: var(--faq-line); }
.faq-item:last-child { border-bottom-color: transparent; }
.faq-item summary { display: flex; align-items: center; justify-content: space-between; gap: 22px; min-height: 72px; padding: 20px 18px; list-style: none; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary:hover { background: #f5f8fa; border-radius: 5px; }
.faq-plus { position: relative; flex: 0 0 28px; width: 28px; height: 28px; border-radius: 50%; background: #edf3f7; color: #285776; }
.faq-plus::before, .faq-plus::after { content: ""; position: absolute; top: 13px; left: 8px; width: 12px; height: 1.5px; background: currentColor; }
.faq-plus::after { transform: rotate(90deg); }
.faq-item[open] { margin-block: 8px; border-color: #c9dbe5; border-radius: 6px; background: #f6f9fb; }
.faq-item[open] summary { padding-bottom: 12px; }
.faq-item[open] .faq-plus { color: #fff; background: var(--faq-navy); }
.faq-item[open] .faq-plus::after { display: none; }
.faq-item:target { border-color: #759aae; border-radius: 6px; }
.faq-answer { padding: 0 68px 22px 18px; }
#study-programs-site .faq-page .faq-answer p { max-width: 76ch; margin: 0 0 12px; color: var(--faq-muted); font-size: 15px; line-height: 1.8; }
.faq-answer a { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; font-size: 13px; line-height: 1.6; }
.faq-answer a span { flex-shrink: 0; }
.faq-answer-links { display: flex; flex-wrap: wrap; gap: 2px 24px; }

/* A useful next step, without repeating office details across pages. */
.faq-support { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: 32px; margin: 8px 38px 34px; padding: 28px; border: 1px solid #d6e3e9; border-radius: 7px; background: #f3f8fa; }
#study-programs-site .faq-page .faq-support h2 { font-size: 24px; }
#study-programs-site .faq-page .faq-support p:not(.faq-eyebrow) { margin-top: 12px; color: var(--faq-muted); font-size: 14px; }
.faq-support-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
.faq-support-actions > a { display: inline-flex; align-items: center; min-height: 44px; font-size: 12px; }
#study-programs-site .faq-page .faq-contact-button { justify-content: space-between; gap: 24px; padding: 12px 18px; border-radius: 5px; background: var(--faq-navy); color: #fff; font-size: 14px; font-weight: 600; text-decoration: none; }
#study-programs-site .faq-page .faq-contact-button:hover { background: #245b7c; }
.faq-sources { padding: 22px 38px; border-top: 1px solid var(--faq-line); }
.faq-sources summary { display: list-item; min-height: 44px; padding: 10px 0; color: var(--faq-navy); font-size: 12px; font-weight: 600; }
.faq-sources ul { margin: 6px 0 16px; padding-left: 20px; font-size: 12px; }
.faq-sources li { padding: 6px 0; }
#study-programs-site .faq-page .faq-sources p { max-width: 90ch; margin-top: 8px; color: var(--faq-muted); font-size: 12px; }

@media (max-width: 1199px) {
  .faq-intro { gap: 28px; padding: 34px 28px; }
  .faq-intro-copy { padding-left: 20px; }
  #study-programs-site .faq-page h1 { font-size: 32px; }
  .faq-topics, .faq-questions, .faq-toolbar, .faq-sources { padding-inline: 28px; }
  .faq-group { grid-template-columns: 140px minmax(0, 1fr); gap: 22px; }
  .faq-support { margin-inline: 28px; padding: 24px; gap: 24px; }
}
@media (max-width: 767px) {
  .faq-intro { grid-template-columns: 1fr; gap: 20px; padding: 28px 22px 22px; }
  #study-programs-site .faq-page h1 { font-size: 30px; }
  .faq-intro-copy { padding: 0; border: 0; }
  .faq-intro-copy a { margin-top: 8px; }
  .faq-topics { padding: 22px; }
  .faq-topics ul { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .faq-topics li:last-child { grid-column: 1 / -1; }
  #study-programs-site .faq-page .faq-topics a { width: 100%; height: 100%; gap: 8px; padding: 9px 10px; font-size: 12px; }
  .faq-toolbar { padding: 18px 22px 0; }
  .faq-questions, .faq-sources { padding-inline: 22px; }
  .faq-group { grid-template-columns: 1fr; gap: 14px; padding: 26px 0; }
  .faq-group-heading { display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: baseline; gap: 3px 10px; padding-top: 0; }
  .faq-section-number { grid-row: 1 / 3; margin: 0; }
  #study-programs-site .faq-page .faq-group-heading h2 { font-size: 21px; }
  #study-programs-site .faq-page .faq-group-heading p { grid-column: 2; margin-top: 3px; }
  .faq-item summary { gap: 12px; padding: 16px 10px; }
  #study-programs-site .faq-page h3 { font-size: 15px; }
  .faq-plus { flex-basis: 24px; width: 24px; height: 24px; }
  .faq-plus::before, .faq-plus::after { top: 11px; left: 6px; }
  .faq-answer { padding: 0 12px 18px 10px; }
  #study-programs-site .faq-page .faq-answer p { font-size: 14px; }
  .faq-answer a { font-size: 12px; }
  .faq-support { grid-template-columns: 1fr; gap: 20px; margin: 0 22px 28px; padding: 22px; }
  #study-programs-site .faq-page .faq-support h2 { font-size: 22px; }
}
@media (max-width: 359px) {
  .faq-intro, .faq-topics, .faq-questions, .faq-toolbar, .faq-sources { padding-inline: 18px; }
  #study-programs-site .faq-page h1 { font-size: 28px; }
  .faq-support { margin-inline: 18px; padding: 18px; }
}

/* Browser printing opens every answer; the script restores the previous state. */
@page { margin: 14mm; }
@media print {
  .cd-main-header, .university-navigation, .programs-sidebar,
  body > .ms-WPBody, .a11y-fab, #a11yPanel, .skip-link,
  .faq-topics, .faq-toolbar, .faq-plus, .faq-intro-copy > a { display: none !important; }
  html, body, #s4-workspace, #s4-bodyContainer, #main-content,
  #main-content .bgGrey, #main-content .container, #main-content .row,
  #main-content .col-md-9, #sag-ana.faq-content {
    width: auto !important; height: auto !important; min-height: 0 !important;
    max-width: none !important; margin: 0 !important; padding: 0 !important;
    overflow: visible !important; float: none !important; background: #fff !important;
  }
  .faq-intro { display: block; padding: 0 0 16px; border: 0; }
  .faq-intro-copy { margin-top: 12px; padding: 0; border: 0; }
  #study-programs-site .faq-page h1 { font-size: 23pt; }
  #study-programs-site .faq-page h2 { font-size: 15pt; }
  #study-programs-site .faq-page h3 { font-size: 11pt; }
  #study-programs-site .faq-page .faq-intro-copy p { font-size: 10pt; }
  .faq-questions { padding: 0; }
  .faq-group { display: block; padding: 18px 0 0; }
  .faq-group-heading { display: block; padding: 0 0 8px; break-after: avoid; }
  .faq-section-number, .faq-group-heading p { display: none; }
  .faq-item, .faq-item[open] { margin: 0; border: 0; border-bottom: 1px solid #dce5eb; border-radius: 0; background: none; break-inside: avoid; }
  .faq-item summary, .faq-item[open] summary { min-height: 0; padding: 10px 0 5px; }
  .faq-item::details-content { display: block; content-visibility: visible; }
  .faq-answer { padding: 0 0 8px; }
  #study-programs-site .faq-page .faq-answer p { max-width: none; margin-bottom: 4px; font-size: 9pt; line-height: 1.5; }
  .faq-answer a { min-height: 0; font-size: 8pt; }
  .faq-support { margin: 18px 0 0; padding: 16px; break-inside: avoid; }
  #study-programs-site .faq-page .faq-support h2 { font-size: 16pt; }
  #study-programs-site .faq-page .faq-support p:not(.faq-eyebrow) { font-size: 9pt; }
  .faq-sources { padding: 12px 0; break-inside: avoid; }
  .faq-sources summary { min-height: 0; padding: 4px 0; font-size: 9pt; }
  .faq-sources ul { margin: 4px 0 8px; font-size: 8pt; }
  .faq-sources li { padding: 2px 0; }
  #study-programs-site .faq-page a::after { content: none; }
  #study-programs-site .faq-page .faq-sources p { font-size: 8pt; }
}
```

## 9. HTML Content (Contact)

Copy the HTML block below. When editing the university website for the Contact page, locate the main content wrapper—specifically the element `<div id="sag-ana">` (or `<div class="wpb_wrapper vc_custom_1461916946657" id="sag-ana">`). **Replace that entire element and all of its contents** with the new block provided here:

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
        <img src="../assets/images/pages/gurkan-donat.jpg" width="400" height="400" alt="">
        <div><h3>Gürkan Donat</h3>
          <p>Short-Term Study Programs Coordinator</p>
          <a href="mailto:gurkandonat@aydin.edu.tr">gurkandonat@aydin.edu.tr</a>
        </div>
      </div>
      <div class="office-person">
        <img src="../assets/images/pages/yazid-munsari.jpeg" width="980" height="980" alt="">
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

## 10. CSS Styles (Contact)

The following styles ensure proper rendering for the Contact page, container query responsiveness (`@container`), coordinator directory cards, visit information, and dedicated typography. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

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

## 11. HTML Content (Student Experiences)

Copy the HTML block below. When editing the university website for the Student Experiences page, locate the main content wrapper—specifically the element `<div id="sag-ana">` (or `<div class="wpb_wrapper vc_custom_1461916946657" id="sag-ana">`). **Replace that entire element and all of its contents** with the new block provided here:

```html
<div id="sag-ana" class="experience-content">
  <article class="experience-page" aria-labelledby="experience-title">
    <header class="experience-hero">
      <div class="experience-hero-copy">
        <h1 id="experience-title">Student<br>Experiences</h1>
        <p>What is it like to study abroad for a few weeks? Explore life in and beyond the classroom, what students bring home, and what they wish they had known before leaving.</p>
        <div class="experience-hero-actions">
          <a class="experience-button" href="#experience-stories">Explore stories <span aria-hidden="true">↓</span></a>
          <a href="#experience-share">Share your experience</a>
        </div>
      </div>
      <img class="experience-hero-image" src="../assets/images/pages/student-experiences-hero.png" width="1122" height="1402" alt="Illustration of an open travel journal and map beside a train window" fetchpriority="high">
    </header>

    <section class="experience-stories" id="experience-stories" aria-labelledby="experience-stories-title">
      <div class="experience-section-heading">
        <h2 id="experience-stories-title">Stories from abroad</h2>
        <p>These sample stories summarise first-hand accounts published by other universities. This collection will be replaced with stories from IAU students once the office has their written permission.</p>
      </div>
      <form class="experience-filters" id="experience-filters" hidden aria-label="Filter stories">
        <label>Programme type
          <select name="type">
            <option value="">All programmes</option>
            <option value="summer">Summer school</option>
            <option value="winter">Winter school</option>
            <option value="language">Language programme</option>
          </select>
        </label>
        <label>Country
          <select name="country"><option value="">All countries</option></select>
        </label>
        <button type="reset">Clear filters</button>
      </form>
      <p class="experience-result-count" id="experience-result-count" role="status" hidden></p>
      <p class="experience-no-results" id="experience-no-results" hidden>No stories match this combination. Choose another country or programme type.</p>
      <div class="experience-grid" id="experience-story-list">
        <!-- Replace these sample cards with approved IAU stories. Keep the type and country attributes for filtering. -->
        <article class="experience-card" data-story-type="summer" data-story-country="Netherlands" aria-labelledby="groningen-energy">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> Netherlands</p>
            <h3 id="groningen-energy">A week tackling the energy transition</h3>
            <p class="experience-card-programme">University of Groningen · Energy Challenge</p>
            <p class="experience-card-profile">Management and engineering · 2023</p>
          </header>
          <p class="experience-card-story">A master’s student worked through an energy simulation and visited a hydrogen research centre. Discussions with a small international group showed how law, economics and engineering shape the same energy decisions. The group kept debating the topic over dinner.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Compare the organiser’s accommodation with nearby options and leave room for informal time with classmates.</p>
          </details>
          <!-- Original account: Rosenheim Technical University (https://international.th-rosenheim.de/wp-content/uploads/2023/10/GoAbroad-Report-Lisa-Geitner.pdf) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="Spain" aria-labelledby="granada-spanish">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> Spain</p>
            <h3 id="granada-spanish">The Spanish learned over dinner</h3>
            <p class="experience-card-programme">University of Granada · Spanish Language Immersion</p>
          </header>
          <p class="experience-card-story">Morning classes gave a visiting student phrases to try at dinner with a host family. Conversations were difficult at first, but repeated practice with a flatmate and the host helped the student speak more confidently. Flamenco workshops and trips added a cultural dimension.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>If you stay with a host family, try using one expression from class at the dinner table each day.</p>
          </details>
          <!-- Original account: Ritsumeikan Asia Pacific University (https://en.apu.ac.jp/cle/news/article/?storyid=9) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="Japan" aria-labelledby="osaka-winter">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> Japan</p>
            <h3 id="osaka-winter">Japanese lessons and a first tea ceremony</h3>
            <p class="experience-card-programme">Kindai University · Winter School Japan</p>
            <p class="experience-card-profile">Mechanical engineering · 2024</p>
          </header>
          <p class="experience-card-story">An engineering student spent three weeks learning Japanese in Osaka. Local students joined the lessons, and afternoons included martial arts, a tea ceremony and a trip to Kyoto. The experience helped the student feel capable of travelling independently afterwards.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Learn to recognise hiragana and katakana before departure if you are new to Japanese.</p>
          </details>
          <!-- Original account: Clausthal University of Technology (https://www.presse.tu-clausthal.de/en/publications/tuc-studiblog/a-winter-school-in-japan) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="Denmark" aria-labelledby="aarhus-social-science">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> Denmark</p>
            <h3 id="aarhus-social-science">A familiar subject from a different perspective</h3>
            <p class="experience-card-programme">Aarhus University · AU Summer University</p>
            <p class="experience-card-profile">Criminology and psychology · 2018</p>
          </header>
          <p class="experience-card-story">A student took a social science elective on youth, drugs and alcohol in Aarhus. The course showed how cultural attitudes can shape responses to the same issue. Staying within walking distance of campus also made it easy to meet other summer students.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Look for a short elective that complements your degree and ask where participants usually stay.</p>
          </details>
          <!-- Original account: RMIT University (https://www.rmit.edu.au/students/careers-opportunities/study-overseas/stories/michelle-denmark) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="South Korea" aria-labelledby="hanyang-making-friends">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> South Korea</p>
            <h3 id="hanyang-making-friends">A friendship that began at the airport</h3>
            <p class="experience-card-programme">Hanyang University · Hanyang Winter School</p>
            <p class="experience-card-profile">Commerce · 2024</p>
          </header>
          <p class="experience-card-story">A commerce student struck up a conversation during a shared airport pickup. Classes and orientation brought more opportunities to meet people, and the new group later explored cafés and joined a ski trip. Making friends came more naturally than the student had expected.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Use small openings such as shared transport and orientation to start conversations.</p>
          </details>
          <!-- Original account: Deakin University (https://www.deakin.edu.au/students/study-support/study-abroad/student-testimonials/south-korea-dilia) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="United Kingdom" aria-labelledby="birmingham-biomedicine">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> United Kingdom</p>
            <h3 id="birmingham-biomedicine">From the lab bench to the hospital bedside</h3>
            <p class="experience-card-programme">University of Birmingham · Biomedicine summer school</p>
            <p class="experience-card-profile">Biomedicine</p>
          </header>
          <p class="experience-card-story">A biomedicine student spent three weeks combining laboratory work with time exploring Birmingham. The lab sessions provided experience the student expected to use at home, while getting to know classmates from several countries gave everyday practice speaking English.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Check how much time the timetable sets aside for hands-on work and group activities.</p>
          </details>
          <!-- Original account: University of Zurich (https://www.int.uzh.ch/en/out/short-programs/summer-winter-schools/testimonial.html) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="Germany" aria-labelledby="bonn-german">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> Germany</p>
            <h3 id="bonn-german">Finding the courage to speak German</h3>
            <p class="experience-card-programme">Akademie für internationale Bildung · Summer in Bonn</p>
            <p class="experience-card-profile">2023</p>
          </header>
          <p class="experience-card-story">A student placed in an advanced German class found that understanding the language came more easily than speaking it. Conversations with a host helped the student relax and participate more in class. By the end, speaking felt comfortable enough for independent travel.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Give yourself time to settle into the level, and build low-pressure conversation practice into the day.</p>
          </details>
          <!-- Original account: Northwestern University (https://german.northwestern.edu/study-abroad/study-abroad-student-experiences.html) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="South Korea" aria-labelledby="yonsei-credit">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> South Korea</p>
            <h3 id="yonsei-credit">Making winter break count toward a degree</h3>
            <p class="experience-card-programme">Yonsei University · Winter at Yonsei</p>
            <p class="experience-card-profile">Economics minor · 2025</p>
          </header>
          <p class="experience-card-story">A senior used a winter session to fit study abroad around the degree. The econometrics course was relevant to the student’s minor, but getting the home department to recognise the credit took time. Advance planning helped make the short visit manageable.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Ask your own faculty about credit recognition early and keep a copy of the host’s syllabus.</p>
          </details>
          <!-- Original account: Rutgers Global (https://global.rutgers.edu/program-search/details/winter-yonsei-university-south-korea-usac) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="South Korea" aria-labelledby="korea-seoul-summer">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> South Korea</p>
            <h3 id="korea-seoul-summer">Learning to get around Seoul independently</h3>
            <p class="experience-card-programme">Korea University · Summer study abroad</p>
            <p class="experience-card-profile">Psychology</p>
          </header>
          <p class="experience-card-story">A psychology student went to Seoul for six weeks and initially struggled with restaurants and public transport. Learning everyday Korean phrases made getting around easier. A visit to Gyeongbokgung Palace also introduced history the student had rarely encountered in classes at home.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Practise basic phrases before you leave and ask the programme team how to contact them if you need help.</p>
          </details>
          <!-- Original account: University of Birmingham (https://intranet.birmingham.ac.uk/student/news/public/2026/jan-mar26/blog-my-experience-in-south-korea-was-life-changing.aspx) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="France" aria-labelledby="nice-french">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> France</p>
            <h3 id="nice-french">Building speaking confidence in Nice</h3>
            <p class="experience-card-programme">Faculty-led French language and culture programme</p>
            <p class="experience-card-profile">Accounting and French · 2011</p>
          </header>
          <p class="experience-card-story">A student spent six weeks living with a host family and taking French classes in Nice. Class trips offered a closer look at local history, while finding the right bus or ordering food meant using French outside the classroom. The student returned more willing to speak up in class.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Make a habit of handling one everyday task in the language you are learning.</p>
          </details>
          <!-- Original account: Grand Valley State University (https://www.gvsu.edu/cms5/asset/cf458575-3062-47c0-aca2-c409ee4930f3/4a206084-216f-4bb5-9148-bb316452322c/waves_vol.1%282013%29.pdf) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="Germany" aria-labelledby="tubingen-winter-buddy">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> Germany</p>
            <h3 id="tubingen-winter-buddy">Arriving alone and finding a group</h3>
            <p class="experience-card-programme">University of Tübingen · International and European Studies Winter School</p>
          </header>
          <p class="experience-card-story">A student travelled alone to study a subject outside their major. A buddy group and an early castle outing eased the nerves. Back in class, discussion about how Germany remembers the Holocaust highlighted perspectives that were new to the student.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Join the first buddy activity if one is offered. Meeting a few people early can make the rest of the programme feel less unfamiliar.</p>
          </details>
          <!-- Original account: University of Tübingen (https://uni-tuebingen.de/international/studierende-aus-dem-ausland/virtuelle-und-kurzzeit-programme/international-european-studies/alumni-voices/) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="Germany" aria-labelledby="berlin-global-cities">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> Germany</p>
            <h3 id="berlin-global-cities">Seminar discussions and a city to explore</h3>
            <p class="experience-card-programme">Humboldt University of Berlin · Global Cities seminar</p>
            <p class="experience-card-profile">Educational science</p>
          </header>
          <p class="experience-card-story">A master’s student described seminar discussions shaped by a group with varied backgrounds. Outside class, a Spree boat trip and visits to German government buildings gave the student different ways to learn about Berlin alongside classmates.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Check which excursions are included and allow time for the ones that connect with your interests.</p>
          </details>
          <!-- Original account: University of Zurich (https://www.int.uzh.ch/en/out/short-programs/summer-winter-schools/testimonial.html) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="China" aria-labelledby="shanghai-mandarin">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> China</p>
            <h3 id="shanghai-mandarin">Learning Mandarin and planning for arrival</h3>
            <p class="experience-card-programme">Tongji University · Summer School</p>
            <p class="experience-card-profile">Chinese language · 2024</p>
          </header>
          <p class="experience-card-story">A student found that conversation-heavy morning classes made everyday Mandarin easier to follow. Local student volunteers helped the group understand campus life. The first day proved harder because the group landed without mobile internet and had trouble arranging transport and paying for essentials.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Save arrival directions offline and arrange mobile access and a backup payment method before departure.</p>
          </details>
          <!-- Original account: University of Cologne (https://www.uni-koeln.de/sites/international/aaa/92/92pdf/ChinaOffice/Download_Report_Tongji_Summer_School_2024.pdf) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="United Kingdom" aria-labelledby="glasgow-history">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> United Kingdom</p>
            <h3 id="glasgow-history">Taking history beyond the classroom</h3>
            <p class="experience-card-programme">University of Glasgow · History of Christianity in Scotland</p>
            <p class="experience-card-profile">History and German studies</p>
          </header>
          <p class="experience-card-story">A history student alternated class days with free days and visited the Isle of Iona on a weekend trip. Conversations in Glasgow felt easier than the student had expected, and free summer festivals offered an accessible way to spend time in the city.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Look up free local events and check whether excursions connect to the topics you will study.</p>
          </details>
          <!-- Original account: University of Zurich (https://www.int.uzh.ch/en/out/short-programs/summer-winter-schools/testimonial.html) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="South Korea" aria-labelledby="hanyang-global-health">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> South Korea</p>
            <h3 id="hanyang-global-health">Public health through classmates’ perspectives</h3>
            <p class="experience-card-programme">Hanyang University · Hanyang Winter School</p>
          </header>
          <p class="experience-card-story">A student interested in public health valued the cross-cultural discussions in class. Student ambassadors helped the visiting group get around Seoul and ran optional evening activities. The short format also made the trip possible around family responsibilities.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Ask how long you would be away and what arrival and on-campus support is available.</p>
          </details>
          <!-- Original account: Deakin University (https://www.deakin.edu.au/students/study-support/study-abroad/student-testimonials/south-korea-belinda) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="Germany" aria-labelledby="braunschweig-german">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> Germany</p>
            <h3 id="braunschweig-german">Making room for German in an engineering degree</h3>
            <p class="experience-card-programme">TU Braunschweig · Summer school</p>
            <p class="experience-card-profile">Environmental engineering · 2024</p>
          </header>
          <p class="experience-card-story">An environmental engineering student spent two months in Braunschweig pursuing an interest in German. The student credited time with classmates from different countries, trips in the region and using the language day to day with making the summer valuable.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>If your degree schedule is crowded, check whether a summer course and home-university funding can make language study possible.</p>
          </details>
          <!-- Original account: Northwestern University (https://german.northwestern.edu/study-abroad/study-abroad-student-experiences.html) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="Germany" aria-labelledby="berlin-winter-city">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> Germany</p>
            <h3 id="berlin-winter-city">Reading Berlin through its neighbourhoods</h3>
            <p class="experience-card-programme">Humboldt University of Berlin · Winter University</p>
            <p class="experience-card-profile">Commerce</p>
          </header>
          <p class="experience-card-story">A commerce student took an urban development course that paired lectures with neighbourhood visits and also explored historical museums. Speaking up in small English-language classes built confidence. The intensive schedule also made the student rethink how to organise study time.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Set aside time to review your notes during an intensive course, especially if it includes frequent field visits.</p>
          </details>
          <!-- Original account: University of Queensland (https://employability.uq.edu.au/story/10369/tao-humboldt-winter-university) -->
        </article>
        <article class="experience-card" data-story-type="language" data-story-country="Costa Rica" aria-labelledby="heredia-spanish">
          <header>
            <p class="experience-card-meta"><span>Language programme</span> Costa Rica</p>
            <h3 id="heredia-spanish">Catching the rhythm of everyday Spanish</h3>
            <p class="experience-card-programme">USAC · Summer programme in Heredia</p>
            <p class="experience-card-profile">Spanish and entrepreneurship · 2023</p>
          </header>
          <p class="experience-card-story">A student arrived in Costa Rica on a first overseas trip and found everyday Spanish hard to follow at first. Living with a host family provided a quieter place to settle in, while a group hike gave another way to connect with classmates. By the end, the student could follow and take part in conversations with less hesitation.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Ask speakers to repeat themselves when needed. Notice how much easier familiar conversations become over time.</p>
          </details>
          <!-- Original account: University of Tennessee at Chattanooga (https://blog.utc.edu/center-global-education/2023/09/13/my-study-abroad-experience-in-costa-rica-2/) -->
        </article>
        <article class="experience-card" data-story-type="summer" data-story-country="United Kingdom" aria-labelledby="birmingham-heritage">
          <header>
            <p class="experience-card-meta"><span>Summer school</span> United Kingdom</p>
            <h3 id="birmingham-heritage">Learning British heritage beyond campus</h3>
            <p class="experience-card-programme">University of Birmingham · British Culture and Heritage</p>
            <p class="experience-card-profile">English language and literature</p>
          </header>
          <p class="experience-card-story">A student combined campus lectures with guided visits to places such as Oxford, Cambridge and Liverpool. Staff and student ambassadors helped the group navigate the busy schedule. The mix of classroom teaching and travel made the subject easier to connect with places and people.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>Review the timetable and credit information, and ask which visits are included before budgeting.</p>
          </details>
          <!-- Original account: University of Zurich (https://www.int.uzh.ch/en/out/short-programs/summer-winter-schools/testimonial.html) -->
        </article>
        <article class="experience-card" data-story-type="winter" data-story-country="Germany" aria-labelledby="tubingen-graduate-study">
          <header>
            <p class="experience-card-meta"><span>Winter school</span> Germany</p>
            <h3 id="tubingen-graduate-study">Trying a university before applying for graduate study</h3>
            <p class="experience-card-programme">University of Tübingen · International and European Studies Winter School</p>
          </header>
          <p class="experience-card-story">A student used the winter school to see whether Tübingen might be a good place for graduate study. Courses on European politics and economics offered a sense of the academic environment. Exploring the region, practising German and getting to know the buddy network helped the student picture daily life there.</p>
          <details class="experience-card-tip">
            <summary>Practical tip</summary>
            <p>If you are considering further study, use a short programme to ask current students what studying and living there is like.</p>
          </details>
          <!-- Original account: University of Tübingen (https://uni-tuebingen.de/international/studierende-aus-dem-ausland/virtuelle-und-kurzzeit-programme/international-european-studies/alumni-voices/) -->
        </article>
      </div>
    </section>

    <section class="experience-share" id="experience-share" aria-labelledby="experience-share-title">
      <div class="experience-share-copy">
        <h2 id="experience-share-title">Share your experience</h2>
        <p>Have you participated in a short-term programme? Share what you learned with the Short-Term Study Abroad Office and help the next student prepare.</p>
        <div class="experience-share-actions">
          <a class="experience-button" href="mailto:shortterm@aydin.edu.tr?subject=Student%20experience%20submission">Email the office <span aria-hidden="true">↗</span></a>
          <a href="contact.html">Office contact details</a>
        </div>
      </div>
      <details class="experience-submission">
        <summary>What to include</summary>
        <ul>
          <li>Your first name or initials, faculty or department, and graduation year if you want it shared.</li>
          <li>The programme name, host university, country and year. Say whether it was a summer school, winter school or language programme.</li>
          <li>In 150–250 words, describe your academic, cultural and social experience. Include one thing you wish you knew before going and what you took away.</li>
          <li>Optional: one or two photos you have written permission to share.</li>
        </ul>
        <p>The office needs written permission before publishing your story, name, quotes or photos.</p>
      </details>
    </section>
  </article>
</div>

```

## 12. CSS Styles (Student Experiences)

The following styles ensure proper rendering for the Student Experiences hero section, responsive story cards, programme type and country filter toolbar, and progressive enhancement states. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
@font-face {
  font-family: "IAU Experience Sans";
  src: url("../fonts/open-sans-latin.woff2") format("woff2");
  font-weight: 300 800;
  font-display: swap;
}

#study-programs-site .bgGrey .container .row #sag-ana.experience-content {
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none;
}

#study-programs-site .experience-page {
  --ink: #152f43;
  --navy: #102d43;
  --muted: #4a6272;
  --paper: #f8f5ee;
  --gold: #efbd73;
  --line: #dce5e9;
  --space: clamp(22px, 3.1vw, 42px);
  font: 400 16px/1.65 "IAU Experience Sans", "Segoe UI", sans-serif;
  color: var(--ink);
  overflow-wrap: break-word;
  text-align: left;
}

.experience-page *, .experience-page *::before, .experience-page *::after { box-sizing: border-box; }
.experience-page [id] { scroll-margin-top: 24px; }

#study-programs-site .experience-page :is(h1, h2, h3, h4, p) {
  margin: 0;
  color: inherit;
  font-family: inherit;
}

#study-programs-site .experience-page :is(h1, h2, h3) {
  font-weight: 750;
  letter-spacing: -.045em;
  line-height: 1.09;
}

#study-programs-site .experience-page h1 { font-size: clamp(40px, 5.2vw, 70px); }
#study-programs-site .experience-page h2 { font-size: clamp(30px, 3.3vw, 42px); }
#study-programs-site .experience-page h3 { font-size: clamp(26px, 3vw, 38px); }
#study-programs-site .experience-page h4 { font-size: 16px; font-weight: 750; line-height: 1.4; }
#study-programs-site .experience-page a { color: #19516e; text-underline-offset: 4px; text-decoration: underline; }
#study-programs-site .experience-page :is(a, summary):focus-visible { outline: 3px solid #b36c1f; outline-offset: 4px; }

.experience-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.28fr) minmax(0, 1fr);
  min-height: 386px;
  border-radius: 14px;
  overflow: hidden;
  background: var(--navy);
  color: #fff;
}

.experience-hero-copy { align-self: center; padding: var(--space); }
#study-programs-site .experience-hero-copy p { margin-top: 20px; color: #e3edf2; max-width: 37ch; }
.experience-hero-image { display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; object-position: center 61%; }
.experience-hero-actions, .experience-share-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 20px; margin-top: 22px; }
#study-programs-site .experience-hero-actions a { color: #fff; font-weight: 650; }
#study-programs-site .experience-page a.experience-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 46px;
  padding: 9px 15px;
  border-radius: 6px;
  background: var(--gold);
  color: #172b36;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
}
#study-programs-site .experience-page a.experience-button:hover { background: #ffcf8c; }

.experience-stories { margin-block: clamp(36px, 5vw, 64px); }
.experience-section-heading { max-width: 61ch; margin-bottom: 24px; }
#study-programs-site .experience-section-heading p { margin-top: 12px; color: var(--muted); }

.experience-share {
  margin-bottom: 22px;
  padding: var(--space);
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #eaf2f6;
}
#study-programs-site .experience-share-copy p { margin-top: 12px; max-width: 62ch; color: var(--muted); }
#study-programs-site .experience-share-actions > a { font-size: 14px; font-weight: 700; }
#study-programs-site .experience-share-actions a.experience-button { background: var(--navy); color: #fff; }
#study-programs-site .experience-share-actions a.experience-button:hover { background: #23516e; }
.experience-submission { margin-top: 24px; border-top: 1px solid #cbdce5; }
.experience-submission summary { cursor: pointer; padding-block: 12px; font-weight: 750; }
.experience-submission ul { margin: 0 0 14px; padding-left: 22px; list-style: disc; }
.experience-submission li + li { margin-top: 7px; }
#study-programs-site .experience-submission p { color: var(--muted); font-size: 14px; }

@media (max-width: 767px) {
  .experience-hero { grid-template-columns: minmax(0, 1fr); min-height: 0; }
  .experience-hero-image { height: clamp(190px, 54vw, 340px); object-position: center 70%; }
}

@media (min-width: 768px) and (max-width: 1199px) {
  #study-programs-site .experience-page h1 { font-size: clamp(38px, 5.5vw, 55px); }
}
.experience-submission summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.experience-submission summary::after {
  content: "";
  flex: 0 0 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
}
.experience-submission[open] summary::after { transform: rotate(225deg); }

/* Story collection and filters. */
#study-programs-site .experience-page [hidden] { display: none !important; }

.experience-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #f5f8fa;
}
.experience-filters label { flex: 1 1 175px; margin: 0; color: var(--ink); font-size: 14px; font-weight: 750; }
.experience-filters select, .experience-filters button {
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid #a9bcc7;
  border-radius: 6px;
  background: #fff;
  color: var(--ink);
  font: inherit;
}
.experience-filters select { display: block; width: 100%; margin-top: 5px; font-weight: 600; }
.experience-filters button { cursor: pointer; font-size: 14px; font-weight: 750; }
.experience-filters button:hover { background: #eaf2f6; }
.experience-filters :is(select, button):focus-visible { outline: 3px solid #b36c1f; outline-offset: 3px; }

#study-programs-site .experience-page .experience-result-count { margin: 14px 0; color: var(--muted); font-size: 14px; font-weight: 700; }
#study-programs-site .experience-page .experience-no-results { padding: 22px; border-radius: 8px; background: #fff; }

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 16px;
}
.experience-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: clamp(17px, 2vw, 25px);
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
}
#study-programs-site .experience-card h3 { margin-top: 10px; font-size: clamp(23px, 2vw, 29px); line-height: 1.16; }
#study-programs-site .experience-page .experience-card-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 5px 10px; color: var(--muted); font-size: 13px; font-weight: 700; }
.experience-card-meta span { padding: 3px 8px; border-radius: 4px; background: #f7ead6; color: #63420f; }
.experience-card[data-story-type="winter"] .experience-card-meta span { background: #e8f1f8; color: #204c6e; }
.experience-card[data-story-type="language"] .experience-card-meta span { background: #e8f2ea; color: #225643; }
#study-programs-site .experience-page .experience-card-programme { margin-top: 10px; color: var(--ink); font-size: 14px; font-weight: 700; }
#study-programs-site .experience-page .experience-card-profile { margin-top: 4px; color: var(--muted); font-size: 13px; }
#study-programs-site .experience-page .experience-card-story { margin-top: 15px; font-size: 15px; line-height: 1.65; }

.experience-card-tip { margin-top: 15px; border-radius: 7px; background: var(--paper); }
.experience-card-tip summary { display: flex; justify-content: space-between; align-items: center; min-height: 44px; gap: 12px; padding: 8px 12px; cursor: pointer; font-size: 14px; font-weight: 750; }
.experience-card-tip summary::after { content: ""; flex: 0 0 7px; height: 7px; border-right: 2px solid; border-bottom: 2px solid; transform: rotate(45deg); }
#study-programs-site .experience-page .experience-card-tip summary:focus-visible { outline-offset: -3px; }
.experience-card-tip[open] summary::after { transform: rotate(225deg); }
#study-programs-site .experience-page .experience-card-tip p { padding: 0 12px 12px; font-size: 14px; }

@media (max-width: 680px) {
  .experience-grid { grid-template-columns: minmax(0, 1fr); }
}

```
