"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight, ArrowUpRight, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const isAwardWinner =
    project.outcome.toLowerCase().includes("champion") ||
    project.outcome.toLowerCase().includes("1st") ||
    project.outcome.toLowerCase().includes("runner");

  return (
    <article className="surface-card surface-card-interactive p-4 sm:p-5 flex flex-col justify-between gap-4 group h-full">
      <div className="space-y-4">
        {/* Compact Visual Preview */}
        {project.coverImage && (
          <Link
            href={`/projects/${project.slug}`}
            className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#141A33] via-[#0B0E1A] to-[#07080D] block"
          >
            {!imgFailed ? (
              <img
                src={project.coverImage}
                alt={project.title}
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4">
                <span className="font-display font-bold text-lg text-white/25 tracking-tight">
                  {project.title}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#07080D]/90 backdrop-blur-md text-[#E4E9FF] border border-white/[0.14]">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#07080D]/90 backdrop-blur-md text-[#34D399] border border-[#34D399]/35">
                {project.status}
              </span>
            </div>
          </Link>
        )}

        {/* Title & Summary */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8F99B8]">
            <span>{project.year}</span>
            {isAwardWinner && (
              <span className="inline-flex items-center gap-1 text-[#F5C451] font-semibold">
                <Trophy className="w-3 h-3" />
                Podium Winner
              </span>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 group/link"
          >
            <h3 className="text-lg sm:text-[1.2rem] font-display font-bold tracking-tight text-white group-hover/link:text-[#B4C0FF] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#8B9BF7] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
          </Link>

          <p className="text-[13px] text-[#CFD7F2] leading-[1.6] line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Compact Validated Outcome */}
        <div className="surface-inset px-3.5 py-2.5 space-y-0.5">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#A5B2FF]">
            Outcome
          </div>
          <p className="text-xs text-[#E4E9FF] leading-relaxed line-clamp-2">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Footer: Stack & Links */}
      <div className="pt-3.5 border-t border-white/[0.1] space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag text-[11px] py-0.5 px-2">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag text-[11px] py-0.5 px-2 text-[#8F99B8]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#A5B2FF] hover:text-white transition-colors"
          >
            <span>Read case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-1.5">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                title="GitHub Source"
                aria-label={`${project.title} source code`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                title="Live Deployment"
                aria-label={`${project.title} live deployment`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
