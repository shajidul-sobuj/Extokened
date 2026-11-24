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
        return "text-[#F0A24C] border-[#F0A24C]/40 bg-[#1D1510] shadow-[0_0_12px_rgba(240,162,76,0.15)]";
      case "runner_up":
        return "text-[#E0A165] border-[#E0A165]/40 bg-[#1D1510]";
      case "finalist":
        return "text-[#ADADAD] border-[#2D221A] bg-[#141210]";
      default:
        return "text-[#7D7D7D] border-[#2D221A] bg-[#141210]";
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back Link */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#7D7D7D]">
        <Link href="/hackathons" className="hover:text-white transition-colors">
          Hackathons
        </Link>
        <span>/</span>
        <span className="text-white">{hackathon.name}</span>
      </div>

      {/* Header Block */}
      <div className="space-y-6 border-b border-[#2D221A] pb-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${getBadgeStyle()}`}>
            {hackathon.badgeLabel}
          </span>
          <span className="text-[#ADADAD]">{hackathon.standoutMetric}</span>
          <span>•</span>
          <span className="text-[#7D7D7D]">{hackathon.date}</span>
        </div>

        <h1 className="font-page-title font-bold text-white tracking-tight leading-tight">
          {hackathon.name}
        </h1>

        <div className="text-base text-[#ADADAD] font-sans">
          Organized by <strong className="text-white font-semibold">{hackathon.organizer}</strong>
        </div>

        {/* Telemetry metadata row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="editorial-card p-4 bg-[#141210] border border-[#2D221A] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#7D7D7D] uppercase">
              Sprint Duration
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7D7D7D]" />
              <span>{hackathon.duration}</span>
            </div>
          </div>

          <div className="editorial-card p-4 bg-[#141210] border border-[#2D221A] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#7D7D7D] uppercase">
              Location &amp; Venue
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7D7D7D]" />
              <span>{hackathon.location}</span>
            </div>
          </div>

          <div className="editorial-card p-4 bg-[#141210] border border-[#2D221A] space-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
            <div className="text-[10px] font-mono text-[#7D7D7D] uppercase">
              Official Award
            </div>
            <div className="text-sm font-semibold text-[#F0A24C] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F0A24C]" />
              <span>{hackathon.award}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Built Section */}
      <div className="editorial-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[#F0A24C] font-semibold">
            Solution Engineered Under 48h
          </div>
          {hackathon.projectSlug && (
            <Link
              href={`/projects/${hackathon.projectSlug}`}
              className="text-xs font-mono text-white hover:text-[#F0A24C] inline-flex items-center gap-1"
            >
              <span>View Case Study</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white">
          {hackathon.projectTitle}
        </h2>

        <p className="text-sm sm:text-base text-[#ADADAD] leading-relaxed font-sans">
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
        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#F0A24C] text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Prompt &amp; Friction</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            The Challenge
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            {hackathon.challengeSummary}
          </p>
        </div>

        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#74C69D] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Engineered Response</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Our Solution
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
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
            <div key={i} className="editorial-card p-4 bg-[#141210] border border-[#2D221A] flex items-start gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <CheckCircle2 className="w-4 h-4 text-[#F0A24C] shrink-0 mt-0.5" />
              <span className="text-sm text-[#ADADAD] font-sans leading-relaxed">
                {h}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Mortem & Retrospective */}
      <div className="editorial-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] space-y-3 border-l-4 border-l-[#F0A24C] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-[#F0A24C] text-xs font-mono uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Sprint Retrospective</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          What the Clock Taught Us
        </h3>
        <p className="text-sm sm:text-base text-[#ADADAD] leading-relaxed font-sans">
          {hackathon.learnings}
        </p>
      </div>

      {/* Team Roster on this Sprint */}
      {hackathon.teamMembers && hackathon.teamMembers.length > 0 && (
        <div className="space-y-4 border-t border-[#2D221A] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#7D7D7D]" />
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
      <div className="space-y-4 border-t border-[#2D221A] pt-12">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-[#74C69D]" />
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
              className="editorial-card p-4 bg-[#141210] border border-[#2D221A] flex items-center justify-between hover:border-[#3D2E24] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {ev.type === "github" ? (
                  <Github className="w-4 h-4 text-[#7D7D7D] group-hover:text-white" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-[#F0A24C]" />
                )}
                <span className="text-xs font-medium text-white group-hover:text-[#F0A24C] transition-colors">
                  {ev.label}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#7D7D7D]" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-[#2D221A] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#ADADAD] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All hackathons</span>
        </Link>

        {nextHackathon && (
          <Link
            href={`/hackathons/${nextHackathon.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F0A24C] hover:underline"
          >
            <span>Next Event: {nextHackathon.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
}
