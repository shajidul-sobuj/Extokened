"use client";

import React from "react";
import { TeamMember } from "@/data/team";
import { 
  Coffee, 
  Trophy, 
  Zap, 
  Code2 
} from "lucide-react";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group">
      {/* Background ambient corner glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-cyber-cyan/5 rounded-full blur-2xl group-hover:bg-cyber-cyan/15 transition-all duration-300 pointer-events-none" />

      {/* Top Header */}
      <div className="space-y-4">
        {/* Avatar & Role Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#161B22] border-2 border-cyber-cyan/40 p-1 shadow-md shadow-cyber-cyan/10 group-hover:border-cyber-cyan transition-colors">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-2 -right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black border border-white/20 text-white">
              {member.stats.trophies} 🏆
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-cyber-cyan">
            {member.badge}
          </span>
        </div>

        {/* Member Name & Role */}
        <div>
          <h3 className="font-display text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-0.5">
            {member.role}
          </p>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Superpower Box */}
        <div className="p-3 rounded-xl bg-[#141820] border border-white/5 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-300 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Hackathon Superpower</span>
          </div>
          <p className="text-xs text-zinc-300 leading-snug">
            {member.superpower}
          </p>
        </div>

        {/* Specialties Tags */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
            Specialized Arsenal
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.specialties.map((spec) => (
              <span
                key={spec}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/5"
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
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-[140px] text-[11px]">{member.hackathonFuel}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>{member.stats.linesOfCode} shipped</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-1">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
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
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#1DA1F2]/20 text-zinc-400 hover:text-[#1DA1F2] transition-colors"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
