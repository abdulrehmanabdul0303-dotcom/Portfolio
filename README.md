# Abdul Rehman — Cosmic Portfolio (Professional Edition)

A refined React + Vite portfolio with a neon orbital hero, panoramic cyberpunk About portrait, curated skills, illustrated projects, and accessible contact form.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown in your terminal.

## Build for Vercel

```bash
npm run build
```

Use Vite build output `dist`. In Vercel, framework preset is **Vite**.

## Before publishing

Edit `src/main.jsx`:

- Set `person.email` to a real address to activate the email-draft contact form. While blank, the button is disabled intentionally.
- Add your real LinkedIn URL and optionally resume path.
- Add verified live links and GitHub repositories to the `projects` array. Without these, projects display **CONCEPT PREVIEW** rather than non-working buttons.
- Verify all statements about your work before publishing.

Cyberpunk portrait: `public/Neon Cyberpunk AI Engineer Portrait.png`. This is an image-based cinematic About card, not a real 3D model. Orbital sphere uses CSS 3D-style transforms.

## Notes

The ERP dashboard illustrations contain *sample data*, not factual business metrics. No message or personal information is stored by the site.

## File structure

```text
index.html
package.json
package-lock.json
public/Neon Cyberpunk AI Engineer Portrait.png
src/main.jsx
src/styles.css
```

## 3D motion graphics (new)

The homepage now renders a **live WebGL 3D shader** in `src/MotionOrb.jsx`:
- Animated metallic-blue sphere with rotating neon cyan/purple torus rings and lighting.
- Mouse/pointer influence on camera and ring angles.
- Scroll entrance animations for About, Skills, Projects, and Contact.
- Hover-motion enhancement for project and feature cards.
- Pauses offscreen, limits rendering to about 30 FPS, reduces pixel ratio on mobile, and respects `prefers-reduced-motion`.
- Automatically falls back to the previous CSS-based orbital sphere if WebGL is unavailable.

The motion uses browser WebGL and mathematical 3D surfaces (shader raymarching), **not an exported Blender `.blend` or `.glb` asset**. To substitute an actual Blender model later, export it as `.glb` and use a compatible 3D loader.

Motion styles live in `src/motion.css`; no new npm dependencies are needed.
