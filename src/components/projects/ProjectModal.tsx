"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { 
  X, 
  ExternalLink, 
  PlayCircle, 
  Cpu, 
  Layers, 
  CheckCircle,
  FileText
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200" 
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E1117] border border-cyber-cyan/30 rounded-2xl shadow-2xl shadow-black/80 overflow-y-auto z-10 animate-in zoom-in-95 duration-200 text-left">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0E1117]/95 backdrop-blur-md px-6 py-5 border-b border-white/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyber-purple/15 text-cyber-purple border border-cyber-purple/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Origin */}
          <div className="space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-cyber-cyan">
              {project.hackathonOrigin}
            </p>
            <p className="text-base text-zinc-300 font-medium pt-1">
              {project.tagline}
            </p>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Project Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Notes */}
          <div className="p-4 rounded-xl bg-[#141820] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan font-bold">
              <Cpu className="w-4 h-4" />
              <span>System & Architectural Strategy</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
              {project.architectureNotes}
            </p>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="px-6 py-4 bg-[#08090C] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.links.demoVideo && (
              <a
                href={project.links.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Watch Pitch Demo</span>
              </a>
            )}
          </div>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-cyber-cyan hover:bg-[#38BDF8] transition-colors shadow-lg shadow-cyber-cyan/20"
            >
              <span>Launch Live Prototype</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
