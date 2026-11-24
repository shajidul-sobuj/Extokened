import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Globe, 
  Database, 
  ShieldCheck, 
  Clock, 
  Award,
  Layers,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Extokened | Origin, Principles & Engineering Philosophy",
  description:
    "Learn about Extokened: an independent technology and hackathon team. Our origin, operating principles, demonstrated focus areas, and rapid-prototyping playbook.",
};

export default function AboutPage() {
  const playbookSteps = [
    {
      timeframe: "Hours 00 – 04",
      title: "Problem Scope & Constraint Definition",
      description:
        "We dissect the competition brief, interview domain mentors if available, and define an exact, verifiable user friction point. We explicitly define what we will not build to avoid scope creep.",
    },
    {
      timeframe: "Hours 04 – 12",
      title: "Contract Freeze & Schema Architecture",
      description:
        "Before writing user interfaces or training model wrappers, we freeze TypeScript contracts, database schemas, and API endpoints. This enables frontend and backend specialists to build in parallel without blocking.",
    },
    {
      timeframe: "Hours 12 – 28",
      title: "Core Pipeline & Model Integration",
      description:
        "The deep-night sprint. We integrate foundation models (Gemini, Claude, Whisper), configure vector retrieval or computer vision edge workers, and verify sub-second response latencies.",
    },
    {
      timeframe: "Hours 28 – 40",
      title: "UI Polishing & Failure Mode Hardening",
      description:
        "We replace mock states with real streaming telemetry. We stress-test edge cases, handle network hiccups, optimize contrast and typography, and ensure the UI speaks for itself.",
    },
    {
      timeframe: "Hours 40 – 48",
      title: "Live Judge Verification & Stage Demonstration",
      description:
        "We don't pitch slide mocks. Every presentation is backed by a live running production build, measurable telemetry, and substantiated engineering outcomes.",
    },
  ];

  const commitments = [
    {
      title: "Evidence-Backed Claims",
      detail:
        "We never conflate hackathon participation with podium victories. Every award, finalist position, and track prize on this site is documented with verifiable event records.",
    },
    {
      title: "Production Caliber Code",
      detail:
        "Even when built under a 36-hour clock, our codebases prioritize clean TypeScript typings, deterministic error boundaries, and scalable data models.",
    },
    {
      title: "Zero-Hype Pragmatism",
      detail:
        "We avoid chasing trendy technology fads unless they solve a legitimate operational problem in healthcare, civic infrastructure, or financial inclusion.",
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* Hero Header */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101724] border border-[#253044] text-xs font-mono text-[#22D3C5]">
          <span>Origin &amp; Engineering Culture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          An independent squad built for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-[#A78BFA] to-[#22D3C5]">
            high-velocity execution.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
          Extokened was formed with a singular premise: the fastest way to master emerging technology is to build practical software under the relentless pressure of hackathons.
        </p>
      </div>

      {/* Origin Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#253044] pt-16">
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
            01 / Genesis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Origin Story
          </h2>
          <p className="text-sm text-zinc-400">
            From university collaborators to a synchronized team.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base font-sans">
          <p>
            In late 2023, four university engineers and designers in Dhaka entered their first bilateral hackathon under the moniker <strong className="text-white font-semibold">Extokened</strong>. We built <em>BhashaBondhu</em>, a cross-dialect translation tool for regional telemedicine doctors, and took home the Grand Championship trophy.
          </p>
          <p>
            What was originally conceived as a single weekend sprint revealed an undeniable dynamic: an intuitive division of labor, shared obsession with code quality, and the ability to maintain clarity when the clock is ticking down. Rather than disbanding after the competition, we made Extokened our permanent team home.
          </p>
          <p>
            Over the following two years, we participated in 18 competitive sprints across national ICT championships, global developer collectives, and fintech challenges—securing 12 podium trophies while continuously refining our open-source codebase.
          </p>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="border-t border-[#253044] pt-16 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#22D3C5]">
            02 / Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Operating Principles
          </h2>
          <p className="text-sm text-zinc-400">
            The fundamental axioms that dictate how we choose projects, allocate time, and ship products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.principles.map((principle, idx) => (
            <div key={idx} className="studio-card p-6 space-y-4">
              <div className="w-8 h-8 rounded-md bg-[#151F2E] border border-[#253044] flex items-center justify-center font-mono text-xs font-bold text-[#22D3C5]">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white">
                {principle.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Demonstrated Focus Areas */}
      <section className="border-t border-[#253044] pt-16 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A78BFA]">
            03 / Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Demonstrated Focus Areas
          </h2>
          <p className="text-sm text-zinc-400">
            Real capabilities evidenced through deployed codebases, benchmark evaluations, and hackathon victories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.focusAreas.map((area, idx) => (
            <div key={idx} className="studio-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  {area.title}
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  Track 0{idx + 1}
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {area.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 48-Hour Playbook */}
      <section className="border-t border-[#253044] pt-16 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            04 / Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The 48-Hour Hackathon Playbook
          </h2>
          <p className="text-sm text-zinc-400">
            How we maintain architectural rigor and deliver polished software under extreme deadlines.
          </p>
        </div>

        <div className="space-y-4">
          {playbookSteps.map((step, idx) => (
            <div
              key={idx}
              className="studio-card p-6 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-48 shrink-0">
                <span className="text-xs font-mono font-semibold text-[#22D3C5] bg-[#22D3C5]/10 px-2.5 py-1 rounded border border-[#22D3C5]/20">
                  {step.timeframe}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Integrity Commitments */}
      <section className="border-t border-[#253044] pt-16 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            05 / Content Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Commitments to Transparency
          </h2>
          <p className="text-sm text-zinc-400">
            Why you can trust the documentation, metrics, and outcomes presented across this website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((comm, idx) => (
            <div key={idx} className="studio-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <h3 className="text-base font-bold text-white">
                  {comm.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {comm.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Call to Action */}
      <div className="studio-card p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C5CFF]/10 via-transparent to-[#22D3C5]/10 pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
          Interested in partnering or inviting us to your competition?
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto relative z-10 font-sans">
          We welcome invitations from hackathon organizers, prospective sponsors, and teams building ambitious open-source projects.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] shadow-md shadow-[#7C5CFF]/20 transition-all"
          >
            <span>Contact Extokened</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-200 bg-[#151F2E] hover:bg-[#1a2638] border border-[#253044] transition-all"
          >
            <span>Browse Case Studies</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
