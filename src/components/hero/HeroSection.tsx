"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Trophy, Terminal, Activity, Layers, CheckCircle2, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"console" | "telemetry" | "stack">("console");

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1E2337]/60 overflow-hidden bg-transparent">
      {/* Background twilight periwinkle glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B9BF7]/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FFC857]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      {/* Soft bottom atmospheric mist gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090E]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 7/5 Editorial Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left 7 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Pill with Live Signal Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="chip py-1 px-3.5 h-auto text-xs font-mono inline-flex items-center gap-2.5 shadow-[0_0_12px_rgba(47,179,106,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2FB36A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2FB36A]" />
              </span>
              <span>Independent Engineering Squad • 18 Competitions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-hero-display font-semibold text-white leading-tight"
            >
              We build what we{" "}
              <span className="text-[#8B9BF7] drop-shadow-[0_0_30px_rgba(139,155,247,0.4)]">
                imagine.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-[#BAC0DC] leading-relaxed max-w-2xl font-sans"
            >
              Extokened is a team of builders exploring ideas, competing in hackathons, and turning practical problems into working products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="btn-meadow-dark"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/hackathons"
                className="btn-meadow-secondary"
              >
                <Trophy className="w-4 h-4 text-[#FFC857]" />
                <span>Our hackathon journey</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 5 Columns: Interactive Engineering Terminal HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="meadow-card p-6 sm:p-7 relative overflow-hidden space-y-5">
              
              {/* Card Header & Interactive Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(139,155,247,0.15)]">
                <div className="flex items-center gap-1.5 glass-panel-inset p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab("console")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeTab === "console"
                        ? "bg-[#8B9BF7]/20 text-[#8B9BF7] border border-[#8B9BF7]/40 font-semibold shadow-sm"
                        : "text-[#BAC0DC] hover:text-white"
                    }`}
                  >
                    Console
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeTab === "telemetry"
                        ? "bg-[#8B9BF7]/20 text-[#8B9BF7] border border-[#8B9BF7]/40 font-semibold shadow-sm"
                        : "text-[#BAC0DC] hover:text-white"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeTab === "stack"
                        ? "bg-[#8B9BF7]/20 text-[#8B9BF7] border border-[#8B9BF7]/40 font-semibold shadow-sm"
                        : "text-[#BAC0DC] hover:text-white"
                    }`}
                  >
                    Stack
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#2FB36A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2FB36A] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[190px]">
                <AnimatePresence mode="wait">
                  {activeTab === "console" && (
                    <motion.div
                      key="console"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="py-2 text-center">
                        <div className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(139,155,247,0.25)]">
                          &lt;EXT/&gt;
                        </div>
                        <div className="text-[11px] font-mono text-[#8B9BF7] mt-1 uppercase tracking-widest">
                          Autonomous AI • Resilient Web • Systems
                        </div>
                      </div>

                      <div className="space-y-2 text-xs font-mono pt-1 border-t border-[#1E2337]/60">
                        <div className="flex justify-between items-center text-[#BAC0DC]">
                          <span className="text-[#727896]">Sprint Cadence:</span>
                          <span className="text-white">24–48h Rapid Prototyping</span>
                        </div>
                        <div className="flex justify-between items-center text-[#BAC0DC]">
                          <span className="text-[#727896]">Engineered Demos:</span>
                          <span className="text-[#2FB36A] flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            100% Live Running Code
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "telemetry" && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 pt-2 text-xs font-mono"
                    >
                      <div className="p-2.5 rounded-lg glass-panel-inset flex justify-between items-center">
                        <span className="text-[#8E96B8]">Championship Record:</span>
                        <span className="text-[#FFC857] font-semibold">7 Titles · 12 Podiums</span>
                      </div>
                      <div className="p-2.5 rounded-lg glass-panel-inset flex justify-between items-center">
                        <span className="text-[#8E96B8]">Sub-10ms Telemetry:</span>
                        <span className="text-[#8B9BF7] font-semibold">9.4ms Sliding Window</span>
                      </div>
                      <div className="p-2.5 rounded-lg glass-panel-inset flex justify-between items-center">
                        <span className="text-[#8E96B8]">Squad Uptime:</span>
                        <span className="text-white font-semibold">18 Sprints Continuous</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "stack" && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 pt-2"
                    >
                      <div className="text-[11px] font-mono text-[#727896] uppercase">Production Toolchain</div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Next.js 15", "React 19", "Gemini 2.5", "FastAPI", "Go", "PostgreSQL", "TimescaleDB", "Docker", "Tailwind CSS"].map((tech) => (
                          <span key={tech} className="tech-tag text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Console Status Bar */}
              <div className="pt-3 border-t border-[#1E2337] flex items-center justify-between text-[11px] font-mono text-[#727896]">
                <span>Dhaka, BD (UTC+6)</span>
                <span className="text-[#BAC0DC]">v0.1 / Production Ready</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
