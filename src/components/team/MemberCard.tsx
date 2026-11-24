"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { 
  Trophy, 
  Terminal,
  Zap
} from "lucide-react";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="studio-card p-6 flex flex-col justify-between group transition-all duration-200 hover:border-zinc-500/50">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Role Badge & Member ID */}
        <div className="flex items-center justify-between text-xs pb-3 border-b border-[#253044]/60">
          <span className="text-[11px] font-mono text-[#22D3C5]">
            @{member.slug}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
            {member.badge}
          </span>
        </div>

        {/* Avatar & Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#151F2E] border border-[#253044] p-0.5 shrink-0">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-[#22D3C5] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-zinc-300 leading-relaxed font-sans line-clamp-3">
          {member.bio}
        </p>

        {/* Focus Areas */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-1">
            {member.focusAreas.map((area) => (
              <span
                key={area}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Stats & Socials */}
      <div className="pt-5 mt-5 border-t border-[#253044]/60 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-2 text-center py-2 bg-[#080B12]/80 rounded-lg border border-[#253044]/60">
          <div>
            <div className="text-sm font-bold font-mono text-white">
              {member.stats.hackathons}
            </div>
            <div className="text-[10px] text-zinc-500">
              Hackathons
            </div>
          </div>
          <div>
            <div className="text-sm font-bold font-mono text-amber-300">
              {member.stats.trophies}
            </div>
            <div className="text-[10px] text-zinc-500">
              Podiums
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-1">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-white transition-colors"
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
              className="p-1.5 rounded-md bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-[#0A66C2] transition-colors"
              title="LinkedIn"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-[#1877F2] transition-colors"
              title="Facebook"
              aria-label={`${member.name} Facebook`}
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-[#1DA1F2] transition-colors"
              title="Twitter"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
