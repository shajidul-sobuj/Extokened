"use client";

import React, { useState } from "react";
import Link from "next/link";
import { hackathons, AwardType } from "@/data/hackathons";
import { HackathonCard } from "./HackathonCard";
import { Trophy, ArrowRight, Sparkles, Filter } from "lucide-react";

export function HackathonHallOfFame() {
  const [filter, setFilter] = useState<"all" | "champion" | "runner_up">("all");

  const filteredHackathons = hackathons
    .filter((h) => h.featured)
    .filter((h) => {
      if (filter === "all") return true;
      if (filter === "champion") return h.awardType === "champion";
      if (filter === "runner_up") return h.awardType === "runner_up" || h.awardType === "special_track";
      return true;
    });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/5">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>THE PODIUM CABINET</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              Hackathon Victories & Track Record
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every hackathon is a crucible test. Here is how Extokened turns 36–48 hours of intense pressure, architectural speed, and teamwork into championship-winning solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#0E1117] p-1.5 rounded-xl border border-white/10 self-start md:self-end">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === "all"
                  ? "bg-cyber-cyan text-black font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => setFilter("champion")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === "champion"
                  ? "bg-amber-400 text-black font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🏆 Champions
            </button>
            <button
              onClick={() => setFilter("runner_up")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === "runner_up"
                  ? "bg-cyber-purple text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🥈 Special Tracks
            </button>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>

        {/* View All Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/hackathons"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/40 text-sm font-semibold text-white transition-all duration-200 group"
          >
            <span>View Complete Hackathon Timeline ({hackathons.length}+ Events)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
