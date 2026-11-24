"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
  Trophy, 
  Layers, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Share2, 
  Sparkles,
  Globe
} from "lucide-react";
import { Facebook, Linkedin, Github } from "@/components/ui/Icons";

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
    <div className="pt-32 pb-24 max-w-xl mx-auto px-4 sm:px-6 space-y-8">
      
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-2xl bg-[#101724] border border-[#253044] p-1 flex items-center justify-center font-mono font-bold text-white text-2xl shadow-xl mx-auto">
          &lt;E/&gt;
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Extokened
          </h1>
          <p className="text-xs font-mono text-[#22D3C5] mt-1">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed font-sans">
            {siteConfig.positioning}
          </p>
        </div>

        {/* Share Button */}
        <div>
          <button
            onClick={copyPageUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#101724] border border-[#253044] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Share Profile Links</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Official Links List */}
      <div className="space-y-3">
        {/* Main Website Home */}
        <Link
          href="/"
          className="studio-card p-4 flex items-center justify-between group hover:border-[#7C5CFF]/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-[#22D3C5]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-[#22D3C5] transition-colors">
                Official Digital Home
              </div>
              <div className="text-[11px] text-zinc-400">
                Explore our full portfolio, team, and story
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </Link>

        {/* Projects Arsenal */}
        <Link
          href="/projects"
          className="studio-card p-4 flex items-center justify-between group hover:border-[#7C5CFF]/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-[#7C5CFF]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-[#7C5CFF] transition-colors">
                Projects &amp; Case Studies
              </div>
              <div className="text-[11px] text-zinc-400">
                26+ prototypes, architectures, and outcomes
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </Link>

        {/* Hackathon Victories */}
        <Link
          href="/hackathons"
          className="studio-card p-4 flex items-center justify-between group hover:border-amber-500/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                Hackathon Hall of Fame
              </div>
              <div className="text-[11px] text-zinc-400">
                12 podium trophies, 7 grand championships
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </Link>

        {/* GitHub Organization */}
        <a
          href={siteConfig.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="studio-card p-4 flex items-center justify-between group hover:border-zinc-400 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-white">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                GitHub Organization
              </div>
              <div className="text-[11px] text-zinc-400">
                Open-source repositories and codebases
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </a>

        {/* LinkedIn Node */}
        <a
          href={siteConfig.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="studio-card p-4 flex items-center justify-between group hover:border-[#0A66C2]/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-[#0A66C2] transition-colors">
                LinkedIn Company Page
              </div>
              <div className="text-[11px] text-zinc-400">
                Official announcements &amp; engineering updates
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </a>

        {/* Facebook Page */}
        <a
          href={siteConfig.socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="studio-card p-4 flex items-center justify-between group hover:border-[#1877F2]/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2]">
              <Facebook className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-[#1877F2] transition-colors">
                Facebook Official Page
              </div>
              <div className="text-[11px] text-zinc-400">
                Event moments, highlights, and community updates
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </a>

        {/* Contact Dispatch */}
        <Link
          href="/contact"
          className="studio-card p-4 flex items-center justify-between group hover:border-emerald-500/60 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                Contact &amp; Hackathon Invites
              </div>
              <div className="text-[11px] text-zinc-400">
                Inquiries typically answered within 24–48 hours
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-zinc-500 pt-6">
        © 2026 Extokened. Built with purpose.
      </div>

    </div>
  );
}
