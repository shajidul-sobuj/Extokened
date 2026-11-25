import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { hackathons } from "@/data/hackathons";
import { projects } from "@/data/projects";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  ArrowLeft,
  Trophy,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Layers,
  Users,
  AlertTriangle,
  Lightbulb,
  FileCheck,
  ArrowRight,
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
  const hasCaseStudy = Boolean(
    hackathon.projectSlug && projects.some((p) => p.slug === hackathon.projectSlug)
  );

  const getBadgeStyle = () => {
    switch (hackathon.resultType) {
      case "winner":
        return "text-[#F5C451] border-[#F5C451]/35 bg-[#F5C451]/10";
      case "finalist":
        return "text-[#A5B2FF] border-[#8B9BF7]/35 bg-[#8B9BF7]/10";
      default:
        return "text-[#CFD7F2] border-white/[0.14] bg-[#111522]";
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#7D87A6]">
        <Link href="/hackathons" className="hover:text-white transition-colors">
          Hackathons
        </Link>
        <span>/</span>
        <span className="text-[#DCE2FF] truncate">{hackathon.name}</span>
      </div>

      {/* Masthead */}
      <MotionReveal className="space-y-6 border-b border-white/[0.08] pb-10">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold ${getBadgeStyle()}`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>{hackathon.award}</span>
          </span>
          <span className="text-[#B4BDD8]">{hackathon.standoutMetric}</span>
          <span className="text-white/20">•</span>
          <span className="text-[#8F99B8]">{hackathon.date}</span>
        </div>

        <h1 className="font-page-title font-bold text-white">
          {hackathon.name}
        </h1>

        <p className="text-base text-[#CFD7F2]">
          Organized by <strong className="text-white font-semibold">{hackathon.organizer}</strong>
        </p>

        {/* Hairline Frosted Telemetry Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.1] rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-xl mt-4">
          <div className="bg-[#0B0F1D]/80 p-5 space-y-1.5">
            <div className="text-[11px] font-mono text-[#8F99B8] uppercase tracking-wider">
              Sprint Duration
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8B9BF7]" />
              <span>{hackathon.duration}</span>
            </div>
          </div>

          <div className="bg-[#0B0F1D]/80 p-5 space-y-1.5">
            <div className="text-[11px] font-mono text-[#8F99B8] uppercase tracking-wider">
              Location &amp; Venue
            </div>
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8B9BF7] shrink-0" />
              <span>{hackathon.location}</span>
            </div>
          </div>

          <div className="bg-[#0B0F1D]/80 p-5 space-y-1.5">
            <div className="text-[11px] font-mono text-[#8F99B8] uppercase tracking-wider">
              Official Award
            </div>
            <div className="text-sm font-semibold text-[#F5C451] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F5C451] shrink-0" />
              <span>{hackathon.award}</span>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* Solution Built */}
      <MotionReveal delay={0.08}>
        <div className="surface-card p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A5B2FF] font-semibold">
              Solution Engineered Under {hackathon.duration}
            </div>
            {hasCaseStudy && hackathon.projectSlug && (
              <Link
                href={`/projects/${hackathon.projectSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#A5B2FF] transition-colors"
              >
                <span>Open Full Case Study</span>
                <Layers className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          <h2 className="text-2xl font-display font-bold text-white">
            {hackathon.projectTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#B4BDD8] leading-[1.75]">
            {hackathon.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {hackathon.techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Challenge vs Solution */}
      <MotionReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card p-6 sm:p-8 space-y-3.5">
            <div className="flex items-center gap-2 text-[#A5B2FF] text-xs font-mono uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>The Prompt &amp; Friction</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">The Challenge</h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {hackathon.challengeSummary}
            </p>
          </div>

          <div className="surface-card p-6 sm:p-8 space-y-3.5">
            <div className="flex items-center gap-2 text-[#34D399] text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineered Response</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">Our Solution</h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {hackathon.solutionSummary}
            </p>
          </div>
        </div>
      </MotionReveal>

      {/* Sprint Highlights */}
      <MotionReveal delay={0.1}>
        <div className="space-y-5">
          <h2 className="text-2xl font-display font-bold text-white">
            Sprint Highlights &amp; Validation
          </h2>
          <div className="space-y-3">
            {hackathon.highlights.map((h, i) => (
              <div key={i} className="surface-card p-5 flex items-start gap-3.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B9BF7] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-[15px] text-[#C2CBE6] leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Retrospective */}
      <MotionReveal delay={0.1}>
        <div className="surface-card p-6 sm:p-8 space-y-3 border-l-4 border-l-[#8B9BF7]">
          <div className="flex items-center gap-2 text-[#A5B2FF] text-xs font-mono uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>Sprint Retrospective</span>
          </div>
          <h3 className="text-xl font-display font-bold text-white">
            What the Clock Taught Us
          </h3>
          <p className="text-sm sm:text-base text-[#DCE2FF] leading-[1.75]">
            {hackathon.learnings}
          </p>
        </div>
      </MotionReveal>

      {/* Squad Deployed */}
      {hackathon.teamMembers && hackathon.teamMembers.length > 0 && (
        <MotionReveal delay={0.1}>
          <div className="space-y-4 border-t border-white/[0.08] pt-12">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#8B9BF7]" />
              <h2 className="text-xl font-display font-bold text-white">Squad Deployed</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {hackathon.teamMembers.map((member, idx) => (
                <span key={idx} className="tech-tag text-xs text-white px-3 py-1.5">
                  {member}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      )}

      {/* Evidence Links */}
      <MotionReveal delay={0.1}>
        <div className="space-y-5 border-t border-white/[0.08] pt-12">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-4 h-4 text-[#34D399]" />
            <h2 className="text-xl font-display font-bold text-white">
              Verified Evidence &amp; Links
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathon.evidenceLinks.map((ev, idx) => (
              <a
                key={idx}
                href={ev.url}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card surface-card-interactive p-4 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {ev.type === "github" ? (
                    <Github className="w-4 h-4 text-[#9BA5C4] group-hover:text-white shrink-0" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-[#8B9BF7] shrink-0" />
                  )}
                  <span className="text-sm font-medium text-white group-hover:text-[#A5B2FF] transition-colors truncate">
                    {ev.label}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#7D87A6] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Bottom Navigation */}
      <div className="border-t border-white/[0.08] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#B4BDD8] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All hackathons</span>
        </Link>

        {nextHackathon && (
          <Link
            href={`/hackathons/${nextHackathon.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors"
          >
            <span>Next Event: {nextHackathon.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
