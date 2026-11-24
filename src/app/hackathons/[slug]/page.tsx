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
        return "text-[#E8B86D] border-[#E8B86D]/40 bg-[#E8B86D]/10";
      case "runner_up":
        return "text-[#74C69D] border-[#74C69D]/40 bg-[#74C69D]/10";
      case "finalist":
        return "text-[#AAA9A3] border-[#414449] bg-[#191B1F]";
      default:
        return "text-[#777873] border-[#292B2E] bg-[#111214]";
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back Link */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#777873]">
        <Link href="/hackathons" className="hover:text-[#F3F1EC] transition-colors">
          Hackathons
        </Link>
        <span>/</span>
        <span className="text-[#F3F1EC]">{hackathon.name}</span>
      </div>

      {/* Header Block */}
      <div className="space-y-6 border-b border-[#292B2E] pb-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className={`px-2.5 py-0.5 rounded border text-[11px] font-semibold ${getBadgeStyle()}`}>
            {hackathon.badgeLabel}
          </span>
          <span className="text-[#AAA9A3]">{hackathon.standoutMetric}</span>
          <span>•</span>
          <span className="text-[#777873]">{hackathon.date}</span>
        </div>

        <h1 className="font-page-title font-bold text-[#F3F1EC] tracking-tight leading-tight">
          {hackathon.name}
        </h1>

        <div className="text-base text-[#AAA9A3] font-sans">
          Organized by <strong className="text-[#F3F1EC] font-semibold">{hackathon.organizer}</strong>
        </div>

        {/* Telemetry metadata row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="editorial-card p-4 bg-[#111214] border border-[#292B2E] space-y-1">
            <div className="text-[10px] font-mono text-[#777873] uppercase">
              Sprint Duration
            </div>
            <div className="text-sm font-semibold text-[#F3F1EC] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#777873]" />
              <span>{hackathon.duration}</span>
            </div>
          </div>

          <div className="editorial-card p-4 bg-[#111214] border border-[#292B2E] space-y-1">
            <div className="text-[10px] font-mono text-[#777873] uppercase">
              Location &amp; Venue
            </div>
            <div className="text-sm font-semibold text-[#F3F1EC] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#777873]" />
              <span>{hackathon.location}</span>
            </div>
          </div>

          <div className="editorial-card p-4 bg-[#111214] border border-[#292B2E] space-y-1">
            <div className="text-[10px] font-mono text-[#777873] uppercase">
              Official Award
            </div>
            <div className="text-sm font-semibold text-[#E8B86D] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#E8B86D]" />
              <span>{hackathon.award}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Built Section */}
      <div className="editorial-card p-6 sm:p-8 bg-[#111214] border border-[#292B2E] space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C6F36A] font-semibold">
            Solution Engineered Under 48h
          </div>
          {hackathon.projectSlug && (
            <Link
              href={`/projects/${hackathon.projectSlug}`}
              className="text-xs font-mono text-[#F3F1EC] hover:text-[#C6F36A] inline-flex items-center gap-1"
            >
              <span>View Case Study</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#F3F1EC]">
          {hackathon.projectTitle}
        </h2>

        <p className="text-sm sm:text-base text-[#AAA9A3] leading-relaxed font-sans">
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
        <div className="editorial-card p-6 sm:p-7 bg-[#111214] border border-[#292B2E] space-y-3">
          <div className="flex items-center gap-2 text-[#E8B86D] text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Prompt &amp; Friction</span>
          </div>
          <h3 className="text-xl font-bold text-[#F3F1EC]">
            The Challenge
          </h3>
          <p className="text-sm text-[#AAA9A3] leading-relaxed font-sans">
            {hackathon.challengeSummary}
          </p>
        </div>

        <div className="editorial-card p-6 sm:p-7 bg-[#111214] border border-[#292B2E] space-y-3">
          <div className="flex items-center gap-2 text-[#74C69D] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Engineered Response</span>
          </div>
          <h3 className="text-xl font-bold text-[#F3F1EC]">
            Our Solution
          </h3>
          <p className="text-sm text-[#AAA9A3] leading-relaxed font-sans">
            {hackathon.solutionSummary}
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#F3F1EC] tracking-tight">
          Sprint Highlights &amp; Validation
        </h2>
        <div className="space-y-3">
          {hackathon.highlights.map((h, i) => (
            <div key={i} className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C6F36A] shrink-0 mt-0.5" />
              <span className="text-sm text-[#AAA9A3] font-sans leading-relaxed">
                {h}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Mortem & Retrospective */}
      <div className="editorial-card p-6 sm:p-8 bg-[#111214] border border-[#292B2E] space-y-3 border-l-4 border-l-[#C6F36A]">
        <div className="flex items-center gap-2 text-[#C6F36A] text-xs font-mono uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>Sprint Retrospective</span>
        </div>
        <h3 className="text-xl font-bold text-[#F3F1EC]">
          What the Clock Taught Us
        </h3>
        <p className="text-sm sm:text-base text-[#AAA9A3] leading-relaxed font-sans">
          {hackathon.learnings}
        </p>
      </div>

      {/* Team Roster on this Sprint */}
      {hackathon.teamMembers && hackathon.teamMembers.length > 0 && (
        <div className="space-y-4 border-t border-[#292B2E] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#777873]" />
            <h2 className="text-xl font-bold text-[#F3F1EC]">
              Squad Deployed
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {hackathon.teamMembers.map((member, idx) => (
              <span key={idx} className="tech-tag text-xs text-[#F3F1EC]">
                {member}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Evidence & Official Submissions */}
      <div className="space-y-4 border-t border-[#292B2E] pt-12">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-[#74C69D]" />
          <h2 className="text-xl font-bold text-[#F3F1EC]">
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
              className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between hover:border-[#414449] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                {ev.type === "github" ? (
                  <Github className="w-4 h-4 text-[#777873] group-hover:text-white" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-[#C6F36A]" />
                )}
                <span className="text-xs font-medium text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
                  {ev.label}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#777873]" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-[#292B2E] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#AAA9A3] hover:text-[#F3F1EC] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All hackathons</span>
        </Link>

        {nextHackathon && (
          <Link
            href={`/hackathons/${nextHackathon.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C6F36A] hover:underline"
          >
            <span>Next Event: {nextHackathon.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
}
