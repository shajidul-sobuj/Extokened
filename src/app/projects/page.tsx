"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Search, X, ArrowRight } from "lucide-react";

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
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesStatus && matchesQuery;
    })
    .sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      return b.year - a.year;
    });

  const hasActiveFilters = activeCategory !== "All" || activeStatus !== "All" || searchQuery !== "";

  const clearFilters = () => {
    setActiveCategory("All");
    setActiveStatus("All");
    setSearchQuery("");
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Hero */}
      <MotionReveal className="space-y-4 max-w-3xl">
        <span className="eyebrow-badge">Portfolio / Selected Work</span>
        <h1 className="font-page-title font-bold text-white">
          Everything We Have Shipped
        </h1>
        <p className="text-base sm:text-lg text-[#A8B2CF] leading-relaxed">
          From 36-hour hackathon winning prototypes to production systems and open-source tooling ({projects.length} documented case studies). Every build includes architecture notes, verified code, and measured outcomes.
        </p>
      </MotionReveal>

      {/* Filter Toolbar */}
      <MotionReveal delay={0.08}>
        <div className="surface-card p-5 sm:p-6 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Rail */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0 isolate">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected
                        ? "text-[#07080D] font-semibold"
                        : "text-[#B4BDD8] hover:text-white bg-[#131726] border border-white/[0.08]"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-[#F5F7FF] rounded-full"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-[#7D87A6] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search stack, AI, keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="field-input pl-10 py-2 text-sm"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "featured")}
                aria-label="Sort projects"
                className="field-input sm:w-auto py-2 text-sm cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Status Filter & Active Chips */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#7D87A6] font-mono">Status:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {statuses.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setActiveStatus(status)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer border ${
                      activeStatus === status
                        ? "bg-[#192038] text-white border-[#8B9BF7]/45"
                        : "text-[#8F99B8] border-transparent hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {activeCategory !== "All" && (
                  <span className="tech-tag text-[#A5B2FF]">
                    {activeCategory}
                    <button
                      type="button"
                      onClick={() => setActiveCategory("All")}
                      aria-label="Remove category filter"
                    >
                      <X className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                )}
                {activeStatus !== "All" && (
                  <span className="tech-tag text-[#A5B2FF]">
                    {activeStatus}
                    <button
                      type="button"
                      onClick={() => setActiveStatus("All")}
                      aria-label="Remove status filter"
                    >
                      <X className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="tech-tag text-[#A5B2FF]">
                    &quot;{searchQuery}&quot;
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search query"
                    >
                      <X className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-medium text-[#A5B2FF] hover:text-white underline ml-1 cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </MotionReveal>

      {/* Balanced 2-Column Editorial Project Grid (Eliminates Lonely Orphan Cards) */}
      {filtered.length === 0 ? (
        <MotionReveal>
          <div className="surface-card text-center py-20 px-6 space-y-4">
            <p className="text-[#B4BDD8] text-base">No projects match the selected criteria.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn-secondary text-xs py-2 px-4 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        </MotionReveal>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* End CTA */}
      <MotionReveal>
        <div className="surface-card p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Have a problem worth solving?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2CF] max-w-lg mx-auto leading-relaxed">
            We partner with organizations and teams on rapid prototype execution and high-stakes technical sprints.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
              <span>Contact the team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
