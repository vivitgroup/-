# Guthmi Store — متجر القثمي

A luxury Arabic fabric store clone website built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Tajawal (Arabic)
- **Direction**: RTL (Right-to-Left)

## Sections

1. Fixed transparent navbar (turns solid on scroll) + mobile drawer
2. Full-screen hero slider with Ken Burns effect
3. Trust badges bar
4. Categories bento grid
5. Projects editorial banner
6. Collections horizontal scroll
7. Why Guthmi quality standards
8. About section with animated counters
9. Newsletter signup
10. Testimonials
11. AI Studio CTA banner
12. Footer
13. Mobile bottom navigation bar

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel (recommended)
1. Create a new repo on [github.com](https://github.com)
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
4. Vercel auto-detects Next.js — just click Deploy!

## Color Palette

| Token | Value |
|-------|-------|
| `brand` | `#C9A96E` (golden) |
| `secondary` | `#1a1a1a` (near black) |
| `surface` | `#f9f9f7` (off white) |
