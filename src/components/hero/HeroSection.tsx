"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1E2337]/60 overflow-hidden bg-transparent">
      {/* Background twilight atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(139,155,247,0.16)_0%,rgba(139,155,247,0.03)_60%,transparent_80%)] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#FFC857]/[0.025] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090E]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* LUXURY EDITORIAL CENTERED HERO                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-7">
          
          {/* Top Live Achievement Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[rgba(16,20,38,0.7)] backdrop-blur-xl border border-[rgba(139,155,247,0.28)] shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(139,155,247,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] max-w-full hover:border-[rgba(139,155,247,0.45)] transition-all"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FB36A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FB36A] shadow-[0_0_8px_#2FB36A]" />
            </span>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono font-medium truncate">
              <span className="text-[#CAD1F0] tracking-[0.08em] uppercase">EXTOKENED SQUAD</span>
              <span className="text-[#3E4770]">/</span>
              <span className="text-[#8B9BF7] tracking-wider">18 HACKATHONS</span>
              <span className="text-[#3E4770]">/</span>
              <span className="text-[#FFC857] tracking-wider font-semibold">7 CHAMPIONSHIPS</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-hero-display font-extrabold tracking-[-0.04em] text-white select-none"
          >
            <span className="block bg-gradient-to-b from-[#FFFFFF] via-[#F0F3FF] to-[#CAD3FF] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(255,255,255,0.1)]">
              We build what
            </span>
            <span className="block mt-1 sm:mt-2">
              <span className="text-white/90">we </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#8B9BF7] via-[#D0D7FF] to-[#FFC857] bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_35px_rgba(139,155,247,0.5)]">
                  imagine.
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B9BF7]/0 via-[#8B9BF7]/70 to-[#FFC857]/0 rounded-full blur-[0.5px]" />
              </span>
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base sm:text-lg md:text-[1.15rem] text-[#A6AFCF] leading-[1.75] max-w-2xl mx-auto font-sans font-normal tracking-[-0.01em]"
          >
            Extokened is an independent engineering squad from Dhaka. We design, prototype, and ship{" "}
            <span className="text-white font-medium">resilient full-stack architectures</span>,{" "}
            <span className="text-[#CAD1F0] font-medium">autonomous AI agents</span>, and{" "}
            <span className="text-[#FFC857] font-medium">production systems</span> under high-stakes hackathon pressure.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
          >
            <Link
              href="/projects"
              className="btn-meadow-dark py-3 px-6 text-sm sm:text-base font-semibold shadow-[0_0_28px_rgba(139,155,247,0.3)] justify-center group"
            >
              <span>Explore 26+ Shipped Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/hackathons"
              className="btn-meadow-secondary py-3 px-5 text-sm sm:text-base justify-center group"
            >
              <Trophy className="w-4 h-4 text-[#FFC857] group-hover:rotate-12 transition-transform" />
              <span>18 Hackathons Archive</span>
            </Link>

            <Link
              href="/team"
              className="btn-meadow-secondary py-3 px-5 text-sm sm:text-base justify-center hidden sm:inline-flex group"
            >
              <Users className="w-4 h-4 text-[#8B9BF7] group-hover:scale-110 transition-transform" />
              <span>Meet the Squad</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
