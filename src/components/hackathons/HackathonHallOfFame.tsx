"use client";

import React, { useState } from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { HackathonCard } from "./HackathonCard";
import { Trophy, ArrowRight, Sparkles, Filter } from "lucide-react";
import { playHover, playClick } from "@/lib/sound";

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
    <section className="py-20 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>THE PODIUM CABINET // ARCHIVE REF 0xEXT-WIN</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Championship Victories & Track Record
            </h2>
            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every hackathon is a trial by fire. Here is how Extokened turns 36–48 hours of intense pressure, architectural speed, and teamwork into championship-winning solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#090C12] p-1.5 rounded-xl border border-white/10 self-start md:self-end">
            <button
              onClick={() => {
                playClick();
                setFilter("all");
              }}
              onMouseEnter={playHover}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-cyan-400 text-black font-bold shadow-md shadow-cyan-400/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => {
                playClick();
                setFilter("champion");
              }}
              onMouseEnter={playHover}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                filter === "champion"
                  ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🏆 Champions
            </button>
            <button
              onClick={() => {
                playClick();
                setFilter("runner_up");
              }}
              onMouseEnter={playHover}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                filter === "runner_up"
                  ? "bg-purple-500 text-white font-bold shadow-md shadow-purple-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🥈 Special Tracks
            </button>
          </div>
        </div>

        {/* Hackathon Cards Grid with 3D Holographic Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>

        {/* View All Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/hackathons"
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-white transition-all duration-200 group"
          >
            <span>VIEW COMPLETE HACKATHON TIMELINE ({hackathons.length}+ CHALLENGES)</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
