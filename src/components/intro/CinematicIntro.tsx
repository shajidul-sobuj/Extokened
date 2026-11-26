"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "extokened_intro_seen";

type IntroStep = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * 3D Beveled Dark-Obsidian Glass Rib Stack
 * Replicates glossy Cinema4D/Apple-keynote dark glass slabs with razor-sharp
 * electric sapphire/cobalt + ice-white specular rim lighting.
 */
function GlassRibStack({
  side,
  step,
  isMelting,
}: {
  side: "left" | "right";
  step: IntroStep;
  isMelting: boolean;
}) {
  // Choreographed 3D camera positions per beat (matching the sweeping glass corridor)
  const getPose = () => {
    if (isMelting) {
      return side === "left"
        ? { x: "-48vw", y: "28vh", rotateZ: 28, rotateY: 42, scale: 1.32, opacity: 0 }
        : { x: "48vw", y: "-28vh", rotateZ: 28, rotateY: -42, scale: 1.32, opacity: 0 };
    }

    if (side === "left") {
      switch (step) {
        case 0: // "Building" — sweeping upper-left fin
          return { x: "-30vw", y: "-26vh", rotateZ: -30, rotateY: 28, scale: 1.05, opacity: 0.92 };
        case 1: // "real software is hard" — sliding down-left edge
          return { x: "-32vw", y: "-8vh", rotateZ: -16, rotateY: 24, scale: 1.08, opacity: 0.95 };
        case 2: // "Time to ship it" — banking left
          return { x: "-38vw", y: "6vh", rotateZ: -24, rotateY: 32, scale: 1.02, opacity: 0.9 };
        case 3: // "Meet" — retreats into pitch-black abyss
          return { x: "-52vw", y: "20vh", rotateZ: -10, rotateY: 42, scale: 1.24, opacity: 0.06 };
        case 4: // Logo + Extokened — dramatic bottom-left diagonal corridor
          return { x: "-27vw", y: "25vh", rotateZ: 36, rotateY: 22, scale: 1.12, opacity: 1 };
        case 5: // "We build. We compete." — widens gracefully for crisp legibility
          return { x: "-37vw", y: "30vh", rotateZ: 32, rotateY: 28, scale: 1.15, opacity: 0.44 };
      }
    } else {
      switch (step) {
        case 0: // "Building" — angled top-right cobalt slash
          return { x: "26vw", y: "-30vh", rotateZ: -34, rotateY: -26, scale: 1.06, opacity: 0.96 };
        case 1: // "real software is hard" — upper-right vertical glint
          return { x: "24vw", y: "-28vh", rotateZ: -18, rotateY: -22, scale: 1.04, opacity: 0.92 };
        case 2: // "Time to ship it" — opens right space cleanly
          return { x: "42vw", y: "-34vh", rotateZ: -26, rotateY: -32, scale: 1.0, opacity: 0.35 };
        case 3: // "Meet" — retreats into pitch-black abyss
          return { x: "52vw", y: "-26vh", rotateZ: -12, rotateY: -42, scale: 1.24, opacity: 0.06 };
        case 4: // Logo + Extokened — dramatic top-right diagonal corridor
          return { x: "27vw", y: "-25vh", rotateZ: 36, rotateY: -22, scale: 1.12, opacity: 1 };
        case 5: // "We build. We compete." — widens gracefully for crisp legibility
          return { x: "37vw", y: "-30vh", rotateZ: 32, rotateY: -28, scale: 1.15, opacity: 0.44 };
      }
    }
  };

  const pose = getPose();
  const slabs = [0, 1, 2, 3];

  return (
    <motion.div
      aria-hidden="true"
      initial={
        side === "left"
          ? { x: "-46vw", y: "-36vh", rotateZ: -38, rotateY: 36, scale: 0.95, opacity: 0 }
          : { x: "42vw", y: "-40vh", rotateZ: -40, rotateY: -36, scale: 0.95, opacity: 0 }
      }
      animate={pose}
      transition={{
        duration: isMelting ? 0.9 : step === 3 ? 0.52 : step === 4 ? 0.78 : 0.95,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center will-change-transform"
    >
      {/* Ambient Sapphire Spill Behind the Glass Stack */}
      <div
        className="absolute w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.32) 0%, rgba(29, 78, 216, 0.1) 48%, transparent 72%)",
        }}
      />

      {/* 4 Stacked Concentric Beveled Obsidian Glass Plates */}
      <div className="relative w-[340px] h-[440px] sm:w-[490px] sm:h-[620px] md:w-[580px] md:h-[720px]">
        {slabs.map((idx) => {
          const offset = idx * 34;
          const inset = idx * 14;
          const isOuter = idx === 0;
          const isInner = idx === slabs.length - 1;

          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                inset: `${inset}px`,
                transform:
                  side === "left"
                    ? `translate3d(${-offset * 0.68}px, ${offset * 0.56}px, ${-idx * 24}px)`
                    : `translate3d(${offset * 0.68}px, ${-offset * 0.56}px, ${-idx * 24}px)`,
                borderRadius: `${66 - idx * 8}px`,
                background:
                  side === "left"
                    ? "linear-gradient(135deg, #061028 0%, #020510 26%, #000000 68%, #020818 100%)"
                    : "linear-gradient(315deg, #061028 0%, #020510 26%, #000000 68%, #020818 100%)",
                boxShadow:
                  side === "left"
                    ? [
                        // Razor-sharp specular highlight on top/right facing edge
                        `inset -1.5px 1.5px 0px rgba(226, 240, 255, ${isOuter ? 0.92 : 0.72 - idx * 0.12})`,
                        `inset -4px 4px 10px rgba(59, 130, 246, ${isOuter ? 0.72 : 0.52 - idx * 0.08})`,
                        `inset 1px -1px 0px rgba(56, 130, 246, ${isInner ? 0.28 : 0.16})`,
                        `inset 0 0 36px rgba(15, 40, 110, 0.34)`,
                        // Deep obsidian shadow separating each beveled plate
                        `-18px 22px 46px rgba(0, 0, 0, 0.96)`,
                        `0 0 26px rgba(37, 99, 235, ${isOuter ? 0.34 : 0.16})`,
                      ].join(", ")
                    : [
                        // Razor-sharp specular highlight on bottom/left facing edge
                        `inset 1.5px -1.5px 0px rgba(226, 240, 255, ${isOuter ? 0.92 : 0.72 - idx * 0.12})`,
                        `inset 4px -4px 10px rgba(59, 130, 246, ${isOuter ? 0.72 : 0.52 - idx * 0.08})`,
                        `inset -1px 1px 0px rgba(56, 130, 246, ${isInner ? 0.28 : 0.16})`,
                        `inset 0 0 36px rgba(15, 40, 110, 0.34)`,
                        `18px -22px 46px rgba(0, 0, 0, 0.96)`,
                        `0 0 26px rgba(37, 99, 235, ${isOuter ? 0.34 : 0.16})`,
                      ].join(", "),
                border: `1px solid rgba(96, 165, 250, ${isOuter ? 0.48 : 0.32 - idx * 0.05})`,
              }}
            >
              {/* Glossy Curved Bevel Rim Streak (mimics high-IOR 3D glass refraction) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  background:
                    side === "left"
                      ? "linear-gradient(52deg, transparent 42%, rgba(37, 99, 235, 0.18) 78%, rgba(191, 219, 254, 0.32) 95%, rgba(255, 255, 255, 0.5) 100%)"
                      : "linear-gradient(232deg, transparent 42%, rgba(37, 99, 235, 0.18) 78%, rgba(191, 219, 254, 0.32) 95%, rgba(255, 255, 255, 0.5) 100%)",
                  maskImage:
                    "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                  WebkitMaskImage:
                    "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                  padding: "2px",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  opacity: isOuter ? 1 : 0.75,
                }}
              />

              {/* Subtle Soft Specular Reflection Sheen Across Corner Curve */}
              {isOuter && (
                <motion.div
                  animate={{
                    opacity: [0.65, 1, 0.7],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: "5px",
                    borderRadius: "inherit",
                    background:
                      side === "left"
                        ? "radial-gradient(ellipse 72% 46% at 88% 10%, rgba(191, 219, 254, 0.34) 0%, rgba(59, 130, 246, 0.14) 42%, transparent 74%)"
                        : "radial-gradient(ellipse 72% 46% at 12% 90%, rgba(191, 219, 254, 0.34) 0%, rgba(59, 130, 246, 0.14) 42%, transparent 74%)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/**
 * Word-by-word kinetic motion-blur snap (Apple / Linear / Synaps style)
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
        return "text-[#7A90FF] drop-shadow-[0_0_24px_rgba(112,136,255,0.4)]";
      case "cobalt":
        return "text-[#3B9BFF] drop-shadow-[0_0_28px_rgba(59,155,255,0.48)]";
      case "sheen":
        return "bg-gradient-to-r from-[#FFFFFF] via-[#9EC5FF] to-[#4E96FF] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(78,150,255,0.35)]";
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
          initial={{ opacity: 0, x: 14, scale: 0.94, filter: "blur(14px)" }}
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

    // Mark seen immediately so a refresh in the same tab never replays it
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

    // Beat Choreography (~8.15s total with generous hold on "We build. We compete." before melt)
    // 0.00s - 1.05s: "Building"
    // 1.05s - 2.35s: "real software is hard"
    // 2.35s - 3.45s: "Time to ship it"
    // 3.45s - 4.25s: "Meet" (metallic zoom-through)
    // 4.25s - 4.82s: Extokened Logo Icon Bloom between 3D glass corridor
    // 4.82s - 6.30s: Logo glides left + "Extokened" kinetic letter assembly
    // 6.30s - 8.20s: "We build. We compete." (clearly readable hold ~1.9s)
    // 8.20s -> melt: Smooth 3D curtain split + dissolve into live site
    const t1 = window.setTimeout(() => setStep(1), 1050);
    const t2 = window.setTimeout(() => setStep(2), 2350);
    const t3 = window.setTimeout(() => setStep(3), 3450);
    const t4 = window.setTimeout(() => setStep(4), 4250);
    const t4Expand = window.setTimeout(() => setLogoExpanded(true), 4820);
    const t5 = window.setTimeout(() => setStep(5), 6300);
    const tMelt = window.setTimeout(() => startMelt(), 8200);

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
      style={{ perspective: "1400px" }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#000000] select-none ${
        isMelting ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Subtle Deep Cobalt Atmospheric Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 58% at 50% 50%, rgba(16, 36, 92, 0.18) 0%, rgba(3, 6, 16, 0.55) 56%, rgba(0, 0, 0, 0.96) 100%)",
        }}
      />

      {/* Signature 3D Sweeping Dark-Glass Beveled Ribs (Left & Right Clusters) */}
      <GlassRibStack side="left" step={step} isMelting={isMelting} />
      <GlassRibStack side="right" step={step} isMelting={isMelting} />

      {/* Center Kinetic Typography & Brand Assembly Stage */}
      <div className="relative z-10 max-w-5xl w-full px-6 text-center min-h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* Beat 0: "Building" */}
          {step === 0 && (
            <motion.div
              key="beat-0"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display font-medium text-4xl sm:text-6xl md:text-[4.25rem] tracking-[-0.04em] bg-gradient-to-b from-white via-[#F1F5FF] to-[#BCC8E8] bg-clip-text text-transparent">
                Building
              </p>
            </motion.div>
          )}

          {/* Beat 1: "real software is hard" */}
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
                  { text: "real", tone: "periwinkle" },
                  { text: "software", tone: "white" },
                  { text: "is", tone: "white" },
                  { text: "hard", tone: "cobalt" },
                ]}
              />
            </motion.div>
          )}

          {/* Beat 2: "Time to ship it" */}
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
                stagger={0.085}
                words={[
                  { text: "Time", tone: "white" },
                  { text: "to", tone: "white" },
                  { text: "ship", tone: "cobalt" },
                  { text: "it", tone: "white" },
                ]}
              />
            </motion.div>
          )}

          {/* Beat 3: Giant Metallic "Meet" Camera Zoom-Through */}
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
              {/* Subtle Blue Luminous Core Glow Behind Brand Lockup */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.85, scale: 1.1 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="pointer-events-none absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full blur-[85px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(96, 165, 250, 0.34) 0%, rgba(37, 99, 235, 0.12) 52%, transparent 75%)",
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

          {/* Beat 5: "We build. We compete." — Generous Hold Before Smooth Melt */}
          {step === 5 && (
            <motion.div
              key="beat-5"
              initial={{ opacity: 1, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1.025 }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(18px)" }}
              transition={{ duration: 1.85, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 8.15, ease: "linear" }}
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
