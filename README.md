# Acedex — marketing site

Standalone pre-launch landing + waitlist for Acedex. **Separate from the app**
(`Acedex` repo). This site does **not** link into the app or allow sign-up — its
only action is capturing waitlist emails. At launch the CTA flips to an
"Open Acedex" button.

## Stack
Vite + React, same graphite/indigo design tokens and Inter font as the app.
Light + dark themes with a toggle (dark default).

## Local dev
```bash
npm install
cp .env.example .env        # fill in the same Supabase URL + anon key as the app
npm run dev
```

## Waitlist
Emails are written to the `public.waitlist` table in the **same Supabase project**
as the app. That table + its RLS live in the app repo migration
`supabase/migrations/023_waitlist.sql`:
- anyone may `INSERT` (join the list),
- nobody can read it except admins (`is_admin()`) and the Supabase dashboard /
  service role. Public reads are denied by RLS.

The anon key in the client bundle is safe to expose — RLS is what protects the data.

## Screenshots
Placeholders render until you add real images. See
[`public/screenshots/README.md`](public/screenshots/README.md).

## Deploy
GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub
Pages on push to `main`. Required repo secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Base path / custom domain
Built with `base=/acedex-web/` so it serves at the Pages project URL today.
When the **acedex.com.au** apex domain is attached:
1. set the Actions **variable** `SITE_BASE` to `/`,
2. rename `public/CNAME.example` → `public/CNAME`,
3. point DNS at GitHub Pages and set the custom domain in repo settings.

No code change needed — base is read from the `SITE_BASE` env var at build time.
