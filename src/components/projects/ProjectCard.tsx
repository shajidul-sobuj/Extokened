"use client";

import React from "react";
import { Project } from "@/data/projects";
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  Cpu, 
  PlayCircle 
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { HoloCard } from "@/components/ui/HoloCard";
import { playHover, playClick } from "@/lib/sound";

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const getVariant = () => {
    if (project.category === "AI & Agents") return "violet";
    if (project.category === "Full-Stack & Cloud") return "cyan";
    if (project.category === "Web3 & FinTech") return "gold";
    return "default";
  };

  return (
    <HoloCard variant={getVariant()} className="p-6 sm:p-7 flex flex-col justify-between group font-mono">
      {/* Top Section */}
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
            {project.category}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400 border border-white/10">
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-400 mt-1 font-bold">
            {project.hackathonOrigin}
          </p>
          <p className="font-sans text-sm text-zinc-300 mt-2.5 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-1 pt-1">
          {project.keyFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-cyan-400 text-sm">▹</span>
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
        {/* Metric & Tech Stack */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 max-w-[75%]">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] text-zinc-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {project.metrics && (
            <div className="text-right">
              <span className="text-[10px] text-zinc-400 block">
                {project.metrics.label}
              </span>
              <span className="text-xs font-bold text-cyan-400">
                {project.metrics.value}
              </span>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {onOpenDetails ? (
            <button
              onClick={() => {
                playClick();
                onOpenDetails(project);
              }}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deep Dive Specs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="text-zinc-400 hover:text-white transition-colors"
                title="View GitHub Source"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </HoloCard>
  );
}
