"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";
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
      <MotionReveal className="text-center space-y-4">
        <div className="w-16 h-16 rounded-xl bg-[#0F1118] border border-[#1E2337] flex items-center justify-center font-mono font-bold text-[#FFFFFF] text-2xl mx-auto shadow-[0_0_24px_rgba(139,155,247,0.2)]">
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
      </MotionReveal>

      {/* Official Links List */}
      <MotionStagger stagger={0.06} className="space-y-3">
        {/* Main Website Home */}
        <MotionItem>
          <Link
            href="/"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </MotionItem>

        {/* Projects Arsenal */}
        <MotionItem>
          <Link
            href="/projects"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#FFFFFF] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </MotionItem>

        {/* Hackathon Victories */}
        <MotionItem>
          <Link
            href="/hackathons"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#FFC857] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </MotionItem>

        {/* GitHub Organization */}
        <MotionItem>
          <a
            href={siteConfig.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </MotionItem>

        {/* LinkedIn Node */}
        <MotionItem>
          <a
            href={siteConfig.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </MotionItem>

        {/* Facebook Page */}
        <MotionItem>
          <a
            href={siteConfig.socials.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </MotionItem>

        {/* Contact Dispatch */}
        <MotionItem>
          <Link
            href="/contact"
            className="editorial-card meadow-card p-4 bg-[#0F1118] border border-[#1E2337] rounded-xl flex items-center justify-between group hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#151824] border border-[#1E2337] flex items-center justify-center text-[#8B9BF7] group-hover:scale-105 transition-transform">
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
            <ArrowUpRight className="w-4 h-4 text-[#727896] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </MotionItem>
      </MotionStagger>

      {/* Footer */}
      <MotionReveal delay={0.2} className="text-center text-xs text-[#727896] pt-6 font-mono">
        © 2026 Extokened. Built with purpose.
      </MotionReveal>

    </div>
  );
}
