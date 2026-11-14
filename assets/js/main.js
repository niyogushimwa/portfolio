/* =========================================================
   Remy Niyogushimwa — portfolio interactions
   ========================================================= */

(function () {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const backToTop = document.querySelector(".back-to-top");
  const yearEl = document.getElementById("year");
  const typedEl = document.getElementById("typed-role");

  /* ---------- Theme ---------- */

  function getStoredTheme() {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      /* storage can be unavailable in private mode */
    }
  }

  function applyTheme(theme) {
    const isLight = theme === "light";
    root.setAttribute("data-theme", isLight ? "light" : "dark");

    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", isLight ? "#f6f8fc" : "#070b16");
    }
  }

  const storedTheme = getStoredTheme();
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(storedTheme || (prefersLight ? "light" : "dark"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      storeTheme(nextTheme);
    });
  }

  /* ---------- Mobile menu ---------- */

  function closeMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      if (navLinks.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!navLinks.classList.contains("open")) return;
      if (event.target.closest(".site-header")) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 940) closeMenu();
    });
  }

  /* ---------- Header + back to top ---------- */

  function onScroll() {
    const y = window.scrollY;

    if (header) header.classList.toggle("scrolled", y > 10);
    if (backToTop) backToTop.classList.toggle("show", y > 600);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Active navigation ---------- */

  const sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  const navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  function setActiveLink(id) {
    navAnchors.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      function (entries) {
        const visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

        if (visible.length) setActiveLink(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- Scroll reveal ---------- */

  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  } else {
    const revealer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealItems.forEach(function (item) { revealer.observe(item); });
  }

  /* ---------- Typewriter ---------- */

  const roles = [
    "Software Development Student",
    "Web Designer",
    "Digital Designer",
    "Translation Tools Enthusiast",
    "BIT Student at University of Rwanda"
  ];

  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = roles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = function () {
        const currentRole = roles[roleIndex];
        const nextText = currentRole.slice(0, charIndex);

        typedEl.textContent = nextText;

        if (!deleting) {
          if (charIndex < currentRole.length) {
            charIndex += 1;
            window.setTimeout(tick, 62);
          } else {
            deleting = true;
            window.setTimeout(tick, 1900);
          }
        } else {
          if (charIndex > 0) {
            charIndex -= 1;
            window.setTimeout(tick, 30);
          } else {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            window.setTimeout(tick, 320);
          }
        }
      };

      window.setTimeout(tick, 500);
    }
  }

  /* ---------- Footer year ---------- */

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
