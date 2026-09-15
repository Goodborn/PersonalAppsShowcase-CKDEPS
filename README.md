# Personal Apps Showcase — CKDEPS

A beautiful showcase of all the apps I use and why I chose them over the alternatives.

Built with **Astro** + **Tailwind CSS**, deployed to **GitHub Pages**.

## 🚀 Develop

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

## 🏗️ Build

```bash
npm run build   # outputs to ./dist
npm run preview # serve the build locally
```

## 📦 Add an app

1. Create `src/content/apps/your-app.md`
2. Fill in the frontmatter (see [`src/content/apps/_README.md`](src/content/apps/_README.md))
3. Add a screenshot to `public/screenshots/your-app.png`
4. Reference it: `screenshot: "/screenshots/your-app.png"`

## 🌐 Deploy

Push to `main` — the GitHub Actions workflow builds and deploys to Pages automatically.

Site lives at: `https://goodborn.github.io/PersonalAppsShowcase-CKDEPS/`