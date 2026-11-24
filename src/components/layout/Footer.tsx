import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
  Terminal, 
  Trophy, 
  ArrowUpRight, 
  Heart, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { Github, Linkedin, Facebook, Twitter } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyber-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/30 border border-cyber-cyan/40 flex items-center justify-center font-display font-black text-cyber-cyan text-sm">
                &lt;E/&gt;
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                EXTOKENED
              </span>
            </Link>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 flex items-center justify-center text-zinc-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Org"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 flex items-center justify-center text-zinc-400 hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-cyber-cyan transition-colors">
                  Overview & Stats
                </Link>
              </li>
              <li>
                <Link href="/hackathons" className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5">
                  <span>Victories Hall of Fame</span>
                  <Trophy className="w-3 h-3 text-cyber-gold" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyber-cyan transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-cyber-cyan transition-colors">
                  Squad & Roles
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-cyber-cyan transition-colors">
                  Social Bento Links
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Presence */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Official Pages
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#0A66C2] transition-colors">LinkedIn Company</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="group-hover:text-[#5865F2] transition-colors">Discord War Room</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Hackathon Readiness */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Status & War-Room
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0E1117] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Ready for Next Hackathon</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Organizing a hackathon or need a powerhouse engineering squad? Reach out directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-cyber-cyan hover:underline font-mono pt-1"
              >
                <span>Initiate Contact</span>
                <Zap className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Extokened Team. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Engineered with passion & caffeine</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
