import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Calendar, 
  Clock, 
  Award,
  Users,
  ArrowRight
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
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 9.1 Project Masthead & Breadcrumb */}
      <div className="space-y-6 border-b border-[#2D221A] pb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#777873]">
          <Link href="/projects" className="hover:text-[#F3F1EC] transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#F3F1EC]">{project.title}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className="text-[#AAA9A3]">{project.category}</span>
          <span>•</span>
          <span className="text-[#AAA9A3]">Year {project.year}</span>
          <span>•</span>
          <span className="px-2 py-0.5 rounded text-[10px] border border-[#74C69D]/40 text-[#74C69D] bg-[#74C69D]/10">
            {project.status}
          </span>
        </div>

        <h1 className="font-page-title font-bold text-[#F3F1EC] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#AAA9A3] leading-relaxed font-sans max-w-3xl">
          {project.summary}
        </p>

        {/* Live / Source Code Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber-glass"
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
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              <span>View source repository</span>
            </a>
          )}
        </div>
      </div>

      {/* 9.2 Hero Media */}
      <div className="relative overflow-hidden rounded-xl border border-[#2D221A] bg-[#141210] aspect-video shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-4 text-[11px] font-mono text-[#ADADAD] bg-[#0D0D0D]/90 px-2.5 py-1 rounded-md border border-[#2D221A]">
          Figure: Primary system interface overview ({project.title})
        </div>
      </div>

      {/* 9.3 Project Facts Metadata Rail */}
      <div className="editorial-card p-6 bg-[#141210] border border-[#2D221A] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div>
          <span className="text-[#7D7D7D] block uppercase text-[10px]">Category</span>
          <span className="text-white font-semibold mt-1 block">{project.category}</span>
        </div>
        <div>
          <span className="text-[#7D7D7D] block uppercase text-[10px]">Status</span>
          <span className="text-[#74C69D] font-semibold mt-1 block">{project.status}</span>
        </div>
        <div>
          <span className="text-[#7D7D7D] block uppercase text-[10px]">Year</span>
          <span className="text-white font-semibold mt-1 block">{project.year}</span>
        </div>
        <div>
          <span className="text-[#7D7D7D] block uppercase text-[10px]">Sprint Base</span>
          <span className="text-white font-semibold mt-1 block">48 Hours</span>
        </div>
      </div>

      {/* 9.4 Problem and Solution: Two-Column Editorial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#F0A24C] text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Operational Friction
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 text-[#74C69D] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Engineered Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Technical Approach
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            {project.solution}
          </p>
        </div>
      </div>

      {/* 9.5 Feature Walkthrough */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Key Capabilities &amp; Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="editorial-card p-5 bg-[#141210] border border-[#2D221A] flex items-start gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              <CheckCircle2 className="w-4 h-4 text-[#F0A24C] shrink-0 mt-0.5" />
              <span className="text-sm text-[#ADADAD] font-sans leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 9.6 Technical Architecture Notes */}
      <div className="editorial-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-[#F0A24C] text-xs font-mono uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>System Architecture &amp; Dataflow Strategy</span>
        </div>
        <h2 className="text-2xl font-bold text-white">
          Under the Hood
        </h2>
        <p className="text-sm sm:text-base text-[#ADADAD] leading-relaxed font-sans whitespace-pre-line">
          {project.architectureNotes}
        </p>

        <div className="pt-4 border-t border-[#2D221A] flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 9.7 Challenges and Learnings: Two-Column Post-Mortem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#F0A24C]">
            Sprint Bottlenecks
          </span>
          <h3 className="text-xl font-bold text-white">
            Engineering Challenges
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            {project.challenges}
          </p>
        </div>

        <div className="editorial-card p-6 sm:p-7 bg-[#141210] border border-[#2D221A] space-y-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#74C69D]">
            Retrospective
          </span>
          <h3 className="text-xl font-bold text-white">
            Key Learnings
          </h3>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            {project.learnings}
          </p>
        </div>
      </div>

      {/* 9.8 Validated Outcome */}
      <div className="editorial-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] space-y-3 border-l-4 border-l-[#F0A24C] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-[#F0A24C] text-xs font-mono uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Measured Outcome</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          Impact &amp; Validation
        </h3>
        <p className="text-sm sm:text-base text-[#ADADAD] leading-relaxed font-sans">
          {project.outcome}
        </p>
      </div>

      {/* 9.9 Contributor Attribution */}
      {project.contributors && project.contributors.length > 0 && (
        <div className="space-y-6 border-t border-[#2D221A] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#7D7D7D]" />
            <h2 className="text-xl font-bold text-white">
              Squad Contributors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.contributors.map((contrib, idx) => (
              <div key={idx} className="editorial-card p-4 bg-[#141210] border border-[#2D221A] space-y-1">
                <div className="text-sm font-bold text-white">
                  {contrib.name}
                </div>
                <div className="text-xs text-[#F0A24C] font-mono">
                  {contrib.role}
                </div>
                <div className="text-xs text-[#7D7D7D] pt-1">
                  {contrib.contribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9.10 Next Project Feature & Back Link */}
      <div className="border-t border-[#2D221A] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#ADADAD] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F0A24C] hover:underline"
          >
            <span>Next Case Study: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
}
