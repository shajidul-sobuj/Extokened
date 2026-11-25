"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons } from "@/data/hackathons";
import { projects } from "@/data/projects";
import {
  Trophy,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function HackathonHighlightEditorial() {
  const showcaseEvents = hackathons.slice(0, 4);
  const [activeSlug, setActiveSlug] = useState<string>(showcaseEvents[0]?.slug ?? "");

  const activeEvent =
    showcaseEvents.find((h) => h.slug === activeSlug) || showcaseEvents[0];

  const hasCaseStudy = Boolean(
    activeEvent?.projectSlug &&
      projects.some((p) => p.slug === activeEvent.projectSlug)
  );

  const winnerCount = hackathons.filter((h) => h.resultType === "winner").length;
  const finalistCount = hackathons.filter((h) => h.resultType === "finalist").length;
  const participatedCount = hackathons.length;

  const getResultBadge = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "text-[#F5C451] border-[#F5C451]/35 bg-[#F5C451]/12";
      case "finalist":
        return "text-[#A5B2FF] border-[#8B9BF7]/35 bg-[#8B9BF7]/12";
      default:
        return "text-[#CFD7F2] border-white/[0.14] bg-white/[0.05]";
    }
  };

  const getShortResultLabel = (resultType: string) => {
    switch (resultType) {
      case "winner":
        return "Winner";
      case "finalist":
        return "Finalist";
      default:
        return "Participated";
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Unified Top Header Bar (Matches Featured Projects & Team Rhythm) */}
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.1]">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow-badge">Competitive Crucible</span>
              <h2 className="font-section-title font-bold text-white">
                Verified Hackathon{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#C8D0EC] leading-[1.68]">
                Our hackathon journey—tracking events we participated in, reached the finals, and won, backed by live repositories and demos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
              {/* Separated Journey Summary Strip (Winner / Finalist / Participated) */}
              <div className="inline-flex items-center divide-x divide-white/[0.1] rounded-full bg-[#0C1020]/75 backdrop-blur-md border border-white/[0.12] px-1 py-1 text-xs font-mono">
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-[#F5C451] font-bold">{winnerCount}</strong>
                  <span className="text-[#B8C2E0]">Winner</span>
                </span>
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-[#A5B2FF] font-bold">{finalistCount}</strong>
                  <span className="text-[#B8C2E0]">Finalist</span>
                </span>
                <span className="px-3 py-1 flex items-center gap-1.5">
                  <strong className="text-white font-bold">{participatedCount}</strong>
                  <span className="text-[#B8C2E0]">Logged</span>
                </span>
              </div>

              <Link
                href="/hackathons"
                className="btn-secondary py-2 px-4 text-xs sm:text-[13px] group"
              >
                <span>View full journey</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </MotionReveal>

        {/* Balanced 12-Col Interactive Hall-of-Fame Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 5 Columns: Selectable Competition Ledger */}
          <MotionReveal direction="left" className="lg:col-span-5 flex flex-col">
            <div className="surface-card p-3 sm:p-4 flex flex-col justify-between h-full gap-2">
              <div className="px-2.5 pt-1 pb-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.12em] text-[#8F99B8] border-b border-white/[0.08]">
                <span>Select Event Dossier</span>
                <span>01 — 0{showcaseEvents.length}</span>
              </div>

              <div className="space-y-2 flex-1 py-1">
                {showcaseEvents.map((evt, idx) => {
                  const isActive = evt.slug === activeEvent.slug;
                  return (
                    <button
                      key={evt.slug}
                      type="button"
                      onClick={() => setActiveSlug(evt.slug)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? "bg-[#151B33]/90 border-[#8B9BF7]/45 shadow-[0_8px_24px_-10px_rgba(139,155,247,0.3)]"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.14]"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full bg-gradient-to-b from-[#F5C451] to-[#8B9BF7]"
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-start justify-between gap-2.5 pl-1">
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 text-[11px] font-mono text-[#8F99B8]">
                            <span>0{idx + 1}</span>
                            <span className="text-white/20">•</span>
                            <span>{evt.date}</span>
                            <span className="text-white/20">•</span>
                            <span>{evt.duration}</span>
                          </div>
                          <div
                            className={`text-sm font-display font-bold leading-snug truncate transition-colors ${
                              isActive
                                ? "text-white"
                                : "text-[#DCE2FF] group-hover:text-white"
                            }`}
                          >
                            {evt.name}
                          </div>
                          <div className="text-xs text-[#9BA5C4] truncate">
                            {evt.projectTitle}
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border shrink-0 mt-0.5 ${getResultBadge(
                            evt.resultType
                          )}`}
                        >
                          {getShortResultLabel(evt.resultType)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2.5 px-2.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8F99B8]">
                <span>{participatedCount} Documented Hackathons</span>
                <Link
                  href="/hackathons"
                  className="text-[#A5B2FF] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Full archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </MotionReveal>

          {/* Right 7 Columns: Active Verified Event Dossier */}
          <MotionReveal direction="right" delay={0.08} className="lg:col-span-7 flex flex-col">
            <div className="surface-card p-6 sm:p-7 flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full gap-5"
                >
                  {/* Top Header & Metadata */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold ${getResultBadge(
                          activeEvent.resultType
                        )}`}
                      >
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{activeEvent.award}</span>
                      </span>

                      <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#E4E9FF] text-[11px] font-semibold">
                        {activeEvent.standoutMetric}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <Link
                        href={`/hackathons/${activeEvent.slug}`}
                        className="group block"
                      >
                        <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white group-hover:text-[#B4C0FF] transition-colors">
                          {activeEvent.name}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#9BA5C4]">
                        <span>{activeEvent.organizer}</span>
                        <span className="inline-flex items-center gap-1 text-[#8F99B8]">
                          <Calendar className="w-3.5 h-3.5" />
                          {activeEvent.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#8F99B8]">
                          <Clock className="w-3.5 h-3.5" />
                          {activeEvent.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#8F99B8]">
                          <MapPin className="w-3.5 h-3.5" />
                          {activeEvent.location}
                        </span>
                      </div>
                    </div>

                    {/* Engineered Solution Block */}
                    <div className="surface-inset p-4 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-semibold text-[#A5B2FF]">
                          Built: {activeEvent.projectTitle}
                        </span>
                        {hasCaseStudy && activeEvent.projectSlug && (
                          <Link
                            href={`/projects/${activeEvent.projectSlug}`}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#E4E9FF] hover:text-[#A5B2FF] transition-colors"
                          >
                            <Layers className="w-3 h-3" />
                            <span>Case study</span>
                          </Link>
                        )}
                      </div>
                      <p className="text-[13px] sm:text-sm text-[#CFD7F2] leading-[1.65]">
                        {activeEvent.solutionSummary}
                      </p>
                    </div>

                    {/* Verified Key Highlights */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#8F99B8]">
                        Verified Highlights
                      </div>
                      <ul className="space-y-1.5">
                        {activeEvent.highlights.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[13px] text-[#DCE2FF] leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {activeEvent.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-tag text-[11px] py-0.5 px-2">
                          {tech}
                        </span>
                      ))}
                      {activeEvent.techStack.length > 5 && (
                        <span className="tech-tag text-[11px] py-0.5 px-2 text-[#8F99B8]">
                          +{activeEvent.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Verified Evidence Links & Breakdown CTA */}
                  <div className="pt-4 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {activeEvent.links.github && (
                        <a
                          href={activeEvent.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.12] text-xs font-mono text-[#DCE2FF] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                      {activeEvent.links.liveUrl && (
                        <a
                          href={activeEvent.links.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.12] text-xs font-mono text-[#DCE2FF] hover:text-white hover:border-[#8B9BF7]/50 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/hackathons/${activeEvent.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors group"
                    >
                      <span>Full event breakdown</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
