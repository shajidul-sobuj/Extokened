import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function TeamPreviewEditorial() {
  return (
    <section className="py-20 md:py-28 border-b border-[#2D221A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2D221A]">
          <div className="space-y-2 max-w-xl">
            <span className="pill-amber">Squad Roster</span>
            <h2 className="font-section-title font-semibold text-white">
              The Builders Behind Extokened
            </h2>
            <p className="text-sm text-[#ADADAD] leading-relaxed">
              A synchronized permanent unit. Complementary domain mastery, shared accountability, and zero role confusion.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#F0A24C] transition-colors"
          >
            <span>Full team capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Portrait Editorial Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.slug}
              className="editorial-card p-6 bg-[#141210] border border-[#2D221A] flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="space-y-4">
                {/* Avatar with consistent crop */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1D1814] border border-[#2D221A]">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name & Role (Always visible) */}
                <div>
                  <h3 className="text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#F0A24C] font-mono mt-0.5 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Focus Areas (Always visible) */}
                <div className="space-y-1 pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7D7D]">
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
              <div className="pt-4 border-t border-[#2D221A] flex items-center justify-between text-xs font-mono text-[#7D7D7D]">
                <span>{member.stats.trophies} Podiums</span>
                <div className="flex items-center gap-2">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F0A24C] transition-colors"
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
                      className="hover:text-[#F0A24C] transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
