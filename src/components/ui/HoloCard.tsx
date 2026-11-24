"use client";

import React, { useRef, useState } from "react";
import { playHover } from "@/lib/sound";

interface HoloCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "gold" | "emerald" | "cyan" | "violet" | "default";
  className?: string;
  enableSound?: boolean;
}

export function HoloCard({
  children,
  variant = "default",
  className = "",
  enableSound = true,
  ...props
}: HoloCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setGlarePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (enableSound) playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  const getBorderColor = () => {
    switch (variant) {
      case "gold":
        return "border-amber-500/40 hover:border-amber-400/80 shadow-amber-500/10";
      case "emerald":
        return "border-emerald-500/40 hover:border-emerald-400/80 shadow-emerald-500/10";
      case "cyan":
        return "border-cyan-500/40 hover:border-cyan-400/80 shadow-cyan-500/10";
      case "violet":
        return "border-purple-500/40 hover:border-purple-400/80 shadow-purple-500/10";
      default:
        return "border-white/10 hover:border-cyan-500/40";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl bg-[#0B0E14] border backdrop-blur-xl overflow-hidden transition-shadow duration-300 ${getBorderColor()} ${className}`}
      {...props}
    >
      {/* Precision corner crosshairs */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-zinc-600 pointer-events-none select-none">+</div>
      <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600 pointer-events-none select-none">+</div>
      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-600 pointer-events-none select-none">+</div>
      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-600 pointer-events-none select-none">+</div>

      {/* Dynamic Holographic Foil Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-20 mix-blend-color-dodge transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 245, 255, 0.25), rgba(255, 184, 0, 0.15) 40%, rgba(153, 69, 255, 0.15) 70%, transparent 90%)`,
            opacity: 0.85,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
