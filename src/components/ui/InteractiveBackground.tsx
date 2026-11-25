"use client";

import React, { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    if (mediaQuery.matches || !pointerQuery.matches) return;

    let frameId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080D] select-none"
      aria-hidden="true"
    >
      {/* 1. Masked Architectural Precision Grid */}
      <div
        className="absolute inset-0 architectural-grid opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
        }}
      />

      {/* 2. Restrained Zenith Twilight Illumination */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] max-w-[140vw] h-[520px] rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 155, 247, 0.16) 0%, rgba(105, 122, 232, 0.06) 45%, transparent 72%)",
        }}
      />

      {/* 3. Subtle Secondary Warm Accent Offset */}
      <div
        className="absolute top-[38%] -right-48 w-[520px] h-[520px] rounded-full blur-[140px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 196, 81, 0.07) 0%, transparent 68%)",
        }}
      />

      {/* 4. Desktop-only Subtle Cursor Spotlight */}
      {mousePos && (
        <div
          className="hidden lg:block fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-[left,top] duration-200 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(139, 155, 247, 0.06) 0%, transparent 65%)",
          }}
        />
      )}

      {/* 5. Top Hairline Horizon Highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/35 to-transparent" />
    </div>
  );
}
