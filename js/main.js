/**
 * main.js
 * Cinematic Universe / Obsidian Orange Interactive Engine
 * Portfolio of Durgesh (Dev) Sonar
 * Adheres strictly to Modern Web Guidelines & WCAG Accessibility
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeManager();
  initAccessibilityManager();
  initSoundEngine();
  initNavigation();
  initDigitalPlanet();
  initSkillsConstellation();
  initProjectTiltAndModal();
  initContactForm();
  initApexAssistant();
  initEasterEgg();
});

/* --------------------------------------------------------------------------
   1. Theme Management (compliant with modern-web-guidance dark-mode-toggle)
   -------------------------------------------------------------------------- */
function initThemeManager() {
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-toggle-icon");
  const themeLabel = document.getElementById("theme-toggle-label");

  function getStoredTheme() {
    try {
      return localStorage.getItem("color-scheme");
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    if (!metaColorScheme) return;
    if (theme === "light" || theme === "dark") {
      metaColorScheme.content = theme;
      try { localStorage.setItem("color-scheme", theme); } catch (e) {}
    } else {
      metaColorScheme.content = "light dark";
      try { localStorage.removeItem("color-scheme"); } catch (e) {}
    }
    updateUI(theme);
  }

  function updateUI(theme) {
    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
    }
    if (themeLabel) {
      themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
    if (themeIcon) {
      themeIcon.innerHTML = isDark
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  // Initial setup
  const current = getStoredTheme();
  applyTheme(current);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const active = getStoredTheme();
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      let nextTheme;
      if (!active) {
        nextTheme = isSystemDark ? "light" : "dark";
      } else if (active === "dark") {
        nextTheme = "light";
      } else {
        nextTheme = "dark";
      }
      applyTheme(nextTheme);
      playSound("click");
    });
  }

  // Cross-tab sync via storage event
  window.addEventListener("storage", (e) => {
    if (e.key === "color-scheme") {
      applyTheme(e.newValue);
    }
  });

  // OS preference change listener
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!getStoredTheme()) {
      updateUI(null);
    }
  });
}

/* --------------------------------------------------------------------------
   2. Accessibility Controls (Font Scaling, Motion Override, High Contrast)
   -------------------------------------------------------------------------- */
function initAccessibilityManager() {
  const a11yToggleBtn = document.getElementById("a11y-toggle-btn");
  const a11yDialog = document.getElementById("a11y-dialog");
  const a11yCloseBtn = document.getElementById("a11y-close-btn");
  const fontNormalBtn = document.getElementById("font-normal-btn");
  const fontLgBtn = document.getElementById("font-lg-btn");
  const fontXlBtn = document.getElementById("font-xl-btn");
  const motionToggleBtn = document.getElementById("motion-toggle-btn");
  const contrastToggleBtn = document.getElementById("contrast-toggle-btn");

  if (a11yToggleBtn && a11yDialog) {
    a11yToggleBtn.addEventListener("click", () => {
      a11yDialog.showModal();
      playSound("pop");
    });
  }
  if (a11yCloseBtn && a11yDialog) {
    a11yCloseBtn.addEventListener("click", () => a11yDialog.close());
  }

  // Font scaling
  const root = document.documentElement;
  fontNormalBtn?.addEventListener("click", () => {
    root.classList.remove("font-scale-lg", "font-scale-xl");
    playSound("click");
  });
  fontLgBtn?.addEventListener("click", () => {
    root.classList.add("font-scale-lg");
    root.classList.remove("font-scale-xl");
    playSound("click");
  });
  fontXlBtn?.addEventListener("click", () => {
    root.classList.add("font-scale-xl");
    root.classList.remove("font-scale-lg");
    playSound("click");
  });

  // High contrast
  contrastToggleBtn?.addEventListener("click", () => {
    root.classList.toggle("high-contrast");
    const active = root.classList.contains("high-contrast");
    contrastToggleBtn.setAttribute("aria-pressed", active ? "true" : "false");
    playSound("click");
  });

  // Motion toggle
  motionToggleBtn?.addEventListener("click", () => {
    const isReduced = root.getAttribute("data-reduce-motion") === "true";
    if (isReduced) {
      root.removeAttribute("data-reduce-motion");
      motionToggleBtn.setAttribute("aria-pressed", "false");
    } else {
      root.setAttribute("data-reduce-motion", "true");
      motionToggleBtn.setAttribute("aria-pressed", "true");
    }
    playSound("click");
  });
}

