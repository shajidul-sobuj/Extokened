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
  Layers, 
  Calendar, 
  Clock, 
  Award,
  Users
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
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const getStatusBadge = () => {
    switch (project.status) {
      case "Shipped":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Prototype":
        return "bg-[#22D3C5]/10 text-[#22D3C5] border-[#22D3C5]/30";
      case "In Progress":
        return "bg-[#7C5CFF]/10 text-[#A78BFA] border-[#7C5CFF]/30";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back Navigation */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Arsenal</span>
        </Link>
      </div>

      {/* Header Block */}
      <div className="space-y-6 border-b border-[#253044] pb-12">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
            {project.category}
          </span>
          <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-medium border ${getStatusBadge()}`}>
            {project.status}
          </span>
          <span className="text-xs font-mono text-zinc-500">
            Year {project.year}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-3xl">
          {project.summary}
        </p>

        {/* Quick External Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Live Prototype</span>
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-zinc-200 bg-[#151F2E] hover:bg-[#1a2638] border border-[#253044] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* At a Glance Box & Tech Stack */}
      <div className="studio-card p-6 sm:p-8 space-y-6">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
          Architecture &amp; Stack Overview
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-xs font-mono bg-[#080B12] text-zinc-200 border border-[#253044]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Narrative Section: Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="studio-card p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Operational Friction
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        <div className="studio-card p-6 sm:p-7 space-y-3">
          <div className="flex items-center gap-2 text-[#22D3C5] text-xs font-mono uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Engineered Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Technical Implementation
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Key Features &amp; Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="studio-card p-5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#22D3C5] shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300 font-sans leading-relaxed">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive: Architecture Notes */}
      <div className="studio-card p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-[#7C5CFF] text-xs font-mono uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>System Architecture &amp; Dataflow</span>
        </div>
        <h2 className="text-2xl font-bold text-white">
          Under the Hood
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans whitespace-pre-line">
          {project.architectureNotes}
        </p>
      </div>

      {/* Engineering Challenges & Learnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="studio-card p-6 sm:p-7 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
            Bottlenecks &amp; Hurdles
          </span>
          <h3 className="text-xl font-bold text-white">
            Engineering Challenges
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.challenges}
          </p>
        </div>

        <div className="studio-card p-6 sm:p-7 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#22D3C5]">
            Post-Mortem Takeaway
          </span>
          <h3 className="text-xl font-bold text-white">
            Key Learnings
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.learnings}
          </p>
        </div>
      </div>

      {/* Outcome / Measured Results */}
      <div className="studio-card p-6 sm:p-8 space-y-3 border-l-4 border-l-[#22D3C5]">
        <div className="flex items-center gap-2 text-[#22D3C5] text-xs font-mono uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Validated Outcome</span>
        </div>
        <h3 className="text-xl font-bold text-white">
          Impact &amp; Benchmarks
        </h3>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          {project.outcome}
        </p>
      </div>

      {/* Contributors on this Project */}
      {project.contributors && project.contributors.length > 0 && (
        <div className="space-y-6 border-t border-[#253044] pt-12">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-zinc-400" />
            <h2 className="text-xl font-bold text-white">
              Team Contributors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.contributors.map((contrib, idx) => (
              <div key={idx} className="studio-card p-4 space-y-1">
                <div className="text-sm font-bold text-white">
                  {contrib.name}
                </div>
                <div className="text-xs text-[#22D3C5] font-mono">
                  {contrib.role}
                </div>
                <div className="text-xs text-zinc-400 pt-1">
                  {contrib.contribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="border-t border-[#253044] pt-12 flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
        </Link>
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#22D3C5] hover:underline"
        >
          <span>Explore Hackathon Records →</span>
        </Link>
      </div>

    </div>
  );
}
