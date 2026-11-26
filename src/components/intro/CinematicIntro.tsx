"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "extokened_intro_seen";

type IntroStep = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Sculptural 3D Sweeping Glass Blades (Beats 0 -> 2, matching 00:00 - 00:03)
 * Pure curved obsidian-glass edge reflections that fade seamlessly into #000000
 * with ZERO rectangular box outlines.
 */
function TopSweepBlades({ step, isMelting }: { step: IntroStep; isMelting: boolean }) {
  const isVisible = !isMelting && step <= 2;

  const getPose = () => {
    if (!isVisible) {
      return { x: "-48vw", y: "-14vh", rotate: -24, scale: 1.12, opacity: 0 };
    }
    switch (step) {
      case 0: // 00:00 — Dramatic angled blades sweeping across top-left & upper-right
        return { x: "0vw", y: "-4vh", rotate: 0, scale: 1, opacity: 1 };
      case 1: // 00:01-00:02 — Glides into vertical-slanted cobalt streaks along upper-left & top-center
        return { x: "-12vw", y: "2vh", rotate: -14, scale: 1.06, opacity: 0.96 };
      case 2: // 00:03 — Banks cleanly to the far-left edge, leaving 80%+ pitch black
        return { x: "-38vw", y: "8vh", rotate: -20, scale: 1.02, opacity: 0.92 };
      default:
        return { x: "-52vw", y: "-10vh", rotate: -26, scale: 1.1, opacity: 0 };
    }
  };

  return (
    <motion.div
      aria-hidden="true"
      initial={{ x: "14vw", y: "-14vh", rotate: 8, scale: 0.94, opacity: 0 }}
      animate={getPose()}
      transition={{
        duration: step === 3 ? 0.42 : 0.92,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden will-change-transform"
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full max-w-[1680px]"
      >
        <defs>
          {/* Wide volumetric electric sapphire glow */}
          <linearGradient id="bladeBloomA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
            <stop offset="28%" stopColor="#2563EB" stopOpacity="0.68" />
            <stop offset="56%" stopColor="#60A5FA" stopOpacity="0.88" />
            <stop offset="78%" stopColor="#1E40AF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Crisp metallic cobalt rim */}
          <linearGradient id="bladeRimA" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="25%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="52%" stopColor="#DBEAFE" stopOpacity="1" />
            <stop offset="68%" stopColor="#60A5FA" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </linearGradient>

          {/* Razor-sharp white-hot specular core reflection */}
          <linearGradient id="bladeSpecA" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="38%" stopColor="#BFDBFE" stopOpacity="0.55" />
            <stop offset="52%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="64%" stopColor="#93C5FD" stopOpacity="0.55" />
            <stop offset="84%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Secondary distant soft-focus cobalt reflection */}
          <linearGradient id="bladeSoftB" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
            <stop offset="42%" stopColor="#3B82F6" stopOpacity="0.72" />
            <stop offset="66%" stopColor="#93C5FD" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
          </linearGradient>

          {/* Obsidian dark glass body fill */}
          <linearGradient id="obsidianFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#040C24" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#01030A" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          <filter id="glowWide" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="glowSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="dofBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* Left Sweeping Sculptural Glass Fin (curved edge reflection from top-left) */}
        <g>
          <path
            d="M 270 -70 L 82 545 C 62 612 96 650 165 628 L 285 575 L 440 -120 Z"
            fill="url(#obsidianFill)"
          />
          <path
            d="M 272 -70 L 84 548 C 66 606 94 642 152 628"
            stroke="url(#bladeBloomA)"
            strokeWidth="34"
            strokeLinecap="round"
            filter="url(#glowWide)"
          />
          <path
            d="M 272 -70 L 84 548 C 66 606 94 642 152 628"
            stroke="url(#bladeRimA)"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#glowSoft)"
          />
          <path
            d="M 254 -15 L 86 544 C 70 596 92 630 138 622"
            stroke="url(#bladeSpecA)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>

        {/* Center-Top Vertical Sculptural Glass Edge (glints strongly at 00:00-00:02) */}
        <g>
          <path
            d="M 808 -90 L 716 142 C 696 196 732 232 786 206 L 948 118 L 1060 -130 Z"
            fill="url(#obsidianFill)"
          />
          <path
            d="M 812 -85 L 718 144 C 700 192 732 224 780 202 L 882 150"
            stroke="url(#bladeBloomA)"
            strokeWidth="38"
            strokeLinecap="round"
            filter="url(#glowWide)"
          />
          <path
            d="M 812 -85 L 718 144 C 700 192 732 224 780 202 L 860 162"
            stroke="url(#bladeRimA)"
            strokeWidth="8.5"
            strokeLinecap="round"
            filter="url(#glowSoft)"
          />
          <path
            d="M 792 -35 L 720 144 C 705 186 730 212 772 195"
            stroke="url(#bladeSpecA)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* Far-Right Out-of-Focus Slanted Cobalt Reflection Streaks (depth of field) */}
        <g filter="url(#dofBlur)" opacity="0.82">
          <path
            d="M 1210 -60 L 910 278"
            stroke="url(#bladeSoftB)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M 1365 20 L 1062 342"
            stroke="url(#bladeSoftB)"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <path
            d="M 1212 -52 L 948 240"
            stroke="url(#bladeSpecA)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
    </motion.div>
  );
}

/**
 * Symmetric Opposing Curved Bevel Glass Corridor (Beat 4 ONLY — matching 00:05-00:06)
 * Nested concentric obsidian-glass elbow ridges framing the Extokened logo lockup
 * on a diagonal corridor, with pure pitch-black negative space and zero boxy borders.
 */
function BrandCorridorWaves({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Top-Right Opposing Concentric Beveled Glass Wave */}
      <motion.div
        initial={{ x: "26vw", y: "-26vh", scale: 0.9, opacity: 0 }}
        animate={
          active
            ? { x: "0vw", y: "0vh", scale: 1, opacity: 1 }
            : { x: "32vw", y: "-32vh", scale: 1.12, opacity: 0 }
        }
        transition={{
          duration: active ? 0.78 : 0.48,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="waveBloomTR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
              <stop offset="30%" stopColor="#2563EB" stopOpacity="0.82" />
              <stop offset="52%" stopColor="#93C5FD" stopOpacity="0.95" />
              <stop offset="76%" stopColor="#1E40AF" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveSpecTR" x1="15%" y1="5%" x2="88%" y2="95%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="36%" stopColor="#93C5FD" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="65%" stopColor="#60A5FA" stopOpacity="0.65" />
              <stop offset="86%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveBodyTR" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#051232" stopOpacity="0.92" />
              <stop offset="32%" stopColor="#01040D" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
            <filter id="corridorBloom" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="corridorCrisp" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* 3 Nested Concentric Sculptural Elbow Waves (Top-Right Quadrant) */}
          {[0, 1, 2].map((idx) => {
            const shiftX = idx * 82;
            const shiftY = -idx * 72;
            const opacityScale = idx === 0 ? 1 : idx === 1 ? 0.78 : 0.56;
            const d = `M ${745 + shiftX} ${-110 + shiftY} L ${955 + shiftX} ${215 + shiftY} C ${995 + shiftX} ${278 + shiftY} ${1058 + shiftX} ${325 + shiftY} ${1134 + shiftX} ${362 + shiftY} L ${1560 + shiftX} ${568 + shiftY}`;
            const bodyD = `${d} L 1750 -200 Z`;

            return (
              <g key={`tr-${idx}`} opacity={opacityScale}>
                <path d={bodyD} fill="url(#waveBodyTR)" />
                <path
                  d={d}
                  stroke="url(#waveBloomTR)"
                  strokeWidth={idx === 0 ? 32 : 24}
                  strokeLinecap="round"
                  filter="url(#corridorBloom)"
                />
                <path
                  d={d}
                  stroke="url(#waveBloomTR)"
                  strokeWidth={idx === 0 ? 7.5 : 5.5}
                  strokeLinecap="round"
                  filter="url(#corridorCrisp)"
                />
                <path
                  d={d}
                  stroke="url(#waveSpecTR)"
                  strokeWidth={idx === 0 ? 2.6 : 1.8}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Bottom-Left Opposing Concentric Beveled Glass Wave */}
      <motion.div
        initial={{ x: "-26vw", y: "26vh", scale: 0.9, opacity: 0 }}
        animate={
          active
            ? { x: "0vw", y: "0vh", scale: 1, opacity: 1 }
            : { x: "-32vw", y: "32vh", scale: 1.12, opacity: 0 }
        }
        transition={{
          duration: active ? 0.78 : 0.48,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="waveBloomBL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="24%" stopColor="#1E40AF" stopOpacity="0.62" />
              <stop offset="48%" stopColor="#93C5FD" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveSpecBL" x1="12%" y1="5%" x2="85%" y2="95%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="34%" stopColor="#60A5FA" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="66%" stopColor="#93C5FD" stopOpacity="0.7" />
              <stop offset="88%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveBodyBL" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#051232" stopOpacity="0.92" />
              <stop offset="32%" stopColor="#01040D" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
            <filter id="corridorBloomBL" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="corridorCrispBL" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* 3 Nested Concentric Sculptural Elbow Waves (Bottom-Left Quadrant) */}
          {[0, 1, 2].map((idx) => {
            const shiftX = -idx * 82;
            const shiftY = idx * 72;
            const opacityScale = idx === 0 ? 1 : idx === 1 ? 0.78 : 0.56;
            const d = `M ${-120 + shiftX} ${332 + shiftY} L ${306 + shiftX} ${538 + shiftY} C ${382 + shiftX} ${575 + shiftY} ${445 + shiftX} ${622 + shiftY} ${485 + shiftX} ${685 + shiftY} L ${695 + shiftX} ${1010 + shiftY}`;
            const bodyD = `${d} L -310 1100 Z`;

            return (
              <g key={`bl-${idx}`} opacity={opacityScale}>
                <path d={bodyD} fill="url(#waveBodyBL)" />
                <path
                  d={d}
                  stroke="url(#waveBloomBL)"
                  strokeWidth={idx === 0 ? 32 : 24}
                  strokeLinecap="round"
                  filter="url(#corridorBloomBL)"
                />
                <path
                  d={d}
                  stroke="url(#waveBloomBL)"
                  strokeWidth={idx === 0 ? 7.5 : 5.5}
                  strokeLinecap="round"
                  filter="url(#corridorCrispBL)"
                />
                <path
                  d={d}
                  stroke="url(#waveSpecBL)"
                  strokeWidth={idx === 0 ? 2.6 : 1.8}
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Word-by-word kinetic motion-blur snap (matching 00:01 - 00:03 & 00:07)
 */
function KineticLine({
  words,
  stagger = 0.11,
  className = "",
}: {
  words: Array<{ text: string; tone?: "white" | "periwinkle" | "cobalt" | "sheen" }>;
  stagger?: number;
  className?: string;
}) {
  const toneClass = (tone?: "white" | "periwinkle" | "cobalt" | "sheen") => {
    switch (tone) {
      case "periwinkle":
        return "text-[#7A90FF] drop-shadow-[0_0_24px_rgba(112,136,255,0.42)]";
      case "cobalt":
        return "text-[#3B9BFF] drop-shadow-[0_0_28px_rgba(59,155,255,0.5)]";
      case "sheen":
        return "bg-gradient-to-r from-[#FFFFFF] via-[#A9CCFF] to-[#4E96FF] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(78,150,255,0.36)]";
      default:
        return "text-[#F8FAFF]";
    }
  };

  return (
    <span
      className={`inline-flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-1 font-display font-medium tracking-[-0.038em] leading-[1.08] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word.text}-${index}`}
          initial={{ opacity: 0, x: 16, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            delay: index * stagger,
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block will-change-transform ${toneClass(word.tone)}`}
        >
          {word.text}
        </motion.span>
      ))}
    </span>
  );
}

const BRAND_LETTERS = [
  { char: "E", y: -26, x: -10, rotate: -6 },
  { char: "x", y: 24, x: 4, rotate: 5 },
  { char: "t", y: -20, x: -4, rotate: -4 },
  { char: "o", y: 30, x: 6, rotate: 6 },
  { char: "k", y: -24, x: -5, rotate: -5 },
  { char: "e", y: 26, x: 4, rotate: 4 },
  { char: "n", y: -18, x: -4, rotate: -3 },
  { char: "e", y: 28, x: 6, rotate: 5 },
  { char: "d", y: -16, x: 16, rotate: -4 },
];

export function CinematicIntro() {
  const [phase, setPhase] = useState<"idle" | "playing" | "melting" | "done">("idle");
  const [step, setStep] = useState<IntroStep>(0);
  const [logoExpanded, setLogoExpanded] = useState(false);

  const startMelt = useCallback(() => {
    setPhase((current) => {
      if (current === "melting" || current === "done") return current;
      document.documentElement.classList.remove("intro-pending");
      document.body.style.overflow = "";
      return "melting";
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen || prefersReducedMotion) {
      document.documentElement.classList.remove("intro-pending");
      setPhase("done");
      return;
    }

    // Mark seen immediately so refreshing in the same tab never replays it
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage restrictions
    }

    document.body.style.overflow = "hidden";
    setPhase("playing");

    // Release pre-hydration ::before curtain cleanly once overlay is active
    const clearCurtainTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-pending");
    }, 60);

    // Hackathon-Team Kinetic Choreography (~8.2s total before smooth melt-away)
    // 0.00s - 1.05s: "48 hours." (top sweeping sculptural cobalt blades)
    // 1.05s - 2.35s: "High stakes. Real code." (vertical-slanted cobalt streaks)
    // 2.35s - 3.45s: "Built under pressure" (far-left edge sweep, wide pure black)
    // 3.45s - 4.25s: "Meet" (100% pure black + giant metallic zoom-through)
    // 4.25s - 4.82s: Extokened Logo Icon blooms in symmetric curved glass corridor
    // 4.82s - 6.30s: Logo glides left + bouncy "Extokened" letter assembly
    // 6.30s - 8.25s: "We build. We compete." (pure black stage, ~1.95s readable hold)
    // 8.25s -> melt: Smooth melt-away dissolve into the live website
    const t1 = window.setTimeout(() => setStep(1), 1050);
    const t2 = window.setTimeout(() => setStep(2), 2350);
    const t3 = window.setTimeout(() => setStep(3), 3450);
    const t4 = window.setTimeout(() => setStep(4), 4250);
    const t4Expand = window.setTimeout(() => setLogoExpanded(true), 4820);
    const t5 = window.setTimeout(() => setStep(5), 6300);
    const tMelt = window.setTimeout(() => startMelt(), 8250);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") startMelt();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(clearCurtainTimer);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      window.clearTimeout(t4Expand);
      window.clearTimeout(t5);
      window.clearTimeout(tMelt);
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("intro-pending");
      document.body.style.overflow = "";
    };
  }, [startMelt]);

  // Unmount cleanly after melt finishes
  useEffect(() => {
    if (phase !== "melting") return;
    const finishTimer = window.setTimeout(() => setPhase("done"), 960);
    return () => window.clearTimeout(finishTimer);
  }, [phase]);

  if (phase === "idle" || phase === "done") return null;

  const isMelting = phase === "melting";

  return (
    <motion.div
      role="dialog"
      aria-label="Extokened Cinematic Intro"
      aria-modal="true"
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={
        isMelting
          ? {
              opacity: 0,
              scale: 1.07,
              filter: "blur(24px)",
            }
          : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      transition={{
        duration: 0.92,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#000000] select-none ${
        isMelting ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Beats 0-2: Sculptural Top-Sweeping Glass Edge Reflections (NO blue boxes) */}
      <TopSweepBlades step={step} isMelting={isMelting} />

      {/* Beat 4 ONLY: Symmetric Opposing Curved Bevel Corridor framing Extokened */}
      <BrandCorridorWaves active={!isMelting && step === 4} />

      {/* Center Kinetic Typography & Brand Assembly Stage */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center min-h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* Beat 0: "48 hours." */}
          {step === 0 && (
            <motion.div
              key="beat-0"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display font-medium text-4xl sm:text-6xl md:text-[4.25rem] tracking-[-0.04em] bg-gradient-to-b from-white via-[#F1F5FF] to-[#BCC8E8] bg-clip-text text-transparent">
                48 hours.
              </p>
            </motion.div>
          )}

          {/* Beat 1: "High stakes. Real code." */}
          {step === 1 && (
            <motion.div
              key="beat-1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.06, filter: "blur(14px)" }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-[3.85rem]"
            >
              <KineticLine
                stagger={0.11}
                words={[
                  { text: "High", tone: "periwinkle" },
                  { text: "stakes.", tone: "white" },
                  { text: "Real", tone: "white" },
                  { text: "code.", tone: "cobalt" },
                ]}
              />
            </motion.div>
          )}

          {/* Beat 2: "Built under pressure" */}
          {step === 2 && (
            <motion.div
              key="beat-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-[3.85rem]"
            >
              <KineticLine
                stagger={0.095}
                words={[
                  { text: "Built", tone: "white" },
                  { text: "under", tone: "white" },
                  { text: "pressure", tone: "cobalt" },
                ]}
              />
            </motion.div>
          )}

          {/* Beat 3: Pure Black + Giant Metallic "Meet" Zoom-Through */}
          {step === 3 && (
            <motion.div
              key="beat-3"
              initial={{ opacity: 0, scale: 0.78, filter: "blur(16px)" }}
              animate={{ opacity: 1, scale: 1.04, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.48, filter: "blur(20px)" }}
              transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display font-semibold text-7xl sm:text-8xl md:text-[7.5rem] tracking-[-0.045em] leading-none bg-gradient-to-b from-white via-[#E8EEFF] to-[#848EA6] bg-clip-text text-transparent">
                Meet
              </p>
            </motion.div>
          )}

          {/* Beat 4: Centered Logo Bloom -> Bouncy Kinetic "Extokened" Assembly */}
          {step === 4 && (
            <motion.div
              key="beat-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Soft Blue Luminous Core Glow Behind Brand Lockup */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.85, scale: 1.1 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="pointer-events-none absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-[85px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(37, 99, 235, 0.1) 52%, transparent 75%)",
                }}
              />

              <div className="relative z-10 flex items-center justify-center">
                {/* Extokened Signature Emblem */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.45, filter: "blur(14px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center"
                >
                  <img
                    src="/images/extokened-logo-glow.png"
                    alt="Extokened"
                    className="w-full h-full object-contain drop-shadow-[0_0_26px_rgba(147,197,253,0.7)]"
                  />
                </motion.div>

                {/* Bouncy Letter-by-Letter "Extokened" Assembly */}
                {logoExpanded && (
                  <motion.div
                    initial={{ width: 0, marginLeft: 0 }}
                    animate={{ width: "auto", marginLeft: 14 }}
                    transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-visible flex items-baseline font-display font-semibold text-4xl sm:text-6xl md:text-[4.5rem] tracking-[-0.04em] text-white whitespace-nowrap"
                  >
                    {BRAND_LETTERS.map((item, i) => (
                      <motion.span
                        key={`${item.char}-${i}`}
                        initial={{
                          opacity: 0,
                          y: item.y,
                          x: item.x,
                          rotate: item.rotate,
                          scale: 0.72,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          x: 0,
                          rotate: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          delay: i * 0.038,
                          type: "spring",
                          stiffness: 360,
                          damping: 22,
                          mass: 0.75,
                        }}
                        className="inline-block will-change-transform bg-gradient-to-b from-white via-[#F4F7FF] to-[#C8D6FF] bg-clip-text text-transparent"
                      >
                        {item.char}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Beat 5: Pure Black Stage + "We build. We compete." (Generous Hold Before Melt) */}
          {step === 5 && (
            <motion.div
              key="beat-5"
              initial={{ opacity: 1, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1.025 }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(18px)" }}
              transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-[3.9rem]"
            >
              <KineticLine
                stagger={0.13}
                words={[
                  { text: "We", tone: "white" },
                  { text: "build.", tone: "sheen" },
                  { text: "We", tone: "white" },
                  { text: "compete.", tone: "cobalt" },
                ]}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Hairline Sapphire Progress Track */}
      <div className="absolute bottom-9 inset-x-0 flex items-center justify-center px-6">
        <div className="w-36 sm:w-44 h-[1.5px] rounded-full bg-white/[0.1] overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 8.2, ease: "linear" }}
            style={{ transformOrigin: "0% 50%" }}
            className="w-full h-full bg-gradient-to-r from-[#2563EB] via-[#93C5FD] to-[#FFFFFF]"
          />
        </div>
      </div>

      {/* Discreet Skip Action */}
      <button
        type="button"
        onClick={startMelt}
        className="absolute bottom-6 right-6 sm:right-8 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7D8AB0] hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/[0.06] cursor-pointer"
      >
        Skip →
      </button>
    </motion.div>
  );
}
