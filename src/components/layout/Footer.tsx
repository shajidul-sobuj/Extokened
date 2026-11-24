"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
  Terminal, 
  Trophy, 
  ArrowUpRight, 
  Heart, 
  ShieldCheck, 
  Zap,
  Activity,
  Radio
} from "lucide-react";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";
import { playHover, playClick } from "@/lib/sound";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030406] border-t border-white/10 pt-16 pb-12 overflow-hidden font-mono">
      {/* Background glow subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Top Industrial Marquee Banner */}
      <div className="border-b border-white/10 pb-8 mb-12 overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee text-xs text-zinc-500 font-bold uppercase tracking-[0.3em] select-none">
          <span>EXTOKENED LABS</span>
          <span className="text-cyan-400">///</span>
          <span>WE HACK. WE BUILD. WE SHIP.</span>
          <span className="text-cyan-400">///</span>
          <span>12+ PODIUM TROPHIES</span>
          <span className="text-cyan-400">///</span>
          <span>AUTONOMOUS MULTIMODAL AI AGENTS</span>
          <span className="text-cyan-400">///</span>
          <span>SUB-48H RAPID PROTOTYPES</span>
          <span className="text-cyan-400">///</span>
          <span>EXTOKENED LABS</span>
          <span className="text-cyan-400">///</span>
          <span>WE HACK. WE BUILD. WE SHIP.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              href="/" 
              onMouseEnter={playHover}
              onClick={playClick}
              className="flex items-center gap-3 group inline-flex"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B0E14] border border-cyan-500/40 flex items-center justify-center font-display font-black text-cyan-400 text-xs">
                &lt;E/&gt;
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                EXTOKENED
              </span>
            </Link>

            <p className="font-sans text-zinc-400 text-sm max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 flex items-center justify-center text-zinc-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Org"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 flex items-center justify-center text-zinc-400 hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white">
              System Coordinates
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/" onMouseEnter={playHover} onClick={playClick} className="hover:text-cyan-400 transition-colors">
                  01 // Overview & Stats
                </Link>
              </li>
              <li>
                <Link href="/hackathons" onMouseEnter={playHover} onClick={playClick} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>02 // Victories Archive</span>
                  <Trophy className="w-3 h-3 text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/projects" onMouseEnter={playHover} onClick={playClick} className="hover:text-cyan-400 transition-colors">
                  03 // Code Arsenal
                </Link>
              </li>
              <li>
                <Link href="/team" onMouseEnter={playHover} onClick={playClick} className="hover:text-cyan-400 transition-colors">
                  04 // Squadron Dossier
                </Link>
              </li>
              <li>
                <Link href="/links" onMouseEnter={playHover} onClick={playClick} className="hover:text-cyan-400 transition-colors">
                  05 // Bento Bio Links
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Presence */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white">
              Official Nodes
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#1877F2] transition-colors">Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#0A66C2] transition-colors">LinkedIn Node</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-white transition-colors">GitHub Collective</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#5865F2] transition-colors">Discord War Room</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Hackathon Readiness */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white">
              Readiness & Telemetry
            </h4>
            <div className="p-3.5 rounded-xl bg-[#090C12] border border-white/10 space-y-2 hud-border">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold">READY FOR NEXT SPRINT</span>
              </div>
              <p className="font-sans text-[11px] text-zinc-400">
                Planning an upcoming competition or looking for top-tier engineers? Dispatches welcome.
              </p>
              <Link
                href="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline pt-1 font-bold"
              >
                <span>INITIATE DISPATCH</span>
                <Zap className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Telemetry Ticker */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>BUILD: 623aee1 // KERNEL: NEXT.JS 15</span>
            <span>•</span>
            <span className="text-emerald-400">PING: 14ms (OPTIMAL)</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {currentYear} EXTOKENED COLLECTIVE. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
