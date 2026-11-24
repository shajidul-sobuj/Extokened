import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";
import { MemberCard } from "@/components/team/MemberCard";
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Database, 
  ShieldCheck,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Team | The Engineers & Builders of Extokened",
  description:
    "Meet the permanent squad behind Extokened: specialists across AI, full-stack architecture, distributed systems, and modern UI engineering.",
};

export default function TeamPage() {
  const collectiveCapabilities = [
    {
      category: "Frontend & Experience Architecture",
      icon: Globe,
      color: "#22D3C5",
      skills: ["Next.js 15 App Router", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "WCAG AA a11y"],
      summary: "Pixel-perfect interfaces, low cumulative layout shift, responsive layouts, and state management that remains predictable under load.",
    },
    {
      category: "Generative AI & Autonomous Workflows",
      icon: Cpu,
      color: "#7C5CFF",
      skills: ["Google Gemini API", "Claude & OpenAI Pipelines", "LangGraph", "Vector Retrieval (Chroma/Pinecone)", "Whisper Speech", "YOLOv9"],
      summary: "Grounding multimodal models with verifiable sensors, sliding-window feature ingestion, and deterministic fallback evaluation.",
    },
    {
      category: "Distributed Backend & Telemetry",
      icon: Database,
      color: "#FBBF24",
      skills: ["FastAPI", "Go (Golang)", "PostgreSQL", "TimescaleDB", "Redis", "Docker", "WebSockets"],
      summary: "High-throughput telemetry streaming, time-series anomaly detection, and sub-10ms query execution across containerized architectures.",
    },
    {
      category: "Team Coordination & Stage Delivery",
      icon: ShieldCheck,
      color: "#34D399",
      skills: ["Contract-First Schema Freezing", "Parallel Sprint Execution", "Live Demo Sandboxing", "Pitch Narrative Strategy"],
      summary: "Zero-blocker collaboration enabling front, back, and ML engineers to build in parallel from hour four of a hackathon.",
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101724] border border-[#253044] text-xs font-mono text-[#22D3C5]">
          <Users className="w-3.5 h-3.5" />
          <span>Core Engineering Roster</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          The People Behind Extokened
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
          We operate as a synchronized, permanent squad. Four specialists across AI, full-stack architecture, distributed systems, and creative design united by shared accountability and rapid execution.
        </p>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>

      {/* Collective Capabilities Matrix */}
      <section className="border-t border-[#253044] pt-16 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
            Team Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Collective Capabilities
          </h2>
          <p className="text-sm text-zinc-400">
            A comprehensive overview of our combined technical proficiencies across software layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collectiveCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="studio-card p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-md flex items-center justify-center bg-[#151F2E] border border-[#253044]"
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {cap.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {cap.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]"
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

      {/* Culture & Collaboration Principles */}
      <section className="border-t border-[#253044] pt-16 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#22D3C5]">
            Collaboration Dynamics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How We Operate as a Permanent Unit
          </h2>
          <p className="text-sm text-zinc-400">
            Unlike makeshift teams formed hours before a hackathon starts, our long-term alignment delivers consistent results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="studio-card p-6 space-y-3">
            <h3 className="text-base font-bold text-white">
              Zero Role Confusion
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Every squad member has designated operational ownership. Decisions in API contracts, AI inference loops, and UI interactions are made swiftly without ego or prolonged deliberation.
            </p>
          </div>

          <div className="studio-card p-6 space-y-3">
            <h3 className="text-base font-bold text-white">
              Ruthless Prioritization
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              When working against a 36-hour clock, knowing what to cut is more critical than what to build. We focus entirely on core user impact and stage verification.
            </p>
          </div>

          <div className="studio-card p-6 space-y-3">
            <h3 className="text-base font-bold text-white">
              Mutual Psychological Safety
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Deep familiarity across 18+ competitions means bugs and setbacks during deep-night sprints are debugged collectively without finger-pointing.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <div className="studio-card p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Want to collaborate with our engineering squad?
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-sans">
          Whether you need a dedicated team for an enterprise hackathon challenge or want to discuss technical projects, we are available.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] shadow-md shadow-[#7C5CFF]/20 transition-all"
          >
            <span>Initiate Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
