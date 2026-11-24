# ⚡ Extokened Website — Phased Execution Blueprint

This document tracks the step-by-step execution roadmap for building Extokened's official website.

---

## Phase 1: Environment Setup & Core Foundation
- [x] Initialize Next.js 15 project with TypeScript, Tailwind CSS, and App Router in `/media/sobuj/New Volume/Programming Folder/extokened`.
- [x] Install essential packages:
  - `framer-motion` (Fluid UI animations, reveals, scroll physics)
  - `lucide-react` (Crisp modern SVG icons)
  - `clsx` & `tailwind-merge` (Class variance helpers)
  - `canvas-confetti` (Celebratory victory particle triggers)
- [x] Configure Tailwind theme tokens:
  - Custom colors: `#08090C` (Obsidian Void), `#0E1117` (Surface Dark), `#00F0FF` (Cyber Cyan), `#8B5CF6` (Electric Violet), `#10B981` (Trophy Emerald).
  - Glassmorphic backdrop filters, cyber borders, glowing box-shadows.

---

## Phase 2: Typed Data Stores & Modular Schemas
- [ ] Create `src/data/siteConfig.ts` (Team metadata, motto, social links for FB, LinkedIn, GitHub, Discord).
- [ ] Create `src/data/hackathons.ts` (Hackathon awards, champion titles, event dates, project details, tech stacks).
- [ ] Create `src/data/projects.ts` (Featured projects, live demo links, github repositories, tags, categories).
- [ ] Create `src/data/team.ts` (Team member profiles, roles, avatars, handles, superpowers).

---

## Phase 3: Interactive UI Components & Animations
- [ ] Build `Navbar`: Floating glassmorphic header, hackathon readiness beacon, mobile navigation menu.
- [ ] Build `HeroSection`: High-impact headline, interactive canvas background, dynamic live stats ticker.
- [ ] Build `HackathonHallOfFame`: Podium cards for 1st place / champion victories with glowing metallic badges.
- [ ] Build `ProjectGallery`: Interactive filterable grid with category switches (All, AI, Full-Stack, Web3), live preview links.
- [ ] Build `SquadSection`: Team roster with hover interactions, skill badges, and social profiles.
- [ ] Build `InteractiveTerminal`: Easter egg CLI widget for hacker visitors (`help`, `extokened`, `wins`, `projects`).
- [ ] Build `SocialHub`: Bento-grid linking to Facebook page, LinkedIn organization, GitHub, Discord.
- [ ] Build `CollabSection`: Invitation & contact form with instant validation.
- [ ] Build `Footer`: High-density cyberpunk footer with system status, quick links, and copyright.

---

## Phase 4: Dedicated Subpages & Routing
- [ ] `/` — Full dynamic homepage experience.
- [ ] `/hackathons` — Comprehensive archive with chronological timeline, filter by trophy/year.
- [ ] `/projects` — Searchable catalog with tag filtering and detailed modals.
- [ ] `/team` — Full squad bio, origin story, hackathon methodologies.
- [ ] `/links` — Mobile-optimized Linktree alternative for Facebook/LinkedIn bios.
- [ ] `/contact` — Direct invitation channel for hackathon organizers and partners.

---

## Phase 5: Verification, Polish & Build
- [ ] Run `npm run build` to verify clean production compile.
- [ ] Run `npx tsc --noEmit` to verify strict TypeScript adherence with zero type errors.
- [ ] Test mobile responsiveness, touch targets, and accessibility.
- [ ] Verify fast load times and clean animations across browsers.
