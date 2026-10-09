/**
 * main.js
 * Netflix "DURFLIX" Interactive Engine for Durgesh Sonar's Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initSearchWidget();
  initProfiles();
  initBillboard();
  initNetflixRows();
  initCarouselArrows();
  initNetflixModal();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Transition
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById("netflix-navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

/* --------------------------------------------------------------------------
   2. Expandable Search Widget
   -------------------------------------------------------------------------- */
function initSearchWidget() {
  const searchWidget = document.getElementById("search-widget");
  const searchBtn = document.getElementById("search-toggle-btn");
  const searchInput = document.getElementById("search-input-box");

  if (!searchWidget || !searchBtn || !searchInput) return;

  searchBtn.addEventListener("click", () => {
    const isOpen = searchWidget.classList.toggle("open");
    if (isOpen) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterCatalog(query);
  });
}

function filterCatalog(query) {
  const cards = document.querySelectorAll(".nf-card");
  cards.forEach(card => {
    const title = card.dataset.title ? card.dataset.title.toLowerCase() : "";
    const tags = card.dataset.tags ? card.dataset.tags.toLowerCase() : "";
    if (!query || title.includes(query) || tags.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* --------------------------------------------------------------------------
   3. "Who's Watching?" Profile Switcher
   -------------------------------------------------------------------------- */
function initProfiles() {
  const profilePills = document.querySelectorAll(".profile-pill");
  const greetingEl = document.getElementById("profile-greeting-name");
  const navAvatar = document.getElementById("nav-current-avatar");

  profilePills.forEach(pill => {
    pill.addEventListener("click", () => {
      profilePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const profileName = pill.dataset.profileName;
      const avatarSrc = pill.dataset.avatarSrc;

      if (greetingEl) greetingEl.textContent = profileName;
      if (navAvatar && avatarSrc) navAvatar.src = avatarSrc;

      showToast(`Switched profile to: ${profileName}`);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Billboard Hero Setup
   -------------------------------------------------------------------------- */
function initBillboard() {
  const playBtn = document.getElementById("billboard-play-btn");
  const moreInfoBtn = document.getElementById("billboard-info-btn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      openNetflixModal(NETFLIX_CATALOG.featured.id);
    });
  }

  if (moreInfoBtn) {
    moreInfoBtn.addEventListener("click", () => {
      openNetflixModal(NETFLIX_CATALOG.featured.id);
    });
  }
}

/* --------------------------------------------------------------------------
   5. Populate Netflix Rows
   -------------------------------------------------------------------------- */
function initNetflixRows() {
  populateProjectsRow("row-trending", NETFLIX_CATALOG.projects);
  
  // IoT Originals Row
  const iotProjects = NETFLIX_CATALOG.projects.filter(p => p.category === "iot");
  populateProjectsRow("row-iot", iotProjects);

  // AI & Web Series Row
  const aiWebProjects = NETFLIX_CATALOG.projects.filter(p => p.category === "ai" || p.category === "web");
  populateProjectsRow("row-ai-web", aiWebProjects);

  // Skills Row
  populateSkillsRow("row-skills", NETFLIX_CATALOG.skills);

  // Experience & Education Episodes Row
  populateEpisodesRow("row-experience", NETFLIX_CATALOG.seasons);
}

function populateProjectsRow(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container || !items) return;

  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "nf-card";
    card.dataset.title = item.title;
    card.dataset.tags = item.tags ? item.tags.join(" ") : "";
    card.dataset.projectId = item.id;

    card.innerHTML = `
      <div class="nf-card-inner">
        <div class="card-thumbnail-wrap">
          <img src="${item.image}" alt="${item.title}" class="card-thumbnail" loading="lazy" />
          <span class="card-top-tag">${item.badge || "FEATURED"}</span>
        </div>
        <div class="card-info-drawer">
          <div class="card-action-bar">
            <div class="action-btn-group">
              <button class="circle-action-btn play-btn" title="View Details / Play" onclick="openNetflixModal('${item.id}')">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </button>
              <a href="${item.github}" target="_blank" rel="noopener" class="circle-action-btn" title="View GitHub Code">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <button class="circle-action-btn" title="Add to My List" onclick="showToast('Added ${item.title} to My List')">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
            <button class="circle-action-btn" title="Episode Details" onclick="openNetflixModal('${item.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
          <div class="card-metadata-line">
            <span class="card-match">${item.matchScore}</span>
            <span class="card-badge-pill">${item.maturity}</span>
            <span class="card-badge-pill">${item.quality}</span>
          </div>
          <h4 class="card-title-text">${item.title}</h4>
          <div class="card-tags-cloud">
            ${(item.genres || item.tags.slice(0, 3)).map(g => `<span class="card-tag-bullet">${g}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function populateSkillsRow(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container || !skills) return;

  container.innerHTML = "";
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "nf-card";
    card.dataset.title = skill.name;
    card.dataset.tags = skill.category;

    card.innerHTML = `
      <div class="nf-card-inner">
        <div class="skill-nf-card">
          <div class="skill-top-head">
            <span class="skill-icon-lg">${skill.icon}</span>
            <span class="skill-badge-red">${skill.badge}</span>
          </div>
          <div>
            <h4 class="skill-title-lg">${skill.name}</h4>
            <div class="skill-category-sub">${skill.category} · ${skill.level}% Proficiency</div>
            <p class="skill-summary-p">${skill.desc}</p>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function populateEpisodesRow(containerId, episodes) {
  const container = document.getElementById(containerId);
  if (!container || !episodes) return;

  container.innerHTML = "";
  episodes.forEach(ep => {
    const card = document.createElement("div");
    card.className = "nf-card episode-card";
    card.dataset.title = ep.title;
    card.dataset.tags = ep.type;

    card.innerHTML = `
      <div class="nf-card-inner">
        <div class="card-info-drawer" style="padding: 1.2rem; min-height: 190px; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span class="episode-season-tag">${ep.type}</span>
              <span class="card-badge-pill" style="color: var(--nf-match-green); border-color: var(--nf-match-green);">${ep.badge}</span>
            </div>
            <h4 style="font-size: 1.1rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.35rem;">${ep.title}</h4>
            <div style="font-size: 0.8rem; color: #999; margin-bottom: 0.6rem;">${ep.season}</div>
            <p style="font-size: 0.85rem; color: #CCCCCC; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              ${ep.desc}
            </p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem;">
            <span style="font-size: 0.8rem; color: var(--nf-match-green); font-weight: 700;">${ep.matchScore}</span>
            <span style="font-size: 0.78rem; color: #777;">Sandip University · Blinkit</span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   6. Carousel Slider Left / Right Arrows
   -------------------------------------------------------------------------- */
function initCarouselArrows() {
  document.querySelectorAll(".slider-arrow").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.targetRow;
      const track = document.getElementById(targetId);
      if (!track) return;

      const direction = btn.classList.contains("arrow-left") ? -1 : 1;
      const scrollAmount = track.clientWidth * 0.75 * direction;
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Netflix Modal Dialog
   -------------------------------------------------------------------------- */
function initNetflixModal() {
  const dialog = document.getElementById("netflix-modal");
  const closeBtn = document.getElementById("netflix-modal-close");

  if (!dialog) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  // Light dismiss on backdrop click
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
}

function openNetflixModal(itemId) {
  const dialog = document.getElementById("netflix-modal");
  if (!dialog) return;

  // Search in projects or featured
  let item = NETFLIX_CATALOG.projects.find(p => p.id === itemId);
  if (!item && NETFLIX_CATALOG.featured.id === itemId) {
    item = NETFLIX_CATALOG.featured;
  }

  if (!item) return;

  document.getElementById("modal-hero-img").src = item.image;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-match").textContent = item.matchScore || "98% Match";
  document.getElementById("modal-year").textContent = item.year || "2026";
  document.getElementById("modal-maturity").textContent = item.maturity || "AI & ML";
  document.getElementById("modal-quality").textContent = item.quality || "HD";
  document.getElementById("modal-desc").textContent = item.description;

  document.getElementById("modal-github-btn").href = item.github;
  document.getElementById("modal-demo-btn").href = item.liveDemo;

  const highlightsContainer = document.getElementById("modal-highlights-list");
  if (highlightsContainer) {
    highlightsContainer.innerHTML = item.highlights 
      ? item.highlights.map(h => `<li>${h}</li>`).join("")
      : `<li>Key independent software project developed by Durgesh Sonar.</li>`;
  }

  const tagsContainer = document.getElementById("modal-tags-list");
  if (tagsContainer) {
    tagsContainer.textContent = item.tags ? item.tags.join(", ") : "C++, Python, IoT, Web";
  }

  const genresContainer = document.getElementById("modal-genres-list");
  if (genresContainer) {
    genresContainer.textContent = item.genres ? item.genres.join(", ") : "Software Engineering, AI, IoT";
  }

  dialog.showModal();
}

/* --------------------------------------------------------------------------
   8. Contact Form
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("netflix-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nf-contact-name").value.trim();
    const email = document.getElementById("nf-contact-email").value.trim();
    const message = document.getElementById("nf-contact-message").value.trim();

    if (!name || !email || !message) {
      showToast("⚠️ Please fill in all required fields.");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Connecting...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("🎉 Thank you! Durgesh received your transmission.");

      const mailtoUrl = `mailto:durgesh401td@gmail.com?subject=Opportunity%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;
    }, 700);
  });
}

/* --------------------------------------------------------------------------
   9. Netflix Toast Notification
   -------------------------------------------------------------------------- */
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🍿 ${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
