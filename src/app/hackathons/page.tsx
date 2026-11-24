"use client";

import React, { useState } from "react";
import { hackathons, ResultType } from "@/data/hackathons";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { Trophy, Search, CheckCircle2 } from "lucide-react";

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

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101724] border border-[#253044] text-xs font-mono text-amber-300">
          <Trophy className="w-3.5 h-3.5" />
          <span>Competition Archive &amp; Track Record</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Hackathon Archive
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
          A chronological record of hackathons entered, problems tackled, solutions engineered, and podium results claimed. We separate wins, runner-up finishes, and participation transparently.
        </p>
      </div>

      {/* Verified KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="studio-card p-5 space-y-1">
          <span className="text-xs font-mono text-zinc-400 block uppercase">
            Total Sprints Joined
          </span>
          <span className="text-3xl font-bold font-display text-white block">
            18
          </span>
          <span className="text-xs text-zinc-500 font-sans">
            National &amp; global hackathons
          </span>
        </div>

        <div className="studio-card p-5 space-y-1 border-t-2 border-t-amber-400">
          <span className="text-xs font-mono text-amber-400 block uppercase">
            Grand Champions
          </span>
          <span className="text-3xl font-bold font-display text-amber-300 block">
            7
          </span>
          <span className="text-xs text-zinc-400 font-sans">
            1st Place &amp; Track winners
          </span>
        </div>

        <div className="studio-card p-5 space-y-1 border-t-2 border-t-[#22D3C5]">
          <span className="text-xs font-mono text-[#22D3C5] block uppercase">
            Runners-Up
          </span>
          <span className="text-3xl font-bold font-display text-[#22D3C5] block">
            5
          </span>
          <span className="text-xs text-zinc-400 font-sans">
            2nd Place &amp; Category honors
          </span>
        </div>

        <div className="studio-card p-5 space-y-1 border-t-2 border-t-[#7C5CFF]">
          <span className="text-xs font-mono text-[#A78BFA] block uppercase">
            Finalists &amp; Competitors
          </span>
          <span className="text-3xl font-bold font-display text-white block">
            6
          </span>
          <span className="text-xs text-zinc-400 font-sans">
            Top finalist selections
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="studio-card p-6 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Result Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setResultFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "all"
                  ? "bg-[#151F2E] text-white border border-[#253044] shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Events ({hackathons.length})
            </button>
            <button
              onClick={() => setResultFilter("winner")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "winner"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🏆 Champions
            </button>
            <button
              onClick={() => setResultFilter("runner_up")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "runner_up"
                  ? "bg-[#22D3C5]/20 text-[#22D3C5] border border-[#22D3C5]/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🥈 Runners-Up
            </button>
            <button
              onClick={() => setResultFilter("finalist")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "finalist"
                  ? "bg-[#7C5CFF]/20 text-[#A78BFA] border border-[#7C5CFF]/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Finalists
            </button>
            <button
              onClick={() => setResultFilter("participant")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "participant"
                  ? "bg-zinc-800 text-zinc-300 border border-zinc-700 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Competitors
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search event, organizer, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#080B12] border border-[#253044] rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors"
            />
          </div>
        </div>

        {/* Year Filter Row */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#253044]/60 text-xs">
          <span className="text-zinc-500 font-mono">Filter by Year:</span>
          <div className="flex items-center gap-1.5">
            {["all", "2025", "2024", "2023"].map((yr) => (
              <button
                key={yr}
                onClick={() => setYearFilter(yr)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                  yearFilter === yr
                    ? "bg-[#151F2E] text-white border border-[#253044]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {yr === "all" ? "All Years" : yr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Hackathon Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 studio-card">
          <p className="text-zinc-400 text-sm">No hackathons match the selected filters.</p>
          <button
            onClick={() => {
              setResultFilter("all");
              setYearFilter("all");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-[#22D3C5] hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((hackathon) => (
            <HackathonCard key={hackathon.slug} hackathon={hackathon} />
          ))}
        </div>
      )}
    </div>
  );
}
