import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { MemberCard } from "@/components/team/MemberCard";
import { 
  Users, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Database, 
  ShieldCheck
} from "lucide-react";

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
      summary: "Accessible, responsive web applications engineered with Next.js 15, React 19, and Tailwind CSS. Low cumulative layout shift and strict WCAG AA contrast compliance.",
      skills: ["Next.js 15 App Router", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "WCAG AA"],
    },
    {
      discipline: "Generative AI & Agent Workflows",
      icon: Cpu,
      summary: "Multimodal LLM pipelines, autonomous reasoning agents, and computer vision edge workers grounded in verified data feeds with deterministic fallbacks.",
      skills: ["Google Gemini API", "Claude & OpenAI", "LangGraph", "Chroma & Pinecone", "YOLOv9", "Whisper AI"],
    },
    {
      discipline: "Distributed Systems & Telemetry",
      icon: Database,
      summary: "High-throughput WebSockets, time-series anomaly detection, distributed cache synchrony, and sub-10ms query execution across containerized microservices.",
      skills: ["FastAPI", "Go (Golang)", "PostgreSQL", "TimescaleDB", "Redis", "Docker", "WebSockets"],
    },
    {
      discipline: "Sprint Delivery & Pitch Strategy",
      icon: ShieldCheck,
      summary: "Disciplined contract-first schema design, parallel feature execution, and zero-downtime stage demonstrations with live telemetry sandboxes.",
      skills: ["OpenAPI Contracts", "Stage Sandboxing", "Live Telemetry Feeds", "Pitch Narrative"],
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* 11.1 Page Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="pill-lavender inline-flex items-center gap-2">
          <span>✦</span>
          <span>TEAM / OPERATIONAL ROSTER</span>
        </div>
        <h1 className="font-page-title font-semibold text-[#FFFFFF] leading-tight">
          The People Behind the Work
        </h1>
        <p className="text-base sm:text-lg text-[#BAC0DC] leading-relaxed font-sans">
          Extokened operates as a permanent squad. Four builders combining deep technical specialization with an established collaboration shorthand honed across 18 competitions.
        </p>
      </div>

      {/* 11.2 Team Roster */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>

      {/* 11.3 Skills and Capabilities Grouped by Discipline (No percentage bars) */}
      <section className="border-t border-[#1E2337] pt-16 space-y-10">
        <div className="space-y-2 max-w-xl">
          <div className="pill-lavender inline-flex items-center gap-1.5">
            <span>✦</span>
            <span>Competency Matrix</span>
          </div>
          <h2 className="font-section-title font-semibold text-[#FFFFFF]">
            Collective Discipline Mastery
          </h2>
          <p className="text-sm text-[#BAC0DC]">
            Grouped technical competencies backed by shipped software and competitive validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilitiesByDiscipline.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="editorial-card meadow-card p-6 sm:p-7 bg-[#0F1118] border border-[#1E2337] rounded-xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-[#151824] border border-[#1E2337] text-[#8B9BF7]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#FFFFFF]">
                    {cap.discipline}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#BAC0DC] leading-relaxed font-sans">
                  {cap.summary}
                </p>

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

      {/* 11.4 Culture & Dynamics of a Permanent Unit */}
      <section className="border-t border-[#1E2337] pt-16 space-y-10">
        <div className="space-y-2 max-w-xl">
          <div className="pill-lavender inline-flex items-center gap-1.5">
            <span>✦</span>
            <span>Team Culture</span>
          </div>
          <h2 className="font-section-title font-semibold text-[#FFFFFF]">
            Why a Permanent Squad Wins
          </h2>
          <p className="text-sm text-[#BAC0DC]">
            Ad-hoc hackathon teams spend the first 8 hours figuring out personalities. We spend those hours building schemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] rounded-xl space-y-3">
            <h3 className="text-base font-bold text-[#FFFFFF]">
              Immediate Shorthand
            </h3>
            <p className="text-xs text-[#BAC0DC] leading-relaxed font-sans">
              TypeScript interfaces and API schemas are agreed upon within minutes. Frontend and backend developers work in tandem without blocking one another.
            </p>
          </div>

          <div className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] rounded-xl space-y-3">
            <h3 className="text-base font-bold text-[#FFFFFF]">
              Ruthless Scope Discipline
            </h3>
            <p className="text-xs text-[#BAC0DC] leading-relaxed font-sans">
              Knowing what not to build is our biggest competitive advantage. We cut extraneous features early to guarantee zero bugs on stage.
            </p>
          </div>

          <div className="editorial-card meadow-card p-6 bg-[#0F1118] border border-[#1E2337] rounded-xl space-y-3">
            <h3 className="text-base font-bold text-[#FFFFFF]">
              Shared Accountability
            </h3>
            <p className="text-xs text-[#BAC0DC] leading-relaxed font-sans">
              Deep familiarity across 18 sprints means setbacks during deep-night coding hours are debugged constructively without friction.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <div className="editorial-card meadow-card p-8 sm:p-12 rounded-xl bg-[#0F1118] border border-[#1E2337] text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
          Want to collaborate with our engineering squad?
        </h2>
        <p className="text-sm text-[#BAC0DC] max-w-md mx-auto">
          We are available for technical hackathon invitations, engineering partnerships, and prototype development sprints.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="btn-meadow-dark inline-flex items-center gap-2"
          >
            <span>Contact the team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
