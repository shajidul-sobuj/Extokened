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
        return "bg-[#E8B86D]/10 text-[#E8B86D] border-[#E8B86D]/40";
      case "runner_up":
        return "bg-[#74C69D]/10 text-[#74C69D] border-[#74C69D]/40";
      case "finalist":
        return "bg-[#191B1F] text-[#AAA9A3] border-[#414449]";
      default:
        return "bg-[#111214] text-[#777873] border-[#292B2E]";
    }
  };

  return (
    <div className="editorial-card p-6 sm:p-7 bg-[#111214] border border-[#292B2E] flex flex-col justify-between group transition-all">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Award & Metric */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold border ${getBadgeStyle()}`}>
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.badgeLabel}</span>
          </span>

          <span className="text-[#777873]">
            {hackathon.standoutMetric}
          </span>
        </div>

        {/* Title & Organizer */}
        <div>
          <Link href={`/hackathons/${hackathon.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F1EC] group-hover/link:text-[#C6F36A] transition-colors">
              {hackathon.name}
            </h3>
          </Link>
          <p className="text-xs text-[#777873] mt-1 font-mono">
            Organized by {hackathon.organizer}
          </p>
        </div>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#777873] font-mono border-y border-[#292B2E] py-2.5">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#777873]" />
            {hackathon.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#777873]" />
            {hackathon.duration} Sprint
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#777873]" />
            {hackathon.location}
          </span>
        </div>

        {/* Solution Engineered */}
        <div className="space-y-1.5 pt-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C6F36A] font-semibold">
            Built: {hackathon.projectTitle}
          </div>
          <p className="text-sm text-[#AAA9A3] leading-relaxed font-sans line-clamp-3">
            {hackathon.description}
          </p>
        </div>

        {/* Highlights */}
        {!compact && hackathon.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            {hackathon.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#AAA9A3]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6F36A] shrink-0 mt-0.5" />
                <span className="text-[#AAA9A3]">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Tech Stack & Actions */}
      <div className="pt-6 mt-6 border-t border-[#292B2E] space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {hackathon.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {hackathon.techStack.length > 4 && (
            <span className="tech-tag text-[#777873]">
              +{hackathon.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links & Details CTA */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {hackathon.links.github && (
              <a
                href={hackathon.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-[#191B1F] border border-[#292B2E] hover:text-white text-[#AAA9A3] transition-colors"
                title="GitHub Repo"
                aria-label="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {hackathon.links.liveUrl && (
              <a
                href={hackathon.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-[#191B1F] border border-[#292B2E] hover:text-white text-[#AAA9A3] transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Link
            href={`/hackathons/${hackathon.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F3F1EC] hover:text-[#C6F36A] transition-colors"
          >
            <span>Case breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
