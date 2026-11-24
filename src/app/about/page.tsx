import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

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
      <MotionReveal className="space-y-6 max-w-4xl">
        <div className="pill-lavender">
          ABOUT / EXTOKENED
        </div>
        <h1 className="font-page-title font-semibold text-white leading-tight">
          An independent engineering team exploring what&apos;s next.
        </h1>
        <p className="text-lg text-[#BAC0DC] leading-relaxed font-sans max-w-2xl">
          Extokened was formed with a straightforward belief: practical software, built under real technical constraints, is the most reliable way to learn, compete, and ship.
        </p>
      </MotionReveal>

      {/* 7.2 Origin Story: Two-Column Editorial Layout */}
      <MotionReveal delay={0.1}>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-[#1E2337]">
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-[#727896] uppercase tracking-wider">
              01 // Genesis
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Our Origin Story
            </h2>
            <p className="text-xs text-[#727896] font-mono">
              Founded late 2023 in Dhaka, Bangladesh
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#BAC0DC] text-sm sm:text-base leading-relaxed font-sans">
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
      </MotionReveal>

      {/* 7.3 Mission and Vision */}
      <MotionReveal delay={0.15}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-[#1E2337]">
          <div className="editorial-card meadow-card p-8 bg-[#0F1118] border border-[#1E2337] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#2B324E] transition-all">
            <div className="text-xs font-mono text-[#8B9BF7] font-semibold uppercase tracking-wider">
              Our Mission
            </div>
            <h3 className="text-xl font-bold text-white">
              Build practical, reliable software under pressure.
            </h3>
            <p className="text-sm text-[#BAC0DC] leading-relaxed">
              We exist to transform complex, ambiguous real-world friction into resilient, stage-worthy software solutions—grounding emerging AI models with deterministic engineering.
            </p>
          </div>

          <div className="editorial-card meadow-card p-8 bg-[#0F1118] border border-[#1E2337] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#2B324E] transition-all">
            <div className="text-xs font-mono text-[#FFC857] font-semibold uppercase tracking-wider">
              Our Vision
            </div>
            <h3 className="text-xl font-bold text-white">
              A lasting benchmark for collaborative engineering.
            </h3>
            <p className="text-sm text-[#BAC0DC] leading-relaxed">
              To build a proven body of work, demonstrate how small synchronized teams can out-execute larger groups, and provide a launchpad for products that transition from hackathon prototypes to production.
            </p>
          </div>
        </section>
      </MotionReveal>

      {/* 7.4 Principles: Numbered Rule-Separated Rows */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-[#1E2337] space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="pill-lavender">Core Axioms</span>
            <h2 className="font-section-title font-semibold text-white">
              Operating Principles
            </h2>
          </div>

          <div className="divide-y divide-[#1E2337] border-y border-[#1E2337]">
            {siteConfig.principles.map((principle, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#151824]/20 px-2 -mx-2 rounded transition-colors">
                <div className="md:col-span-3 text-xs font-mono text-[#8B9BF7] font-bold">
                  0{idx + 1} // PRINCIPLE
                </div>
                <div className="md:col-span-4 text-base font-bold text-white">
                  {principle.title}
                </div>
                <div className="md:col-span-5 text-sm text-[#BAC0DC] leading-relaxed">
                  {principle.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      {/* 7.5 Demonstrated Focus Areas */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-[#1E2337] space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="pill-lavender">Technical Breadth</span>
            <h2 className="font-section-title font-semibold text-white">
              Demonstrated Capabilities
            </h2>
            <p className="text-sm text-[#BAC0DC]">
              Verified proficiencies evidenced through deployed software and competitive podium records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.focusAreas.map((area, idx) => (
              <div key={idx} className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#2B324E] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">
                    {area.title}
                  </h3>
                  <span className="text-xs font-mono text-[#727896]">
                    Track 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#BAC0DC] leading-relaxed">
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
      </MotionReveal>

      {/* 7.6 Working Process */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-[#1E2337] space-y-10">
          <div className="space-y-2 max-w-xl">
            <span className="pill-lavender">Execution Playbook</span>
            <h2 className="font-section-title font-semibold text-white">
              How We Work
            </h2>
            <p className="text-sm text-[#BAC0DC]">
              Our disciplined 6-stage sequence for turning 36–48 hour constraints into stage-winning software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingProcess.map((proc) => (
              <div key={proc.step} className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-[#2B324E] hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs font-mono font-bold text-[#8B9BF7]">
                  STEP {proc.step}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {proc.title}
                </h3>
                <p className="text-xs text-[#BAC0DC] leading-relaxed">
                  {proc.summary}
                </p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      {/* 7.7 Closing CTA */}
      <MotionReveal>
        <div className="editorial-card meadow-card p-8 sm:p-12 rounded-xl bg-[#0F1118] border border-[#1E2337] text-center space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Interested in inviting Extokened to your competition or sprint?
          </h2>
          <p className="text-sm text-[#BAC0DC] max-w-lg mx-auto font-sans">
            We welcome direct communication from hackathon organizers, prospective sponsors, and technical partners.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-meadow-dark"
            >
              <span>Contact the team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="btn-meadow-secondary"
            >
              <span>Browse case studies</span>
            </Link>
          </div>
        </div>
      </MotionReveal>

    </div>
  );
}
