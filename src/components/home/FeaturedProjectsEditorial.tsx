import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export function FeaturedProjectsEditorial() {
  const flagship = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.slug !== flagship.slug).slice(0, 2);

  return (
    <section className="py-20 md:py-28 border-b border-[#2D221A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading Pattern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2D221A]">
          <div className="space-y-2 max-w-xl">
            <span className="pill-amber">Selected Works</span>
            <h2 className="font-section-title font-semibold text-white">
              Featured Engineering Builds
            </h2>
            <p className="text-sm text-[#ADADAD] leading-relaxed">
              Real products engineered to solve practical friction across clinical workflows, municipal congestion, and vernacular commerce.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#F0A24C] transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Primary Project Feature: 7/5 Split */}
        <div className="editorial-card p-6 sm:p-10 bg-[#141210] border border-[#2D221A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
          
          {/* Left 7 Columns: Visual Preview & Diagrammatic Badge */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-[#2D221A] bg-[#0D0D0D] aspect-video">
            <img
              src={flagship.coverImage}
              alt={flagship.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1D1510]/95 text-[#F0A24C] border border-[#F0A24C]/40 shadow-[0_0_12px_rgba(240,162,76,0.2)]">
                Flagship Case Study
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Metadata, Context & Actions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7D7D7D]">
              <span>{flagship.category}</span>
              <span>•</span>
              <span>{flagship.year}</span>
              <span>•</span>
              <span className="text-[#74C69D] font-medium">{flagship.status}</span>
            </div>

            <h3 className="font-card-title font-bold text-white">
              {flagship.title}
            </h3>

            <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
              {flagship.summary}
            </p>

            <div className="p-3.5 rounded-lg bg-[#1D1814] border border-[#2D221A] text-xs space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7D7D]">
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
                className="btn-amber-glass"
              >
                <span>Read case study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {flagship.liveUrl && (
                <a
                  href={flagship.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Secondary Project Rows: Asymmetric Editorial Row (NOT identical 3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <div 
              key={project.slug} 
              className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] flex flex-col justify-between space-y-5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#7D7D7D]">{project.category} • {project.year}</span>
                  <span className="text-[#74C69D] font-medium">{project.status}</span>
                </div>

                <Link href={`/projects/${project.slug}`} className="group block">
                  <h4 className="text-xl font-bold text-white group-hover:text-[#F0A24C] transition-colors">
                    {project.title}
                  </h4>
                </Link>

                <p className="text-xs text-[#ADADAD] leading-relaxed line-clamp-2">
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

              <div className="pt-4 border-t border-[#2D221A] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#7D7D7D]">
                  {project.outcome}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#F0A24C] transition-colors"
                >
                  <span>Case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
