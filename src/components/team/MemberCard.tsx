"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { Github, Linkedin } from "@/components/ui/Icons";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="surface-card surface-card-interactive p-6 flex flex-col justify-between gap-6 group h-full">
      <div className="space-y-5">
        {/* Handle & Role Badge */}
        <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-white/[0.08]">
          <span className="text-xs font-mono text-[#7D87A6] truncate">@{member.slug}</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#8B9BF7]/10 text-[#A5B2FF] border border-[#8B9BF7]/25 shrink-0">
            {member.badge}
          </span>
        </div>

        {/* Portrait & Identity */}
        <div className="space-y-3.5">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#0A0D16] border border-white/[0.1] shrink-0">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-[#A5B2FF] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-[#8B9BF7] mt-1 font-mono leading-snug">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-[#B4BDD8] leading-relaxed line-clamp-3">
          {member.bio}
        </p>

        {/* Focus Areas */}
        <div className="space-y-2 pt-1">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#7D87A6]">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {member.focusAreas.map((area) => (
              <span key={area} className="tech-tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Stats & Social Links */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
        <div className="text-xs font-mono text-[#7D87A6]">
          <span className="text-white font-semibold">{member.stats.trophies}</span> Podiums
        </div>

        <div className="flex items-center gap-2">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
              title="GitHub"
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
              className="w-8 h-8 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#9BA5C4] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
              title="LinkedIn"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
