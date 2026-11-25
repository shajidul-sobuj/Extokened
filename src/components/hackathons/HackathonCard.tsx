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
  CheckCircle2,
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
        return "bg-[#F5C451]/10 text-[#F5C451] border-[#F5C451]/35";
      case "finalist":
        return "bg-[#8B9BF7]/10 text-[#A5B2FF] border-[#8B9BF7]/35";
      default:
        return "bg-[#111522] text-[#CFD7F2] border-white/[0.14]";
    }
  };

  return (
    <article className="surface-card surface-card-interactive p-5 flex flex-col justify-between gap-5 group h-full">
      <div className="space-y-4">
        {/* Award & Standout Metric */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${getBadgeStyle()}`}
          >
            <Trophy className="w-3.5 h-3.5 shrink-0" />
            <span>{hackathon.award}</span>
          </span>

          <span className="text-[#8F99B8]">{hackathon.standoutMetric}</span>
        </div>

        {/* Title & Organizer */}
        <div className="space-y-1">
          <Link href={`/hackathons/${hackathon.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover/link:text-[#A5B2FF] transition-colors">
              {hackathon.name}
            </h3>
          </Link>
          <p className="text-xs text-[#7D87A6] font-mono">
            Organized by {hackathon.organizer}
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#8F99B8] font-mono border-y border-white/[0.08] py-3">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#7D87A6]" />
            {hackathon.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#7D87A6]" />
            {hackathon.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#7D87A6]" />
            {hackathon.location}
          </span>
        </div>

        {/* Solution Summary */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A5B2FF] font-semibold">
            Built: {hackathon.projectTitle}
          </div>
          <p className="text-sm text-[#B4BDD8] leading-relaxed line-clamp-3">
            {hackathon.description}
          </p>
        </div>

        {/* Highlights */}
        {!compact && hackathon.highlights.length > 0 && (
          <div className="space-y-2 pt-1">
            {hackathon.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#C2CBE6]">
                <CheckCircle2 className="w-4 h-4 text-[#8B9BF7] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Stack & Links */}
      <div className="pt-5 border-t border-white/[0.08] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {hackathon.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {hackathon.techStack.length > 4 && (
            <span className="tech-tag text-[#7D87A6]">
              +{hackathon.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2">
            {hackathon.links.github && (
              <a
                href={hackathon.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                title="GitHub Repository"
                aria-label={`${hackathon.name} GitHub Repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hackathon.links.liveUrl && (
              <a
                href={hackathon.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                title="Live Demo"
                aria-label={`${hackathon.name} Live Demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            href={`/hackathons/${hackathon.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors"
          >
            <span>Case breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
