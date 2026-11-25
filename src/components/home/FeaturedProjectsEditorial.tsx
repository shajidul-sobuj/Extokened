"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function FeaturedProjectsEditorial() {
  const featuredList = projects.filter((p) => p.featured).slice(0, 3);
  const [flagship, ...secondaryBuilds] = featuredList;

  return (
    <section className="py-20 sm:py-24 lg:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow-badge">Selected Portfolio</span>
              <h2 className="font-section-title font-bold text-white">
                Featured Engineering Builds
              </h2>
              <p className="text-sm sm:text-base text-[#A8B2CF] leading-relaxed">
                Real software architectures engineered under 24–48 hour hackathon deadlines and production sprints.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A5B2FF] hover:text-white transition-colors shrink-0 group"
            >
              <span>All {projects.length} documented projects</span>
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
                  className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#0A0D18] block border-b lg:border-b-0 lg:border-r border-white/[0.08]"
                >
                  <img
                    src={flagship.coverImage}
                    alt={flagship.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/80 via-[#07080D]/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#07080D]/90 text-[#DCE2FF] border border-white/[0.12]">
                      {flagship.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#07080D]/90 text-[#34D399] border border-[#34D399]/30">
                      {flagship.status}
                    </span>
                  </div>
                </Link>

                {/* Content Side (5 Cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-[#7D87A6]">Flagship • {flagship.year}</span>
                      <span className="inline-flex items-center gap-1.5 text-[#F5C451] font-semibold">
                        <Trophy className="w-3.5 h-3.5" />
                        Grand Champion
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <Link href={`/projects/${flagship.slug}`} className="block group/title">
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover/title:text-[#A5B2FF] transition-colors">
                          {flagship.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-[#B4BDD8] leading-relaxed">
                        {flagship.summary}
                      </p>
                    </div>

                    <div className="surface-inset p-4 space-y-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8B9BF7]">
                        Verified Outcome
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#DCE2FF] leading-relaxed">
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

                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
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
                          className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
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
                          className="w-9 h-9 rounded-lg bg-[#131726] border border-white/[0.1] flex items-center justify-center text-[#B4BDD8] hover:text-white hover:border-[#8B9BF7]/45 transition-colors"
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
          {secondaryBuilds.map((project) => (
            <MotionItem key={project.slug} className="h-full">
              <article className="surface-card surface-card-interactive p-6 flex flex-col justify-between h-full group gap-6">
                <div className="space-y-5">
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

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#7D87A6]">
                      <span>{project.year}</span>
                      {(project.outcome.toLowerCase().includes("1st") ||
                        project.outcome.toLowerCase().includes("runner")) && (
                        <span className="inline-flex items-center gap-1.5 text-[#F5C451] font-semibold">
                          <Trophy className="w-3.5 h-3.5" />
                          Podium Winner
                        </span>
                      )}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group/link">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover/link:text-[#A5B2FF] transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#B4BDD8] leading-relaxed line-clamp-2">
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
                      <span className="tech-tag text-[#7D87A6]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
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
