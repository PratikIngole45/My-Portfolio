import "./style.css";
import {
  personalInfo,
  skills,
  projects,
  experience,
  blogPosts,
} from "./data.js";

// ============================================
// SOCIAL ICONS SVG MAP
// ============================================
const socialIcons = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
};

// ============================================
// SKILL CATEGORY ICONS
// ============================================
const categoryIcons = {
  "Programming Languages": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  "Frontend Development": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "Backend Development": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  "Database & Cloud": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  "Tools & Technologies": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  "Computer Science Fundamentals": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
};

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = stored || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

// ============================================
// MOBILE NAVIGATION
// ============================================
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Back to top
    if (scrollY > 600) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    // Active nav link
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// TYPING ANIMATION
// ============================================
function initTypingAnimation() {
  const element = document.getElementById("typed-text");
  const taglines = personalInfo.taglines;
  let taglineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const current = taglines[taglineIndex];

    if (isDeleting) {
      element.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      element.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      typingSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      typingSpeed = 500; // pause before next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ============================================
// HERO CANVAS — Floating Particles
// ============================================
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function getAccentColor() {
    const theme = document.documentElement.getAttribute("data-theme");
    return theme === "dark"
      ? { r: 201, g: 169, b: 110 }
      : { r: 176, g: 141, b: 87 };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getAccentColor();

    particles.forEach((p, i) => {
      // Move
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[j].x - p.x;
        const dy = particles[j].y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".reveal-up:not(.hero .reveal-up), .reveal-left, .reveal-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// ============================================
// SKILL BAR ANIMATION
// ============================================
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level");
          entry.target.style.width = level + "%";
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ============================================
// RENDER SOCIAL LINKS
// ============================================
function renderSocialLinks(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = personalInfo.socialLinks
    .map(
      (link) => `
    <a href="${link.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">
      ${socialIcons[link.icon] || ""}
    </a>
  `
    )
    .join("");
}

// ============================================
// RENDER ABOUT
// ============================================
function renderAbout() {
  document.getElementById("about-bio").textContent = personalInfo.bio;
  document.getElementById("about-stats").innerHTML = personalInfo.stats
    .map(
      (stat) => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `
    )
    .join("");

  document.getElementById("download-resume").href = personalInfo.resumeUrl;
}

// ============================================
// RENDER SKILLS
// ============================================
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills
    .map(
      (category) => `
    <div class="skill-category reveal-up">
      <h3 class="skill-category-title">
        <span class="skill-category-icon">${categoryIcons[category.category] || ""}</span>
        ${category.category}
      </h3>
      ${category.items
          .map(
            (item) => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${item.name}</span>
            <span class="skill-level">${item.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-level="${item.level}"></div>
          </div>
        </div>
      `
          )
          .join("")}
    </div>
  `
    )
    .join("");
}

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card reveal-up" data-category="${project.category}">
      <div class="project-card-header">
        <span class="project-folder-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        </span>
        <div class="project-links">
          ${project.github
          ? `<a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>`
          : ""
        }
          ${project.live
          ? `<a href="${project.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>`
          : ""
        }
        </div>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-description">${project.description}</p>
      </div>
      <div class="project-card-footer">
        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `
    )
    .join("");

  // Filter functionality
  initProjectFilters();
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.classList.remove("hidden");
          card.style.animation = "fadeIn 0.4s ease forwards";
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ============================================
// RENDER EXPERIENCE
// ============================================
function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experience
    .map(
      (item) => `
    <div class="timeline-item reveal-right">
      <div class="timeline-dot"></div>
      <span class="timeline-period">${item.period}</span>
      <h3 class="timeline-role">${item.role}</h3>
      <p class="timeline-company">${item.company}</p>
      <p class="timeline-description">${item.description}</p>
      <div class="timeline-technologies">
        ${item.technologies.map((tech) => `<span class="timeline-tech-tag">${tech}</span>`).join("")}
      </div>
    </div>
  `
    )
    .join("");
}

// ============================================
// RENDER BLOG
// ============================================
function renderBlog() {
  const grid = document.getElementById("blog-grid");
  grid.innerHTML = blogPosts
    .map(
      (post) => `
    <a href="${post.url}" class="blog-card reveal-up">
      <div class="blog-card-meta">
        <span class="blog-card-category">${post.category}</span>
        <span class="blog-card-date">${post.date}</span>
      </div>
      <h3 class="blog-card-title">${post.title}</h3>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-footer">
        <span class="blog-card-read-time">${post.readTime}</span>
        <span class="blog-read-more">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </a>
  `
    )
    .join("");
}

// ============================================
// RENDER CONTACT
// ============================================
function renderContact() {
  document.getElementById("contact-email").textContent = personalInfo.email;
  document.getElementById("contact-location").textContent =
    personalInfo.location;
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById("contact-form");

  // Web3Forms access key is loaded from .env file (VITE_WEB3FORMS_KEY)
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name");
    const email = document.getElementById("form-email");
    const message = document.getElementById("form-message");
    const submitBtn = form.querySelector('button[type="submit"]');
    let valid = true;

    // Clear previous errors
    form.querySelectorAll(".form-error").forEach((el) => el.remove());
    form.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));

    // Validate
    if (!name.value.trim()) {
      showFieldError(name, "Please enter your name");
      valid = false;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showFieldError(email, "Please enter a valid email");
      valid = false;
    }

    if (!message.value.trim()) {
      showFieldError(message, "Please enter a message");
      valid = false;
    }

    if (valid) {
      // Disable button and show loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending... <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: name.value.trim(),
            email: email.value.trim(),
            message: message.value.trim(),
            subject: `New Portfolio Message from ${name.value.trim()}`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          showToast("Message sent successfully! I'll get back to you soon. ✨");
          form.reset();
        } else {
          showToast("Failed to send message. Please try again. ❌");
        }
      } catch (error) {
        showToast("Something went wrong. Please try again later. ❌");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });
}

function showFieldError(input, message) {
  input.classList.add("error");
  const error = document.createElement("p");
  error.className = "form-error";
  error.textContent = message;
  input.parentNode.appendChild(error);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// TOAST
// ============================================
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  toastMsg.textContent = message;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 3500);
}

// ============================================
// RENDER PERSONAL INFO (hero, logo, title, etc.)
// ============================================
function renderPersonalInfo() {
  const name = personalInfo.name;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  // Hero name
  document.getElementById("hero-name").textContent = name;

  // Page title
  document.title = `${name} — ${personalInfo.role} Portfolio`;

  // Nav & footer logos
  const navInitials = document.getElementById("nav-logo-initials");
  if (navInitials) navInitials.textContent = initials;

  const footerInitials = document.getElementById("footer-logo-initials");
  if (footerInitials) footerInitials.textContent = initials;

  // Footer name
  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = name;

  // Meta tags
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", `Portfolio of ${name}, a ${personalInfo.role}.`);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", `${name} — ${personalInfo.role}`);
}

// ============================================
// INITIALIZE
// ============================================
function init() {
  // Set current year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Render personal info first (hero name, logos, title)
  renderPersonalInfo();

  // Render content
  renderAbout();
  renderSkills();
  renderProjects();
  // renderExperience(); // No experience section for now
  // renderBlog(); // Uncomment when you're ready to add blog posts
  renderContact();
  renderSocialLinks("hero-social");
  renderSocialLinks("contact-socials");
  renderSocialLinks("footer-socials");

  // Init interactions
  initTheme();
  initMobileNav();
  initNavbar();
  initTypingAnimation();
  initHeroCanvas();
  initContactForm();

  // Init scroll reveals after a tick (so elements are in the DOM)
  requestAnimationFrame(() => {
    initScrollReveal();
    initSkillBars();
  });
}

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
