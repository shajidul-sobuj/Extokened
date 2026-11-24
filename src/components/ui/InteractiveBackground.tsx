"use client";

import React, { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function InteractiveBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Generate subtle firefly motes
    const colors = [
      "rgba(255, 200, 87, 0.45)",  // Firefly gold
      "rgba(139, 155, 247, 0.35)",  // Twilight periwinkle
      "rgba(184, 192, 236, 0.30)",  // Lavender mist
    ];

    const generated: Firefly[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1.5,
      color: colors[i % colors.length],
      duration: Math.random() * 8 + 8, // 8-16s drift
      delay: Math.random() * 5,
    }));

    setFireflies(generated);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08090E]">
      {/* Subtle twilight architectural grid */}
      <div className="absolute inset-0 meadow-grid opacity-35" />

      {/* Interactive cursor twilight glow */}
      {mousePos && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-transform duration-300 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(139, 155, 247, 0.05) 0%, rgba(255, 200, 87, 0.015) 50%, transparent 70%)",
          }}
        />
      )}

      {/* Floating Ambient Firefly Motes */}
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full pointer-events-none animate-pulse"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundColor: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.color}`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Soft periwinkle & firefly ambient radial glows */}
      <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] rounded-full bg-[#8B9BF7]/[0.025] blur-[160px]" />
      <div className="absolute top-1/2 -left-40 w-[550px] h-[550px] rounded-full bg-[#FFC857]/[0.018] blur-[140px]" />
      <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-[#8B9BF7]/[0.02] blur-[140px]" />

      {/* Subtle top edge border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2337] to-transparent" />
    </div>
  );
}
