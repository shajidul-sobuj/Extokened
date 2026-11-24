"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
  Trophy, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Layers, 
  Mail, 
  Sparkles,
  Award,
  MessageSquare
} from "lucide-react";
import { Facebook, Linkedin, Github, Twitter } from "@/components/ui/Icons";

export default function LinksPage() {
  const [copied, setCopied] = useState(false);

  const copyPageUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-xl mx-auto px-4 sm:px-6">
      
      {/* Profile Header */}
      <div className="text-center space-y-4">
        {/* Monogram Badge */}
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyber-cyan/30 via-[#0E1117] to-cyber-purple/30 border-2 border-cyber-cyan/50 p-1 flex items-center justify-center font-display font-black text-cyber-cyan text-3xl shadow-xl shadow-cyber-cyan/20 mx-auto">
            &lt;E/&gt;
          </div>
          <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#08090C] shadow-sm animate-pulse" />
        </div>

        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-white">
            EXTOKENED
          </h1>
          <p className="text-xs font-mono text-cyber-cyan mt-1">
            {siteConfig.slogan}
          </p>
          <p className="text-xs text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed">
            Permanent Hackathon Squad & Innovation Collective. 12+ Trophies & Podium Finishes.
          </p>
        </div>

        {/* Copy Link Button */}
        <button
          onClick={copyPageUrl}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Link Copied!" : "Share Profile"}</span>
        </button>
      </div>

      {/* Featured Champion Spotlight Link */}
      <div className="mt-8">
        <Link
          href="/hackathons"
          className="block p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#0E1117] to-amber-500/10 border border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-500/10 transition-all duration-200 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 font-bold block uppercase tracking-wider">
                  Latest Victory
                </span>
                <span className="text-sm font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  Grand Champion — AI Horizon 2025
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Primary Social & Web Channels */}
      <div className="space-y-3 mt-6">
        {/* Facebook Page */}
        <a
          href={siteConfig.socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-[#1877F2] transition-colors block">
                Official Facebook Page
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {siteConfig.socials.facebook.username} • Team photos & updates
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#1877F2] group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* LinkedIn Company */}
        <a
          href={siteConfig.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-[#0A66C2] transition-colors block">
                LinkedIn Company Page
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Professional updates & engineering articles
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#0A66C2] group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* GitHub Organization */}
        <a
          href={siteConfig.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-white/40 hover:bg-white/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors block">
                GitHub Collective
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Open-source boilerplates & hackathon code
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* Discord War Room */}
        <a
          href={siteConfig.socials.discord.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#5865F2]/15 text-[#5865F2] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-[#5865F2] transition-colors block">
                Discord HQ & War Room
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Community & real-time hackathon chats
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#5865F2] group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* Devpost Profile */}
        <a
          href={siteConfig.socials.devpost.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-[#003E54]/60 hover:bg-[#003E54]/20 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#003E54]/30 text-[#38BDF8] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors block">
                Devpost Verified Portfolio
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Verified submissions & judge scores
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* Main Website Home */}
        <Link
          href="/"
          className="flex items-center justify-between p-4 rounded-2xl glass-card hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyber-cyan/15 text-cyber-cyan flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors block">
                Official Portfolio Website
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                extokened.dev • Full interactive experience
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyber-cyan group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Invite Button */}
      <div className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-cyber-cyan to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyber-cyan shadow-lg shadow-cyber-cyan/25 transition-all"
        >
          <Mail className="w-4 h-4" />
          <span>Invite Extokened to Your Hackathon</span>
        </Link>
      </div>
    </div>
  );
}
