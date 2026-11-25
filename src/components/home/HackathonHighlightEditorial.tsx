"use client";

import React from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { Trophy, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function HackathonHighlightEditorial() {
  const featuredWin = hackathons.find((h) => h.resultType === "winner") || hackathons[0];
  const timelineEvents = hackathons.filter((h) => h.slug !== featuredWin.slug).slice(0, 3);

  const getResultBadge = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "text-[#F5C451] border-[#F5C451]/35 bg-[#F5C451]/10";
      case "runner_up":
        return "text-[#A5B2FF] border-[#8B9BF7]/35 bg-[#8B9BF7]/10";
      case "finalist":
        return "text-[#DCE2FF] border-white/[0.14] bg-[#141827]";
      default:
        return "text-[#8F99B8] border-white/[0.1] bg-[#111522]";
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 5 Columns: Intro & Archive Link */}
          <MotionReveal direction="left" className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="eyebrow-badge">Competitive Crucible</span>

            <h2 className="font-section-title font-bold text-white">
              Verified Hackathon{" "}
              <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#C8D0EC] leading-[1.72]">
              Hackathons are our testing ground. We separate championship titles, runner-up podiums, and competitor sprints transparently with verifiable evidence and live code links.
            </p>

            {/* Separated Outcome Breakdown */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="surface-inset p-3.5">
                <div className="text-xl font-display font-bold text-[#F5C451] tabular-nums">7</div>
                <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">Champions</div>
              </div>
              <div className="surface-inset p-3.5">
                <div className="text-xl font-display font-bold text-[#A5B2FF] tabular-nums">5</div>
                <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">Runners-Up</div>
              </div>
              <div className="surface-inset p-3.5">
                <div className="text-xl font-display font-bold text-white tabular-nums">6</div>
                <div className="text-[11px] font-mono text-[#8F99B8] mt-0.5">Finalists</div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/hackathons" className="btn-secondary group">
                <span>View complete 18-event archive</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </MotionReveal>

          {/* Right 7 Columns: Featured Victory & Notable Timeline */}
          <MotionReveal direction="right" delay={0.1} className="lg:col-span-7 space-y-6">
            {/* Featured Event Story Card */}
            <div className="surface-card surface-card-interactive p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold ${getResultBadge(
                    featuredWin.resultType
                  )}`}
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{featuredWin.award}</span>
                </span>
                <span className="text-[#8F99B8]">
                  {featuredWin.date} • {featuredWin.duration}
                </span>
              </div>

              <div className="space-y-1.5">
                <Link href={`/hackathons/${featuredWin.slug}`} className="group block">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#A5B2FF] transition-colors">
                    {featuredWin.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#7D87A6] font-mono">
                  Organized by {featuredWin.organizer} • {featuredWin.location}
                </p>
              </div>

              <div className="surface-inset p-4 space-y-1.5">
                <div className="text-xs font-mono text-[#A5B2FF] font-semibold">
                  Built: {featuredWin.projectTitle}
                </div>
                <p className="text-sm text-[#C2CBE6] leading-relaxed">
                  {featuredWin.solutionSummary}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08]">
                <span className="text-xs font-mono text-white font-semibold pt-2">
                  {featuredWin.standoutMetric}
                </span>
                <Link
                  href={`/hackathons/${featuredWin.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors pt-2"
                >
                  <span>Event breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Recent Notable Sprints */}
            <div className="surface-card p-6 space-y-4">
              <div className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-[0.12em]">
                Recent Notable Sprints
              </div>

              <div className="divide-y divide-white/[0.08]">
                {timelineEvents.map((evt) => (
                  <Link
                    key={evt.slug}
                    href={`/hackathons/${evt.slug}`}
                    className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="text-sm font-semibold text-white group-hover:text-[#A5B2FF] transition-colors truncate">
                        {evt.name}
                      </div>
                      <div className="text-xs text-[#7D87A6] font-mono truncate">
                        {evt.date} • {evt.projectTitle}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getResultBadge(
                          evt.resultType
                        )}`}
                      >
                        {evt.resultType === "winner"
                          ? "Winner"
                          : evt.resultType === "runner_up"
                          ? "Runner-up"
                          : "Finalist"}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#7D87A6] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
