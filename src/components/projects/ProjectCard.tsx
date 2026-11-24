"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="editorial-card meadow-card p-6 sm:p-7 bg-[#0F1118] border border-[#1E2337] flex flex-col justify-between group transition-all shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
      {/* Top Section */}
      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[#727896]">
            {project.category}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border border-[#2FB36A]/30 text-[#2FB36A] bg-[#2FB36A]/10">
            {project.status}
          </span>
        </div>

        {/* Title & Summary */}
        <div>
          <Link href={`/projects/${project.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/link:text-[#8B9BF7] transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-xs text-[#BAC0DC] mt-1 font-mono">
            {project.year} • {project.summary}
          </p>
          <p className="text-sm text-[#727896] mt-2.5 leading-relaxed font-sans line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Features Preview */}
        {project.keyFeatures.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#BAC0DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B9BF7] shrink-0 mt-0.5" />
                <span className="font-sans">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Technologies & Links */}
      <div className="pt-6 mt-6 border-t border-[#1E2337] space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag text-[#727896]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] hover:text-white text-[#BAC0DC] transition-colors"
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
                className="p-1.5 rounded-md bg-[#151824] border border-[#1E2337] hover:text-white text-[#BAC0DC] transition-colors"
                title="Live Deployment"
                aria-label="View Live Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#8B9BF7] transition-colors"
          >
            <span>Read case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
