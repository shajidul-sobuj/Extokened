"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulseDuration: number;
}

export function InteractiveBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Smooth vertical journey across the twilight landscape
  const videoY = useTransform(smoothProgress, [0, 1], ["0%", "-42%"]);
  const cloudsY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-22%", "-50%"]);
  const cloudsOpacity = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [0.75, 0.55, 0.18, 0.05]);

  useEffect(() => {
    setMounted(true);

    // Subtle stars scattered across upper sky zone
    const starList: Star[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 44,
      size: Math.random() * 1.6 + 0.8,
      opacity: Math.random() * 0.55 + 0.25,
      pulseDuration: Math.random() * 3.5 + 2.5,
    }));
    setStars(starList);

    // Restrained warm golden & twilight firefly motes
    const colors = [
      "rgba(245, 196, 81, 0.62)",
      "rgba(245, 196, 81, 0.42)",
      "rgba(139, 155, 247, 0.45)",
      "rgba(184, 194, 242, 0.36)",
    ];

    const fireflyList: Firefly[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.4 + 1.2,
      color: colors[i % colors.length],
      duration: Math.random() * 7 + 7,
      delay: Math.random() * 5,
    }));
    setFireflies(fireflyList);

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
      {/* 1. Panoramic Blue-Hour Twilight Landscape Video */}
      <motion.div
        className="absolute inset-x-0 top-0 w-full will-change-transform"
        style={{
          height: "185vh",
          y: mounted ? videoY : "0%",
        }}
      >
        <video
          className="w-full h-full object-cover object-top"
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4d01c727-d9c5-47c8-a778-35a451ffd39f.mp4"
          poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261014_121838_c97d0940-f430-4304-8573-4f47ee44f447.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Balanced Contrast Scrim: preserves twilight hills & fireflies while keeping foreground text razor-sharp */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 8, 13, 0.62) 0%, rgba(7, 8, 13, 0.44) 18%, rgba(7, 8, 13, 0.64) 48%, rgba(7, 8, 13, 0.72) 76%, rgba(7, 8, 13, 0.88) 100%)",
          }}
        />
      </motion.div>

      {/* 2. Drifting Celestial Clouds & Twilight Mist ("Megh") */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[75vh] pointer-events-none overflow-hidden"
        style={{
          y: mounted ? cloudsY : "0%",
          opacity: mounted ? cloudsOpacity : 0.7,
        }}
      >
        <div
          className="absolute -top-16 -left-1/4 w-[150%] h-[400px] rounded-[50%] blur-[80px] opacity-25 animate-cloud-drift"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(184, 194, 242, 0.35) 0%, rgba(139, 155, 247, 0.2) 42%, rgba(196, 131, 169, 0.14) 64%, transparent 82%)",
          }}
        />
        <div
          className="absolute top-44 -right-1/4 w-[140%] h-[340px] rounded-[50%] blur-[95px] opacity-20 animate-cloud-drift-reverse"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212, 143, 178, 0.28) 0%, rgba(139, 155, 247, 0.18) 45%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* 3. Twinkling Celestial Stars in Upper Sky Zone */}
      <div className="absolute inset-x-0 top-0 h-[48vh] pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: "#FFFFFF",
              boxShadow: `0 0 ${s.size * 2}px rgba(255, 255, 255, 0.85), 0 0 ${s.size * 4}px rgba(139, 155, 247, 0.45)`,
              opacity: s.opacity,
              animationDuration: `${s.pulseDuration}s`,
            }}
          />
        ))}
      </div>

      {/* 4. Subtle Architectural Twilight Grid */}
      <div className="absolute inset-0 meadow-grid opacity-30 pointer-events-none" />

      {/* 5. Floating Ambient Firefly Motes */}
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundColor: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.color}`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: 0.62,
          }}
        />
      ))}

      {/* 6. Desktop-only Subtle Interactive Mouse Twilight Glow */}
      {mousePos && (
        <div
          className="hidden lg:block fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-[left,top] duration-200 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "460px",
            height: "460px",
            background:
              "radial-gradient(circle, rgba(139, 155, 247, 0.07) 0%, rgba(245, 196, 81, 0.025) 45%, transparent 70%)",
          }}
        />
      )}

      {/* 7. Subtle Top Ambient Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/35 to-transparent" />
    </div>
  );
}
