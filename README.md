# Next.js SaaS Starter (Lite)

Small Next.js 14 starter that shows how I structure a SaaS-style app with the App Router and a simple API.

This is not a full product template – it is a **readable, interview-friendly repo** that lets you quickly scan my code style.

## Tech

- Next.js 14 (App Router)
- React 18
- TypeScript-ready structure

## Structure

- `app/page.tsx` – marketing / pricing style landing page
- `app/api/health/route.ts` – ultra-simple health check (`GET /api/health`)

## Ideas / Extensions

In real projects I typically add:

- Auth (NextAuth or custom JWT) and protected routes
- A `/dashboard` area with layout and navigation
- Logging, basic rate limiting and environment-based config

I keep this repo intentionally light so it is easy to read in a few minutes.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.
