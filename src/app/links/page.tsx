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
        <div className="w-16 h-16 rounded-xl bg-[#141210] border border-[#2D221A] flex items-center justify-center font-mono font-bold text-[#FFFFFF] text-2xl mx-auto shadow-inner">
          &lt;E/&gt;
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
            Extokened
          </h1>
          <p className="text-xs font-mono text-[#F0A24C] mt-1">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-[#ADADAD] mt-2 max-w-sm mx-auto leading-relaxed font-sans">
            {siteConfig.positioning}
          </p>
        </div>

        {/* Share Button */}
        <div>
          <button
            onClick={copyPageUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#141210] border border-[#2D221A] text-[#ADADAD] hover:text-[#FFFFFF] hover:border-[#F0A24C]/40 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#F0A24C]" />
                <span className="text-[#F0A24C]">Link Copied</span>
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
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#F0A24C]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                Official Digital Home
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                Explore our full portfolio, team, and story
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* Projects Arsenal */}
        <Link
          href="/projects"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#FFFFFF]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                Projects &amp; Case Studies
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                26+ prototypes, architectures, and outcomes
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* Hackathon Victories */}
        <Link
          href="/hackathons"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#F0A24C]">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                Hackathon Archive &amp; Podiums
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                12 podium trophies, 7 grand championships
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>

        {/* GitHub Organization */}
        <a
          href={siteConfig.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#E0A165]">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                GitHub Organization
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                Open-source repositories and codebases
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* LinkedIn Node */}
        <a
          href={siteConfig.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#E0A165]">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                LinkedIn Company Page
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                Official announcements &amp; milestones
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* Facebook Page */}
        <a
          href={siteConfig.socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#E0A165]">
              <Facebook className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                Facebook Official Page
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                Event moments, highlights, and community updates
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </a>

        {/* Contact Dispatch */}
        <Link
          href="/contact"
          className="warm-card p-4 bg-[#141210] border border-[#2D221A] rounded-xl flex items-center justify-between group hover:border-[#F0A24C]/40 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#1D1814] border border-[#2D221A] flex items-center justify-center text-[#F0A24C]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#F0A24C] transition-colors">
                Contact &amp; Hackathon Invites
              </div>
              <div className="text-[11px] text-[#7D7D7D]">
                Inquiries typically answered within 24–48 hours
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-[#FFFFFF] transition-colors" />
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#7D7D7D] pt-6 font-mono">
        © 2026 Extokened. Built with purpose.
      </div>

    </div>
  );
}
