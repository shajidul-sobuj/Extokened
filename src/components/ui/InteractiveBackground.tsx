"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface StarParticle {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  tint: string;
}

interface FireflyParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  pulseSpeed: number;
  hue: "gold" | "periwinkle";
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
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
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  // Smooth vertical scroll journey across sky -> dusk horizon -> firefly meadow
  const videoY = useTransform(smoothProgress, [0, 1], ["0%", "-42%"]);
  const auroraY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-18%", "-42%"]);
  const auroraOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 0.55, 0.2]);

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

    // Generate crisp celestial stars (upper 58% of viewport)
    const starCount = width < 768 ? 42 : 76;
    const stars: StarParticle[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.58,
      r: Math.random() * 1.35 + 0.45,
      baseAlpha: Math.random() * 0.55 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.018 + 0.006,
      tint: Math.random() > 0.72 ? "186, 198, 255" : "255, 255, 255",
    }));

    // Generate living organically drifting fireflies
    const fireflyCount = width < 768 ? 18 : 34;
    const fireflies: FireflyParticle[] = Array.from({ length: fireflyCount }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.22 + 0.08),
      r: Math.random() * 2.1 + 1.1,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.024 + 0.01,
      hue: idx % 3 === 0 ? "periwinkle" : "gold",
    }));

    let shootingStar: ShootingStar | null = null;
    let nextMeteorTimer = 260; // ~4.3s at 60fps
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

        // 1. Subtle Interactive Cursor Twilight Halo
        if (mouseRef.current.active && isFinePointer) {
          const { x: mx, y: my } = mouseRef.current;
          const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 240);
          halo.addColorStop(0, "rgba(139, 155, 247, 0.095)");
          halo.addColorStop(0.45, "rgba(245, 196, 81, 0.025)");
          halo.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(mx, my, 240, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Twinkling Celestial Starfield
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const twinkle = prefersReducedMotion
            ? 1
            : 0.55 + 0.45 * Math.sin(tick * s.speed + s.phase);
          const alpha = s.baseAlpha * twinkle;

          ctx.fillStyle = `rgba(${s.tint}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Occasional Graceful Shooting Star in Upper Sky
        if (!prefersReducedMotion) {
          nextMeteorTimer -= 1;
          if (nextMeteorTimer <= 0 && !shootingStar) {
            const startX = width * (0.2 + Math.random() * 0.65);
            const startY = height * (0.04 + Math.random() * 0.22);
            const speed = 10 + Math.random() * 4;
            const angle = Math.PI * 0.78; // graceful diagonal streak
            shootingStar = {
              x: startX,
              y: startY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              length: 85 + Math.random() * 45,
              life: 0,
              maxLife: 34,
            };
            nextMeteorTimer = 420 + Math.floor(Math.random() * 340);
          }

          if (shootingStar) {
            shootingStar.x += shootingStar.vx;
            shootingStar.y += shootingStar.vy;
            shootingStar.life += 1;

            const progress = shootingStar.life / shootingStar.maxLife;
            const opacity = Math.sin(progress * Math.PI) * 0.85;
            const norm = Math.hypot(shootingStar.vx, shootingStar.vy);
            const tailX = shootingStar.x - (shootingStar.vx / norm) * shootingStar.length;
            const tailY = shootingStar.y - (shootingStar.vy / norm) * shootingStar.length;

            const grad = ctx.createLinearGradient(
              shootingStar.x,
              shootingStar.y,
              tailX,
              tailY
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${opacity.toFixed(3)})`);
            grad.addColorStop(0.35, `rgba(165, 178, 255, ${(opacity * 0.6).toFixed(3)})`);
            grad.addColorStop(1, "rgba(139, 155, 247, 0)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.6;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();

            if (shootingStar.life >= shootingStar.maxLife) {
              shootingStar = null;
            }
          }
        }

        // 4. Living Organically Drifting Fireflies (with gentle cursor swirl)
        for (let i = 0; i < fireflies.length; i++) {
          const f = fireflies[i];

          if (!prefersReducedMotion) {
            const sway = Math.sin(tick * 0.012 + f.phase) * 0.25;
            f.x += f.vx + sway;
            f.y += f.vy + Math.cos(tick * 0.01 + f.phase) * 0.08;

            // Gentle organic repulsion near pointer
            if (mouseRef.current.active && isFinePointer) {
              const dx = f.x - mouseRef.current.x;
              const dy = f.y - mouseRef.current.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 130 && dist > 1) {
                const force = ((130 - dist) / 130) * 0.45;
                f.x += (dx / dist) * force;
                f.y += (dy / dist) * force;
              }
            }

            // Wrap seamlessly around viewport edges
            if (f.y < -20) {
              f.y = height + 20;
              f.x = Math.random() * width;
            }
            if (f.x < -20) f.x = width + 20;
            if (f.x > width + 20) f.x = -20;
          }

          const glowPulse = prefersReducedMotion
            ? 0.75
            : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(tick * f.pulseSpeed + f.phase));

          const rgb = f.hue === "gold" ? "255, 206, 102" : "155, 172, 255";
          const haloRadius = f.r * 5.2;

          const radial = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, haloRadius);
          radial.addColorStop(0, `rgba(${rgb}, ${(0.85 * glowPulse).toFixed(3)})`);
          radial.addColorStop(0.35, `rgba(${rgb}, ${(0.28 * glowPulse).toFixed(3)})`);
          radial.addColorStop(1, `rgba(${rgb}, 0)`);

          ctx.fillStyle = radial;
          ctx.beginPath();
          ctx.arc(f.x, f.y, haloRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${(0.9 * glowPulse).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r * 0.55, 0, Math.PI * 2);
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
      {/* 1. Panoramic Blue-Hour Twilight Meadow Video with Scroll Parallax */}
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

        {/* Luminous Balanced Scrim: keeps the starry sky vivid while ensuring effortless readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7, 8, 15, 0.48) 0%, rgba(10, 12, 24, 0.28) 20%, rgba(7, 9, 16, 0.56) 48%, rgba(7, 8, 14, 0.68) 76%, rgba(7, 8, 13, 0.88) 100%)",
          }}
        />
      </motion.div>

      {/* 2. Breathing Twilight Aurora & Drifting Mist Layers */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[78vh] pointer-events-none overflow-hidden"
        style={{
          y: mounted ? auroraY : "0%",
          opacity: mounted ? auroraOpacity : 0.8,
        }}
      >
        <div
          className="absolute -top-24 -left-1/4 w-[150%] h-[420px] rounded-[50%] blur-[90px] opacity-30 animate-cloud-drift"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(165, 178, 255, 0.42) 0%, rgba(139, 155, 247, 0.22) 40%, rgba(212, 143, 178, 0.14) 65%, transparent 82%)",
          }}
        />
        <div
          className="absolute top-36 -right-1/4 w-[140%] h-[360px] rounded-[50%] blur-[100px] opacity-25 animate-cloud-drift-reverse"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(245, 196, 81, 0.16) 0%, rgba(139, 155, 247, 0.22) 45%, transparent 76%)",
          }}
        />
      </motion.div>

      {/* 3. Subtle Masked Architectural Grid */}
      <div
        className="absolute inset-0 meadow-grid opacity-35 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 25%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 25%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 65%, transparent 100%)",
        }}
      />

      {/* 4. Live 60fps Canvas: Twinkling Stars, Shooting Stars, Organic Fireflies & Cursor Halo */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 5. Top Subtle Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A5B2FF]/45 to-transparent" />
    </div>
  );
}
