"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function PhilosophyEditorial() {
  return (
    <section className="py-20 md:py-28 border-b border-[#1E2337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Two-Column Editorial Statement Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 5 Columns: Large Statement */}
          <MotionReveal direction="left" className="lg:col-span-5 space-y-4">
            <span className="pill-lavender">Operating Philosophy</span>
            <h2 className="font-section-title font-semibold text-white leading-tight">
              We reject speculative slides. We ship verifiable software.
            </h2>
          </MotionReveal>

          {/* Right 7 Columns: Supporting Explanation */}
          <MotionReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-6 text-[#BAC0DC] text-sm sm:text-base leading-relaxed font-sans">
            <p>
              In competitive technology sprints, teams often optimize for flashy pitch decks. Extokened was founded on the opposite premise: deep engineering rigor, clean schema contracts, and genuine working software that holds up under scrutiny.
            </p>
            <p>
              Our permanent roster of four engineers bridges modern web architectures, multimodal AI agent workflows, and resilient distributed databases. Every sprint begins with an explicit contract freeze and ends with live verified telemetry.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#8B9BF7] transition-colors"
              >
                <span>Read our full origin &amp; 48-hour playbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionReveal>

        </div>

        {/* 3 Core Principles List with MotionStagger */}
        <MotionStagger stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[rgba(139,155,247,0.14)]">
          {siteConfig.principles.map((principle, idx) => (
            <MotionItem key={idx}>
              <div className="meadow-card p-6 space-y-3 h-full">
                <div className="text-xs font-mono font-bold text-[#8B9BF7]">
                  0{idx + 1} // PRINCIPLE
                </div>
                <h3 className="text-lg font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#CAD1F0] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

      </div>
    </section>
  );
}
