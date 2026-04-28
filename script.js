const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(
  ".card, .test-list article, .timeline article, .value-grid article, .market-cards article, .detail-block, .process-panel, .service-summary, .visual-card, .contact-method-card, .about-feature"
);

if ("IntersectionObserver" in window) {
  revealItems.forEach((item) => item.classList.add("reveal-item"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const heroVisuals = document.querySelectorAll(".hero-panel-visual img");

window.addEventListener(
  "scroll",
  () => {
    const offset = Math.min(window.scrollY * 0.025, 18);
    heroVisuals.forEach((image) => {
      image.style.transform = `translateY(${offset}px) scale(1.04)`;
    });
  },
  { passive: true }
);
