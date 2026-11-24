import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function ProofStrip() {
  return (
    <section className="border-b border-[#292B2E] bg-[#111214]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#292B2E] py-4 md:py-0">
          {siteConfig.proofMetrics.map((stat, i) => (
            <div 
              key={i} 
              className="py-6 px-4 sm:px-8 space-y-1 first:pl-0 last:pr-0"
            >
              <div className="text-3xl sm:text-4xl font-bold font-display text-[#F3F1EC] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#F3F1EC]">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#777873] font-sans">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
