# DonatJS LMS

![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-ES6%2B-yellow)
![Zero Dependency](https://img.shields.io/badge/Zero-Dependency-green)
![No Build Step](https://img.shields.io/badge/No--Build-Step-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey)
![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.XXXXXXXX-blue)

A minimalist client-side router and UI engine that transforms structured JSON data into dynamic web interfaces — with zero dependencies and no build step required.

Designed for high-efficiency delivery in resource-constrained environments, DonatJS LMS renders structured page data declaratively through a modular component system, eliminating the overhead of modern frontend toolchains.

---

## Key Features

- **JSON-Driven Architecture** — All layout and content are defined as plain JavaScript objects (`pages.*`). No templates, no JSX, no DSL.
- **Zero-Dependency Runtime** — No Node.js, Webpack, Babel, or any external library required. Runs in any ES6+ browser.
- **No-Build Step** — Drop `script.js` into a directory, define your data, open in browser. Done.
- **Micro Routing System** — Query-string-based SPA routing with automatic content resolution and History API support.
- **Modular Page Loader** — `loadPageScripts()` dynamically loads page modules (`home.js`, `learn.js`, `kuis.js`, `cert.js`) and merges them into the global `pages` registry.
- **Integrated Quiz Engine** — Password-protected quiz module with `btoa`-encoded answer keys, passing grade enforcement, and start-time gating.
- **Certificate Verifier** — Credential lookup system with unique ID validation (`SLS-YYYY-NNN` format).
- **Structured Learning Modules** — Supports `skill:`, `step:`, `card:`, and `table:` inline directives for rich learning content rendering.

---

## Prerequisites & Installation

**No runtime dependencies.** Only a modern browser supporting ES6+ is required.

1. Copy `script.js` and `svg.js` to your project directory (or reference via CDN).
2. Create your page data files (e.g., `home.js`, `learn.js`).
3. Create `dataset.js` with the `loadPageScripts()` loader.
4. Create `pages/index.js` with your `pageFiles` manifest.
5. Include the scripts in your HTML before the closing `</body>` tag:

```html
<script src="pages/index.js"></script>
<script src="dataset.js"></script>
```

---

## Quick Start

Define a minimal page in `home.js`:

```javascript
pages.home = [
    {
        section: 'titleHero',
        title: 'Halo Dunia',
        description: 'Ini adalah konten berbasis JSON-driven.'
    }
];
```

In `pages/index.js`, declare which modules to load:

```javascript
const pageFiles = ['home', 'learn', 'kuis', 'cert'];
```

In `dataset.js`, define the loader:

```javascript
const pages = {};

function loadPageScripts(files, callback) {
    let loaded = 0;
    files.forEach(name => {
        const script = document.createElement('script');
        script.src = `pages/${name}.js`;
        script.onload = () => {
            loaded++;
            if (loaded === files.length) callback();
        };
        document.head.appendChild(script);
    });
}
```

Then in your HTML:

```javascript
loadPageScripts(pageFiles, () => {
    renderMenu();
});
```

---

## Usage

### Page Section Types

| Section type | Purpose |
|---|---|
| `hero` | Full-width hero with title, tagline, badges, and CTA |
| `titleHero` | Centered section heading |
| `features` | Icon + title + content cards |
| `article` | Two-column split layout (`leftCol` / `rightCol`) |

### Inline Directives (inside `lines` arrays)

```
skill:84%:Label:Tag          → Skill progress bar
card:Title:Description       → Feature card
step:year:Label:Detail       → Timeline step
table:[{...}]                → Rendered data table
form:quiz                    → Protected quiz form
form:validate-cert           → Certificate lookup form
```

### Quiz Module

```javascript
pages.kuis = [
    {
        section: 'article',
        rightCol: {
            lines: ['form:quiz'],
            startTime: '2026-05-12T08:00:00',
            password: 'YourPassword',
            questions: [
                {
                    q: 'Question text?',
                    options: ['A', 'B', 'C', 'D'],
                    ans: btoa('B')   // base64-encoded correct answer
                }
            ]
        }
    }
];
```

### Certificate Registry

```javascript
pages.certificates = {
    'SLS-2026-001': {
        name: 'Full Name',
        exam: 'Exam Title',
        score: '98/100',
        date: '19 April 2026'
    }
};
```

---

## How to Cite

```bibtex
@software{sismadi_donatjs_2026,
  author       = {Sismadi, Wawan},
  title        = {{DonatJS LMS: Minimalist Client-Side Router \& UI Engine}},
  year         = {2026},
  publisher    = {Zenodo},
  doi          = {10.5281/zenodo.XXXXXXXX},
  url          = {https://doi.org/10.5281/zenodo.XXXXXXXX},
  note         = {Zero-dependency, JSON-driven micro-framework for structured web portal rendering}
}
```
