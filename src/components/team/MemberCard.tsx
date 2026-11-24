"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="meadow-card p-6 flex flex-col justify-between group space-y-6">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Identifier & Badge */}
        <div className="flex items-center justify-between text-xs pb-3 border-b border-[rgba(139,155,247,0.14)]">
          <span className="text-[11px] font-mono text-[#8E96B8]">
            @{member.slug}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#8B9BF7]/15 text-[#8B9BF7] border border-[#8B9BF7]/35 shadow-[0_0_10px_rgba(139,155,247,0.15)]">
            {member.badge}
          </span>
        </div>

        {/* Portrait & Identity */}
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-xl overflow-hidden glass-panel-inset shrink-0">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-[#8B9BF7] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-[#8B9BF7] mt-0.5 font-mono font-medium">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-[#BAC0DC] leading-relaxed font-sans line-clamp-3">
          {member.bio}
        </p>

        {/* Focus Areas */}
        <div className="space-y-1 pt-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#727896]">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-1">
            {member.focusAreas.map((area) => (
              <span key={area} className="tech-tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Stats & Socials */}
      <div className="pt-4 border-t border-[#1E2337] flex items-center justify-between">
        <div className="text-xs font-mono text-[#727896]">
          <span className="text-white font-semibold">{member.stats.trophies}</span> Podiums
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-[#8B9BF7] transition-colors"
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
              className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-[#8B9BF7] transition-colors"
              title="LinkedIn"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
