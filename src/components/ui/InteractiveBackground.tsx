import React from "react";

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08090E]">
      {/* Subtle twilight architectural grid */}
      <div className="absolute inset-0 meadow-grid opacity-40" />
      {/* Soft periwinkle & firefly ambient radial glows */}
      <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] rounded-full bg-[#8B9BF7]/[0.025] blur-[160px]" />
      <div className="absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-[#FFC857]/[0.018] blur-[140px]" />
      <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-[#8B9BF7]/[0.02] blur-[140px]" />
      {/* Subtle top edge border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2337] to-transparent" />
    </div>
  );
}
