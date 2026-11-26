"use client";

import React from "react";
import Link from "next/link";
import { hackathons } from "@/data/hackathons";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function HackathonHighlightEditorial() {
  const recentEvents = hackathons.slice(0, 5);
  const winnerCount = hackathons.filter((h) => h.resultType === "winner").length;
  const finalistCount = hackathons.filter((h) => h.resultType === "finalist").length;
  const totalLogged = hackathons.length;

  const getBadgeStyle = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "text-[#F5C451] border-[#F5C451]/35 bg-[#F5C451]/12";
      case "finalist":
        return "text-[#A5B2FF] border-[#8B9BF7]/35 bg-[#8B9BF7]/12";
      default:
        return "text-[#CFD7F2] border-white/[0.16] bg-white/[0.05]";
    }
  };

  const getStatusLabel = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "Winner";
      case "finalist":
        return "Finalist";
      default:
        return "Participated";
    }
  };

  const getShortProjectName = (projectTitle: string) => {
    return projectTitle.split(":")[0].trim();
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Clean Compact Section Header */}
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-white/[0.1]">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-badge">Hackathon Journey</span>
              <h2 className="font-section-title font-bold text-white">
                Competitions &amp;{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Milestones
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#C8D0EC] leading-[1.68]">
                A quick glance at hackathons we participated in, reached the finals, and won. Click any event for the full breakdown.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
              <div className="inline-flex items-center divide-x divide-white/[0.1] rounded-full bg-[#0C1020]/65 backdrop-blur-md border border-white/[0.12] px-1 py-1 text-xs font-mono">
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-[#F5C451] font-bold">{winnerCount}</strong>
                  <span className="text-[#C8D0EC]">Winner</span>
                </span>
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-[#A5B2FF] font-bold">{finalistCount}</strong>
                  <span className="text-[#C8D0EC]">Finalist</span>
                </span>
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-white font-bold">{totalLogged}</strong>
                  <span className="text-[#C8D0EC]">Logged</span>
                </span>
              </div>

              <Link
                href="/hackathons"
                className="btn-secondary py-2 px-4 text-xs sm:text-[13px] group"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </MotionReveal>

        {/* Single Sculpted Minimal Editorial Award Ledger */}
        <MotionReveal delay={0.06}>
          <div
            className="relative overflow-hidden rounded-[20px] border border-white/[0.14] shadow-[0_24px_60px_-22px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.18)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(16, 21, 38, 0.42) 0%, rgba(10, 13, 24, 0.7) 100%)",
              backdropFilter: "blur(22px) saturate(155%)",
              WebkitBackdropFilter: "blur(22px) saturate(155%)",
            }}
          >
            {/* Top Specular Hairline */}
            <div
              className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              aria-hidden="true"
            />

            {/* Desktop Column Header Strip */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3.5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#8F99B8] border-b border-white/[0.08] bg-white/[0.02]">
              <div className="md:col-span-2">Date</div>
              <div className="md:col-span-5">Event</div>
              <div className="md:col-span-3">Project Built</div>
              <div className="md:col-span-2 text-right">Status</div>
            </div>

            {/* Crisp Scannable Event Rows */}
            <MotionStagger stagger={0.05} className="divide-y divide-white/[0.08]">
              {recentEvents.map((evt) => (
                <MotionItem key={evt.slug} distance={10}>
                  <Link
                    href={`/hackathons/${evt.slug}`}
                    className="group relative grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4 items-center px-5 sm:px-6 py-4 sm:py-5 hover:bg-white/[0.045] transition-colors duration-200"
                  >
                    {/* Subtle Left Hover Highlight Bar */}
                    <span
                      className="pointer-events-none absolute left-0 top-3 bottom-3 w-[2.5px] rounded-r-full bg-gradient-to-b from-[#A5B2FF] to-[#F5C451] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />

                    {/* Date */}
                    <div className="md:col-span-2 flex items-center justify-between md:block">
                      <span className="text-xs font-mono text-[#9BA5C4] group-hover:text-[#DCE2FF] transition-colors">
                        {evt.date}
                      </span>

                      {/* Mobile-only Status Badge aligned right on top line */}
                      <span
                        className={`md:hidden inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${getBadgeStyle(
                          evt.resultType
                        )}`}
                      >
                        {evt.resultType === "winner" && (
                          <Trophy className="w-2.5 h-2.5" />
                        )}
                        {getStatusLabel(evt.resultType)}
                      </span>
                    </div>

                    {/* Event Name & Organizer */}
                    <div className="md:col-span-5 min-w-0">
                      <h3 className="text-[15px] sm:text-base font-display font-semibold text-white group-hover:text-[#C4CEFF] transition-colors truncate">
                        {evt.name}
                      </h3>
                      <p className="text-xs text-[#8F99B8] truncate mt-0.5">
                        {evt.organizer}
                      </p>
                    </div>

                    {/* Short Project Built */}
                    <div className="md:col-span-3 flex items-center gap-2 min-w-0">
                      <span className="md:hidden text-[11px] font-mono text-[#7D87A6]">
                        Built:
                      </span>
                      <span className="text-xs sm:text-[13px] font-mono text-[#CFD7F2] group-hover:text-white transition-colors truncate">
                        {getShortProjectName(evt.projectTitle)}
                      </span>
                    </div>

                    {/* Desktop Status Pill + Sliding Arrow */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-end gap-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${getBadgeStyle(
                          evt.resultType
                        )}`}
                      >
                        {evt.resultType === "winner" && (
                          <Trophy className="w-3 h-3" />
                        )}
                        {getStatusLabel(evt.resultType)}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#7D87A6] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>
                  </Link>
                </MotionItem>
              ))}
            </MotionStagger>

            {/* Clean Bottom Archive Bar */}
            <div className="px-5 sm:px-6 py-3.5 border-t border-white/[0.08] bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#8F99B8]">
              <span>
                Showing {recentEvents.length} of {totalLogged} documented hackathons
              </span>
              <Link
                href="/hackathons"
                className="inline-flex items-center gap-1.5 text-[#B4C0FF] hover:text-white transition-colors group"
              >
                <span>Explore full hackathon archive</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
