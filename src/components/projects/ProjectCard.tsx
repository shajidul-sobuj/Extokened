"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isAwardWinner = project.outcome.toLowerCase().includes("champion") || 
                        project.outcome.toLowerCase().includes("1st") || 
                        project.outcome.toLowerCase().includes("runner");

  return (
    <div className="meadow-card p-5 sm:p-6 flex flex-col justify-between group h-full hover:border-[#8B9BF7]/50 transition-all duration-300">
      {/* Top Section */}
      <div className="space-y-4">
        
        {/* Project Visual Preview / Screenshot */}
        {project.coverImage && (
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#1E2337] bg-[#0A0D18] group-hover:border-[#8B9BF7]/40 transition-colors">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Overlay Badges */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#08090E]/85 backdrop-blur-md text-[#B8C0EC] border border-[#1E2337]">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#08090E]/85 backdrop-blur-md text-[#2FB36A] border border-[#2FB36A]/30">
                {project.status}
              </span>
            </div>
          </div>
        )}

        {/* Title, Year & Award */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono text-[#727896]">
            <span>{project.year}</span>
            {isAwardWinner && (
              <span className="text-[#FFC857] flex items-center gap-1 font-semibold text-[11px]">
                <Trophy className="w-3 h-3 text-[#FFC857]" />
                Podium Winner
              </span>
            )}
          </div>

          <Link href={`/projects/${project.slug}`} className="group/link block">
            <h3 className="text-xl font-bold text-white group-hover/link:text-[#8B9BF7] transition-colors">
              {project.title}
            </h3>
          </Link>
          
          <p className="text-xs text-[#BAC0DC] font-sans leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Validated Outcome Strip */}
        <div className="p-3 rounded-lg glass-panel-inset text-xs space-y-0.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E96B8]">
            Key Outcome
          </div>
          <div className="text-[11px] text-[#CAD1F0] font-sans line-clamp-2">
            {project.outcome}
          </div>
        </div>
      </div>

      {/* Bottom Section: Technologies & Action Links */}
      <div className="pt-4 mt-5 border-t border-[#1E2337] space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag text-[10px]">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag text-[10px] text-[#727896]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B9BF7] hover:text-white transition-colors"
          >
            <span>Read case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-white hover:border-[#8B9BF7]/40 transition-colors"
                title="GitHub Source"
                aria-label="View Source Code"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-white hover:border-[#8B9BF7]/40 transition-colors"
                title="Live Deployment"
                aria-label="View Live Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
