# CodeArena landing

Marketing / community landing page for CodeArena (Next.js + TypeScript + ESLint).

## Scripts

```bash
pnpm install
pnpm dev      # http://localhost:3000 — do NOT use for Lighthouse
pnpm build && pnpm start   # production — use this for Lighthouse
pnpm lint
pnpm optimize:images
```

Lighthouse on `next dev` will report unminified JS, Next DevTools unused code, HMR WebSockets / bfcache blockers, and inflated bundles. Audit `pnpm build && pnpm start` instead.

## Environment

Set the public site origin for canonical URLs, sitemap, Open Graph, and JSON-LD:

```bash
NEXT_PUBLIC_SITE_URL=https://codearena-t.vercel.app
```

Production: [https://codearena-t.vercel.app](https://codearena-t.vercel.app)

## SEO

- Keyword-led titles/descriptions, canonical, robots, sitemap (with images), web manifest
- Dynamic Open Graph / Twitter image routes
- JSON-LD graph: Organization, WebSite, SoftwareApplication, SoftwareSourceCode, WebPage, BreadcrumbList, HowTo, FAQPage
- On-page FAQ + How it works sections, footer site nav, `llms.txt` / `humans.txt`
- Set `NEXT_PUBLIC_SITE_URL` to the production origin before deploy

## Links

- Discord: https://discord.gg/wGAR7QutNH
- GitHub: https://github.com/CodeArenaT
