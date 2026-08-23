# vikamat-site

Vibhav Kamat's personal site. Vite + React + TypeScript + Framer Motion, statically built and deployed to GitHub Pages under the custom domain `vikamat.com` — no hosting subscription, matches the setup the previous version of the site used.

## Run locally

```bash
npm install
npm run dev
```

## Before you publish — fill these in

- **`src/data/site.ts`** — email, LinkedIn URL, Calendly (or other booking) link.
- **`src/data/musings.ts`** — replace the placeholder essays with real writing. Each entry is one object; `body` is an array of paragraphs.
- **`src/data/captures.ts`** — replace the gradient placeholders with real photos. Add `src: "/captures/your-photo.jpg"` to an entry (drop the file in `public/captures/`) and the grid will render the image instead of the gradient automatically — no other change needed.
- **`public/CNAME`** — already set to `vikamat.com`; change it if you're deploying elsewhere.

## Deploy (GitHub Pages, matches your existing setup)

1. Push this folder's contents to your `vikamat.com` GitHub repo's `main` branch (or point a new repo's Pages settings at this domain).
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions** (one-time setup).
3. `.github/workflows/deploy.yml` is already wired up — every push to `main` builds and deploys automatically.
4. Your domain's DNS should already point at GitHub Pages (it does today, based on `vikamat.com`'s current A records) — no DNS changes needed.

## Optional: analytics parity with the old site

The previous site used Cloudflare Web Analytics (a free, privacy-respecting beacon). To add it back, drop this in `index.html`'s `<head>` with your own token from the Cloudflare dashboard:

```html
<script defer src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token":"YOUR_TOKEN_HERE"}'></script>
```

## Stack

- **Vite + React + TypeScript** — build tooling and framework
- **Framer Motion** — page transitions, reveal-on-scroll, shared-element lightbox (free, open-source — not the paid Framer site builder)
- **React Router** — client-side routing
- Plain CSS with a token system (`src/styles/tokens.css`) — no framework, matches the brand system in `vk-logo-assets/vk-logo-svg/README.md`
