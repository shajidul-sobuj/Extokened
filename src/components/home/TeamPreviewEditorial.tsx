"use client";

import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function TeamPreviewEditorial() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow-badge">Squad Roster</span>
              <h2 className="font-section-title font-bold text-white">
                The Builders Behind{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Extokened
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#C8D0EC] leading-[1.7]">
                A synchronized permanent unit. Complementary domain mastery, shared accountability, and zero role confusion.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A5B2FF] hover:text-white transition-colors shrink-0 group"
            >
              <span>Full team capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </MotionReveal>

        {/* 4 Equal-Height Portrait Tiles */}
        <MotionStagger
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <MotionItem key={member.slug} className="h-full">
              <div className="surface-card surface-card-interactive p-6 flex flex-col justify-between gap-6 h-full group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#0A0D16] border border-white/[0.1] shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#8B9BF7]/10 text-[#A5B2FF] border border-[#8B9BF7]/25">
                      {member.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-display font-bold text-white group-hover:text-[#A5B2FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#8B9BF7] font-mono mt-1 leading-snug">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#7D87A6]">
                      Primary Focus
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focusAreas.slice(0, 2).map((area) => (
                        <span key={area} className="tech-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#7D87A6]">
                  <span>
                    <strong className="text-white font-semibold">{member.stats.trophies}</strong>{" "}
                    Podiums
                  </span>
                  <div className="flex items-center gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#131726] border border-white/[0.08] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#131726] border border-white/[0.08] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
