"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function FeaturedProjectsEditorial() {
  const flagship = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.slug !== flagship.slug).slice(0, 2);

  return (
    <section className="py-20 md:py-28 border-b border-[#1E2337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading Pattern */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E2337]">
            <div className="space-y-2 max-w-xl">
              <span className="pill-lavender">Selected Works</span>
              <h2 className="font-section-title font-semibold text-white">
                Featured Engineering Builds
              </h2>
              <p className="text-sm text-[#BAC0DC] leading-relaxed">
                Real products engineered to solve practical friction across clinical workflows, municipal congestion, and vernacular commerce.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#8B9BF7] transition-colors"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>

        {/* Primary Project Feature: 7/5 Split */}
        <MotionReveal delay={0.1} duration={0.6}>
          <div className="meadow-card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            
            {/* Left 7 Columns: Visual Preview & Diagrammatic Badge */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-xl border border-[rgba(139,155,247,0.22)] bg-[#08090E]/60 aspect-video">
              <img
                src={flagship.coverImage}
                alt={flagship.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#151824]/90 backdrop-blur-md text-[#8B9BF7] border border-[#8B9BF7]/40 shadow-[0_0_14px_rgba(139,155,247,0.3)]">
                  Flagship Case Study
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Metadata, Context & Actions */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E96B8]">
                <span>{flagship.category}</span>
                <span>•</span>
                <span>{flagship.year}</span>
                <span>•</span>
                <span className="text-[#2FB36A] font-medium">{flagship.status}</span>
              </div>

              <h3 className="font-card-title font-bold text-white group-hover:text-[#B8C0EC] transition-colors">
                {flagship.title}
              </h3>

              <p className="text-sm text-[#CAD1F0] leading-relaxed font-sans">
                {flagship.summary}
              </p>

              <div className="p-3.5 rounded-lg glass-panel-inset text-xs space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E96B8]">
                  Validated Outcome
                </div>
                <div className="text-xs text-white">
                  {flagship.outcome}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagship.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href={`/projects/${flagship.slug}`}
                  className="btn-meadow-dark"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {flagship.liveUrl && (
                  <a
                    href={flagship.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-meadow-secondary"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </MotionReveal>

        {/* Secondary Project Rows: Asymmetric Editorial Row with Stagger */}
        <MotionStagger stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <MotionItem key={project.slug}>
              <div 
                className="meadow-card p-6 sm:p-7 flex flex-col justify-between space-y-5 h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8E96B8]">{project.category} • {project.year}</span>
                    <span className="text-[#2FB36A] font-medium">{project.status}</span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="group block">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#8B9BF7] transition-colors">
                      {project.title}
                    </h4>
                  </Link>

                  <p className="text-xs text-[#CAD1F0] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(139,155,247,0.14)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8E96B8]">
                    {project.outcome}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#8B9BF7] transition-colors"
                  >
                    <span>Case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

      </div>
    </section>
  );
}
