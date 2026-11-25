"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";
import { Github, Linkedin } from "@/components/ui/Icons";
import { Sparkles, Trophy, Code2, Flame } from "lucide-react";

interface MemberCardProps {
  member: TeamMember;
  index?: number;
  variant?: "home" | "full";
}

export function MemberCard({
  member,
  index = 0,
  variant = "full",
}: MemberCardProps) {
  const [spot, setSpot] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setSpot((prev) => ({ ...prev, active: false }));
  };

  const chipsToShow =
    variant === "home" ? member.focusAreas.slice(0, 3) : member.skills.slice(0, 5);

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="surface-card relative overflow-hidden p-5 sm:p-6 flex flex-col justify-between gap-5 group h-full border border-white/[0.12] hover:border-[#8B9BF7]/45 transition-colors duration-300"
    >
      {/* Interactive Cursor-Tracking Spotlight Sheen */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(139, 155, 247, 0.14), rgba(245, 196, 81, 0.04) 45%, transparent 72%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Luminous Hairline on Hover */}
      <div
        className="pointer-events-none absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-[#A5B2FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4">
        {/* Header Row: Portrait + Name/Role + Clean Single-Line Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-[#0A0E1C] border border-white/[0.14] group-hover:border-[#A5B2FF]/60 group-hover:shadow-[0_0_20px_rgba(139,155,247,0.3)] transition-all duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#34D399] border-2 border-[#0D101B]"
                title="Active Squad Member"
              />
            </div>

            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#7D87A6]">
                  0{index + 1}
                </span>
                <span className="text-[11px] font-mono text-[#7D87A6] truncate">
                  @{member.slug}
                </span>
              </div>
              <h3 className="text-lg sm:text-[1.2rem] font-display font-bold tracking-tight text-white group-hover:text-[#C0CAFF] transition-colors truncate">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-[#99A8FF] truncate">
                {member.role}
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#8B9BF7]/12 text-[#C2CCFF] border border-[#8B9BF7]/30 whitespace-nowrap shrink-0">
            {member.badge}
          </span>
        </div>

        {/* Mobile-only Specialty Pill (so nothing wraps awkwardly on tiny screens) */}
        <div className="sm:hidden">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#8B9BF7]/12 text-[#C2CCFF] border border-[#8B9BF7]/30">
            {member.badge}
          </span>
        </div>

        {/* Concise Bio */}
        <p className="text-[13px] sm:text-sm text-[#CFD7F2] leading-[1.65] line-clamp-2">
          {member.bio}
        </p>

        {/* Signature Superpower Highlight */}
        <div className="surface-inset px-3.5 py-2.5 flex items-start gap-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#F5C451] shrink-0 mt-0.5" />
          <p className="text-xs text-[#E4E9FF] leading-relaxed line-clamp-2">
            <span className="font-mono text-[#F5C451] font-semibold mr-1.5">
              Edge:
            </span>
            {member.superpower}
          </p>
        </div>

        {/* Focus / Core Stack Chips */}
        <div className="flex flex-wrap gap-1.5">
          {chipsToShow.map((chip) => (
            <span key={chip} className="tech-tag text-[11px] py-0.5 px-2.5">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Telemetry Strip + Social Links */}
      <div className="relative z-10 pt-4 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs font-mono text-[#9BA5C4]">
          <span className="inline-flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-[#F5C451]" />
            <strong className="text-white font-semibold tabular-nums">
              {member.stats.trophies}
            </strong>
            <span>Wins</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#8B9BF7]" />
            <strong className="text-white font-semibold tabular-nums">
              {member.stats.hackathons}
            </strong>
            <span>Hackathons</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#34D399]" />
            <strong className="text-white font-semibold tabular-nums">
              {member.stats.linesOfCode}
            </strong>
            <span>LoC</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/55 hover:bg-white/[0.1] transition-all"
              title={`${member.name} GitHub`}
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
              className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/55 hover:bg-white/[0.1] transition-all"
              title={`${member.name} LinkedIn`}
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
