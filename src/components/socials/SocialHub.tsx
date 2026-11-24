"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  ArrowUpRight, 
  Share2, 
  Globe, 
  MessageSquare
} from "lucide-react";
import { Facebook, Linkedin, Github } from "@/components/ui/Icons";

export function SocialHub() {
  const { socials } = siteConfig;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-xs font-mono text-[#A78BFA]">
            <Share2 className="w-3.5 h-3.5" />
            <span>Community &amp; Official Nodes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect With Extokened
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Follow our live competition milestones, explore open-source codebases, and stay in touch with our team across our official public channels.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* GitHub Card */}
          <div className="studio-card p-6 flex flex-col justify-between group hover:border-zinc-400/50 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151F2E] text-zinc-300 border border-[#253044]">
                  Code &amp; Repos
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#22D3C5] transition-colors">
                  GitHub Organization
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  github.com/{socials.github.handle}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.github.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#253044]/60">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#22D3C5] transition-colors"
              >
                <span>Visit Organization</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="studio-card p-6 flex flex-col justify-between group hover:border-[#0A66C2]/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20">
                  Professional Network
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                  LinkedIn Page
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {socials.linkedin.handle}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.linkedin.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#253044]/60">
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#0A66C2] transition-colors"
              >
                <span>Follow on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="studio-card p-6 flex flex-col justify-between group hover:border-[#1877F2]/60 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2]">
                  <Facebook className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20">
                  Official Page
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#1877F2] transition-colors">
                  Facebook Page
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">
                  {socials.facebook.handle}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.facebook.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#253044]/60">
              <a
                href={socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#1877F2] transition-colors"
              >
                <span>Connect on Facebook</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
