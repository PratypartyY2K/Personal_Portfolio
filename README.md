# Pratyush Kumar — Personal Portfolio

The source code for my personal portfolio

The site presents my engineering experience, technical toolkit, and selected public projects through concise project cards and deeper case studies.

![Pratyush Kumar](./public/pratyush_profile_glow.webp)

## Highlights

- Responsive single-page portfolio with dedicated project case-study routes
- Light and dark themes with selectable accent colors
- Accessible semantic markup and reduced-motion support
- Responsive presentation across mobile, tablet, and desktop layouts

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide icons
- `next/font` with Inter and JetBrains Mono

See [`package.json`](./package.json) for the complete dependency list.

## Local development

### Requirements

- Node.js 20.9 or newer
- npm

### Setup

```bash
git clone https://github.com/PratypartyY2K/Personal_Portfolio.git
cd Personal_Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required for local development.

## Available scripts

```bash
npm run dev    # Start the development server
npm run build  # Create an optimized production build
npm run start  # Serve the production build
npm run lint   # Run ESLint
```

## Project structure

```text
app/
  page.tsx                 Main portfolio page
  projects/[slug]/page.tsx Project case-study route
components/
  experience/              Education and experience timeline
  projects/                Project presentation components
  ui/                      Shared interface primitives
lib/
  projects.ts              Project cards and case-study content
public/                     Portrait, resume, and static assets
```

## Production build

```bash
npm run build
npm run start
```

The application can be deployed to any platform that supports Next.js. The project does not depend on a database or server-side secrets.

## Contact

- [GitHub](https://github.com/PratypartyY2K)
- [LinkedIn](https://linkedin.com/in/pratyushkumar123)
- [Email](mailto:pratyushkum4@gmail.com)

This repository contains my personal website and portfolio content. Please open an issue if you notice a bug or accessibility problem.
