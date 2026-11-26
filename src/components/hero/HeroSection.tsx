"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-12 sm:pt-44 sm:pb-14 lg:pt-48 lg:pb-16 overflow-hidden">
      {/* Soft Zenith Twilight Glow behind Typography */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[780px] max-w-[125vw] h-[360px] rounded-full blur-[110px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 155, 247, 0.18) 0%, rgba(184, 194, 242, 0.05) 52%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-7">
        {/* Refined Two-Font Editorial Headline (Space Grotesk Semibold + Instrument Serif Italic) */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-hero-display font-semibold text-[#F8FAFF] select-none tracking-[-0.04em]"
        >
          <span className="block bg-gradient-to-b from-white via-[#F2F5FF] to-[#CBD4FA] bg-clip-text text-transparent">
            We build what
          </span>
          <span className="block mt-0.5 sm:mt-1">
            <span className="bg-gradient-to-b from-white via-[#EFF3FF] to-[#C6D0F8] bg-clip-text text-transparent">
              we{" "}
            </span>
            <span className="font-hero-serif text-[1.18em] leading-[0.95] bg-gradient-to-r from-[#AEBCFF] via-[#F4F6FF] to-[#F7CA63] bg-clip-text text-transparent pr-1">
              imagine.
            </span>
          </span>
        </motion.h1>

        {/* Balanced, High-Readability Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="text-sm sm:text-base md:text-[1.08rem] text-[#D2DAF5]/95 leading-[1.75] max-w-[38rem] mx-auto font-sans text-balance"
        >
          Extokened is a permanent technology and hackathon team from Dhaka. We design and ship{" "}
          <span className="text-white font-medium">resilient full-stack systems</span>,{" "}
          <span className="text-white font-medium">autonomous AI agents</span>, and{" "}
          <span className="text-white font-medium">production software</span> built under real 24–48h pressure.
        </motion.p>

        {/* Dead-Center Symmetrical 2-Button CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <Link
            href="/projects"
            className="btn-primary w-full sm:w-auto py-3 px-6 text-sm sm:text-[15px] group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/hackathons"
            className="btn-secondary w-full sm:w-auto py-3 px-6 text-sm sm:text-[15px] group"
          >
            <Trophy className="w-4 h-4 text-[#F5C451] group-hover:rotate-12 transition-transform" />
            <span>Hackathon Journey</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
