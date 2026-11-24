"use client";

import React from "react";
import { Hackathon } from "@/data/hackathons";
import { 
  Trophy, 
  ExternalLink, 
  PlayCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Award,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { HoloCard } from "@/components/ui/HoloCard";
import { playVictory, playClick, playHover } from "@/lib/sound";
import confetti from "canvas-confetti";

interface HackathonCardProps {
  hackathon: Hackathon;
  compact?: boolean;
}

export function HackathonCard({ hackathon, compact = false }: HackathonCardProps) {
  const triggerConfetti = (e: React.MouseEvent) => {
    e.stopPropagation();
    playVictory();
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00F5FF", "#FFB800", "#00FF66", "#9945FF"],
    });
  };

  const getVariant = (): "gold" | "emerald" | "cyan" | "violet" => {
    if (hackathon.awardType === "champion") return "gold";
    if (hackathon.awardType === "special_track") return "emerald";
    if (hackathon.awardType === "runner_up") return "cyan";
    return "violet";
  };

  const getBadgeStyle = () => {
    switch (hackathon.awardType) {
      case "champion":
        return "bg-amber-500/15 text-amber-300 border-amber-500/50 shadow-amber-500/20";
      case "runner_up":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-cyan-500/20";
      case "special_track":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20";
      default:
        return "bg-purple-500/15 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <HoloCard variant={getVariant()} className="p-6 sm:p-7 flex flex-col justify-between group font-mono">
      {/* Top Header */}
      <div className="space-y-4">
        
        {/* Award & Metric */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={triggerConfetti}
            title="Click to celebrate victory!"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-transform active:scale-95 cursor-pointer ${getBadgeStyle()}`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.badgeLabel}</span>
          </button>

          <span className="px-2.5 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-zinc-300">
            {hackathon.standoutMetric}
          </span>
        </div>

        {/* Title & Organizer */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {hackathon.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Organized by <span className="text-zinc-200">{hackathon.organizer}</span>
          </p>
        </div>

        {/* Telemetry metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-y border-white/5 py-2.5">
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
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Project Built: {hackathon.projectTitle}
          </div>
          <p className="font-sans text-sm text-zinc-300 leading-relaxed">
            {hackathon.description}
          </p>
        </div>

        {/* Highlights */}
        {!compact && hackathon.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            {hackathon.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Tech Stack & Actions */}
      <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-zinc-300 border border-white/10 hover:border-cyan-400/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-3">
            {hackathon.links.github && (
              <a
                href={hackathon.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {hackathon.links.devpost && (
              <a
                href={hackathon.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors"
                title="Devpost Submission"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Devpost</span>
              </a>
            )}
            {hackathon.links.demoVideo && (
              <a
                href={hackathon.links.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                title="Video Pitch"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Pitch</span>
              </a>
            )}
          </div>

          {hackathon.links.liveUrl && (
            <a
              href={hackathon.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
            >
              <span>Live Prototype</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </HoloCard>
  );
}
