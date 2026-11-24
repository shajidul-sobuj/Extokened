"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export function CloudIntroLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE");
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if intro has already been seen in this session
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("extokened_welcome_seen") : null;
    if (hasSeen) {
      return;
    }

    setIsVisible(true);
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0% to 100%
    const startTime = Date.now();
    const duration = 1400; // 1.4 seconds smooth sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusText("ESTABLISHING ENVIRONMENT");
      } else if (rawProgress < 75) {
        setStatusText("LOADING TELEMETRY & WORK");
      } else if (rawProgress < 100) {
        setStatusText("CONNECTING TO DHAKA SQUAD");
      } else {
        clearInterval(interval);
        setStatusText("ALL SYSTEMS OPERATIONAL");
        setIsReady(true);

        // Hold completed state briefly, then trigger cinematic exit
        setTimeout(() => {
          triggerExit();
        }, 400);
      }
    }, 28);

    // Keyboard skip handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        triggerExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, []);

  const triggerExit = () => {
    setIsExiting(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("extokened_welcome_seen", "true");
    }

    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 750);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="welcome-loader"
        initial={{ opacity: 1 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 1.05, filter: "blur(20px)" }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        onClick={triggerExit}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#08090E] select-none cursor-pointer overflow-hidden"
        aria-label="Welcome to Extokened — Click anywhere or press ESC to enter"
      >
        {/* Background Atmospheric Glows (Smooth, No Harsh Wave Cuts) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Central Blue-Hour Meadow Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] bg-[#8B9BF7]/[0.10] animate-pulse" />
          
          {/* Soft Amber Accent in Lower Corner */}
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] rounded-full blur-[150px] bg-[#FFC857]/[0.04]" />
          
          {/* Architectural Twilight Grid */}
          <div className="absolute inset-0 meadow-grid opacity-20" />
        </div>

        {/* Top Header Row */}
        <div className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-mono text-[#727896]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2FB36A] animate-ping" />
            <span className="text-[#B8C0EC] font-semibold tracking-wider">EXTOKENED // SQUAD OS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#8E96B8]">
            <span>UTC+6 DHAKA</span>
            <span>•</span>
            <span>18 COMPETITIONS</span>
          </div>
        </div>

        {/* Central Welcome Card */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto space-y-6 my-auto">
          {/* Floating Logo Emblem */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-panel-inset p-3 flex items-center justify-center border border-[#8B9BF7]/40 shadow-[0_0_40px_rgba(139,155,247,0.35)] relative group"
          >
            <img
              src="/images/extokened-logo-glow.png"
              alt="Extokened Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(139,155,247,0.6)]"
            />
            {/* Ambient halo glow */}
            <div className="absolute inset-0 rounded-2xl bg-[#8B9BF7]/20 blur-xl -z-10 animate-pulse" />
          </motion.div>

          {/* Typography: HELLO, WORLD & Welcome */}
          <div className="space-y-3">
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#121524]/90 border border-[#8B9BF7]/30 text-[#BAC0DC]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFC857]" />
              <span>Welcome to Extokened</span>
            </motion.div>

            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display"
            >
              HELLO,{" "}
              <span className="bg-gradient-to-r from-white via-[#D5DBFF] to-[#8B9BF7] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(139,155,247,0.4)]">
                WORLD.
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-xs sm:text-sm text-[#BAC0DC] font-sans max-w-sm mx-auto leading-relaxed"
            >
              The calm engineering squad for high-velocity software, AI systems, and competitive hackathons.
            </motion.p>
          </div>

          {/* Precision High-Tech Progress Bar */}
          <div className="w-full max-w-xs space-y-2 pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#8B9BF7] flex items-center gap-1.5 font-medium">
                <Terminal className="w-3 h-3 text-[#8B9BF7]" />
                {statusText}
              </span>
              <span className="text-white font-bold">{progress}%</span>
            </div>

            {/* Glowing Track */}
            <div className="w-full h-1.5 bg-[#121522] border border-[#1E2337] rounded-full overflow-hidden p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B9BF7] via-[#B8C0EC] to-[#FFC857] rounded-full shadow-[0_0_12px_rgba(139,155,247,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Status & Skip Prompt */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#727896]">
          <div className="flex items-center gap-2">
            <span className="text-[#8E96B8]">DISPATCH READY</span>
            <span>•</span>
            <span className="text-[#2FB36A]">100% SHIPPED CODE</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] bg-[#121522]/80 px-3.5 py-1 rounded-full border border-[#1E2337]">
            <span>Click anywhere or press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#1C2033] text-[#B8C0EC] border border-[#2B324E] text-[10px]">
              ESC
            </kbd>
            <span>to enter</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
