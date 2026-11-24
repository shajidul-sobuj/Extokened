"use client";

import React, { useState } from "react";
import { projects, ProjectCategory, ProjectStatus } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Layers, Search, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [activeYear, setActiveYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI & Agents", "Full-Stack Web", "Systems & DevTools", "FinTech & Data"];
  const statuses = ["All", "Shipped", "Prototype", "In Progress"];
  const years = ["All", "2025", "2024", "2023"];

  const filtered = projects.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesStatus = activeStatus === "All" || p.status === activeStatus;
    const matchesYear = activeYear === "All" || p.year.toString() === activeYear;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesStatus && matchesYear && matchesQuery;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101724] border border-[#253044] text-xs font-mono text-[#A78BFA]">
          <Layers className="w-3.5 h-3.5" />
          <span>Case Studies &amp; Codebase Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Projects &amp; Prototypes
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
          From 36-hour hackathon winning prototypes to production systems and open-source tooling. Every build includes architecture documentation, challenges overcome, and live repository links.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="studio-card p-6 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#151F2E] text-white border border-[#253044] shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack, AI, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080B12] border border-[#253044] rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors"
            />
          </div>
        </div>

        {/* Secondary Filters: Status & Year */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#253044]/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono">Status:</span>
            <div className="flex items-center gap-1">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
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

          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-mono">Year:</span>
            <div className="flex items-center gap-1">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    activeYear === year
                      ? "bg-[#151F2E] text-white border border-[#253044]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Projects */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 studio-card">
          <p className="text-zinc-400 text-sm">No projects match the selected criteria.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setActiveStatus("All");
              setActiveYear("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-[#22D3C5] hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
