"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function FeaturedProjectsEditorial() {
  // Take top 3 flagship projects
  const featuredList = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-b border-[#1E2337] relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#1E2337]">
            <div className="space-y-2 max-w-xl">
              <span className="pill-lavender">SELECTED PORTFOLIO</span>
              <h2 className="font-section-title font-semibold text-white">
                Featured Engineering Builds
              </h2>
              <p className="text-sm text-[#BAC0DC] leading-relaxed">
                Real software architectures engineered under 24–48h hackathons and production sprints.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#8B9BF7] hover:text-white transition-colors"
            >
              <span>Explore all {projects.length} projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>

        {/* Balanced, Animated 3-Card Grid (No Giant Oversized Banner) */}
        <MotionStagger stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredList.map((project) => (
            <MotionItem key={project.slug}>
              <div className="meadow-card p-5 sm:p-6 flex flex-col justify-between h-full group hover:border-[#8B9BF7]/50 transition-all duration-300">
                
                <div className="space-y-4">
                  {/* Clean Proportional Screenshot / Visual Preview */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#1E2337] bg-[#0A0D18] group-hover:border-[#8B9BF7]/40 transition-colors">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Category & Status Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#08090E]/85 backdrop-blur-md text-[#B8C0EC] border border-[#1E2337]">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#08090E]/85 backdrop-blur-md text-[#2FB36A] border border-[#2FB36A]/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#727896]">
                      <span>{project.year}</span>
                      {project.outcome.toLowerCase().includes("champion") || project.outcome.toLowerCase().includes("1st") ? (
                        <span className="text-[#FFC857] flex items-center gap-1 font-semibold text-[11px]">
                          <Trophy className="w-3 h-3 text-[#FFC857]" />
                          Award Winner
                        </span>
                      ) : null}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group/link">
                      <h3 className="text-xl font-bold text-white group-hover/link:text-[#8B9BF7] transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#BAC0DC] leading-relaxed line-clamp-3 font-sans">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
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
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 mt-5 border-t border-[#1E2337] flex items-center justify-between">
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
                        title="View Source Code"
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
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </MotionItem>
          ))}
        </MotionStagger>

      </div>
    </section>
  );
}
