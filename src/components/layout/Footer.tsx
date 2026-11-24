import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080E] border-t border-[#253044] pt-16 pb-12 overflow-hidden text-sm">
      {/* Subtle Studio Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-[#7C5CFF]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#253044]/60">
          
          {/* Column 1 & 2: Team Identity & Official Channels */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group inline-flex focus:outline-none"
            >
              <div className="w-7 h-7 rounded-md bg-[#101724] border border-[#253044] flex items-center justify-center font-mono font-bold text-white text-xs">
                &lt;E/&gt;
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Extokened
              </span>
            </Link>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#101724] border border-[#253044] hover:border-zinc-300 hover:text-white flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="GitHub Organization"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#101724] border border-[#253044] hover:border-[#0A66C2] hover:text-[#0A66C2] flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#101724] border border-[#253044] hover:border-[#1877F2] hover:text-[#1877F2] flex items-center justify-center text-zinc-400 transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-zinc-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <span className="hover:text-zinc-200 transition-colors">Generative AI & Agents</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">High-Performance Web</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Distributed Backend & Systems</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Edge Computer Vision</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Direct Inquiries
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Available for hackathons, engineering partnerships, and prototype development sprints.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#22D3C5] hover:text-white font-mono transition-colors"
              >
                <span>{siteConfig.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} Extokened. All rights reserved. Built with purpose.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Contact Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
