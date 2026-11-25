"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Trophy, Layers, Cpu } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left 7 Columns: Editorial Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="eyebrow-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span>Dhaka, Bangladesh • Permanent Engineering Squad</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="font-hero-display font-bold text-[#F5F7FF]"
            >
              We build what{" "}
              <span className="bg-gradient-to-r from-[#A5B2FF] via-[#DCE2FF] to-[#8B9BF7] bg-clip-text text-transparent">
                we imagine.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55 }}
              className="text-base sm:text-lg text-[#A8B2CF] leading-[1.7] max-w-2xl font-sans"
            >
              Extokened is a builder-led technology and hackathon team. We design, prototype, and ship{" "}
              <span className="text-white font-medium">resilient full-stack systems</span>,{" "}
              <span className="text-white font-medium">multimodal AI agents</span>, and{" "}
              <span className="text-white font-medium">practical developer tools</span> under real technical constraints.
            </motion.p>

            {/* Primary & Secondary Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.55 }}
              className="pt-1 flex flex-wrap items-center gap-3.5"
            >
              <Link href="/projects" className="btn-primary py-3 px-6 text-sm group">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link href="/hackathons" className="btn-secondary py-3 px-5 text-sm group">
                <Trophy className="w-4 h-4 text-[#F5C451]" />
                <span>Hackathon Archive</span>
              </Link>

              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-[#9BA5C4] hover:text-white transition-colors"
              >
                <span>Meet the squad</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right 5 Columns: Architectural Credibility & Flagship Telemetry Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="surface-card p-6 sm:p-7 space-y-6 relative overflow-hidden">
              {/* Subtle internal corner glow */}
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[70px] bg-[#8B9BF7]/15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Panel Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08] relative">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B8C2F2]">
                  <Cpu className="w-3.5 h-3.5 text-[#8B9BF7]" />
                  <span>SQUAD TELEMETRY</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  Active Roster
                </span>
              </div>

              {/* Latest Flagship Victory Feature */}
              <Link
                href="/projects/pulse-ai"
                className="block p-4 rounded-xl bg-[#090B13]/90 border border-white/[0.08] hover:border-[#8B9BF7]/40 transition-colors group relative"
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[#F5C451] font-semibold">
                    <Trophy className="w-3.5 h-3.5" />
                    Latest Grand Championship
                  </span>
                  <span className="text-[#7D87A6]">Jan 2025</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-white group-hover:text-[#A5B2FF] transition-colors">
                      PulseAI — Clinical ICU Triage
                    </h2>
                    <p className="text-xs text-[#9BA5C4] leading-relaxed">
                      1st Place of 220+ global teams at AI Horizon Hackathon. Sub-200ms vital anomaly detection with Gemini 2.0.
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7D87A6] group-hover:text-white shrink-0 mt-0.5 transition-colors" />
                </div>
              </Link>

              {/* Hairline 3-Cell Record Summary */}
              <div className="grid grid-cols-3 gap-px bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
                <div className="bg-[#0C0F1A] p-3.5 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#F5C451] tabular-nums">
                    7
                  </div>
                  <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">
                    1st Places
                  </div>
                </div>
                <div className="bg-[#0C0F1A] p-3.5 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#A5B2FF] tabular-nums">
                    12
                  </div>
                  <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">
                    Podiums
                  </div>
                </div>
                <div className="bg-[#0C0F1A] p-3.5 text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
                    26+
                  </div>
                  <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">
                    Shipped
                  </div>
                </div>
              </div>

              {/* Core Capabilities Footer */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#7D87A6]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Primary Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "TypeScript", "Gemini API", "FastAPI", "Go", "PostgreSQL"].map(
                    (tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
