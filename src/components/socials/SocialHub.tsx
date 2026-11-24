"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  MessageSquare, 
  ExternalLink, 
  Sparkles, 
  Share2, 
  Award, 
  Users 
} from "lucide-react";
import { Facebook, Linkedin, Github, Twitter } from "@/components/ui/Icons";

export function SocialHub() {
  const { socials } = siteConfig;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Share2 className="w-3.5 h-3.5" />
            <span>CONNECT WITH EXTOKENED</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Official Pages & Community
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Follow our live hackathon journeys, explore open source repositories, read our post-mortems, and join our active discussions across platforms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Facebook Page Highlight Card (Spans 2 columns on medium/large) */}
          <div className="md:col-span-2 glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between group border-l-4 border-l-[#1877F2]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1877F2]/10 rounded-full blur-3xl group-hover:bg-[#1877F2]/20 transition-all duration-300" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2]">
                  <Facebook className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/40">
                  {socials.facebook.badge || "Official Community"}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#1877F2] transition-colors">
                  {socials.facebook.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {socials.facebook.username}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.facebook.description}. Stay updated with real-time photo galleries from podium ceremonies, live video updates during hackathons, and regional tech community meetups.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Official Announcements & Media
              </span>
              <a
                href={socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-lg shadow-[#1877F2]/25 transition-all duration-200"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Page Highlight Card (Spans 2 columns on medium/large) */}
          <div className="md:col-span-1 lg:col-span-2 glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between group border-l-4 border-l-[#0A66C2]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#0A66C2]/10 rounded-full blur-3xl group-hover:bg-[#0A66C2]/20 transition-all duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/40">
                  {socials.linkedin.badge || "Professional"}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                  {socials.linkedin.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {socials.linkedin.username}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                  {socials.linkedin.description}. Read our engineering deep-dives, architectural breakdowns of hackathon wins, and reach out for corporate innovation challenges.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Corporate & Tech Insights
              </span>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#084e96] shadow-lg shadow-[#0A66C2]/25 transition-all duration-200"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Organization Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Github className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                GitHub Collective
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Open-source hackathon boilerplates, fast micro-libraries, and project repositories.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:underline"
              >
                <span>github.com/extokened</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Discord War Room Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-[#5865F2] transition-colors">
                Discord War Room
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hop in our public war room to chat during hackathons, pitch ideas, or ask technical questions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.discord.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5865F2] hover:underline"
              >
                <span>Join Discord HQ</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Devpost Verified Profile */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#003E54]/30 border border-[#003E54]/60 flex items-center justify-center text-[#38BDF8]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
                Devpost Portfolio
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verified competition entries, official judge scores, and hackathon project write-ups.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.devpost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:underline"
              >
                <span>Verified Submissions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Twitter / X Feed */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1DA1F2]/15 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2]">
                <Twitter className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-[#1DA1F2] transition-colors">
                X / Twitter
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Live build-in-public threads, 2 AM coffee tweets, and real-time hackathon countdowns.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1DA1F2] hover:underline"
              >
                <span>@extokened</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
