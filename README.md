# Remy Niyogushimwa — Portfolio

A modern, responsive personal portfolio for **Remy Niyogushimwa**, a software development
student at the University of Rwanda and an A2 Software Development graduate based in
Huye, Rwanda.

**Live site:** https://remyportfolio.vercel.app/

[![Live site](https://img.shields.io/badge/live-portfolio-38bdf8?style=flat-square&logo=vercel&logoColor=white)](https://remyportfolio.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

![Portfolio preview](assets/img/og-cover.jpg)

## About

This site brings together my real background in software development, digital design and
translation technology — without invented job titles or fake experience.

- BIT student at the **University of Rwanda**
- A2 Certificate in **Software Development** (APEKI Tumba TSS, 2019–2023)
- Builds small, responsive websites with **HTML, CSS and JavaScript**
- Practices **C++ and Python**
- Works with **Adobe Photoshop, Illustrator, InDesign** and **FrameMaker**
- Uses translation tools such as **OmegaT, Lara Translate and SYSTRAN**
- Speaks **Kinyarwanda** and **English**

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Dark and light themes with saved preference
- Accessible navigation, skip link, focus styles and reduced-motion support
- Scroll reveal animations and an active-section navigation indicator
- Typewriter role animation
- SEO metadata, Open Graph / Twitter cards, JSON-LD (Person, WebSite, FAQPage)
- `robots.txt`, `sitemap.xml`, web manifest and custom 404 page
- No frameworks or build step — fast, static and easy to maintain

## Tech stack

| Layer | Tools |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | Modern CSS (custom properties, grid, flexbox, clamp) |
| Behaviour | Vanilla JavaScript (ES5-safe syntax) |
| Type | Inter + Space Grotesk (Google Fonts) |
| Hosting | GitHub Pages |

## Project structure

```text
.
├── index.html                  # Main page
├── 404.html                    # Custom not-found page
├── assets/
│   ├── css/styles.css          # Design system and responsive styles
│   ├── js/main.js              # Theme, menu, scroll spy, animations
│   ├── img/                    # Portrait, favicon, social preview
│   └── files/                  # Downloadable CV
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── .nojekyll                   # Allows GitHub Pages to serve files as-is
```

## Run locally

No installation is required. Open `index.html` directly, or serve the folder:

```bash
# Option 1: Python
python -m http.server 8080

# Option 2: Node.js
npx serve .
```

Then visit <http://localhost:8080>.

## Deployment

**Vercel** is the primary host — https://remyportfolio.vercel.app/

1. Push changes to `main` on GitHub.
2. Vercel picks up the push and redeploys automatically.
3. GitHub Pages also rebuilds from `main` (root folder) as a mirror at
   <https://niyogushimwa.github.io/portfolio/>.

The canonical URL, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt` all point to the
Vercel domain, so search engines index a single canonical address.

## Getting found

A practical checklist for Google, Bing, LinkedIn and GitHub lives in
[`docs/VISIBILITY.md`](docs/VISIBILITY.md) — including Search Console setup, LinkedIn copy,
keywords and a 30-day plan.

## Contact

- **Email:** [niyogushimwaremy@gmail.com](mailto:niyogushimwaremy@gmail.com)
- **LinkedIn:** [remy-niyogushimwa-7033a5377](https://www.linkedin.com/in/remy-niyogushimwa-7033a5377)
- **GitHub:** [@niyogushimwa](https://github.com/niyogushimwa)
- **Location:** Huye, Rwanda

---

© 2026 Remy Niyogushimwa. Built with HTML, CSS and JavaScript.
