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

interface SkyCloud {
  x: number;
  yRatio: number;
  w: number;
  h: number;
  speed: number;
  alpha: number;
  spriteIdx: number;
  bobPhase: number;
  bobSpeed: number;
}

function createCloudSprite(
  palette: "twilight" | "duskRose" | "paleLavender" | "horizonWarm"
): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  const sw = 520;
  const sh = 170;
  sprite.width = sw;
  sprite.height = sh;
  const sctx = sprite.getContext("2d");
  if (!sctx) return sprite;

  const colorMap: Record<typeof palette, { main: string; rim: string }> = {
    twilight: { main: "152, 166, 228", rim: "194, 204, 246" },
    duskRose: { main: "192, 146, 178", rim: "228, 176, 172" },
    paleLavender: { main: "168, 178, 236", rim: "212, 220, 255" },
    horizonWarm: { main: "214, 158, 152", rim: "245, 198, 146" },
  };
  const { main, rim } = colorMap[palette];

  // Layered multi-puff stratus/cirrus wisp geometry (tapered tails + soft sculpted ridge)
  const puffs = [
    { cx: 0.16, cy: 0.58, rx: 0.16, ry: 0.2, a: 0.18, tone: main },
    { cx: 0.27, cy: 0.5, rx: 0.19, ry: 0.27, a: 0.28, tone: main },
    { cx: 0.39, cy: 0.45, rx: 0.22, ry: 0.33, a: 0.34, tone: rim },
    { cx: 0.5, cy: 0.48, rx: 0.25, ry: 0.35, a: 0.36, tone: main },
    { cx: 0.62, cy: 0.46, rx: 0.21, ry: 0.3, a: 0.32, tone: rim },
    { cx: 0.74, cy: 0.53, rx: 0.18, ry: 0.24, a: 0.24, tone: main },
    { cx: 0.85, cy: 0.59, rx: 0.15, ry: 0.18, a: 0.16, tone: main },
    // Soft bottom mist base connecting the wisp organically
    { cx: 0.48, cy: 0.62, rx: 0.36, ry: 0.22, a: 0.2, tone: main },
    { cx: 0.56, cy: 0.58, rx: 0.28, ry: 0.18, a: 0.16, tone: rim },
  ];

  for (const p of puffs) {
    sctx.save();
    sctx.translate(p.cx * sw, p.cy * sh);
    sctx.scale(1, (p.ry * sh) / (p.rx * sw));
    const radius = p.rx * sw;
    const grad = sctx.createRadialGradient(0, 0, 0, 0, 0, radius);
    grad.addColorStop(0, `rgba(${p.tone}, ${p.a})`);
    grad.addColorStop(0.45, `rgba(${p.tone}, ${(p.a * 0.45).toFixed(3)})`);
    grad.addColorStop(1, `rgba(${p.tone}, 0)`);
    sctx.fillStyle = grad;
    sctx.beginPath();
    sctx.arc(0, 0, radius, 0, Math.PI * 2);
    sctx.fill();
    sctx.restore();
  }

  return sprite;
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
    damping: 26,
    restDelta: 0.001,
  });

  // Single continuous panoramic journey: Top twilight sky/hills -> Bottom glowing firefly meadow (Footer)
  const videoY = useTransform(smoothProgress, [0, 1], ["0%", "-39.3%"]);

  // Keep velvety obsidian-twilight richness consistent all the way into the footer (no pale fog washout)
  const contentScrimOpacity = useTransform(
    smoothProgress,
    [0, 0.72, 0.9, 1],
    [0.72, 0.68, 0.63, 0.58]
  );

  // Restrained bottom mist sheen matching upper twilight mood
  const bottomGlowOpacity = useTransform(smoothProgress, [0, 0.7, 1], [0.16, 0.22, 0.3]);

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

    // Pre-render 4 feathery dusk cloud sprites once for silky 60fps drawImage rendering
    const cloudSprites: HTMLCanvasElement[] = [
      createCloudSprite("twilight"),
      createCloudSprite("paleLavender"),
      createCloudSprite("duskRose"),
      createCloudSprite("horizonWarm"),
    ];

    // 2 subtle depth layers of wispy drifting sky clouds ("halka megh") strictly in upper sky zone
    const scaleFactor = width < 768 ? 0.65 : 1;
    const skyClouds: SkyCloud[] = [
      // Upper high-altitude twilight wisps (ultra-slow)
      {
        x: width * 0.04,
        yRatio: 0.06,
        w: 540 * scaleFactor,
        h: 175 * scaleFactor,
        speed: 0.14,
        alpha: 0.34,
        spriteIdx: 0,
        bobPhase: 0.4,
        bobSpeed: 0.004,
      },
      {
        x: width * 0.48,
        yRatio: 0.11,
        w: 620 * scaleFactor,
        h: 190 * scaleFactor,
        speed: 0.11,
        alpha: 0.3,
        spriteIdx: 1,
        bobPhase: 2.1,
        bobSpeed: 0.0035,
      },
      {
        x: width * 0.84,
        yRatio: 0.05,
        w: 480 * scaleFactor,
        h: 155 * scaleFactor,
        speed: 0.16,
        alpha: 0.28,
        spriteIdx: 0,
        bobPhase: 4.0,
        bobSpeed: 0.0045,
      },
      // Lower dusk horizon wisps right above the mountain silhouettes (slightly warmer & closer)
      {
        x: width * 0.16,
        yRatio: 0.28,
        w: 680 * scaleFactor,
        h: 210 * scaleFactor,
        speed: 0.24,
        alpha: 0.36,
        spriteIdx: 2,
        bobPhase: 1.2,
        bobSpeed: 0.005,
      },
      {
        x: width * 0.62,
        yRatio: 0.32,
        w: 640 * scaleFactor,
        h: 195 * scaleFactor,
        speed: 0.28,
        alpha: 0.34,
        spriteIdx: 3,
        bobPhase: 3.4,
        bobSpeed: 0.0042,
      },
      {
        x: -width * 0.18,
        yRatio: 0.22,
        w: 560 * scaleFactor,
        h: 180 * scaleFactor,
        speed: 0.2,
        alpha: 0.3,
        spriteIdx: 1,
        bobPhase: 5.1,
        bobSpeed: 0.0048,
      },
    ];

    // Minimal distant night stars strictly in upper dark sky
    const starCount = width < 768 ? 24 : 40;
    const stars: DistantStar[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.34,
      r: Math.random() * 1.0 + 0.35,
      alpha: Math.random() * 0.38 + 0.14,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.004,
    }));

    // Continuous living golden fireflies & soft twilight mist embers across the entire site & footer
    const fireflyCount = width < 768 ? 18 : 30;
    const fireflies: Firefly[] = Array.from({ length: fireflyCount }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: -(Math.random() * 0.2 + 0.07),
      r: Math.random() * 1.85 + 0.95,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.016 + 0.008,
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

        // 1. Subtle upper-sky pinpoint stars
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

        // 2. Live Drifting Twilight Sky Clouds ("Halka Megh") — Scoped cleanly to top sky zone
        const scrollRatio = scrollYProgress.get();
        const skyFade = Math.max(0, Math.min(1, 1 - scrollRatio * 2.1));
        if (skyFade > 0.01) {
          ctx.save();
          for (let i = 0; i < skyClouds.length; i++) {
            const c = skyClouds[i];
            if (!prefersReducedMotion) {
              c.x += c.speed;
              if (c.x > width + 60) {
                c.x = -c.w - 60;
              }
            }
            const bobY = prefersReducedMotion
              ? 0
              : Math.sin(tick * c.bobSpeed + c.bobPhase) * 4;
            ctx.globalAlpha = c.alpha * skyFade;
            ctx.drawImage(
              cloudSprites[c.spriteIdx],
              c.x,
              height * c.yRatio + bobY,
              c.w,
              c.h
            );
          }
          ctx.restore();
        }

        // 3. Subtle interactive cursor twilight warmth
        if (mouseRef.current.active && isFinePointer) {
          const { x: mx, y: my } = mouseRef.current;
          const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 210);
          halo.addColorStop(0, "rgba(139, 155, 247, 0.055)");
          halo.addColorStop(0.5, "rgba(245, 196, 81, 0.02)");
          halo.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(mx, my, 210, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Calm, slow-rising warm fireflies flowing uninterrupted across page & footer
        for (let i = 0; i < fireflies.length; i++) {
          const f = fireflies[i];

          if (!prefersReducedMotion) {
            f.x += f.vx + Math.sin(tick * f.swaySpeed + f.phase) * f.swayAmp;
            f.y += f.vy;

            if (mouseRef.current.active && isFinePointer) {
              const dx = f.x - mouseRef.current.x;
              const dy = f.y - mouseRef.current.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 115 && dist > 1) {
                const push = ((115 - dist) / 115) * 0.26;
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

          const breath = prefersReducedMotion
            ? 0.72
            : 0.28 + 0.72 * Math.pow(0.5 + 0.5 * Math.sin(tick * f.pulseSpeed + f.phase), 1.5);

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
              ? "255, 206, 98"
              : f.kind === "amber"
              ? "245, 182, 78"
              : "165, 178, 255";

          const haloR = f.r * 5.8;
          const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, haloR);
          grad.addColorStop(0, `rgba(${rgb}, ${(0.8 * finalAlpha).toFixed(3)})`);
          grad.addColorStop(0.32, `rgba(${rgb}, ${(0.24 * finalAlpha).toFixed(3)})`);
          grad.addColorStop(1, `rgba(${rgb}, 0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(f.x, f.y, haloR, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 248, 228, ${(0.9 * finalAlpha).toFixed(3)})`;
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
  }, [scrollYProgress]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080D] select-none"
      aria-hidden="true"
    >
      {/* 1. Single Unified Panoramic Twilight Meadow Video (Runs seamlessly behind EVERY page + Footer) */}
      <motion.div
        className="absolute inset-x-0 top-0 w-full will-change-transform"
        style={{
          height: "165vh",
          y: mounted ? videoY : "0%",
        }}
      >
        <video
          className="w-full h-full object-cover object-bottom"
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4d01c727-d9c5-47c8-a778-35a451ffd39f.mp4"
          poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261014_121838_c97d0940-f430-4304-8573-4f47ee44f447.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* 2. Scroll-Linked Dynamic Atmospheric Veil */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: mounted ? contentScrimOpacity : 0.7,
          background:
            "linear-gradient(to bottom, rgba(7, 8, 13, 0.92) 0%, rgba(7, 9, 16, 0.78) 42%, rgba(7, 9, 16, 0.65) 78%, rgba(7, 8, 13, 0.55) 100%)",
        }}
      />

      {/* 3. Subtle Continuous Top-to-Bottom Depth Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7, 8, 13, 0.48) 0%, transparent 18%, transparent 78%, rgba(7, 8, 13, 0.62) 100%)",
        }}
      />

      {/* 4. Soft Drifting Twilight Mist Ribbon */}
      <motion.div
        className="absolute inset-x-0 bottom-[-10%] h-[52vh] pointer-events-none animate-cloud-drift"
        style={{
          opacity: mounted ? bottomGlowOpacity : 0.25,
          background:
            "radial-gradient(ellipse 78% 58% at 50% 84%, rgba(139, 155, 247, 0.26) 0%, rgba(184, 194, 242, 0.08) 48%, transparent 80%)",
        }}
      />

      {/* 5. Gentle Editorial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 84% 72% at 50% 40%, transparent 32%, rgba(6, 7, 12, 0.5) 100%)",
        }}
      />

      {/* 6. Unified 60fps Live Sky Clouds, Fireflies & Pinpoint Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 7. Subtle Top Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/35 to-transparent" />
    </div>
  );
}
