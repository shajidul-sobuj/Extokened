"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#06070B] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Top Horizon Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/45 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 space-y-14">
        {/* Main 12-Column Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7] rounded-lg"
              aria-label="Extokened home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F1322] border border-[#8B9BF7]/25 p-1.5 flex items-center justify-center group-hover:border-[#8B9BF7]/55 transition-colors overflow-hidden shrink-0">
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
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#8B9BF7] mt-1 block">
                  Dhaka • Est. {siteConfig.establishedYear}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#9BA5C4] leading-relaxed max-w-md">
              An independent engineering and hackathon team designing, prototyping, and shipping resilient web systems, multimodal AI agents, and developer tooling.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0E1220] border border-white/[0.1] text-xs font-mono text-[#E2E7FA] hover:border-[#8B9BF7]/45 hover:text-white transition-colors"
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
                  className="w-9 h-9 rounded-lg bg-[#0E1220] border border-white/[0.1] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Extokened LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#0E1220] border border-white/[0.1] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Extokened Facebook"
                  className="w-9 h-9 rounded-lg bg-[#0E1220] border border-white/[0.1] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
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
              <ul className="space-y-3 text-sm text-[#9BA5C4]">
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
              <ul className="space-y-3 text-sm text-[#9BA5C4]">
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
              <ul className="space-y-3 text-sm text-[#9BA5C4]">
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
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#636D8E]" />
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
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#636D8E]" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Meta Bar (strictly separated, zero collision) */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D87A6]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
            <span>© {currentYear} Extokened</span>
            <span className="text-white/15">•</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center gap-2 text-[#9BA5C4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>Open for hackathon invites &amp; engineering sprints</span>
          </div>
        </div>
      </div>

      {/* Non-overlapping Monumental Wordmark Band in Normal Flow */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none pt-2 pb-1 flex justify-center border-t border-white/[0.04]"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold tracking-[-0.05em] leading-[0.82] whitespace-nowrap text-transparent bg-clip-text"
          style={{
            fontSize: "clamp(3.2rem, 15.5vw, 14rem)",
            backgroundImage:
              "linear-gradient(180deg, rgba(184, 194, 242, 0.16) 0%, rgba(139, 155, 247, 0.04) 75%, transparent 100%)",
          }}
        >
          EXTOKENED
        </span>
      </div>
    </footer>
  );
}
