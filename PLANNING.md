# 🚀 EXTOKENED — Exhaustive Page-by-Page & Section-by-Section Architectural Plan

> **Extokened** — Elite Hackathon Squad & Innovation Collective  
> *"We Hack. We Build. We Ship. Beyond the Next Token."*

---

## 📐 PART 1: GLOBAL DESIGN SYSTEM & FOUNDATIONS

### 1.1 Color Architecture (Cyber-Kinetic Command Palette)
| Token Name | Hex Value | Purpose & Psychological Impact |
| :--- | :--- | :--- |
| `void-black` | `#050608` | Primary background void; deepest obsidian with subtle blue undertone |
| `surface-base` | `#0B0E14` | Primary card and panel surface with glassmorphic backing |
| `surface-elevated` | `#121620` | Modals, active states, and elevated hover cards |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Baseline structural dividers and grid lines |
| `border-active` | `rgba(0, 245, 255, 0.35)` | Active element boundaries and hover triggers |
| `cyber-cyan` | `#00F5FF` | Primary signature accent; electric energy, technology, focus |
| `hyper-violet` | `#9945FF` | Secondary accent; AI layers, neural pipelines, agentic workflows |
| `trophy-gold` | `#FFB800` | Grand Champion 1st Place badges, podium glow, victory foils |
| `trophy-emerald` | `#00FF66` | Live status beacon, track wins, clean build indicators |
| `danger-crimson` | `#FF3366` | Critical alerts, countdown timers, close buttons |
| `text-primary` | `#F8FAFC` | Maximum legibility headline and key data text |
| `text-secondary` | `#94A3B8` | Body copy, technical descriptions |
| `text-muted` | `#64748B` | Monospace coordinate labels, timestamps, metadata |

### 1.2 Typography Architecture
- **Display Headlines (`Space Grotesk`):** Heavyweight (800/900 Black), uppercase tracking (`-0.03em`), geometric and assertive. Used for main headlines, section titles, and key numbers.
- **Monospace Telemetry (`JetBrains Mono`):** Clean tabular numbers, coordinate timestamps, clearance tags, and code snippets.
- **Content Body (`Inter`):** Clean, accessible reading experience with generous line-height (`1.6`) for project explanations and hackathon recaps.

### 1.3 Audio Synthesizer Engine (`src/lib/sound.ts`)
Zero-dependency Web Audio API synthesizer engine providing tactile cyber feedback:
1. `playHover()`: Ultra-short 1200Hz frequency sine pulse (25ms) when hovering interactive cards.
2. `playClick()`: Mechanical key-switch click sound on button engagement.
3. `playVictory()`: 3-tone arpeggio (C5 -> E5 -> G5) celebrating hackathon trophy cards.
4. `playGlitch()`: Micro white-noise burst during text decryption.
5. Global Mute/Equalizer state stored in `localStorage` and synchronized across all pages.

---

## 🖥️ PART 2: GLOBAL SHELL COMPONENTS (Every Page)

### 2.1 HUD Command Header (`src/components/layout/Navbar.tsx`)

#### A. Content & Elements
- **Left Wing:**
  - Monogram bracket icon `[EXT//01]` with glowing cyan core.
  - Squad name `EXTOKENED` in bold geometric typography.
  - Pulsing radar beacon: `● SYSTEM_STATUS: BATTLE_READY`.
- **Center Wing (Floating Nav Capsule):**
  - Navigation links with monospaced index prefixes:
    - `01 // OVERVIEW` (`/`)
    - `02 // VICTORIES` (`/hackathons` with `12🏆` badge)
    - `03 // BUILDS` (`/projects`)
    - `04 // SQUAD` (`/team`)
    - `05 // MATRIX` (`/links`)
    - `06 // DISPATCH` (`/contact`)
- **Right Wing:**
  - Live UTC Epoch / Clock counter: `UTC 21:40:12`.
  - Sound Synthesizer Equalizer Toggle button: Animated 4-bar equalizer that toggles `AUDIO: ON / MUTED`.
  - Tactical Action Button: `[ INVITE_TO_HACK ]` with cyber clip corner.

#### B. Visual Wireframe Layout
```
+----------------------------------------------------------------------------------------------------------+
| [EXT//01] EXTOKENED  ● READY  |  01//HOME  02//WINS[12🏆]  03//BUILDS  04//SQUAD  05//LINKS  |  UTC 21:40  🔊 [INVITE]  |
+----------------------------------------------------------------------------------------------------------+
```

