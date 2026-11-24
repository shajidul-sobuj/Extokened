"use client";

import React from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { Trophy, ArrowRight, Award, Calendar } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function HackathonHighlightEditorial() {
  const featuredWin = hackathons.find((h) => h.resultType === "winner") || hackathons[0];
  const timelineEvents = hackathons.filter((h) => h.slug !== featuredWin.slug).slice(0, 3);

  const getResultBadge = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "text-[#FFC857] border-[#FFC857]/40 bg-[#151824] shadow-[0_0_12px_rgba(255,200,87,0.2)]";
      case "runner_up":
        return "text-[#8B9BF7] border-[#8B9BF7]/40 bg-[#151824]";
      case "finalist":
        return "text-[#BAC0DC] border-[#1E2337] bg-[#0F1118]";
      default:
        return "text-[#727896] border-[#1E2337] bg-[#0F1118]";
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#1E2337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Intro & Navigation */}
          <MotionReveal direction="left" className="lg:col-span-5 space-y-6">
            <span className="pill-lavender">Competitive Crucible</span>
            
            <h2 className="font-section-title font-semibold text-white leading-tight">
              Verified Hackathon Achievements
            </h2>

            <p className="text-sm text-[#BAC0DC] leading-relaxed font-sans">
              Hackathons are our testing ground. We separate championship titles, runner-up podiums, and competitor sprints transparently with verifiable evidence and live code links.
            </p>

            <div className="pt-2">
              <Link
                href="/hackathons"
                className="btn-meadow-secondary"
              >
                <span>View complete 18-event archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionReveal>

          {/* Right Column: Featured Event Story & Chronological Timeline */}
          <MotionReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-6">
            
            {/* Featured Event Story Card */}
            <div className="meadow-card p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold flex items-center gap-1.5 ${getResultBadge(featuredWin.resultType)}`}>
                  <Trophy className="w-3.5 h-3.5 text-[#FFC857]" />
                  <span>{featuredWin.badgeLabel}</span>
                </span>
                <span className="text-[#8E96B8]">
                  {featuredWin.date} • {featuredWin.duration}
                </span>
              </div>

              <div>
                <Link href={`/hackathons/${featuredWin.slug}`} className="group block">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#8B9BF7] transition-colors">
                    {featuredWin.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#8E96B8] mt-1 font-mono">
                  Organized by {featuredWin.organizer} • {featuredWin.location}
                </p>
              </div>

              <div className="p-3.5 rounded-lg glass-panel-inset text-xs space-y-1">
                <div className="font-mono text-[#8B9BF7] font-semibold">
                  Built: {featuredWin.projectTitle}
                </div>
                <p className="text-[#CAD1F0] leading-relaxed">
                  {featuredWin.solutionSummary}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-white font-semibold">
                  {featuredWin.standoutMetric}
                </span>
                <Link
                  href={`/hackathons/${featuredWin.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#8B9BF7] transition-colors"
                >
                  <span>Event breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Notable Timeline Strip Beneath */}
            <div className="meadow-card p-4 sm:p-6 space-y-3">
              <div className="text-[11px] font-mono text-[#8E96B8] uppercase tracking-wider">
                Recent Notable Sprints
              </div>
              
              <div className="divide-y divide-[rgba(139,155,247,0.14)]">
                {timelineEvents.map((evt) => (
                  <div key={evt.slug} className="py-3 first:pt-1 last:pb-1 flex items-center justify-between gap-4 group hover:bg-[rgba(139,155,247,0.06)] px-2 -mx-2 rounded transition-colors">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white group-hover:text-[#8B9BF7] transition-colors">
                        {evt.name}
                      </div>
                      <div className="text-[11px] text-[#8E96B8] font-mono">
                        {evt.date} • {evt.projectTitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${getResultBadge(evt.resultType)}`}>
                        {evt.resultType === "winner" ? "Winner" : evt.resultType === "runner_up" ? "Runner-up" : "Finalist"}
                      </span>
                      <Link
                        href={`/hackathons/${evt.slug}`}
                        className="text-xs text-[#BAC0DC] hover:text-[#8B9BF7]"
                        aria-label={`View ${evt.name}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </MotionReveal>

        </div>

      </div>
    </section>
  );
}
