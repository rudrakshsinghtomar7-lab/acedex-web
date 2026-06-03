import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is env-driven so the same code serves from two places:
//   • GitHub Pages project URL  → /acedex-web/   (default, today)
//   • apex domain acedex.com.au → /              (set SITE_BASE=/ at launch)
// No code change to switch — just set the SITE_BASE env var in CI.
export default defineConfig({
  base: process.env.SITE_BASE || '/acedex-web/',
  plugins: [react()],
});
