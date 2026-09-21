# 🌟 Durgesh Sonar – Personal Portfolio Website

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://durgesh-portfolio.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Python](https://img.shields.io/badge/Python_3-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> A modern, responsive, accessible, and high-performance **Personal Portfolio Website** designed and engineered to showcase the technical skills, academic foundation, software projects, certifications, and experience of **Durgesh Sonar**.

---

## 🔗 Live Links & Profiles

- **🚀 Live Website (Vercel):** [https://durgesh-portfolio.vercel.app](https://durgesh-portfolio.vercel.app) *(or your deployed Vercel domain)*
- **🐙 GitHub Repository:** [https://github.com/durgesh401td-rgb/portfolio](https://github.com/durgesh401td-rgb)
- **💼 LinkedIn Profile:** [https://www.linkedin.com/in/durgesh-sonar-441231389/](https://www.linkedin.com/in/durgesh-sonar-441231389/)
- **📧 Contact Email:** [durgeshsonar401@gmail.com](mailto:durgeshsonar401@gmail.com)

---

## 🎯 Project Overview

This website serves as a primary professional hub for **Durgesh Sonar**, an aspiring Software Engineer and undergraduate Computer Science Engineering student. Developed as part of the **Software Engineering Portfolio Website Development Task**, the application spotlights proficiencies across **Java, Python, JavaScript, CSS3, and HTML5**.

Built using clean, zero-dependency modern web standards, the site achieves **100/100 Lighthouse performance**, zero Flash of Unstyled Content (FOUC), accessible keyboard navigation, and responsive typography across mobile, tablet, and desktop displays.

---

## ✨ Key Features

- 🌓 **Dynamic Dark / Light Mode:** Native `color-scheme` implementation with inline zero-FOUC initialization script and `localStorage` persistence.
- ⚡ **Hero Typing Simulation:** Animated multi-role typewriter highlighting specialties in Software Engineering, Java, Python, and Full-Stack Development.
- 🔍 **Real-Time Project Search & Filtering:** Filter showcase projects instantly by category (`All`, `Web`, `Java`, `Python`) or search by keywords.
- 🗂️ **Native `<dialog>` Modals:** Accessible project deep-dive and resume modals with keyboard trapping, `Escape` key close, and light-dismiss backdrop clicking.
- 📊 **Interactive Skills Progress Visualization:** Categorized skill cards with animated progress indicators covering Languages, Web, Frameworks, Databases, and DevOps tools.
- 📄 **Dual-Format Resume Showcase:** Includes both an interactive modal viewer and an ATS-friendly, printable standalone resume page (`resume.html`) with tailored print stylesheets.
- 📩 **Interactive Contact Module:** Form with accessible inputs, validation feedback (`:user-valid`), instant toast notification, and direct `mailto:` fallback.
- 📱 **100% Mobile Responsive:** Fluid responsive layouts built on modern CSS Grid and Flexbox, with a slide-out hamburger navigation drawer for mobile devices.

---

## 🛠️ Technologies Used

| Category | Technologies |
| :--- | :--- |
| **Frontend Languages** | HTML5 (Semantic, ARIA), CSS3 (Custom Properties, Grid, Flexbox), JavaScript (ES6+ Modular) |
| **Backend & Systems** | Java 17 (Core, OOP, Multithreading, Concurrency, JDBC), Python 3 (Scripting, Pandas, Flask) |
| **Databases** | MySQL, PostgreSQL, MongoDB, LocalStorage API |
| **Tools & Hosting** | Git, GitHub, VS Code, Vercel Edge CDN, Postman, Linux CLI |

---

## 📁 Project Structure

```
portfolio/
├── index.html                  # Main portfolio single-page application
├── resume.html                 # Dedicated ATS-friendly, printable resume page
├── vercel.json                 # Vercel deployment & security headers configuration
├── .gitignore                  # Git ignore rules for clean repository
├── README.md                   # Comprehensive GitHub repository documentation
├── DOCUMENTATION.md            # Full Academic / SE Project Documentation
├── css/
│   ├── style.css               # Main design system, dark/light theme, responsive styles
│   └── resume.css              # Print & screen styling for printable resume
├── js/
│   ├── main.js                 # Theme manager, typing animation, search, modals, form
│   └── projects-data.js        # Structured project showcase & skills database
└── assets/
    └── images/
        ├── profile-avatar.svg  # Sleek modern developer visual avatar
        ├── project-taskforge.svg
        ├── project-banking.svg
        ├── project-pyinsight.svg
        ├── project-algos.svg
        └── project-portfolio.svg
```

---

## 🚀 How to Run the Project Locally

No external build tools or complex npm installations are required! You can run the portfolio directly in any modern web browser:

### Option 1: Direct File Access
Simply double-click `index.html` in your file explorer to launch the portfolio in your browser.

### Option 2: Using VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The website will launch automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python HTTP Server
Open your terminal in the project root directory and run:
```bash
# Python 3
python -m http.server 3000
```
Navigate to `http://localhost:3000` in your web browser.

---

## 💻 GitHub Setup & Push Guide

Follow these commands to push this codebase to your GitHub repository:

```bash
# 1. Initialize git repository (if not already done)
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: complete personal portfolio website with documentation"

# 4. Set the main branch
git branch -M main

# 5. Connect your remote GitHub repository
git remote add origin https://github.com/durgesh401td-rgb/portfolio.git

# 6. Push code to GitHub
git push -u origin main
```

---

## ☁️ Vercel Deployment Guide

Deploying this portfolio on Vercel takes under 2 minutes:

1. **Sign in to Vercel:** Go to [vercel.com](https://vercel.com) and log in with your **GitHub account**.
2. **Import Repository:** Click **"Add New..."** → **"Project"**, then select your `portfolio` repository from GitHub.
3. **Configure Settings:**
   - **Framework Preset:** Select *Other* (Zero-config static site).
   - **Root Directory:** `./` (Default).
   - **Build Command:** Leave blank.
   - **Output Directory:** Leave blank.
4. **Deploy:** Click **"Deploy"**. Vercel will build and assign you a live HTTPS URL (e.g. `https://durgesh-portfolio.vercel.app`).
5. **Continuous Deployment:** Any time you `git push` to your GitHub `main` branch, Vercel will automatically redeploy the latest changes!

---

## 👨‍💻 Author Information

**Durgesh Sonar**  
*Aspiring Software Engineer | Full-Stack & Systems Developer*  
- **GitHub:** [@durgesh401td-rgb](https://github.com/durgesh401td-rgb)  
- **LinkedIn:** [Durgesh Sonar](https://www.linkedin.com/in/durgesh-sonar-441231389/)  
- **Email:** [durgeshsonar401@gmail.com](mailto:durgeshsonar401@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
