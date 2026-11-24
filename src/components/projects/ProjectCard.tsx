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

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group">
      {/* Glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/5 rounded-full blur-3xl group-hover:bg-cyber-purple/15 transition-all duration-300 pointer-events-none" />

      {/* Top Section */}
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20">
            {project.category}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/10">
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-cyber-cyan font-mono mt-1 font-medium">
            {project.hackathonOrigin}
          </p>
          <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-1 pt-1">
          {project.keyFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-cyber-cyan text-sm">▹</span>
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
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-zinc-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {project.metrics && (
            <div className="text-right">
              <span className="text-[10px] text-zinc-400 block font-mono">
                {project.metrics.label}
              </span>
              <span className="text-xs font-mono font-bold text-cyber-cyan">
                {project.metrics.value}
              </span>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {onOpenDetails ? (
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-cyber-cyan font-mono transition-colors"
            >
              <Cpu className="w-3.5 h-3.5" />
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
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyber-cyan hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
