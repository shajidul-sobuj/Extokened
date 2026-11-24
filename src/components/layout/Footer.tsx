"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative bg-transparent overflow-hidden isolate border-t border-[#1E2337]/60 min-h-[680px] lg:min-h-[760px] flex flex-col justify-between pt-16 sm:pt-20 pb-0">
      
      {/* 1. Atmospheric Scrim so the brand block and link columns remain razor-sharp while the meadow shines through */}
      <div 
        className="footer__stage absolute inset-0 -z-10 pointer-events-none overflow-hidden" 
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, rgba(8, 9, 14, 0.85) 0%, rgba(8, 9, 14, 0.45) 35%, transparent 70%)"
        }} 
      />

      {/* 2. Giant Frosted-Glass EXTOKENED Wordmark Sinking into Fog */}
      <p className="footer__wordmark-glass" aria-hidden="true">
        EXTOKENED
      </p>

      {/* 3. Fog Layer at the Bottom Edge */}
      <div 
        className="footer__fog absolute inset-x-0 bottom-0 z-[15] h-[18%] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(184, 192, 236, 0.25) 0%, rgba(184, 192, 236, 0.12) 40%, rgba(184, 192, 236, 0) 100%)"
        }}
        aria-hidden="true" 
      />

      {/* 4. Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-32 sm:mb-36 md:mb-44 lg:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Brand Block (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            <Link 
              href="/" 
              className="brand__logo inline-flex items-center gap-3 group focus:outline-none"
              aria-label="Extokened home"
            >
              <span className="brand__mark w-8 h-8 rounded-lg bg-gradient-to-b from-[#252B44] to-[#0F1118] border border-[#8B9BF7]/35 flex items-center justify-center font-mono font-bold text-sm text-[#8B9BF7] group-hover:border-[#8B9BF7] group-hover:shadow-[0_0_14px_rgba(139,155,247,0.35)] transition-all">
                &lt;E/&gt;
              </span>
              <span className="font-display font-semibold text-xl tracking-tight text-white group-hover:text-[#B8C0EC] transition-colors">
                Extokened
              </span>
            </Link>

            <h2 className="brand__title text-lg sm:text-xl font-semibold tracking-tight text-white leading-snug">
              The calm squad for high-velocity software.
            </h2>

            <p className="brand__text text-xs sm:text-sm text-[#BAC0DC] leading-relaxed max-w-md font-sans">
              Extokened gathers full-stack architecture, generative AI agents, distributed telemetry, and sprint execution into one permanent engineering squad just a dispatch away.
            </p>

            <div>
              <Link 
                href="/contact"
                className="brand__cta inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#0F1118] border border-[#1E2337] text-white hover:bg-[#151824] hover:border-[#8B9BF7]/50 text-xs font-medium transition-all shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-[#8B9BF7]" />
                <span>Dispatch with Extokened</span>
              </Link>
            </div>

            <div className="space-y-1.5 pt-1 text-xs">
              <p className="brand__copy text-[#727896]">
                © {currentYear} Extokened · Made in Dhaka.
              </p>
              <p className="brand__by text-[#BAC0DC] flex items-center gap-1.5 text-xs">
                <span>Built with</span>
                <span className="brand__heart text-sm" aria-label="love">💙</span>
                <span>by</span>
                <span className="brand__author text-white font-medium inline-flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#1E2337] text-[9px] text-[#B8C0EC] flex items-center justify-center font-mono font-bold">
                    E
                  </span>
                  Extokened Squad
                </span>
              </p>
            </div>

            {/* Status Chips (Driftbar Spec Exact Structure) */}
            <ul className="brand__status flex flex-wrap gap-2 pt-2" aria-label="Extokened status">
              <li className="chip">
                <span className="chip__dot" aria-hidden="true" />
                <span>18 Hackathons Shipped</span>
              </li>
              <li className="chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 11a8 8 0 1 0-2.3 5.7" />
                  <path d="M20 4v7h-7" />
                </svg>
                <span>12 Podiums · 7 Championships</span>
              </li>
              <li className="chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8Z" />
                </svg>
                <span>100% Shipped Production Demos</span>
              </li>
            </ul>
          </div>

          {/* Link Columns (Right 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Menu */}
            <nav className="col space-y-4" aria-label="Menu">
              <h3 className="col__title text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Menu
              </h3>
              <ul className="col__list space-y-2.5 text-xs text-[#BAC0DC]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Tour &amp; Overview
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Project Showcase
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="hover:text-white transition-colors">
                    Hackathon Records
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Squad Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Engineers Roster
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Column 2: Essentials */}
            <nav className="col space-y-4" aria-label="Essentials">
              <h3 className="col__title text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Essentials
              </h3>
              <ul className="col__list space-y-2.5 text-xs text-[#BAC0DC]">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Direct Dispatch
                  </Link>
                </li>
                <li>
                  <Link href="/links" className="hover:text-white transition-colors">
                    Links Hub
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Notice
                  </Link>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub Org</span>
                    <ArrowUpRight className="w-3 h-3 text-[#727896]" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn Node</span>
                    <ArrowUpRight className="w-3 h-3 text-[#727896]" />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Column 3: From our squad */}
            <nav className="col space-y-4" aria-label="From our team">
              <h3 className="col__title text-xs font-mono font-semibold uppercase tracking-wider text-white">
                From our squad
              </h3>
              <ul className="col__list space-y-2.5 text-xs text-[#BAC0DC]">
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
                  <Link href="/hackathons/ai-horizon-2025" className="hover:text-white transition-colors">
                    AI Horizon 2025
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>

    </footer>
  );
}
