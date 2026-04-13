import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use './' so assets resolve on GitHub Pages project sites without guessing the repo name.
// For a user/org site at the domain root, set base: '/' in this file.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
