"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#2D221A] overflow-hidden">
      {/* Background warm amber glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#F0A24C]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 7/5 Editorial Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill */}
            <div className="pill-amber">
              <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
              <span>Independent Technology Team</span>
            </div>

            {/* Headline */}
            <h1 className="font-hero-display font-semibold text-white">
              We build what we{" "}
              <span className="text-[#F0A24C]">imagine.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#ADADAD] leading-relaxed max-w-2xl font-sans">
              Extokened is a team of builders exploring ideas, competing in hackathons, and turning practical problems into working products.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-amber-glass"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/hackathons"
                className="btn-secondary"
              >
                <Trophy className="w-4 h-4 text-[#F0A24C]" />
                <span>Our hackathon journey</span>
              </Link>
            </div>
          </div>

          {/* Right 5 Columns: Art-directed Typographic / Technical Composition */}
          <div className="lg:col-span-5">
            <div className="editorial-card p-8 bg-[#141210] border border-[#2D221A] relative overflow-hidden space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
              
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2D221A] text-xs font-mono">
                <span className="text-[#7D7D7D]">EXTOKENED / SPEC 0.1</span>
                <span className="text-[#F0A24C] font-semibold">EST. 2023</span>
              </div>

              {/* Large Typographic Monogram */}
              <div className="py-6 text-center border-y border-[#2D221A]/60">
                <div className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(240,162,76,0.2)]">
                  &lt;EXT/&gt;
                </div>
                <div className="text-xs font-mono text-[#7D7D7D] mt-2 uppercase tracking-widest">
                  Autonomous AI • Resilient Web • Systems
                </div>
              </div>

              {/* Engineering Blueprint Summary */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center text-[#ADADAD]">
                  <span className="text-[#7D7D7D]">Core Focus:</span>
                  <span className="text-white">Multimodal Systems &amp; Web</span>
                </div>
                <div className="flex justify-between items-center text-[#ADADAD]">
                  <span className="text-[#7D7D7D]">Sprint Cadence:</span>
                  <span className="text-white">24–48h Rapid Prototyping</span>
                </div>
                <div className="flex justify-between items-center text-[#ADADAD]">
                  <span className="text-[#7D7D7D]">Verification:</span>
                  <span className="text-[#74C69D] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#74C69D]" />
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
