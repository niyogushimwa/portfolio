# Visibility & Discovery Guide

How to make this portfolio (and your skills) easier to find on Google, LinkedIn and GitHub.

The site is already technically optimized — this guide covers the steps only you can do,
because they require your own accounts.

---

## 1. What is already done

| Item | Status |
| --- | --- |
| Modern responsive portfolio | Live at https://remyportfolio.vercel.app/ |
| Hosting | **Vercel** (primary) + GitHub Pages (mirror) |
| SEO title, description and keywords | Added |
| Open Graph + Twitter card preview | Added (`assets/img/og-cover.jpg`) |
| Structured data (Person, WebSite, FAQ) | Added |
| `robots.txt` + `sitemap.xml` | Added |
| Custom 404 page | Added |
| Project READMEs (portfolio + SkillNest) | Added |
| Search engine submission (IndexNow / Bing) | Submitted |
| GitHub repo description, website link and topics | Added |
| GitHub profile README with portfolio banner | Added |
| Print-ready one-page CV (PDF) | Added and linked |

---

## 2. Google Search Console (do this first)

Google needs to know the site exists. This is free and takes about 10 minutes.

> A property was already verified for the GitHub Pages mirror. Because the site now lives on
> Vercel, add a **second** property for `https://remyportfolio.vercel.app/` — the verification
> code is unique to each property, so the old one will not carry over.

1. Go to https://search.google.com/search-console
2. Sign in with `niyogushimwaremy@gmail.com`.
3. Click **Add property** → choose **URL prefix**.
4. Enter: `https://remyportfolio.vercel.app/`
5. Choose **HTML tag** verification.
6. Copy the meta tag Google gives you, for example:

   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```

7. Add it inside the `<head>` of `index.html` (next to the other `<meta>` tags),
   commit and push — or send the code to a developer to add it.
8. Return to Search Console and click **Verify**.
9. Open **Sitemaps**, enter `sitemap.xml`, and submit.
10. Use **URL Inspection** → paste the portfolio URL → **Request indexing**.

Indexing usually takes a few days to a few weeks. It is not instant.

### Bing / DuckDuckGo

1. Go to https://www.bing.com/webmasters
2. Sign in and choose **Import from Google Search Console**.
3. Submit the same sitemap.

---

## 3. LinkedIn (most important for jobs)

> **Full copy-paste kit:** [`docs/LINKEDIN-KIT.md`](LINKEDIN-KIT.md) — headline, About section,
> skills, projects, launch post and a ready-to-upload banner
> (`docs/assets/linkedin-banner.png`).

Your LinkedIn URL is currently:

`https://www.linkedin.com/in/remy-niyogushimwa-7033a5377`

### 3.1 Customize your public URL

LinkedIn → **Me** → **Settings & Privacy** → **Visibility** → **Edit your public profile** →
**Edit custom URL** → change it to something like:

`linkedin.com/in/remy-niyogushimwa`

Then update the portfolio link if the URL changes.

### 3.2 Headline

Replace the current headline with:

> **Software Development Student at University of Rwanda | Web Design • HTML/CSS/JavaScript • Adobe Creative Suite • Translation Tools**

### 3.3 About section

Paste and adapt this:

> I am a software development student at the University of Rwanda, currently completing a
> Bachelor of Business Information Technology (BIT), with an A2 certificate in Software
> Development from APEKI Tumba TSS.
>
> I build clean, responsive websites with HTML, CSS and JavaScript, and I practise programming
> in C++ and Python. Alongside code, I work with Adobe Photoshop, Illustrator and InDesign,
> and with translation tools such as OmegaT, Lara Translate and SYSTRAN — which helps me think
> about both how a product works and how it feels to use.
>
> I am organised, detail-focused and always learning through real projects. I am open to
> internships, junior web development roles, digital design work, translation support and
> collaboration.
>
> Portfolio: https://remyportfolio.vercel.app/
> GitHub: https://github.com/niyogushimwa
> Email: niyogushimwaremy@gmail.com

### 3.4 Skills to add

LinkedIn allows up to 50 skills. Add the ones that match the jobs you want, for example:

HTML · CSS · JavaScript · Python · C++ · Responsive Web Design · Web Development ·
Adobe Photoshop · Adobe Illustrator · Adobe InDesign · Graphic Design · Layout ·
Microsoft Office · Translation · Proofreading · Kinyarwanda · English · Git · GitHub ·
Problem Solving · Attention to Detail · Communication

Ask 3–5 classmates, teachers or colleagues to **endorse** the top skills.

### 3.5 Featured section

Add a **Featured** item linking to your portfolio, and one linking to SkillNest.
Use the portfolio's social preview image when LinkedIn asks for a thumbnail.

### 3.6 Projects section

Add two projects:

