# Personal Portfolio (Pratyush Kumar)

This repository contains the source for my personal portfolio website built with Next.js.

The site showcases projects, experience, skills and contact information and uses modern frontend tooling for animation, styling and small 3D visuals.

---

## Key features

- Responsive, accessible portfolio layout
- Hero section with 3D/animated background
- Projects, Experience, Skills sections and contact form link
- Smooth entrance and hover animations
- Light/dark theme support

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS for utility-first styling
- Framer Motion for UI animations
- @react-three/fiber & drei for small 3D/Canvas visuals

(See `package.json` for full dependency list.)

## Development

Requirements:
- Node.js (recommended 16+)
- npm (or yarn / pnpm)

Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build & production

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Environment & secrets

This project does not require special environment variables to run locally by default. If you add any secret keys (API keys, etc.), add them to a `.env.local` file and do NOT commit the file. `.gitignore` already excludes `.env*`.

## What to commit / ignore

Commit:
- `app/`, `components/`, `public/`, configuration files (`next.config.ts`, `tailwind.config.js`, `tsconfig.json`, etc.)
- `package.json` and the lockfile (`package-lock.json`)

Ignore (already in `.gitignore`):
- `node_modules/`, `.next/`, build output, `.env*`, editor folders like `.vscode/`, and local caches.

## Contributing

Small fixes or improvements are welcome. Open a PR with a short description of changes. For style edits prefer small, focused commits.

## Troubleshooting

- If you see layout or color issues, try clearing `.next` and restarting the dev server.
- If an asset (image) is missing, check `public/`.

## License & contact

This repo contains my personal website code. If you want to reach me, see the site or open an issue / PR in this repo.

---

_Last updated: 2025-11-29_
