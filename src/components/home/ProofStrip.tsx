"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Trophy, ArrowUpRight } from "lucide-react";

export function ProofStrip() {
  return (
    <section
      aria-label="Verified team metrics and latest victory"
      className="pb-16 sm:pb-24 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal duration={0.6} distance={18}>
          {/* Sculpted Floating Frosted-Glass Horizon Dock (lets the mountain ridge breathe around it) */}
          <div className="surface-card overflow-hidden">
            {/* Top Interactive Flagship Victory Ribbon */}
            <Link
              href="/projects/pulse-ai"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-5 sm:px-7 py-3.5 bg-white/[0.03] border-b border-white/[0.1] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5C451]/15 border border-[#F5C451]/35 text-[#F5C451] font-semibold">
                  <Trophy className="w-3 h-3" />
                  <span>Winner</span>
                </span>
                <span className="text-white font-medium">
                  PulseAI · AI Horizon Global 2025
                </span>
                <span className="text-[#9BA5C4] hidden md:inline">
                  — Multimodal clinical ICU triage built in 48 hours
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#A5B2FF] group-hover:text-white transition-colors shrink-0">
                <span>Read case study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>

            {/* 4-Column Hairline Verified Proof Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.09]">
              {siteConfig.proofMetrics.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#0A0E1B]/72 hover:bg-[#11172D]/82 transition-colors px-5 py-6 sm:px-7 sm:py-7 space-y-1.5 group"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold tracking-tight bg-gradient-to-b from-white via-[#EDF1FF] to-[#A9B7FF] bg-clip-text text-transparent tabular-nums">
                    <AnimatedCounter value={stat.value} duration={1.15} />
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#C4CEFF] transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#9BA5C4] leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
