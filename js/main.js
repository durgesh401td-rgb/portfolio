/**
 * main.js
 * Interactive logic for Durgesh Sonar's Personal Portfolio Website
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingEffect();
  initMobileMenu();
  initSkills();
  initProjects();
  initDialogModals();
  initContactForm();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode with localStorage & System sync)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  
  // Read saved preference or detect system
  const savedTheme = localStorage.getItem("color-scheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  let currentTheme = savedTheme || (prefersDark.matches ? "dark" : "light");
  applyTheme(currentTheme);

  // Toggle on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      localStorage.setItem("color-scheme", nextTheme);
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme === "light" ? "Light" : "Dark"} mode`);
    });
  }

  // React to OS changes if user hasn't explicitly overridden
  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("color-scheme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (metaColorScheme) metaColorScheme.content = "light";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (metaColorScheme) metaColorScheme.content = "dark";
    }
  }
}

/* --------------------------------------------------------------------------
   2. Typing Effect for Hero Subtitle
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const roles = [
    "Software Engineering Enthusiast",
    "Java & Python Programmer",
    "Full-Stack Web Developer",
    "DSA & Problem Solving Explorer",
    "Open Source Contributor"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const holdTime = 1800;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = holdTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      toggleBtn.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* --------------------------------------------------------------------------
   4. Skills Rendering & Category Tabs
   -------------------------------------------------------------------------- */
function initSkills() {
  const skillsContainer = document.getElementById("skills-grid");
  const skillFilterButtons = document.querySelectorAll(".skills-filter-nav .filter-btn");
  if (!skillsContainer || typeof SKILLS_DATABASE === "undefined") return;

  renderSkills("all");

  skillFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      skillFilterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.skillCategory;
      renderSkills(category);
    });
  });

  function renderSkills(category) {
    skillsContainer.innerHTML = "";
    let itemsToRender = [];

    if (category === "all") {
      Object.keys(SKILLS_DATABASE).forEach(cat => {
        itemsToRender.push(...SKILLS_DATABASE[cat]);
      });
    } else if (SKILLS_DATABASE[category]) {
      itemsToRender = SKILLS_DATABASE[category];
    }

    itemsToRender.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-name-wrap">
            <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
            <span class="skill-name">${skill.name}</span>
          </div>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-progress-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
          <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
        </div>
        <p class="skill-desc">${skill.description}</p>
      `;
      skillsContainer.appendChild(card);
    });
  }
}

/* --------------------------------------------------------------------------
   5. Projects Showcase, Search & Filtering
   -------------------------------------------------------------------------- */
function initProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const searchInput = document.getElementById("project-search-input");
  const tabButtons = document.querySelectorAll(".project-tab-btn");

  if (!projectsGrid || typeof PORTFOLIO_PROJECTS === "undefined") return;

  let currentCategory = "all";
  let currentSearchQuery = "";

  renderFilteredProjects();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderFilteredProjects();
    });
  }

  // Filter tabs handler
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.projectFilter;
      renderFilteredProjects();
    });
  });

  function renderFilteredProjects() {
    projectsGrid.innerHTML = "";

    const filtered = PORTFOLIO_PROJECTS.filter(project => {
      const matchesCategory = currentCategory === "all" || project.category === currentCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(currentSearchQuery) ||
        project.tagline.toLowerCase().includes(currentSearchQuery) ||
        project.tags.some(t => t.toLowerCase().includes(currentSearchQuery)) ||
        project.description.toLowerCase().includes(currentSearchQuery);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="no-projects-msg">
          <p>🔍 No projects found matching your search criteria.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-thumb-wrap">
          <img src="${project.image}" alt="${project.title} Preview" class="project-thumb" loading="lazy" />
          <span class="project-category-badge">${project.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <div class="project-tags">
            ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-footer-actions">
            <button class="btn btn-secondary btn-sm open-details-btn" data-project-id="${project.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Details
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" aria-label="GitHub Repository for ${project.title}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                Code
              </a>
              <a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" aria-label="Live Demo for ${project.title}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    // Attach modal trigger listeners
    document.querySelectorAll(".open-details-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const projectId = btn.dataset.projectId;
        openProjectModal(projectId);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. Native <dialog> Modals (Accessible & Light-Dismiss)
   -------------------------------------------------------------------------- */
function initDialogModals() {
  const projectDialog = document.getElementById("project-dialog");
  const resumeDialog = document.getElementById("resume-dialog");

  // Project Modal Close
  const projectCloseBtn = document.getElementById("project-dialog-close");
  if (projectCloseBtn && projectDialog) {
    projectCloseBtn.addEventListener("click", () => projectDialog.close());
  }

  // Resume Modal Close
  const resumeCloseBtn = document.getElementById("resume-dialog-close");
  if (resumeCloseBtn && resumeDialog) {
    resumeCloseBtn.addEventListener("click", () => resumeDialog.close());
  }

  // View Resume Buttons
  document.querySelectorAll(".open-resume-modal-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (resumeDialog) resumeDialog.showModal();
    });
  });

  // Light-dismiss support (clicking the backdrop outside the dialog bounds)
  [projectDialog, resumeDialog].forEach(dialog => {
    if (!dialog) return;
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  });
}

function openProjectModal(projectId) {
  const dialog = document.getElementById("project-dialog");
  const modalBody = document.getElementById("project-dialog-body");
  const modalTitle = document.getElementById("project-dialog-title");
  const modalGithubLink = document.getElementById("project-dialog-github");
  const modalLiveLink = document.getElementById("project-dialog-live");

  if (!dialog || typeof PORTFOLIO_PROJECTS === "undefined") return;

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  modalTitle.textContent = project.title;
  modalGithubLink.href = project.github;
  modalLiveLink.href = project.liveDemo;

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title} Preview" style="width:100%; border-radius:10px; margin-bottom:1.5rem; border:1px solid var(--border-color);" />
    <p style="font-size:1.05rem; color:var(--text-secondary); margin-bottom:1.5rem;">${project.description}</p>
    
    <h4 style="font-size:1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem;">Key Architecture & Technical Accomplishments:</h4>
    <ul style="padding-left:1.4rem; color:var(--text-secondary); font-size:0.95rem; margin-bottom:1.5rem; line-height:1.7;">
      ${project.highlights.map(h => `<li>${h}</li>`).join("")}
    </ul>

    <h4 style="font-size:1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem;">Technologies Employed:</h4>
    <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
      ${project.tags.map(t => `<span class="tech-tag" style="padding:0.35rem 0.75rem; font-size:0.82rem;">${t}</span>`).join("")}
    </div>
  `;

  dialog.showModal();
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling & Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      showToast("⚠️ Please complete all required fields.", "warning");
      return;
    }

    // Submit animation & feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("🎉 Thank you, Durgesh received your message!", "success");

      // Optional mailto fallback trigger
      const mailtoUrl = `mailto:durgeshsonar401@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   8. Scroll Spy & Active Navigation
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   9. Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
