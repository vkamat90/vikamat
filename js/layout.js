// js/layout.js
(function () {
  const LINKS = [
    { href: "./about.html", label: "About", icon: "user" },
    { href: "./work.html", label: "Build", icon: "bolt" },
    { href: "./life.html", label: "Live", icon: "heart" },
    { href: "./art.html", label: "See", icon: "eye" },
    { href: "./chat.html", label: "Let’s chat", icon: "chat" },
  ];

  const ICONS = {
    user: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 13a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    bolt: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
    heart: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-7-4.6-9.5-9A5.6 5.6 0 0 1 12 5.5 5.6 5.6 0 0 1 21.5 12C19 16.4 12 21 12 21Z"
        stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
    eye: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" stroke-width="2"/>
      <path d="M12 15a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    chat: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"
        stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
    linkedin: `<svg class="findIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 5.5a1.5 1.5 0 1 0 0-.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 20v-6.5A3.5 3.5 0 0 1 12.5 10 3.5 3.5 0 0 1 16 13.5V20"
        stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 11v9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    mail: `<svg class="findIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`
  };

  function normalizePath(p) {
    // Works on GitHub Pages subpath like /vikamat/chat.html
    const file = (p.split("?")[0].split("#")[0].split("/").pop() || "index.html").toLowerCase();
    return file;
  }

  function buildSidebar(activeFile) {
    const navLinks = LINKS.map(l => {
      const file = normalizePath(l.href);
      const isActive = file === activeFile;
      return `
        <a href="${l.href}" ${isActive ? 'aria-current="page"' : ""}>
          ${ICONS[l.icon] || ""}
          ${l.label}
        </a>
      `;
    }).join("");

    return `
      <aside class="sidebar">
        <div class="brandRow">
          <a href="./index.html" style="text-decoration:none;">
            <div class="brandTop">
              <div class="nameLine">Vibhav <span class="vi">"Vi"</span></div>
              <div class="pillarsLine">Product | Marketing | Growth</div>
            </div>
          </a>
          <div class="traitsLine">Lifelong learner, Always curious, Rarely offended</div>
        </div>

        <nav class="nav" aria-label="Primary">
          ${navLinks}
        </nav>

        <div class="findme">
          <div class="kickerLeft">Find Me</div>

          <a class="findLink" href="https://www.linkedin.com/in/vibhavkamat/" target="_blank" rel="noreferrer">
            <span class="findLeft">${ICONS.linkedin}<span>LinkedIn</span></span>
            <span class="ext">↗</span>
          </a>

          <a class="findLink" href="mailto:letsconnectwithvi@gmail.com">
            <span class="findLeft">${ICONS.mail}<span>Email me</span></span>
          </a>

          <div class="footerNote">
            © <span id="year"></span> Vikamat.<br/>
            Built with AI prompts, coffee and desire to learn.
          </div>
        </div>
      </aside>
    `;
  }

  function mount() {
    const activeFile = normalizePath(location.pathname);

    const page = document.getElementById("vk-page");
    if (!page) return;

    const content = page.innerHTML; // whatever was in your page content wrapper

    page.innerHTML = `
      <div class="container">
        ${buildSidebar(activeFile)}
        <main class="main">
          <div class="content">
            ${content}
          </div>
        </main>
      </div>
    `;

    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", mount);
})();
