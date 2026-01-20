// js/posts.js
// Renders posts from window.VK_POSTS into a mount element.
// Exposes: window.VK_RENDER_POSTS({ mountId, filterTag })

(function () {
  function escapeHtml(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatTagLabel(tag) {
    if (tag === "work") return "Build";
    if (tag === "life") return "Live";
    if (tag === "art") return "See";
    return tag || "";
  }

  function renderCard(p) {
    const tagLabel = formatTagLabel(p.tag);
    const title = escapeHtml(p.title);
    const excerpt = escapeHtml(p.excerpt);
    const date = escapeHtml(p.date);
    const read = escapeHtml(p.read);

    const cover = p.cover
      ? `<div style="margin-top:12px; border-radius:18px; overflow:hidden; border:1px solid rgba(255,255,255,0.14);">
           <img src="${escapeHtml(p.cover)}" alt="" style="width:100%; display:block;">
         </div>`
      : "";

    return `
      <a class="postRow" href="${escapeHtml(p.href)}">
        <div class="postMeta">
          <span class="tag">${tagLabel}</span>
          <span>${date}</span>
          <span>•</span>
          <span>${read}</span>
        </div>
        <h3 style="margin:10px 0 6px; color:#fff;">${title}</h3>
        <div class="small" style="color: rgba(255,255,255,0.78);">${excerpt}</div>
        ${cover}
      </a>
    `;
  }

  window.VK_RENDER_POSTS = function ({ mountId, filterTag }) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    const posts = Array.isArray(window.VK_POSTS) ? window.VK_POSTS : [];
    const filtered = filterTag ? posts.filter(p => p.tag === filterTag) : posts;

    if (filtered.length === 0) {
      mount.innerHTML = `
        <div class="small" style="color: rgba(255,255,255,0.72);">
          No posts yet for this section.
        </div>
      `;
      return;
    }

    mount.innerHTML = filtered.map(renderCard).join("");
  };
})();
