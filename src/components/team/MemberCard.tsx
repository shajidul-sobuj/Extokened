"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="editorial-card p-6 bg-[#111214] border border-[#292B2E] flex flex-col justify-between group transition-all space-y-6">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Identifier & Badge */}
        <div className="flex items-center justify-between text-xs pb-3 border-b border-[#292B2E]">
          <span className="text-[11px] font-mono text-[#777873]">
            @{member.slug}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#191B1F] text-[#AAA9A3] border border-[#292B2E]">
            {member.badge}
          </span>
        </div>

        {/* Portrait & Identity */}
        <div className="space-y-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#191B1F] border border-[#292B2E] shrink-0">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-[#AAA9A3] mt-0.5 font-mono">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-[#777873] leading-relaxed font-sans line-clamp-3">
          {member.bio}
        </p>

        {/* Focus Areas */}
        <div className="space-y-1 pt-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#777873]">
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
      <div className="pt-4 border-t border-[#292B2E] flex items-center justify-between">
        <div className="text-xs font-mono text-[#777873]">
          <span className="text-[#F3F1EC] font-semibold">{member.stats.trophies}</span> Podiums
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-[#191B1F] border border-[#292B2E] text-[#AAA9A3] hover:text-[#F3F1EC] transition-colors"
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
              className="p-1.5 rounded bg-[#191B1F] border border-[#292B2E] text-[#AAA9A3] hover:text-[#F3F1EC] transition-colors"
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
