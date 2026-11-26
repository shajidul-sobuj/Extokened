import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  Target,
  Flame,
  Users,
  Layers,
  Sparkles,
  Server,
  Cpu,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "About | Origin, Culture & Methodology",
  description:
    "Meet Extokened: a permanent four-builder hackathon and engineering squad from Dhaka designing and shipping real software under 24–48 hour clocks.",
};

const squadFacts = [
  { value: "Late 2023", label: "Founded in Dhaka" },
  { value: "4 Builders", label: "Permanent Core Squad" },
  { value: "24–48 hrs", label: "Competitive Sprint Window" },
  { value: "100% Live", label: "Zero Slide-Only Demos" },
];

const originMilestones = [
  {
    period: "Late 2023",
    title: "First Sprint, First Win",
    detail: "Built BhashaBondhu for rural telemedicine and chose to stay together permanently.",
  },
  {
    period: "2024",
    title: "National & Global Finals",
    detail: "Competed across AI, FinTech, and GovTech hackathons—earning Winner & Finalist honors.",
  },
  {
    period: "2025 — Now",
    title: "Shipping Beyond Hackathons",
    detail: "Turning battle-tested prototypes into open-source developer tools and real products.",
  },
];

const principleMeta = [
  { icon: Target, tag: "Real-world friction only" },
  { icon: Flame, tag: "48h constraint clarity" },
  { icon: Users, tag: "Live endpoints, zero mockups" },
];

const capabilityIcons = [Layers, Sparkles, Server, Cpu];

const sprintPlaybook = [
  {
    step: "01",
    window: "Hr 00–03",
    title: "Discover & Frame",
    summary:
      "Cut through vague prompts fast. Talk to mentors, lock onto one high-impact pain point, and define what a winning live demo must prove.",
  },
  {
    step: "02",
    window: "Hr 03–06",
    title: "Freeze Contracts",
    summary:
      "Lock TypeScript types, database schemas, and API endpoints early so frontend, AI, and backend never block each other mid-sprint.",
  },
  {
    step: "03",
    window: "Hr 06–30",
    title: "Parallel Execution",
    summary:
      "All four builders ship simultaneously—UI architecture, LLM & neural pipelines, real-time backend services, and visual polish in sync.",
  },
  {
    step: "04",
    window: "Hr 30–40",
    title: "Harden & Stress-Test",
    summary:
      "Wire real telemetry, eliminate flaky edge cases, add graceful fallbacks, and verify responsive UX before the clock hits crunch time.",
  },
  {
    step: "05",
    window: "Hr 40–48",
    title: "Live Stage Demo",
    summary:
      "Present directly from deployed production URLs and real live data—letting judges interact with working software instead of static slides.",
  },
  {
    step: "06",
    window: "Post-Sprint",
    title: "Refine & Open-Source",
    summary:
      "Run an honest team retro, extract reusable packages, clean up repositories, and carry our strongest builds forward into real products.",
  },
];

const glassPanelStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(15, 20, 38, 0.62) 0%, rgba(9, 12, 24, 0.84) 100%)",
  backdropFilter: "blur(22px) saturate(155%)",
  WebkitBackdropFilter: "blur(22px) saturate(155%)",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
      {/* 1. Centered Editorial Hero + Liquid-Glass Squad Identity Bar */}
      <section className="space-y-10 sm:space-y-12">
        <MotionReveal className="max-w-3xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <span className="eyebrow-badge text-xs sm:text-[12.5px] text-[#D2DCFF] border-[#9AA9FF]/35">
              About · Team Extokened
            </span>
          </div>

          <h1 className="font-page-title font-bold text-white tracking-[-0.038em]">
            Four builders. One permanent{" "}
            <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent pr-1">
              hackathon squad.
            </span>
          </h1>

          <p className="text-[15.5px] sm:text-lg text-[#E2E8FA] leading-[1.75] max-w-2xl mx-auto">
            Born in Dhaka&apos;s competitive engineering circuit, Extokened is a permanent four-person unit that designs, builds, and ships working software under real 24–48 hour pressure.
          </p>
        </MotionReveal>

        {/* Sculpted Liquid-Glass Quick-Facts Bar (Matches Home Horizon Dock) */}
        <MotionReveal delay={0.08}>
          <div
            style={glassPanelStyle}
            className="relative overflow-hidden rounded-[20px] border border-white/[0.15] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <div
              className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {squadFacts.map((fact, idx) => (
                <div
                  key={fact.label}
                  className={`px-5 sm:px-7 py-5 sm:py-6 flex flex-col justify-center gap-1 border-white/[0.09] ${
                    idx >= 2 ? "border-t lg:border-t-0" : ""
                  } ${idx % 2 === 1 ? "border-l" : ""} ${
                    idx >= 1 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {fact.value}
                  </div>
                  <div className="text-[13px] sm:text-sm text-[#D8E0F8] font-medium">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* 2. Our Origin Story + Mission & Vision (Unified High-Contrast Liquid-Glass Panel) */}
      <MotionReveal delay={0.08}>
        <section aria-labelledby="origin-heading">
          <div
            style={glassPanelStyle}
            className="relative overflow-hidden rounded-[24px] border border-white/[0.15] shadow-[0_28px_70px_-22px_rgba(0,0,0,0.84),inset_0_1px_0_rgba(255,255,255,0.18)] p-6 sm:p-9 lg:p-12"
          >
            <div
              className="pointer-events-none absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-[#A5B2FF]/45 to-transparent"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left 5 Columns: Heading + Origin Milestone Spine */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-semibold text-[#B4C2FF] uppercase tracking-[0.14em]">
                    <span>01 / Origin Story</span>
                  </div>
                  <h2
                    id="origin-heading"
                    className="font-section-title font-bold text-white"
                  >
                    Built to stay{" "}
                    <span className="font-hero-serif text-[1.14em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent">
                      together.
                    </span>
                  </h2>
                  <div className="inline-flex items-center gap-2 text-sm text-[#CFD7F2]">
                    <MapPin className="w-4 h-4 text-[#A5B2FF] shrink-0" />
                    <span>Dhaka, Bangladesh · Established Late 2023</span>
                  </div>
                </div>

                {/* Vertical Milestone Timeline */}
                <div className="relative pl-5 space-y-5 border-l border-white/[0.14]">
                  {originMilestones.map((item) => (
                    <div key={item.period} className="relative space-y-1">
                      <span
                        className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#A5B2FF] ring-4 ring-[#0D1326]"
                        aria-hidden="true"
                      />
                      <div className="text-xs sm:text-[13px] font-mono font-semibold text-[#F7CA63] tracking-wide">
                        {item.period}
                      </div>
                      <div className="text-[15px] sm:text-base font-display font-bold text-white">
                        {item.title}
                      </div>
                      <p className="text-sm text-[#D0D9F4] leading-[1.65]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 7 Columns: Narrative + Mission & Vision Inset Cards */}
              <div className="lg:col-span-7 space-y-7">
                <div className="space-y-5 text-[15.5px] sm:text-base text-[#E4E9FA] leading-[1.8]">
                  <p>
                    In late 2023, four university engineers and designers teamed up for a weekend hackathon under the name{" "}
                    <strong className="text-white font-semibold">Extokened</strong>. We built{" "}
                    <span className="text-[#C8D4FF] font-medium">BhashaBondhu</span>, a cross-dialect translation bridge for rural telemedicine—and walked away with our first hackathon win together.
                  </p>
                  <p>
                    Most hackathon teams split up on Monday morning. We realized we had something rare: four complementary builders—Full-Stack Architect, AI Specialist, Systems Engineer, and UI/UX Designer—who already moved like a single unit. Since then, we&apos;ve competed across national and global hackathons, reaching finals and winning while shipping open-source software along the way.
                  </p>
                </div>

                {/* Mission & Vision Pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl bg-[#070B16]/75 border border-white/[0.12] p-5 sm:p-6 space-y-2.5">
                    <div className="text-xs sm:text-[13px] font-mono font-semibold text-[#B4C2FF] uppercase tracking-[0.12em]">
                      Our Mission
                    </div>
                    <h3 className="text-base sm:text-[17px] font-display font-bold text-white leading-snug">
                      Ship resilient software under real pressure.
                    </h3>
                    <p className="text-sm sm:text-[14.5px] text-[#D4DCF5] leading-[1.68]">
                      Turn ambiguous real-world problems into reliable, stage-tested software by pairing emerging AI with disciplined engineering.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#070B16]/75 border border-white/[0.12] p-5 sm:p-6 space-y-2.5">
                    <div className="text-xs sm:text-[13px] font-mono font-semibold text-[#F7CA63] uppercase tracking-[0.12em]">
                      Our Vision
                    </div>
                    <h3 className="text-base sm:text-[17px] font-display font-bold text-white leading-snug">
                      Small squad. Production benchmark.
                    </h3>
                    <p className="text-sm sm:text-[14.5px] text-[#D4DCF5] leading-[1.68]">
                      Prove how a synchronized four-person squad can out-execute larger teams—and turn weekend breakthroughs into lasting products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* 3. Operating Principles (Single Unified 3-Column Liquid-Glass Grid) */}
      <MotionReveal delay={0.08}>
        <section aria-labelledby="principles-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-badge text-xs sm:text-[12.5px] text-[#D2DCFF] border-[#9AA9FF]/35">
                02 / Core Axioms
              </span>
              <h2
                id="principles-heading"
                className="font-section-title font-bold text-white"
              >
                Operating{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Principles
                </span>
              </h2>
            </div>
            <p className="text-[15px] sm:text-base text-[#D8E0F8] max-w-md leading-relaxed">
              Three non-negotiables that guide every architecture decision when the hackathon clock is ticking.
            </p>
          </div>

          <div
            style={glassPanelStyle}
            className="relative overflow-hidden rounded-[22px] border border-white/[0.15] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <div
              className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.1]">
              {siteConfig.principles.map((principle, idx) => {
                const meta = principleMeta[idx] || principleMeta[0];
                const Icon = meta.icon;
                return (
                  <div
                    key={principle.title}
                    className="p-6 sm:p-8 flex flex-col justify-between gap-6 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/[0.15] flex items-center justify-center text-[#B4C2FF]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-mono font-semibold text-[#B4C2FF] tracking-wider">
                          0{idx + 1} / 03
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                        {principle.title}
                      </h3>

                      <p className="text-[14.5px] sm:text-[15px] text-[#D8E0F8] leading-[1.72]">
                        {principle.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.09] flex items-center gap-2 text-[13px] font-medium text-[#C8D4FF]">
                      <CheckCircle2 className="w-4 h-4 text-[#F7CA63] shrink-0" />
                      <span>{meta.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* 4. Demonstrated Capabilities (2x2 High-Contrast Glass Track Matrix) */}
      <MotionReveal delay={0.08}>
        <section aria-labelledby="capabilities-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-badge text-xs sm:text-[12.5px] text-[#D2DCFF] border-[#9AA9FF]/35">
                03 / Technical Stack
              </span>
              <h2
                id="capabilities-heading"
                className="font-section-title font-bold text-white"
              >
                Demonstrated{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
            </div>
            <p className="text-[15px] sm:text-base text-[#D8E0F8] max-w-md leading-relaxed">
              End-to-end engineering coverage proven across live deployments and competitive sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {siteConfig.focusAreas.map((area, idx) => {
              const Icon = capabilityIcons[idx] || Layers;
              return (
                <div
                  key={area.title}
                  style={glassPanelStyle}
                  className="group relative overflow-hidden rounded-[20px] border border-white/[0.14] hover:border-[#A5B2FF]/45 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/[0.14] group-hover:border-[#A5B2FF]/45 flex items-center justify-center text-[#B4C2FF] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-mono font-semibold text-[#B4C2FF] uppercase tracking-wider">
                        Track 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                      {area.title}
                    </h3>

                    <p className="text-[14.5px] sm:text-[15px] text-[#D8E0F8] leading-[1.7]">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.09] flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-[13px] font-mono font-medium bg-[#080C18]/80 border border-white/[0.14] text-[#E4E9FA]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </MotionReveal>

      {/* 5. The 48-Hour Playbook (Unified 3x2 Hairline Liquid-Glass Matrix) */}
      <MotionReveal delay={0.08}>
        <section aria-labelledby="playbook-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-xl">
              <span className="eyebrow-badge text-xs sm:text-[12.5px] text-[#D2DCFF] border-[#9AA9FF]/35">
                04 / Execution Playbook
              </span>
              <h2
                id="playbook-heading"
                className="font-section-title font-bold text-white"
              >
                How We{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Ship in 48h
                </span>
              </h2>
            </div>
            <p className="text-[15px] sm:text-base text-[#D8E0F8] max-w-md leading-relaxed">
              Our repeatable 6-stage rhythm for turning tight competition deadlines into reliable, stage-ready builds.
            </p>
          </div>

          <div
            style={glassPanelStyle}
            className="relative overflow-hidden rounded-[22px] border border-white/[0.15] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <div
              className="pointer-events-none absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {sprintPlaybook.map((item, idx) => (
                <div
                  key={item.step}
                  className={`p-6 sm:p-7 space-y-3.5 hover:bg-white/[0.03] transition-colors border-white/[0.09] ${
                    idx >= 1 ? "border-t" : ""
                  } ${idx >= 2 ? "sm:border-t" : "sm:border-t-0"} ${
                    idx >= 3 ? "lg:border-t" : "lg:border-t-0"
                  } ${idx % 2 === 1 ? "sm:border-l" : ""} ${
                    idx % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-[13px] font-mono font-semibold text-[#B4C2FF] tracking-wider">
                      STEP {item.step}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono font-medium text-[#F7CA63]">
                      <Clock className="w-3 h-3" />
                      {item.window}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[14.5px] sm:text-[15px] text-[#D8E0F8] leading-[1.68]">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* 6. Closing CTA (Matches Home Framed Liquid-Glass Style) */}
      <MotionReveal delay={0.06}>
        <div
          style={glassPanelStyle}
          className="relative overflow-hidden rounded-[24px] border border-white/[0.15] shadow-[0_28px_70px_-22px_rgba(0,0,0,0.84),inset_0_1px_0_rgba(255,255,255,0.18)] px-6 py-12 sm:px-12 sm:py-16 text-center space-y-6"
        >
          <div
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] max-w-[120%] h-56 rounded-full blur-[90px] bg-[#8B9BF7]/15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A5B2FF]/45 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="font-section-title font-bold text-white">
              Want to collaborate, sponsor, or{" "}
              <span className="font-hero-serif text-[1.14em] bg-gradient-to-r from-[#B4C2FF] via-[#F4F7FF] to-[#F7CA63] bg-clip-text text-transparent">
                invite us?
              </span>
            </h2>
            <p className="text-[15.5px] sm:text-base text-[#E2E8FA] max-w-xl mx-auto leading-[1.75]">
              We welcome hackathon invitations, technical collaborations, and product challenges where execution speed and real engineering quality matter.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
                <span>Contact the team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/team" className="btn-secondary py-3 px-5 text-sm">
                <span>Meet the 4 builders</span>
              </Link>
            </div>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
