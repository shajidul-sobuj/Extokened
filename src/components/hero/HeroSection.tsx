"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Trophy, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Flame,
  ArrowUpRight 
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

export function HeroSection() {
  const [activeHighlight, setActiveHighlight] = useState<"pulse-ai" | "gridsync">("pulse-ai");

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1E2337]/60 overflow-hidden bg-transparent">
      {/* Background twilight atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8B9BF7]/[0.05] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FFC857]/[0.025] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08090E]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 md:space-y-16">
        
        {/* ======================================================== */}
        {/* CENTERED EDITORIAL HERO                                  */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Live Achievement Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono bg-[#121626]/80 border border-[#8B9BF7]/35 shadow-[0_0_16px_rgba(139,155,247,0.18)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FB36A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FB36A]" />
            </span>
            <span className="text-[#B8C0EC] font-medium tracking-wide">
              EXTOKENED SQUAD • 18 HACKATHONS • 7 GRAND CHAMPIONSHIPS
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-hero-display font-semibold text-white leading-tight tracking-tight text-balance"
          >
            We build what we{" "}
            <span className="text-[#8B9BF7] drop-shadow-[0_0_35px_rgba(139,155,247,0.45)]">
              imagine.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#BAC0DC] leading-relaxed max-w-2xl mx-auto font-sans text-balance"
          >
            Extokened is an independent engineering squad from Dhaka. We design, prototype, and ship resilient full-stack architectures, autonomous AI agents, and competitive systems under high-stakes deadlines.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/projects"
              className="btn-meadow-dark py-2.5 px-6 text-sm shadow-[0_0_24px_rgba(139,155,247,0.25)]"
            >
              <span>Explore 26+ Shipped Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/hackathons"
              className="btn-meadow-secondary py-2.5 px-5 text-sm"
            >
              <Trophy className="w-4 h-4 text-[#FFC857]" />
              <span>18 Hackathons Archive</span>
            </Link>

            <Link
              href="/team"
              className="btn-meadow-secondary py-2.5 px-5 text-sm hidden sm:inline-flex"
            >
              <Users className="w-4 h-4 text-[#8B9BF7]" />
              <span>Meet the 4 Builders</span>
            </Link>
          </motion.div>
        </div>

        {/* ======================================================== */}
        {/* REAL FLAGSHIP SPOTLIGHT (Replaces fake <EXT/> terminal)   */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="meadow-card p-6 sm:p-8 bg-[#0F1118] border border-[#1E2337] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden space-y-6">
            
            {/* Spotlight Header & Project Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E2337]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFC857] shadow-[0_0_8px_rgba(255,200,87,0.8)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                  FEATURED CHAMPIONSHIP BUILD
                </span>
              </div>

              {/* Toggle Switch between Flagship Projects */}
              <div className="flex items-center gap-1.5 glass-panel-inset p-1 rounded-lg self-start sm:self-auto">
                <button
                  onClick={() => setActiveHighlight("pulse-ai")}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeHighlight === "pulse-ai"
                      ? "bg-[#8B9BF7]/20 text-[#8B9BF7] border border-[#8B9BF7]/40 font-semibold shadow-sm"
                      : "text-[#BAC0DC] hover:text-white"
                  }`}
                >
                  PulseAI (2025)
                </button>
                <button
                  onClick={() => setActiveHighlight("gridsync")}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    activeHighlight === "gridsync"
                      ? "bg-[#8B9BF7]/20 text-[#8B9BF7] border border-[#8B9BF7]/40 font-semibold shadow-sm"
                      : "text-[#BAC0DC] hover:text-white"
                  }`}
                >
                  GridSync (2024)
                </button>
              </div>
            </div>

            {/* Project 1: PulseAI */}
            {activeHighlight === "pulse-ai" && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#FFC857] border border-[#FFC857]/40 bg-[#FFC857]/10 flex items-center gap-1.5 shadow-[0_0_14px_rgba(255,200,87,0.2)]">
                    <Trophy className="w-3.5 h-3.5 text-[#FFC857]" />
                    <span>Grand Champion (1st Place) • AI Horizon Global Hackathon 2025</span>
                  </span>
                  <span className="text-[#8E96B8]">
                    Google Developer Groups • 48-Hour Sprint
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    PulseAI: Autonomous Critical Patient Triage
                  </h2>
                  <p className="text-sm sm:text-base text-[#BAC0DC] leading-relaxed font-sans">
                    Connects bedside hospital ICU sensors with Gemini 2.0 to ingest continuous 50Hz vitals, waveforms, and clinician notes in real-time. Detects early hemodynamic instability hours before conventional threshold alarms fire.
                  </p>
                </div>

                {/* Verified Engineering Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Latency Window</span>
                    <span className="text-base font-bold text-[#8B9BF7] font-mono">Sub-200ms Drop Detection</span>
                  </div>
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Triage Model</span>
                    <span className="text-base font-bold text-[#2FB36A] font-mono">Google Gemini 2.0 Multi</span>
                  </div>
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Resilience</span>
                    <span className="text-base font-bold text-white font-mono">Offline-First Edge Buffer</span>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1E2337]">
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js 15", "Google Gemini API", "FastAPI", "TimescaleDB", "WebSockets"].map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/projects/pulse-ai"
                      className="btn-meadow-dark text-xs py-2 px-3.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="https://github.com/extokened/pulse-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Project 2: GridSync */}
            {activeHighlight === "gridsync" && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#FFC857] border border-[#FFC857]/40 bg-[#FFC857]/10 flex items-center gap-1.5 shadow-[0_0_14px_rgba(255,200,87,0.2)]">
                    <Trophy className="w-3.5 h-3.5 text-[#FFC857]" />
                    <span>1st Place CleanTech &amp; Energy • CodeStorm National 2024</span>
                  </span>
                  <span className="text-[#8E96B8]">
                    BUET &amp; ICT Division • 36-Hour Sprint
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    GridSync: Autonomous Solar Microgrid Balancer
                  </h2>
                  <p className="text-sm sm:text-base text-[#BAC0DC] leading-relaxed font-sans">
                    Decentralized peer-to-peer energy routing protocol that automatically distributes surplus rooftop solar production across neighborhood batteries using high-frequency predictive dispatch algorithms.
                  </p>
                </div>

                {/* Verified Engineering Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Efficiency Gain</span>
                    <span className="text-base font-bold text-[#8B9BF7] font-mono">31.4% Loss Reduction</span>
                  </div>
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Dispatch Engine</span>
                    <span className="text-base font-bold text-[#2FB36A] font-mono">Go + WebAssembly</span>
                  </div>
                  <div className="glass-panel-inset p-3 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#727896] block">Architecture</span>
                    <span className="text-base font-bold text-white font-mono">P2P Mesh Network</span>
                  </div>
                </div>

                {/* Tech Stack & Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1E2337]">
                  <div className="flex flex-wrap gap-1.5">
                    {["Go", "WebAssembly", "React", "PostgreSQL", "Docker", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/projects/gridsync"
                      className="btn-meadow-dark text-xs py-2 px-3.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="https://github.com/extokened/gridsync"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
