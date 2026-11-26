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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal duration={0.6} distance={18}>
          {/* Sculpted Translucent Liquid-Glass Horizon Dock (matches glass cards & lets twilight hills breathe) */}
          <div
            className="relative overflow-hidden rounded-[20px] border border-white/[0.14] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.2)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(16, 21, 38, 0.36) 0%, rgba(10, 13, 24, 0.62) 100%)",
              backdropFilter: "blur(22px) saturate(155%)",
              WebkitBackdropFilter: "blur(22px) saturate(155%)",
            }}
          >
            {/* Subtle Top Specular Edge */}
            <div
              className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              aria-hidden="true"
            />

            {/* Top Interactive Flagship Victory Ribbon */}
            <Link
              href="/projects/pulse-ai"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-5 sm:px-7 py-3.5 bg-white/[0.03] border-b border-white/[0.1] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5C451]/14 border border-[#F5C451]/35 text-[#F5C451] font-semibold">
                  <Trophy className="w-3 h-3" />
                  <span>Winner</span>
                </span>
                <span className="text-white font-medium">
                  PulseAI · AI Horizon Global 2025
                </span>
                <span className="text-[#B8C2E0] hidden md:inline">
                  — Multimodal clinical ICU triage built in 48 hours
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#B4C0FF] group-hover:text-white transition-colors shrink-0">
                <span>Read case study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>

            {/* 4-Column Airy Hairline Proof Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-white/[0.09]">
              {siteConfig.proofMetrics.map((stat, i) => (
                <div
                  key={i}
                  className="hover:bg-white/[0.04] transition-colors px-5 py-6 sm:px-7 sm:py-7 space-y-1.5 group"
                >
                  <div className="text-3xl sm:text-[2.15rem] font-display font-bold tracking-tight bg-gradient-to-b from-white via-[#EEF2FF] to-[#B4C0FF] bg-clip-text text-transparent tabular-nums leading-none">
                    <AnimatedCounter value={stat.value} duration={1.15} />
                  </div>
                  <div className="text-sm font-semibold text-white pt-1 group-hover:text-[#CBD4FF] transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#A9B4D6] leading-relaxed">
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
