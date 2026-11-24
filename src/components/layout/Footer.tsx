"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Terminal, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative bg-[#08090E]/85 backdrop-blur-xl border-t border-[#1E2337] overflow-hidden pt-16 sm:pt-20 pb-8 isolate">
      
      {/* 1. Subtle Atmospheric Twilight Background */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" 
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, rgba(8, 9, 14, 0.75) 0%, rgba(13, 16, 28, 0.85) 60%, rgba(8, 9, 14, 0.98) 100%)"
        }} 
      />

      {/* 2. Delicate Background Ambient Watermark */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-12 -z-10 font-bold font-display uppercase tracking-wider text-white/[0.04] pointer-events-none select-none whitespace-nowrap text-[clamp(3.5rem,15vw,16rem)] leading-none"
        aria-hidden="true"
      >
        EXTOKENED
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-12 sm:space-y-16">
        
        {/* 3. Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Brand Block (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-5">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 group focus:outline-none"
              aria-label="Extokened home"
            >
              <div className="w-10 h-10 rounded-xl glass-panel-inset p-1 flex items-center justify-center group-hover:border-[#8B9BF7]/60 group-hover:shadow-[0_0_18px_rgba(139,155,247,0.4)] transition-all overflow-hidden shrink-0">
                <img
                  src="/images/extokened-logo-glow.png"
                  alt="Extokened Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(139,155,247,0.4)] group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white group-hover:text-[#B8C0EC] transition-colors">
                Extokened
              </span>
            </Link>

            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white leading-snug">
              The calm squad for high-velocity software.
            </h2>

            <p className="text-xs sm:text-sm text-[#BAC0DC] leading-relaxed max-w-md font-sans">
              Extokened gathers full-stack architecture, generative AI agents, distributed telemetry, and sprint execution into one permanent engineering squad just a dispatch away.
            </p>

            <div className="pt-1">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-[#0F1118] border border-[#1E2337] text-white hover:bg-[#151824] hover:border-[#8B9BF7]/50 text-xs font-medium transition-all shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-[#8B9BF7]" />
                <span>Dispatch with Extokened</span>
              </Link>
            </div>
          </div>

          {/* Link Columns (Right 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 lg:pt-0">
            
            {/* Column 1: Menu */}
            <nav className="space-y-4" aria-label="Menu">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Menu
              </h3>
              <ul className="space-y-2.5 text-xs text-[#BAC0DC]">
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
            <nav className="space-y-4" aria-label="Essentials">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Essentials
              </h3>
              <ul className="space-y-2.5 text-xs text-[#BAC0DC]">
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
            <nav className="space-y-4 col-span-2 sm:col-span-1" aria-label="From our team">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                From our squad
              </h3>
              <ul className="space-y-2.5 text-xs text-[#BAC0DC]">
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

        {/* 4. Bottom Horizontal Bar: 2 Sides ("2 pashe arki") */}
        <div className="pt-8 border-t border-[#1E2337] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#727896]">
          {/* Left Side: Copyright */}
          <div>
            © {currentYear} Extokened · Made in Dhaka.
          </div>

          {/* Right Side: Built with love by Extokened Squad */}
          <div className="flex items-center gap-1.5 text-[#BAC0DC]">
            <span>Built with</span>
            <span className="text-[#8B9BF7] text-sm animate-pulse" aria-label="love">💙</span>
            <span>by</span>
            <span className="text-white font-medium inline-flex items-center gap-1.5 ml-0.5">
              <span className="w-4 h-4 rounded-full bg-[#1E2337] text-[9px] text-[#B8C0EC] flex items-center justify-center font-mono font-bold">
                E
              </span>
              Extokened Squad
            </span>
          </div>
        </div>

      </div>

    </footer>
  );
}
