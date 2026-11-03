# 📘 Software Engineering Project Documentation
## Personal Portfolio Website – Design, Develop, Document & Deploy

---

| **Document Detail** | **Information** |
| :--- | :--- |
| **Project Title** | Personal Portfolio Website – Design, Develop, Document & Deploy |
| **Student Name** | Durgesh Sonar |
| **Academic Degree** | B.Tech — Computer Science & Engineering (Artificial Intelligence & Machine Learning) |
| **Institution** | Sandip University, Nashik |
| **Location** | Nashik, Maharashtra, India |
| **GitHub Profile** | [https://github.com/durgesh401td-rgb](https://github.com/durgesh401td-rgb) |
| **LinkedIn Profile** | [https://www.linkedin.com/in/durgesh-sonar-441231389/](https://www.linkedin.com/in/durgesh-sonar-441231389/) |
| **Email Address** | [durgesh401td@gmail.com](mailto:durgesh401td@gmail.com) |
| **Live Deployment URL** | [https://portfolio-7y8z72l36-durgesh401td-rgb.vercel.app/](https://portfolio-7y8z72l36-durgesh401td-rgb.vercel.app/) |
| **Target Audience** | Academic Evaluators, Technical Recruiters, Internship Providers, Engineering Mentors |
| **Date of Submission** | November 2026 |

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
9. [9. UI/UX Design (Obsidian Orange / Cinematic Universe)](#9-uiux-design-obsidian-orange--cinematic-universe)
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
This project represents the personal portfolio website of **Durgesh Sonar**, a motivated **B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning)** student at **Sandip University, Nashik**. The website serves as a dedicated professional platform to showcase hands-on technical work across **Python, C/C++, IoT (ESP8266), Google Gemini AI tooling, web technologies (HTML, CSS, JavaScript, Three.js), and Business Analytics**.

Developed as part of the **Software Engineering Website Development Task**, this portfolio reflects real-world engineering standards: responsive design across all viewports, clean Git version control, continuous cloud deployment via Vercel, accessible UI components, and comprehensive technical documentation.

---

## 2. Problem Statement
For engineering students specializing in interdisciplinary domains such as AI, ML, and IoT:
- Conventional text resumes cannot visually demonstrate hardware telemetry, 3D browser games, autonomous voice agents, or real-time web portals.
- Projects are often scattered across GitHub repositories without unified architectural context or interactive live demos.
- Recruiters and evaluators require a clean, immediate digital experience to assess a candidate's technical skills, practical work discipline, problem-solving abilities, and communication standards in a matter of seconds.

---

## 3. Objectives
1. **Represent Authentic Student Profile:** Faithfully represent Durgesh Sonar's profile, academic degree at Sandip University Nashik, 6 months practical work experience at Blinkit, and MyCaptain Business Analytics recognition.
2. **Showcase Diverse Technical Stack:** Highlight proficiencies in C, C++, Python, JavaScript, HTML, CSS, Three.js, MediaPipe, Google Gemini API, Google Apps Script, and ESP8266 IoT hardware.
3. **Curate Projects:** Feature both Academic Projects (*Smart Plant Monitoring System* and *IoT Smart Lighting & Distance Alert System*) and Featured GitHub Projects (*AI Resume Builder, SmartTrack, AI Voice Assistant "Aura", Distance Measurement System, Car Racing Game*).
4. **Deliver High UX Quality:** Implement dark/light mode with zero-FOUC, accessible native `<dialog>` modals, real-time search and category filtering, and print-ready ATS resume styling.
5. **Continuous Cloud Deployment:** Connect the GitHub repository (`durgesh401td-rgb/portfolio`) to Vercel for continuous deployment.

---

## 4. Proposed Solution
The application is structured as a fast, accessible, zero-dependency single-page application (SPA) coupled with a dedicated printable resume page (`resume.html`).

Key components include:
- **Presentation Layer (HTML5 & CSS3):** Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`) with fluid CSS Grid, Flexbox, glassmorphic styling, and native `color-scheme` support.
- **Interactive Layer (Modular JavaScript):** Client-side state handling for theme switching, dynamic project filtering and search, native modal dialog event trapping, and input validation.
- **Dual Resume System:** An in-page modal dialog for quick inspection, plus a standalone ATS-friendly resume page equipped with `@media print` stylesheets for one-click clean PDF export.

---

## 5. Technologies Used (Strictly from Student Profile)

| Category | Technologies & Tools |
| :--- | :--- |
| **Programming** | C, C++, Python, JavaScript |
| **Web / Frontend** | HTML, CSS, JavaScript, Three.js |
| **AI / Tooling** | Google Gemini API, MediaPipe, Google Apps Script |
| **Development** | VS Code, MSYS2, Git &amp; GitHub |
| **IoT / Hardware** | ESP8266, ultrasonic &amp; distance sensors, LEDs, sensor-based automation |
| **Business / Analytics** | Business Analytics fundamentals, project-based learning (MyCaptain) |
| **Hosting & Cloud** | Vercel Edge Network |

---

## 6. System Requirements

### 6.1 Development Environment
- **Operating System:** Windows 10/11, Linux, or macOS.
- **Code Editor:** Visual Studio Code with MSYS2 (MinGW compiler) for C/C++ development.
- **Tooling:** Git 2.40+, Python 3.8+, modern web browser with DevTools.

### 6.2 Target Browser Support
- Google Chrome (v98+), Mozilla Firefox (v96+), Apple Safari (v15+), Microsoft Edge (v98+).
- Responsive viewports: 320px (mobile) to 4K displays.

---

## 7. Website Features

| Section | Description & Engineering Details |
| :--- | :--- |
| **🏠 Home** | Name, brand headline ("Curious mind. Creative code. Limitless possibilities."), Sandip University badge, interactive 3D Digital Planet canvas, and quick metrics strip. |
| **👤 About Me** | Complete profile narrative, background in AI/ML, IoT, and Business Analytics, practical discipline from Blinkit, and editorial cards. |
| **💻 Skills** | Interactive 3D/2D Constellation Canvas linking technology nodes with hover glass cards, alongside an accessible categorized grid alternative. |
| **🚀 Projects** | 7 curated projects with 3D perspective tilt cards, status badges, tech pills, and in-depth native `<dialog>` case studies. |
| **🏆 Achievements** | 3D trophy showcase featuring MyCaptain Business Analytics Award (Adeeba Kadri letter), Blinkit Operational Excellence, and GitHub open-source achievements. |
| **🎓 Education** | **B.Tech — Computer Science & Engineering (Artificial Intelligence & Machine Learning)** at **Sandip University, Nashik**. |
| **💼 Work Experience** | Dedicated timeline card detailing 6 months practical work experience at **Blinkit** as a **Picker-Packer**, plus academic project coordination at Sandip University. |
| **📄 Resume** | Direct downloadable CV (`assets/resume.pdf`) and standalone printable page (`resume.html`). |
| **📩 Contact** | Direct email (`durgesh401td@gmail.com`), GitHub link, LinkedIn link, location (Nashik, India), and validated contact form with accessible feedback. |
| **🌓 Dark / Light Mode** | Persistent theme toggle with zero-FOUC inline script and `localStorage` synchronization. |
| **🤖 Apex Assistant** | Non-intrusive floating AI assistant launcher at bottom-right providing structured answers on Durgesh's background, IoT systems, and supply-chain work. |

---

## 8. Website Structure & Architecture

```
portfolio/
├── index.html                  # Main single-page portfolio application
├── resume.html                 # ATS-friendly printable resume page
├── vercel.json                 # Vercel deployment & security headers configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # GitHub repository documentation
├── DOCUMENTATION.md            # Software Engineering Project Documentation
├── css/
│   ├── style.css               # Main design system & responsive stylesheet
│   └── resume.css              # Print & screen styling for resume.html
├── js/
│   ├── main.js                 # Theme manager, Three.js planet, constellation, dialogs, apex
│   └── projects-data.js        # Structured project & skills data from PDF
└── assets/
    ├── resume.pdf              # Official downloadable curriculum vitae
    └── images/
        ├── profile.jpg         # Authentic professional photograph
        ├── profile-avatar.svg  # Custom developer visual avatar
        ├── project-plant-iot.svg
        ├── project-smart-lighting.svg
        ├── project-aura.svg
        ├── project-smarttrack.svg
        ├── project-resume-builder.svg
        ├── project-distance.svg
        └── project-racing.svg
```

---

## 9. UI/UX Design (Obsidian Orange / Cinematic Universe)

- **Art Direction:** Cinematic Universe / Obsidian Orange, engineered for maximum spaciousness, depth, and clarity without clutter.
- **Palette Tokens:**
  - *Dark Theme:* Canvas `#08090B`, Cards `#111318`, Elevated `#191D24`, Text `#F5F5F2`, Accent `#FF7A1A` (Obsidian Orange), Amber `#FFB347`.
  - *Light Theme:* Canvas `#F5F5F2`, Cards `#FFFFFF`, Elevated `#ECEDEB`, Text `#17191D`, Accent `#D95E0B`.
- **Hero Centerpiece:** Interactive 3D **Digital Planet** with orbital particle rings, mouse parallax, and resilient 2D Canvas fallback.
- **Brand Wordmark:** “Durgesh (Dev) Sonar” with headline “Curious mind. Creative code. Limitless possibilities.”
- **Global Navigation:** Fixed desktop vertical sidebar with scroll-spy active state, high-contrast toggle, font scaling, audio chimes toggle, and mobile off-canvas drawer.
- **Interactive Skills Constellation:** Connected node network representing real technologies from the candidate's resume with hover cards and accessible grid view.
- **Curated Projects Showcase:** 3D perspective tilt cards with in-depth `<dialog>` case study modals (Overview, Problem, Goal, Role, Architecture, Challenges, Outcomes).
- **Apex AI Assistant:** Non-intrusive floating assistant at bottom-right providing contextual guidance on projects and experience.
- **Accessibility:** Full compliance with `prefers-reduced-motion: reduce`, keyboard focus indicators, visible skip link, semantic landmarks, and WCAG AA contrast.

---

## 10. Implementation Details

### 10.1 Projects Data Architecture (`js/projects-data.js`)
All projects and skills are maintained in structured data arrays containing:
- `id`: Unique identifier
- `title`: Formal project name
- `category`: Category (`iot`, `ai`, `web`)
- `status`: Completion status (`Completed`, `Working`, `Upcoming`)
- `badge`: Display tag
- `shortSummary`: Concise subtitle
- `technologies`: Specific technologies (e.g. ESP8266, Google Gemini API, Three.js, MediaPipe)
- `image`: SVG visual mockup path
- `github` & `liveDemo`: External links
- `caseStudy`: In-depth breakdown including Overview, Problem, Goal, Role, Architecture, Challenges, and Outcome

### 10.2 Accessible `<dialog>` Modals
Uses native HTML5 `<dialog>` elements with `showModal()` and backdrop light-dismiss logic, eliminating heavy modal third-party dependencies while guaranteeing full keyboard trapping (`Tab`, `Escape`).

### 10.3 Zero-FOUC Dark Mode
Implemented via an un-deferred inline script inside `<head>` to evaluate `localStorage` and `prefers-color-scheme` before the body renders, preventing light-theme flash.

---

## 11. GitHub Repository Management

- **GitHub Account:** [@durgesh401td-rgb](https://github.com/durgesh401td-rgb)
- **Repository URL:** [https://github.com/durgesh401td-rgb/portfolio](https://github.com/durgesh401td-rgb/portfolio)

### Git Commands:
```bash
git init
git add .
git commit -m "feat: implement Obsidian Orange Cinematic Universe UI/UX redesign"
git branch -M main
git remote add origin https://github.com/durgesh401td-rgb/portfolio.git
git push -u origin main
```

---

## 12. Vercel Deployment Step-by-Step Guide

1. Log in to [vercel.com](https://vercel.com) using your GitHub account (`durgesh401td-rgb`).
2. Click **"Add New..."** → **"Project"** and import the `portfolio` repository.
3. Select framework preset **"Other"** (static site zero-config).
4. Click **"Deploy"**. The site will deploy to `https://portfolio-7y8z72l36-durgesh401td-rgb.vercel.app/` in seconds.
5. Any subsequent `git push` to `main` will automatically trigger continuous production redeployments.

---

## 13. Testing & Quality Assurance

### 13.1 Functional Testing
| Test ID | Scenario | Expected Outcome | Result |
| :--- | :--- | :--- | :--- |
| **TC-01** | Dark/Light Switcher | Toggles theme and saves to `localStorage` | **PASS** |
| **TC-02** | 3D Digital Planet | Renders WebGL wireframe with particles + canvas fallback | **PASS** |
| **TC-03** | Skills Constellation | Renders node network with hover tooltips + accessible grid | **PASS** |
| **TC-04** | Case Study Modal | Opens native `<dialog>` with full project breakdown | **PASS** |
| **TC-05** | Apex Assistant | Floating launcher opens chat drawer with responsive query handling | **PASS** |
| **TC-06** | Contact Form Validation | Flags missing inputs with feedback alert | **PASS** |
| **TC-07** | Resume Print Engine | Opens print dialog with clean ATS styling | **PASS** |

### 13.2 Responsiveness & Performance
- Verified responsive scaling across iPhone, iPad, laptop, and 2K desktop displays.
- Google Lighthouse score: **100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO**.

---

## 14. Screenshots & Section Walkthrough

- **Hero:** Authentic portrait card, Sandip University badge, brand headline, interactive 3D Digital Planet canvas.
- **About:** Editorial card blocks covering academic journey, Blinkit operational discipline, and business analytics.
- **Skills:** Dual-mode constellation network and categorized accessible cards.
- **Projects:** 7 projects with 3D tilt interaction, technology pills, and in-depth case study modals.
- **Experience:** 6 months at Blinkit as Picker-Packer highlighting teamwork and workplace discipline.
- **Education:** B.Tech CSE (AI & ML) at Sandip University, Nashik.
- **Certifications:** MyCaptain Business Analytics Course with Mentor Adeeba Kadri letter of appreciation.
- **Resume & Contact:** Downloadable CV, printable resume page, and interactive validated contact form.

---

## 15. Challenges Faced & Solutions

1. **Hardware & AI Project Visualization in a Static Portfolio:**
   - *Challenge:* IoT sensor networks and Python autonomous desktop agents are non-visual by default.
   - *Solution:* Handcrafted detailed SVG mockups illustrating circuit schematics, ultrasonic wave timing, and ReAct agent terminal traces.
2. **Maintaining Exact Data Accuracy from Resume:**
   - *Challenge:* Removing fabricated placeholder data and ensuring every skill, project, and experience bullet strictly aligns with Durgesh Sonar's actual resume.
   - *Solution:* Rebuilt `projects-data.js`, `index.html`, and `resume.html` using the exact text and structure from the candidate's PDF.
3. **Printable ATS Resume Consistency:**
   - *Challenge:* Exporting dark-mode web resumes to paper often causes visual artifacts.
   - *Solution:* Tailored `resume.css` with `@media print` rules, forcing clean black/white typography, high contrast, and standard margins.

---

## 16. Future Scope
- **Live IoT Cloud Dashboard:** Connecting ESP8266 hardware nodes via MQTT or WebSockets to display live soil moisture and temperature telemetry directly on the portfolio.
- **WebAssembly Integration:** Compiling C++ algorithms or embedding interactive Three.js demos natively in the browser.
- **Blog Section:** Publishing write-ups on building autonomous AI agents with Google Gemini and ESP8266 IoT automation.

---

## 17. Conclusion
The **Personal Portfolio Website** for **Durgesh Sonar** provides a comprehensive, responsive, and verifiable digital showcase of his academic achievements, technical projects, and professional background. By adhering to modern software engineering best practices—from semantic HTML and responsive CSS to Git version control and Vercel cloud hosting—the portfolio accurately demonstrates Durgesh's readiness for technical roles, internships, and academic presentation.

---

## 18. References
1. **Durgesh Sonar Official Resume (PDF)** — B.Tech CSE (AI & ML), Sandip University, Nashik.
2. **GitHub Profile:** [https://github.com/durgesh401td-rgb](https://github.com/durgesh401td-rgb)
3. **LinkedIn Profile:** [https://www.linkedin.com/in/durgesh-sonar-441231389/](https://www.linkedin.com/in/durgesh-sonar-441231389/)
4. **MyCaptain Platform:** Business Analytics Course & Mentor Adeeba Kadri Recognition.
5. **Mozilla Developer Network (MDN):** Semantic HTML5, CSS Grid, Flexbox, and Native `<dialog>` Specification.
6. **Vercel Documentation:** Continuous Deployment and Edge Hosting.
