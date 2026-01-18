// js/posts.js
(function () {
  function $(sel, root = document) { return root.querySelector(sel); }
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDate(iso) {
    // Minimal formatting; keep ISO sortable.
    try {
      const d = new Date(iso + "T00:00:00");
      return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
    } catch { return iso; }
  }

  function hasTag(post, tag) {
    return (post.tags || []).map(t => t.toLowerCase()).includes(tag.toLowerCase());
  }

  function cardHtml(post) {
    const tagLabel = (post.tags && post.tags[0]) ? post.tags[0].toUpperCase() : "POST";
    const pinnedHtml = post.pinned ? `<span class="pinned">Pinned</span>` : "";
    const coverHtml = post.cover
      ? `
        <div style="display:grid; grid-template-columns: 140px 1fr; gap: 16px; align-items:center;">
          <img src="${escapeHtml(post.cover)}"
               alt=""
               style="width:140px; height:96px; object-fit:cover; border-radius:14px; border:1px solid rgba(255,255,255,0.18);" />
          <div>
            ${metaLineHtml(tagLabel, post, pinnedHtml)}
            ${titleExcerptHtml(post)}
          </div>
        </div>
      `
      : `
        ${metaLineHtml(tagLabel, post, pinnedHtml)}
        ${titleExcerptHtml(post)}
      `;

    return `
      <a class="postRow reveal" href="${escapeHtml(post.url)}">
        <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">
          <div style="width:100%;">${coverHtml}</div>
        </div>
      </a>
    `;
  }

  function metaLineHtml(tagLabel, post, pinnedHtml) {
    return `
      <div class="postMeta">
        <span class="tag">${escapeHtml(tagLabel)}</span>
        <span>${escapeHtml(formatDate(post.date))}</span>
        <span>•</span>
        <span>${escapeHtml(post.readTime || "")}</span>
        ${pinnedHtml ? `<span style="margin-left:auto;">${pinnedHtml}</span>` : ""}
      </div>
    `;
  }

  function titleExcerptHtml(post) {
    return `
      <h3 style="margin:10px 0 6px; color:#fff;">${escapeHtml(post.title)}</h3>
      <div class="small">${escapeHtml(post.excerpt || "")}</div>
    `;
  }

  function renderPosts({ mountId, filterTag }) {
    const mount = document.getElementById(mountId);
    if (!mount) return;

    const all = (window.VK_POSTS || []).slice();

    // Default sorting: pinned first, then newest date
    all.sort((a, b) => {
      const ap = a.pinned ? 1 : 0;
      const bp = b.pinned ? 1 : 0;
      if (ap !== bp) return bp - ap;
      return String(b.date).localeCompare(String(a.date));
    });

    const filtered = filterTag ? all.filter(p => hasTag(p, filterTag)) : all;

    // Empty state
    if (!filtered.length) {
      mount.innerHTML = `
        <div class="postRow">
          <div class="postMeta">
            <span class="tag">${escapeHtml((filterTag || "posts").toUpperCase())}</span>
            <span>No posts yet</span>
          </div>
          <h3 style="margin:10px 0 6px; color:#fff;">Nothing here yet.</h3>
          <div class="small">Add items in <code>data/posts.js</code> and they will appear automatically.</div>
        </div>
      `;
      return;
    }

    mount.innerHTML = filtered.map(cardHtml).join("\n");

    // If reveal.js exists, let it do its normal thing.
    // Otherwise, make reveals visible immediately.
    if (!window.__VK_REVEAL_FALLBACK__) {
      const reveals = mount.querySelectorAll(".reveal");
      if (typeof window.VK_REVEAL_REFRESH === "function") {
        window.VK_REVEAL_REFRESH();
      } else {
        reveals.forEach(el => el.classList.add("visible"));
      }
      window.__VK_REVEAL_FALLBACK__ = true;
    }
  }

  // Auto-wire pages using data attributes:
  // <div id="postsMount" data-filter="work"></div>
  function boot() {
    const el = document.querySelector("[data-posts-mount]");
    if (!el) return;
    const mountId = el.id || "postsMount";
    const tag = el.getAttribute("data-filter") || "";
    renderPosts({ mountId, filterTag: tag.trim() || null });
  }

  document.addEventListener("DOMContentLoaded", boot);

  // Expose if you want to render elsewhere later (index page etc.)
  window.VK_RENDER_POSTS = renderPosts;
})();
