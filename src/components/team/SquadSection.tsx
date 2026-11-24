"use client";

import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { MemberCard } from "./MemberCard";
import { Users, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import { playHover, playClick } from "@/lib/sound";

export function SquadSection() {
  return (
    <section className="py-20 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">
              <Users className="w-3.5 h-3.5" />
              <span>THE SQUADRON CORE // CLEARANCE: ALPHA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Operatives of Extokened
            </h2>
            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
              We stick together as a permanent team because of unrivaled chemistry, complementary skill sets, and a shared hunger to win hackathons.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>4 Core Specialists</span>
            </div>
          </div>
        </div>

        {/* Classified Operative Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* View Full Squad Philosophy Link */}
        <div className="mt-12 text-center">
          <Link
            href="/team"
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-white transition-all duration-200 group"
          >
            <span>LEARN ABOUT OUR 48-HOUR HACKATHON PLAYBOOK & ORIGIN</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