#### C. Animation & Styling
- **Sticky Glass:** Translucent backdrop filter (`blur(16px)`), `#050608/80` background, subtle bottom border (`rgba(255,255,255,0.08)`).
- **Active Page Glow:** The active route features a glowing cyan underbar and soft background wash.
- **Sound Effect:** Hovering links triggers `playHover()`, clicking triggers `playClick()`.

---

### 2.2 Industrial Telemetry Footer (`src/components/layout/Footer.tsx`)

#### A. Content & Elements
- **Top Row (Brand Marquee):** Stylized giant ASCII/geometric marquee text reading `E X T O K E N E D — W E  H A C K .  W E  B U I L D .  W E  S H I P .`
- **Middle Grid (4 Columns):**
  - Column 1 (Manifesto & Direct Socials): Mission summary + direct branded buttons for Facebook, LinkedIn, GitHub, Discord, Twitter, Devpost.
  - Column 2 (System Nav): Deep links to Overview, Victories Archive, Projects Catalog, Squad Dossiers, Links Hub.
  - Column 3 (Battle Stations): Direct email (`team@extokened.dev`), Base location (`Dhaka, Bangladesh // Global Remote`), Response SLA (`< 12 Hours`).
  - Column 4 (War-Room Status Card): Real-time hackathon season indicator, open invitations status, and quick consultation link.
- **Bottom Bar:**
  - Real-time Git Commit SHA indicator: `BUILD: e8f41a9 // KERNEL: NEXT.JS 15 TURBO`.
  - Latency ticker: `PING: 14ms // STATUS: ALL NODES GREEN`.
  - Copyright statement: `© 2026 EXTOKENED SQUAD. ALL RIGHTS RESERVED.`

---

## 📄 PART 3: PAGE 1 — HOME PAGE (`/`)

### Section 1: The "War Room" Hero Section (`src/components/hero/HeroSection.tsx`)

#### A. Content & Elements
- **Eyebrow Telemetry:** `[COORD: 23.8103° N, 90.4125° E] // SQUAD_ID: EXT-ALPHA // HACKATHON COMBAT READY`
- **Main Headline (Dynamic Glitch Decrypt):**
  - Line 1: `WE HACK. WE BUILD.` (Solid White, Space Grotesk 900)
  - Line 2: `WE SHIP BEYOND LIMITS.` (Illuminated Cyan-to-Violet Cyber Gradient)
- **Manifesto Copy:**
  - "Extokened is an elite, permanent hackathon collective. We turn high-complexity AI models, distributed architectures, and bold ideas into championship-winning production prototypes in 24–48 hours."
- **Action Buttons:**
  - Primary CTA: `[ EXPLORE 12+ TROPHIES 🏆 ]` (Gradient cyan button with victory sound trigger on click).
  - Secondary CTA: `[ INSPECT ARSENAL & BUILDS ]` (Cyber-bordered translucent button).
- **Interactive 48-Hour Sprint Simulator Widget (Right Wing):**
  - A live interactive mini-game/simulation!
  - Button: `[ ▶ LAUNCH 48H SPRINT SIMULATION ]`
  - When clicked, a live progress sequence runs with audio feedback:
    - *00:00:00* -> Phase 1: Problem Framing & DB Schema Locked (Check!)
    - *12:00:00* -> Phase 2: Multimodal Gemini AI Fine-Tuned & Backend Containerized (Check!)
    - *30:00:00* -> Phase 3: All-Nighter Coding Assault & WebSockets Live (Check!)
    - *48:00:00* -> Phase 4: Stage Live Demo & Grand Champion Victory! (Confetti explodes + victory fanfare!).
- **Bottom Telemetry Strip:**
  - 4 Combat Gauges:
    - `18+` Hackathons Battled (`100% Live Demo Rate`)
    - `12 🏆` Podium Trophies Claimed (`7x Grand Champions`)
    - `26+` Prototypes Shipped (`Sub-48h Builds`)
    - `150K+` Lines of Clean Code (`TypeScript & Python`)

