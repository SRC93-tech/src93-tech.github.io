/**
 * Developer Profile & Portfolio Application Controller
 * High-performance Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.profileData;
  if (!data) {
    console.error('Profile data not found.');
    return;
  }

  initThemeEngine();
  initMobileMenu();
  renderPillars(data.pillars);
  renderProjects(data.projects);
  renderSkills(data.skills);
  renderJourney(data.journey);
  initProjectFilters(data.projects);
  initProjectModal(data.projects);
  initClipboardButtons();
  initScrollspy();
});

/* ==========================================================================
   1. THEME ENGINE (DARK / LIGHT)
   ========================================================================== */
function initThemeEngine() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const html = document.documentElement;

  function updateIcons(currentTheme) {
    if (currentTheme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  const currentTheme = html.getAttribute('data-theme') || 'dark';
  updateIcons(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', activeTheme);
      try {
        localStorage.setItem('theme-preference', activeTheme);
      } catch (e) {}
      updateIcons(activeTheme);
    });
  }

  // React to OS-level theme changes if user hasn't explicitly locked in preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme-preference')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        updateIcons(newTheme);
      }
    });
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }
}

/* ==========================================================================
   3. RENDER ENGINEERING PILLARS
   ========================================================================== */
function renderPillars(pillars) {
  const container = document.getElementById('pillars-grid');
  if (!container) return;

  const iconSvgs = {
    zap: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    'shield-check': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
    layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>'
  };

  container.innerHTML = pillars.map(pillar => `
    <article class="pillar-card">
      <div class="pillar-icon-box">
        ${iconSvgs[pillar.icon] || iconSvgs.zap}
      </div>
      <h3 class="pillar-title">${escapeHtml(pillar.title)}</h3>
      <p class="pillar-desc">${escapeHtml(pillar.description)}</p>
    </article>
  `).join('');
}

/* ==========================================================================
   4. RENDER PROJECTS
   ========================================================================== */
function renderProjects(projects, filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 48px; color: var(--text-muted);">No projects found under this category.</div>`;
    return;
  }

  container.innerHTML = filtered.map(proj => `
    <article class="project-card" data-category="${proj.category}" id="project-${proj.id}">
      <div class="project-img-box">
        ${proj.featured ? `<span class="project-badge-flagship">Flagship System</span>` : ''}
        <img src="${proj.image}" alt="${escapeHtml(proj.title)}" loading="lazy">
      </div>
      <div class="project-details">
        <div>
          <div class="project-header">
            <div class="project-subtitle">${escapeHtml(proj.subtitle)}</div>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          </div>
          <p class="project-overview">${escapeHtml(proj.overview)}</p>
          <ul class="project-highlights">
            ${proj.keyAchievements.slice(0, 3).map(ach => `<li>${escapeHtml(ach)}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="project-tag-pill">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-primary open-modal-btn" data-project-id="${proj.id}" style="padding: 9px 20px; font-size: 0.88rem;">
              <span>Architecture Deep-Dive</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 9px 18px; font-size: 0.88rem;">
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   5. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters(projects) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(projects, filterValue);
    });
  });
}

/* ==========================================================================
   6. RENDER SKILLS MATRIX
   ========================================================================== */
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = Object.entries(skills).map(([category, items]) => `
    <div class="skill-category-card">
      <h3 class="skill-category-title">
        <span class="skill-category-icon">✦</span>
        <span>${escapeHtml(category)}</span>
      </h3>
      <div class="skill-list">
        ${items.map(skill => `
          <div class="skill-item">
            <div class="skill-meta">
              <span class="skill-name">${escapeHtml(skill.name)}</span>
              <span class="skill-badge">${escapeHtml(skill.level)}</span>
            </div>
            <div class="skill-progress-track">
              <div class="skill-progress-bar" style="width: ${skill.pct}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. RENDER CAREER JOURNEY / TIMELINE
   ========================================================================== */
function renderJourney(journey) {
  const container = document.getElementById('journey-timeline');
  if (!container) return;

  container.innerHTML = journey.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-year">${escapeHtml(item.year)}</div>
        <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
        <div class="timeline-role">${escapeHtml(item.role)}</div>
        <p class="timeline-desc">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. PROJECT DEEP-DIVE MODAL
   ========================================================================== */
function initProjectModal(projects) {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body-content');

  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <img src="${project.image}" alt="${escapeHtml(project.title)}" class="modal-image">
      <div style="margin-bottom: 8px; font-size: 0.85rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase;">
        ${escapeHtml(project.subtitle)}
      </div>
      <h2 id="modal-title" style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px;">
        ${escapeHtml(project.title)}
      </h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
        ${escapeHtml(project.overview)}
      </p>

      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Architecture & Technical Milestones</h4>
      <ul class="project-highlights" style="margin-bottom: 28px;">
        ${project.keyAchievements.map(ach => `<li>${escapeHtml(ach)}</li>`).join('')}
      </ul>

      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Technologies & Tools</h4>
      <div class="project-tags" style="margin-bottom: 32px;">
        ${project.tags.map(t => `<span class="project-tag-pill">${escapeHtml(t)}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 16px;">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <span>Visit stockgrid.co.in</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        ${project.playUrl ? `<a href="${project.playUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;"><span>Get it on Google Play</span></a>` : ''}
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Delegate click for open buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (btn) {
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   9. CLIPBOARD COPY BUTTONS
   ========================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        btn.title = "Copied to clipboard!";
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.title = "Copy to clipboard";
        }, 2200);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  });
}

/* ==========================================================================
   11. SCROLLSPY
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* Helper Utilities */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
