# ⚡ Extokened — Product Delivery Roadmap & Execution Tracker

Based on **Product Design Brief v0.1** and **UI/UX & Visual Design Specification v0.1 (Dark Editorial Engineering)**.

---

## Phase 0: Brand & Content Baseline
- [x] Establish official brand positioning: Builder-led technology team that learns, competes, collaborates, and ships practical products.
- [x] Configure central data layer (`siteConfig.ts`, `projects.ts`, `hackathons.ts`, `team.ts`).
- [x] Separate participation, finalist placement, and wins into distinct categories.

---

## Phase 1: Foundation & Dark Editorial Design Tokens (UI/UX Spec v0.1)
- [x] Configure exact neutral and acid-lime tokens (`#0A0A0B`, `#111214`, `#191B1F`, `#22252A`, `#C6F36A`, `#10120A`, `#292B2E`, `#414449`).
- [x] Configure typography hierarchy: `Space Grotesk` (headings), `Inter` (body), `JetBrains Mono` (metadata) with `clamp()` fluid scales.
- [x] Build responsive, accessible global Header with Section 5.1 layout and `#C6F36A` Contact CTA.
- [x] Build industrial global Footer with verified official links (GitHub, LinkedIn, Facebook).
- [x] Remove generic purple/blue gradients, glowing blur blobs, and particle canvas loops.

---

## Phase 2: Page-Level Realignment (UI/UX Spec v0.1)
- [x] **Home Page (`/`)**:
  - [x] 6.1 Header: Inline navigation + `#C6F36A` Contact CTA
  - [x] 6.2 Hero: 7/5 editorial split (`We build what we imagine.` + typographic brand mark)
  - [x] 6.3 Proof strip: Full-width horizontal band with top/bottom `#292B2E` rules and vertical dividers
  - [x] 6.4 Featured projects: 7/5 split flagship feature + asymmetric secondary project rows
  - [x] 6.5 Hackathon highlight: Split layout with verified result badge and notable sprint timeline
  - [x] 6.6 Philosophy: 5-col statement + 7-col explanation + 3 numbered principles
  - [x] 6.7 Team preview: 4 portrait tiles with roles and focus areas always visible
  - [x] 6.8 Collaboration CTA: Full-width contrasting `#111214` surface + primary action
  - [x] Omit decorative fake terminal window per Section 1.1 exclusion
- [x] **About Page (`/about`)**:
  - [x] 7.1 Page hero: `ABOUT / EXTOKENED`
  - [x] 7.2 Two-column origin story
  - [x] 7.3 Mission and vision
  - [x] 7.4 Principles: Numbered rule-separated rows
  - [x] 7.5 Focus areas grid (no percentage bars)
  - [x] 7.6 6-step working process (`Discover → Design → Build → Test → Present → Improve`)
  - [x] 7.7 Closing CTA
- [x] **Projects Directory (`/projects`)**:
  - [x] 8.1 Page hero with record count
  - [x] 8.2 Wide editorial project feature
  - [x] 8.3 Filter toolbar (search, category, status, sort, active removable chips, clear action)
  - [x] 8.4 Deliberate mixed grid
  - [x] 8.5 End CTA
- [x] **Project Detail Case Study (`/projects/[slug]`)**:
  - [x] 9.1 Masthead & metadata rail
  - [x] 9.2 Wide hero media with caption
  - [x] 9.4 Problem & solution two-column editorial
  - [x] 9.5 Key capabilities breakdown
  - [x] 9.6 Architecture notes & dataflow strategy
  - [x] 9.7 Challenges & learnings post-mortem
  - [x] 9.8 Validated outcome
  - [x] 9.9 Contributor attribution
  - [x] 9.10 Next project feature & back link
- [x] **Hackathons Archive (`/hackathons`)**:
  - [x] 10.1 Page hero
  - [x] 10.2 Achievement overview with separated totals (7 champions, 5 runners-up, 6 finalists)
  - [x] 10.3 Featured result split card
  - [x] 10.4 Vertical chronological timeline with exact verified result labels
  - [x] 10.6 Closing event organizer CTA
- [x] **Hackathon Detail (`/hackathons/[slug]`)**:
  - [x] Event masthead, sprint telemetry, challenge statement, engineered solution, verified result badge, lessons learned, and evidence links
- [x] **Team Directory (`/team`)**:
  - [x] 11.1 Page hero
  - [x] 11.2 Portrait roster with roles and focus areas
  - [x] 11.3 Discipline grouped capabilities matrix
  - [x] 11.4 Culture dynamics & permanent unit philosophy
- [x] **Contact & Collaboration (`/contact`)**:
  - [x] 12.1 Hero & scope of inquiries
  - [x] 12.2 Direct channels (`team@extokened.dev`, GitHub, LinkedIn, Facebook)
  - [x] 12.3 Accessible dispatch form with inline states, SLA (24–48h), and privacy note
- [x] **Privacy Policy (`/privacy`) & Custom 404 (`/not-found`)**:
  - [x] Aligned with `#0A0A0B` / `#C6F36A` palette

---

## Phase 3: External Integrations & Official Presences
- [x] Connect official Facebook page (`https://facebook.com/extokened`).
- [x] Connect official LinkedIn company page (`https://linkedin.com/company/extokened`).
- [x] Connect official GitHub organization (`https://github.com/extokened`).
- [x] Mobile bento link hub (`/links`).

---

## Phase 4: Quality, Accessibility & Performance
- [x] Zero TypeScript errors (`npx tsc --noEmit` verified).
- [x] Production build passes cleanly with full static prerendering (`npm run build`).
- [x] Responsive layout tested from mobile (<640px) to desktop (1280px+).
- [x] WCAG AA compliant text contrast and keyboard accessibility.
- [x] `prefers-reduced-motion` compliance.
