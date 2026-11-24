"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#2D221A] pt-16 sm:pt-20 pb-0 text-sm font-sans overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#F0A24C]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Part Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#2D221A]">
          
          {/* Part 1: Brand & Positioning (4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-md bg-[#1D1510] border border-[#F0A24C]/40 flex items-center justify-center font-mono font-bold text-[#F0A24C] text-xs group-hover:border-[#F0A24C] group-hover:shadow-[0_0_12px_rgba(240,162,76,0.3)] transition-all">
                &lt;E/&gt;
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                Extokened
              </span>
            </Link>

            <p className="text-sm text-[#ADADAD] leading-relaxed max-w-sm">
              Extokened keeps every system resilient and fast, so we never rebuild from scratch. An independent squad shipping practical software from hackathons to production.
            </p>

            {/* Social Outline Icons in #E0A165 */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Extokened GitHub"
                className="w-9 h-9 rounded-full bg-[#1D1510] border border-[#2D221A] flex items-center justify-center text-[#E0A165] hover:border-[#F0A24C]/60 hover:text-white hover:shadow-[0_0_12px_rgba(240,162,76,0.25)] transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Extokened LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1D1510] border border-[#2D221A] flex items-center justify-center text-[#E0A165] hover:border-[#F0A24C]/60 hover:text-white hover:shadow-[0_0_12px_rgba(240,162,76,0.25)] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Extokened Facebook"
                className="w-9 h-9 rounded-full bg-[#1D1510] border border-[#2D221A] flex items-center justify-center text-[#E0A165] hover:border-[#F0A24C]/60 hover:text-white hover:shadow-[0_0_12px_rgba(240,162,76,0.25)] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Part 2: Navigation Columns (5 columns split into 3 sub-columns) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1: Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Projects
              </h4>
              <ul className="space-y-2 text-xs text-[#ADADAD]">
                <li>
                  <Link href="/projects/pulseai" className="hover:text-[#F0A24C] transition-colors">
                    PulseAI
                  </Link>
                </li>
                <li>
                  <Link href="/projects/gridsync" className="hover:text-[#F0A24C] transition-colors">
                    GridSync
                  </Link>
                </li>
                <li>
                  <Link href="/projects/khashra" className="hover:text-[#F0A24C] transition-colors">
                    Khashra
                  </Link>
                </li>
                <li>
                  <Link href="/projects/sentinelx" className="hover:text-[#F0A24C] transition-colors">
                    SentinelX
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-[#F0A24C] hover:underline flex items-center gap-1 pt-1">
                    <span>All Projects</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Hackathons */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Hackathons
              </h4>
              <ul className="space-y-2 text-xs text-[#ADADAD]">
                <li>
                  <Link href="/hackathons" className="hover:text-[#F0A24C] transition-colors">
                    National &apos;24
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="hover:text-[#F0A24C] transition-colors">
                    Global AI &apos;24
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="hover:text-[#F0A24C] transition-colors">
                    NASA Apps &apos;23
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="hover:text-[#F0A24C] transition-colors">
                    Devpost Track
                  </Link>
                </li>
                <li>
                  <Link href="/hackathons" className="text-[#F0A24C] hover:underline flex items-center gap-1 pt-1">
                    <span>Honor Roll</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-[#ADADAD]">
                <li>
                  <Link href="/about" className="hover:text-[#F0A24C] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#F0A24C] transition-colors">
                    Core Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F0A24C] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#F0A24C] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/links" className="hover:text-[#F0A24C] transition-colors">
                    Links Hub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Part 3: Newsletter & Direct Inquiries (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Subscribe to Updates
            </h4>
            <p className="text-xs text-[#ADADAD] leading-relaxed">
              Get notified of hackathon results, project breakdowns, and sprint logs.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="team@extokened.dev"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141210] border border-[#2D221A] text-xs text-white placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60 focus:ring-1 focus:ring-[#F0A24C]/60 pr-11"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 btn-metal flex items-center justify-center rounded-md text-white"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-1.5 text-[11px] text-[#74C69D] font-mono pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! We respect your inbox.</span>
                </div>
              ) : (
                <p className="text-[11px] text-[#7D7D7D] font-mono">
                  Verified updates. Unsubscribe anytime.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Part 4: Copyright & Giant Sunken EXTOKENED Wordmark */}
        <div className="relative pt-12 sm:pt-16 pb-0 flex flex-col items-center justify-end overflow-hidden min-h-[160px] sm:min-h-[200px] md:min-h-[220px]">
          
          {/* Centered Copyright Statement */}
          <div className="relative z-20 text-center space-y-1 mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm font-mono tracking-wider text-[#ADADAD]">
              ©{currentYear} <span className="text-white font-medium">Extokened</span>
            </div>
            <div className="text-xs font-mono text-[#7D7D7D]">
              Build real software, fast.
            </div>
          </div>

          {/* Giant Thin Amber-Brown EXTOKENED Wordmark Sinking Off Bottom */}
          <div className="wordmark-sunken relative z-0 w-full translate-y-[24%] sm:translate-y-[28%] font-display font-light uppercase opacity-75 pointer-events-none select-none tracking-widest text-[#5A3418]">
            EXTOKENED
          </div>

        </div>

      </div>
    </footer>
  );
}
