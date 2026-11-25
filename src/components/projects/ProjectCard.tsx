"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isAwardWinner =
    project.outcome.toLowerCase().includes("champion") ||
    project.outcome.toLowerCase().includes("1st") ||
    project.outcome.toLowerCase().includes("runner");

  return (
    <article className="surface-card surface-card-interactive p-6 flex flex-col justify-between gap-6 group h-full">
      <div className="space-y-5">
        {/* Visual Preview with Scrim & Bottom Badges (Zero Overlap) */}
        {project.coverImage && (
          <Link
            href={`/projects/${project.slug}`}
            className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.08] bg-[#0A0D18] block"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#07080D]/90 text-[#DCE2FF] border border-white/[0.12]">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#07080D]/90 text-[#34D399] border border-[#34D399]/30">
                {project.status}
              </span>
            </div>
          </Link>
        )}

        {/* Title & Summary */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#7D87A6]">
            <span>{project.year}</span>
            {isAwardWinner && (
              <span className="inline-flex items-center gap-1.5 text-[#F5C451] font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                Podium Winner
              </span>
            )}
          </div>

          <Link href={`/projects/${project.slug}`} className="group/link block">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover/link:text-[#A5B2FF] transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="text-sm text-[#B4BDD8] leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Validated Outcome */}
        <div className="surface-inset p-4 space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#8B9BF7]">
            Verified Outcome
          </div>
          <p className="text-xs sm:text-[13px] text-[#DCE2FF] leading-relaxed line-clamp-2">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Footer: Stack & Links */}
      <div className="pt-5 border-t border-white/[0.08] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag text-[#7D87A6]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors"
          >
            <span>Read case study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-2">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                title="GitHub Source"
                aria-label={`${project.title} source code`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
                title="Live Deployment"
                aria-label={`${project.title} live deployment`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
