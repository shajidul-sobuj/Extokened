"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  MessageSquare, 
  ExternalLink, 
  Sparkles, 
  Share2, 
  Award, 
  Users,
  Radio,
  ShieldCheck
} from "lucide-react";
import { Facebook, Linkedin, Github, Twitter } from "@/components/ui/Icons";
import { HoloCard } from "@/components/ui/HoloCard";
import { playHover, playClick } from "@/lib/sound";

export function SocialHub() {
  const { socials } = siteConfig;

  return (
    <section className="py-20 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-xs text-blue-400">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>OFFICIAL CHANNELS & COMMUNITY MATRIX</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect Across Our Official Presence
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
            Follow our live hackathon journeys, explore open source repositories, read our post-mortems, and join our active war-room discussions across platforms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Facebook Page Highlight Card (Spans 2 columns) */}
          <HoloCard variant="cyan" className="md:col-span-2 p-7 flex flex-col justify-between group border-l-4 border-l-[#1877F2]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2]">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/40">
                  {socials.facebook.badge || "OFFICIAL COMMUNITY"}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#1877F2] transition-colors">
                  {socials.facebook.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {socials.facebook.username}
                </p>
                <p className="font-sans text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.facebook.description}. Real-time photo galleries from podium award ceremonies, live video updates during 48-hour sprints, and regional tech community announcements.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Official Announcements & Media
              </span>
              <a
                href={socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-lg shadow-[#1877F2]/30 transition-all cursor-pointer"
              >
                <span>FOLLOW ON FACEBOOK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </HoloCard>

          {/* LinkedIn Page Highlight Card (Spans 2 columns) */}
          <HoloCard variant="cyan" className="md:col-span-1 lg:col-span-2 p-7 flex flex-col justify-between group border-l-4 border-l-[#0A66C2]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/40">
                  {socials.linkedin.badge || "PROFESSIONAL NETWORK"}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                  {socials.linkedin.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {socials.linkedin.username}
                </p>
                <p className="font-sans text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.linkedin.description}. In-depth engineering post-mortems, architectural breakdowns of hackathon-winning software, and corporate innovation challenge updates.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Corporate & Tech Insights
              </span>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0A66C2] hover:bg-[#084e96] shadow-lg shadow-[#0A66C2]/30 transition-all cursor-pointer"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </HoloCard>

          {/* GitHub Organization Card */}
          <HoloCard variant="default" className="p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Github className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                GitHub Collective
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Open-source hackathon boilerplates, fast micro-libraries, and project repositories.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
              >
                <span>github.com/extokened</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </HoloCard>

          {/* Discord War Room Card */}
          <HoloCard variant="violet" className="p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-[#5865F2] transition-colors">
                Discord War Room
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Hop into our public war room to chat during hackathons, pitch ideas, or ask technical questions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.discord.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs text-[#5865F2] hover:underline"
              >
                <span>JOIN DISCORD HQ</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </HoloCard>

          {/* Devpost Verified Profile */}
          <HoloCard variant="cyan" className="p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#003E54]/30 border border-[#003E54]/60 flex items-center justify-center text-[#38BDF8]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                Devpost Portfolio
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Verified competition entries, official judge scores, and hackathon project write-ups.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.devpost.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
              >
                <span>VERIFIED ENTRIES</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </HoloCard>

          {/* Twitter / X Feed */}
          <HoloCard variant="default" className="p-6 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1DA1F2]/15 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2]">
                <Twitter className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-[#1DA1F2] transition-colors">
                X / Twitter
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Live build-in-public threads, 2 AM coffee tweets, and real-time hackathon countdowns.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs text-[#1DA1F2] hover:underline"
              >
                <span>@extokened</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </HoloCard>

        </div>

      </div>
    </section>
  );
}
