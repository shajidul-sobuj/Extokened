import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { hackathons } from "@/data/hackathons";
import { 
  ArrowLeft, 
  Trophy, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Users, 
  AlertTriangle,
  Lightbulb,
  FileCheck
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface HackathonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return hackathons.map((h) => ({
    slug: h.slug,
  }));
}

export async function generateMetadata({ params }: HackathonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hackathon = hackathons.find((h) => h.slug === slug);

  if (!hackathon) {
    return {
      title: "Hackathon Not Found | Extokened",
    };
  }

  return {
    title: `${hackathon.name} (${hackathon.award}) | Extokened`,
    description: hackathon.description,
  };
}

export default async function HackathonDetailPage({ params }: HackathonPageProps) {
  const { slug } = await params;
  const hackathon = hackathons.find((h) => h.slug === slug);

  if (!hackathon) {
    notFound();
  }

  const getBadgeStyle = () => {
    switch (hackathon.resultType) {
      case "winner":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "runner_up":
        return "bg-[#22D3C5]/10 text-[#22D3C5] border-[#22D3C5]/30";
      case "finalist":
        return "bg-[#7C5CFF]/10 text-[#A78BFA] border-[#7C5CFF]/30";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back Link */}
      <div>
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Hackathons Archive</span>
        </Link>
      </div>

      {/* Header Block */}
      <div className="space-y-6 border-b border-[#253044] pb-12">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeStyle()}`}>
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.badgeLabel}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
            {hackathon.standoutMetric}
          </span>
          <span className="text-xs font-mono text-zinc-500">
            {hackathon.date}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          {hackathon.name}
        </h1>

        <div className="text-lg text-zinc-300 font-sans">
          Organized by <strong className="text-white">{hackathon.organizer}</strong>
        </div>

        {/* Telemetry metadata row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="studio-card p-4 space-y-1">
            <div className="text-[11px] font-mono text-zinc-500 uppercase">
              Sprint Duration
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span>{hackathon.duration}</span>
            </div>
          </div>

          <div className="studio-card p-4 space-y-1">
            <div className="text-[11px] font-mono text-zinc-500 uppercase">
              Location &amp; Format
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span>{hackathon.location}</span>
            </div>
          </div>

          <div className="studio-card p-4 space-y-1">
            <div className="text-[11px] font-mono text-zinc-500 uppercase">
              Official Award
            </div>
            <div className="text-sm font-semibold text-amber-300 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{hackathon.award}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Built Section */}
      <div className="studio-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[#7C5CFF] font-semibold">
            Solution Built During Sprint
          </div>
          {hackathon.projectSlug && (
            <Link
              href={`/projects/${hackathon.projectSlug}`}
              className="text-xs font-mono text-[#22D3C5] hover:underline inline-flex items-center gap-1"
            >
              <span>View Case Study</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white">
          {hackathon.projectTitle}
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {hackathon.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {hackathon.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-xs font-mono bg-[#080B12] text-zinc-300 border border-[#253044]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge vs Solution Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="studio-card p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Hackathon Prompt</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            The Problem Statement
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {hackathon.challengeSummary}
          </p>
        </div>

        <div className="studio-card p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 text-[#22D3C5] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Our Approach</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            The Engineered Solution
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {hackathon.solutionSummary}
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Sprint Highlights &amp; Validation
        </h2>
        <div className="space-y-3">
          {hackathon.highlights.map((h, i) => (
            <div key={i} className="studio-card p-4 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#22D3C5] shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300 font-sans leading-relaxed">
                {h}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Mortem & Learnings */}
      <div className="studio-card p-6 sm:p-8 space-y-3 border-l-4 border-l-[#7C5CFF]">
        <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-mono uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Sprint Learnings &amp; Retrospective</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          What the Clock Taught Us
        </h3>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {hackathon.learnings}
        </p>
      </div>

      {/* Team Roster on this Sprint */}
      {hackathon.teamMembers && hackathon.teamMembers.length > 0 && (
        <div className="space-y-4 border-t border-[#253044] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-zinc-400" />
            <h2 className="text-xl font-bold text-white">
              Squad Deployed
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {hackathon.teamMembers.map((member, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#151F2E] border border-[#253044] text-zinc-200"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Evidence & Official Submissions */}
      <div className="space-y-4 border-t border-[#253044] pt-12">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xl font-bold text-white">
            Evidence &amp; Verified Records
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {hackathon.evidenceLinks.map((ev, idx) => (
            <a
              key={idx}
              href={ev.url}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-card p-4 flex items-center justify-between hover:border-zinc-400 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {ev.type === "github" ? (
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-[#22D3C5]" />
                )}
                <span className="text-xs font-medium text-white group-hover:text-[#22D3C5] transition-colors">
                  {ev.label}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 opacity-60 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-[#253044] pt-12 flex items-center justify-between">
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Hackathons</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3C5] hover:underline"
        >
          <span>Invite Extokened to Your Event →</span>
        </Link>
      </div>

    </div>
  );
}
