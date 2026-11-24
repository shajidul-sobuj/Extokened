"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { Layers, Search, Cpu, Sparkles } from "lucide-react";
import { playHover, playClick } from "@/lib/sound";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Agents", "Full-Stack & Cloud", "DevTools & Systems", "Web3 & FinTech"];

  const filtered = projects.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">
          <Layers className="w-3.5 h-3.5" />
          <span>PROJECT CATALOG & CODEBASE DIRECTORY // REF 0xEXT-LAB</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
          Everything We Have Shipped
        </h1>
        <p className="font-sans text-zinc-400 text-base leading-relaxed">
          From 36-hour hackathon winning prototypes to production systems and open-source tooling. Every build comes with live demos and architecture documentation.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-white/10 mt-8">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black font-bold shadow-md shadow-cyan-400/20"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search stack, AI, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#090C12] border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl mt-8">
          <p className="text-zinc-400 text-sm">No projects matching your search criteria.</p>
        </div>
      )}

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
