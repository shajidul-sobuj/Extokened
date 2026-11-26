"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "extokened_intro_seen";

export function CinematicIntro() {
  const [phase, setPhase] = useState<"idle" | "playing" | "melting" | "done">("idle");
  const [step, setStep] = useState<0 | 1 | 2>(0);

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

    // Mark seen immediately so a mid-intro refresh never replays it
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage quota / private-mode restrictions
    }

    // Take over seamlessly from the pre-hydration curtain and lock scroll briefly
    document.body.style.overflow = "hidden";
    setPhase("playing");

    // Release the pre-hydration ::before curtain once Framer overlay is mounted
    const clearCurtainTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-pending");
    }, 60);

    // Beat choreography (~3.5s total before smooth melt-away)
    const beat1Timer = window.setTimeout(() => setStep(1), 1080);
    const beat2Timer = window.setTimeout(() => setStep(2), 2320);
    const meltTimer = window.setTimeout(() => startMelt(), 3480);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") startMelt();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(clearCurtainTimer);
      window.clearTimeout(beat1Timer);
      window.clearTimeout(beat2Timer);
      window.clearTimeout(meltTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("intro-pending");
      document.body.style.overflow = "";
    };
  }, [startMelt]);

  // Complete unmount right after melt-away animation finishes
  useEffect(() => {
    if (phase !== "melting") return;
    const finishTimer = window.setTimeout(() => setPhase("done"), 920);
    return () => window.clearTimeout(finishTimer);
  }, [phase]);

  if (phase === "idle" || phase === "done") return null;

  const isMelting = phase === "melting";

  return (
    <motion.div
      role="dialog"
      aria-label="Welcome to Extokened"
      aria-modal="true"
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={
        isMelting
          ? {
              opacity: 0,
              scale: 1.07,
              filter: "blur(22px)",
            }
          : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      transition={{
        duration: 0.88,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#07080D] select-none ${
        isMelting ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Subtle Twilight Ambient Auras inside the Intro Veil */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.42, 0.62, 0.42],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] max-w-[130vw] h-[380px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 155, 247, 0.24) 0%, rgba(165, 178, 255, 0.08) 50%, transparent 76%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 w-[560px] max-w-[120vw] h-[300px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 196, 81, 0.16) 0%, rgba(139, 155, 247, 0.08) 52%, transparent 78%)",
        }}
      />

      {/* Center Sequenced Editorial Beats */}
      <div className="relative z-10 max-w-4xl w-full px-6 text-center min-h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="beat-0"
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(10px)" }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <p className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl tracking-[-0.04em] bg-gradient-to-b from-white via-[#EEF2FF] to-[#B8C4F5] bg-clip-text text-transparent">
                Hello, world.
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="beat-1"
              initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(12px)" }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.06] border border-white/[0.16] p-2.5 flex items-center justify-center shadow-[0_0_32px_rgba(139,155,247,0.3)]"
              >
                <img
                  src="/images/extokened-logo-glow.png"
                  alt="Extokened"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <p className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl tracking-[-0.04em] text-white leading-tight">
                <span className="bg-gradient-to-b from-white via-[#F0F4FF] to-[#C6D0F8] bg-clip-text text-transparent">
                  Welcome to{" "}
                </span>
                <span className="font-hero-serif text-[1.18em] bg-gradient-to-r from-[#AEBCFF] via-[#F4F6FF] to-[#F7CA63] bg-clip-text text-transparent pr-1">
                  Extokened.
                </span>
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="beat-2"
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(12px)" }}
              transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 font-display font-semibold text-2xl sm:text-4xl md:text-5xl tracking-[-0.035em]"
            >
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04, duration: 0.35 }}
                className="text-white"
              >
                We build.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.35 }}
                className="text-[#CBD4FA]"
              >
                We compete.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="font-hero-serif text-[1.16em] bg-gradient-to-r from-[#AEBCFF] via-[#F4F6FF] to-[#F7CA63] bg-clip-text text-transparent"
              >
                We ship.
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Subtle Hairline Progress Track */}
      <div className="absolute bottom-10 inset-x-0 flex items-center justify-center px-6">
        <div className="w-36 sm:w-44 h-[1.5px] rounded-full bg-white/[0.1] overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.45, ease: "linear" }}
            style={{ transformOrigin: "0% 50%" }}
            className="w-full h-full bg-gradient-to-r from-[#8B9BF7] via-[#E4E9FF] to-[#F5C451]"
          />
        </div>
      </div>

      {/* Discreet Skip Action */}
      <button
        type="button"
        onClick={startMelt}
        className="absolute bottom-7 right-6 sm:right-8 text-[11px] font-mono uppercase tracking-[0.18em] text-[#8F99B8] hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/[0.06] cursor-pointer"
      >
        Skip →
      </button>
    </motion.div>
  );
}
