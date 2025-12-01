# Personal Portfolio (Pratyush Kumar)

This repository contains the source for my portfolio site built with the Next.js App Router. The app highlights my work, experience, and writing, while experimenting with lightweight 3D visuals and theme-aware UI.

---

## Features

- **Hero with deferred 3D graphic** – The hero text renders immediately while a WebGL background is lazily mounted using `@react-three/fiber` only when fonts load, the hero enters view, and the device can handle it.
- **Server-first sections** – Projects, Skills, Blog, About, and Experience render as server components to minimize client JavaScript. Components switch to client mode only when interactivity is required (theme toggle, navbar menu, scroll-to-top).
- **Dark/light theme support** – Theme is persisted in `localStorage`, applied before paint, and toggled through a11y-friendly controls.
- **Performance-focused** – IntersectionObserver gating, idle callbacks, font preloads, and small responsive image sizes keep LCP/TBT low even with 3D assets.
- **Accessible content** – Semantic headings, `aria-labelledby` links between sections and headings, keyboard-friendly navigation, and descriptive alt text.

---

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 16 (App Router)](https://nextjs.org/) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| 3D / Graphics | `@react-three/fiber`, `@react-three/drei`, `three` |
| Icons / UI | `lucide-react`, custom Tailwind components |
| Tooling | ESLint 9, Turbopack dev server |

See `package.json` for exact versions.

---

## Project structure

```
app/                # App Router entrypoints
components/         # React components (server + client)
  experience/       # Timeline + profile card
  projects/         # Project grid and utilities
  three/            # Three.js scene helpers
public/             # Static assets (images, icons, resume)
tailwind.config.js  # Tailwind setup
next.config.ts      # Next.js configuration
```

---

## Development

Requirements:

- Node.js 18+ (recommended 20 LTS)
- npm (bundled with Node; yarn/pnpm also work)

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then visit http://localhost:3000. Turbopack provides hot reloads.

Lint the project:

```bash
npm run lint
```

---

## Build & deployment

```bash
npm run build    # Creates the production bundle
npm run start    # Serves the built app (uses Node.js server)
```

Deploy the `.next` build output to any Node host (Vercel, Netlify, etc.). No extra environment variables are required by default.

---

## Performance notes

- Fonts preload via `next/font` and `<link rel="preconnect">` hints to reduce render-blocking time.
- The Three.js hero background, scroll-to-top button, and theme toggle are gated behind user/device heuristics to avoid unnecessary JS on mobile.
- `.browserslistrc` targets only modern browsers so polyfills aren’t shipped unnecessarily.
- Tailwind utilities are tree-shaken by the Next.js compiler; keep class usage within the `content` globs to avoid bloat.

Run Lighthouse on a production build (`npm run build && npm run start`) for accurate metrics.

---

## Environment & secrets

No environment variables are required. If you add API keys or credentials, place them in `.env.local` (already ignored by Git).

---

## Contributing / extending

1. Fork the repo and create a feature branch.
2. Run `npm run lint` before opening a PR.
3. Keep commits small and focused (docs, styling, feature, etc.).

Suggestions welcome—file an issue or PR for improvements.

---

## Troubleshooting

- **Styling not updating** – clear `.next/` and rerun `npm run dev`.
- **Images missing** – confirm assets exist under `public/`.
- **Build error referencing `requestAnimationFrame`** – ensure the latest hero trigger code is in sync; it guards all window usage.

---

_Last updated: 2025-12-01_
