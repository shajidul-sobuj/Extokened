import React from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { Trophy, ArrowRight, ArrowUpRight, Award, Calendar } from "lucide-react";

export function HackathonHighlightEditorial() {
  const featuredWin = hackathons.find((h) => h.resultType === "winner") || hackathons[0];
  const timelineEvents = hackathons.filter((h) => h.slug !== featuredWin.slug).slice(0, 3);

  const getResultBadge = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "text-[#F0A24C] border-[#F0A24C]/40 bg-[#1D1510] shadow-[0_0_12px_rgba(240,162,76,0.15)]";
      case "runner_up":
        return "text-[#E0A165] border-[#E0A165]/40 bg-[#1D1510]";
      case "finalist":
        return "text-[#ADADAD] border-[#2D221A] bg-[#141210]";
      default:
        return "text-[#7D7D7D] border-[#2D221A] bg-[#141210]";
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#2D221A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Intro & Navigation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="pill-amber">Competitive Crucible</span>
            
            <h2 className="font-section-title font-semibold text-white leading-tight">
              Verified Hackathon Achievements
            </h2>

            <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
              Hackathons are our testing ground. We separate championship titles, runner-up podiums, and competitor sprints transparently with verifiable evidence and live code links.
            </p>

            <div className="pt-2">
              <Link
                href="/hackathons"
                className="btn-secondary"
              >
                <span>View complete 18-event archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Event Story & Chronological Timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Featured Event Story Card */}
            <div className="editorial-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${getResultBadge(featuredWin.resultType)}`}>
                  {featuredWin.badgeLabel}
                </span>
                <span className="text-[#7D7D7D]">
                  {featuredWin.date} • {featuredWin.duration}
                </span>
              </div>

              <div>
                <Link href={`/hackathons/${featuredWin.slug}`} className="group block">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#F0A24C] transition-colors">
                    {featuredWin.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#7D7D7D] mt-1">
                  Organized by {featuredWin.organizer} • {featuredWin.location}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1814] border border-[#2D221A] text-xs space-y-1">
                <div className="font-mono text-[#F0A24C] font-semibold">
                  Built: {featuredWin.projectTitle}
                </div>
                <p className="text-[#ADADAD] leading-relaxed">
                  {featuredWin.solutionSummary}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-white font-semibold">
                  {featuredWin.standoutMetric}
                </span>
                <Link
                  href={`/hackathons/${featuredWin.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F0A24C] transition-colors"
                >
                  <span>Event breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Notable Timeline Strip Beneath */}
            <div className="editorial-card p-4 sm:p-6 bg-[#141210]/60 border border-[#2D221A] space-y-3">
              <div className="text-[11px] font-mono text-[#7D7D7D] uppercase tracking-wider">
                Recent Notable Sprints
              </div>
              
              <div className="divide-y divide-[#2D221A]">
                {timelineEvents.map((evt) => (
                  <div key={evt.slug} className="py-3 first:pt-1 last:pb-1 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white">
                        {evt.name}
                      </div>
                      <div className="text-[11px] text-[#7D7D7D] font-mono">
                        {evt.date} • {evt.projectTitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${getResultBadge(evt.resultType)}`}>
                        {evt.resultType === "winner" ? "Winner" : evt.resultType === "runner_up" ? "Runner-up" : "Finalist"}
                      </span>
                      <Link
                        href={`/hackathons/${evt.slug}`}
                        className="text-xs text-[#ADADAD] hover:text-[#F0A24C]"
                        aria-label={`View ${evt.name}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
