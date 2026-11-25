"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

function ProjectThumb({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#141A33] via-[#0B0E1A] to-[#07080D]">
        <span className="font-display font-bold text-lg text-white/25 tracking-tight">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
      loading="lazy"
    />
  );
}

export function FeaturedProjectsEditorial() {
  const featuredList = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Elevated Two-Font Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-white/[0.1]">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-badge">Selected Portfolio</span>
              <h2 className="font-section-title font-bold text-white">
                Featured Engineering{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Builds
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#C8D0EC] leading-[1.68]">
                Production-grade systems and stage-winning prototypes shipped under 24–48 hour hackathon pressure.
              </p>
            </div>

            <Link
              href="/projects"
              className="btn-secondary py-2 px-4 text-xs sm:text-[13px] shrink-0 group self-start md:self-auto"
            >
              <span>Explore all {projects.length} projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </MotionReveal>

        {/* Compact, Crisp 3-Column Grid (Fits Cleanly in One Viewport) */}
        <MotionStagger
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuredList.map((project, idx) => {
            const isWinner =
              project.outcome.toLowerCase().includes("champion") ||
              project.outcome.toLowerCase().includes("1st") ||
              project.outcome.toLowerCase().includes("runner");

            return (
              <MotionItem key={project.slug} className="h-full">
                <article className="surface-card surface-card-interactive p-4 sm:p-5 flex flex-col justify-between h-full group gap-4">
                  <div className="space-y-4">
                    {/* Compact Proportional Preview */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.1] bg-[#0B0E1A] block"
                    >
                      <ProjectThumb src={project.coverImage} alt={project.title} />
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

                    {/* Meta + Title + Description */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[#8F99B8]">
                        <span>
                          0{idx + 1} · {project.year}
                        </span>
                        {isWinner && (
                          <span className="inline-flex items-center gap-1 text-[#F5C451] font-semibold">
                            <Trophy className="w-3 h-3" />
                            <span>
                              {project.outcome.toLowerCase().includes("runner")
                                ? "Finalist"
                                : "Winner"}
                            </span>
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

                    {/* Compact Tech Stack */}
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
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3.5 border-t border-white/[0.1] flex items-center justify-between gap-3">
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
                          aria-label={`${project.title} live deployment`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
