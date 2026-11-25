"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ProofStrip() {
  return (
    <section
      aria-label="Verified team metrics"
      className="border-y border-white/[0.1] bg-[#090C16]/65 backdrop-blur-xl relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal duration={0.5} distance={14}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.1] border-x border-white/[0.1]">
            {siteConfig.proofMetrics.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0A0D18]/80 hover:bg-[#111629]/85 transition-colors px-5 py-7 sm:px-7 sm:py-8 space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white tabular-nums">
                  <AnimatedCounter value={stat.value} duration={1.1} />
                </div>
                <div className="text-sm font-semibold text-[#E2E7FA]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#7D87A6] leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
