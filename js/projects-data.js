/**
 * projects-data.js
 * Comprehensive portfolio data strictly verified from Durgesh (Dev) Sonar's official resume
 * Designed for the "Obsidian Orange / Cinematic Universe" UI/UX specification
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Durgesh (Dev) Sonar",
    shortName: "Durgesh",
    headline: "Curious mind. Creative code. Limitless possibilities.",
    tagline: "B.Tech CSE (AI & ML) Student | Aspiring Business Analyst | IoT & Technology Enthusiast",
    location: "Sandip University, Nashik, Maharashtra, India",
    email: "durgesh401td@gmail.com",
    github: "https://github.com/durgesh401td-rgb",
    linkedin: "https://www.linkedin.com/in/durgesh-sonar-441231389/",
    status: "Open to internships and opportunities",
    bio: "Motivated B.Tech Computer Science & Engineering (AI & ML) student with hands-on exposure to Python, C/C++, IoT and ESP8266-based projects, along with Business Analytics learning through MyCaptain. Builds and ships independent projects spanning IoT, AI-assisted tools and browser-based interactive apps, published openly on GitHub. Demonstrated problem-solving, teamwork and leadership through academic and project activities, backed by 6 months of practical work experience at Blinkit as a Picker-Packer.",
    metrics: [
      { label: "Academic Standing", value: "B.Tech AI & ML", detail: "Sandip University, Nashik" },
      { label: "Shipped Projects", value: "7+ Practical", detail: "IoT, AI, Web & Games" },
      { label: "Work Experience", value: "6 Months", detail: "Blinkit Fulfillment Center" },
      { label: "Certification", value: "Business Analytics", detail: "MyCaptain · Jan 2026" }
    ]
  },

  // 7 Verified Projects from Official Resume with Full Case Study Data
  projects: [
    {
      id: "aura-assistant",
      title: "AI Voice Assistant — 'Aura'",
      category: "ai",
      status: "Completed",
      badge: "FEATURED AI",
      year: "2026",
      shortSummary: "Voice-enabled autonomous desktop AI assistant for Windows, powered by Google's Gemini multimodal models and an agentic ReAct loop.",
      image: "assets/images/project-aura.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["Python", "Google Gemini API", "ReAct Agent", "Voice AI", "Win32 Automation"],
      caseStudy: {
        overview: "Aura is an autonomous, voice-driven desktop intelligence designed for Windows. Unlike simple keyword-matching voice bots, Aura utilizes Google's Gemini multimodal model orchestrated through an agentic ReAct (Reasoning + Acting) loop to plan, analyze desktop context, and execute complex workflows hands-free.",
        problem: "Traditional voice assistants rely on rigid rule-based command syntax, failing whenever user requests require multi-step reasoning, dynamic desktop context analysis, or error self-correction.",
        goal: "Build an autonomous AI agent capable of understanding conversational intent, reasoning through task decomposition, taking actions on Windows (file operations, browser lookup, system control), and providing spoken audio feedback.",
        role: "Sole AI & Software Engineer — architected the ReAct loop, integrated Gemini API, configured microphone input streaming, and engineered system automation tools.",
        architecture: "Audio Input (SpeechRecognition) → Text Transcription → Agentic ReAct Engine (Google Gemini 1.5 Pro/Flash) → Tool Execution Dispatcher (OS, Browser, Shell) → Speech Synthesis Output (pyttsx3/TTS).",
        challenges: "Managing latency during multi-turn ReAct loops and preventing hallucinated tool arguments. Resolved by implementing strict structured output schema validation and prompt-level tool boundary definitions.",
        outcome: "Created a functional, highly responsive autonomous assistant that handles complex commands such as 'Find my latest assignment PDF, summarize it, and read out the key points' entirely hands-free."
      }
    },
    {
      id: "plant-monitoring",
      title: "Smart Plant Monitoring System using IoT",
      category: "iot",
      status: "Completed",
      badge: "IOT HARDWARE",
      year: "2025",
      shortSummary: "ESP8266-powered smart agricultural telemetry system monitoring soil moisture, temperature, and ambient humidity with automated alerts.",
      image: "assets/images/project-plant-iot.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["ESP8266", "IoT", "C++", "Soil Sensors", "DHT11", "Automation"],
      caseStudy: {
        overview: "An automated IoT environmental monitoring station for domestic plants and greenhouse beds. Using an ESP8266 Wi-Fi microcontroller and analog/digital sensors, it monitors soil moisture levels, ambient air temperature, and humidity in real time, triggering timely alerts before plants experience moisture stress.",
        problem: "Overwatering and severe dehydration are the leading causes of plant mortality in indoor and greenhouse environments due to irregular manual checking.",
        goal: "Engineer an energy-efficient, wireless IoT telemetry node that continuously measures vital soil parameters and alerts caregivers via local RGB indicators and network telemetry.",
        role: "Hardware & Firmware Developer — wired ESP8266 microcontroller, calibrated soil capacitive probes, programmed ADC readings in C++, and established Wi-Fi telemetry.",
        architecture: "Hardware Node (ESP8266 + Soil Hygrometer + DHT11 Temp/Humidity) → Local Threshold Logic → Local LED/Buzzer Alarm → Wi-Fi HTTP Telemetry Stream → Web/Mobile Dashboard.",
        challenges: "Analog sensor corrosion from continuous electrical bias in moist soil. Solved by powering the sensor probe only during active measurement read cycles via an ESP8266 digital GPIO pin.",
        outcome: "Demonstrated reliable, real-time plant telemetry with accurate threshold notifications, significantly reducing water consumption while maintaining optimal soil moisture."
      }
    },
    {
      id: "smart-lighting",
      title: "IoT Smart Lighting & Distance Alert System",
      category: "iot",
      status: "Completed",
      badge: "EMBEDDED",
      year: "2025",
      shortSummary: "Dual-function automated lighting and proximity detection system utilizing ultrasonic sensors, LDRs, and ESP8266 microcontrollers.",
      image: "assets/images/project-smart-lighting.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["ESP8266", "HC-SR04 Ultrasonic", "LDR Sensor", "RGB LED", "C++"],
      caseStudy: {
        overview: "An intelligent lighting and proximity alert hardware system designed for smart buildings and workspace ergonomics. It combines ambient light sensing with ultrasonic proximity detection to automatically illuminate workspaces only when occupants are near in dim environments, while sounding audible/visual distance alerts.",
        problem: "Wasted energy from lighting unoccupied spaces and lack of real-time obstacle/proximity alerts in modern desktop and accessibility workstations.",
        goal: "Develop an automated hardware module combining ambient light thresholds (LDR) with time-of-flight ultrasonic distance calculations (HC-SR04) for adaptive lighting and warning alerts.",
        role: "Embedded Systems Developer — calculated sensor trigger timings, wrote non-blocking interrupt routines in C++, and assembled the circuit board.",
        architecture: "Sensors (LDR light meter + HC-SR04 Ultrasonic) → ESP8266 Microcontroller → Algorithmic Distance & Ambient Calculation → PWM-driven RGB Lighting & Buzzer Alert.",
        challenges: "Ultrasonic bounce anomalies and ambient light flicker. Resolved by applying software sliding-window smoothing filters and hysteresis thresholds on light transitions.",
        outcome: "Successfully achieved automated power-saving illumination and instantaneous distance hazard warnings within 2cm–400cm precision."
      }
    },
    {
      id: "smarttrack",
      title: "SmartTrack — Expense & Investment Tracker",
      category: "web",
      status: "Completed",
      badge: "WEB & ANALYTICS",
      year: "2025",
      shortSummary: "Personal finance and investment dashboard featuring interactive compound-growth calculators and real-time Google Sheets backend persistence.",
      image: "assets/images/project-smarttrack.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["JavaScript", "HTML5", "CSS3", "Google Apps Script", "Google Sheets API"],
      caseStudy: {
        overview: "SmartTrack is a responsive personal finance management dashboard designed to track everyday expenditures, categorize income streams, and model long-term investment compound returns without requiring complex database infrastructure.",
        problem: "Users often avoid budgeting apps that require expensive subscriptions, complicated setups, or storing sensitive financial data on third-party opaque servers.",
        goal: "Create a lightweight, zero-cost, private personal finance tracker that synchronizes transactions directly into the user's private Google Sheet via serverless Google Apps Script REST endpoints.",
        role: "Full-Stack Developer — built the web client, structured financial data models, coded Apps Script web endpoints, and implemented interactive interest forecasting charts.",
        architecture: "Vanilla JS / HTML5 UI → Fetch API REST Calls → Google Apps Script Web App Endpoint → Google Sheets Database + Client-side Compound Growth Calculator.",
        challenges: "CORS handling and authentication with Google Apps Script web apps. Resolved by configuring redirect-following POST request handlers and JSONP fallback structures.",
        outcome: "Delivered a snappy, private, and customizable financial dashboard that empowers users to monitor spending trends and project wealth accumulation effortlessly."
      }
    },
    {
      id: "ai-resume-builder",
      title: "AI Resume Builder",
      category: "web",
      status: "Completed",
      badge: "FULL STACK WEB",
      year: "2025",
      shortSummary: "Client-side interactive web tool that transforms user inputs into professionally formatted, ATS-friendly resumes with instant print styling.",
      image: "assets/images/project-resume-builder.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Engine", "Print CSS"],
      caseStudy: {
        overview: "A streamlined web application that allows students and job seekers to assemble polished, industry-standard resumes in minutes. Features live side-by-side editing, customizable section layouts, and strict ATS-friendly typography with 1-click PDF export.",
        problem: "Job seekers struggle with cumbersome word processor templates that break formatting during export or fail automated Applicant Tracking System (ATS) parsers.",
        goal: "Engineer a high-speed, client-side resume builder that updates the formatted document preview in real time and renders pixel-perfect printed A4 pages.",
        role: "Frontend Engineer — designed the dynamic reactive form inputs, state synchronization engine, and print-optimized stylesheet.",
        architecture: "Reactive Form Controls → JavaScript State Model → Live HTML Template Renderer → CSS Media Print Pagination & Clean Vector PDF Export.",
        challenges: "Ensuring identical rendering between browser preview and printed PDF page boundaries. Solved using strict page-break CSS properties and mm/pt print media queries.",
        outcome: "Created an intuitive, zero-dependency builder that formats resumes cleanly, saving users hours of formatting frustration."
      }
    },
    {
      id: "distance-measurement",
      title: "Distance Measurement System",
      category: "iot",
      status: "Completed",
      badge: "MICROCONTROLLER",
      year: "2024",
      shortSummary: "Accurate ultrasonic distance measurement platform with Arduino signal processing and wireless ESP8266 telemetry.",
      image: "assets/images/project-distance.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["C++", "Arduino", "ESP8266", "Ultrasonic Sensor", "I2C LCD"],
      caseStudy: {
        overview: "A precision distance calculation and telemetry instrument using pulse timing from ultrasonic transducers. The system measures physical distances down to millimeter accuracy, displaying data on a local I2C display while relaying measurements wirelessly over Wi-Fi via an ESP8266 module.",
        problem: "Manual distance measurement in hazardous or confined spaces is dangerous and inefficient, necessitating wireless telemetry.",
        goal: "Build a self-calibrating distance meter capable of accurate measurement across variable temperatures and transmitting data to remote observers.",
        role: "Embedded Hardware Programmer — calibrated sound velocity formulas in C++, managed I2C communication, and linked the Arduino to ESP8266 serial streams.",
        architecture: "HC-SR04 Transducer → Arduino ATmega328P (Microsecond timing) → I2C 16x2 LCD Display → UART Serial Bridge → ESP8266 Wi-Fi Telemetry.",
        challenges: "Microsecond timing precision on Arduino while concurrently driving I2C display updates. Solved by decoupling timing-critical pulse calculations from slower display refresh loops.",
        outcome: "Engineered a robust, portable measurement tool providing instantaneous readouts with high stability across indoor test environments."
      }
    },
    {
      id: "car-racing-game",
      title: "Gesture-Controlled 3D Car Racing Game",
      category: "web",
      status: "Completed",
      badge: "CREATIVE 3D",
      year: "2024",
      shortSummary: "Interactive 3D browser racing game featuring real-time webcam hand tracking with MediaPipe and immersive Three.js physics.",
      image: "assets/images/project-racing.svg",
      github: "https://github.com/durgesh401td-rgb",
      liveDemo: "https://github.com/durgesh401td-rgb",
      technologies: ["JavaScript", "Three.js", "MediaPipe", "Computer Vision", "WebGL"],
      caseStudy: {
        overview: "A cutting-edge interactive web game combining WebGL 3D graphics with computer vision. Players steer an agile race car down an infinite neon highway by tilting their real hands in front of their webcam, completely bypassing traditional keyboard or touch inputs.",
        problem: "Traditional browser games feel disconnected from real-world natural human interactions and rarely take advantage of modern on-device machine learning.",
        goal: "Demonstrate that modern browser APIs and lightweight AI pipelines can deliver latency-free, gesture-driven 3D interactive entertainment directly on standard consumer webcams.",
        role: "Game & Vision Developer — implemented Three.js camera/lighting/mesh rendering, integrated MediaPipe Hand Landmark detection, and mapped spatial coordinates to vehicle physics.",
        architecture: "Webcam Stream → MediaPipe Hand Landmark Detection (TensorFlow.js/WASM) → Gesture Angle Computation → Three.js Vehicle Physics Loop → Dynamic Particle & Audio Effects.",
        challenges: "Maintaining steady 60 FPS while running real-time vision inference on camera frames. Solved by downsampling webcam frames to 320x240 for AI processing and interpolating vehicle steering angles smoothly.",
        outcome: "Created an exhilarating, viral 3D arcade experience that wows users with responsive hands-free control and explosive visual feedback."
      }
    }
  ],

  // Skills Constellation & Categorized List (Strictly from verified resume)
  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "Python", level: "Core Language", detail: "AI assistants, automation scripting, data processing" },
        { name: "C++", level: "Systems & Embedded", detail: "Microcontroller logic, high-performance logic, algorithms" },
        { name: "C", level: "Foundational", detail: "Low-level memory management, hardware control, procedural programming" },
        { name: "JavaScript (ES6+)", level: "Interactive Web", detail: "Modern DOM manipulation, async APIs, WebGL integration" }
      ]
    },
    {
      category: "Artificial Intelligence & Vision",
      icon: "cpu",
      items: [
        { name: "Google Gemini API", level: "GenAI & Multimodal", detail: "Autonomous agent prompt engineering, multimodal reasoning" },
        { name: "MediaPipe", level: "Computer Vision", detail: "Real-time hand tracking and biometric landmark detection" },
        { name: "ReAct Agent Frameworks", level: "Agentic Systems", detail: "Multi-step reasoning and dynamic tool execution" }
      ]
    },
    {
      category: "Web & Graphics Technologies",
      icon: "globe",
      items: [
        { name: "Three.js & WebGL", level: "3D Rendering", detail: "Particle engines, 3D meshes, scene lighting, shaders" },
        { name: "HTML5 Semantic Markup", level: "Modern Web", detail: "Accessible landmark architecture, SEO standards" },
        { name: "CSS3 & Modern Layouts", level: "Responsive Styling", detail: "Glassmorphism, CSS Grid/Flexbox, animations, print styling" }
      ]
    },
    {
      category: "Hardware & IoT Systems",
      icon: "hard-drive",
      items: [
        { name: "ESP8266 Microcontroller", level: "IoT Wireless", detail: "Wi-Fi telemetry, GPIO sensor integration, HTTP requests" },
        { name: "Arduino ATmega", level: "Embedded Prototyping", detail: "Microsecond pulse timing, analog conversions, serial communication" },
        { name: "Sensors & Actuators", level: "Hardware I/O", detail: "Ultrasonic HC-SR04, LDR light meters, soil moisture probes, RGB LEDs" }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      icon: "tool",
      items: [
        { name: "Git & GitHub", level: "Version Control", detail: "Repository maintenance, branching, open source collaboration" },
        { name: "VS Code & MSYS2", level: "Development Toolchains", detail: "Compiler pipelines, C/C++ build chains, extensions" },
        { name: "Google Apps Script", level: "Cloud Automation", detail: "Serverless web endpoints, spreadsheet database automation" }
      ]
    },
    {
      category: "Business & Analytical Skills",
      icon: "trending-up",
      items: [
        { name: "Business Analytics", level: "Certified by MyCaptain", detail: "Market research, data-driven strategy, problem framing" },
        { name: "Project Leadership", level: "Academic & Professional", detail: "Team coordination, technical presentations, problem breakdown" },
        { name: "Operational Discipline", level: "Fulfillment & Supply Chain", detail: "High-accuracy inventory processing, fast-paced workflows" }
      ]
    }
  ],

  // Work Experience (Verified strictly from resume)
  experience: [
    {
      role: "Picker-Packer",
      organization: "Blinkit",
      period: "6 Months",
      type: "Fulfillment & Operations",
      highlights: [
        "Picked and packed customer orders accurately and efficiently in a high-velocity, fast-paced logistics fulfillment center.",
        "Handled diverse inventory items while maintaining strict quality standards and minimizing order processing time.",
        "Collaborated seamlessly with warehouse teammates to guarantee smooth shift handoffs and bottleneck-free operations.",
        "Built practical, lasting discipline in time management, workplace safety, accountability, and operational agility."
      ]
    },
    {
      role: "Academic Technical Coordinator & Developer",
      organization: "Sandip University, Nashik",
      period: "Ongoing (Academic Journey)",
      type: "Student Leadership & Engineering",
      highlights: [
        "Coordinated student project sprints in IoT, microcontrollers, and artificial intelligence.",
        "Organized hands-on peer sessions covering C/C++ compilation, Python agent programming, and WebGL basics.",
        "Spearheaded end-to-end prototyping for environmental monitoring and embedded distance calculation."
      ]
    }
  ],

  // Education (Verified strictly from resume)
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      institution: "Sandip University, Nashik, Maharashtra",
      period: "2022 — 2026",
      status: "Pursuing",
      description: "Comprehensive engineering curriculum with deep emphasis on Artificial Intelligence, Machine Learning models, Object-Oriented Programming (C++/Java/Python), Microcontroller Embedded Systems, Data Structures, Algorithms, and Software Engineering."
    }
  ],

  // Certifications & Achievements (Verified strictly from resume)
  certifications: [
    {
      title: "Business Analytics Certification & Recommendation",
      issuer: "MyCaptain",
      mentor: "Adeeba Kadri",
      date: "January 2026",
      description: "Completed intensive practical training in Business Analytics fundamentals, market research methodologies, and project management. Awarded an official letter of appreciation by mentor Adeeba Kadri commending curiosity, dedication, and problem-solving excellence.",
      recognition: "MyCaptain is recognized by the UN Sustainable Development Solutions Network (SDSN) among the Top 50 youth-led solutions in quality education."
    }
  ],

  achievements: [
    {
      title: "MyCaptain Business Analytics Letter of Appreciation",
      category: "Professional Recognition",
      date: "Jan 2026",
      summary: "Recognized by mentor Adeeba Kadri for outstanding analytical capabilities, proactive participation, and creative problem solving in business analytics."
    },
    {
      title: "Blinkit Operational Excellence",
      category: "Workplace Performance",
      date: "6 Months",
      summary: "Achieved consistent target accuracy in order fulfillment, demonstrating time management and team reliability in high-pressure supply chain operations."
    },
    {
      title: "7 Independent Technical Projects Engineered",
      category: "Software & Hardware",
      date: "2024 — 2026",
      summary: "Authored and published 7 production-grade software and IoT hardware systems on GitHub spanning Voice AI, IoT telemetry, computer vision games, and financial web applications."
    }
  ],

  // Apex Assistant Knowledge Base
  apex: {
    welcomeMessage: "Greetings! I am Apex, Durgesh's intelligent portfolio assistant. Ask me about Durgesh's projects, technical stack, Blinkit experience, or academic background.",
    suggestedQuestions: [
      "Tell me about Durgesh's background",
      "What are Durgesh's top IoT projects?",
      "Why should we hire Durgesh?",
      "How was the AI Assistant 'Aura' built?"
    ]
  }
};

// Freeze for integrity
Object.freeze(PORTFOLIO_DATA);
