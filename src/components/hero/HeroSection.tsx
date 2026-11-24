"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1E2337]/60 overflow-hidden bg-transparent">
      {/* Background twilight atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#8B9BF7]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FFC857]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090E]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* CLEAN, IMPACTFUL CENTERED HERO                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Live Achievement Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono bg-[#121626]/80 border border-[#8B9BF7]/35 shadow-[0_0_16px_rgba(139,155,247,0.18)] max-w-full"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FB36A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FB36A]" />
            </span>
            <span className="text-[#B8C0EC] font-medium tracking-wide truncate">
              EXTOKENED SQUAD • 18 HACKATHONS • 7 GRAND CHAMPIONSHIPS
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-hero-display font-semibold text-white leading-tight tracking-tight text-balance"
          >
            We build what we{" "}
            <span className="text-[#8B9BF7] drop-shadow-[0_0_35px_rgba(139,155,247,0.45)]">
              imagine.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#BAC0DC] leading-relaxed max-w-2xl mx-auto font-sans text-balance"
          >
            Extokened is an independent engineering squad from Dhaka. We design, prototype, and ship resilient full-stack architectures, autonomous AI agents, and competitive software under high-stakes deadlines.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
          >
            <Link
              href="/projects"
              className="btn-meadow-dark py-2.5 px-6 text-sm shadow-[0_0_24px_rgba(139,155,247,0.25)] justify-center"
            >
              <span>Explore 26+ Shipped Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/hackathons"
              className="btn-meadow-secondary py-2.5 px-5 text-sm justify-center"
            >
              <Trophy className="w-4 h-4 text-[#FFC857]" />
              <span>18 Hackathons Archive</span>
            </Link>

            <Link
              href="/team"
              className="btn-meadow-secondary py-2.5 px-5 text-sm justify-center hidden sm:inline-flex"
            >
              <Users className="w-4 h-4 text-[#8B9BF7]" />
              <span>Meet the Squad</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
