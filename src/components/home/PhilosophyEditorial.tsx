"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function PhilosophyEditorial() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Two-Column Editorial Statement Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <MotionReveal direction="left" className="lg:col-span-5 space-y-4">
            <span className="eyebrow-badge">Operating Philosophy</span>
            <h2 className="font-section-title font-bold text-white">
              We reject speculative slides. We ship verifiable software.
            </h2>
          </MotionReveal>

          <MotionReveal
            direction="right"
            delay={0.1}
            className="lg:col-span-7 space-y-5 text-[#B4BDD8] text-sm sm:text-base leading-[1.75]"
          >
            <p>
              In competitive technology sprints, teams often optimize for flashy pitch decks. Extokened was founded on the opposite premise: deep engineering rigor, clean schema contracts, and genuine working software that holds up under scrutiny.
            </p>
            <p>
              Our permanent roster of four engineers bridges modern web architectures, multimodal AI agent workflows, and resilient distributed databases. Every sprint begins with an explicit contract freeze and ends with live verified telemetry.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors group"
              >
                <span>Read our full origin &amp; 48-hour playbook</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </MotionReveal>
        </div>

        {/* 3 Core Principles */}
        <MotionStagger
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/[0.08]"
        >
          {siteConfig.principles.map((principle, idx) => (
            <MotionItem key={idx} className="h-full">
              <div className="surface-card surface-card-interactive p-6 sm:p-7 space-y-3.5 h-full flex flex-col">
                <div className="text-xs font-mono font-semibold text-[#8B9BF7] tracking-wider">
                  0{idx + 1} / PRINCIPLE
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#A8B2CF] leading-relaxed">
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