#### B. Visual Wireframe Layout
```
+----------------------------------------------------------------------------------------------------------+
| [COORD: 23.81° N, 90.41° E] // SQUAD_ID: EXT-ALPHA // SYSTEM: OPERATIONAL                                |
|                                                                                                          |
|   LEFT WING: TYPOGRAPHIC ASSAULT                 RIGHT WING: 48H SPRINT SIMULATOR WIDGET                 |
|   ==============================                 =======================================                 |
|   WE HACK. WE BUILD.                             +-----------------------------------------------------+ |
|   WE SHIP BEYOND LIMITS.                         | [EXT-SIMULATOR v2.4]              STATUS: ARMED     | |
|                                                  | > Target: AI Horizon 48h Global Sprint              | |
|   Extokened is a permanent hackathon squad...    | [=================>                     ] 45%       | |
|                                                  | Log: Ingesting sensor telemetry...                  | |
|   [ 🏆 VIEW 12 WINS ]  [ ⚡ CODE LAB ]            | [ ▶ SIMULATE 48H COMBAT SPRINT ]                    | |
|                                                  +-----------------------------------------------------+ |
|                                                                                                          |
|   +-------------------+  +-------------------+  +-------------------+  +-------------------+             |
|   | 18+ BATTLES       |  | 12 🏆 PODIUMS     |  | 26+ PROTOTYPES    |  | 150K+ CODE LINES  |             |
|   +-------------------+  +-------------------+  +-------------------+  +-------------------+             |
+----------------------------------------------------------------------------------------------------------+
```

---

### Section 2: Hackathon Hall of Fame (Podium Spotlight) (`src/components/hackathons/HackathonHallOfFame.tsx`)

#### A. Content & Elements
- **Header:**
  - Tag: `[ PODIUM CABINET // ARCHIVE REF 0xEXT-WIN ]`
  - Title: `Championship Victories & Track Records`
  - Subtitle: "Every hackathon is a trial by fire. Here are our top podium victories across national and global arenas."
  - Filter Switcher: `[ ALL RECORDS ]` | `[ 🏆 GRAND CHAMPIONS ]` | `[ 🥈 RUNNER-UP & TRACKS ]`
- **Holographic 3D Cards (`HoloCard.tsx`):**
  - **Card 1: AI Horizon Global Hackathon 2025**
    - Badge: `🏆 GRAND CHAMPION (1st Place)` in metallic gold foil with celebration confetti.
    - Metric: `Ranked #1 of 220+ Global Teams`
    - Solution: *PulseAI* — Autonomous ICU Triage & Telemetry Anomaly Detection using Gemini 2.0.
    - Tags: `Next.js 15`, `Google Gemini API`, `FastAPI`, `WebSockets`.
    - Links: GitHub Repo, Live Demo, Devpost, Pitch Deck.
  - **Card 2: National CodeStorm Championship 2024**
    - Badge: `🏆 1st Place Smart City Track` in emerald foil.
    - Metric: `41% Emergency Transit Cut`
    - Solution: *GridSync* — Edge Computer Vision Dynamic Traffic Grid with Ambulance Corridors.
    - Tags: `YOLOv9`, `FastAPI`, `React 19`, `Mapbox GL`.
  - **Card 3: FinTech Disrupt Sprint 2024**
    - Badge: `🥈 1st Runner Up` in titanium silver foil.
    - Metric: `Top 2 of 85 Teams`
    - Solution: *Khashra* — Vernacular Bangla Voice Ledger & Credit Scoring for Micro-Merchants.
    - Tags: `Whisper AI`, `FastAPI`, `Supabase`, `IndexedDB PWA`.
  - **Card 4: Agentic AI Frontier Hackathon**
    - Badge: `⚡ Best Autonomous Agent Architecture`
    - Metric: `Zero-Hallucination Web Navigation`
    - Solution: *OmniScrape Swarm* — Self-healing recursive DOM scraping swarm.
- **Action:** `[ VIEW FULL HACKATHON ARCHIVE & TIMELINE -> ]`

---

### Section 3: Featured Innovation Lab (Projects Showcase) (`src/components/projects/ProjectGallery.tsx`)

#### A. Content & Elements
- **Header:**
  - Tag: `[ THE ARSENAL // CODEBASE & REPOS ]`
  - Title: `Flagship Software Prototypes`
  - Subtitle: "Inspected and battle-tested under live demo conditions. Every build features live deployments and open architecture notes."
  - Category Pills: `[ ALL ]`, `[ AI & AGENTS ]`, `[ FULL-STACK ]`, `[ DEVTOOLS ]`, `[ FINTECH ]`
  - Live Search Box: Instant fuzzy query for tech tags (`Gemini`, `FastAPI`, `Go`, `Next.js`).
- **Cards Grid:**
  - Responsive 3-column asymmetric grid.
  - Each card features:
    - Domain badge (`AI & Agents`, etc.)
    - Status pill (`Shipped & Live`, `Open Source`)
    - Project Title & Hackathon Origin
    - System Architectural Strategy snippet
    - Tech badges
    - Direct actions: `[ ⚡ DEEP DIVE SPECS ]` (triggers `ProjectModal.tsx`), `[ GITHUB ]`, `[ LIVE DEMO ]`.

