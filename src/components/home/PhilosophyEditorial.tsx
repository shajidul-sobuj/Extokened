"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Target, Flame, Users } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

const principleIcons = [Target, Flame, Users];

export function PhilosophyEditorial() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 5 Columns: Crisp Open Editorial Statement */}
          <MotionReveal direction="left" className="lg:col-span-5 space-y-5">
            <span className="eyebrow-badge">How We Work</span>

            <h2 className="font-section-title font-bold text-white">
              How Extokened{" "}
              <span className="font-hero-serif text-[1.16em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Builds
              </span>
            </h2>

            <p className="text-sm sm:text-[15.5px] text-[#D0D8F2] leading-[1.72] max-w-md">
              We skip pitch-deck hype. Every sprint starts with clean contracts and ends with working, live-tested software built by a permanent four-engineer squad.
            </p>

            <div className="pt-1">
              <Link
                href="/about"
                className="btn-secondary py-2.5 px-5 text-xs sm:text-sm group"
              >
                <span>About the team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </MotionReveal>

          {/* Right 7 Columns: Single Sculpted 3-Row Liquid-Glass Card */}
          <MotionReveal direction="right" delay={0.08} className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-[20px] border border-white/[0.14] shadow-[0_24px_60px_-22px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.18)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(16, 21, 38, 0.42) 0%, rgba(10, 13, 24, 0.7) 100%)",
                backdropFilter: "blur(22px) saturate(155%)",
                WebkitBackdropFilter: "blur(22px) saturate(155%)",
              }}
            >
              {/* Top Specular Edge */}
              <div
                className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                aria-hidden="true"
              />

              <MotionStagger stagger={0.07} className="divide-y divide-white/[0.08]">
                {siteConfig.principles.map((principle, idx) => {
                  const Icon = principleIcons[idx] || Target;
                  return (
                    <MotionItem key={idx} distance={10}>
                      <div className="group relative flex items-start gap-4 sm:gap-5 px-5 sm:px-7 py-5 sm:py-6 hover:bg-white/[0.04] transition-colors duration-200">
                        {/* Subtle Left Hover Accent Bar */}
                        <span
                          className="pointer-events-none absolute left-0 top-4 bottom-4 w-[2.5px] rounded-r-full bg-gradient-to-b from-[#A5B2FF] to-[#F5C451] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          aria-hidden="true"
                        />

                        {/* Index & Icon */}
                        <div className="flex items-center gap-3 shrink-0 pt-0.5">
                          <span className="text-xs font-mono font-semibold text-[#8F99B8] group-hover:text-[#A5B2FF] transition-colors">
                            0{idx + 1}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.12] group-hover:border-[#A5B2FF]/45 flex items-center justify-center text-[#A5B2FF] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Title & Concise Copy */}
                        <div className="space-y-1 min-w-0">
                          <h3 className="text-base sm:text-[17px] font-display font-bold tracking-tight text-white group-hover:text-[#C4CEFF] transition-colors">
                            {principle.title}
                          </h3>
                          <p className="text-[13px] sm:text-sm text-[#CFD7F2] leading-[1.65]">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </MotionItem>
                  );
                })}
              </MotionStagger>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
