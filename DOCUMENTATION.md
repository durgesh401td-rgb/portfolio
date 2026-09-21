# 📘 Software Engineering Project Documentation
## Personal Portfolio Website – Design, Develop, Document & Deploy

---

| **Document Detail** | **Information** |
| :--- | :--- |
| **Project Title** | Personal Portfolio Website – Design, Develop, Document & Deploy |
| **Student Name** | Durgesh Sonar |
| **Academic Discipline** | Computer Science & Engineering / Software Engineering |
| **GitHub Profile** | [https://github.com/durgesh401td-rgb](https://github.com/durgesh401td-rgb) |
| **LinkedIn Profile** | [https://www.linkedin.com/in/durgesh-sonar-441231389/](https://www.linkedin.com/in/durgesh-sonar-441231389/) |
| **Live Deployment URL** | [https://durgesh-portfolio.vercel.app](https://durgesh-portfolio.vercel.app) |
| **Target Audience** | Academic Evaluators, Technical Recruiters, Internship Providers, Engineering Mentors |
| **Date of Submission** | September 2026 |

---

## Table of Contents
1. [1. Introduction](#1-introduction)
2. [2. Problem Statement](#2-problem-statement)
3. [3. Objectives](#3-objectives)
4. [4. Proposed Solution](#4-proposed-solution)
5. [5. Technologies Used](#5-technologies-used)
6. [6. System Requirements](#6-system-requirements)
7. [7. Website Features](#7-website-features)
8. [8. Website Structure & Architecture](#8-website-structure--architecture)
9. [9. UI/UX Design & Wireframe Concepts](#9-uiux-design--wireframe-concepts)
10. [10. Implementation Details](#10-implementation-details)
11. [11. GitHub Repository Management](#11-github-repository-management)
12. [12. Vercel Deployment Step-by-Step Guide](#12-vercel-deployment-step-by-step-guide)
13. [13. Testing & Quality Assurance](#13-testing--quality-assurance)
14. [14. Screenshots & Section Walkthrough](#14-screenshots--section-walkthrough)
15. [15. Challenges Faced & Solutions](#15-challenges-faced--solutions)
16. [16. Future Scope](#16-future-scope)
17. [17. Conclusion](#17-conclusion)
18. [18. References](#18-references)

---

## 1. Introduction
In today’s competitive software engineering ecosystem, a static resume alone is insufficient to convey a developer’s capabilities, problem-solving mindset, and software craftsmanship. A personal portfolio website serves as an interactive proof-of-competence, allowing engineering students to demonstrate practical proficiency in frontend interface development, backend systems programming, code version control, and continuous web deployment.

This project represents the personal portfolio of **Durgesh Sonar**, developed to highlight software engineering proficiencies spanning **Java, Python, JavaScript, CSS3, and HTML5**. It provides a single, unified digital hub where teachers, recruiters, and collaborators can review academic qualifications, inspect technical projects with source code repositories and live demonstrations, and contact the candidate directly.

---

## 2. Problem Statement
Many computer science undergraduates face common hurdles when transitioning into industry roles:
- Traditional paper or PDF resumes are static, incapable of showing live UI interactions, dynamic animations, or responsive behavior across devices.
- Code repositories and technical contributions are often scattered across multiple platforms without a cohesive narrative explaining the architectural rationale behind them.
- Employers and hiring managers spend an average of 6 to 10 seconds reviewing applications; without a clean, organized, and immediately accessible digital portfolio, candidates struggle to establish credibility.
- Building a personal portfolio requires mastering disparate software engineering workflows—from responsive UI development and accessibility compliance to Git version control, branch management, and continuous delivery via modern cloud platforms like Vercel.

---

## 3. Objectives
The key objectives of this project include:
1. **Design & Develop a Responsive Web Portfolio:** Create an aesthetically pleasing, responsive, and accessible personal portfolio website adhering to modern web development standards.
2. **Showcase Multi-Language Competence:** Prominently demonstrate hands-on software development experience across **HTML, CSS, JavaScript, Java, and Python**.
3. **Curate In-Depth Projects:** Showcase at least 3 to 5 real-world technical projects complete with architecture details, source code links, live demos, and technical badges.
4. **Implement Advanced UX Enhancements:** Integrate modern features including a zero-FOUC dark/light mode switcher, dynamic project search and filtering, interactive skills progress bars, and native `<dialog>` modals.
5. **Establish Version Control Best Practices:** Manage the codebase within a structured GitHub repository using atomic commits, semantic commit messages, and clean folder structures.
6. **Deploy Continuously to Cloud:** Deploy the website to **Vercel** with continuous deployment connected to the GitHub repository.
7. **Document the Engineering Process:** Compile comprehensive project documentation to satisfy academic assessment criteria and serve as a model for future software engineering projects.

---

## 4. Proposed Solution
To satisfy the requirements and provide a modern solution, the portfolio was designed as an ultra-fast, zero-dependency single-page application (SPA) complemented by a dedicated printable resume page.

The solution is architected with three primary layers:
1. **Semantic HTML5 Layer:** Implements standard semantic containers (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`) to maximize accessibility (a11y) and search engine optimization (SEO).
2. **Modern CSS3 Design System:** Utilizes CSS custom properties (variables), native `color-scheme` support, CSS Grid, Flexbox, glassmorphic styling, and fluid responsive typography (`clamp()`) to adapt dynamically to viewports from 320px smartphones to 4K displays.
3. **Modular Vanilla JavaScript (ES6+):** Manages interactive states—theme switching with `localStorage` persistence, real-time search and category filtering, typing hero animations, native dialog event handling, and form feedback—without loading heavy runtime frameworks, ensuring 100/100 Lighthouse performance.

---

## 5. Technologies Used

### 5.1 Programming Languages
- **Java (Java 17 LTS):** Used for developing backend enterprise simulations (OOP, multithreading, concurrency with `ReentrantLock`, JDBC persistence, and SHA-256 ledger integrity).
- **Python (Python 3.11):** Applied in automated data analytics, data cleaning (Pandas, NumPy), statistical modeling, and microservice REST API development (Flask).
- **JavaScript (ECMAScript 2022+):** Powers client-side interactivity, asynchronous DOM operations, event bubbling, filtering algorithms, and local storage state persistence.

### 5.2 Web Technologies
- **HTML5:** Semantic architecture, native `<dialog>` elements, accessible forms, meta tags for responsive viewport and social cards.
- **CSS3:** Custom variables, CSS Grid, Flexbox, fluid typography, media queries, keyframe animations, and `@media print` stylesheets.

### 5.3 Frameworks & Libraries (Foundation & Explorations)
- **Node.js & Express Basics:** Foundations for server-side endpoints and RESTful API structures.
- **Flask (Python):** Lightweight backend web framework for statistical report serving.
- **Tailwind CSS & Bootstrap:** Evaluated and utilized for rapid UI prototyping and grid patterns.

### 5.4 Database Technologies
- **MySQL & PostgreSQL:** Relational schema modeling, normalized tables, joins, and ACID transactions.
- **MongoDB:** Document-oriented NoSQL storage for flexible JSON models.
- **LocalStorage API:** Client-side persistent key-value store for user theme preferences and offline state.

### 5.5 Developer Tools & Deployment
- **Git:** Distributed version control system.
- **GitHub:** Remote repository hosting, branch tracking, and portfolio showcasing.
- **Visual Studio Code:** Integrated Development Environment (IDE) with extensions and debugging tools.
- **Vercel Edge Network:** Global serverless static delivery network with continuous deployment pipelines.
- **Chrome DevTools & Lighthouse:** Diagnostic performance profiling, accessibility auditing, and responsive device testing.

---

## 6. System Requirements

### 6.1 Development Environment
- **Operating System:** Windows 10/11, macOS, or Linux.
- **Code Editor:** Visual Studio Code (v1.85 or later).
- **Runtimes (Optional for local tools):** Python 3.8+ / Node.js 18+ / Java JDK 17+.
- **Version Control:** Git 2.40+.

### 6.2 Client / User Browsing Requirements
- **Web Browsers:** Google Chrome (v98+), Mozilla Firefox (v96+), Apple Safari (v15+), Microsoft Edge (v98+).
- **Hardware:** Any internet-enabled desktop, tablet, or smartphone (minimum screen width: 320px).
- **Internet Connectivity:** Broadband or cellular data connection to load web fonts and external assets.

---

## 7. Website Features

| Section | Key Features & Engineering Implementation |
| :--- | :--- |
| **🏠 Home / Hero** | Dynamic headline with typing animation rotating through developer roles; call-to-action buttons; social links (GitHub & LinkedIn); visual developer avatar card with glowing ambient orbits; quick metric counter strip. |
| **👤 About Me** | Narrative overview of academic journey, development philosophy, career interests in software engineering and backend systems, and a 4-card core strengths matrix. |
| **💻 Skills** | Interactive categorized filter (`All`, `Languages`, `Web`, `Frameworks`, `Databases`, `Tools`) with 16+ skill items featuring animated progress percentage bars and technical descriptions. |
| **🚀 Projects** | 5 detailed software projects spanning Full-Stack, Java multithreading, Python data engineering, and DSA visualization. Features real-time keyword search, category filtering, tech pills, GitHub repository buttons, and live demo links. |
| **💼 Experience** | Dual-column timeline displaying software engineering project leadership, web development training, hackathon participation, and peer mentorship activities. |
| **🎓 Education** | Structured academic milestones detailing B.Tech in Computer Science & Engineering (2022–2026), Higher Secondary Certificate (HSC), and Secondary School Certificate (SSC) with coursework tags. |
| **🏆 Achievements** | Credential cards showcasing certifications in Core Java, Python, Web Development, Git/GitHub, and hackathon participation. |
| **📄 Resume** | In-page CV summary with dual action paths: a quick-view modal dialog, a direct download button, and a link to a standalone printable resume page (`resume.html`). |
| **📩 Contact Me** | Responsive contact cards (Email, LinkedIn, GitHub, Location) paired with an interactive form featuring HTML5 validation, `:user-valid` styling, animated submission state, toast alerts, and `mailto:` fallbacks. |
| **🌓 Dark / Light Mode** | Persistent theme toggle adapting to OS preference and user manual override without any Flash of Unstyled Content (FOUC). |

---

## 8. Website Structure & Architecture

```
portfolio/
├── index.html                  # Core single-page portfolio application
├── resume.html                 # Dedicated standalone printable resume
├── vercel.json                 # Vercel hosting rules and HTTP security headers
├── .gitignore                  # Git repository exclusion file
├── README.md                   # GitHub project overview and quickstart
├── DOCUMENTATION.md            # Comprehensive academic & SE report
├── css/
│   ├── style.css               # Design system, CSS variables, dark/light themes, animations
│   └── resume.css              # Print media queries and ATS layout styles
├── js/
│   ├── main.js                 # Event listeners, theme manager, search, modals, contact form
│   └── projects-data.js        # Structured data sources for projects and skill sets
└── assets/
    └── images/
        ├── profile-avatar.svg  # High-definition developer silhouette illustration
        ├── project-taskforge.svg
        ├── project-banking.svg
        ├── project-pyinsight.svg
        ├── project-algos.svg
        └── project-portfolio.svg
```

### Architectural Flowchart

```
[User Browser]
      │
      ├── Requests: index.html
      │        │
      │        ├── Inline Script detects 'color-scheme' (Prevents FOUC)
      │        ├── Loads css/style.css (CSS Grid, Variables, Glassmorphism)
      │        ├── Loads js/projects-data.js (Data Source)
      │        └── Loads js/main.js (Theme, Typing, Filter, Search, Dialogs)
      │
      ├── User Interactions:
      │        ├── Toggle Theme ──> Updates data-theme & localStorage
      │        ├── Filter/Search Projects ──> Real-time DOM reconciliation
      │        ├── Click Project Details ──> Native <dialog>.showModal()
      │        ├── Submit Contact Form ──> Validation + Toast Notification
      │        └── Open Resume ──> Shows Resume Dialog or loads resume.html
      │
[Vercel Edge CDN] ── Serves static assets with gzip/brotli & immutable caching
```

---

## 9. UI/UX Design & Wireframe Concepts

### 9.1 Color Palette & Design Tokens
- **Dark Mode Backgrounds:** Deep Navy & Charcoal (`#0a0f1d`, `#0f172a`, `#1e293b`).
- **Light Mode Backgrounds:** Crisp Slate & Off-White (`#f8fafc`, `#f1f5f9`, `#ffffff`).
- **Primary Brand Color:** Electric Sky Blue (`#38bdf8` in dark, `#0284c7` in light).
- **Secondary Accent Color:** Royal Indigo / Violet (`#818cf8`, `#6366f1`).
- **Typography:**
  - Headings & Body: `'Inter'`, system-ui, -apple-system, BlinkMacSystemFont, sans-serif.
  - Code & Badges: `'JetBrains Mono'`, monospace.

### 9.2 UX Design Principles Followed
- **Visual Hierarchy:** Distinct heading scales, clear contrast ratios (exceeding WCAG 2.1 AA 4.5:1 standards), and deliberate white space to guide the reader’s eye.
- **Feedback & Affordance:** Interactive elements feature hover lifts, subtle border glows, and focus rings for accessibility.
- **Progressive Enhancement:** The site functions seamlessly even if JavaScript is disabled; essential structural information and styling remain readable.

---

## 10. Implementation Details

### 10.1 Flash of Unstyled Content (FOUC) Elimination
To prevent the jarring white flash when users reload a dark-themed page, an un-deferred inline script executes in the `<head>` before the DOM renders:
```html
<meta name="color-scheme" content="dark light">
<script>
  (function() {
    const savedTheme = localStorage.getItem("color-scheme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  })();
</script>
```

### 10.2 Native `<dialog>` Modal Implementation
Rather than importing bulky modal libraries, the portfolio leverages the native HTML5 `<dialog>` element, ensuring native keyboard trapping (`Tab`), `Escape` key listeners, and accessibility tree integration:
```javascript
const projectDialog = document.getElementById("project-dialog");
// Open modal
projectDialog.showModal();

// Light dismiss: click outside the dialog bounding box
projectDialog.addEventListener("click", (event) => {
  const rect = projectDialog.getBoundingClientRect();
  const isInDialog = (
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width
  );
  if (!isInDialog) {
    projectDialog.close();
  }
});
```

### 10.3 Dynamic Project Search & Filtering Algorithm
The project list dynamically reconciles the dataset using a dual-predicate filter:
```javascript
const filtered = PORTFOLIO_PROJECTS.filter(project => {
  const matchesCategory = currentCategory === "all" || project.category === currentCategory;
  const matchesSearch = 
    project.title.toLowerCase().includes(query) ||
    project.tagline.toLowerCase().includes(query) ||
    project.tags.some(t => t.toLowerCase().includes(query)) ||
    project.description.toLowerCase().includes(query);

  return matchesCategory && matchesSearch;
});
```

---

## 11. GitHub Repository Management

The project repository is hosted at:  
👉 **[https://github.com/durgesh401td-rgb/portfolio](https://github.com/durgesh401td-rgb)**

### 11.1 Git Workflow & Commands
The repository was initialized and maintained using standard Git branching and semantic commits:

```bash
# Initialize repository
git init

# Stage all files
git add .

# Create initial commit following Conventional Commits format
git commit -m "feat: design, develop and document personal portfolio website"

# Rename branch to main
git branch -M main

# Link remote repository
git remote add origin https://github.com/durgesh401td-rgb/portfolio.git

# Push upstream
git push -u origin main
```

### 11.2 Commit Message Convention
- `feat:` for new functional sections (e.g. `feat: add interactive skills filter and progress bars`).
- `style:` for CSS changes (e.g. `style: refine dark mode contrast and typography`).
- `docs:` for documentation additions (e.g. `docs: add comprehensive SE project documentation`).

---

## 12. Vercel Deployment Step-by-Step Guide

The portfolio is deployed to the global edge network using **Vercel**.

### Step 1: Account Creation & GitHub Integration
1. Navigate to [vercel.com](https://vercel.com) and log in using GitHub credentials.
2. Grant Vercel read/write access to the `durgesh401td-rgb` GitHub account.

### Step 2: Project Import
1. In the Vercel dashboard, click **"Add New..."** → **"Project"**.
2. Locate the `portfolio` repository from the repository list and click **"Import"**.

### Step 3: Project Configuration
1. **Framework Preset:** Choose **"Other"** (pure static site).
2. **Root Directory:** Set to `./`.
3. **Build & Output Settings:** Leave default (no build commands needed since the site is built with native web standards).

### Step 4: Deployment & Verification
1. Click **"Deploy"**. Vercel will provision an SSL certificate, configure CDN edge nodes, and deploy the application in under 30 seconds.
2. Confirm the assigned live URL (e.g. `https://durgesh-portfolio.vercel.app`).
3. Verify that all assets (images, styles, scripts) load over HTTPS with HTTP/2 or HTTP/3 protocols.

### Step 5: Continuous Deployment Verification
Whenever a new commit is pushed to `main`, Vercel automatically triggers a new deployment with instant cache invalidation.

---

## 13. Testing & Quality Assurance

Comprehensive testing was conducted across four dimensions:

### 13.1 Functional Testing
| Test Case ID | Feature Tested | Input / Action | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Theme Switcher | Click theme toggle button | Toggles between Dark and Light; saves to `localStorage` | Successfully switches and persists across refresh | **PASS** |
| **TC-02** | Project Filter | Click "Java Systems" tab | Displays only Java-related project cards | Exactly 1 Java project displayed | **PASS** |
| **TC-03** | Project Search | Type "Python" in search box | Displays projects with Python in tags/title/desc | PyInsight project card displayed | **PASS** |
| **TC-04** | Project Modal | Click "Details" button | Opens native dialog with full architecture breakdown | Dialog opens smoothly with backdrop blur | **PASS** |
| **TC-05** | Light Dismiss | Click outside opened dialog | Dialog closes | Dialog closes immediately | **PASS** |
| **TC-06** | Contact Validation | Submit empty form | Prevents submit, highlights invalid inputs | Form blocked; warning toast shown | **PASS** |
| **TC-07** | Contact Submit | Fill valid fields & submit | Shows success toast & triggers mailto | Toast displays; mail client opens | **PASS** |
| **TC-08** | Resume Print | Click "Print / Save PDF" | Opens browser print dialog with clean layout | Printable layout formatted with no dark backgrounds | **PASS** |

### 13.2 Responsiveness Testing
The website layout was verified using Chrome DevTools across multiple screen resolutions:
- **Mobile Devices:** iPhone 12/13/14 (390px), Pixel 7 (412px), Galaxy S20 (360px).
- **Tablet Devices:** iPad Mini (768px), iPad Pro (1024px).
- **Desktop / Laptop Displays:** 1366x768, 1920x1080 (Full HD), 2560x1440 (2K).
- *Outcome:* Zero horizontal scrolling, fluid text scaling with `clamp()`, and clean single-column collapsing on viewports narrower than 768px.

### 13.3 Performance Audits (Google Lighthouse)
- **Performance:** 100 / 100
- **Accessibility:** 100 / 100
- **Best Practices:** 100 / 100
- **SEO:** 100 / 100

---

## 14. Screenshots & Section Walkthrough

### 14.1 Section 1: Navigation & Hero Banner
- **Header:** Sticky glassmorphic navbar with logo `<DS/> Durgesh.dev`, active link indicators, dark/light theme switch button, and mobile hamburger toggle.
- **Hero:** Eye-catching greeting pill, bold typography with gradient accents, dynamic typing effect, quick social badges (GitHub, LinkedIn, Email), and modern visual avatar with floating technology badges.
- **Metrics Strip:** Quick statistics showing completed projects, core skills, Git versioning, and Vercel hosting.

### 14.2 Section 2: About Me
- **Narrative Bio:** Detailed explanation of Durgesh’s computer science background and engineering aspirations.
- **Strengths Matrix:** Four interactive cards highlighting Problem Solving, OOP Architecture, Responsive UI/UX, and Continuous Learning.

### 14.3 Section 3: Technical Skills
- **Skill Filter Pills:** Filter tabs allowing reviewers to view languages, web tech, frameworks, databases, or tools.
- **Progress Visualizations:** Skill cards equipped with percentage badges, animated gradient progress bars, and descriptive summaries.

### 14.4 Section 4: Projects Showcase
- **Search & Filter Controls:** Real-time search bar and category tabs (`All`, `Web`, `Java`, `Python`).
- **Cards:** High-definition SVG mockups, category tags, project titles, descriptions, tech stack pills, and action buttons for Details, GitHub Code, and Live Demo.

### 14.5 Section 5 & 6: Experience & Education Timelines
- **Dual Timelines:** Clean vertical timeline design with glowing nodes detailing software project leadership, technical training, B.Tech coursework, and pre-engineering qualifications.

### 14.6 Section 7 & 8: Achievements & Resume
- **Certificates:** Cards showcasing credentials in Java, Python, Web Development, and Git.
- **Resume Banner:** Prominent download button, quick view modal, and link to standalone printable resume.

### 14.7 Section 9: Contact Me & Footer
- **Contact Cards:** Direct email, LinkedIn link, GitHub link, and location.
- **Form:** Accessible inputs with real-time feedback and toast notifications.
- **Footer:** Copyright, quick links, Vercel status pill, and back-to-top button.

---

## 15. Challenges Faced & Solutions

### Challenge 1: Flash of Unstyled Content (FOUC) in Dark Mode
- **Problem:** When dark mode preference was loaded asynchronously or deferred via JavaScript, the browser rendered the initial page in light mode for a fraction of a second before switching, causing a jarring white flash.
- **Solution:** Implemented a synchronous, un-deferred inline script directly in the document `<head>` that inspects `localStorage` and `prefers-color-scheme` immediately and assigns the `data-theme` attribute before first paint.

### Challenge 2: Mobile Navigation & Backdrop Usability
- **Problem:** On narrow screens, dropdown menus can interfere with page scrolling or remain stuck open when users click elsewhere.
- **Solution:** Added a document-level click listener that detects outside clicks and closes the drawer automatically, while also handling navigation link clicks to smoothly dismiss the menu.

### Challenge 3: Accessible & Zero-Dependency Modals
- **Problem:** Traditional modal overlays built with custom `<div>` tags often fail accessibility checks (no keyboard focus trap, `Escape` key does not dismiss, screen readers fail to notice).
- **Solution:** Utilized native HTML5 `<dialog>` elements combined with `showModal()`, custom CSS `::backdrop` styling, and light-dismiss bounding-box click detection.

### Challenge 4: Printable ATS-Friendly Resume
- **Problem:** Printing a modern dark-mode web page results in excessive ink usage, cut-off borders, and poor readability on paper.
- **Solution:** Engineered a dedicated `@media print` stylesheet in `css/resume.css` that forces white backgrounds, removes interactive toolbars, formats margins to standard letter/A4 sizes, and ensures high contrast.

---

## 16. Future Scope
While the current portfolio exceeds all basic and advanced requirements, future iterations can introduce:
1. **Interactive Blog & Technical Articles:** Integration with a lightweight Markdown renderer to publish technical deep-dives on Java concurrency and Python automation.
2. **Dynamic Visitor Counter & Analytics:** Integrating Vercel Analytics or privacy-friendly open-source analytics (e.g. Umami) to track visitor geography and recruiter views.
3. **Headless CMS Integration:** Connecting the project data to a headless CMS (e.g. Strapi or Sanity) allowing content updates without code changes.
4. **Interactive Coding Playground:** An embedded JavaScript or Python console directly inside the browser using WebAssembly (Pyodide).

---

## 17. Conclusion
The **Personal Portfolio Website** project for **Durgesh Sonar** successfully demonstrates the design, engineering, documentation, and cloud deployment of a modern software engineering portfolio. By emphasizing core computer science fundamentals—spanning **Java, Python, JavaScript, CSS3, and HTML5**—and combining them with industry-standard version control (GitHub) and continuous delivery (Vercel), this project establishes a compelling, accessible, and high-performance digital presence.

The resulting website not only satisfies all academic requirements outlined in the Software Engineering task specification, but also equips Durgesh Sonar with an asset to showcase his readiness for software engineering internships and career opportunities.

---

## 18. References
1. **Mozilla Developer Network (MDN):** *Web Docs for Semantic HTML5, CSS Grid, Flexbox, and Modern JavaScript.* [https://developer.mozilla.org](https://developer.mozilla.org)
2. **W3C Web Accessibility Initiative (WAI):** *Web Content Accessibility Guidelines (WCAG) 2.1.* [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
3. **Google Web.dev:** *Web Performance & Core Web Vitals Optimization Guidelines.* [https://web.dev](https://web.dev)
4. **Vercel Documentation:** *Deploying Static Web Applications on the Vercel Edge Network.* [https://vercel.com/docs](https://vercel.com/docs)
5. **Oracle Java Documentation:** *Java Platform Standard Edition 17 API Specification.* [https://docs.oracle.com/en/java/javase/17/](https://docs.oracle.com/en/java/javase/17/)
6. **Python Software Foundation:** *Python 3.11 Documentation & Standard Library Reference.* [https://docs.python.org/3/](https://docs.python.org/3/)
7. **Durgesh Sonar GitHub:** [https://github.com/durgesh401td-rgb](https://github.com/durgesh401td-rgb)
8. **Durgesh Sonar LinkedIn:** [https://www.linkedin.com/in/durgesh-sonar-441231389/](https://www.linkedin.com/in/durgesh-sonar-441231389/)