1. **Personal Portfolio Website** — link to the live site and GitHub repo.
2. **SkillNest** — link to the GitHub repo; describe it as a concept/in development.

### 3.7 Open to work

Turn on **Open to work** for:
- Software Engineer Intern
- Frontend Developer Intern
- Web Developer (Entry level)
- Graphic Designer (Entry level)
- IT Support (Entry level)

Choose "Recruiters only" if you prefer not to show the green banner publicly.

### 3.8 Launch post (copy this)

> 🚀 I just rebuilt my portfolio from scratch.
>
> It brings together what I am learning at the University of Rwanda (BIT), my A2 in Software
> Development, and the design and translation tools I use alongside code.
>
> What is inside:
> • Responsive HTML, CSS and JavaScript
> • Dark and light themes
> • A one-page CV you can download
> • SkillNest — a marketplace concept for students
>
> I am open to internships and junior opportunities in web development, design and IT support.
>
> 👉 https://remyportfolio.vercel.app/
>
> #WebDevelopment #HTML #CSS #JavaScript #Rwanda #OpenToWork #SoftwareDevelopment

---

## 4. GitHub profile

Done already:
- Profile README with portfolio banner
- Portfolio repository description, website and topics
- SkillNest README and topics

Still worth doing manually:
1. **Pin** the `portfolio` and `SkillNest` repositories on your profile.
2. Add a bio and location in **Settings → Public profile**:
   - Bio: `Software Development Student @ University of Rwanda | Web design, programming & translation tools | Huye, Rwanda`
   - Location: `Huye, Rwanda`
   - Website: `https://remyportfolio.vercel.app/`
3. Keep commit messages meaningful (`Add mobile navigation`, not `update`).
4. Add a README to every repository you want people to look at.

> The bio update needs the GitHub CLI `user` scope. Run
> `gh auth refresh -h github.com -s user` in a terminal, approve it in the browser,
> then the bio can be updated from the command line.

---

## 5. Put the link everywhere

Use the same name and the same link consistently:

- LinkedIn headline, About, Featured and Contact info
- GitHub bio and profile README
- Email signature: `Remy Niyogushimwa · Software Development Student · portfolio link`
- CV header (already included)
- WhatsApp Business profile / about
- X, Facebook, Instagram bio
- University class groups, student communities and WhatsApp groups (when appropriate)
- Any application form that asks for a website or portfolio

Consistency helps Google connect the name **Remy Niyogushimwa** with your site.

---

## 6. Earn a few backlinks

Search engines trust pages that other sites link to.

- Ask your university or a student club to list your portfolio on their website.
- Write a short post on **Dev.to**, **Hashnode** or **Medium** about building this portfolio,
  then link back to it.
- Share project updates on LinkedIn with the live link.
- Comment thoughtfully on other developers' posts (without spamming links).
- Add the link to your GitHub repository homepages.

---

## 7. Content that ranks for your skills

Google needs pages that answer search queries. Over time, add short project write-ups:

- "How I built my portfolio with HTML, CSS and JavaScript"
- "Designing SkillNest: a marketplace for student skills in Rwanda"
- "What I learned from my A2 Software Development studies"
- "Using OmegaT and SYSTRAN for Kinyarwanda–English translation"

Each post should target one clear topic and link back to the portfolio. This is how people
searching for "web developer in Huye", "student software developer Rwanda" or
"Kinyarwanda translation tools" can find you.

---

## 8. Optional upgrades

- **Custom domain** (for example `remy.dev` or `niyogushimwa.com`): looks more professional
  and is easier to remember. Connect it in GitHub Pages settings.
- **Privacy-friendly analytics** (GoatCounter, Plausible): see which projects visitors open.
- **Google Analytics 4**: only if you are comfortable adding a cookie notice.
- **Testimonials**: add real quotes from teachers, clients or collaborators once you have them.
- **More projects**: three strong, documented projects beat ten empty repositories.

---

## 9. 30-day plan

| Week | Action |
| --- | --- |
| Week 1 | Submit to Google Search Console + Bing; update LinkedIn headline, About and skills |
| Week 2 | Add Featured + Projects on LinkedIn; publish the launch post |
| Week 3 | Pin GitHub repos; ask for 3–5 skill endorsements and 1 recommendation |
| Week 4 | Publish one short project write-up and link it from LinkedIn and GitHub |

Re-check Search Console after two weeks. If the page is not indexed, use
**URL Inspection → Request indexing** again.

---

## Keywords the site targets

Remy Niyogushimwa · software development student Rwanda · web designer Huye ·
BIT University of Rwanda · junior web developer Rwanda · HTML CSS JavaScript portfolio ·
Adobe Photoshop Illustrator InDesign · Kinyarwanda translation tools · student portfolio Rwanda
