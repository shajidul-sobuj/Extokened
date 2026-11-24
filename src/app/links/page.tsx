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
        <div className="w-16 h-16 rounded-lg bg-[#111214] border border-[#292B2E] flex items-center justify-center font-mono font-bold text-[#F3F1EC] text-2xl mx-auto">
          &lt;E/&gt;
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#F3F1EC] tracking-tight">
            Extokened
          </h1>
          <p className="text-xs font-mono text-[#C6F36A] mt-1">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-[#AAA9A3] mt-2 max-w-sm mx-auto leading-relaxed font-sans">
            {siteConfig.positioning}
          </p>
        </div>

        {/* Share Button */}
        <div>
          <button
            onClick={copyPageUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#111214] border border-[#292B2E] text-[#AAA9A3] hover:text-[#F3F1EC] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#74C69D]" />
                <span className="text-[#74C69D]">Link Copied</span>
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
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#C6F36A]">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
                Official Digital Home
              </div>
              <div className="text-[11px] text-[#777873]">
                Explore our full portfolio, team, and story
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </Link>

        {/* Projects Arsenal */}
        <Link
          href="/projects"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#F3F1EC]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
                Projects &amp; Case Studies
              </div>
              <div className="text-[11px] text-[#777873]">
                26+ prototypes, architectures, and outcomes
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </Link>

        {/* Hackathon Victories */}
        <Link
          href="/hackathons"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#E8B86D]">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#E8B86D] transition-colors">
                Hackathon Archive &amp; Podiums
              </div>
              <div className="text-[11px] text-[#777873]">
                12 podium trophies, 7 grand championships
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </Link>

        {/* GitHub Organization */}
        <a
          href={siteConfig.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-white">
              <Github className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-white transition-colors">
                GitHub Organization
              </div>
              <div className="text-[11px] text-[#777873]">
                Open-source repositories and codebases
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </a>

        {/* LinkedIn Node */}
        <a
          href={siteConfig.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#74C69D]">
              <Linkedin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#74C69D] transition-colors">
                LinkedIn Company Page
              </div>
              <div className="text-[11px] text-[#777873]">
                Official announcements &amp; milestones
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </a>

        {/* Facebook Page */}
        <a
          href={siteConfig.socials.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#414449] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#85B6FF]">
              <Facebook className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#85B6FF] transition-colors">
                Facebook Official Page
              </div>
              <div className="text-[11px] text-[#777873]">
                Event moments, highlights, and community updates
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </a>

        {/* Contact Dispatch */}
        <Link
          href="/contact"
          className="editorial-card p-4 bg-[#111214] border border-[#292B2E] flex items-center justify-between group hover:border-[#C6F36A] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center text-[#C6F36A]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F3F1EC] group-hover:text-[#C6F36A] transition-colors">
                Contact &amp; Hackathon Invites
              </div>
              <div className="text-[11px] text-[#777873]">
                Inquiries typically answered within 24–48 hours
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#777873] group-hover:text-[#F3F1EC] transition-colors" />
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-[#777873] pt-6 font-mono">
        © 2026 Extokened. Built with purpose.
      </div>

    </div>
  );
}
