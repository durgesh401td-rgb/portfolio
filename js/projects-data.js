/**
 * projects-data.js
 * Structured data strictly based on Durgesh Sonar's official resume
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "plant-monitoring",
    title: "Smart Plant Monitoring System using IoT",
    category: "iot",
    tagline: "Sensor-based environmental telemetry and automated smart plant care.",
    description: "Developed an IoT-based plant monitoring concept using ESP8266 and sensor-based data collection to monitor plant/environment conditions and support smarter plant care. Uses analog moisture probes and temperature/humidity sensors to prevent underwatering or heat stress with automated threshold alerts.",
    tags: ["ESP8266", "IoT", "Sensors", "Automation", "C++", "Wi-Fi"],
    image: "assets/images/project-plant-iot.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Designed and deployed ESP8266 Wi-Fi node for continuous plant environment telemetry",
      "Sensor-based data collection tracking moisture levels and ambient conditions",
      "Threshold-triggered care alerts for proactive plant health management"
    ]
  },
  {
    id: "smart-lighting",
    title: "IoT Smart Lighting & Distance Alert System",
    category: "iot",
    tagline: "Proximity detection & ambient light-reactive smart LED indication.",
    description: "Built an ESP8266-based system using an ultrasonic sensor, LDR (Light Dependent Resistor), and LED/RGB indication for distance-based alerts and smart lighting behavior. Adapts lighting intensity according to ambient lux and pulses warning alerts when objects breach defined proximity safety zones.",
    tags: ["ESP8266", "Ultrasonic Sensor", "LDR", "LED/RGB Indication", "Hardware"],
    image: "assets/images/project-smart-lighting.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Integrated HC-SR04 ultrasonic sensor with analog LDR sensor onto ESP8266",
      "Configured distance-based RGB warning thresholds and auto-dimming rules",
      "Low-latency response time with automated alert triggers"
    ]
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    category: "web",
    tagline: "Web-based tool generating professionally formatted, ATS-compliant resumes.",
    description: "A web-based tool that helps users create professional resumes quickly — users enter details such as education, skills, projects and experience, and the tool generates a formatted resume. Built with clean responsive HTML, CSS, and modular JavaScript with instant printable layout rendering.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI", "Resume Generator"],
    image: "assets/images/project-resume-builder.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Guided multi-step input wizard for user profile, education, skills, and work history",
      "Instant real-time formatted resume preview with high visual hierarchy",
      "One-click browser print and PDF export with dedicated print stylesheets"
    ]
  },
  {
    id: "smarttrack",
    title: "SmartTrack — Expense & Investment Tracker",
    category: "web",
    tagline: "Responsive expense portal with compound-growth calculators & Google Sheets sync.",
    description: "A responsive Expense & Investment Tracker web portal featuring interactive compound-growth calculators, with real-time data storage powered by Google Sheets and Google Apps Script. Offers streamlined budgeting, investment return simulations, and automated cloud sheet synchronization.",
    tags: ["HTML", "Google Apps Script", "Google Sheets API", "Analytics", "JavaScript"],
    image: "assets/images/project-smarttrack.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Engineered interactive compound-growth and ROI projection calculators",
      "Real-time bidirectional cloud data storage using Google Apps Script & Google Sheets",
      "Categorized expense breakdowns and financial overview metrics"
    ]
  },
  {
    id: "aura-assistant",
    title: "AI Voice Assistant — 'Aura'",
    category: "ai",
    tagline: "Autonomous desktop voice assistant with Google Gemini multimodal ReAct loop.",
    description: "A next-generation, voice-enabled autonomous desktop AI assistant for Windows, powered by Google's Gemini multimodal models and an agentic ReAct loop rather than simple command matching. Capable of reasoning through multi-step desktop tasks, voice interaction, and multimodal understanding.",
    tags: ["Python", "Google Gemini API", "ReAct Agent", "Voice AI", "Windows Automation"],
    image: "assets/images/project-aura.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Implemented an agentic ReAct (Reasoning + Acting) loop for dynamic planning and execution",
      "Integrated Google Gemini multimodal models for natural language and visual reasoning",
      "Voice-enabled interaction loop with automated system execution on Windows"
    ]
  },
  {
    id: "distance-measurement",
    title: "Distance Measurement System",
    category: "iot",
    tagline: "Wireless ultrasonic range-finder node using Arduino & ESP8266 Wi-Fi.",
    description: "An IoT-based system built with Arduino and an ESP8266 Wi-Fi module — an ultrasonic sensor measures distance to an object, Arduino processes the readings, and the ESP8266 sends the data wirelessly to a web dashboard or monitoring endpoint.",
    tags: ["C++", "Arduino", "ESP8266", "Ultrasonic Sensor", "Wireless IoT"],
    image: "assets/images/project-distance.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Accurate time-of-flight ultrasonic pulse distance calculation in C++",
      "Inter-board serial communication between Arduino ATmega328P and ESP8266",
      "Wireless transmission of real-time telemetry over local Wi-Fi network"
    ]
  },
  {
    id: "car-racing-game",
    title: "Gesture-Controlled 3D Car Racing Game",
    category: "web",
    tagline: "Infinite solar highway 3D racer controlled via MediaPipe webcam hand tracking.",
    description: "A gesture-controlled, infinite car racing game featuring bright Solar Highway graphics and a Knockout Elimination mode, with real-time hand tracking via webcam and explosion effects. Utilizes Three.js for 3D rendering and MediaPipe for low-latency hands-free computer vision steering.",
    tags: ["JavaScript", "Three.js", "MediaPipe", "Computer Vision", "WebGL", "Gaming"],
    image: "assets/images/project-racing.svg",
    github: "https://github.com/durgesh401td-rgb",
    liveDemo: "https://github.com/durgesh401td-rgb",
    highlights: [
      "Real-time webcam hand tracking using Google MediaPipe Hand Landmark detection",
      "Interactive 3D graphics rendering at 60 FPS powered by Three.js",
      "Knockout Elimination gameplay mode with dynamic obstacles and collision physics"
    ]
  }
];

// Technical skills database strictly based on the PDF
const SKILLS_DATABASE = {
  programming: [
    { name: "C", level: 85, icon: "⚙️", description: "Structured programming, pointers, low-level logic, algorithmic problem solving" },
    { name: "C++", level: 88, icon: "⚡", description: "Object-oriented programming, standard template library (STL), Arduino firmware" },
    { name: "Python", level: 90, icon: "🐍", description: "Scripting, Google Gemini API integration, ReAct agent loops, automation" },
    { name: "JavaScript", level: 85, icon: "🌐", description: "Interactive web applications, DOM manipulation, Three.js 3D rendering, ES6+" }
  ],
  web: [
    { name: "HTML", level: 95, icon: "📄", description: "Semantic markup, structure, accessibility, forms, responsive structure" },
    { name: "CSS", level: 90, icon: "🎨", description: "CSS Grid, Flexbox, responsive layouts, dark/light themes, animations" },
    { name: "JavaScript", level: 85, icon: "⚡", description: "Client-side interactive behavior, async event handling, dynamic UI rendering" },
    { name: "Three.js", level: 80, icon: "🎮", description: "3D scene creation, WebGL rendering, camera controls, interactive games" }
  ],
  ai_tooling: [
    { name: "Google Gemini API", level: 88, icon: "✨", description: "Multimodal AI reasoning, text/voice prompt engineering, agentic systems" },
    { name: "MediaPipe", level: 82, icon: "🖐️", description: "Real-time webcam computer vision, hand landmark tracking, gesture control" },
    { name: "Google Apps Script", level: 85, icon: "📊", description: "Cloud workflow automation, Google Sheets bidirectional API data synchronization" }
  ],
  development: [
    { name: "VS Code", level: 92, icon: "💻", description: "Primary IDE, extensions, terminal workflow, debugging" },
    { name: "MSYS2", level: 82, icon: "🧰", description: "GCC compiler toolchains, MinGW environment for C/C++ development" },
    { name: "Git & GitHub", level: 88, icon: "🐙", description: "Version control, repositories, commits, branch management, open source" }
  ],
  iot_hardware: [
    { name: "ESP8266 Wi-Fi", level: 90, icon: "📡", description: "Microcontroller programming, Wi-Fi telemetry, IoT nodes, embedded C++" },
    { name: "Ultrasonic & Distance Sensors", level: 88, icon: "📏", description: "HC-SR04 pulse timing, obstacle detection, proximity warning systems" },
    { name: "LEDs & RGB Indication", level: 90, icon: "💡", description: "Visual alert signaling, PWM color control, status indicators" },
    { name: "Sensor-Based Automation", level: 88, icon: "🤖", description: "LDR light sensing, soil moisture tracking, threshold-triggered actuation" }
  ],
  analytics: [
    { name: "Business Analytics Fundamentals", level: 85, icon: "📈", description: "Business metrics, decision-making frameworks, project-based data analysis" },
    { name: "Project-Based Learning", level: 88, icon: "🎯", description: "Practical case studies through MyCaptain, problem solving, adherence to guidelines" }
  ]
};
