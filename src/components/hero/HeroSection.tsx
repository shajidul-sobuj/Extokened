"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-14 sm:pt-44 sm:pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
      {/* Soft Zenith Twilight Glow behind Typography */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[780px] max-w-[125vw] h-[360px] rounded-full blur-[110px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 155, 247, 0.2) 0%, rgba(184, 194, 242, 0.06) 50%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        {/* Monumental Two-Font Editorial Headline (Space Grotesk + Instrument Serif Italic) */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-hero-display font-bold text-[#F8FAFF] select-none"
        >
          <span className="block bg-gradient-to-b from-white via-[#F1F4FF] to-[#C8D2FA] bg-clip-text text-transparent">
            We build what
          </span>
          <span className="block mt-1 sm:mt-1.5">
            <span className="bg-gradient-to-b from-white via-[#EEF2FF] to-[#C2CCF8] bg-clip-text text-transparent">
              we{" "}
            </span>
            <span className="font-hero-serif text-[1.16em] leading-none bg-gradient-to-r from-[#A9B7FF] via-[#F2F4FF] to-[#F7CA63] bg-clip-text text-transparent px-1">
              imagine.
            </span>
          </span>
        </motion.h1>

        {/* Crisp High-Legibility Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="text-base sm:text-lg md:text-[1.15rem] text-[#CFD7F2] leading-[1.75] max-w-2xl mx-auto font-sans"
        >
          Extokened is a permanent technology and hackathon team from Dhaka. We architect and ship{" "}
          <span className="text-white font-medium">resilient full-stack systems</span>,{" "}
          <span className="text-white font-medium">autonomous AI agents</span>, and{" "}
          <span className="text-[#F7CA63] font-medium">production software</span> under real 24–48h pressure.
        </motion.p>

        {/* Refined Action Row with Clear Primary / Secondary / Tertiary Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <Link
            href="/projects"
            className="btn-primary w-full sm:w-auto py-3.5 px-7 text-sm sm:text-[15px] group"
          >
            <span>Explore 26+ Shipped Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/hackathons"
            className="btn-secondary w-full sm:w-auto py-3.5 px-6 text-sm sm:text-[15px] group"
          >
            <Trophy className="w-4 h-4 text-[#F5C451] group-hover:rotate-12 transition-transform" />
            <span>18 Hackathons Archive</span>
          </Link>

          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#C8D0EC] hover:text-white transition-colors"
          >
            <span>Meet the Squad</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
