"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons } from "@/data/hackathons";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Trophy, Search, ArrowRight } from "lucide-react";

export default function HackathonsPage() {
  const [resultFilter, setResultFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const availableYears = Array.from(new Set(hackathons.map((h) => h.year))).sort((a, b) => b - a);

  const filtered = hackathons.filter((h) => {
    const matchesResult = resultFilter === "all" || h.resultType === resultFilter;
    const matchesYear = yearFilter === "all" || h.year.toString() === yearFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      h.name.toLowerCase().includes(q) ||
      h.projectTitle.toLowerCase().includes(q) ||
      h.organizer.toLowerCase().includes(q) ||
      h.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesResult && matchesYear && matchesSearch;
  });

  const featuredEvent =
    hackathons.find((h) => h.featured && h.resultType === "winner") || hackathons[0];

  const filterTabs = [
    { id: "all", label: `All Events (${hackathons.length})` },
    { id: "winner", label: "Champions" },
    { id: "runner_up", label: "Runners-Up" },
    { id: "finalist", label: "Finalists" },
    { id: "participant", label: "Competitors" },
  ];

  const clearFilters = () => {
    setResultFilter("all");
    setYearFilter("all");
    setSearchQuery("");
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Hero */}
      <MotionReveal className="space-y-4 max-w-3xl">
        <span className="eyebrow-badge">Competitions / Hall of Fame</span>
        <h1 className="font-page-title font-bold text-white">
          Hackathon Archive
        </h1>
        <p className="text-base sm:text-lg text-[#A8B2CF] leading-relaxed">
          A chronological record of hackathons entered, problems tackled under tight deadlines, and verified outcomes. Championships, runner-up podiums, and finalists are counted separately.
        </p>
      </MotionReveal>

      {/* Hairline Achievement Overview (Zero Misaligned Borders) */}
      <MotionReveal delay={0.08}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.1] rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-xl">
          <div className="bg-[#0B0F1D]/80 p-6 space-y-1.5">
            <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
              Total Competitions
            </span>
            <span className="text-3xl sm:text-4xl font-display font-bold text-white block tabular-nums">
              18
            </span>
            <span className="text-xs text-[#8F99B8] block">National &amp; global sprints</span>
          </div>

          <div className="bg-[#0B0F1D]/80 p-6 space-y-1.5">
            <span className="text-[11px] font-mono text-[#F5C451] uppercase tracking-wider block">
              Grand Champions
            </span>
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#F5C451] block tabular-nums">
              7
            </span>
            <span className="text-xs text-[#A8B2CF] block">1st place &amp; track awards</span>
          </div>

          <div className="bg-[#0B0F1D]/80 p-6 space-y-1.5">
            <span className="text-[11px] font-mono text-[#A5B2FF] uppercase tracking-wider block">
              Runners-Up
            </span>
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#A5B2FF] block tabular-nums">
              5
            </span>
            <span className="text-xs text-[#A8B2CF] block">2nd place &amp; special honors</span>
          </div>

          <div className="bg-[#0B0F1D]/80 p-6 space-y-1.5">
            <span className="text-[11px] font-mono text-[#B4BDD8] uppercase tracking-wider block">
              Finalists / Sprints
            </span>
            <span className="text-3xl sm:text-4xl font-display font-bold text-white block tabular-nums">
              6
            </span>
            <span className="text-xs text-[#8F99B8] block">Top selections &amp; entrants</span>
          </div>
        </div>
      </MotionReveal>

      {/* Featured Result Split Card */}
      {featuredEvent && (
        <MotionReveal delay={0.12}>
          <div className="surface-card surface-card-interactive p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold text-[#F5C451] border-[#F5C451]/35 bg-[#F5C451]/10">
                <Trophy className="w-3.5 h-3.5" />
                <span>Featured Podium Result</span>
              </span>
              <span className="text-[#8F99B8]">
                {featuredEvent.date} • {featuredEvent.duration} Sprint
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {featuredEvent.name}
                </h2>
                <p className="text-xs text-[#7D87A6] font-mono">
                  Organized by {featuredEvent.organizer} • {featuredEvent.location}
                </p>
                <div className="surface-inset p-4 space-y-1.5 mt-2">
                  <div className="text-xs font-mono text-[#F5C451] font-semibold">
                    Project: {featuredEvent.projectTitle}
                  </div>
                  <p className="text-sm text-[#C2CBE6] leading-relaxed">
                    {featuredEvent.description}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-5 lg:border-l lg:border-white/[0.08] lg:pl-8">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D87A6]">
                    Official Award
                  </span>
                  <div className="text-base font-bold text-[#F5C451]">{featuredEvent.award}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D87A6]">
                    Standout Metric
                  </span>
                  <div className="text-sm font-mono text-white">{featuredEvent.standoutMetric}</div>
                </div>

                <div className="pt-1">
                  <Link href={`/hackathons/${featuredEvent.slug}`} className="btn-primary py-2.5 px-5 text-sm group">
                    <span>Event case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      )}

      {/* Timeline Archive & Filters */}
      <div className="space-y-6">
        <MotionReveal delay={0.1}>
          <div className="surface-card p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0 isolate">
              {filterTabs.map((tab) => {
                const isSelected = resultFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setResultFilter(tab.id)}
                    className={`relative px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected
                        ? "text-[#07080D] font-semibold"
                        : "text-[#B4BDD8] hover:text-white bg-[#131726] border border-white/[0.08]"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeHackathonPill"
                        className="absolute inset-0 bg-[#F5F7FF] rounded-full"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-60">
                <Search className="w-4 h-4 text-[#7D87A6] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search event, organizer, tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="field-input pl-10 py-2 text-sm"
                />
              </div>

              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                aria-label="Filter by year"
                className="field-input sm:w-auto py-2 text-sm cursor-pointer"
              >
                <option value="all">All Years</option>
                {availableYears.map((yr) => (
                  <option key={yr} value={yr.toString()}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </MotionReveal>

        {filtered.length === 0 ? (
          <div className="surface-card text-center py-20 px-6 space-y-4">
            <p className="text-[#B4BDD8] text-base">No hackathon events match your current filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn-secondary text-xs py-2 px-4 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((hackathon) => (
                <motion.div
                  key={hackathon.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <HackathonCard hackathon={hackathon} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Closing CTA */}
      <MotionReveal>
        <div className="surface-card p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Planning an upcoming hackathon or innovation challenge?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2CF] max-w-lg mx-auto leading-relaxed">
            We invite event organizers, sponsors, and mentors to connect directly with Extokened.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
              <span>Invite Extokened to compete</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
