import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

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
      summary:
        "Isolate high-friction operational bottlenecks through domain mentor interviews and sharp problem framing.",
    },
    {
      step: "02",
      title: "Design",
      summary:
        "Freeze TypeScript data contracts, system interfaces, and API schemas within the first 4 hours of sprint kickoff.",
    },
    {
      step: "03",
      title: "Build",
      summary:
        "Parallel engineering execution: model fine-tuning, containerized services, and design-system components simultaneously.",
    },
    {
      step: "04",
      title: "Test",
      summary:
        "Stress-test streaming telemetry, offline sync, sliding-window latency, and WCAG AA accessibility compliance.",
    },
    {
      step: "05",
      title: "Present",
      summary:
        "Stage demonstrations delivered exclusively with live running codebases and verified benchmarks. Zero slide mockups.",
    },
    {
      step: "06",
      title: "Improve",
      summary:
        "Post-competition retrospectives: extract architectural lessons, open-source reusable modules, and harden the codebase.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
      {/* Page Hero */}
      <MotionReveal className="space-y-5 max-w-4xl">
        <span className="eyebrow-badge">About / Extokened</span>
        <h1 className="font-page-title font-bold text-white">
          An independent engineering team exploring{" "}
          <span className="font-hero-serif text-[1.14em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
            what&apos;s next.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#CFD7F2] leading-[1.72] max-w-2xl">
          Extokened was formed with a straightforward belief: practical software, built under real technical constraints, is the most reliable way to learn, compete, and ship.
        </p>
      </MotionReveal>

      {/* Origin Story */}
      <MotionReveal delay={0.08}>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-16 border-t border-white/[0.08]">
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono text-[#8B9BF7] uppercase tracking-wider">
              01 / Genesis
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Our Origin Story
            </h2>
            <p className="text-xs text-[#7D87A6] font-mono">
              Founded late 2023 in Dhaka, Bangladesh
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#B4BDD8] text-sm sm:text-base leading-[1.75]">
            <p>
              In late 2023, four university engineers and designers entered their first bilateral hackathon under the team name <strong className="text-white font-semibold">Extokened</strong>. We engineered <em>BhashaBondhu</em>, a cross-dialect translation bridge for rural telemedicine consultations, and earned our first hackathon win together.
            </p>
            <p>
              The sprint revealed immediate chemistry: an intuitive division of labor, shared obsession with code quality, and the ability to maintain architectural clarity under pressure. Rather than disbanding after the competition, we made Extokened our permanent team home.
            </p>
            <p>
              Over the following two years, we participated in numerous hackathons across national ICT events, international developer collectives, and fintech sprints—consistently reaching finals and winning while building open-source tools along the way.
            </p>
          </div>
        </section>
      </MotionReveal>

      {/* Mission & Vision */}
      <MotionReveal delay={0.1}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-16 border-t border-white/[0.08]">
          <div className="surface-card surface-card-interactive p-7 sm:p-8 space-y-4">
            <div className="text-xs font-mono text-[#A5B2FF] font-semibold uppercase tracking-wider">
              Our Mission
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Build practical, reliable software under pressure.
            </h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              We exist to transform complex, ambiguous real-world friction into resilient, stage-worthy software solutions—grounding emerging AI models with deterministic engineering.
            </p>
          </div>

          <div className="surface-card surface-card-interactive p-7 sm:p-8 space-y-4">
            <div className="text-xs font-mono text-[#F5C451] font-semibold uppercase tracking-wider">
              Our Vision
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              A lasting benchmark for collaborative engineering.
            </h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              To build a proven body of work, demonstrate how small synchronized teams can out-execute larger groups, and provide a launchpad for products that transition from hackathon prototypes to production.
            </p>
          </div>
        </section>
      </MotionReveal>

      {/* Principles: Numbered Rule-Separated Rows */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-white/[0.08] space-y-8">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow-badge">Core Axioms</span>
            <h2 className="font-section-title font-bold text-white">
              Operating Principles
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {siteConfig.principles.map((principle, idx) => (
              <div
                key={idx}
                className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start hover:bg-white/[0.02] px-3 -mx-3 rounded-xl transition-colors"
              >
                <div className="md:col-span-3 text-xs font-mono text-[#8B9BF7] font-semibold tracking-wider pt-0.5">
                  0{idx + 1} / PRINCIPLE
                </div>
                <div className="md:col-span-4 text-lg font-display font-bold text-white">
                  {principle.title}
                </div>
                <div className="md:col-span-5 text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.7]">
                  {principle.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      {/* Demonstrated Capabilities */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-white/[0.08] space-y-10">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow-badge">Technical Breadth</span>
            <h2 className="font-section-title font-bold text-white">
              Demonstrated{" "}
              <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#CFD7F2]">
              Verified proficiencies evidenced through deployed software and hackathon builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.focusAreas.map((area, idx) => (
              <div key={idx} className="surface-card surface-card-interactive p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-display font-bold text-white">{area.title}</h3>
                  <span className="text-xs font-mono text-[#7D87A6] shrink-0">
                    Track 0{idx + 1}
                  </span>
                </div>
                <p className="text-sm text-[#B4BDD8] leading-relaxed">{area.description}</p>
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

      {/* 6-Step Working Process */}
      <MotionReveal delay={0.1}>
        <section className="pt-16 border-t border-white/[0.08] space-y-10">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow-badge">Execution Playbook</span>
            <h2 className="font-section-title font-bold text-white">
              How We{" "}
              <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#CFD7F2]">
              Our disciplined 6-stage sequence for turning 36–48 hour constraints into stage-winning software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingProcess.map((proc) => (
              <div key={proc.step} className="surface-card surface-card-interactive p-6 sm:p-7 space-y-3">
                <div className="text-xs font-mono font-semibold text-[#8B9BF7] tracking-wider">
                  STEP {proc.step}
                </div>
                <h3 className="text-lg font-display font-bold text-white">{proc.title}</h3>
                <p className="text-sm text-[#B4BDD8] leading-relaxed">{proc.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      {/* Closing CTA */}
      <MotionReveal>
        <div className="surface-card p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Interested in inviting Extokened to your competition or sprint?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2CF] max-w-lg mx-auto leading-relaxed">
            We welcome direct communication from hackathon organizers, prospective sponsors, and technical partners.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
              <span>Contact the team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/projects" className="btn-secondary py-3 px-5 text-sm">
              <span>Browse case studies</span>
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
