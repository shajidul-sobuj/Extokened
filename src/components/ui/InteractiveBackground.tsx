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

// Deterministic periodic 2D hash so clouds tile seamlessly horizontally (mod periodX)
function periodicHash(ix: number, iy: number, periodX: number, seed: number): number {
  const wx = ((ix % periodX) + periodX) % periodX;
  let n = wx * 374761393 + iy * 668265263 + seed * 1442695041;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) >>> 0) / 4294967295;
}

function periodicValueNoise(
  x: number,
  y: number,
  periodX: number,
  seed: number
): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;

  // Quintic smoothstep interpolation for organic wispy curves (no blocky artifacts)
  const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
  const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);

  const a = periodicHash(ix, iy, periodX, seed);
  const b = periodicHash(ix + 1, iy, periodX, seed);
  const c = periodicHash(ix, iy + 1, periodX, seed);
  const d = periodicHash(ix + 1, iy + 1, periodX, seed);

  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function periodicFbm(
  u: number,
  v: number,
  basePeriodX: number,
  freqY: number,
  seed: number
): number {
  let value = 0;
  let amp = 0.52;
  let px = basePeriodX;
  let fy = freqY;
  let norm = 0;

  for (let o = 0; o < 5; o++) {
    value += amp * periodicValueNoise(u * px, v * fy, px, seed + o * 31);
    norm += amp;
    px *= 2;
    fy *= 2;
    amp *= 0.5;
  }

  return value / norm;
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Generates a 100% seamlessly horizontally-tileable, realistic wispy twilight cloud layer
 * using 5-octave periodic Fractal Brownian Motion (fBm) noise — zero circular blob shapes.
 */
function createRealisticCloudTile(options: {
  width: number;
  height: number;
  basePeriodX: number;
  freqY: number;
  seed: number;
  thresholdLow: number;
  thresholdHigh: number;
  maxAlpha: number;
  topRgb: [number, number, number];
  bottomRgb: [number, number, number];
}): HTMLCanvasElement {
  const {
    width,
    height,
    basePeriodX,
    freqY,
    seed,
    thresholdLow,
    thresholdHigh,
    maxAlpha,
    topRgb,
    bottomRgb,
  } = options;

  const tile = document.createElement("canvas");
  tile.width = width;
  tile.height = height;
  const ctx = tile.getContext("2d");
  if (!ctx) return tile;

  const img = ctx.createImageData(width, height);
  const data = img.data;

  for (let y = 0; y < height; y++) {
    const v = y / height;
    // Soft vertical envelope so cloud band fades organically at top & bottom edges
    const vertFade = smoothstep(0.0, 0.28, v) * (1 - smoothstep(0.68, 1.0, v));

    // Blend subtle twilight sky color from upper cool tone to lower dusk backlit tone
    const rBase = topRgb[0] + (bottomRgb[0] - topRgb[0]) * v;
    const gBase = topRgb[1] + (bottomRgb[1] - topRgb[1]) * v;
    const bBase = topRgb[2] + (bottomRgb[2] - topRgb[2]) * v;

    for (let x = 0; x < width; x++) {
      const u = x / width;

      // Domain warp slightly for wind-sheared cirrus/stratus Realism
      const warp = periodicFbm(u + 0.37, v * 0.8 + 0.19, basePeriodX, freqY * 0.7, seed + 101);
      const n = periodicFbm(
        u + (warp - 0.5) * 0.12,
        v + (warp - 0.5) * 0.16,
        basePeriodX,
        freqY,
        seed
      );

      // Carve crisp clear starry sky gaps and delicate wispy cloud tendrils
      const density = smoothstep(thresholdLow, thresholdHigh, n);
      const wispy = Math.pow(density, 1.35) * vertFade;

      // Subtle rim-highlight variation inside thicker cloud veins
      const sheen = 0.82 + 0.28 * density;
      const idx = (y * width + x) * 4;
      data[idx] = Math.min(255, Math.round(rBase * sheen));
      data[idx + 1] = Math.min(255, Math.round(gBase * sheen));
      data[idx + 2] = Math.min(255, Math.round(bBase * sheen));
      data[idx + 3] = Math.round(wispy * maxAlpha * 255);
    }
  }

  ctx.putImageData(img, 0, 0);
  return tile;
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

    // Generate 2 photorealistic periodic fBm wispy twilight cloud strata ONCE (blazing fast 60fps drawImage)
    // Layer A: High-altitude thin twilight indigo-violet cirrus wisps
    const highCloudTile = createRealisticCloudTile({
      width: 360,
      height: 110,
      basePeriodX: 4,
      freqY: 6,
      seed: 17,
      thresholdLow: 0.5,
      thresholdHigh: 0.82,
      maxAlpha: 0.16,
      topRgb: [108, 122, 186],
      bottomRgb: [152, 134, 178],
    });

    // Layer B: Lower dusk-horizon stratus wisps right above the mountain silhouettes (subtle backlit rose-amber)
    const horizonCloudTile = createRealisticCloudTile({
      width: 360,
      height: 110,
      basePeriodX: 3,
      freqY: 7,
      seed: 83,
      thresholdLow: 0.48,
      thresholdHigh: 0.8,
      maxAlpha: 0.2,
      topRgb: [148, 126, 172],
      bottomRgb: [212, 152, 148],
    });

    let highOffsetX = 0;
    let horizonOffsetX = 0;

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

        // 2. Photorealistic Seamlessly-Tiling fBm Twilight Cloud Strata (Top Sky Zone Only)
        const scrollRatio = scrollYProgress.get();
        const skyFade = Math.max(0, Math.min(1, 1 - scrollRatio * 2.15));
        if (skyFade > 0.01) {
          const tileDrawW = Math.max(width * 1.25, 1280);
          const highBandH = Math.max(height * 0.42, 240);
          const horizonBandH = Math.max(height * 0.34, 210);

          if (!prefersReducedMotion) {
            highOffsetX = (highOffsetX + 0.14) % tileDrawW;
            horizonOffsetX = (horizonOffsetX + 0.24) % tileDrawW;
          }

          ctx.save();
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";

          // High sky wispy cirrus veil
          ctx.globalAlpha = skyFade;
          const x1 = highOffsetX - tileDrawW;
          ctx.drawImage(highCloudTile, x1, height * 0.02, tileDrawW, highBandH);
          ctx.drawImage(highCloudTile, x1 + tileDrawW, height * 0.02, tileDrawW, highBandH);

          // Dusk ridge wispy stratus veil (blends organically into the video's sunset horizon)
          const x2 = horizonOffsetX - tileDrawW;
          ctx.drawImage(horizonCloudTile, x2, height * 0.26, tileDrawW, horizonBandH);
          ctx.drawImage(horizonCloudTile, x2 + tileDrawW, height * 0.26, tileDrawW, horizonBandH);

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

      {/* 6. Unified 60fps Realistic fBm Sky Clouds, Fireflies & Pinpoint Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 7. Subtle Top Horizon Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/35 to-transparent" />
    </div>
  );
}
