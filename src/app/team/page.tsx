import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { MemberCard } from "@/components/team/MemberCard";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";
import { ArrowRight, Globe, Cpu, Database, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Team | The People Behind the Work",
  description:
    "Meet the permanent engineering squad behind Extokened: specialists across AI, full-stack architecture, distributed systems, and creative design.",
};

export default function TeamPage() {
  const capabilitiesByDiscipline = [
    {
      discipline: "Frontend & Experience Architecture",
      icon: Globe,
      summary:
        "Accessible, responsive web applications engineered with Next.js, React 19, and Tailwind CSS. Low layout shift and strict WCAG AA contrast compliance.",
      skills: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "WCAG AA"],
    },
    {
      discipline: "Generative AI & Agent Workflows",
      icon: Cpu,
      summary:
        "Multimodal LLM pipelines, autonomous reasoning agents, and computer vision edge workers grounded in verified data feeds with deterministic fallbacks.",
      skills: ["Google Gemini API", "Claude & OpenAI", "LangGraph", "Vector DBs", "YOLOv9", "Whisper AI"],
    },
    {
      discipline: "Distributed Systems & Telemetry",
      icon: Database,
      summary:
        "High-throughput WebSockets, time-series anomaly detection, distributed cache synchrony, and sub-10ms query execution across containerized microservices.",
      skills: ["FastAPI", "Go (Golang)", "PostgreSQL", "TimescaleDB", "Redis", "Docker", "WebSockets"],
    },
    {
      discipline: "Sprint Delivery & Pitch Strategy",
      icon: ShieldCheck,
      summary:
        "Disciplined contract-first schema design, parallel feature execution, and zero-downtime stage demonstrations with live telemetry sandboxes.",
      skills: ["OpenAPI Contracts", "Stage Sandboxing", "Live Telemetry", "Pitch Narrative"],
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Hero */}
      <MotionReveal className="space-y-4 max-w-3xl">
        <span className="eyebrow-badge">Team / Operational Roster</span>
        <h1 className="font-page-title font-bold text-white">
          The People Behind{" "}
          <span className="font-hero-serif text-[1.14em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
            the Work
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#CFD7F2] leading-[1.72]">
          Extokened operates as a permanent squad. Four builders combining deep technical specialization with an established collaboration shorthand honed across 18 competitions.
        </p>
      </MotionReveal>

      {/* Equal-Height 2×2 Interactive Squad Roster */}
      <MotionStagger
        stagger={0.09}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {teamMembers.map((member, idx) => (
          <MotionItem key={member.slug} className="h-full" distance={22}>
            <MemberCard member={member} index={idx} variant="full" />
          </MotionItem>
        ))}
      </MotionStagger>

      {/* Competency Matrix */}
      <MotionReveal delay={0.1}>
        <section className="border-t border-white/[0.08] pt-16 space-y-10">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow-badge">Competency Matrix</span>
            <h2 className="font-section-title font-bold text-white">
              Collective Discipline{" "}
              <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Mastery
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#CFD7F2]">
              Grouped technical competencies backed by shipped software and competitive validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilitiesByDiscipline.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="surface-card surface-card-interactive p-6 sm:p-7 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#131726] border border-white/[0.1] text-[#8B9BF7] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {cap.discipline}
                    </h3>
                  </div>

                  <p className="text-sm text-[#B4BDD8] leading-relaxed">{cap.summary}</p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cap.skills.map((skill) => (
                      <span key={skill} className="tech-tag">
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

      {/* Team Culture */}
      <MotionReveal delay={0.12}>
        <section className="border-t border-white/[0.08] pt-16 space-y-10">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow-badge">Team Culture</span>
            <h2 className="font-section-title font-bold text-white">
              Why a Permanent Squad{" "}
              <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                Wins
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#CFD7F2]">
              Ad-hoc hackathon teams spend the first 8 hours figuring out personalities. We spend those hours building schemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface-card surface-card-interactive p-6 sm:p-7 space-y-3">
              <div className="text-xs font-mono text-[#8B9BF7]">01 / VELOCITY</div>
              <h3 className="text-lg font-display font-bold text-white">
                Immediate Shorthand
              </h3>
              <p className="text-sm text-[#B4BDD8] leading-relaxed">
                TypeScript interfaces and API schemas are agreed upon within minutes. Frontend and backend engineers work in tandem without blocking one another.
              </p>
            </div>

            <div className="surface-card surface-card-interactive p-6 sm:p-7 space-y-3">
              <div className="text-xs font-mono text-[#8B9BF7]">02 / FOCUS</div>
              <h3 className="text-lg font-display font-bold text-white">
                Ruthless Scope Discipline
              </h3>
              <p className="text-sm text-[#B4BDD8] leading-relaxed">
                Knowing what not to build is our biggest competitive advantage. We cut extraneous features early to guarantee zero bugs on stage.
              </p>
            </div>

            <div className="surface-card surface-card-interactive p-6 sm:p-7 space-y-3">
              <div className="text-xs font-mono text-[#8B9BF7]">03 / TRUST</div>
              <h3 className="text-lg font-display font-bold text-white">
                Shared Accountability
              </h3>
              <p className="text-sm text-[#B4BDD8] leading-relaxed">
                Deep familiarity across 18 sprints means setbacks during late-night coding hours are debugged constructively without friction.
              </p>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* CTA */}
      <MotionReveal>
        <div className="surface-card p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Want to collaborate with our engineering squad?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2CF] max-w-lg mx-auto leading-relaxed">
            We are available for technical hackathon invitations, engineering partnerships, and rapid prototype sprints.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
              <span>Contact the team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
