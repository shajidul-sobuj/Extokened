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
  FileCheck,
  ArrowRight
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
  const hackathonIndex = hackathons.findIndex((h) => h.slug === slug);

  if (hackathonIndex === -1) {
    notFound();
  }

  const hackathon = hackathons[hackathonIndex];
  const nextHackathon = hackathons[(hackathonIndex + 1) % hackathons.length];

  const getBadgeStyle = () => {
    switch (hackathon.resultType) {
      case "winner":
        return "text-[#FFC857] border-[#FFC857]/40 bg-[#FFC857]/10 shadow-[0_0_12px_rgba(255,200,87,0.15)]";
      case "runner_up":
        return "text-[#8B9BF7] border-[#8B9BF7]/40 bg-[#8B9BF7]/10 shadow-[0_0_12px_rgba(139,155,247,0.15)]";
      case "finalist":
        return "text-[#BAC0DC] border-[#1E2337] bg-[#151824]";
      default:
        return "text-[#727896] border-[#1E2337] bg-[#151824]";
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back Link */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#727896]">
        <Link href="/hackathons" className="hover:text-white transition-colors">
          Hackathons
        </Link>
        <span>/</span>
        <span className="text-white">{hackathon.name}</span>
      </div>

      {/* Header Block */}
      <div className="space-y-6 border-b border-[#1E2337] pb-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${getBadgeStyle()}`}>
            {hackathon.badgeLabel}
          </span>
          <span className="text-[#BAC0DC]">{hackathon.standoutMetric}</span>
          <span>•</span>
          <span className="text-[#727896]">{hackathon.date}</span>
        </div>

        <h1 className="font-page-title font-bold text-white tracking-tight leading-tight">
          {hackathon.name}
        </h1>

        <div className="text-base text-[#BAC0DC] font-sans">
          Organized by <strong className="text-white font-semibold">{hackathon.organizer}</strong>
        </div>

        {/* Telemetry metadata row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#727896] uppercase">
              Sprint Duration
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#727896]" />
              <span>{hackathon.duration}</span>
            </div>
          </div>

          <div className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#727896] uppercase">
              Location &amp; Venue
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#727896]" />
              <span>{hackathon.location}</span>
            </div>
          </div>

          <div className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#727896] uppercase">
              Official Award
            </div>
            <div className="text-sm font-semibold text-[#FFC857] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FFC857]" />
              <span>{hackathon.award}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Built Section */}
      <div className="editorial-card meadow-card p-6 sm:p-8 bg-[#0F1118] border border-[#1E2337] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8B9BF7] font-semibold">
            Solution Engineered Under 48h
          </div>
          {hackathon.projectSlug && (
            <Link
              href={`/projects/${hackathon.projectSlug}`}
              className="text-xs font-mono text-white hover:text-[#8B9BF7] inline-flex items-center gap-1"
            >
              <span>View Case Study</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white">
          {hackathon.projectTitle}
        </h2>

        <p className="text-sm sm:text-base text-[#BAC0DC] leading-relaxed font-sans">
          {hackathon.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {hackathon.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge vs Solution Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="editorial-card meadow-card p-6 sm:p-7 bg-[#0F1118] border border-[#1E2337] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#8B9BF7] text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Prompt &amp; Friction</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            The Challenge
          </h3>
          <p className="text-sm text-[#BAC0DC] leading-relaxed font-sans">
            {hackathon.challengeSummary}
          </p>
        </div>

        <div className="editorial-card meadow-card p-6 sm:p-7 bg-[#0F1118] border border-[#1E2337] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#2FB36A] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Engineered Response</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Our Solution
          </h3>
          <p className="text-sm text-[#BAC0DC] leading-relaxed font-sans">
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
            <div key={i} className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] flex items-start gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <CheckCircle2 className="w-4 h-4 text-[#8B9BF7] shrink-0 mt-0.5" />
              <span className="text-sm text-[#BAC0DC] font-sans leading-relaxed">
                {h}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Mortem & Retrospective */}
      <div className="editorial-card meadow-card p-6 sm:p-8 bg-[#0F1118] border border-[#1E2337] space-y-3 border-l-4 border-l-[#8B9BF7] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-[#8B9BF7] text-xs font-mono uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Sprint Retrospective</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          What the Clock Taught Us
        </h3>
        <p className="text-sm sm:text-base text-[#BAC0DC] leading-relaxed font-sans">
          {hackathon.learnings}
        </p>
      </div>

      {/* Team Roster on this Sprint */}
      {hackathon.teamMembers && hackathon.teamMembers.length > 0 && (
        <div className="space-y-4 border-t border-[#1E2337] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#727896]" />
            <h2 className="text-xl font-bold text-white">
              Squad Deployed
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {hackathon.teamMembers.map((member, idx) => (
              <span key={idx} className="tech-tag text-xs text-white">
                {member}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Evidence & Official Submissions */}
      <div className="space-y-4 border-t border-[#1E2337] pt-12">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-[#2FB36A]" />
          <h2 className="text-xl font-bold text-white">
            Verified Evidence &amp; Links
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {hackathon.evidenceLinks.map((ev, idx) => (
            <a
              key={idx}
              href={ev.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] flex items-center justify-between hover:border-[#2B324E] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {ev.type === "github" ? (
                  <Github className="w-4 h-4 text-[#727896] group-hover:text-white" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-[#8B9BF7]" />
                )}
                <span className="text-xs font-medium text-white group-hover:text-[#8B9BF7] transition-colors">
                  {ev.label}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#727896]" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-[#1E2337] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#BAC0DC] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All hackathons</span>
        </Link>

        {nextHackathon && (
          <Link
            href={`/hackathons/${nextHackathon.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8B9BF7] hover:underline"
          >
            <span>Next Event: {nextHackathon.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
}
