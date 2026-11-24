"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles } from "lucide-react";

export function CloudIntroLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isParting, setIsParting] = useState(false);

  const fullText = "HELLO WORLD";

  useEffect(() => {
    // Check if intro has already played in this browser session
    const hasSeenIntro = typeof window !== "undefined" ? sessionStorage.getItem("extokened_intro_played") : null;
    if (hasSeenIntro) {
      return;
    }

    setIsVisible(true);

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // 1. Typewriter animation for "HELLO WORLD"
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);

        // 2. Pause briefly on completed text, then part the clouds
        const partTimeout = setTimeout(() => {
          triggerParting();
        }, 650);

        return () => clearTimeout(partTimeout);
      }
    }, 95);

    // Allow user to skip anytime via Escape or Space
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        triggerParting();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, []);

  const triggerParting = () => {
    setIsParting(true);
    // Mark as played in sessionStorage
    if (typeof window !== "undefined") {
      sessionStorage.setItem("extokened_intro_played", "true");
    }

    // Complete exit and unlock scroll after curtain animation finishes
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 1100);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div
        onClick={triggerParting}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#08090E] cursor-pointer select-none"
        aria-label="Extokened Welcome Intro — Click or press Esc to enter"
      >
        {/* ======================================================== */}
        {/* UPPER CLOUD DECK (Slides up on reveal: "megh sore giye") */}
        {/* ======================================================== */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={isParting ? { y: "-115%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 h-[62vh] pointer-events-none z-10 will-change-transform"
        >
          {/* Deep Twilight Fog Base */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #08090E 0%, #0D101C 45%, rgba(13, 16, 28, 0.95) 75%, transparent 100%)",
            }}
          />

          {/* Upper Billowing Cloud Bank 1 (Lavender Mist) */}
          <div
            className="absolute -top-24 -left-1/4 w-[150%] h-[480px] rounded-[50%] blur-[70px] opacity-60 animate-cloud-drift"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(184, 192, 236, 0.5) 0%, rgba(139, 155, 247, 0.3) 45%, rgba(13, 16, 28, 0.8) 75%, transparent 100%)",
            }}
          />

          {/* Upper Billowing Cloud Bank 2 (Periwinkle & Deep Indigo) */}
          <div
            className="absolute -top-10 -right-1/4 w-[140%] h-[440px] rounded-[50%] blur-[80px] opacity-50 animate-cloud-drift-reverse"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(139, 155, 247, 0.45) 0%, rgba(196, 131, 169, 0.25) 40%, rgba(8, 9, 14, 0.9) 75%, transparent 100%)",
            }}
          />

          {/* Upper Billowing Cloud Wave SVG */}
          <svg
            className="absolute bottom-0 left-0 w-full h-44 text-[#0D101C] fill-current opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </motion.div>

        {/* ========================================================== */}
        {/* LOWER CLOUD DECK (Slides down on reveal: "megh sore giye") */}
        {/* ========================================================== */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={isParting ? { y: "115%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 h-[62vh] pointer-events-none z-10 will-change-transform"
        >
          {/* Lower Twilight Meadow Fog Base */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #08090E 0%, #0D101C 50%, rgba(13, 16, 28, 0.95) 75%, transparent 100%)",
            }}
          />

          {/* Lower Billowing Cloud Bank 1 (Amber & Meadow Mist) */}
          <div
            className="absolute -bottom-24 -right-1/4 w-[150%] h-[480px] rounded-[50%] blur-[80px] opacity-45 animate-cloud-drift"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(255, 200, 87, 0.25) 0%, rgba(139, 155, 247, 0.35) 40%, rgba(8, 9, 14, 0.9) 75%, transparent 100%)",
            }}
          />

          {/* Lower Billowing Cloud Bank 2 (Dusk Lavender) */}
          <div
            className="absolute -bottom-10 -left-1/4 w-[140%] h-[420px] rounded-[50%] blur-[75px] opacity-50 animate-cloud-drift-reverse"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(184, 192, 236, 0.4) 0%, rgba(139, 155, 247, 0.25) 45%, rgba(8, 9, 14, 0.9) 75%, transparent 100%)",
            }}
          />

          {/* Lower Billowing Cloud Wave SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-44 text-[#0D101C] fill-current opacity-90 drop-shadow-[0_-15px_30px_rgba(0,0,0,0.8)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,218.7C672,224,768,192,864,176C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </motion.div>

        {/* Ambient Twinkling Atmosphere in Center */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-[#8B9BF7]/[0.08]" />
          <div className="absolute inset-0 meadow-grid opacity-15" />
        </div>

        {/* ======================================================== */}
        {/* CENTER TYPEWRITER HERO ("HELLO WORLD" in Cloud Shroud) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={
            isParting
              ? { opacity: 0, scale: 1.1, filter: "blur(12px)" }
              : { opacity: 1, scale: 1, filter: "blur(0px)" }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center px-4 max-w-lg mx-auto flex flex-col items-center pointer-events-none"
        >
          {/* Official Emblem */}
          <div className="w-14 h-14 rounded-2xl glass-panel-inset p-2 mb-6 flex items-center justify-center border border-[#8B9BF7]/40 shadow-[0_0_36px_rgba(139,155,247,0.35)] animate-pulse">
            <img
              src="/images/extokened-logo-glow.png"
              alt="Extokened Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(139,155,247,0.6)]"
            />
          </div>

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-[#121626]/80 border border-[#8B9BF7]/30 text-[#B8C0EC] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2FB36A] animate-ping" />
            <span>EXTOKENED // DISPATCH ENGINE</span>
          </div>

          {/* TYPEWRITER TEXT */}
          <div className="relative font-mono font-bold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white drop-shadow-[0_0_24px_rgba(139,155,247,0.45)]">
            <span className="text-[#8B9BF7]">&gt;&nbsp;</span>
            <span className="bg-gradient-to-r from-white via-[#E8EAFA] to-[#B8C0EC] bg-clip-text text-transparent">
              {displayText}
            </span>

            {/* Blinking Terminal Cursor */}
            <span
              className={`inline-block w-[3px] h-9 sm:h-12 ml-1 align-middle bg-[#8B9BF7] shadow-[0_0_12px_rgba(139,155,247,0.9)] ${
                isTypingDone ? "animate-pulse" : "animate-bounce"
              }`}
            />
          </div>

          {/* Status Message below typing */}
          <div className="h-6 mt-4">
            {isTypingDone && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono text-[#BAC0DC] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFC857]" />
                <span>Clearing atmospheric clouds...</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Skip Prompt at Bottom */}
        <div className="absolute bottom-6 inset-x-0 z-20 text-center pointer-events-none">
          <span className="text-[11px] font-mono text-[#727896] bg-[#08090E]/80 px-3 py-1 rounded-full border border-[#1E2337]/60">
            Click anywhere or press <kbd className="text-[#B8C0EC]">ESC</kbd> to enter
          </span>
        </div>
      </div>
    </AnimatePresence>
  );
}
