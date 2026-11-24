"use client";

import React, { useState } from "react";
import { hackathons, AwardType } from "@/data/hackathons";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
import { Trophy, Calendar, Award, Sparkles, Filter, Search } from "lucide-react";

export default function HackathonsPage() {
  const [awardFilter, setAwardFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = hackathons.filter((h) => {
    const matchesAward =
      awardFilter === "all" ||
      (awardFilter === "champion" && h.awardType === "champion") ||
      (awardFilter === "runner_up" && (h.awardType === "runner_up" || h.awardType === "special_track"));

    const matchesYear = yearFilter === "all" || h.year.toString() === yearFilter;

    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesAward && matchesYear && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
          <Trophy className="w-3.5 h-3.5" />
          <span>VICTORIES & TRACK RECORD ARCHIVE</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
          The Extokened Trophy Cabinet
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          From 24-hour university hackathons to 48-hour global AI competitions. A complete chronological record of challenges entered, solutions engineered, and podium honors claimed.
        </p>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
        <div className="glass-card rounded-xl p-4 border border-white/5">
          <span className="text-xs font-mono text-zinc-400 block">Total Competitions</span>
          <span className="text-2xl sm:text-3xl font-display font-black text-white mt-1 block">
            18+
          </span>
          <span className="text-[11px] font-mono text-zinc-500">National & Global</span>
        </div>
        <div className="glass-card rounded-xl p-4 border border-amber-500/20 bg-amber-500/5">
          <span className="text-xs font-mono text-amber-400 block">Champions (1st Place)</span>
          <span className="text-2xl sm:text-3xl font-display font-black text-amber-300 mt-1 block">
            7 🏆
          </span>
          <span className="text-[11px] font-mono text-zinc-400">Grand Winner Titles</span>
        </div>
        <div className="glass-card rounded-xl p-4 border border-white/5">
          <span className="text-xs font-mono text-zinc-400 block">Runner-Up & Tracks</span>
          <span className="text-2xl sm:text-3xl font-display font-black text-cyber-cyan mt-1 block">
            5 🥈
          </span>
          <span className="text-[11px] font-mono text-zinc-500">Podium Finishes</span>
        </div>
        <div className="glass-card rounded-xl p-4 border border-white/5">
          <span className="text-xs font-mono text-zinc-400 block">Live Demo Rate</span>
          <span className="text-2xl sm:text-3xl font-display font-black text-emerald-400 mt-1 block">
            100%
          </span>
          <span className="text-[11px] font-mono text-zinc-500">Zero Mockups on Stage</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y border-white/5">
        <div className="flex flex-wrap items-center gap-2">
          {/* Award Filter */}
          <button
            onClick={() => setAwardFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              awardFilter === "all" ? "bg-white text-black font-semibold" : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            All Victories
          </button>
          <button
            onClick={() => setAwardFilter("champion")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              awardFilter === "champion" ? "bg-amber-400 text-black font-semibold" : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            🏆 Grand Champions
          </button>
          <button
            onClick={() => setAwardFilter("runner_up")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              awardFilter === "runner_up" ? "bg-cyber-cyan text-black font-semibold" : "bg-white/5 text-zinc-400 hover:text-white"
            }`}
          >
            🥈 Runner-Up & Tracks
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Year Filter */}
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="bg-[#0E1117] border border-white/10 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyber-cyan/50"
          >
            <option value="all">All Years</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

          {/* Search Box */}
          <div className="relative w-48 sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search hackathons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E1117] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-cyber-cyan/50"
            />
          </div>
        </div>
      </div>

      {/* Grid of Hackathon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filtered.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl mt-8">
          <p className="text-zinc-400 font-mono text-sm">No hackathons matching this filter.</p>
        </div>
      )}
    </div>
  );
}
