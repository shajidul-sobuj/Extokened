"use client";

import React, { useState } from "react";
import Link from "next/link";
import { hackathons, ResultType } from "@/data/hackathons";
import { HackathonCard } from "@/components/hackathons/HackathonCard";
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

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 10.1 Page Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="pill-amber">
          COMPETITIONS / HALL OF FAME
        </div>
        <h1 className="font-page-title font-semibold text-white leading-tight">
          Hackathon Archive
        </h1>
        <p className="text-base sm:text-lg text-[#ADADAD] leading-relaxed font-sans">
          A chronological record of hackathons entered, problems tackled under intense pressure, and verified outcomes. Wins, runner-up honors, and participation are counted and documented separately.
        </p>
      </div>

      {/* 10.2 Achievement Overview: Separated Totals */}
      <div className="editorial-card p-6 bg-[#141210] border border-[#2D221A] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="space-y-1">
          <span className="text-[#7D7D7D] uppercase tracking-wider block text-[10px]">Total Competitions</span>
          <span className="text-3xl font-bold font-display text-white block">18</span>
          <span className="text-[11px] text-[#7D7D7D]">National &amp; global sprints</span>
        </div>

        <div className="space-y-1 border-l border-[#2D221A] pl-6">
          <span className="text-[#F0A24C] uppercase tracking-wider block text-[10px]">Grand Champions</span>
          <span className="text-3xl font-bold font-display text-[#F0A24C] block drop-shadow-[0_0_12px_rgba(240,162,76,0.3)]">7</span>
          <span className="text-[11px] text-[#ADADAD]">1st place &amp; track awards</span>
        </div>

        <div className="space-y-1 border-l border-[#2D221A] pl-6">
          <span className="text-[#E0A165] uppercase tracking-wider block text-[10px]">Runners-Up</span>
          <span className="text-3xl font-bold font-display text-[#E0A165] block">5</span>
          <span className="text-[11px] text-[#ADADAD]">2nd place &amp; track honors</span>
        </div>

        <div className="space-y-1 border-l border-[#2D221A] pl-6">
          <span className="text-[#ADADAD] uppercase tracking-wider block text-[10px]">Finalists / Sprints</span>
          <span className="text-3xl font-bold font-display text-white block">6</span>
          <span className="text-[11px] text-[#7D7D7D]">Top selections &amp; entrants</span>
        </div>
      </div>

      {/* 10.3 Featured Result Split Card */}
      {featuredEvent && (
        <div className="editorial-card p-6 sm:p-10 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded-full border text-[11px] font-semibold text-[#F0A24C] border-[#F0A24C]/40 bg-[#1D1510] shadow-[0_0_12px_rgba(240,162,76,0.15)]">
              Featured Podium Result
            </span>
            <span className="text-[#7D7D7D]">
              {featuredEvent.date} • {featuredEvent.duration} Sprint
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {featuredEvent.name}
              </h2>
              <p className="text-xs text-[#7D7D7D] font-mono">
                Organized by {featuredEvent.organizer} • {featuredEvent.location}
              </p>
              <div className="p-4 rounded-lg bg-[#1D1814] border border-[#2D221A] text-xs space-y-1.5 mt-3">
                <div className="font-mono text-[#F0A24C] font-semibold">
                  Project: {featuredEvent.projectTitle}
                </div>
                <p className="text-[#ADADAD] leading-relaxed">
                  {featuredEvent.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#2D221A] lg:pl-8">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#7D7D7D]">Official Award</span>
                <div className="text-sm font-bold text-[#F0A24C]">{featuredEvent.award}</div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#7D7D7D]">Standout Metric</span>
                <div className="text-sm font-mono text-white">{featuredEvent.standoutMetric}</div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/hackathons/${featuredEvent.slug}`}
                  className="btn-amber-glass"
                >
                  <span>Event case study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10.4 Timeline Archive & Filters */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2D221A]">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setResultFilter("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "all"
                  ? "bg-[#F0A24C] text-[#1D1510] font-semibold shadow-[0_0_12px_rgba(240,162,76,0.3)]"
                  : "bg-[#1D1814] text-[#ADADAD] hover:text-white border border-[#2D221A]"
              }`}
            >
              All Events ({hackathons.length})
            </button>
            <button
              onClick={() => setResultFilter("winner")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "winner"
                  ? "bg-[#F0A24C] text-[#1D1510] font-semibold"
                  : "bg-[#1D1814] text-[#ADADAD] hover:text-white border border-[#2D221A]"
              }`}
            >
              🏆 Champions
            </button>
            <button
              onClick={() => setResultFilter("runner_up")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "runner_up"
                  ? "bg-[#E0A165] text-[#1D1510] font-semibold"
                  : "bg-[#1D1814] text-[#ADADAD] hover:text-white border border-[#2D221A]"
              }`}
            >
              🥈 Runners-Up
            </button>
            <button
              onClick={() => setResultFilter("finalist")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "finalist"
                  ? "bg-white text-[#1D1510] font-semibold"
                  : "bg-[#1D1814] text-[#ADADAD] hover:text-white border border-[#2D221A]"
              }`}
            >
              Finalists
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#7D7D7D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search event, organizer, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60"
            />
          </div>
        </div>

        {/* Vertical Chronological Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((hackathon) => (
            <HackathonCard key={hackathon.slug} hackathon={hackathon} />
          ))}
        </div>
      </div>

      {/* 10.6 Closing Event CTA */}
      <div className="p-8 sm:p-12 rounded-xl bg-[#141210] border border-[#2D221A] text-center space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Planning an upcoming hackathon or innovation challenge?
        </h2>
        <p className="text-sm text-[#ADADAD] max-w-md mx-auto">
          We invite event organizers, sponsors, and mentors to connect with Extokened.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-amber-glass"
          >
            <span>Invite Extokened to compete</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
