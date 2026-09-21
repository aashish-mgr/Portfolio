# Aashish Magar — Portfolio

Personal portfolio for [Aashish Magar](https://aashish-mgr-portfolio.vercel.app/), a Nepal-based full-stack developer (MERN + Next.js).

**Live site:** https://aashish-mgr-portfolio.vercel.app/

## About

A single-page portfolio built with the Next.js App Router, featuring:

- **Hero** with entrance animation
- **Stack** — tech/skill list curated from `lib/content.ts`
- **Projects** — featured and card layouts with screenshots, GitHub and live links (toast shown when a live demo is not deployed yet)
- **Contact** — email, GitHub, and LinkedIn links
- Sticky navbar with scroll-spy highlighting and a mobile menu

## Tech

- Next.js 16 (App Router, static export-ready)
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Editing content

All site content lives in `lib/content.ts` — hero text, socials, skills, and projects. Add or update project screenshots in `public/`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build (static prerender)
npm run start    # serve the production build
npm run lint     # eslint
```

## Deploy

The site is designed for static deployment. It is currently hosted on Vercel — connect the repo to Vercel and it will build automatically.