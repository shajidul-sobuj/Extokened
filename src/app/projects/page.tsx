"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, ProjectCategory, ProjectStatus } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Search, X, ArrowRight, ArrowUpRight, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "featured">("featured");

  const categories = ["All", "AI & Agents", "Full-Stack Web", "Systems & DevTools", "FinTech & Data"];
  const statuses = ["All", "Shipped", "Prototype", "In Progress"];

  const filtered = projects
    .filter((p) => {
      const matchesCat = activeCategory === "All" || p.category === activeCategory;
      const matchesStatus = activeStatus === "All" || p.status === activeStatus;
      const matchesQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesStatus && matchesQuery;
    })
    .sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      return b.year - a.year;
    });

  const featuredWide = filtered[0];
  const remainingProjects = filtered.slice(1);

  const hasActiveFilters = activeCategory !== "All" || activeStatus !== "All" || searchQuery !== "";

  const clearFilters = () => {
    setActiveCategory("All");
    setActiveStatus("All");
    setSearchQuery("");
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* 8.1 Page Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="pill-lavender">
          PORTFOLIO / SELECTED WORK
        </div>
        <h1 className="font-page-title font-semibold text-white leading-tight">
          Everything We Have Shipped
        </h1>
        <p className="text-base sm:text-lg text-[#BAC0DC] leading-relaxed font-sans">
          From 36-hour hackathon winning prototypes to production systems and open-source tooling ({projects.length} documented records). Every build includes real architecture notes, verified code, and live outcomes.
        </p>
      </div>

      {/* 8.3 Filter Toolbar */}
      <div className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] space-y-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#8B9BF7] text-[#08090E] font-semibold shadow-[0_0_12px_rgba(139,155,247,0.3)]"
                    : "bg-[#151824] text-[#BAC0DC] hover:text-white border border-[#1E2337]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field & Sort */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-[#727896] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search stack, AI, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#08090E] border border-[#1E2337] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#727896] focus:outline-none focus:border-[#8B9BF7]/60 transition-colors"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "featured")}
              className="bg-[#08090E] border border-[#1E2337] rounded-lg px-3 py-2 text-xs text-[#BAC0DC] focus:outline-none focus:border-[#8B9BF7]/60"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Secondary Status Filter & Active Chips */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E2337] text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#727896] font-mono">Status:</span>
            <div className="flex items-center gap-1.5">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                    activeStatus === status
                      ? "bg-[#151824] text-white border border-[#8B9BF7]/40"
                      : "text-[#727896] hover:text-[#BAC0DC]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Removable Active Filter Chips */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#727896]">Active filters:</span>
              {activeCategory !== "All" && (
                <span className="tech-tag text-[#8B9BF7] flex items-center gap-1">
                  {activeCategory}
                  <button onClick={() => setActiveCategory("All")}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              {activeStatus !== "All" && (
                <span className="tech-tag text-[#8B9BF7] flex items-center gap-1">
                  {activeStatus}
                  <button onClick={() => setActiveStatus("All")}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="tech-tag text-[#8B9BF7] flex items-center gap-1">
                  &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery("")}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-[11px] text-[#8B9BF7] hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 8.4 Project Listing: Deliberate Mixed Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 editorial-card meadow-card bg-[#0F1118] border border-[#1E2337] space-y-3">
          <p className="text-[#BAC0DC] text-sm">No projects match the selected criteria.</p>
          <button
            onClick={clearFilters}
            className="text-xs text-[#8B9BF7] hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Top Wide Feature (when no search query is active and items exist) */}
          {featuredWide && (
            <div className="editorial-card meadow-card p-6 sm:p-10 bg-[#0F1118] border border-[#1E2337] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
              <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-[#1E2337] bg-[#08090E] aspect-video">
                <img
                  src={featuredWide.coverImage}
                  alt={featuredWide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#727896]">
                  <span>{featuredWide.category}</span>
                  <span>•</span>
                  <span>{featuredWide.year}</span>
                  <span>•</span>
                  <span className="text-[#2FB36A]">{featuredWide.status}</span>
                </div>
                <h3 className="font-card-title font-bold text-white">
                  {featuredWide.title}
                </h3>
                <p className="text-sm text-[#BAC0DC] leading-relaxed">
                  {featuredWide.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredWide.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={`/projects/${featuredWide.slug}`}
                    className="btn-meadow-dark"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Projects in a 2-Column Balanced Mixed Grid */}
          {remainingProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {remainingProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}

        </div>
      )}

      {/* 8.5 End CTA */}
      <div className="editorial-card meadow-card p-8 sm:p-12 rounded-xl bg-[#0F1118] border border-[#1E2337] text-center space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Have a problem worth solving?
        </h2>
        <p className="text-sm text-[#BAC0DC] max-w-md mx-auto">
          We partner with organizations and teams on rapid prototype execution and technical sprints.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-meadow-dark"
          >
            <span>Contact the team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
