# Abdul Rehman — Developer Portfolio (v2, Premium 3D)

Next.js + TypeScript + Tailwind CSS + React Three Fiber + Framer Motion.
Premium dark theme (#050816), electric blue / violet / cyan accents,
glassmorphism, bento grid, interactive 3D hero, particle background.

## What's in v2

- **3D hero:** original procedural neural core (React Three Fiber + Drei) —
  no external model files, no licensed assets. Gentle idle rotation,
  mouse-follow tilt, orbiting nodes, star field. Lazy-loaded (browser only),
  with a CSS glow-orb fallback when WebGL is unavailable.
- **Background:** lightweight 2D particle canvas + subtle grid + gradient
  spotlights. Particle canvas is disabled for `prefers-reduced-motion`.
- **Sections:** About (timeline), Skills (bento tilt cards), Projects
  (tilt + gradient-glow borders), GitHub (live public API + stats widgets),
  Contact (validated form, mailto delivery).
- **Navigation:** floating glass bar, active-section highlighting, mobile menu.
- **No fake content:** Live Demo buttons only for genuinely live links
  (CSVUndo). No Download Resume button — no verified public resume file
  exists in this repository. No screenshots are claimed; project panels are
  stylised representations, labelled as such.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Change your content

Edit only `src/data/portfolio.ts`.

## Deploy (Vercel)

Import this repository on vercel.com, framework preset Next.js, deploy.
Pushing to `main` redeploys automatically if the project is connected.

## Notes

- The contact form opens the visitor's own email app (mailto). Nothing is
  stored on this site.
- GitHub data comes from the public, unauthenticated GitHub API. If GitHub
  rate-limits, the section shows a message + profile link instead of numbers.
- GSAP was intentionally not added: Framer Motion already covers section
  reveals, and a second animation library would hurt performance for no
  visible gain.
