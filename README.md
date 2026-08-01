# Gina Coburn — Portfolio

A production-ready personal portfolio built with **Next.js (App Router) + TypeScript**, designed to deploy on **Vercel** with zero configuration. It presents product/UX thinking, AI-assisted design workflows, accessibility leadership, and case studies **without exposing any proprietary product UI** — work is shown through process writeups and abstract, brand-neutral diagrams.

## Tech
- Next.js 15 (App Router) · React 19 · TypeScript
- Plain CSS design-token system (light/dark, no build config to break)
- `next/font` (Fraunces + Inter) · native `sitemap.ts` / `robots.ts` for SEO
- No database, no external services required to run or deploy

---

## Run locally
Requires Node 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```
Open http://localhost:3000.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint`.

> Uses npm by default. pnpm/yarn work too (delete `package-lock.json` if you switch).

---

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Go to **vercel.com → Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — **no settings to change**. Click **Deploy**.
4. (Optional) Add a custom domain in **Project → Settings → Domains**, then set `url` in `lib/site.ts` to that domain so SEO/OG links are absolute.

No environment variables are required.

---

## Customize before you publish (checklist)
Almost everything lives in **`lib/site.ts`** — start there.

- [ ] `lib/site.ts` → `linkedin` (replace the placeholder with your real LinkedIn URL)
- [ ] `lib/site.ts` → `url` (your Vercel/custom domain — used for SEO/sitemap)
- [ ] `lib/site.ts` → confirm `email`, `phone` (remove phone if you’d rather not list it)
- [ ] `lib/site.ts` → `role` / `tagline` / `positioning` (tune the exact job-title emphasis)
- [ ] **Résumé PDF:** drop your file at `public/resume/gina-coburn-resume.pdf` (or change `resumePath`)
- [ ] `content/caseStudies.ts` → review copy; fill any `[add metric]` spots **only if accurate**
- [ ] (Optional) Replace the abstract SVGs in `components/visuals.tsx` with your own neutral diagrams
- [ ] (Optional) Add a social share image and reference it in `app/layout.tsx` `openGraph.images`

### Add or edit a case study
Edit `content/caseStudies.ts` — each entry is typed (`CaseStudy`) and renders automatically at `/work` and `/work/[slug]`. `visual` selects an abstract diagram from `components/visuals.tsx` (`system-translation`, `anonymized-flow`, `ai-loop`, `accessibility-layers`).

---

## Structure
```
app/            layout, globals.css, pages (home, about, work, work/[slug], process, resume, contact), sitemap, robots
components/     site-header, site-footer, theme-toggle, ui, visuals
content/        caseStudies.ts   ← your case-study data
lib/            site.ts          ← all editable placeholders live here
public/resume/  ← put your résumé PDF here
```

## Confidentiality note
This site intentionally contains **no proprietary screenshots, private flows, or internal architecture**. Case studies communicate decisions and outcomes through abstract diagrams and process. Keep it that way when you edit — describe the *shape* of the problem, not protected specifics.
