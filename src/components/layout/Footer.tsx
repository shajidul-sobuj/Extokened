import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0B] border-t border-[#292B2E] pt-20 pb-12 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Wordmark + Short Positioning Statement */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-14 border-b border-[#292B2E]">
          <div className="space-y-3 max-w-md">
            <Link 
              href="/" 
              className="flex items-center gap-3 group inline-flex focus:outline-none"
            >
              <div className="w-8 h-8 rounded-md bg-[#111214] border border-[#292B2E] flex items-center justify-center font-mono font-bold text-[#F3F1EC] text-xs">
                &lt;E/&gt;
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-[#F3F1EC]">
                Extokened
              </span>
            </Link>
            <p className="text-sm text-[#AAA9A3] leading-relaxed">
              {siteConfig.positioning}
            </p>
          </div>

          {/* Direct Contact Pill */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#777873] uppercase tracking-wider block">
              Direct Contact
            </span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-sm font-mono text-[#F3F1EC] hover:text-[#C6F36A] transition-colors"
            >
              <span>{siteConfig.contactEmail}</span>
              <ArrowUpRight className="w-4 h-4 text-[#777873]" />
            </a>
            <p className="text-xs text-[#777873] font-mono">
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Middle: Navigation Columns & Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#292B2E]">
          {/* Column 1: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F1EC]">
              Navigation
            </h4>
            <ul className="space-y-2 text-[#AAA9A3]">
              <li>
                <Link href="/" className="hover:text-[#F3F1EC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F3F1EC] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F3F1EC] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/hackathons" className="hover:text-[#F3F1EC] transition-colors">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#F3F1EC] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3F1EC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Focus Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F1EC]">
              Demonstrated Areas
            </h4>
            <ul className="space-y-2 text-[#AAA9A3]">
              <li>Generative AI &amp; Agents</li>
              <li>Modern Web Architectures</li>
              <li>Distributed Backend &amp; Data</li>
              <li>Applied Computer Vision</li>
            </ul>
          </div>

          {/* Column 3: Official Social Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F1EC]">
              Official Channels
            </h4>
            <ul className="space-y-2 text-[#AAA9A3]">
              <li>
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3F1EC] transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#777873]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3F1EC] transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#777873]" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3F1EC] transition-colors inline-flex items-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3 text-[#777873]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F1EC]">
              Integrity
            </h4>
            <p className="text-xs text-[#AAA9A3] leading-relaxed">
              Every hackathon result, project outcome, and telemetry metric published on this site is verified with public repository and competition evidence.
            </p>
          </div>
        </div>

        {/* Bottom: Legal / Privacy / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777873]">
          <div>
            © {currentYear} Extokened. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#AAA9A3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/links" className="hover:text-[#AAA9A3] transition-colors">
              Profile Links
            </Link>
            <Link href="/contact" className="hover:text-[#AAA9A3] transition-colors">
              Contact Team
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
