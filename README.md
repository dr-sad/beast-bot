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
- Export icons and raster assets from Figma into [`public/figma-exports/`](public/figma-exports/). Screen art uses [`public/figma-exports/Frame 1.png`](public/figma-exports/Frame%201.png) (and Frame 0 / 2) via [`src/figmaAssets.ts`](src/figmaAssets.ts).

### Prototype → routes

- **`/`** ([`Home.tsx`](src/pages/Home.tsx)) — [`Frame 0.png`](public/figma-exports/Frame%200.png); transparent **Next** hit target over the art (tune `--next-*` on `.frameWrap` in [`frameShared.module.css`](src/pages/frameShared.module.css)).
- **`/frame-1`** ([`FrameOne.tsx`](src/pages/FrameOne.tsx)) — [`Frame 1.png`](public/figma-exports/Frame%201.png) with working **dropdowns** (labels + options in [`nicknameState.ts`](src/nicknameState.ts)); **Back** → `/`, **Next** → `/frame-2` with `{ adjective, animal, nickSuffix }` in router state.
- **`/frame-2`** ([`FrameTwo.tsx`](src/pages/FrameTwo.tsx)) — [`Frame 2.png`](public/figma-exports/Frame%202.png) with an overlaid greeting **`Hi {adjective}{animal}{2-digit}!`**; **Back** → `/frame-1`. Tune overlay position in [`FrameTwo.module.css`](src/pages/FrameTwo.module.css) and dropdown placement in [`FrameOne.module.css`](src/pages/FrameOne.module.css).

Asset URLs are centralized in [`src/figmaAssets.ts`](src/figmaAssets.ts).

**HashRouter** is used so deep links work on **GitHub Pages** without server rewrites (`#/`, `#/frame-1`, `#/frame-2`).

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