/* --------------------------------------------------------------------------
   3. Web Audio Synthesis Engine (Muted by default, strictly opt-in)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = false;

function initSoundEngine() {
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  const soundIcon = document.getElementById("sound-toggle-icon");

  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
    if (soundEnabled && !audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (soundIcon) {
      soundIcon.innerHTML = soundEnabled
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
    }
    if (soundEnabled) playSound("pop");
  });
}

function playSound(type) {
  if (!soundEnabled || !audioCtx) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;
  if (type === "click") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === "pop") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(980, now + 0.08);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  } else if (type === "supernova") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  }
}

/* --------------------------------------------------------------------------
   4. Navigation & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const sidebar = document.getElementById("app-sidebar");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const overlay = document.getElementById("mobile-drawer-overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  // Mobile toggle
  function toggleMobile(open) {
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = sidebar?.classList.contains("open");
    toggleMobile(!isOpen);
    playSound("click");
  });

  overlay?.addEventListener("click", () => toggleMobile(false));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobile(false);
      playSound("click");
    });
  });

  // Scroll spy
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 180;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((l) => {
          if (l.getAttribute("href") === `#${id}`) {
            l.classList.add("active");
          } else {
            l.classList.remove("active");
          }
        });
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Digital Planet 3D Interactive Canvas (Three.js + HTML5 Canvas Fallback)
   -------------------------------------------------------------------------- */
function initDigitalPlanet() {
  const canvas = document.getElementById("digital-planet-canvas");
  if (!canvas) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
                          document.documentElement.getAttribute("data-reduce-motion") === "true";

  // Check if Three.js is loaded
  if (typeof THREE !== "undefined") {
    try {
      renderThreePlanet(canvas, isReducedMotion);
      return;
    } catch (e) {
      console.warn("Three.js initialization failed, using resilient Canvas fallback:", e);
    }
  }

  // Resilient pure 2D Canvas Fallback
  renderCanvasPlanet(canvas, isReducedMotion);
}

function renderThreePlanet(canvas, isReducedMotion) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.z = 3.6;

  // Sphere geometry with wireframe & particles
  const sphereGeo = new THREE.SphereGeometry(1.2, 28, 28);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0xFF7A1A,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  scene.add(sphere);

  // Outer particle cloud
  const particleCount = 280;
  const posArray = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 1.4 + Math.random() * 0.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i + 2] = radius * Math.cos(phi);
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.035,
    color: 0xFFB347,
    transparent: true,
    opacity: 0.85
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Mouse Parallax
  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  }, { passive: true });

  let animFrame;
  function animate() {
    if (!isReducedMotion) {
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;
      particles.rotation.y -= 0.002;

      sphere.rotation.y += (mouseX - sphere.rotation.y) * 0.05;
      sphere.rotation.x += (mouseY - sphere.rotation.x) * 0.05;
    }
    renderer.render(scene, camera);
    if (!isReducedMotion) {
      animFrame = requestAnimationFrame(animate);
    }
  }
  animate();

  window.addEventListener("resize", () => {
    if (!canvas) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    renderer.render(scene, camera);
  }, { passive: true });
}

function renderCanvasPlanet(canvas, isReducedMotion) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function resize() {
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resize();

  let angle = 0;
  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.36;

    ctx.clearRect(0, 0, w, h);

    // Outer glow
    const grad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.3);
    grad.addColorStop(0, "rgba(255, 122, 26, 0.2)");
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
    ctx.fill();

    // Planet Circle
    ctx.strokeStyle = "rgba(255, 122, 26, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating wireframe rings
    for (let i = 0; i < 4; i++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle + (i * Math.PI) / 4);
      ctx.strokeStyle = i % 2 === 0 ? "rgba(255, 179, 71, 0.35)" : "rgba(255, 122, 26, 0.25)";
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    if (!isReducedMotion) {
      angle += 0.008;
      requestAnimationFrame(draw);
    }
  }
  draw();
  window.addEventListener("resize", resize, { passive: true });
}

/* --------------------------------------------------------------------------
   6. Skills Constellation Interactive Canvas
   -------------------------------------------------------------------------- */
