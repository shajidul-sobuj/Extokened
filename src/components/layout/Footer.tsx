"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden isolate bg-transparent border-t border-white/[0.08]">
      {/* Soft Translucent Contrast Veil (Zero Duplicate Video — Melds 100% Seamlessly with Global Backdrop) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7, 8, 13, 0.45) 0%, rgba(7, 8, 13, 0.34) 38%, rgba(7, 8, 13, 0.08) 72%, rgba(7, 8, 13, 0.58) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top Horizon Hairline Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] max-w-[92vw] h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/45 to-transparent pointer-events-none z-20"
        aria-hidden="true"
      />

      {/* Foreground Content Container (Strictly Above Wordmark — Zero Overlap) */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-12 space-y-12">
        {/* Main 12-Column Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7] rounded-lg"
              aria-label="Extokened home"
            >
              <div className="w-10 h-10 rounded-xl glass-panel-inset p-1.5 flex items-center justify-center group-hover:border-[#8B9BF7]/55 transition-colors overflow-hidden shrink-0">
                <img
                  src="/images/extokened-logo-glow.png"
                  alt="Extokened"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-semibold text-lg tracking-tight text-white block leading-none">
                  Extokened
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#A5B2FF] mt-1 block">
                  Dhaka • Est. {siteConfig.establishedYear}
                </span>
              </div>
            </Link>

            <h2 className="text-lg sm:text-xl font-display font-semibold tracking-tight text-white leading-snug max-w-md">
              The calm squad for high-velocity software.
            </h2>

            <p className="text-sm text-[#CFD7F2] leading-relaxed max-w-md">
              Extokened brings full-stack architecture, multimodal AI agents, distributed telemetry, and hackathon execution into one permanent engineering unit.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B0F1D]/75 backdrop-blur-md border border-white/[0.14] text-xs font-mono text-[#E8ECFF] hover:border-[#8B9BF7]/55 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B9BF7]" />
                <span>{siteConfig.contactEmail}</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Extokened GitHub"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1D]/75 backdrop-blur-md border border-white/[0.14] flex items-center justify-center text-[#C2CBE6] hover:text-white hover:border-[#8B9BF7]/55 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Extokened LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1D]/75 backdrop-blur-md border border-white/[0.14] flex items-center justify-center text-[#C2CBE6] hover:text-white hover:border-[#8B9BF7]/55 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Extokened Facebook"
                  className="w-9 h-9 rounded-lg bg-[#0B0F1D]/75 backdrop-blur-md border border-white/[0.14] flex items-center justify-center text-[#C2CBE6] hover:text-white hover:border-[#8B9BF7]/55 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <nav className="space-y-4" aria-label="Explore">
              <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-white">
                Explore
              </h3>
              <ul className="space-y-3 text-sm text-[#CFD7F2]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About &amp; Playbook
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="hover:text-white transition-colors">
                    Hackathons
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Team Roster
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="space-y-4" aria-label="Selected Builds">
              <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-white">
                Selected Work
              </h3>
              <ul className="space-y-3 text-sm text-[#CFD7F2]">
                <li>
                  <Link href="/projects/pulse-ai" className="hover:text-white transition-colors">
                    PulseAI
                  </Link>
                </li>
                <li>
                  <Link href="/projects/gridsync" className="hover:text-white transition-colors">
                    GridSync
                  </Link>
                </li>
                <li>
                  <Link href="/projects/khashra" className="hover:text-white transition-colors">
                    Khashra
                  </Link>
                </li>
                <li>
                  <Link href="/projects/tokenkit-cli" className="hover:text-white transition-colors">
                    TokenKit CLI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hackathons/ai-horizon-2025"
                    className="hover:text-white transition-colors"
                  >
                    AI Horizon 2025
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="space-y-4 col-span-2 sm:col-span-1" aria-label="Connect">
              <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-white">
                Connect
              </h3>
              <ul className="space-y-3 text-sm text-[#CFD7F2]">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Direct Dispatch
                  </Link>
                </li>
                <li>
                  <Link href="/links" className="hover:text-white transition-colors">
                    Official Links Hub
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9BA5C4]" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9BA5C4]" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright & Status Bar — Frosted Readability over Continuous Meadow */}
        <div className="pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[#DCE2FF]">
            <span>© {currentYear} Extokened</span>
            <span className="text-white/25">•</span>
            <span>Made in Dhaka</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D18]/70 backdrop-blur-md border border-white/[0.14] text-[#E8ECFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>Built by Extokened Squad</span>
          </div>
        </div>
      </div>

      {/* Dedicated Device-Tailored Monumental Syne Frosted-Glass Stage (Zero Overlap, Zero GPU Glitch) */}
      <div
        className="relative z-10 w-full pt-8 sm:pt-12 lg:pt-14 pb-3 sm:pb-4 overflow-hidden select-none pointer-events-none"
        aria-hidden="true"
      >
        {/* Soft Twilight Lavender & Warm Horizon Mist Aura */}
        <div
          className="absolute inset-x-0 bottom-0 h-[90%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 78% 72% at 50% 88%, rgba(139, 155, 247, 0.26) 0%, rgba(245, 196, 81, 0.08) 38%, transparent 78%)",
          }}
        />

        {/* MOBILE (< 640px): Bold 2-Line Stacked Editorial Poster Lockup (EX / TOKENED) */}
        <div className="sm:hidden relative z-10 px-4 flex flex-col items-start gap-1">
          <div className="w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#A5B2FF]/75 mb-1">
            <span>23.81°N · 90.41°E</span>
            <span>DHAKA SQUAD</span>
          </div>

          <div className="w-full flex items-center gap-3">
            <span
              className="footer-wordmark-outline leading-[0.86]"
              style={{ fontSize: "clamp(3.4rem, 19vw, 5.2rem)" }}
            >
              EX
            </span>
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#A5B2FF]/50 via-[#F5C451]/45 to-transparent rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#F5C451]/80 shrink-0">
              EST. 23
            </span>
          </div>

          <span
            className="footer-wordmark-glass leading-[0.86] w-full"
            style={{ fontSize: "clamp(2.85rem, 13.4vw, 4.4rem)" }}
          >
            TOKENED
          </span>
        </div>

        {/* TABLET (640px – 1023px): Editorial Framed Wide Coordinate Wordmark */}
        <div className="hidden sm:flex lg:hidden relative z-10 px-6 flex-col items-center gap-3">
          <div className="w-full max-w-3xl flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.22em] text-[#A5B2FF]/70">
            <span>EXTOKENED COLLECTIVE</span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/20 via-[#8B9BF7]/35 to-white/20" />
            <span>DHAKA · 23.81°N 90.41°E</span>
          </div>

          <p
            className="footer-wordmark-glass m-0 text-center"
            style={{ fontSize: "clamp(3.6rem, 10.6vw, 6.4rem)" }}
          >
            EXTOKENED
          </p>
        </div>

        {/* DESKTOP (1024px+): Colossal Dual-Depth Liquid Frosted-Glass Syne Wordmark */}
        <div className="hidden lg:flex relative z-10 px-6 flex-col items-center">
          <div className="relative inline-flex items-center justify-center">
            {/* Subtle Offset Hollow Glass Rim Layer for 3D Sculptural Depth */}
            <span
              className="footer-wordmark-outline absolute inset-0 translate-y-[4px] opacity-40"
              style={{ fontSize: "clamp(5.4rem, 10.8vw, 11.8rem)" }}
            >
              EXTOKENED
            </span>

            {/* Primary Monumental Frosted Liquid-Glass Fill */}
            <p
              className="footer-wordmark-glass relative z-10 m-0 text-center"
              style={{ fontSize: "clamp(5.4rem, 10.8vw, 11.8rem)" }}
            >
              EXTOKENED
            </p>
          </div>
        </div>

        {/* Bottom Horizon Mist Veil (Sinks the bottom edge smoothly into twilight fog) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(7, 8, 13, 0.9) 0%, rgba(139, 155, 247, 0.14) 48%, transparent 100%)",
          }}
        />
      </div>
    </footer>
  );
}
