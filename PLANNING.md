# 🚀 Extokened Official Platform — Architectural & Feature Planning

> **Extokened** — Hackathon Squad & Innovation Collective  
> *"We Hack. We Build. We Ship. Beyond the Next Token."*

---

## 1. Executive Summary & Vision

**Extokened** is an elite, permanent hackathon & project team that actively competes in national, global, and university hackathons, prototyping cutting-edge applications (AI, Full-Stack, Web3, Systems) under intense pressure.

This project delivers a **flagship, high-octane, animated, and professional portfolio website** designed to:
1. **Showcase Hackathon Victories & Track Records:** Spotlight championship wins, runner-up titles, special awards, Devpost/live demos, pitch decks, and judging feedback.
2. **Featured Projects Showcase:** Display all hackathon prototypes and standalone software projects with interactive filters, live previews, tech stack badges, and GitHub links.
3. **Team Squad Roster:** Introduce the core team members, their specialized roles (AI, Full-Stack, UI/UX, Systems), individual social profiles, and team philosophy.
4. **Unified Social & Community Hub:** Direct traffic to Facebook Page, LinkedIn Organization/Team page, GitHub Org, Discord, Twitter/X, and Devpost.
5. **Hackathon Invitation & Collab Portal:** An interactive contact channel for organizers, sponsors, and collaborators to invite Extokened to upcoming hackathons or partner on innovative builds.
6. **Data-Driven Architecture:** All hackathon awards, projects, members, and links are defined in structured, typed TypeScript configuration files (`src/data/`) so any team member can add new wins or projects in seconds without rewriting UI code.

---

## 2. Brand Identity & Design System

### 2.1 Aesthetic Archetype: *Cyber-Minimalist Hacker Lab*
- **Theme:** Deep space obsidian `#08090C` background with subtle grid lines, illuminated neon cyan `#00F0FF`, electric violet `#8A2BE2`, and emerald victory `#10B981` accents.
- **Visual Personality:** High-velocity engineering, hacker culture, terminal cues, glassmorphism, dynamic glow effects, and buttery smooth animations without looking cluttered or generic.
- **Typography:**
  - **Headings & Display:** `Space Grotesk` or `Syne` (modern, geometric, tech-forward).
  - **Body & Content:** `Inter` (ultra-legible, crisp line-height).
  - **Code & Micro-labels:** `JetBrains Mono` for terminal widgets, timestamps, and tech badges.

### 2.2 Design Tokens
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `obsidian-DEFAULT` | `#08090C` | Root canvas / deep void |
| `obsidian-surface` | `#0E1117` | Card / container background |
| `obsidian-elevated` | `#161B22` | Modal / popover / dropdown background |
| `obsidian-border` | `rgba(255, 255, 255, 0.08)` | Structural dividers and cards |
| `cyber-cyan` | `#00F0FF` | Primary action, active state, glow |
| `cyber-purple` | `#8B5CF6` | Secondary highlight, AI tags, gradients |
| `cyber-green` | `#10B981` | 🏆 Champion badge, victory accents |
| `cyber-gold` | `#F59E0B` | Runner-up / finalist badges |
| `text-primary` | `#F3F4F6` | Primary reading text |
| `text-muted` | `#9CA3AF` | Secondary labels, descriptions |

---

## 3. Core Pages & Component Architecture

### 3.1 Page Breakdown
1. **Home (`/`)**:
   - **Hero Section:** Dynamic glowing particle/grid canvas, animated beacon badge ("⚡ Ready for Next Hackathon"), punchy team tagline, quick stats ticker, primary CTAs.
   - **Quick Stats Ticker:** Counters for Hackathons Attended, Trophies Won, Projects Built, Hours of Hacking.
   - **Hall of Fame Highlights:** Spotlight top championship wins with gold/silver badge glow and confetti triggers.
   - **Featured Projects Grid:** Flagship projects with live demo triggers, GitHub repos, and tech tags.
   - **The Squad (Core Members):** Interactive avatar cards with hover effects and role descriptions.
   - **Interactive Terminal Easter Egg:** Functional mini terminal where visitors can type `help`, `projects`, `wins`, `contact`, `whoami`.
   - **Social Connect Hub:** Direct cards to Facebook, LinkedIn, GitHub, Discord.
   - **Call-to-Action / Collaboration Banner:** "Have a challenge or hackathon? Let's talk."

2. **Hackathons Archive (`/hackathons`)**:
   - Full timeline view and filterable grid (All, Champions, National, Global, AI Hackathons).
   - Card details: Event name, Organizer, Date, Track, Problem Statement, Solution Built, Award/Result, Devpost link, GitHub, Demo link.

3. **Projects Showcase (`/projects`)**:
   - Categorized directory: AI & LLMs, Full-Stack / SaaS, Mobile & IoT, Web3 & FinTech.
   - Search bar + Tag filters.
   - Rich project modals with architecture breakdown, screenshots, and live demo buttons.

4. **Team & Superpowers (`/team`)**:
   - In-depth profiles of Extokened members.
   - Bio, role, specialized tech stacks, personal achievements, social links.

5. **Quick Links / Socials (`/links`)**:
   - Bento-style clean link-tree alternative for placing in Facebook bio, LinkedIn bio, GitHub readme.

6. **Contact / Hire / Collab (`/contact`)**:
   - Form for hackathon invitations, project requests, sponsorship inquiries.
