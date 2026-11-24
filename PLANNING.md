# 🏛️ Extokened — Website Product & Experience Plan
**Document:** Planning / Product Design Brief  
**Version:** 0.1 — Discovery baseline  
**Date:** 24 November 2026  
**Status:** Approved Product Specification  

---

## 1. Product Vision & Positioning
**Extokened** is a long-term technology and hackathon team. The website acts as the team's official digital home: a credible brand presence, an evidence-backed record of hackathon participation and achievements, and a curated portfolio of projects.

**Positioning:** A builder-led technology team that learns, competes, collaborates, and ships practical products.

### Primary Goals
1. Establish a consistent, recognizable Extokened identity.
2. Showcase hackathon participation, finalists, winners, awards, and lessons learned.
3. Present shipped and in-progress projects with clear outcomes and demos.
4. Introduce team members and their areas of contribution.
5. Make it easy for organizers, collaborators, sponsors, recruiters, and other teams to contact Extokened.
6. Connect official social and developer platforms.

### Success Indicators
- Visitors understand who Extokened is within 5–10 seconds.
- A visitor can reach a project, achievement, member profile, or contact route in ≤ 2 clicks.
- Every published achievement and project has verified facts, links, and media.
- Pages load quickly and remain usable on mobile and low/medium bandwidth connections.

---

## 2. Audience & User Journeys
| Audience | What They Need | Primary Route |
| :--- | :--- | :--- |
| **Hackathon Organizers** | Team identity, past participation, verified results, contact | Home → Achievements → Contact |
| **Recruiters / Mentors** | Real work, skills, member contributions | Home → Projects → Team |
| **Potential Collaborators** | Team interests, active work, contact | Home → About → Contact |
| **General Visitors** | What Extokened does and why it matters | Home → Projects / About |
| **Existing Members** | Shareable profile and project links | Team / Project detail |

---

## 3. Information Architecture & Routes
### Primary Navigation
- **Home** (`/`)
- **About** (`/about`)
- **Projects** (`/projects`)
- **Hackathons** (`/hackathons`)
- **Team** (`/team`)
- **Contact** (`/contact`)
- **Header CTA:** `Let's Collaborate`
- **Utility Links:** GitHub, LinkedIn, Facebook

### Complete Route Map
- `/` — Home: Fast overview, verified stats, curated projects, hackathon highlights, team preview, collaboration CTA.
- `/about` — About Extokened: Origin story, mission, vision, principles, demonstrated focus areas, how we work.
- `/projects` — Project Directory: Search & filter by category, technology, status (Shipped, Prototype, In Progress, Archived), and year.
- `/projects/[slug]` — Project Case Study Detail: Problem context, solution, key features, technical overview & architecture, challenges & learnings, outcomes, contributors.
- `/hackathons` — Hackathon Timeline & Archive: Chronological record, distinct categorization of Winners vs Finalists vs Participants, featured achievement, filters.
- `/hackathons/[slug]` — Hackathon Event Detail: Event challenge, team solution, official result evidence, media, team roles, lessons learned.
- `/team` — Team Directory: Approved member profiles, collective capabilities grouped by area, team build culture.
- `/contact` — Contact & Collaboration: Direct team email, LinkedIn, GitHub, Facebook, verified inquiry form.
- `/privacy` — Privacy Policy: Data collection disclosure for forms and communications.
- `/404` / `not-found` — Custom not-found page with clear routes back to projects/home.

---

## 4. Global Design System (Dark Editorial-Tech / Modern Digital Studio)

### 4.1 Aesthetic Archetype
**Direction:** Dark editorial-tech / modern digital studio. Premium, precise, confident, **not an overused neon cyberpunk template**.

**Core Principles:**
- Strong typography and generous spacing.
- Dark neutral canvas with one primary accent and one restrained secondary accent.
- Real team, event, and product visuals dominate over generic stock imagery.
- Subtle grids, thin borders (`#253044`), restrained gradients.
- High readability; animations never obstruct navigation or text.
- WCAG AA contrast compliance across all body text and controls.

### 4.2 Exact Color Tokens
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `background` | `#080B12` | Main page background |
| `surface` | `#101724` | Cards / panels |
| `surface-elevated` | `#151F2E` | Hover / modal surfaces |
| `text-primary` | `#F4F7FB` | Headings & high-emphasis body |
| `text-secondary` | `#A6B1C2` | Descriptions & readable copy |
| `text-muted` | `#718096` | Metadata, timestamps, labels |
| `primary-accent` | `#7C5CFF` | Primary CTA, focus rings, key links |
| `secondary-accent` | `#22D3C5` | Small highlights, status indicators |
| `border` | `#253044` | Dividers, structural outlines |
| `success` | `#34D399` | Verified wins, live status |
| `warning` | `#FBBF24` | In-progress / pending status |

### 4.3 Typography Scale
- **Display / Headings:** `Space Grotesk` (clean, geometric, tight tracking `-0.02em`).
- **Body / UI:** `Inter` (optimal legibility, 150–160% line height).
- **Code / Technical Metadata:** `JetBrains Mono` (tabular numbers, tags, timestamps).

### 4.4 Motion System (Purposeful & Accessible)
- **Section Reveal:** Opacity + 12–16px vertical drift, 450–600ms ease-out.
- **Card Hover:** Subtle 2–4px lift, border shift (`#253044` → `#7C5CFF/40`), 180–240ms.
- **Button Hover:** Smooth color transition, subtle arrow drift, 150–200ms.
- **Hero Ambient:** Very slow, subtle gradient/grid drift. No high-frequency movement.
- **Counters:** Animate once on viewport entry for substantiated metrics only.
- **Respects `prefers-reduced-motion`:** All animations gracefully disable under reduced motion settings. Zero scroll-jacking, zero flashing, zero audio auto-play.

---

## 5. Structured Data Model (`src/data/`)
- `projects.ts`: Full project records including `slug`, `title`, `summary`, `description`, `category`, `status`, `technologies`, `liveUrl`, `sourceUrl`, `problem`, `solution`, `keyFeatures`, `architectureNotes`, `challenges`, `learnings`, `outcome`, `contributors`.
- `hackathons.ts`: Verified event records including `slug`, `eventName`, `organizer`, `date`, `year`, `resultType` (`winner`, `runner_up`, `finalist`, `participant`), `resultLabel`, `challengeSummary`, `solutionSummary`, `techStack`, `evidenceLinks`, `teamMembers`.
- `team.ts`: Approved member profiles including `slug`, `name`, `role`, `bio`, `focusAreas`, `skills`, `socials`, `avatar`.
- `siteConfig.ts`: Central brand identity, confirmed social links, official email, vision statement, navigation configuration.
