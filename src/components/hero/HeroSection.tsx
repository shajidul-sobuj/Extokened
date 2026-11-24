"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#292B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 7/5 Editorial Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6F36A]" />
              <span className="eyebrow-label">
                Independent Technology Team
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-hero-display font-semibold text-[#F3F1EC]">
              We build what we{" "}
              <span className="text-[#C6F36A]">imagine.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#AAA9A3] leading-relaxed max-w-2xl font-sans">
              Extokened is a team of builders exploring ideas, competing in hackathons, and turning practical problems into working products.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-primary"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/hackathons"
                className="btn-secondary"
              >
                <Trophy className="w-4 h-4 text-[#E8B86D]" />
                <span>Our hackathon journey</span>
              </Link>
            </div>
          </div>

          {/* Right 5 Columns: Art-directed Typographic / Technical Composition */}
          <div className="lg:col-span-5">
            <div className="editorial-card p-8 bg-[#111214] border border-[#292B2E] relative overflow-hidden space-y-6">
              
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-4 border-b border-[#292B2E] text-xs font-mono">
                <span className="text-[#777873]">EXTOKENED / SPEC 0.1</span>
                <span className="text-[#C6F36A] font-semibold">EST. 2023</span>
              </div>

              {/* Large Typographic Monogram */}
              <div className="py-6 text-center border-y border-[#292B2E]/60">
                <div className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-[#F3F1EC]">
                  &lt;EXT/&gt;
                </div>
                <div className="text-xs font-mono text-[#777873] mt-2 uppercase tracking-widest">
                  Autonomous AI • Resilient Web • Systems
                </div>
              </div>

              {/* Engineering Blueprint Summary */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center text-[#AAA9A3]">
                  <span className="text-[#777873]">Core Focus:</span>
                  <span className="text-[#F3F1EC]">Multimodal Systems &amp; Web</span>
                </div>
                <div className="flex justify-between items-center text-[#AAA9A3]">
                  <span className="text-[#777873]">Sprint Cadence:</span>
                  <span className="text-[#F3F1EC]">24–48h Rapid Prototyping</span>
                </div>
                <div className="flex justify-between items-center text-[#AAA9A3]">
                  <span className="text-[#777873]">Verification:</span>
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
