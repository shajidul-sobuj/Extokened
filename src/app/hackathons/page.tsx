"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons, ResultType } from "@/data/hackathons";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Trophy, Search, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HackathonsPage() {
  const [resultFilter, setResultFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = hackathons.filter((h) => {
    const matchesResult =
      resultFilter === "all" ||
      (resultFilter === "winner" && h.resultType === "winner") ||
      (resultFilter === "runner_up" && h.resultType === "runner_up") ||
      (resultFilter === "finalist" && h.resultType === "finalist") ||
      (resultFilter === "participant" && h.resultType === "participant");

    const matchesYear = yearFilter === "all" || h.year.toString() === yearFilter;

    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesResult && matchesYear && matchesSearch;
  });

  const featuredEvent = hackathons.find((h) => h.featured && h.resultType === "winner") || hackathons[0];

  const filterTabs = [
    { id: "all", label: `All Events (${hackathons.length})` },
    { id: "winner", label: "🏆 Champions" },
    { id: "runner_up", label: "🥈 Runners-Up" },
    { id: "finalist", label: "Finalists" },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 10.1 Page Hero */}
      <MotionReveal className="space-y-4 max-w-3xl">
        <div className="pill-lavender">
          COMPETITIONS / HALL OF FAME
        </div>
        <h1 className="font-page-title font-semibold text-white leading-tight">
          Hackathon Archive
        </h1>
        <p className="text-base sm:text-lg text-[#BAC0DC] leading-relaxed font-sans">
          A chronological record of hackathons entered, problems tackled under intense pressure, and verified outcomes. Wins, runner-up honors, and participation are counted and documented separately.
        </p>
      </MotionReveal>

      {/* 10.2 Achievement Overview: Separated Totals */}
      <MotionReveal delay={0.1}>
        <div className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="space-y-1">
            <span className="text-[#727896] uppercase tracking-wider block text-[10px]">Total Competitions</span>
            <span className="text-3xl font-bold font-display text-white block">18</span>
            <span className="text-[11px] text-[#727896]">National &amp; global sprints</span>
          </div>

          <div className="space-y-1 border-l border-[#1E2337] pl-6">
            <span className="text-[#FFC857] uppercase tracking-wider block text-[10px]">Grand Champions</span>
            <span className="text-3xl font-bold font-display text-[#FFC857] block drop-shadow-[0_0_12px_rgba(255,200,87,0.3)]">7</span>
            <span className="text-[11px] text-[#BAC0DC]">1st place &amp; track awards</span>
          </div>

          <div className="space-y-1 border-l border-[#1E2337] pl-6">
            <span className="text-[#8B9BF7] uppercase tracking-wider block text-[10px]">Runners-Up</span>
            <span className="text-3xl font-bold font-display text-[#8B9BF7] block">5</span>
            <span className="text-[11px] text-[#BAC0DC]">2nd place &amp; track honors</span>
          </div>

          <div className="space-y-1 border-l border-[#1E2337] pl-6">
            <span className="text-[#BAC0DC] uppercase tracking-wider block text-[10px]">Finalists / Sprints</span>
            <span className="text-3xl font-bold font-display text-white block">6</span>
            <span className="text-[11px] text-[#727896]">Top selections &amp; entrants</span>
          </div>
        </div>
      </MotionReveal>

      {/* 10.3 Featured Result Split Card */}
      {featuredEvent && (
        <MotionReveal delay={0.15}>
          <div className="editorial-card meadow-card p-6 sm:p-10 bg-[#0F1118] border border-[#1E2337] space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group hover:border-[#2B324E] transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full border text-[11px] font-semibold text-[#FFC857] border-[#FFC857]/40 bg-[#FFC857]/10 shadow-[0_0_12px_rgba(255,200,87,0.15)] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#FFC857]" />
                <span>Featured Podium Result</span>
              </span>
              <span className="text-[#727896]">
                {featuredEvent.date} • {featuredEvent.duration} Sprint
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-8 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#8B9BF7] transition-colors">
                  {featuredEvent.name}
                </h2>
                <p className="text-xs text-[#727896] font-mono">
                  Organized by {featuredEvent.organizer} • {featuredEvent.location}
                </p>
                <div className="p-4 rounded-lg bg-[#151824] border border-[#1E2337] text-xs space-y-1.5 mt-3">
                  <div className="font-mono text-[#FFC857] font-semibold">
                    Project: {featuredEvent.projectTitle}
                  </div>
                  <p className="text-[#BAC0DC] leading-relaxed">
                    {featuredEvent.description}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#1E2337] lg:pl-8">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#727896]">Official Award</span>
                  <div className="text-sm font-bold text-[#FFC857]">{featuredEvent.award}</div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#727896]">Standout Metric</span>
                  <div className="text-sm font-mono text-white">{featuredEvent.standoutMetric}</div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/hackathons/${featuredEvent.slug}`}
                    className="btn-meadow-dark"
                  >
                    <span>Event case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      )}

      {/* 10.4 Timeline Archive & Filters */}
      <div className="space-y-6">
        <MotionReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E2337]">
            <div className="flex flex-wrap items-center gap-1.5">
              {filterTabs.map((tab) => {
                const isSelected = resultFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setResultFilter(tab.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "text-[#08090E] font-semibold"
                        : "text-[#BAC0DC] hover:text-white bg-[#151824] border border-[#1E2337]"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeHackathonPill"
                        className="absolute inset-0 bg-[#8B9BF7] rounded-full shadow-[0_0_12px_rgba(139,155,247,0.35)] -z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#727896] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search event, organizer, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#08090E] border border-[#1E2337] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#727896] focus:outline-none focus:border-[#8B9BF7]/60"
              />
            </div>
          </div>
        </MotionReveal>

        {/* Vertical Chronological Timeline Grid with Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((hackathon) => (
              <motion.div
                key={hackathon.slug}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <HackathonCard hackathon={hackathon} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 10.6 Closing Event CTA */}
      <MotionReveal>
        <div className="editorial-card meadow-card p-8 sm:p-12 rounded-xl bg-[#0F1118] border border-[#1E2337] text-center space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Planning an upcoming hackathon or innovation challenge?
          </h2>
          <p className="text-sm text-[#BAC0DC] max-w-md mx-auto">
            We invite event organizers, sponsors, and mentors to connect with Extokened.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-meadow-dark"
            >
              <span>Invite Extokened to compete</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </MotionReveal>

    </div>
  );
}
