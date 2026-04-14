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
2. **Settings → Pages → Build and deployment:** set source to **GitHub Actions** (not “Deploy from a branch”).
3. The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs `npm ci` / `npm run build` and deploys `./dist`. On the first run, approve the **github-pages** environment if GitHub prompts you under **Actions**.
4. **Where to see runs:** open the [**Actions** tab](https://github.com/dr-sad/beast-bot/actions) (not only the repo commit list). Each push to `main` should list a **Deploy to GitHub Pages** run; you can also use **Run workflow** on [the workflow page](https://github.com/dr-sad/beast-bot/actions/workflows/deploy-pages.yml) if needed.
5. Screen assets live only as [`public/figma-exports/Frame 0.png`](public/figma-exports/Frame%200.png), [`Frame 1.png`](public/figma-exports/Frame%201.png), and [`Frame 2.png`](public/figma-exports/Frame%202.png) — there is no `frame-7754-6621-reference.png` in this repo (older commits may show that name as removed in diffs).

[`vite.config.ts`](vite.config.ts) uses `base: './'` so asset paths resolve when the site is served from a project URL (e.g. `https://<user>.github.io/<repo>/`).

### Troubleshooting: deploy fails with 404 / “Ensure GitHub Pages has been enabled”

This means Pages is not turned on for the repo (or not using **GitHub Actions** as the source). Fix it in the GitHub UI (repo **Settings** require admin access):

1. Open **[Pages settings](https://github.com/dr-sad/beast-bot/settings/pages)** for this repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch” and not “Disabled”).
3. Save if prompted, then re-run the failed workflow: **Actions** → latest **Deploy to GitHub Pages** → **Re-run all jobs** (or push any commit to `main`).

If GitHub asks to approve the **`github-pages`** environment** the first time, open the workflow run and approve it, or use **Settings → Environments → github-pages** and add protection rules as needed.

The Node.js deprecation **warning** about `deploy-pages` is from GitHub’s runner; upgrading the action in the workflow over time reduces it. It does not cause the 404 by itself.

## Optional: Figma REST API

With a personal access token you can `GET https://api.figma.com/v1/files/2IOY5O7uNAziQdqbKhyDwE` and inspect node `7754:6621` for structure and bounds. This does not replace visual QA against the canvas.
