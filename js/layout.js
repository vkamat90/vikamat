// js/layout.js
(function () {
  const CENTER_LINKS = [
    { href: "./about.html", label: "About" },
    { href: "./work.html", label: "Build" },
    { href: "./life.html", label: "Live" },
    { href: "./art.html",  label: "See"  },
  ];

  const CONNECT_LINKS = [
    { href: "https://www.linkedin.com/in/vibhavkamat/", label: "LinkedIn", ext: true },
    { href: "./chat.html", label: "Let’s Chat", ext: false },
    { href: "mailto:letsconnectwithvi@gmail.com", label: "E-Mail me", ext: false },
  ];

  function activeFile() {
    const path = location.pathname.split("?")[0].split("#")[0];
    const file = (path.split("/").pop() || "index.html").toLowerCase();
    return file;
  }

  function markCurrent(linkHref, currentFile) {
    const file = (linkHref.split("/").pop() || "").toLowerCase();
    return file === currentFile;
  }

  function headerHTML() {
    const current = activeFile();

    const nav = CENTER_LINKS.map(l => {
      const isCurrent = markCurrent(l.href, current);
      return `<a href="${l.href}" ${isCurrent ? 'aria-current="page"' : ""}>${l.label}</a>`;
    }).join("");

    const connectItems = CONNECT_LINKS.map(l => {
      const right = l.ext ? "↗" : "";
      const attrs = l.ext ? 'target="_blank" rel="noreferrer"' : "";
      return `<a href="${l.href}" ${attrs}>${l.label}<span style="opacity:.55">${right}</span></a>`;
    }).join("");

    return `
      <header class="vk-header">
        <div class="vk-bar">
          <a class="vk-brand" href="./index.html">Vibhav Kamat</a>

          <nav class="vk-nav" aria-label="Primary">
            ${nav}
          </nav>

          <div class="vk-right">
            <div class="vk-connect" id="vkConnect" data-open="false">
              <button class="vk-connectBtn" type="button" id="vkConnectBtn" aria-haspopup="menu" aria-expanded="false">
                Connect
                <svg class="vk-caret" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <div class="vk-menu" id="vkConnectMenu" role="menu" aria-label="Connect">
                <div class="vk-hint">Choose a channel:</div>
                ${connectItems}
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function mountShell() {
    const mount = document.getElementById("vk-page");
    if (!mount) return;

    // Preserve your existing page content exactly
    const content = mount.innerHTML;

    // Replace body with shell + injected header
    mount.innerHTML = `
      <div class="vk-shell">
        ${headerHTML()}
        <main class="vk-main">
          ${content}
        </main>
      </div>
    `;

    // Dropdown behavior
    const wrap = document.getElementById("vkConnect");
    const btn  = document.getElementById("vkConnectBtn");

    if (wrap && btn) {
      const close = () => {
        wrap.dataset.open = "false";
        btn.setAttribute("aria-expanded", "false");
      };
      const open = () => {
        wrap.dataset.open = "true";
        btn.setAttribute("aria-expanded", "true");
      };
      const toggle = () => (wrap.dataset.open === "true" ? close() : open());

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
      });

      document.addEventListener("click", () => close());
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", mountShell);
})();