function initSkillsConstellation() {
  const canvas = document.getElementById("constellation-canvas");
  const tooltip = document.getElementById("constellation-tooltip");
  const tabConstellation = document.getElementById("tab-view-constellation");
  const tabList = document.getElementById("tab-view-list");
  const constellationContainer = document.getElementById("constellation-container");
  const listContainer = document.getElementById("skills-list-container");

  // Tab view switcher
  tabConstellation?.addEventListener("click", () => {
    tabConstellation.classList.add("active");
    tabList?.classList.remove("active");
    if (constellationContainer) constellationContainer.style.display = "block";
    if (listContainer) listContainer.style.display = "none";
    playSound("click");
  });

  tabList?.addEventListener("click", () => {
    tabList.classList.add("active");
    tabConstellation?.classList.remove("active");
    if (constellationContainer) constellationContainer.style.display = "none";
    if (listContainer) listContainer.style.display = "grid";
    playSound("click");
  });

  if (!canvas || !tooltip) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function resize() {
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resize();

  // Nodes strictly derived from verified resume skills
  const nodes = [
    { name: "Python", category: "Core Language", x: 0.22, y: 0.35, r: 12 },
    { name: "C++", category: "Systems & Embedded", x: 0.32, y: 0.65, r: 11 },
    { name: "C", category: "Foundational", x: 0.16, y: 0.72, r: 9 },
    { name: "JavaScript", category: "Interactive Web", x: 0.50, y: 0.30, r: 11 },
    { name: "Three.js", category: "3D Rendering", x: 0.62, y: 0.22, r: 10 },
    { name: "Gemini API", category: "AI & Multimodal", x: 0.38, y: 0.20, r: 12 },
    { name: "MediaPipe", category: "Computer Vision", x: 0.75, y: 0.38, r: 10 },
    { name: "ESP8266", category: "IoT Microcontroller", x: 0.42, y: 0.80, r: 13 },
    { name: "Sensors & LDR", category: "Hardware I/O", x: 0.58, y: 0.85, r: 10 },
    { name: "Apps Script", category: "Cloud Automation", x: 0.82, y: 0.55, r: 9 },
    { name: "Business Analytics", category: "MyCaptain Certified", x: 0.70, y: 0.70, r: 12 }
  ];

  let mouseX = -100, mouseY = -100;
  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  canvas.addEventListener("mouseleave", () => {
    mouseX = -100;
    mouseY = -100;
    tooltip.style.opacity = "0";
  });

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
                          document.documentElement.getAttribute("data-reduce-motion") === "true";

  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // Draw connecting lines
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const x1 = nodes[i].x * w;
        const y1 = nodes[i].y * h;
        const x2 = nodes[j].x * w;
        const y2 = nodes[j].y * h;
        const dist = Math.hypot(x2 - x1, y2 - y1);
        if (dist < 180) {
          const alpha = 1 - dist / 180;
          ctx.strokeStyle = `rgba(255, 122, 26, ${alpha * 0.3})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    let hovered = null;
    nodes.forEach((n) => {
      const nx = n.x * w;
      const ny = n.y * h;
      const distMouse = Math.hypot(mouseX - nx, mouseY - ny);
      const isHover = distMouse < n.r + 6;

      if (isHover) hovered = n;

      // Glow
      ctx.fillStyle = isHover ? "rgba(255, 179, 71, 0.45)" : "rgba(255, 122, 26, 0.15)";
      ctx.beginPath();
      ctx.arc(nx, ny, n.r * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Node core
      ctx.fillStyle = isHover ? "#FFB347" : "#FF7A1A";
      ctx.beginPath();
      ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = "#F5F5F2";
      ctx.font = "600 12px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(n.name, nx, ny + n.r + 16);
    });

    if (hovered) {
      tooltip.style.opacity = "1";
      tooltip.style.left = `${hovered.x * w}px`;
      tooltip.style.top = `${hovered.y * h}px`;
      tooltip.innerHTML = `<strong>${hovered.name}</strong><br><span style="color: #FFB347; font-size: 0.72rem;">${hovered.category}</span>`;
    } else {
      tooltip.style.opacity = "0";
    }

    if (!isReducedMotion) {
      requestAnimationFrame(draw);
    }
  }
  draw();
  window.addEventListener("resize", resize, { passive: true });
}

/* --------------------------------------------------------------------------
   7. Curated Project Tilt Cards & Case Study Modal Dialog
   -------------------------------------------------------------------------- */
function initProjectTiltAndModal() {
  const cards = document.querySelectorAll(".project-card");
  const dialog = document.getElementById("case-study-dialog");
  const closeBtn = document.getElementById("case-study-close-btn");

  // 3D Perspective Tilt and Specular Holographic Glare on MouseMove
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      const xPercent = (clientX / rect.width) * 100;
      const yPercent = (clientY / rect.height) * 100;

      const x = clientX - rect.width / 2;
      const y = clientY - rect.height / 2;
      const rotateX = -(y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;

      card.style.setProperty("--mouse-x", `${xPercent}%`);
      card.style.setProperty("--mouse-y", `${yPercent}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    });

    // Keyboard accessibility: Enter or Space triggers case study modal
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const projectId = card.getAttribute("data-project-id");
        openCaseStudy(projectId);
      }
    });

    // Open Case Study Modal on click (prevent trigger if clicking quick icon links)
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-quick-links") || e.target.closest(".card-icon-link")) return;
      const projectId = card.getAttribute("data-project-id");
      openCaseStudy(projectId);
    });
  });

  function openCaseStudy(id) {
    if (!dialog || typeof PORTFOLIO_DATA === "undefined") return;
    const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    if (!project) return;

    // Populate Dialog Elements
    const img = document.getElementById("dialog-banner-img");
    const badgeText = document.getElementById("dialog-badge-text");
    const title = document.getElementById("dialog-title");
    const overview = document.getElementById("dialog-overview");
    const problem = document.getElementById("dialog-problem");
    const goal = document.getElementById("dialog-goal");
    const role = document.getElementById("dialog-role");
    const process = document.getElementById("dialog-process");
    const architecture = document.getElementById("dialog-architecture");
    const challenges = document.getElementById("dialog-challenges");
    const outcome = document.getElementById("dialog-outcome");
    const lessons = document.getElementById("dialog-lessons");
    const githubBtn = document.getElementById("dialog-github-btn");
    const demoBtn = document.getElementById("dialog-demo-btn");
    const tagsContainer = document.getElementById("dialog-tags");

    if (img) {
      img.src = project.image;
      img.onerror = () => {
        if (project.fallbackImage) img.src = project.fallbackImage;
      };
    }
    if (badgeText) badgeText.textContent = `${project.badge || "COMPLETED"} · ${project.year || "2025"}`;
    if (title) title.textContent = project.title;
    if (overview) overview.textContent = project.caseStudy.overview;
    if (problem) problem.textContent = project.caseStudy.problem;
    if (goal) goal.textContent = project.caseStudy.goal;
    if (role) role.textContent = project.caseStudy.role;
    if (process) process.textContent = project.caseStudy.process;
    if (architecture) architecture.textContent = project.caseStudy.architecture;
    if (challenges) challenges.textContent = project.caseStudy.challenges;
    if (outcome) outcome.textContent = project.caseStudy.outcome;
    if (lessons) lessons.textContent = project.caseStudy.lessons;

    if (githubBtn) githubBtn.href = project.github;
    if (demoBtn) demoBtn.href = project.liveDemo;

    if (tagsContainer) {
      tagsContainer.innerHTML = project.technologies
        .map((t) => `<span class="tech-tag">${t}</span>`)
        .join("");
    }

    dialog.showModal();
    playSound("pop");
  }

  closeBtn?.addEventListener("click", () => {
    dialog?.close();
    playSound("click");
  });

  dialog?.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}

