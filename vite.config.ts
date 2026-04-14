import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub project page: must match repo name or assets 404 / blank page (especially without trailing slash).
// Local dev: open http://localhost:5173/beast-bot/
export default defineConfig({
  plugins: [react()],
  base: "/beast-bot/",
});
