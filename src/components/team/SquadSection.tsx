"use client";

import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { MemberCard } from "./MemberCard";
import { Users, ArrowRight } from "lucide-react";

export function SquadSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#253044]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22D3C5]/10 border border-[#22D3C5]/30 text-xs font-mono text-[#22D3C5]">
              <Users className="w-3.5 h-3.5" />
              <span>Core Engineering Roster</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The People Behind Extokened
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We operate as a permanent squad. Deep collaboration, complementary domain expertise, and shared accountability drive every sprint we undertake.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-3 py-1.5 rounded-lg bg-[#101724] border border-[#253044] text-xs font-mono text-zinc-300">
              <span>4 Active Specialists</span>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* View Full Squad Philosophy Link */}
        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#101724] hover:bg-[#151F2E] border border-[#253044] hover:border-zinc-400 transition-all shadow-sm"
          >
            <span>Learn About Our Principles &amp; Workflow</span>
            <ArrowRight className="w-4 h-4 text-[#22D3C5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
