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
        <div className="w-16 h-16 rounded-xl bg-[#0F1118] border border-[#1E2337] flex items-center justify-center font-mono font-bold text-[#FFFFFF] text-2xl mx-auto shadow-inner">
          &lt;E/&gt;
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
            Extokened
          </h1>
          <p className="text-xs font-mono text-[#8B9BF7] mt-1">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-[#BAC0DC] mt-2 max-w-sm mx-auto leading-relaxed font-sans">
            {siteConfig.positioning}
          </p>
        </div>

        {/* Share Button */}
        <div>
          <button
            onClick={copyPageUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#0F1118] border border-[#1E2337] text-[#BAC0DC] hover:text-[#FFFFFF] hover:border-[#8B9BF7]/40 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#8B9BF7]" />
                <span className="text-[#8B9BF7]">Link Copied</span>
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
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                Official Digital Home
              </div>
              <div className="text-[11px] text-[#727896]">
                Explore our full portfolio, team, and story
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* Projects Arsenal */}
        <Link
          href="/projects"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#FFFFFF]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                Projects &amp; Case Studies
              </div>
              <div className="text-[11px] text-[#727896]">
                26+ prototypes, architectures, and outcomes
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* Hackathon Victories */}
        <Link
          href="/hackathons"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#FFC857]">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                Hackathon Archive &amp; Podiums
              </div>
              <div className="text-[11px] text-[#727896]">
                12 podium trophies, 7 grand championships
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* GitHub Organization */}
        <a
          href={siteConfig.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7]">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                GitHub Organization
              </div>
              <div className="text-[11px] text-[#727896]">
                Open-source repositories and codebases
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* LinkedIn Node */}
        <a
          href={siteConfig.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7]">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                LinkedIn Company Page
              </div>
              <div className="text-[11px] text-[#727896]">
                Official announcements &amp; milestones
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* Facebook Page */}
        <a
          href={siteConfig.socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7]">
              <Facebook className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                Facebook Official Page
              </div>
              <div className="text-[11px] text-[#727896]">
                Event moments, highlights, and community updates
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* Contact Dispatch */}
        <Link
          href="/contact"
          className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#8B9BF7] transition-colors">
                Contact &amp; Hackathon Invites
              </div>
              <div className="text-[11px] text-[#727896]">
                Inquiries typically answered within 24–48 hours
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#727896] pt-6 font-mono">
        © 2026 Extokened. Built with purpose.
      </div>

    </div>
  );
}
