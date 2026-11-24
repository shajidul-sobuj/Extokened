"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1E2337] overflow-hidden">
      {/* Background twilight periwinkle glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B9BF7]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 7/5 Editorial Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill with Live Signal Dot */}
            <div className="chip py-1 px-3.5 h-auto text-xs font-mono inline-flex items-center gap-2">
              <span className="chip__dot" />
              <span>Independent Engineering Squad</span>
            </div>

            {/* Headline */}
            <h1 className="font-hero-display font-semibold text-white">
              We build what we{" "}
              <span className="text-[#8B9BF7] drop-shadow-[0_0_25px_rgba(139,155,247,0.35)]">imagine.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#BAC0DC] leading-relaxed max-w-2xl font-sans">
              Extokened is a team of builders exploring ideas, competing in hackathons, and turning practical problems into working products.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-meadow-dark"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/hackathons"
                className="btn-meadow-secondary"
              >
                <Trophy className="w-4 h-4 text-[#FFC857]" />
                <span>Our hackathon journey</span>
              </Link>
            </div>
          </div>

          {/* Right 5 Columns: Art-directed Typographic / Technical Composition */}
          <div className="lg:col-span-5">
            <div className="meadow-card p-8 bg-[#0F1118] border border-[#1E2337] relative overflow-hidden space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2337] text-xs font-mono">
                <span className="text-[#727896]">EXTOKENED / SPEC 0.1</span>
                <span className="text-[#8B9BF7] font-semibold">EST. 2023</span>
              </div>

              {/* Large Typographic Monogram */}
              <div className="py-6 text-center border-y border-[#1E2337]/60">
                <div className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(139,155,247,0.25)]">
                  &lt;EXT/&gt;
                </div>
                <div className="text-xs font-mono text-[#727896] mt-2 uppercase tracking-widest">
                  Autonomous AI • Resilient Web • Systems
                </div>
              </div>

              {/* Engineering Blueprint Summary */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center text-[#BAC0DC]">
                  <span className="text-[#727896]">Core Focus:</span>
                  <span className="text-white">Multimodal Systems &amp; Web</span>
                </div>
                <div className="flex justify-between items-center text-[#BAC0DC]">
                  <span className="text-[#727896]">Sprint Cadence:</span>
                  <span className="text-white">24–48h Rapid Prototyping</span>
                </div>
                <div className="flex justify-between items-center text-[#BAC0DC]">
                  <span className="text-[#727896]">Verification:</span>
                  <span className="text-[#2FB36A] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2FB36A]" />
                    Live Deployed Code Only
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
