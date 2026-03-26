# Dovito WWW Redesign

## Project Overview
A static marketing website for Dovito Business Solutions, redesigned with a modern aesthetic inspired by sanity.io. This is a greenfield project — you are the architect.

## Tech Stack
- **Framework**: React 18 + Vite (static site, no SSR needed)
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (Radix + CVA)
- **Icons**: Lucide React
- **Animations**: Framer Motion (subtle, professional — not flashy)
- **Router**: React Router (or Wouter for lightweight)
- **TypeScript**: Strict mode
- **Build output**: Static files (deployable to any CDN/host)

## Design Direction
The design takes heavy inspiration from **sanity.io**:
- Clean, full-width sections with generous whitespace
- Dark/light theme system with smooth transitions
- Sophisticated typography hierarchy (large headlines, clean body text)
- Numbered/tabbed content sections for methodology
- Code-like precision in spacing and alignment
- Professional, enterprise-grade aesthetic that's still approachable
- Subtle animations on scroll (fade-in, slide-up — nothing distracting)

## Brand Identity — Dovito Business Solutions

### What Dovito Does
Operations consulting and systems integration for construction companies and skilled trades businesses ($1M-$10M revenue). "We fix how your business runs." Process first, technology second.

### Color System
- **Primary (Deep Navy)**: hsl(213, 57%, 24%) / #1a365d — headers, hero backgrounds
- **Secondary (Bright Cyan)**: hsl(199, 100%, 62%) / #3dc2ff — CTAs, accent buttons
- **Accent (Teal)**: hsl(195, 100%, 40%) / #00a3cc — highlights, interactive elements
- **Tertiary (Gold)**: hsl(38, 73%, 42%) / #b8860b — premium highlights
- **Background**: White (#FFFFFF) light / Very Dark Blue (#001f3d) dark
- **Text**: Deep Navy (#1a365d) light / Off-White (#fafafa) dark
- **Muted**: Light Gray (#F5F7FA) light / Dark Gray (#2d3748) dark

### Typography
- **Font**: Inter (Google Fonts), weights 300-700
- Large display headings for hero sections
- Clean, readable body text

### Brand Voice
- Direct, specific, outcome-focused
- Short confident statements
- No emojis, no AI buzzwords ("leverage," "seamless," "synergy")
- StoryBrand framework: customer is the hero, Dovito is the guide

### Core Methodology: DO-VI-TO
1. **DO** (Discover) — Operational audit, identify bottlenecks
2. **VI** (Validate) — Prioritize solutions, build roadmap
3. **TO** (Transform) — Implement, measure, iterate

### Service Packages
- **Assessment**: $1,500-$2,500 (1-2 weeks) — Operational audit + action plan
- **Implementation**: $8k-$30k (4-12 weeks) — Process improvement, systems integration, custom dev
- **Retained Support**: $2.5k-$5k/mo (20-40 hrs) — Ongoing consulting + development

### Key Messaging
- Hero: "Build different."
- Subline: "Custom web applications. Systems integration. Operational efficiency."
- Methodology: "Discover. Validate. Transform."
- Positioning: "For established construction companies seeking operational efficiency, Dovito is the technology partner that builds custom software and integrates disconnected systems, delivering measurable ROI."

### Target Audience
Construction companies and skilled trades, $1M-$10M revenue. Owners/operators drowning in manual processes, disconnected tools, and inefficient workflows.

## File Structure Convention
```
src/
  components/
    ui/           # shadcn/ui base components
    layout/       # Nav, Footer, Layout wrapper
    sections/     # Homepage sections (Hero, Features, etc.)
  pages/          # Route pages
  lib/            # Utilities, cn(), constants
  assets/         # Images, logos
  index.css       # Tailwind + CSS variables
  main.tsx        # Entry point
  App.tsx         # Router
```

## Pages to Build
1. **Homepage** (/) — Hero, methodology, services overview, testimonials, CTA
2. **Services** (/services) — Detailed service packages with pricing
3. **About** (/about) — Team, philosophy, values
4. **Contact** (/contact) — Contact form + info

## No-Go List
- No backend/API (static site only)
- No database
- No authentication
- No emojis in copy
- No generic stock photography descriptions
- No AI buzzwords in marketing copy
