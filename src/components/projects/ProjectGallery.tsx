"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Layers, ArrowRight, Search, Sparkles } from "lucide-react";
import { playHover, playClick } from "@/lib/sound";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Agents", "Full-Stack & Cloud", "DevTools & Systems", "Web3 & FinTech"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300">
              <Layers className="w-3.5 h-3.5" />
              <span>THE ARSENAL & PROTOTYPES // REF 0xEXT-LAB</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Engineering Builds
            </h2>
            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore our battle-tested hackathon builds, production applications, and open-source developer tooling built under extreme deadlines.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack, AI, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090C12] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black font-bold shadow-md shadow-cyan-400/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl mt-8">
            <p className="text-zinc-400 text-sm">No projects matching your search query.</p>
            <button
              onClick={() => {
                playClick();
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-white transition-all duration-200 group"
          >
            <span>EXPLORE ALL PROJECTS & ARCHITECTURE SPECS</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
