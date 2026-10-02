# Integration Guide for Short Term Study Programs

This guide contains the necessary HTML and CSS to integrate the Short Term Study Programs page content into the main university website structure. 

## 1. HTML Content

Copy the HTML block below and paste it into the designated content area of the university website. This block contains the entire layout for the Short Term Study Programs, structured within the main wrapper (`<div id="sag-ana" class="home-content">`).

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

## 2. CSS Styles (Reset/Base overrides)

The following styles ensure consistent rendering and remove default browser margins/paddings before applying the custom theme. Add these to the site's stylesheet, or include them within a `<style>` block in the `<head>` of the target page.

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

div#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv {
  border: none;
}

input#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox {
  width: 165vh;
  height: 100px;
  font-size: 15pt;
  color: #fff;
  text-shadow: none;
}

a#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_SearchLink {
  display: none;
}

a.cd-search-trigger.cd-text-replace.search-form-visible {
  display: none;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
caption, tbody, tfoot, thead, tr, th,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```
