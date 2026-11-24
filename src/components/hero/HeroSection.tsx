"use client";

import React from "react";
import Link from "next/link";
import { 
  Trophy, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Flame, 
  Zap, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Status Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyber-cyan/40 backdrop-blur-md text-xs font-mono text-zinc-300 transition-all duration-300 hover:scale-[1.02] shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            <span className="text-cyber-cyan font-bold">EXTOKENED LABS</span>
            <span className="text-zinc-500">•</span>
            <span>Permanent Hackathon Squad</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
              We Hack. We Build. <br className="hidden sm:inline" />
              <span className="cyber-gradient-text">We Ship Beyond Limits.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We are <span className="text-white font-semibold">Extokened</span> — a battle-tested hackathon team that turns complex AI models, scalable architectures, and bold ideas into award-winning production prototypes in 24–48 hours.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/hackathons"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-cyber-cyan to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyber-cyan shadow-lg shadow-cyber-cyan/25 hover:shadow-cyber-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Trophy className="w-4 h-4 text-black" />
              <span>Explore Victories & Awards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Code2 className="w-4 h-4 text-cyber-cyan" />
              <span>Project Showcase</span>
            </Link>
          </div>

          {/* Quick Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Rapid 0-to-1 Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>Multimodal AI & Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-purple" />
              <span>100% Live Demo Proof</span>
            </div>
          </div>
        </div>

        {/* Stats Grid Ticker */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-2xl group-hover:bg-cyber-cyan/15 transition-all duration-500" />
              
              <div className="relative z-10 space-y-1">
                <div className="font-display font-black text-3xl sm:text-4xl text-white flex items-baseline">
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-cyber-cyan text-2xl sm:text-3xl font-extrabold ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
