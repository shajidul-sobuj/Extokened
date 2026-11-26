"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";
import { Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

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

  const socialLinks = [
    member.socials.github
      ? { label: "GitHub", href: member.socials.github, icon: Github }
      : null,
    member.socials.linkedin
      ? { label: "LinkedIn", href: member.socials.linkedin, icon: Linkedin }
      : null,
    member.socials.facebook
      ? { label: "Facebook", href: member.socials.facebook, icon: Facebook }
      : null,
    member.socials.twitter
      ? { label: "X", href: member.socials.twitter, icon: Twitter }
      : null,
  ].filter(Boolean) as {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];

  const toolsToShow =
    variant === "home" ? member.skills.slice(0, 3) : member.skills.slice(0, 4);

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="relative overflow-hidden rounded-[22px] border border-white/[0.14] hover:border-[#A5B2FF]/45 flex flex-col justify-between h-full group transition-colors duration-300 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.18)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(16, 21, 38, 0.22) 0%, rgba(12, 16, 30, 0.56) 36%, rgba(8, 10, 19, 0.84) 100%)",
        backdropFilter: "blur(18px) saturate(150%)",
        WebkitBackdropFilter: "blur(18px) saturate(150%)",
      }}
    >
      {/* Airy Top Translucent Glass Highlight (lets live twilight meadow & fireflies breathe through) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          background:
            "radial-gradient(ellipse 85% 90% at 25% 0%, rgba(165, 178, 255, 0.14) 0%, rgba(139, 155, 247, 0.04) 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Interactive Cursor-Tracking Liquid Glass Sheen */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[22px] transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(165, 178, 255, 0.15), rgba(245, 196, 81, 0.04) 45%, transparent 72%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Specular Edge */}
      <div
        className="pointer-events-none absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        aria-hidden="true"
      />

      {/* Top Transparent-Mist Header Band: Circular Avatar + Floating Specialty Pill */}
      <div className="relative z-10 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 flex items-start justify-between gap-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full p-[2px] bg-gradient-to-br from-white/35 via-[#A5B2FF]/45 to-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.45)] group-hover:from-white/55 group-hover:via-[#A5B2FF]/70 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0E1B]">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          <span
            className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#34D399] border-2 border-[#0C101E]"
            title="Active Squad Member"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-white/45 hidden sm:inline">
            0{index + 1}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.08] backdrop-blur-md text-[#E4E9FF] border border-white/[0.16] whitespace-nowrap">
            {member.badge}
          </span>
        </div>
      </div>

      {/* Main Editorial Identity Body */}
      <div className="relative z-10 px-5 sm:px-6 pb-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Name & Concise Bio */}
          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold tracking-tight text-white group-hover:text-[#C5CEFF] transition-colors">
              {member.name}
            </h3>
            <p className="text-[13.5px] text-[#D2DAF5] leading-[1.6] line-clamp-2">
              {member.bio}
            </p>
          </div>

          {/* Inline Icon Metadata Row (Role & Primary Focus) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#A9B4D6]">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#8B9BF7] shrink-0" />
              <span className="text-[#DCE2FF] font-medium">{member.role}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C451] shrink-0" />
              <span>{member.focusAreas[0]}</span>
            </span>
          </div>

          {/* Compact Tools / Stack Row */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#7D87A6] mr-1">
              Stack
            </span>
            {toolsToShow.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-[#CFD7F2]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Signature Bottom Bar: Social Links (Left) + Rounded Pill CTA (Right) */}
        <div className="pt-4 mt-2 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
          {/* Social Links (GitHub, LinkedIn, Facebook, X) */}
          <div className="flex items-center gap-1.5" aria-label={`${member.name} social profiles`}>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${member.name} on ${item.label}`}
                  aria-label={`${member.name} ${item.label}`}
                  className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.12] hover:border-[#A5B2FF]/50 text-[#CFD7F2] hover:text-white transition-all text-xs font-medium"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden xl:inline text-[11px] font-mono">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Rounded High-Contrast Pill Action */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[#F5F7FF] hover:bg-white text-[#07080D] text-xs font-semibold tracking-tight shadow-[0_6px_20px_-6px_rgba(139,155,247,0.55)] hover:shadow-[0_10px_26px_-6px_rgba(139,155,247,0.75)] transition-all shrink-0 group/btn"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
