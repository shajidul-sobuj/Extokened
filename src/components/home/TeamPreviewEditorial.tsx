"use client";

import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function TeamPreviewEditorial() {
  return (
    <section className="py-20 md:py-28 border-b border-[#1E2337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E2337]">
            <div className="space-y-2 max-w-xl">
              <span className="pill-lavender">Squad Roster</span>
              <h2 className="font-section-title font-semibold text-white">
                The Builders Behind Extokened
              </h2>
              <p className="text-sm text-[#BAC0DC] leading-relaxed">
                A synchronized permanent unit. Complementary domain mastery, shared accountability, and zero role confusion.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#8B9BF7] transition-colors"
            >
              <span>Full team capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>

        {/* 4 Portrait Editorial Tiles with Stagger */}
        <MotionStagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <MotionItem key={member.slug}>
              <div 
                className="meadow-card p-6 bg-[#0F1118] border border-[#1E2337] flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] h-full hover:border-[#2B324E] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Avatar with consistent crop */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#151824] border border-[#1E2337] group-hover:border-[#8B9BF7]/50 transition-colors">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#B8C0EC] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#8B9BF7] font-mono mt-0.5 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Focus Areas */}
                  <div className="space-y-1 pt-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#727896]">
                      Focus
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.focusAreas.slice(0, 2).map((area) => (
                        <span key={area} className="tech-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Social Links & Podiums */}
                <div className="pt-4 border-t border-[#1E2337] flex items-center justify-between text-xs font-mono text-[#727896]">
                  <span>{member.stats.trophies} Podiums</span>
                  <div className="flex items-center gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8B9BF7] transition-colors"
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
                        className="hover:text-[#8B9BF7] transition-colors"
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
