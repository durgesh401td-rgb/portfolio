/**
 * projects-data.js
 * Structured Netflix catalog data strictly derived from Durgesh Sonar's official resume
 */

const NETFLIX_CATALOG = {
  // Billboard Featured Spotlight Show
  featured: {
    id: "aura-assistant",
    title: "AI Voice Assistant — 'Aura'",
    headline: "#1 IN TECHNOLOGY TODAY",
    matchScore: "99% Match",
    maturity: "AI & ML",
    seasons: "Autonomous Agent",
    quality: "Ultra HD 4K",
    description: "A next-generation, voice-enabled autonomous desktop AI assistant for Windows, powered by Google's Gemini multimodal models and an agentic ReAct loop rather than simple command matching.",
    tags: ["Python", "Google Gemini API", "ReAct Agent", "Voice AI", "Windows Automation"],
    image: "assets/images/project-aura.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    category: "ai",
    cast: ["Google Gemini API", "Python", "ReAct Agent", "Win32 Automation"],
    genres: ["Artificial Intelligence", "Autonomous Agents", "Voice User Interface"]
  },

  // All 7 official projects with Netflix stream metadata
  projects: [
    {
      id: "aura-assistant",
      title: "AI Voice Assistant — 'Aura'",
      tagline: "Autonomous desktop voice assistant with Google Gemini multimodal ReAct loop.",
      matchScore: "99% Match",
      maturity: "AI & ML",
      badge: "ORIGINAL",
      year: "2026",
      quality: "4K",
      description: "A next-generation, voice-enabled autonomous desktop AI assistant for Windows, powered by Google's Gemini multimodal models and an agentic ReAct loop rather than simple command matching. Capable of reasoning through multi-step desktop tasks, voice interaction, and multimodal understanding.",
      tags: ["Python", "Google Gemini API", "ReAct Agent", "Voice AI"],
      image: "assets/images/project-aura.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "ai",
      genres: ["AI / Autonomous", "Python", "Multimodal"],
      highlights: [
        "Implemented an agentic ReAct (Reasoning + Acting) loop for dynamic planning and execution",
        "Integrated Google Gemini multimodal models for natural language and visual reasoning",
        "Voice-enabled interaction loop with automated system execution on Windows"
      ]
    },
    {
      id: "plant-monitoring",
      title: "Smart Plant Monitoring System using IoT",
      tagline: "Sensor-based environmental telemetry and automated smart plant care.",
      matchScore: "98% Match",
      maturity: "IoT",
      badge: "TRENDING",
      year: "2025",
      quality: "HD",
      description: "Developed an IoT-based plant monitoring concept using ESP8266 and sensor-based data collection to monitor plant/environment conditions and support smarter plant care. Uses analog moisture probes and temperature/humidity sensors to prevent underwatering or heat stress with automated threshold alerts.",
      tags: ["ESP8266", "IoT", "Sensors", "Automation", "C++"],
      image: "assets/images/project-plant-iot.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "iot",
      genres: ["IoT / Hardware", "ESP8266", "Sensors"],
      highlights: [
        "Designed and deployed ESP8266 Wi-Fi node for continuous plant environment telemetry",
        "Sensor-based data collection tracking moisture levels and ambient conditions",
        "Threshold-triggered care alerts for proactive plant health management"
      ]
    },
    {
      id: "car-racing-game",
      title: "Gesture-Controlled 3D Car Racing Game",
      tagline: "Infinite solar highway 3D racer controlled via MediaPipe webcam hand tracking.",
      matchScore: "97% Match",
      maturity: "WebGL",
      badge: "TOP 10",
      year: "2026",
      quality: "60 FPS",
      description: "A gesture-controlled, infinite car racing game featuring bright Solar Highway graphics and a Knockout Elimination mode, with real-time hand tracking via webcam and explosion effects. Utilizes Three.js for 3D rendering and MediaPipe for low-latency hands-free computer vision steering.",
      tags: ["JavaScript", "Three.js", "MediaPipe", "Computer Vision"],
      image: "assets/images/project-racing.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "web",
      genres: ["Interactive Web", "3D Three.js", "MediaPipe Vision"],
      highlights: [
        "Real-time webcam hand tracking using Google MediaPipe Hand Landmark detection",
        "Interactive 3D graphics rendering at 60 FPS powered by Three.js",
        "Knockout Elimination gameplay mode with dynamic obstacles and collision physics"
      ]
    },
    {
      id: "smarttrack",
      title: "SmartTrack — Expense & Investment Tracker",
      tagline: "Responsive expense portal with compound-growth calculators & Google Sheets sync.",
      matchScore: "96% Match",
      maturity: "Analytics",
      badge: "POPULAR",
      year: "2025",
      quality: "HD",
      description: "A responsive Expense & Investment Tracker web portal featuring interactive compound-growth calculators, with real-time data storage powered by Google Sheets and Google Apps Script. Offers streamlined budgeting, investment return simulations, and automated cloud sheet synchronization.",
      tags: ["HTML", "Google Apps Script", "Google Sheets API", "Analytics"],
      image: "assets/images/project-smarttrack.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "web",
      genres: ["Financial Tech", "Google Cloud Script", "Web App"],
      highlights: [
        "Engineered interactive compound-growth and ROI projection calculators",
        "Real-time bidirectional cloud data storage using Google Apps Script & Google Sheets",
        "Categorized expense breakdowns and financial overview metrics"
      ]
    },
    {
      id: "distance-measurement",
      title: "Distance Measurement System",
      tagline: "Wireless ultrasonic range-finder node using Arduino & ESP8266 Wi-Fi.",
      matchScore: "95% Match",
      maturity: "IoT",
      badge: "HARDWARE",
      year: "2025",
      quality: "HD",
      description: "An IoT-based system built with Arduino and an ESP8266 Wi-Fi module — an ultrasonic sensor measures distance to an object, Arduino processes the readings, and the ESP8266 sends the data wirelessly to a web dashboard or monitoring endpoint.",
      tags: ["C++", "Arduino", "ESP8266", "Ultrasonic Sensor"],
      image: "assets/images/project-distance.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "iot",
      genres: ["IoT / Hardware", "C++ Firmware", "Wireless Wi-Fi"],
      highlights: [
        "Accurate time-of-flight ultrasonic pulse distance calculation in C++",
        "Inter-board serial communication between Arduino ATmega328P and ESP8266",
        "Wireless transmission of real-time telemetry over local Wi-Fi network"
      ]
    },
    {
      id: "ai-resume-builder",
      title: "AI Resume Builder",
      tagline: "Web-based tool generating professionally formatted, ATS-compliant resumes.",
      matchScore: "96% Match",
      maturity: "Web App",
      badge: "PRODUCTIVITY",
      year: "2025",
      quality: "HD",
      description: "A web-based tool that helps users create professional resumes quickly — users enter details such as education, skills, projects and experience, and the tool generates a formatted resume. Built with clean responsive HTML, CSS, and modular JavaScript with instant printable layout rendering.",
      tags: ["HTML", "CSS", "JavaScript", "Resume Generator"],
      image: "assets/images/project-resume-builder.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "web",
      genres: ["Productivity", "Web Frontend", "Document Engine"],
      highlights: [
        "Guided multi-step input wizard for user profile, education, skills, and work history",
        "Instant real-time formatted resume preview with high visual hierarchy",
        "One-click browser print and PDF export with dedicated print stylesheets"
      ]
    },
    {
      id: "smart-lighting",
      title: "IoT Smart Lighting & Distance Alert System",
      tagline: "Proximity detection & ambient light-reactive smart LED indication.",
      matchScore: "94% Match",
      maturity: "IoT",
      badge: "EMBEDDED",
      year: "2025",
      quality: "HD",
      description: "Built an ESP8266-based system using an ultrasonic sensor, LDR (Light Dependent Resistor), and LED/RGB indication for distance-based alerts and smart lighting behavior. Adapts lighting intensity according to ambient lux and pulses warning alerts when objects breach defined proximity safety zones.",
      tags: ["ESP8266", "Ultrasonic Sensor", "LDR", "LED/RGB"],
      image: "assets/images/project-smart-lighting.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      category: "iot",
      genres: ["IoT / Hardware", "Sensors", "Automation"],
      highlights: [
        "Integrated HC-SR04 ultrasonic sensor with analog LDR sensor onto ESP8266",
        "Configured distance-based RGB warning thresholds and auto-dimming rules",
        "Low-latency response time with automated alert triggers"
      ]
    }
  ],

  // Skills Row: Technical Competencies
  skills: [
    { name: "Python", category: "Programming", level: 92, badge: "PRIMARY", icon: "🐍", desc: "Multimodal Gemini API, ReAct agent loops, automation scripting" },
    { name: "C & C++", category: "Programming", level: 90, badge: "CORE", icon: "⚡", desc: "Object-oriented programming, STL, memory logic, Arduino firmware" },
    { name: "JavaScript & Three.js", category: "Web / Frontend", level: 88, badge: "3D WEB", icon: "🎮", desc: "Interactive 3D scenes, WebGL shaders, DOM APIs, ES6+" },
    { name: "ESP8266 & Sensors", category: "IoT / Hardware", level: 92, badge: "HARDWARE", icon: "📡", desc: "Microcontroller Wi-Fi telemetry, ultrasonic, LDR, sensor automation" },
    { name: "Google Gemini API", category: "AI / Tooling", level: 90, badge: "GEN AI", icon: "✨", desc: "Multimodal prompt engineering, vision/voice models, agentic workflows" },
    { name: "MediaPipe", category: "AI / Tooling", level: 85, badge: "VISION", icon: "🖐️", desc: "Real-time webcam computer vision, 21-point hand landmark tracking" },
    { name: "Google Apps Script", category: "AI / Tooling", level: 86, badge: "CLOUD", icon: "📊", desc: "Google Sheets integration, cloud workflow automation, API endpoints" },
    { name: "HTML & CSS", category: "Web / Frontend", level: 94, badge: "FRONTEND", icon: "🎨", desc: "Responsive design, CSS Grid/Flexbox, accessibility, clean semantics" },
    { name: "VS Code & MSYS2", category: "Development", level: 90, badge: "TOOLING", icon: "💻", desc: "IDE workflows, MinGW toolchains, integrated terminal & debugging" },
    { name: "Git & GitHub", category: "Development", level: 88, badge: "DEVOPS", icon: "🐙", desc: "Version control, repositories, commits, branching, open source sharing" },
    { name: "Business Analytics", category: "Business / Analytics", level: 86, badge: "CERTIFIED", icon: "📈", desc: "Fundamentals, decision frameworks, MyCaptain project-based learning" }
  ],

  // Experience & Education Episodes
  seasons: [
    {
      id: "exp-blinkit",
      title: "Blinkit — Picker-Packer (6 Months)",
      season: "Season 1: Real-World Industry Operations",
      type: "WORK EXPERIENCE",
      badge: "6 MONTHS",
      image: "assets/images/billboard-bg.svg",
      matchScore: "100% Match",
      year: "Practical Experience",
      desc: "Picked and packed customer orders accurately and efficiently in a fast-paced environment. Handled products and order-related tasks while maintaining accuracy and timely processing. Worked collaboratively with team members to support smooth day-to-day operations. Developed practical skills in responsibility, time management, teamwork and workplace discipline."
    },
    {
      id: "edu-sandip",
      title: "B.Tech — Computer Science & Engineering (AI & ML)",
      season: "Season 2: Sandip University, Nashik",
      type: "EDUCATION",
      badge: "DEGREE",
      image: "assets/images/billboard-bg.svg",
      matchScore: "100% Match",
      year: "Undergraduate",
      desc: "Comprehensive undergraduate engineering study at Sandip University, Nashik focusing on Artificial Intelligence, Machine Learning, Computer Science fundamentals, programming (C, C++, Python), and IoT system development."
    },
    {
      id: "cert-mycaptain",
      title: "Business Analytics Course — MyCaptain",
      season: "Special Feature: Mentorship Recognition",
      type: "CERTIFICATION",
      badge: "JANUARY 2026",
      image: "assets/images/billboard-bg.svg",
      matchScore: "99% Match",
      year: "Jan 2026",
      desc: "Appreciation letter from mentor Adeeba Kadri recognizing participation, skill development, unique approach to assigned projects and adherence to guidelines. MyCaptain is recognized by SDSN among the Top 50 youth-led solutions working on quality education."
    },
    {
      id: "exp-academic",
      title: "Academic Project Coordination & Technical Leadership",
      season: "Season 3: Hands-On Technical Activities",
      type: "ADDITIONAL EXPERIENCE",
      badge: "COLLABORATION",
      image: "assets/images/billboard-bg.svg",
      matchScore: "98% Match",
      year: "Academic Activities",
      desc: "Academic project coordination and hands-on technical activities involving IoT, programming and practical problem solving. Demonstrated participation, willingness to learn, teamwork and leadership."
    }
  ]
};
