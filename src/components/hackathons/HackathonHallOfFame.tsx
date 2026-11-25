"use client";

import React, { useState } from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { HackathonCard } from "./HackathonCard";
import { Trophy, ArrowRight, ShieldCheck } from "lucide-react";

export function HackathonHallOfFame() {
  const [filter, setFilter] = useState<"all" | "winner" | "finalist" | "participant">("all");

  const filteredHackathons = hackathons
    .filter((h) => h.featured)
    .filter((h) => {
      if (filter === "all") return true;
      return h.resultType === filter;
    });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#253044]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
              <Trophy className="w-3.5 h-3.5" />
              <span>Verified Competition Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Hackathon Podiums &amp; Solutions
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every hackathon is an evidence-backed trial under pressure. Here is how Extokened turns 36–48 hour constraints into production-caliber software.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#101724] p-1.5 rounded-lg border border-[#253044] self-start md:self-end">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === "all"
                  ? "bg-[#151F2E] text-white border border-[#253044] shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Featured
            </button>
            <button
              onClick={() => setFilter("winner")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === "winner"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Winner
            </button>
            <button
              onClick={() => setFilter("finalist")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === "finalist"
                  ? "bg-[#7C5CFF]/20 text-[#A78BFA] border border-[#7C5CFF]/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Finalist
            </button>
            <button
              onClick={() => setFilter("participant")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === "participant"
                  ? "bg-[#22D3C5]/20 text-[#22D3C5] border border-[#22D3C5]/30 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Participated
            </button>
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>

        {/* Bottom CTA to Full Timeline */}
        <div className="mt-12 text-center">
          <Link
            href="/hackathons"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#101724] hover:bg-[#151F2E] border border-[#253044] hover:border-zinc-400 transition-all shadow-sm"
          >
            <span>View All 18 Competitions in Archive</span>
            <ArrowRight className="w-4 h-4 text-[#22D3C5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