---

### Section 4: The Squad Operatives (Dossier Roster) (`src/components/team/SquadSection.tsx`)

#### A. Content & Elements
- **Header:**
  - Tag: `[ SQUADRON CORE // CLEARANCE: ALPHA ]`
  - Title: `The Operatives of Extokened`
  - Subtitle: "Four synchronized specialists across AI engineering, full-stack architecture, distributed systems, and interface craft."
- **Classified Operator Cards:**
  - **Operative 01: Sobuj Ahmed**
    - Callsign: `LEAD_ARCHITECT` // Clearance: `ALPHA-01`
    - Role: Team Lead & Full-Stack Architect
    - Superpower: Architecting entire production schemas and API contracts in the first 2 hours of a hackathon.
    - Fuel: `Cold Brew & Dark Chocolate`
    - Stats: 18 Hackathons, 12 Trophies, 65K LOC.
  - **Operative 02: Abrar Hasan**
    - Callsign: `MODEL_ALCHEMIST` // Clearance: `ALPHA-02`
    - Role: AI & Machine Learning Specialist
    - Superpower: Fine-tuning Gemini and agent swarms that never hallucinate during the live judge pitch.
    - Fuel: `Double Espresso`
    - Stats: 15 Hackathons, 10 Trophies, 45K LOC.
  - **Operative 03: Tanvir Rahman**
    - Callsign: `CONCURRENCY_OVERLORD` // Clearance: `ALPHA-03`
    - Role: Backend & Systems Engineer
    - Superpower: Eradicating race conditions and WebSocket lag 15 minutes before the submission deadline.
    - Fuel: `Black Coffee & Spiced Chai`
    - Stats: 16 Hackathons, 11 Trophies, 50K LOC.
  - **Operative 04: Nafisa Tabassum**
    - Callsign: `INTERFACE_SORCERESS` // Clearance: `ALPHA-04`
    - Role: UI/UX Virtuoso & Creative Technologist
    - Superpower: Crafting interfaces so visually striking that hackathon judges stop scrolling and award maximum UX points.
    - Fuel: `Matcha Latte`
    - Stats: 14 Hackathons, 9 Trophies, 38K LOC.

---

### Section 5: Interactive Combat CLI Terminal (`src/components/terminal/InteractiveTerminal.tsx`)

#### A. Content & Elements
- **Terminal Window Frame:**
  - Mac/Linux dot controls (Close, Minimize, Maximize) + Title: `extokened-combat-shell v2.4 ~ guest@war-room`.
  - Terminal body with responsive height toggle.
  - Command list: `help`, `wins`, `projects`, `squad`, `stack`, `socials`, `whoami`, `clear`.
  - Interactive clickable prompt pills for quick execution on mobile and desktop.
  - Form input with cyan cursor blinking prompt: `extokened@war-room:~$`.

---

### Section 6: Official Social Matrix (`src/components/socials/SocialHub.tsx`)

#### A. Content & Elements
- **Header:**
  - Tag: `[ OFFICIAL CHANNELS & COMMUNITY MATRIX ]`
  - Title: `Connect Across Our Official Presence`
  - Subtitle: "Follow our live builds, join our Discord war-room, explore GitHub repos, and connect on Facebook & LinkedIn."
- **Bento Grid Architecture:**
  - **Card 1: Official Facebook Page (Prominent 2-column card)**
    - Facebook Blue styling (`#1877F2`), verified badge, community updates, photo galleries from award stages. Direct CTA `[ FOLLOW ON FACEBOOK -> ]`.
  - **Card 2: LinkedIn Company Page (Prominent 2-column card)**
    - LinkedIn Blue styling (`#0A66C2`), engineering writeups, post-mortems, professional collaboration channel. Direct CTA `[ CONNECT ON LINKEDIN -> ]`.
  - **Card 3: GitHub Organization Card**
    - Open source templates, hackathon starter kits, project repos.
  - **Card 4: Discord HQ War Room Card**
    - Live voice channels during hackathons, collaborative ideation.
  - **Card 5: Devpost Verified Showcase**
    - Verified submissions and judge rubrics.
  - **Card 6: X / Twitter Feed**
    - 2 AM caffeine updates and build-in-public threads.

---

### Section 7: Collaboration & Invitation Dispatch (`src/components/contact/CollabSection.tsx`)

