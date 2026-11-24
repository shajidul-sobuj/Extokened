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
  Sparkles 
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

interface HackathonCardProps {
  hackathon: Hackathon;
  compact?: boolean;
}

export function HackathonCard({ hackathon, compact = false }: HackathonCardProps) {
  const triggerConfetti = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hackathon.awardType === "champion" || hackathon.awardType === "runner_up") {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00F0FF", "#F59E0B", "#10B981", "#8B5CF6"],
      });
    }
  };

  const getBadgeStyle = () => {
    switch (hackathon.awardType) {
      case "champion":
        return "bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-amber-500/10";
      case "runner_up":
        return "bg-slate-300/15 text-slate-200 border-slate-300/30 shadow-slate-300/10";
      case "special_track":
        return "bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40 shadow-cyber-cyan/10";
      default:
        return "bg-purple-500/15 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
      {/* Subtle background glow */}
      <div 
        className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none ${
          hackathon.awardType === "champion" ? "bg-amber-400" : "bg-cyber-cyan"
        }`} 
      />

      {/* Top Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Award Badge */}
          <button
            onClick={triggerConfetti}
            title="Click for celebration"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border shadow-sm transition-transform active:scale-95 ${getBadgeStyle()}`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.badgeLabel}</span>
          </button>

          {/* Metric Badge */}
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300">
            {hackathon.standoutMetric}
          </span>
        </div>

        {/* Hackathon Event Info */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
            {hackathon.name}
          </h3>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            Organized by {hackathon.organizer}
          </p>
        </div>

        {/* Metadata pills */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono border-y border-white/5 py-2.5">
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

        {/* Project built */}
        <div className="space-y-2 pt-1">
          <div className="text-xs uppercase tracking-wider font-mono text-cyber-cyan font-bold">
            Project Built: {hackathon.projectTitle}
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {hackathon.description}
          </p>
        </div>

        {/* Highlights */}
        {!compact && hackathon.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            {hackathon.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                <span className="text-cyber-cyan mt-0.5">•</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Tech Stack & Action Links */}
      <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5 hover:border-white/20 transition-colors"
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
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyber-cyan transition-colors"
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
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                title="Video Pitch"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>Demo Pitch</span>
              </a>
            )}
          </div>

          {hackathon.links.liveUrl && (
            <a
              href={hackathon.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyber-cyan hover:underline"
            >
              <span>Live Prototype</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
