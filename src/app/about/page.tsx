import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Origin, Culture & Methodology",
  description:
    "Learn about Extokened: an independent technology and hackathon team. Our origin, operating principles, demonstrated focus areas, and rapid-prototyping process.",
};

export default function AboutPage() {
  const workingProcess = [
    {
      step: "01",
      title: "Discover",
      summary: "Isolate high-friction operational bottlenecks through domain mentor interviews and user problem framing.",
    },
    {
      step: "02",
      title: "Design",
      summary: "Freeze TypeScript data contracts, system interfaces, and API contracts within the first 4 hours of sprint kickoff.",
    },
    {
      step: "03",
      title: "Build",
      summary: "Parallel engineering execution: model fine-tuning, containerized microservices, and design-system components simultaneously.",
    },
    {
      step: "04",
      title: "Test",
      summary: "Stress-test streaming telemetry, offline network sync, sliding-window latency, and WCAG AA accessibility compliance.",
    },
    {
      step: "05",
      title: "Present",
      summary: "Stage demonstrations delivered exclusively with live running codebases and verified benchmarks. Zero slide deck mockups.",
    },
    {
      step: "06",
      title: "Improve",
      summary: "Post-competition retrospectives: extract architectural lessons, open-source reusable modules, and harden the codebase.",
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* 7.1 Page Hero */}
      <section className="space-y-6 max-w-4xl">
        <div className="pill-amber">
          ABOUT / EXTOKENED
        </div>
        <h1 className="font-page-title font-semibold text-white leading-tight">
          An independent engineering team exploring what&apos;s next.
        </h1>
        <p className="text-lg text-[#ADADAD] leading-relaxed font-sans max-w-2xl">
          Extokened was formed with a straightforward belief: practical software, built under real technical constraints, is the most reliable way to learn, compete, and ship.
        </p>
      </section>

      {/* 7.2 Origin Story: Two-Column Editorial Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-[#2D221A]">
        <div className="lg:col-span-5 space-y-2">
          <div className="text-xs font-mono text-[#7D7D7D] uppercase tracking-wider">
            01 // Genesis
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Origin Story
          </h2>
          <p className="text-xs text-[#7D7D7D] font-mono">
            Founded late 2023 in Dhaka, Bangladesh
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6 text-[#ADADAD] text-sm sm:text-base leading-relaxed font-sans">
          <p>
            In late 2023, four university engineers and designers entered their first bilateral hackathon under the team name <strong className="text-white font-semibold">Extokened</strong>. We engineered <em>BhashaBondhu</em>, a cross-dialect translation bridge for rural telemedicine consultations, and won the Grand Championship.
          </p>
          <p>
            The sprint revealed an immediate chemistry: an intuitive division of labor, shared obsession with code quality, and the ability to maintain architectural clarity under high pressure. Rather than disbanding after the competition, we made Extokened our permanent team home.
          </p>
          <p>
            Over the following two years, we participated in 18 competitive sprints across national ICT championships, international developer collectives, and fintech challenges—securing 12 podium honors while continually refining our open-source tools.
          </p>
        </div>
      </section>

      {/* 7.3 Mission and Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-[#2D221A]">
        <div className="editorial-card p-8 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="text-xs font-mono text-[#F0A24C] font-semibold uppercase tracking-wider">
            Our Mission
          </div>
          <h3 className="text-xl font-bold text-white">
            Build practical, reliable software under pressure.
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed">
            We exist to transform complex, ambiguous real-world friction into resilient, stage-worthy software solutions—grounding emerging AI models with deterministic engineering.
          </p>
        </div>

        <div className="editorial-card p-8 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="text-xs font-mono text-[#E0A165] font-semibold uppercase tracking-wider">
            Our Vision
          </div>
          <h3 className="text-xl font-bold text-white">
            A lasting benchmark for collaborative engineering.
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed">
            To build a proven body of work, demonstrate how small synchronized teams can out-execute larger groups, and provide a launchpad for products that transition from hackathon prototypes to production.
          </p>
        </div>
      </section>

      {/* 7.4 Principles: Numbered Rule-Separated Rows */}
      <section className="pt-16 border-t border-[#2D221A] space-y-8">
        <div className="space-y-2 max-w-xl">
          <span className="pill-amber">Core Axioms</span>
          <h2 className="font-section-title font-semibold text-white">
            Operating Principles
          </h2>
        </div>

        <div className="divide-y divide-[#2D221A] border-y border-[#2D221A]">
          {siteConfig.principles.map((principle, idx) => (
            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3 text-xs font-mono text-[#F0A24C] font-bold">
                0{idx + 1} // PRINCIPLE
              </div>
              <div className="md:col-span-4 text-base font-bold text-white">
                {principle.title}
              </div>
              <div className="md:col-span-5 text-sm text-[#ADADAD] leading-relaxed">
                {principle.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7.5 Demonstrated Focus Areas (No percentage bars) */}
      <section className="pt-16 border-t border-[#2D221A] space-y-8">
        <div className="space-y-2 max-w-xl">
          <span className="pill-amber">Technical Breadth</span>
          <h2 className="font-section-title font-semibold text-white">
            Demonstrated Capabilities
          </h2>
          <p className="text-sm text-[#ADADAD]">
            Verified proficiencies evidenced through deployed software and competitive podium records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.focusAreas.map((area, idx) => (
            <div key={idx} className="editorial-card p-6 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  {area.title}
                </h3>
                <span className="text-xs font-mono text-[#7D7D7D]">
                  Track 0{idx + 1}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#ADADAD] leading-relaxed">
                {area.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {area.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7.6 Working Process: Discover → Design → Build → Test → Present → Improve */}
      <section className="pt-16 border-t border-[#2D221A] space-y-10">
        <div className="space-y-2 max-w-xl">
          <span className="pill-amber">Execution Playbook</span>
          <h2 className="font-section-title font-semibold text-white">
            How We Work
          </h2>
          <p className="text-sm text-[#ADADAD]">
            Our disciplined 6-stage sequence for turning 36–48 hour constraints into stage-winning software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingProcess.map((proc) => (
            <div key={proc.step} className="editorial-card p-6 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <div className="text-xs font-mono font-bold text-[#F0A24C]">
                STEP {proc.step}
              </div>
              <h3 className="text-lg font-bold text-white">
                {proc.title}
              </h3>
              <p className="text-xs text-[#ADADAD] leading-relaxed">
                {proc.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7.7 Closing CTA */}
      <div className="p-8 sm:p-12 rounded-xl bg-[#141210] border border-[#2D221A] text-center space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Interested in inviting Extokened to your competition or sprint?
        </h2>
        <p className="text-sm text-[#ADADAD] max-w-lg mx-auto font-sans">
          We welcome direct communication from hackathon organizers, prospective sponsors, and technical partners.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-amber-glass"
          >
            <span>Contact the team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="btn-secondary"
          >
            <span>Browse case studies</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
