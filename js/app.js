// "use strict";
  // Тема
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  function applyStoredTheme() {
    const stored = localStorage.getItem("pt-theme");
    if (stored === "light") {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
    } else {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
    }
  }
  applyStoredTheme();

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("theme-light")) {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
      localStorage.setItem("pt-theme", "dark");
    } else {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
      localStorage.setItem("pt-theme", "light");
    }
  });

  // Скролл к форме
  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll-target"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Карусель hero
  (function () {
    const slides = Array.from(document.querySelectorAll("#hero-carousel .hero-slide"));
    const dots = Array.from(document.querySelectorAll(".hero-dot"));
    const prevBtn = document.querySelector("[data-hero-dir='prev']");
    const nextBtn = document.querySelector("[data-hero-dir='next']");
    let index = 0;

    function showSlide(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((slide, idx) => {
        slide.classList.toggle("is-active", idx === index);
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle("is-active", idx === index);
      });
    }

    prevBtn.addEventListener("click", () => showSlide(index - 1));
    nextBtn.addEventListener("click", () => showSlide(index + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const i = Number(dot.getAttribute("data-hero-index"));
        showSlide(i);
      });
    });

    let autoTimer = setInterval(() => showSlide(index + 1), 12000);
    ["click", "mouseover"].forEach((eventName) => {
      document.getElementById("hero-carousel").addEventListener(
        eventName,
        () => clearInterval(autoTimer),
        { once: true }
      );
    });
  })();

  // Видео в блоке "Как работает"
  (function () {
    const toggleBtn = document.getElementById("how-video-toggle");
    const wrapper = document.getElementById("how-video-wrapper");
    let opened = false;
    if (!toggleBtn || !wrapper) return;
    toggleBtn.addEventListener("click", () => {
      opened = !opened;
      wrapper.hidden = !opened;
      toggleBtn.textContent = opened
        ? "▲ Скрыть видео"
        : "▶ Посмотреть, как работает Track (2:30)";
    });
  })();

  // Обработчик форм (mailto)
  function buildMailto(formData, formId) {
    const params = Array.from(formData.entries())
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    const subject = encodeURIComponent(`Заявка Points:Track (${formId})`);
    const bodyText = params.replace(/&/g, "\n");
    const body = encodeURIComponent(`Новая заявка с лендинга:\n\n${bodyText}`);
    return `mailto:test-admin@pointstrack.ru?subject=${subject}&body=${body}`;
  }

  document.querySelectorAll(".lead-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formId = form.getAttribute("data-form-id") || "unknown";
      console.log("Lead form submit:", formId, Object.fromEntries(formData.entries()));
      const mailto = buildMailto(formData, formId);
      window.location.href = mailto;
    });
  });

  // Карусель кейсов
  const casesTrack = document.getElementById("cases-track");
  document.querySelectorAll("[data-cases-dir]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dir = btn.getAttribute("data-cases-dir");
      const delta = dir === "left" ? -300 : 300;
      casesTrack.scrollBy({ left: delta, behavior: "smooth" });
    });
  });

  // Переключение CTA вариантов (можно управлять фиче‑флагом)
  const useVariantB = false;
  if (useVariantB) {
    document.querySelector(".cta-variant-a").style.display = "none";
    document.querySelector(".cta-variant-b").style.display = "";
    document.querySelector(".section-cta-variant-a").style.display = "none";
    document.querySelector(".section-cta-variant-b").style.display = "";
  }