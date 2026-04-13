# BAO Design Sprint — web (March 2026)

Rebuild of the Figma prototype’s **first frame** as a real web UI (not an embed). Stack: **Vite**, **React**, **TypeScript**, **React Router** (hash routing for static hosting).

## Figma reference

| Item | Value |
|------|--------|
| File key | `2IOY5O7uNAziQdqbKhyDwE` |
| Starting frame (first page) | `7754-6621` (`7754:6621` in API) |
| Prototype (view in browser) | [Open in Figma](https://www.figma.com/proto/2IOY5O7uNAziQdqbKhyDwE/BAO-Design-Sprint---March-2026?node-id=7754-6621&starting-point-node-id=7754%3A6621) |

### Handoff checklist (Dev Mode)

Use **Inspect** on frame `7754:6621` and update [`src/design-tokens.css`](src/design-tokens.css):

- Frame height / max width (see `--frame-first-page-min-height`, `--content-max-width`).
- Text styles → `--font-size-*`, `--font-weight-*`, `--line-height-*`.
- Colors → `--color-*`.
- Export icons and raster assets from Figma into [`public/figma-exports/`](public/figma-exports/), then reference them in [`src/pages/Home.tsx`](src/pages/Home.tsx) (e.g. `<img src={`${import.meta.env.BASE_URL}figma-exports/hero.png`} />`). A reference PNG export for this frame is included as [`public/figma-exports/frame-7754-6621-reference.png`](public/figma-exports/frame-7754-6621-reference.png) for side-by-side comparison while styling.

### Prototype → routes

Hotspots on the first frame are wired in [`src/pages/Home.tsx`](src/pages/Home.tsx). Each button uses `navigate()` to a route; destinations that are not built yet go to `/coming-soon` with optional state. As you add screens, add `<Route>` entries in [`src/App.tsx`](src/App.tsx) and point buttons to those paths.

**HashRouter** is used so deep links work on **GitHub Pages** without server rewrites (`#/`, `#/coming-soon`).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

- **Dev:** [http://localhost:5173](http://localhost:5173)
- **Production build:** output in `dist/`

## GitHub Pages

1. Push this repo to GitHub on branch `main`.
2. **Settings → Pages → Build and deployment:** set source to **GitHub Actions**.
3. The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds and deploys `dist/`.

[`vite.config.ts`](vite.config.ts) uses `base: './'` so asset paths resolve when the site is served from a project URL (e.g. `https://<user>.github.io/<repo>/`).

## Optional: Figma REST API

With a personal access token you can `GET https://api.figma.com/v1/files/2IOY5O7uNAziQdqbKhyDwE` and inspect node `7754:6621` for structure and bounds. This does not replace visual QA against the canvas.
