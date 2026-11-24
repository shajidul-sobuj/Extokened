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
  MessageSquare,
  Radio
} from "lucide-react";
import { Facebook, Linkedin, Github, Twitter } from "@/components/ui/Icons";
import { HoloCard } from "@/components/ui/HoloCard";
import { playClick, playHover, playVictory } from "@/lib/sound";

export default function LinksPage() {
  const [copied, setCopied] = useState(false);

  const copyPageUrl = () => {
    playClick();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-xl mx-auto px-4 sm:px-6 font-mono">
      
      {/* Profile Header */}
      <div className="text-center space-y-4">
        {/* Monogram Badge */}
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-[#0B0E14] to-purple-500/20 border-2 border-cyan-400/50 p-1 flex items-center justify-center font-display font-black text-cyan-400 text-3xl shadow-2xl shadow-cyan-400/20 mx-auto">
            &lt;E/&gt;
          </div>
          <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-400 border-4 border-[#050608] shadow-sm animate-pulse" />
        </div>

        <div>
          <h1 className="font-display text-3xl font-black text-white tracking-wide">
            EXTOKENED
          </h1>
          <p className="text-xs text-cyan-400 mt-1 font-bold">
            {siteConfig.slogan}
          </p>
          <p className="font-sans text-xs text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed">
            Permanent Hackathon Squad & Innovation Collective. 12+ Trophies & Podium Finishes.
          </p>
        </div>

        {/* Copy Link Button */}
        <button
          onClick={copyPageUrl}
          onMouseEnter={playHover}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "PROFILE URL COPIED!" : "SHARE MATRIX LINK"}</span>
        </button>
      </div>

      {/* Featured Champion Spotlight Link */}
      <div className="mt-8">
        <Link
          href="/hackathons"
          onMouseEnter={playHover}
          onClick={() => {
            playClick();
            playVictory();
          }}
          className="block p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#0B0E14] to-amber-500/10 border border-amber-500/40 hover:border-amber-400 shadow-xl shadow-amber-500/10 transition-all duration-200 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">
                  LATEST CHAMPION TITLE
                </span>
                <span className="text-sm font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  Grand Champion @ AI Horizon 2025
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
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center shrink-0">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-[#1877F2] transition-colors block">
                Official Facebook Page
              </span>
              <span className="text-xs text-zinc-400">
                {siteConfig.socials.facebook.username} • Live event stories & photos
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
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-[#0A66C2] transition-colors block">
                LinkedIn Company Page
              </span>
              <span className="text-xs text-zinc-400">
                Engineering deep-dives & corporate challenges
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
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors block">
                GitHub Collective
              </span>
              <span className="text-xs text-zinc-400">
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
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-[#5865F2]/60 hover:bg-[#5865F2]/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#5865F2]/15 text-[#5865F2] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-[#5865F2] transition-colors block">
                Discord HQ & War Room
              </span>
              <span className="text-xs text-zinc-400">
                Community chat & real-time hackathon sprint updates
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
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-[#003E54]/60 hover:bg-[#003E54]/20 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#003E54]/30 text-[#38BDF8] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors block">
                Devpost Verified Portfolio
              </span>
              <span className="text-xs text-zinc-400">
                Verified submissions & judge rubrics
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all" />
        </a>

        {/* Main Website Home */}
        <Link
          href="/"
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center justify-between p-4 rounded-xl bg-[#0B0E14] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-200 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors block">
                Official Portfolio Website
              </span>
              <span className="text-xs text-zinc-400">
                extokened.dev • Full interactive experience
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
        </Link>
      </div>

      {/* Invite Button */}
      <div className="mt-8 text-center">
        <Link
          href="/contact"
          onMouseEnter={playHover}
          onClick={playClick}
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyan-400 shadow-xl shadow-cyan-400/25 transition-all"
        >
          <Mail className="w-4 h-4" />
          <span>INVITE EXTOKENED TO YOUR HACKATHON</span>
        </Link>
      </div>
    </div>
  );
}
