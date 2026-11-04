# Abdul Rehman — Developer Portfolio

Next.js + TypeScript + Tailwind CSS + Framer Motion portfolio website.
Dark theme, glass cards, scroll progress, dark/light toggle, mobile menu.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Change your content

Edit only `src/data/portfolio.ts` — name, title, bio, education, skills,
projects and links all render from that file.

## Deploy

- **Vercel (recommended):** import this repository on vercel.com, framework
  preset Next.js, deploy.
- **GitHub Pages:** set `output: "export"` in `next.config.js`, run
  `npm run build`, deploy the `out/` folder.

## Notes

- The contact form opens the visitor's own mail app (mailto) — it sends
  nothing by itself and stores nothing.
- Project repo/demo links marked TODO in the data file should only be added
  when a genuinely live link exists.
