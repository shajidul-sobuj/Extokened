"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { 
  X, 
  ExternalLink, 
  PlayCircle, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto studio-card bg-[#080B12] shadow-2xl border border-[#253044]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#080B12]/95 backdrop-blur-md border-b border-[#253044]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#22D3C5]">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Summary */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-[#A78BFA]">
              {project.year} • {project.summary}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Architecture Notes */}
          <div className="p-4 rounded-lg bg-[#101724] border border-[#253044] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#22D3C5] font-semibold">
              <Cpu className="w-4 h-4" />
              <span>System &amp; Architectural Strategy</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {project.architectureNotes}
            </p>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Key Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101724] border border-[#253044] text-xs text-zinc-300 font-sans"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#22D3C5] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#151F2E] text-zinc-200 border border-[#253044]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="px-6 py-4 bg-[#080B12] border-t border-[#253044] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#151F2E] hover:bg-[#1f2d42] border border-[#253044] text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#151F2E] hover:bg-[#1f2d42] border border-[#253044] text-amber-300 transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Pitch Demo</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs text-[#22D3C5] hover:underline"
            >
              <span>Full Case Study Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] transition-colors shadow-sm"
              >
                <span>Launch Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
