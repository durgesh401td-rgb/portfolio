/**
 * projects-data.js
 * Structured data source for Durgesh Sonar's project portfolio
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "taskforge",
    title: "TaskForge – Agile Project Management Workspace",
    category: "web",
    tagline: "Interactive Kanban task orchestration platform with real-time state & metric tracking.",
    description: "A high-performance modern web application designed for engineering teams to plan, track, and manage software sprints. Built with modern semantic HTML5, responsive CSS Grid/Flexbox, and modular ES6+ JavaScript. Features dynamic drag-and-drop workflow columns, priority tagging, automated deadline reminders, local storage caching for offline resilience, and search/filter capabilities.",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3 Grid", "LocalStorage API", "Agile/Kanban"],
    image: "assets/images/project-taskforge.svg",
    github: "https://github.com/durgesh401td-rgb/taskforge-workspace",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Custom drag-and-drop state management with zero external library overhead",
      "Dynamic search, tag-based filtering, and sprint velocity calculation",
      "Offline persistence and JSON export/import for sprint reporting",
      "Full keyboard navigation and ARIA accessibility compliance"
    ]
  },
  {
    id: "javacore-banking",
    title: "JavaCore Banking & Thread-Safe Transaction Ledger",
    category: "java",
    tagline: "Enterprise core banking engine with ACID compliance and concurrency safety.",
    description: "A robust Java-based financial banking engine implementing object-oriented architectural patterns (Factory, Singleton, Repository). Designed to execute concurrent fund transfers, deposit handling, and automated interest calculation with strict thread safety using ReentrantLock and ConcurrentHashMap. Features an immutable transaction ledger with SHA-256 integrity verification, JDBC persistence, and multi-threaded audit logging.",
    tags: ["Java 17", "OOP Architecture", "Concurrency & Multithreading", "JDBC", "Data Structures"],
    image: "assets/images/project-banking.svg",
    github: "https://github.com/durgesh401td-rgb/javacore-banking-system",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Thread-safe balance mutation using ReentrantLock to eliminate race conditions",
      "Cryptographic SHA-256 chaining for tamper-evident transaction auditing",
      "Custom connection pooling and parameterized prepared statements preventing SQL injection",
      "Modular design adhering strictly to SOLID principles and Clean Architecture"
    ]
  },
  {
    id: "pyinsight",
    title: "PyInsight – Data Analytics & Automated Processing Engine",
    category: "python",
    tagline: "Automated data cleaning, statistical modeling, and pipeline reporting toolkit.",
    description: "An automated data engineering and analytics application written in Python. It ingests multi-format datasets (CSV, Parquet, JSON), executes automated anomaly detection (Z-score & IQR), statistical summary computations, and predictive trend modeling. Includes an automated report generator that exports analytical summaries and structured data feeds via a lightweight Flask REST API.",
    tags: ["Python 3", "Pandas", "NumPy", "Flask REST API", "Data Pipelines", "Matplotlib"],
    image: "assets/images/project-pyinsight.svg",
    github: "https://github.com/durgesh401td-rgb/pyinsight-data-engine",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Processes millions of records with vectorized operations in Pandas & NumPy",
      "Automated outlier detection and data validation routines",
      "Lightweight Flask microservice with REST endpoints for JSON analytics delivery",
      "Modular CLI commands and automated cron-ready pipeline scheduling"
    ]
  },
  {
    id: "algoscope",
    title: "AlgoScope – Algorithm & Pathfinding Visualizer Suite",
    category: "web",
    tagline: "Interactive 60fps graph pathfinding and sorting algorithm visualization engine.",
    description: "A visual simulation platform built from scratch in vanilla JavaScript and HTML5 Canvas/DOM to demystify complex computer science algorithms. Implements interactive visual representations of Dijkstra's Algorithm, A* Search, Breadth-First Search (BFS), Depth-First Search (DFS), as well as QuickSort, MergeSort, and HeapSort with real-time speed control, step-by-step debugging, and metrics.",
    tags: ["JavaScript", "Algorithms & DSA", "HTML5 Canvas", "CSS3 Animations", "Graph Theory"],
    image: "assets/images/project-algos.svg",
    github: "https://github.com/durgesh401td-rgb/algoscope-visualizer",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Custom heuristic implementation for A* shortest path search on dynamic obstacle grids",
      "Asynchronous animation loop with pause, resume, and variable playback speed controls",
      "Real-time comparison and swap counter for empirical computational complexity analysis",
      "Fully responsive touch and mouse interactive maze drawing canvas"
    ]
  },
  {
    id: "devfolio",
    title: "DevFolio – Personal Portfolio & Showcase Engine",
    category: "web",
    tagline: "Ultra-responsive, accessible personal portfolio website built with modern standards.",
    description: "The current personal portfolio website designed and developed for Durgesh Sonar. Highlights modern software engineering standards: native light/dark theme adaptation, accessible dialog modals, dynamic project filtering and search, printable ATS-friendly resume format, fluid responsive typography, and zero-dependency lightning speed deployed seamlessly on Vercel.",
    tags: ["HTML5", "CSS3 Modern Variables", "JavaScript ES6+", "Vercel Edge", "SEO & Performance"],
    image: "assets/images/project-portfolio.svg",
    github: "https://github.com/durgesh401td-rgb/portfolio",
    liveDemo: "https://durgesh-portfolio.vercel.app",
    highlights: [
      "Achieved 100/100 Google Lighthouse audit scores across Performance, Accessibility & SEO",
      "Zero Flash of Unstyled Content (FOUC) dark mode with native color-scheme and localStorage",
      "Accessible modal dialogs with native <dialog> element and keyboard trapping",
      "Seamless continuous deployment pipeline via GitHub and Vercel"
    ]
  }
];

// Technical skills database for dynamic rendering and progress visualization
const SKILLS_DATABASE = {
  languages: [
    { name: "Java", level: 90, icon: "☕", description: "Core Java, OOP, Collections, Multi-threading, Streams, JDBC" },
    { name: "Python", level: 88, icon: "🐍", description: "Data Structures, Scripting, Automation, Flask, Pandas" },
    { name: "JavaScript", level: 86, icon: "⚡", description: "ES6+, Async/Await, DOM APIs, Fetch, Modular Architecture" },
    { name: "C / C++", level: 75, icon: "⚙️", description: "Memory Management, Pointers, Basic Algorithms, Low-Level Logic" }
  ],
  web: [
    { name: "HTML5", level: 95, icon: "🌐", description: "Semantic Markup, Accessibility (ARIA), Native Dialogs, SEO" },
    { name: "CSS3", level: 92, icon: "🎨", description: "Flexbox, CSS Grid, Custom Properties, Animations, Responsive Design" },
    { name: "Responsive UI", level: 94, icon: "📱", description: "Mobile-first layouts, Fluid Typography, Cross-browser compatibility" },
    { name: "RESTful APIs", level: 85, icon: "🔌", description: "API consumption, JSON serialization, HTTP status codes, Fetch API" }
  ],
  frameworks: [
    { name: "Node.js & Express Basics", level: 80, icon: "🟢", description: "Backend routes, middleware, RESTful services, npm packages" },
    { name: "React Basics", level: 78, icon: "⚛️", description: "Component state, hooks, virtual DOM, reusable UI patterns" },
    { name: "Bootstrap & Tailwind CSS", level: 88, icon: "🎯", description: "Utility-first CSS, rapid UI prototyping, responsive grids" },
    { name: "Flask (Python)", level: 82, icon: "🌶️", description: "Micro-web framework, routing, request handling, templating" }
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "🐬", description: "Relational modeling, Joins, Indexing, Complex Queries, Transactions" },
    { name: "PostgreSQL", level: 80, icon: "🐘", description: "ACID compliance, schema normalization, analytical queries" },
    { name: "MongoDB", level: 76, icon: "🍃", description: "NoSQL document collections, BSON, aggregation pipelines" }
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🐙", description: "Branching, PRs, Merge conflicts, Semantic commit messages, CI/CD" },
    { name: "VS Code", level: 95, icon: "💻", description: "Extensions, integrated debugging, multi-cursor, linters" },
    { name: "Postman", level: 86, icon: "🚀", description: "API testing, request collections, environment variables" },
    { name: "Vercel & Cloud Hosting", level: 88, icon: "▲", description: "Continuous deployment, static edge delivery, custom domains" },
    { name: "Linux / CLI", level: 80, icon: "🐧", description: "Shell scripting, file permissions, process management, bash" }
  ]
};
