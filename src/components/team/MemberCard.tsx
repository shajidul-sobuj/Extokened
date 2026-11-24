"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { 
  Coffee, 
  Trophy, 
  Zap, 
  Code2,
  ShieldCheck,
  Fingerprint
} from "lucide-react";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";
import { HoloCard } from "@/components/ui/HoloCard";
import { playHover, playClick } from "@/lib/sound";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  const getCallsign = () => {
    if (member.id === "sobuj") return "LEAD_ARCHITECT";
    if (member.id === "ai-engineer") return "MODEL_ALCHEMIST";
    if (member.id === "backend-systems") return "CONCURRENCY_MASTER";
    return "INTERFACE_SORCERESS";
  };

  const getClearance = () => {
    if (member.id === "sobuj") return "ALPHA-01";
    if (member.id === "ai-engineer") return "ALPHA-02";
    if (member.id === "backend-systems") return "ALPHA-03";
    return "ALPHA-04";
  };

  return (
    <HoloCard variant="cyan" className="p-6 sm:p-7 flex flex-col justify-between group font-mono">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Callsign & Clearance Badge */}
        <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-white/10 pb-3">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>ID: {getClearance()}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 font-bold">
            {getCallsign()}
          </span>
        </div>

        {/* Avatar & Title */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#161B22] border-2 border-cyan-500/40 p-1 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded text-[9px] font-bold bg-black border border-amber-400 text-amber-300">
              {member.stats.trophies}🏆
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-zinc-400 font-sans mt-0.5 font-medium">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="font-sans text-xs text-zinc-300 leading-relaxed pt-1">
          {member.bio}
        </p>

        {/* Superpower Box */}
        <div className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>HACKATHON SUPERPOWER</span>
          </div>
          <p className="font-sans text-xs text-zinc-300 leading-snug">
            {member.superpower}
          </p>
        </div>

        {/* Arsenal Tags */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">
            Specialized Arsenal
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.specialties.map((spec) => (
              <span
                key={spec}
                className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-300 border border-white/5"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-5 mt-5 border-t border-white/5 space-y-3">
        {/* Fuel & Stats */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[130px] text-[11px] font-sans">{member.hackathonFuel}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{member.stats.linesOfCode}</span>
          </div>
        </div>

        {/* Social Links with Audio feedback */}
        <div className="flex items-center gap-2 pt-1">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label={`${member.name} GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#0A66C2]/20 text-zinc-400 hover:text-[#0A66C2] transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.socials.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 text-zinc-400 hover:text-[#1877F2] transition-colors"
              aria-label={`${member.name} Facebook`}
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#1DA1F2]/20 text-zinc-400 hover:text-[#1DA1F2] transition-colors"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </HoloCard>
  );
}
