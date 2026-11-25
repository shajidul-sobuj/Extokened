import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Extokened",
    };
  }

  return {
    title: `${project.title} — Case Study | Extokened`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Masthead & Breadcrumb */}
      <MotionReveal className="space-y-6 border-b border-white/[0.08] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#7D87A6]">
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#DCE2FF]">{project.title}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className="text-[#B4BDD8]">{project.category}</span>
          <span className="text-white/20">•</span>
          <span className="text-[#B4BDD8]">{project.year}</span>
          <span className="text-white/20">•</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] border border-[#34D399]/35 text-[#34D399] bg-[#34D399]/10">
            {project.status}
          </span>
        </div>

        <h1 className="font-page-title font-bold text-white">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-[#B4BDD8] leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch live prototype</span>
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2.5 px-5 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>View source repository</span>
            </a>
          )}
        </div>
      </MotionReveal>

      {/* Framed Hero Visual with Non-Overlapping Caption */}
      <MotionReveal delay={0.08}>
        <figure className="surface-card overflow-hidden">
          <div className="aspect-video bg-[#0A0D18] overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 border-t border-white/[0.08] text-xs font-mono text-[#8F99B8] bg-[#0B0E17]">
            Figure 01 — Primary interface overview ({project.title})
          </figcaption>
        </figure>
      </MotionReveal>

      {/* Hairline Metadata Rail */}
      <MotionReveal delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.1] rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-xl">
          <div className="bg-[#0B0F1D]/80 p-5">
            <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
              Category
            </span>
            <span className="text-sm font-semibold text-white mt-1.5 block">
              {project.category}
            </span>
          </div>
          <div className="bg-[#0B0F1D]/80 p-5">
            <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
              Status
            </span>
            <span className="text-sm font-semibold text-[#34D399] mt-1.5 block">
              {project.status}
            </span>
          </div>
          <div className="bg-[#0B0F1D]/80 p-5">
            <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
              Year
            </span>
            <span className="text-sm font-semibold text-white mt-1.5 block">
              {project.year}
            </span>
          </div>
          <div className="bg-[#0B0F1D]/80 p-5">
            <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
              Sprint Base
            </span>
            <span className="text-sm font-semibold text-white mt-1.5 block">
              48 Hours
            </span>
          </div>
        </div>
      </MotionReveal>

      {/* Problem & Solution */}
      <MotionReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card p-6 sm:p-8 space-y-3.5">
            <div className="flex items-center gap-2 text-[#A5B2FF] text-xs font-mono uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <h2 className="text-xl font-display font-bold text-white">
              Operational Friction
            </h2>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {project.problem}
            </p>
          </div>

          <div className="surface-card p-6 sm:p-8 space-y-3.5">
            <div className="flex items-center gap-2 text-[#34D399] text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineered Solution</span>
            </div>
            <h2 className="text-xl font-display font-bold text-white">
              Technical Approach
            </h2>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {project.solution}
            </p>
          </div>
        </div>
      </MotionReveal>

      {/* Key Features */}
      <MotionReveal delay={0.1}>
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-white">
            Key Capabilities &amp; Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="surface-card p-5 flex items-start gap-3.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B9BF7] shrink-0 mt-1" />
                <span className="text-sm text-[#C2CBE6] leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Architecture Notes */}
      <MotionReveal delay={0.1}>
        <div className="surface-card p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-[#A5B2FF] text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>System Architecture &amp; Dataflow Strategy</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white">
            Under the Hood
          </h2>
          <p className="text-sm sm:text-base text-[#B4BDD8] leading-[1.75] whitespace-pre-line">
            {project.architectureNotes}
          </p>

          <div className="pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Challenges & Learnings */}
      <MotionReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A5B2FF]">
              Sprint Bottlenecks
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Engineering Challenges
            </h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {project.challenges}
            </p>
          </div>

          <div className="surface-card p-6 sm:p-8 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#34D399]">
              Retrospective
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Key Learnings
            </h3>
            <p className="text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.75]">
              {project.learnings}
            </p>
          </div>
        </div>
      </MotionReveal>

      {/* Validated Outcome */}
      <MotionReveal delay={0.1}>
        <div className="surface-card p-6 sm:p-8 space-y-3 border-l-4 border-l-[#8B9BF7]">
          <div className="flex items-center gap-2 text-[#F5C451] text-xs font-mono uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Measured Outcome</span>
          </div>
          <h3 className="text-xl font-display font-bold text-white">
            Impact &amp; Validation
          </h3>
          <p className="text-sm sm:text-base text-[#DCE2FF] leading-[1.75]">
            {project.outcome}
          </p>
        </div>
      </MotionReveal>

      {/* Contributors */}
      {project.contributors && project.contributors.length > 0 && (
        <MotionReveal delay={0.1}>
          <div className="space-y-6 border-t border-white/[0.08] pt-12">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#8B9BF7]" />
              <h2 className="text-xl font-display font-bold text-white">
                Squad Contributors
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.contributors.map((contrib, idx) => (
                <div key={idx} className="surface-card p-5 space-y-1.5">
                  <div className="text-base font-bold text-white">{contrib.name}</div>
                  <div className="text-xs text-[#8B9BF7] font-mono">{contrib.role}</div>
                  <p className="text-sm text-[#9BA5C4] leading-relaxed pt-1">
                    {contrib.contribution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      )}

      {/* Next / Back Footer Nav */}
      <div className="border-t border-white/[0.08] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#B4BDD8] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A5B2FF] hover:text-white transition-colors"
          >
            <span>Next Case Study: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
