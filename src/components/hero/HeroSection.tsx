"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Layers, 
  Trophy, 
  Users, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Globe,
  Database
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Studio Radial Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#7C5CFF]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-[#22D3C5]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101724] border border-[#253044] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22D3C5] animate-pulse" />
          <span className="text-xs font-mono text-zinc-300">
            Independent Technology &amp; Hackathon Team
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-xs font-mono text-zinc-400">
            Est. {siteConfig.establishedYear}
          </span>
        </div>

        {/* Hero Headline & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              We build. We compete.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-[#A78BFA] to-[#22D3C5]">
                We create what&apos;s next.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              Extokened is an independent engineering team. We design, prototype, and ship software solutions under pressure—bridging multimodal AI reasoning, resilient web architectures, and practical developer tools.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] border border-[#7C5CFF]/60 shadow-lg shadow-[#7C5CFF]/20 hover:shadow-[#7C5CFF]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/50"
              >
                <Layers className="w-4 h-4 text-white/90" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </Link>

              <Link
                href="/hackathons"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-zinc-200 bg-[#101724] hover:bg-[#151F2E] border border-[#253044] hover:border-zinc-400/40 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Hackathon Record</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <span>About Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Editorial Blueprint Interactive Card */}
          <div className="lg:col-span-5">
            <div className="studio-card p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#253044]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF]" />
                  <span className="text-xs font-mono font-medium text-white uppercase tracking-wider">
                    Engineering Blueprint
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#22D3C5] bg-[#22D3C5]/10 px-2 py-0.5 rounded border border-[#22D3C5]/20">
                  Production Caliber
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-[#080B12]/80 border border-[#253044]/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#7C5CFF]" />
                      Model &amp; Reasoning Core
                    </span>
                    <span className="text-zinc-300 font-mono text-[11px]">Gemini 2.0 Flash</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Multimodal clinical vital anomaly classification &amp; autonomous reflection agents.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#080B12]/80 border border-[#253044]/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#22D3C5]" />
                      Frontend Experience
                    </span>
                    <span className="text-zinc-300 font-mono text-[11px]">Next.js 15 + App Router</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Server Components, zero-cumulative layout shift, and accessible design system.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#080B12]/80 border border-[#253044]/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-amber-400" />
                      Data &amp; Concurrency
                    </span>
                    <span className="text-zinc-300 font-mono text-[11px]">TimescaleDB + WebSockets</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Sub-20ms sensor telemetry ingestion with offline fallback state sync.
                  </p>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="mt-5 pt-4 border-t border-[#253044] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No throwaway slide decks</span>
                </span>
                <span className="text-zinc-500">Live code only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Proof Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-[#253044] grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.proofMetrics.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
