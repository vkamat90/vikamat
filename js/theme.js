(function () {
  const KEY = "vk_theme";
  const root = document.documentElement;

  function apply(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme"); // default theme
  }

  // Initialize: saved preference > system preference > default
  const saved = localStorage.getItem(KEY);
  if (saved) {
    apply(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    apply("light");
  }

  // Wire up any toggle buttons that exist
  function updateLabel(btn) {
    const isLight = root.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "Dark" : "Light";
    btn.setAttribute("aria-pressed", String(isLight));
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    updateLabel(btn);

    btn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      apply(next === "light" ? "light" : "dark");
      localStorage.setItem(KEY, next);
      updateLabel(btn);
    });
  });
})();
