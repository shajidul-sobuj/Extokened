# 🧠 Extokened — Project Memory & Context Vault

## 1. Project Background
- **Team Name:** Extokened
- **Nature of Team:** Dedicated, semi-permanent hackathon and high-velocity engineering squad.
- **Activity:** Actively participates in various hackathons (national, university, global) and builds complex software projects.
- **Website Purpose:** Showcase team achievements, winning projects, individual squad members, and direct social channels (Facebook, LinkedIn, GitHub, etc.) to establish an elite team presence.

---

## 2. Brand Identity & Design Decisions
- **Team Motto:** *"We Hack. We Build. We Ship. Beyond the Next Token."*
- **Theme Palette:**
  - Base Background: `#08090C` (Deep obsidian dark)
  - Card & Container Surface: `#0E1117`
  - Cyber Cyan Accent: `#00F0FF`
  - Electric Violet Accent: `#8B5CF6`
  - Victory Gold / Emerald: `#10B981` / `#F59E0B`
- **Typography:**
  - Headlines: Modern Geometric Grotesk (`Space Grotesk`)
  - Body: Ultra-clean sans (`Inter`)
  - Code/Labels: Monospace (`JetBrains Mono`)
- **Key Visual Elements:**
  - Glowing podium awards for championship victories
  - Glassmorphic translucent cards with subtle borders
  - Interactive retro-modern hacker CLI terminal easter egg
  - Bento grid layout for social channels & quick links

---

## 3. Data Architecture Convention
- All dynamic data is decoupled into `src/data/`:
  - `siteConfig.ts` — Brand identity, meta information, social links (FB, LinkedIn, GitHub, Discord).
  - `hackathons.ts` — Hackathon timeline, trophies, project titles, tech stacks, devpost links.
  - `projects.ts` — Showcase projects, live demos, repository links, tags.
  - `team.ts` — Squad roster, roles, superpowers, personal socials.

---

## 4. Installed Skills Utilized
- `frontend-design`: Creating an intentional, un-templated visual aesthetic tailored for an elite hackathon team.
- `frontend-ui-engineering`: Robust component development, high accessibility, and smooth layout responsiveness.
- `design-system`: Structured token management for colors, typography, and spacing.
- `vercel-react-best-practices`: Next.js 15 App Router architecture, fast load times, and clean modularity.
- `code-review-and-quality`: Zero type errors, linting hygiene, clean Git commits.
