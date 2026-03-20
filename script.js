const faqLists = document.querySelectorAll("[data-faq]");

faqLists.forEach((list) => {
  list.addEventListener("click", (event) => {
    const toggle = event.target.closest(".faq-toggle");
    if (!toggle) return;

    const item = toggle.closest(".faq-item");
    const panel = item.querySelector(".faq-panel");
    const isOpen = item.classList.contains("is-open");

    item.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
});

const revealTargets = document.querySelectorAll(
  ".hero-inner, .section-header, .card, .step, .panel, .faq-item, .contact-card"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
);

revealTargets.forEach((el) => revealObserver.observe(el));
