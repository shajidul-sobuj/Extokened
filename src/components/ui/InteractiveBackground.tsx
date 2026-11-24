"use client";

import React, { useEffect, useState, useRef } from "react";
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

  // Smooth scroll tracking across the entire document
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Vertical journey: from top (Sky & Stars: 0%) to bottom (Meadow & Hills: -48.5%)
  const videoY = useTransform(smoothProgress, [0, 1], ["0%", "-48.5%"]);
  
  // Parallax for drifting cloud layers ("megh")
  const cloudsY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-25%", "-60%"]);
  const cloudsOpacity = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [0.85, 0.65, 0.2, 0.05]);

  useEffect(() => {
    setMounted(true);

    // Stars scattered across the celestial sky zone (top 45% of page)
    const starList: Star[] = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 45,
      size: Math.random() * 1.8 + 0.8,
      opacity: Math.random() * 0.6 + 0.3,
      pulseDuration: Math.random() * 3 + 2,
    }));
    setStars(starList);

    // Golden & Periwinkle fireflies (concentrated in lower altitudes / meadow)
    const colors = [
      "rgba(255, 200, 87, 0.65)",  // Firefly gold
      "rgba(255, 200, 87, 0.45)",  // Soft amber
      "rgba(139, 155, 247, 0.45)",  // Twilight periwinkle
      "rgba(184, 192, 236, 0.40)",  // Lavender mist
    ];

    const fireflyList: Firefly[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.8 + 1.2,
      color: colors[i % colors.length],
      duration: Math.random() * 7 + 7,
      delay: Math.random() * 5,
    }));
    setFireflies(fireflyList);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08090E] select-none">
      
      {/* 1. Global Panoramic Landscape Video (Sky -> Clouds -> Mountains -> Meadow) */}
      <motion.div
        className="absolute inset-x-0 w-full will-change-transform"
        style={{
          top: 0,
          height: "195vh",
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

        {/* Subtle dark gradient overlay to ensure text contrast while retaining vivid landscape colors */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(8, 9, 14, 0.42) 0%, rgba(8, 9, 14, 0.22) 15%, rgba(8, 9, 14, 0.55) 45%, rgba(8, 9, 14, 0.62) 75%, rgba(8, 9, 14, 0.15) 100%)",
          }}
        />
      </motion.div>

      {/* 2. Drifting Celestial Clouds & Twilight Mist ("Megh") */}
      <motion.div 
        className="absolute inset-x-0 top-0 h-[80vh] pointer-events-none overflow-hidden"
        style={{
          y: mounted ? cloudsY : "0%",
          opacity: mounted ? cloudsOpacity : 0.85,
        }}
      >
        {/* Upper Billowing Cloud Bank 1 */}
        <div 
          className="absolute -top-16 -left-1/4 w-[150%] h-[420px] rounded-[50%] blur-[75px] opacity-25 animate-cloud-drift pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, rgba(184, 192, 236, 0.35) 0%, rgba(139, 155, 247, 0.2) 40%, rgba(196, 131, 169, 0.15) 60%, transparent 80%)",
          }}
        />

        {/* Horizon Dusk Cloud Bank 2 ("Megh") */}
        <div 
          className="absolute top-48 -right-1/4 w-[140%] h-[360px] rounded-[50%] blur-[90px] opacity-20 animate-cloud-drift-reverse pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(212, 143, 178, 0.3) 0%, rgba(139, 155, 247, 0.18) 45%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* 3. Twinkling Celestial Stars in Upper Sky Zone */}
      <div className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full pointer-events-none animate-pulse"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: "#FFFFFF",
              boxShadow: `0 0 ${s.size * 2}px rgba(255, 255, 255, 0.9), 0 0 ${s.size * 5}px rgba(139, 155, 247, 0.5)`,
              opacity: s.opacity,
              animationDuration: `${s.pulseDuration}s`,
            }}
          />
        ))}
      </div>

      {/* 4. Architectural Twilight Grid */}
      <div className="absolute inset-0 meadow-grid opacity-20 pointer-events-none" />

      {/* 5. Floating Ambient Firefly Motes */}
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
            opacity: 0.65,
          }}
        />
      ))}

      {/* 6. Interactive Mouse Twilight Glow */}
      {mousePos && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] transition-transform duration-300 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: "460px",
            height: "460px",
            background: "radial-gradient(circle, rgba(139, 155, 247, 0.06) 0%, rgba(255, 200, 87, 0.02) 45%, transparent 70%)",
          }}
        />
      )}

      {/* 7. Subtle Top Ambient Horizon Aura */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/30 to-transparent" />
    </div>
  );
}
