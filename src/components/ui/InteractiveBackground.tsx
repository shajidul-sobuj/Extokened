import React from "react";

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0D0D0D]">
      {/* Subtle warm amber architectural grid */}
      <div className="absolute inset-0 warm-grid opacity-50" />
      {/* Soft warm amber ambient radial glows */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#F0A24C]/[0.025] blur-[140px]" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#F0A24C]/[0.015] blur-[120px]" />
      {/* Subtle top edge border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D221A] to-transparent" />
    </div>
  );
}