/* --------------------------------------------------------------------------
   8. Contact Form Client-side Validation & Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusBox = document.getElementById("form-status-message");

  if (!form || !statusBox) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value.trim();
    const email = form.elements["email"]?.value.trim();
    const message = form.elements["message"]?.value.trim();

    if (!name || !email || !message) {
      statusBox.className = "form-status error";
      statusBox.textContent = "Please fill in all required fields (Name, Email, and Message).";
      playSound("click");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusBox.className = "form-status error";
      statusBox.textContent = "Please enter a valid email address.";
      playSound("click");
      return;
    }

    // Success Simulation
    statusBox.className = "form-status success";
    statusBox.textContent = `Thank you, ${name}! Your message has been received. Durgesh will get back to you shortly.`;
    form.reset();
    playSound("pop");
  });
}

/* --------------------------------------------------------------------------
   9. Apex Assistant UX (Non-intrusive floating assistant)
   -------------------------------------------------------------------------- */
function initApexAssistant() {
  const launcher = document.getElementById("apex-launcher-btn");
  const drawer = document.getElementById("apex-chat-drawer");
  const closeBtn = document.getElementById("apex-close-btn");
  const clearBtn = document.getElementById("apex-clear-btn");
  const input = document.getElementById("apex-user-input");
  const sendBtn = document.getElementById("apex-send-btn");
  const messageList = document.getElementById("apex-messages-list");
  const promptChips = document.querySelectorAll(".quick-prompt-chip");

  if (!launcher || !drawer) return;

  launcher.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    drawer.classList.toggle("open", !isOpen);
    launcher.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    playSound("pop");
    if (!isOpen && input) input.focus();
  });

  closeBtn?.addEventListener("click", () => {
    drawer.classList.remove("open");
    launcher.setAttribute("aria-expanded", "false");
    playSound("click");
  });

  clearBtn?.addEventListener("click", () => {
    if (messageList) {
      messageList.innerHTML = `<div class="chat-bubble bot">${PORTFOLIO_DATA.apex.welcomeMessage}</div>`;
    }
    playSound("click");
  });

  promptChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const text = chip.textContent.trim();
      handleUserMessage(text);
      playSound("click");
    });
  });

  sendBtn?.addEventListener("click", () => {
    const text = input?.value.trim();
    if (text) {
      handleUserMessage(text);
      if (input) input.value = "";
    }
  });

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = input.value.trim();
      if (text) {
        handleUserMessage(text);
        input.value = "";
      }
    }
  });

  function handleUserMessage(query) {
    if (!messageList) return;

    // Append user message
    const userDiv = document.createElement("div");
    userDiv.className = "chat-bubble user";
    userDiv.textContent = query;
    messageList.appendChild(userDiv);
    messageList.scrollTop = messageList.scrollHeight;
    playSound("click");

    // Generate intelligent assistant response
    setTimeout(() => {
      const botResponse = generateApexResponse(query);
      const botDiv = document.createElement("div");
      botDiv.className = "chat-bubble bot";
      botDiv.innerHTML = botResponse;
      messageList.appendChild(botDiv);
      messageList.scrollTop = messageList.scrollHeight;
      playSound("pop");
    }, 450);
  }

  function generateApexResponse(q) {
    const lower = q.toLowerCase();
    if (lower.includes("background") || lower.includes("who is") || lower.includes("about")) {
      return "<strong>Durgesh (Dev) Sonar</strong> is a B.Tech Computer Science & Engineering (AI & ML) student at Sandip University, Nashik. He builds hands-on IoT systems, AI-powered tools, and holds 6 months of operational experience at Blinkit.";
    }
    if (lower.includes("iot") || lower.includes("plant") || lower.includes("hardware") || lower.includes("esp8266")) {
      return "Durgesh has engineered 3 major IoT systems: <strong>Smart Plant Monitoring</strong> with soil & telemetry sensors, the <strong>Smart Lighting & Distance Alert System</strong> using ultrasonic HC-SR04, and the <strong>Distance Measurement System</strong> with Arduino/ESP8266.";
    }
    if (lower.includes("aura") || lower.includes("voice") || lower.includes("assistant")) {
      return "<strong>AI Voice Assistant 'Aura'</strong> is built with Python and the Google Gemini API. It uses an autonomous <strong>ReAct (Reasoning + Acting)</strong> loop to decompose voice commands and execute multi-step desktop automation on Windows.";
    }
    if (lower.includes("hire") || lower.includes("recruiter") || lower.includes("why")) {
      return "Durgesh combines cutting-edge AI & IoT engineering with practical supply-chain discipline from <strong>Blinkit</strong> and formal <strong>Business Analytics</strong> training from MyCaptain. He ships working code openly on GitHub.";
    }
    if (lower.includes("blinkit") || lower.includes("experience")) {
      return "Durgesh spent 6 months at <strong>Blinkit</strong> as a Picker-Packer, mastering high-accuracy order fulfillment, inventory management, shift teamwork, and operational agility in a high-speed warehouse environment.";
    }
    return "I can answer questions regarding Durgesh's 7 projects, technical stack (Python, C++, IoT, Gemini API), education at Sandip University, or business analytics certification. Try asking: <em>'What are Durgesh's top IoT projects?'</em>";
  }
}

/* --------------------------------------------------------------------------
   10. Secret Easter Egg: Celestial Supernova Burst (Ctrl+Shift+D or 3 Clicks)
   -------------------------------------------------------------------------- */
function initEasterEgg() {
  const brandOrb = document.getElementById("brand-orb-trigger");
  let clickCount = 0;

  function triggerSupernova() {
    playSound("supernova");
    const burst = document.createElement("div");
    burst.style.position = "fixed";
    burst.style.inset = "0";
    burst.style.background = "radial-gradient(circle, rgba(255, 122, 26, 0.4) 0%, transparent 70%)";
    burst.style.zIndex = "99999";
    burst.style.pointerEvents = "none";
    burst.style.transition = "opacity 0.8s ease-out";
    document.body.appendChild(burst);

    setTimeout(() => {
      burst.style.opacity = "0";
      setTimeout(() => burst.remove(), 800);
    }, 200);

    alert("✨ Celestial Core Activated! Durgesh (Dev) Sonar's limitless universe unlocked.");
  }

  brandOrb?.addEventListener("click", () => {
    clickCount++;
    if (clickCount >= 3) {
      clickCount = 0;
      triggerSupernova();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
      triggerSupernova();
    }
  });
}
