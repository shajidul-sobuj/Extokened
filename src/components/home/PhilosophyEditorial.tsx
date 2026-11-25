"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Target, Flame, Users } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

const principleMeta = [
  { icon: Target, tag: "Real-world friction only" },
  { icon: Flame, tag: "18 competitive sprints tested" },
  { icon: Users, tag: "Zero slide-only demos" },
];

const sprintCadence = [
  { phase: "01", window: "Hr 00–04", label: "Contract & API Schema Freeze" },
  { phase: "02", window: "Hr 04–30", label: "Parallel AI & Full-Stack Build" },
  { phase: "03", window: "Hr 30–42", label: "Edge Stress-Test & Telemetry" },
  { phase: "04", window: "Hr 42–48", label: "Live Production Stage Demo" },
];

export function PhilosophyEditorial() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Unified Top Header Bar */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-white/[0.1]">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow-badge">Operating Philosophy</span>
              <h2 className="font-section-title font-bold text-white">
                Real software over{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  speculative slides.
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#C8D0EC] leading-[1.68] max-w-xl">
                How a four-engineer squad maintains architectural clarity, clean contracts, and live reliability under 48-hour competition clocks.
              </p>
            </div>

            <Link
              href="/about"
              className="btn-secondary py-2 px-4 text-xs sm:text-[13px] shrink-0 group self-start md:self-auto"
            >
              <span>Read our 48-hour playbook</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </MotionReveal>

        {/* Structured Editorial Manifesto + 48-Hour Execution Cadence */}
        <MotionReveal delay={0.06}>
          <div className="surface-card p-6 sm:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 7 Cols: Editorial Pull-Statement & Context */}
              <div className="lg:col-span-7 space-y-4">
                <blockquote className="border-l-2 border-[#8B9BF7]/70 pl-5 space-y-2">
                  <p className="text-lg sm:text-xl font-display font-semibold text-white leading-[1.4] tracking-tight">
                    &ldquo;Every sprint begins with an explicit contract freeze and ends with live verified telemetry—never mockups.&rdquo;
                  </p>
                  <footer className="text-xs font-mono text-[#A5B2FF]">
                    — Extokened Engineering Charter · Est. 2023
                  </footer>
                </blockquote>

                <p className="text-sm text-[#CFD7F2] leading-[1.72] pl-5">
                  While most hackathon teams optimize for pitch decks, our permanent four-builder unit focuses on resilient web architectures, multimodal AI pipelines, and production-ready deployments that hold up under live judge scrutiny.
                </p>
              </div>

              {/* Right 5 Cols: 48-Hour Cadence Blueprint */}
              <div className="lg:col-span-5 surface-inset p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-[#8F99B8] pb-2 border-b border-white/[0.08]">
                  <span>48-Hour Sprint Cadence</span>
                  <span className="text-[#34D399]">Verified Flow</span>
                </div>

                <div className="space-y-2.5">
                  {sprintCadence.map((step) => (
                    <div
                      key={step.phase}
                      className="flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono font-bold text-[#8B9BF7] shrink-0">
                          {step.phase}
                        </span>
                        <span className="text-[#E4E9FF] font-medium truncate">
                          {step.label}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#8F99B8] shrink-0">
                        {step.window}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* 3 Compact, High-Craft Principle Cards */}
        <MotionStagger
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {siteConfig.principles.map((principle, idx) => {
            const meta = principleMeta[idx] || principleMeta[0];
            const Icon = meta.icon;

            return (
              <MotionItem key={idx} className="h-full">
                <article className="surface-card surface-card-interactive p-5 sm:p-6 flex flex-col justify-between gap-5 h-full group">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#8B9BF7]/10 border border-[#8B9BF7]/25 flex items-center justify-center text-[#A5B2FF] group-hover:border-[#A5B2FF]/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-[#8F99B8] tracking-wider">
                        0{idx + 1} / PRINCIPLE
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold tracking-tight text-white group-hover:text-[#B4C0FF] transition-colors">
                      {principle.title}
                    </h3>

                    <p className="text-[13px] sm:text-sm text-[#CFD7F2] leading-[1.68]">
                      {principle.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#A5B2FF]">
                    <span>{meta.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B9BF7]/70" />
                  </div>
                </article>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