#### A. Content & Elements
- **Left Column:**
  - Reason to connect: Hackathon invites, rapid MVP prototyping, team sponsorship.
  - Response time guarantee: Sub-12h response time.
  - Direct email: `team@extokened.dev`
- **Right Column (Interactive Form):**
  - Name / Organization input.
  - Email address input.
  - Purpose of contact dropdown (`🏆 Invite Extokened to a Hackathon`, `⚡ Rapid MVP Build`, `🤝 Sponsorship`, `💬 General`).
  - Message details textarea.
  - Submit button with live dispatch state and celebratory confirmation panel.

---

## 📄 PART 4: SUBPAGES SPECIFICATION

### 4.1 Page 2: Hackathons Archive (`/hackathons`)
- **Hero & Ticker:** Complete trophy cabinet with live summary KPIs (18+ Competitions, 7 Champions, 5 Runners-up, 100% Live Demo Rate).
- **Interactive Multi-Axis Filter:**
  - Award Filter: All, Grand Champions, Special Tracks.
  - Year Filter: All Years, 2025, 2024, 2023.
  - Search Input: Instant filter across hackathon name, organizer, technology, or problem statement.
- **Card Grid:** Detailed cards with full problem description, architecture solution, judge scoring highlights, and links to Devpost, GitHub, and video demos.

### 4.2 Page 3: Projects Catalog (`/projects`)
- **Hero & Search:** Comprehensive innovation lab catalog.
- **Category Matrix:** Filterable by AI & Agents, Full-Stack & Cloud, DevTools & Systems, Web3 & FinTech.
- **Deep Dive Modal (`ProjectModal.tsx`):**
  - Displays full architectural breakdown, system diagrams, feature checklists, and live links.

### 4.3 Page 4: The Squad (`/team`)
- **Squad Command Header:** Detailed mission philosophy.
- **Operative Dossiers:** 4 in-depth operative profiles with expanded bios, superpowers, battle records, and social handles.
- **The Origin Story:** Comprehensive explanation of why the team is named **"Extokened"** (*"Beyond the next token"*).
- **The 48-Hour Hackathon Playbook:**
  - Hours 00–04: Architecture & Schema Lock
  - Hours 04–24: The Engineering Blitz
  - Hours 24–38: Integration & Edge Cases
  - Hours 38–48: The Live Pitch Polish

### 4.4 Page 5: Bento Link-in-Bio (`/links`)
- Specifically tailored for placement in Facebook Page bio, LinkedIn company link, and GitHub profile.
- Monogram avatar with online beacon.
- 1-Click "Copy Profile Link" button with toast.
- Spotlight banner for latest championship win (AI Horizon 2025).
- Direct high-contrast cards to Facebook, LinkedIn, GitHub, Discord, Devpost, and Website Home.

### 4.5 Page 6: Contact & Dispatch Portal (`/contact`)
- Standalone dedicated dispatch portal combining the interactive collaboration form with direct communication channels.

---

## 🛠️ PART 5: EXECUTION CHECKLIST & PHASES

- [ ] **Phase 1: Audio Synthesizer & Kinetic FX**
  - Implement `src/lib/sound.ts` with Web Audio API.
  - Implement `src/components/ui/GlitchText.tsx` for dynamic text scramble.
  - Implement `src/components/ui/HoloCard.tsx` for 3D holographic tilt foil.
  - Refine `src/app/globals.css` with precision grid lines, crosshairs, and brutalist borders.
- [ ] **Phase 2: HUD Header & War Room Hero**
  - Overhaul `Navbar.tsx` with equalizer sound toggle and HUD telemetry.
  - Overhaul `HeroSection.tsx` with asymmetric layout, **Interactive 48h Sprint Simulator widget**, and combat gauges.
- [ ] **Phase 3: Hall of Fame & Projects Overhaul**
  - Update `HackathonCard.tsx` and `HackathonHallOfFame.tsx` with holographic foils and audio celebration.
  - Update `ProjectCard.tsx` and `ProjectGallery.tsx` with deep-dive modal triggers and live demos.
- [ ] **Phase 4: Operative Dossiers & Social Matrix**
  - Update `MemberCard.tsx` and `SquadSection.tsx` to classified operative dossier format.
  - Update `SocialHub.tsx` and `/links/page.tsx` with high-density Bento grid.
- [ ] **Phase 5: Subpages & Verification**
  - Verify `/hackathons`, `/projects`, `/team`, `/links`, `/contact`.
  - Run `npx tsc --noEmit` (0 errors) and `npm run build` (Clean compile).
