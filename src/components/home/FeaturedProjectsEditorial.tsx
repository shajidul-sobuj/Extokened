"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function FeaturedProjectsEditorial() {
  const featuredList = projects.filter((p) => p.featured).slice(0, 3);
  const [flagship, ...secondaryBuilds] = featuredList;

  return (
    <section className="py-20 sm:py-24 lg:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Elevated Two-Font Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.1]">
            <div className="space-y-3.5 max-w-2xl">
              <span className="eyebrow-badge">Selected Portfolio</span>
              <h2 className="font-section-title font-bold text-white">
                Featured Engineering{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Builds
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#C8D0EC] leading-[1.7] max-w-xl">
                Production-grade systems and stage-winning prototypes shipped under 24–48 hour hackathon pressure—each backed by live code and measured telemetry.
              </p>
            </div>

            <Link
              href="/projects"
              className="btn-secondary py-2.5 px-5 text-xs sm:text-sm shrink-0 group self-start md:self-auto"
            >
              <span>Explore all {projects.length} projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </MotionReveal>

        {/* Flagship Wide Editorial Showcase (Asymmetric 12-Col Split) */}
        {flagship && (
          <MotionReveal delay={0.05}>
            <article className="surface-card surface-card-interactive overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Side (7 Cols) */}
                <Link
                  href={`/projects/${flagship.slug}`}
                  className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-gradient-to-br from-[#12172B] via-[#0B0E1A] to-[#07080D] block border-b lg:border-b-0 lg:border-r border-white/[0.1]"
                >
                  <img
                    src={flagship.coverImage}
                    alt={flagship.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/85 via-[#07080D]/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#07080D]/90 backdrop-blur-md text-[#E4E9FF] border border-white/[0.14]">
                      {flagship.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#07080D]/90 backdrop-blur-md text-[#34D399] border border-[#34D399]/35">
                      {flagship.status}
                    </span>
                  </div>
                </Link>

                {/* Content Side (5 Cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-[#8F99B8]">01 · Flagship · {flagship.year}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5C451]/12 border border-[#F5C451]/30 text-[#F5C451] font-semibold text-[11px]">
                        <Trophy className="w-3 h-3" />
                        Grand Champion
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <Link
                        href={`/projects/${flagship.slug}`}
                        className="inline-flex items-center gap-2 group/title"
                      >
                        <h3 className="text-2xl sm:text-[1.85rem] font-display font-bold tracking-tight text-white group-hover/title:text-[#B4C0FF] transition-colors">
                          {flagship.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-[#8B9BF7] opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
                      </Link>
                      <p className="text-sm sm:text-[15px] text-[#CFD7F2] leading-[1.68]">
                        {flagship.summary}
                      </p>
                    </div>

                    <div className="surface-inset p-4 space-y-1.5">
                      <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#A5B2FF]">
                        Verified Outcome
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#E4E9FF] leading-relaxed">
                        {flagship.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {flagship.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/[0.1] flex items-center justify-between gap-4">
                    <Link
                      href={`/projects/${flagship.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#A5B2FF] transition-colors group/cta"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {flagship.sourceUrl && (
                        <a
                          href={flagship.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                          aria-label={`${flagship.title} source code`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {flagship.liveUrl && (
                        <a
                          href={flagship.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#C8D0EC] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                          aria-label={`${flagship.title} live deployment`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </MotionReveal>
        )}

        {/* Secondary Featured Builds: Balanced 2-Column Row */}
        <MotionStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secondaryBuilds.map((project, idx) => (
            <MotionItem key={project.slug} className="h-full">
              <article className="surface-card surface-card-interactive p-6 flex flex-col justify-between h-full group gap-6">
                <div className="space-y-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#12172B] via-[#0B0E1A] to-[#07080D] block"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
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

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#8F99B8]">
                      <span>
                        0{idx + 2} · {project.year}
                      </span>
                      {(project.outcome.toLowerCase().includes("1st") ||
                        project.outcome.toLowerCase().includes("runner")) && (
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
                </div>

                <div className="pt-5 border-t border-white/[0.1] flex items-center justify-between gap-4">
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
                        aria-label={`${project.title} live deployment`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
