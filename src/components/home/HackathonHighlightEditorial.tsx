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
        return "text-[#E8B86D] border-[#E8B86D]/40 bg-[#E8B86D]/10";
      case "runner_up":
        return "text-[#74C69D] border-[#74C69D]/40 bg-[#74C69D]/10";
      case "finalist":
        return "text-[#AAA9A3] border-[#414449] bg-[#191B1F]";
      default:
        return "text-[#777873] border-[#292B2E] bg-[#111214]";
    }
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#292B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Intro & Navigation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow-label">Competitive Crucible</span>
            
            <h2 className="font-section-title font-semibold text-[#F3F1EC] leading-tight">
              Verified Hackathon Achievements
            </h2>

            <p className="text-sm text-[#AAA9A3] leading-relaxed font-sans">
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
            <div className="editorial-card p-6 sm:p-8 bg-[#111214] border border-[#292B2E] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded border text-[11px] font-semibold ${getResultBadge(featuredWin.resultType)}`}>
                  {featuredWin.badgeLabel}
                </span>
                <span className="text-[#777873]">
                  {featuredWin.date} • {featuredWin.duration}
                </span>
              </div>

              <div>
                <Link href={`/hackathons/${featuredWin.slug}`} className="group block">
                  <h3 className="text-2xl font-bold text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
                    {featuredWin.name}
                  </h3>
                </Link>
                <p className="text-xs text-[#777873] mt-1">
                  Organized by {featuredWin.organizer} • {featuredWin.location}
                </p>
              </div>

              <div className="p-3.5 rounded-md bg-[#191B1F] border border-[#292B2E] text-xs space-y-1">
                <div className="font-mono text-[#C6F36A] font-semibold">
                  Built: {featuredWin.projectTitle}
                </div>
                <p className="text-[#AAA9A3] leading-relaxed">
                  {featuredWin.solutionSummary}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F3F1EC] font-semibold">
                  {featuredWin.standoutMetric}
                </span>
                <Link
                  href={`/hackathons/${featuredWin.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F3F1EC] hover:text-[#C6F36A] transition-colors"
                >
                  <span>Event breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Notable Timeline Strip Beneath */}
            <div className="editorial-card p-4 sm:p-6 bg-[#111214]/60 border border-[#292B2E] space-y-3">
              <div className="text-[11px] font-mono text-[#777873] uppercase tracking-wider">
                Recent Notable Sprints
              </div>
              
              <div className="divide-y divide-[#292B2E]">
                {timelineEvents.map((evt) => (
                  <div key={evt.slug} className="py-3 first:pt-1 last:pb-1 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-[#F3F1EC]">
                        {evt.name}
                      </div>
                      <div className="text-[11px] text-[#777873] font-mono">
                        {evt.date} • {evt.projectTitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getResultBadge(evt.resultType)}`}>
                        {evt.resultType === "winner" ? "Winner" : evt.resultType === "runner_up" ? "Runner-up" : "Finalist"}
                      </span>
                      <Link
                        href={`/hackathons/${evt.slug}`}
                        className="text-xs text-[#AAA9A3] hover:text-[#F3F1EC]"
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
