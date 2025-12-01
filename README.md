# Pratyush Kumar — Personal Portfolio

This repository contains the source for my personal portfolio website built with Next.js. The site highlights projects, experience, and skills and includes subtle 3D visuals and polished animations.

![Hero screenshot](./public/pratyush_profile_glow.webp)

---

## Table of contents

- [Key features](#key-features)
- [Tech stack](#tech-stack)
- [Local development](#local-development)
- [Scripts](#scripts)
- [Build & deploy](#build--deploy)
- [Performance notes](#performance-notes)
- [Contributing](#contributing)
- [License & contact](#license--contact)

---

## Key features

- Responsive, accessible portfolio layout
- Animated hero with lightweight 3D network (react-three-fiber)
- Smooth entrance and hover animations (Framer Motion)
- Light/dark theme support with tasteful glass UI
- Project, Experience, Skills and Contact sections
- Tiny animated particles and micro-interactions

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- @react-three/fiber & drei (3D visuals)
- Three.js

See `package.json` for the full dependency list.

## Local development

Requirements:
- Node.js 18+ (recommend LTS)
- npm (or yarn/pnpm)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Notes
- Theme toggling is implemented using the `dark` class on the document root. If colors look incorrect, ensure your app's theme provider is applying the `dark` class to `<html>` appropriately.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build production app
- `npm run start` — run production build
- `npm run lint` — run ESLint (config included)

## Build & deploy

This project is ready to deploy to Vercel or any Node hosting that supports Next.js. Vercel is the recommended and easiest option (automatic static/SSR routing support).

Build for production:

```bash
npm run build
```

Run production preview:

```bash
npm run start
```

## Performance notes

- The repository targets modern browsers to avoid shipping legacy polyfills and transforms. See `package.json` `browserslist` for the targeted browsers.
- If you see diagnostic suggestions about legacy JavaScript (Array.at, flatMap, Object.fromEntries, etc.), verify your build settings and browserslist. Modern browsers natively support these features, so you can avoid adding heavy polyfills unless you need to support old browsers.
- The hero includes a conditional 3D canvas that only mounts on larger viewports to reduce bundle weight on mobile.

## Accessibility & progressive enhancement

- Animations respect the `prefers-reduced-motion` media query and will not auto-play for users who prefer reduced motion.
- Important content is rendered as accessible HTML; 3D and decorative visuals are hidden from assistive tech with `aria-hidden` and `pointer-events: none`.

## Contributing

Contributions are welcome:
- Open an issue for bugs or feature requests.
- Send a pull request with a clear description and focused changes.

If you add environment variables locally, store them in `.env.local` and do not commit (the repo ignores `.env*`).

## Troubleshooting

- If you encounter styling or layout issues, try cleaning the Next.js cache: `rm -rf .next && npm run dev`.
- If an asset cannot be found, check the `public/` folder and confirm the path used in components.
- For TypeScript build errors: run `npm run build` locally and inspect the stack trace. Many issues are caused by incorrect prop types or narrow Window/document typings in client code; prefer guarding with `typeof window !== 'undefined'`.

## License & contact

This repository is my personal website code. Contact: pratyush@pratyush.dev (or through the site's contact section).

_Last updated: 2025-12-01_
