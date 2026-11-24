"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ProofStrip() {
  return (
    <section className="border-b border-[rgba(139,155,247,0.16)] bg-[rgba(14,18,30,0.55)] backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal duration={0.6} distance={16}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(139,155,247,0.14)] py-4 md:py-0">
            {siteConfig.proofMetrics.map((stat, i) => (
              <div 
                key={i} 
                className="py-6 px-4 sm:px-8 space-y-1.5 first:pl-0 last:pr-0 group transition-colors hover:bg-[rgba(139,155,247,0.06)]"
              >
                <div className="text-3xl sm:text-4xl font-bold font-display text-[#8B9BF7] tracking-tight drop-shadow-[0_0_16px_rgba(139,155,247,0.25)] group-hover:scale-[1.03] transition-transform origin-left">
                  <AnimatedCounter value={stat.value} duration={1.2} />
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-[#B8C0EC] transition-colors">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8E96B8] font-sans">
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
