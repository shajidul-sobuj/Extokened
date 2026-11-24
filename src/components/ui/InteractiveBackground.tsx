import React from "react";

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0A0A0B]">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 editorial-grid opacity-40" />
      {/* Subtle top ambient edge divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#292B2E] to-transparent" />
    </div>
  );
}
