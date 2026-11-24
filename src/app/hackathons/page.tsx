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
        <div className="eyebrow-label">
          COMPETITIONS / HALL OF FAME
        </div>
        <h1 className="font-page-title font-semibold text-[#F3F1EC] leading-tight">
          Hackathon Archive
        </h1>
        <p className="text-base sm:text-lg text-[#AAA9A3] leading-relaxed font-sans">
          A chronological record of hackathons entered, problems tackled under intense pressure, and verified outcomes. Wins, runner-up honors, and participation are counted and documented separately.
        </p>
      </div>

      {/* 10.2 Achievement Overview: Separated Totals */}
      <div className="editorial-card p-6 bg-[#111214] border border-[#292B2E] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
        <div className="space-y-1">
          <span className="text-[#777873] uppercase tracking-wider block text-[10px]">Total Competitions</span>
          <span className="text-3xl font-bold font-display text-[#F3F1EC] block">18</span>
          <span className="text-[11px] text-[#777873]">National &amp; global sprints</span>
        </div>

        <div className="space-y-1 border-l border-[#292B2E] pl-6">
          <span className="text-[#E8B86D] uppercase tracking-wider block text-[10px]">Grand Champions</span>
          <span className="text-3xl font-bold font-display text-[#E8B86D] block">7</span>
          <span className="text-[11px] text-[#AAA9A3]">1st place &amp; track awards</span>
        </div>

        <div className="space-y-1 border-l border-[#292B2E] pl-6">
          <span className="text-[#74C69D] uppercase tracking-wider block text-[10px]">Runners-Up</span>
          <span className="text-3xl font-bold font-display text-[#74C69D] block">5</span>
          <span className="text-[11px] text-[#AAA9A3]">2nd place &amp; track honors</span>
        </div>

        <div className="space-y-1 border-l border-[#292B2E] pl-6">
          <span className="text-[#AAA9A3] uppercase tracking-wider block text-[10px]">Finalists / Sprints</span>
          <span className="text-3xl font-bold font-display text-[#F3F1EC] block">6</span>
          <span className="text-[11px] text-[#777873]">Top selections &amp; entrants</span>
        </div>
      </div>

      {/* 10.3 Featured Result Split Card */}
      {featuredEvent && (
        <div className="editorial-card p-6 sm:p-10 bg-[#111214] border border-[#292B2E] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded border text-[11px] font-semibold text-[#E8B86D] border-[#E8B86D]/40 bg-[#E8B86D]/10">
              Featured Podium Result
            </span>
            <span className="text-[#777873]">
              {featuredEvent.date} • {featuredEvent.duration} Sprint
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F1EC]">
                {featuredEvent.name}
              </h2>
              <p className="text-xs text-[#777873] font-mono">
                Organized by {featuredEvent.organizer} • {featuredEvent.location}
              </p>
              <div className="p-4 rounded-md bg-[#191B1F] border border-[#292B2E] text-xs space-y-1.5 mt-3">
                <div className="font-mono text-[#C6F36A] font-semibold">
                  Project: {featuredEvent.projectTitle}
                </div>
                <p className="text-[#AAA9A3] leading-relaxed">
                  {featuredEvent.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#292B2E] lg:pl-8">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#777873]">Official Award</span>
                <div className="text-sm font-bold text-[#E8B86D]">{featuredEvent.award}</div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#777873]">Standout Metric</span>
                <div className="text-sm font-mono text-[#F3F1EC]">{featuredEvent.standoutMetric}</div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/hackathons/${featuredEvent.slug}`}
                  className="btn-primary"
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#292B2E]">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setResultFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "all"
                  ? "bg-[#C6F36A] text-[#10120A] font-semibold"
                  : "bg-[#191B1F] text-[#AAA9A3] hover:text-[#F3F1EC] border border-[#292B2E]"
              }`}
            >
              All Events ({hackathons.length})
            </button>
            <button
              onClick={() => setResultFilter("winner")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "winner"
                  ? "bg-[#E8B86D] text-[#10120A] font-semibold"
                  : "bg-[#191B1F] text-[#AAA9A3] hover:text-[#F3F1EC] border border-[#292B2E]"
              }`}
            >
              🏆 Champions
            </button>
            <button
              onClick={() => setResultFilter("runner_up")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "runner_up"
                  ? "bg-[#74C69D] text-[#10120A] font-semibold"
                  : "bg-[#191B1F] text-[#AAA9A3] hover:text-[#F3F1EC] border border-[#292B2E]"
              }`}
            >
              🥈 Runners-Up
            </button>
            <button
              onClick={() => setResultFilter("finalist")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                resultFilter === "finalist"
                  ? "bg-[#F3F1EC] text-[#10120A] font-semibold"
                  : "bg-[#191B1F] text-[#AAA9A3] hover:text-[#F3F1EC] border border-[#292B2E]"
              }`}
            >
              Finalists
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#777873] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search event, organizer, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0A0B] border border-[#292B2E] rounded-md pl-9 pr-3 py-2 text-xs text-[#F3F1EC] placeholder-[#777873] focus:outline-none focus:border-[#414449]"
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
      <div className="p-8 sm:p-12 rounded-lg bg-[#111214] border border-[#292B2E] text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#F3F1EC]">
          Planning an upcoming hackathon or innovation challenge?
        </h2>
        <p className="text-sm text-[#AAA9A3] max-w-md mx-auto">
          We invite event organizers, sponsors, and mentors to connect with Extokened.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-primary"
          >
            <span>Invite Extokened to compete</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
