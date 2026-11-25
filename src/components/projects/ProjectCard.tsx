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
    <article className="surface-card surface-card-interactive p-6 flex flex-col justify-between gap-6 group h-full">
      <div className="space-y-5">
        {/* Visual Preview with Scrim, Graceful Fallback & Non-Colliding Bottom Badges */}
        {project.coverImage && (
          <Link
            href={`/projects/${project.slug}`}
            className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#141A33] via-[#0B0E1A] to-[#07080D] block"
          >
            {!imgFailed ? (
              <img
                src={project.coverImage}
                alt={project.title}
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6">
                <span className="font-display font-bold text-2xl text-white/25 tracking-tight">
                  {project.title}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#07080D]/90 backdrop-blur-md text-[#E4E9FF] border border-white/[0.14]">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#07080D]/90 backdrop-blur-md text-[#34D399] border border-[#34D399]/35">
                {project.status}
              </span>
            </div>
          </Link>
        )}

        {/* Title & Summary */}
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#8F99B8]">
            <span>{project.year}</span>
            {isAwardWinner && (
              <span className="inline-flex items-center gap-1.5 text-[#F5C451] font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                Podium Winner
              </span>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 group/link"
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white group-hover/link:text-[#B4C0FF] transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#8B9BF7] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
          </Link>

          <p className="text-sm sm:text-[15px] text-[#CFD7F2] leading-[1.68] line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Validated Outcome */}
        <div className="surface-inset p-4 space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#A5B2FF]">
            Verified Outcome
          </div>
          <p className="text-xs sm:text-[13px] text-[#E4E9FF] leading-relaxed line-clamp-2">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Footer: Stack & Links */}
      <div className="pt-5 border-t border-white/[0.1] space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag text-[#8F99B8]">
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
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
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
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
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
