# ⚡ Extokened Redesign — Execution Roadmap

Tracking the radical visual and architectural overhaul of Extokened.

---

## Phase 1: Core System & Audio Synthesis
- [ ] Create `src/lib/sound.ts` (Web Audio API sound engine with hover, click, victory, and glitch sound effects + mute toggle state).
- [ ] Create `src/components/ui/GlitchText.tsx` (Matrix text decryption effect).
- [ ] Create `src/components/ui/HoloCard.tsx` (3D perspective mouse-tracking card with holographic foil sheen).
- [ ] Update `src/app/globals.css` (Cyber-brutalist borders, HUD crosshairs, chamfer clips, scanlines).

---

## Phase 2: Navigation & Hero War Room
- [ ] Redesign `Navbar`: HUD telemetry bar with live audio equalizer toggle and shortcut hints.
- [ ] Redesign `HeroSection`: Asymmetric split-screen layout with **Interactive 48h Sprint Simulator widget**, real-time countdown, and combat telemetry strip.

---

## Phase 3: Hall of Fame & Projects Showcase Overhaul
- [ ] Redesign `HackathonCard` & `HackathonHallOfFame`: Holographic gold/emerald metallic cards with celebration audio and telemetry.
- [ ] Redesign `ProjectCard` & `ProjectGallery`: Interactive architecture inspection drawers and live demo launchpad.

---

## Phase 4: Operator Dossiers & Social Matrix
- [ ] Redesign `MemberCard` & `SquadSection`: Classified operative dossiers with callsigns, clearance badges, and radar stat meters.
- [ ] Redesign `SocialHub` & `/links`: Cyberpunk Bento matrix with live feed aesthetics and direct Facebook, LinkedIn, GitHub links.

---

## Phase 5: Verification & Production Build
- [ ] Run `npx tsc --noEmit` to verify 0 type errors.
- [ ] Run `npm run build` to verify clean static generation.
- [ ] Test audio engine and 3D tilts across devices.
