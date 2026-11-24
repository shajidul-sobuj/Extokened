"use client";

import React from "react";
import Link from "next/link";
import { Hackathon } from "@/data/hackathons";
import { 
  Trophy, 
  ExternalLink, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface HackathonCardProps {
  hackathon: Hackathon;
  compact?: boolean;
}

export function HackathonCard({ hackathon, compact = false }: HackathonCardProps) {
  const getBadgeStyle = () => {
    switch (hackathon.resultType) {
      case "winner":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "runner_up":
        return "bg-[#22D3C5]/10 text-[#22D3C5] border-[#22D3C5]/30";
      case "finalist":
        return "bg-[#7C5CFF]/10 text-[#A78BFA] border-[#7C5CFF]/30";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  return (
    <div className="studio-card p-6 sm:p-7 flex flex-col justify-between group transition-all duration-200 hover:border-zinc-500/50">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Award & Metric */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeStyle()}`}>
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.badgeLabel}</span>
          </span>

          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] border border-[#253044] text-zinc-300">
            {hackathon.standoutMetric}
          </span>
        </div>

        {/* Title & Organizer */}
        <div>
          <Link href={`/hackathons/${hackathon.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/link:text-[#22D3C5] transition-colors">
              {hackathon.name}
            </h3>
          </Link>
          <p className="text-xs text-zinc-400 mt-1">
            Organized by <span className="text-zinc-200">{hackathon.organizer}</span>
          </p>
        </div>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-y border-[#253044]/60 py-2.5">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            {hackathon.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            {hackathon.duration} Sprint
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            {hackathon.location}
          </span>
        </div>

        {/* Solution Engineered */}
        <div className="space-y-1.5 pt-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[#7C5CFF] font-semibold">
            Project Built: {hackathon.projectTitle}
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {hackathon.description}
          </p>
        </div>

        {/* Highlights */}
        {!compact && hackathon.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            {hackathon.highlights.slice(0, 3).map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3C5] shrink-0 mt-0.5" />
                <span className="text-zinc-300">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Tech Stack & Actions */}
      <div className="pt-6 mt-6 border-t border-[#253044]/60 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links & Details CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {hackathon.links.github && (
              <a
                href={hackathon.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151F2E] border border-[#253044] hover:text-white text-zinc-400 transition-colors"
                title="GitHub Repo"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hackathon.links.liveUrl && (
              <a
                href={hackathon.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151F2E] border border-[#253044] hover:text-white text-zinc-400 transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            href={`/hackathons/${hackathon.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#22D3C5] transition-colors"
          >
            <span>View Case Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
