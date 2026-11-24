"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { 
  ExternalLink, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = () => {
    switch (project.status) {
      case "Shipped":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Prototype":
        return "bg-[#22D3C5]/10 text-[#22D3C5] border-[#22D3C5]/30";
      case "In Progress":
        return "bg-[#7C5CFF]/10 text-[#A78BFA] border-[#7C5CFF]/30";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  return (
    <div className="studio-card p-6 sm:p-7 flex flex-col justify-between group transition-all duration-200 hover:border-zinc-500/50">
      {/* Top Section */}
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
            {project.category}
          </span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${getStatusBadge()}`}>
            {project.status}
          </span>
        </div>

        {/* Title & Summary */}
        <div>
          <Link href={`/projects/${project.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/link:text-[#22D3C5] transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-xs text-[#A78BFA] mt-1 font-mono">
            {project.year} • {project.summary}
          </p>
          <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed font-sans line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Features Preview */}
        {project.keyFeatures.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3C5] shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-sans">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Technologies & Links */}
      <div className="pt-6 mt-6 border-t border-[#253044]/60 space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-400 border border-[#253044]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151F2E] border border-[#253044] hover:text-white text-zinc-400 transition-colors"
                title="GitHub Source"
                aria-label="View Source Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151F2E] border border-[#253044] hover:text-white text-zinc-400 transition-colors"
                title="Live Deployment"
                aria-label="View Live Deployment"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#22D3C5] transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
