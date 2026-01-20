// js/sidebar.js
(function () {
  const KEY = "vk_sidebar_collapsed";

  function applyState(collapsed) {
    document.documentElement.classList.toggle("nav-collapsed", collapsed);
  }

  function getSaved() {
    return localStorage.getItem(KEY) === "1";
  }

  function save(collapsed) {
    localStorage.setItem(KEY, collapsed ? "1" : "0");
  }

  function init() {
    // Apply saved state
    applyState(getSaved());

    // Wire toggle button (if present on the page)
    const btn = document.querySelector("[data-nav-toggle]");
    if (!btn) return;

    btn.addEventListener("click", function () {
      const collapsed = !document.documentElement.classList.contains("nav-collapsed");
      applyState(collapsed);
      save(collapsed);
      btn.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
