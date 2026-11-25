"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  pulseSpeed: number;
  swayAmp: number;
  swaySpeed: number;
  kind: "gold" | "amber" | "mist";
}

interface DistantStar {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 28,
    restDelta: 0.001,
  });

  // Gentle, unhurried scroll parallax keeping the moody twilight hills & mist in frame
  const videoY = useTransform(smoothProgress, [0, 1], ["-6%", "-34%"]);

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Minimal distant night stars strictly in the upper dark twilight sky (top 30%)
    const starCount = width < 768 ? 22 : 38;
    const stars: DistantStar[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.3,
      r: Math.random() * 1.0 + 0.35,
      alpha: Math.random() * 0.36 + 0.12,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.004,
    }));

    // Calm, footer-style warm golden fireflies & soft twilight mist embers
    const fireflyCount = width < 768 ? 16 : 26;
    const fireflies: Firefly[] = Array.from({ length: fireflyCount }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: -(Math.random() * 0.18 + 0.06),
      r: Math.random() * 1.8 + 0.9,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.007,
      swayAmp: Math.random() * 0.22 + 0.08,
      swaySpeed: Math.random() * 0.008 + 0.004,
      kind: idx % 5 === 0 ? "mist" : idx % 2 === 0 ? "gold" : "amber",
    }));

    let tick = 0;
    let rafId = 0;
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isFinePointer) return;
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (isFinePointer) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    const renderFrame = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);
        tick += 1;

        // 1. Whisper-subtle cursor twilight warmth (never overpowering)
        if (mouseRef.current.active && isFinePointer) {
          const { x: mx, y: my } = mouseRef.current;
          const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 210);
          halo.addColorStop(0, "rgba(139, 155, 247, 0.055)");
          halo.addColorStop(0.5, "rgba(245, 196, 81, 0.018)");
          halo.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(mx, my, 210, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Subtle Distant Upper-Sky Pinpoint Stars
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const twinkle = prefersReducedMotion
            ? 0.85
            : 0.6 + 0.4 * Math.sin(tick * s.speed + s.phase);
          ctx.fillStyle = `rgba(226, 232, 255, ${(s.alpha * twinkle).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Calm, Slow-Rising Meadow Fireflies (exact footer atmosphere)
        for (let i = 0; i < fireflies.length; i++) {
          const f = fireflies[i];

          if (!prefersReducedMotion) {
            f.x += f.vx + Math.sin(tick * f.swaySpeed + f.phase) * f.swayAmp;
            f.y += f.vy;

            // Subtle organic drift away from cursor
            if (mouseRef.current.active && isFinePointer) {
              const dx = f.x - mouseRef.current.x;
              const dy = f.y - mouseRef.current.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 110 && dist > 1) {
                const push = ((110 - dist) / 110) * 0.25;
                f.x += (dx / dist) * push;
                f.y += (dy / dist) * push;
              }
            }

            if (f.y < -18) {
              f.y = height + 18;
              f.x = Math.random() * width;
            }
            if (f.x < -18) f.x = width + 18;
            if (f.x > width + 18) f.x = -18;
          }

          // Smooth breathing firefly glow
          const breath = prefersReducedMotion
            ? 0.72
            : 0.25 + 0.75 * Math.pow(0.5 + 0.5 * Math.sin(tick * f.pulseSpeed + f.phase), 1.6);

          // Gently brighten fireflies near the cursor
          let proximityBoost = 1;
          if (mouseRef.current.active && isFinePointer) {
            const dist = Math.hypot(f.x - mouseRef.current.x, f.y - mouseRef.current.y);
            if (dist < 160) {
              proximityBoost = 1 + (1 - dist / 160) * 0.45;
            }
          }

          const finalAlpha = Math.min(1, breath * proximityBoost);
          const rgb =
            f.kind === "gold"
              ? "255, 204, 96"
              : f.kind === "amber"
              ? "245, 182, 78"
              : "165, 178, 255";

          const haloR = f.r * 5.8;
          const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, haloR);
          grad.addColorStop(0, `rgba(${rgb}, ${(0.78 * finalAlpha).toFixed(3)})`);
          grad.addColorStop(0.32, `rgba(${rgb}, ${(0.22 * finalAlpha).toFixed(3)})`);
          grad.addColorStop(1, `rgba(${rgb}, 0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(f.x, f.y, haloR, 0, Math.PI * 2);
          ctx.fill();

          // Crisp warm core speck
          ctx.fillStyle = `rgba(255, 248, 228, ${(0.88 * finalAlpha).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r * 0.48, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (isFinePointer) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080D] select-none"
      aria-hidden="true"
    >
      {/* 1. Continuous Footer-Style Blue-Hour Misty Meadow Looping Video */}
      <motion.div
        className="absolute inset-x-0 top-0 w-full will-change-transform"
        style={{
          height: "155vh",
          y: mounted ? videoY : "-6%",
        }}
      >
        <video
          className="w-full h-full object-cover object-[50%_72%] opacity-85"
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4d01c727-d9c5-47c8-a778-35a451ffd39f.mp4"
          poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261014_121838_c97d0940-f430-4304-8573-4f47ee44f447.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Deep Velvety Obsidian-Twilight Veil (same calm mood as the footer — zero washed-out glare) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 8, 13, 0.72) 0%, rgba(7, 9, 16, 0.56) 28%, rgba(7, 9, 16, 0.64) 62%, rgba(7, 8, 13, 0.86) 100%)",
          }}
        />
      </motion.div>

      {/* 2. Single Calm Drifting Twilight Mist Layer (Minimal, Zero Loud Color Blobs) */}
      <div
        className="absolute inset-x-0 bottom-[-10%] h-[55vh] pointer-events-none opacity-40 animate-cloud-drift"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 80%, rgba(139, 155, 247, 0.18) 0%, rgba(184, 194, 242, 0.06) 48%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Radial Vignette for Editorial Focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 35%, transparent 25%, rgba(6, 7, 12, 0.58) 100%)",
        }}
      />

      {/* 4. 60fps Minimal Live Fireflies & Pinpoint Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 5. Top Subtle Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/35 to-transparent" />
    </div>
  );
}
