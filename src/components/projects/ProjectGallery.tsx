"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, ProjectCategory, ProjectStatus } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Layers, ArrowRight, Search } from "lucide-react";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI & Agents", "Full-Stack Web", "Systems & DevTools", "FinTech & Data"];
  const statuses = ["All", "Shipped", "Prototype", "In Progress"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesStatus = activeStatus === "All" || project.status === activeStatus;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#253044]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-xs font-mono text-[#A78BFA]">
              <Layers className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Builds
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore our hackathon builds, production applications, and open-source developer tooling built under real engineering constraints.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack, AI, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#101724] border border-[#253044] rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors"
            />
          </div>
        </div>

        {/* Filter Bar: Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pb-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#151F2E] text-white border border-[#253044] shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-[#101724] p-1 rounded-lg border border-[#253044]">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                  activeStatus === status
                    ? "bg-[#151F2E] text-white border border-[#253044]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 studio-card mt-6">
            <p className="text-zinc-400 text-sm">No projects match the selected filters or query.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveStatus("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#22D3C5] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {/* Bottom CTA to Projects Archive */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#101724] hover:bg-[#151F2E] border border-[#253044] hover:border-zinc-400 transition-all shadow-sm"
          >
            <span>Explore All Projects &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#22D3C5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
