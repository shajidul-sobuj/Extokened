"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";
import { Trophy, Layers, Mail, Copy, Check, ArrowUpRight, Globe } from "lucide-react";
import { Facebook, Linkedin, Github } from "@/components/ui/Icons";

export default function LinksPage() {
  const [copied, setCopied] = useState(false);

  const copyPageUrl = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const linksList = [
    {
      href: "/",
      title: "Official Digital Home",
      subtitle: "Explore our full portfolio, team, and story",
      icon: Globe,
      iconColor: "text-[#8B9BF7]",
      external: false,
    },
    {
      href: "/projects",
      title: "Projects & Case Studies",
      subtitle: "26+ prototypes, architectures, and verified outcomes",
      icon: Layers,
      iconColor: "text-white",
      external: false,
    },
    {
      href: "/hackathons",
      title: "Hackathon Journey & Wins",
      subtitle: "Events participated, finalist finishes, and winning builds",
      icon: Trophy,
      iconColor: "text-[#F5C451]",
      external: false,
    },
    {
      href: siteConfig.socials.github.url,
      title: "GitHub Organization",
      subtitle: "Open-source repositories and codebases",
      icon: Github,
      iconColor: "text-[#A5B2FF]",
      external: true,
    },
    {
      href: siteConfig.socials.linkedin.url,
      title: "LinkedIn Company Page",
      subtitle: "Official announcements & engineering milestones",
      icon: Linkedin,
      iconColor: "text-[#A5B2FF]",
      external: true,
    },
    {
      href: siteConfig.socials.facebook.url,
      title: "Facebook Official Page",
      subtitle: "Event moments, highlights, and community updates",
      icon: Facebook,
      iconColor: "text-[#A5B2FF]",
      external: true,
    },
    {
      href: "/contact",
      title: "Contact & Hackathon Invites",
      subtitle: "Inquiries typically answered within 24–48 hours",
      icon: Mail,
      iconColor: "text-[#34D399]",
      external: false,
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Profile Header */}
      <MotionReveal className="text-center space-y-4">
        <div className="w-20 h-20 rounded-2xl bg-[#0F1322] border border-[#8B9BF7]/30 p-3 flex items-center justify-center mx-auto">
          <img
            src="/images/extokened-logo-glow.png"
            alt="Extokened Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Extokened
          </h1>
          <p className="text-xs font-mono text-[#8B9BF7]">{siteConfig.tagline}</p>
          <p className="text-sm text-[#CFD7F2] max-w-sm mx-auto leading-relaxed pt-1">
            {siteConfig.positioning}
          </p>
        </div>

        <div className="pt-1">
          <button
            type="button"
            onClick={copyPageUrl}
            className="btn-secondary py-2 px-4 text-xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="text-[#34D399]">Link Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Links Page URL</span>
              </>
            )}
          </button>
        </div>
      </MotionReveal>

      {/* Links List */}
      <MotionStagger stagger={0.05} className="space-y-3">
        {linksList.map((item) => {
          const Icon = item.icon;
          const cardContent = (
            <>
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl bg-[#131726] border border-white/[0.08] flex items-center justify-center shrink-0 ${item.iconColor}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white group-hover:text-[#A5B2FF] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#8F99B8] truncate">{item.subtitle}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7D87A6] group-hover:text-white shrink-0 transition-colors" />
            </>
          );

          return (
            <MotionItem key={item.title}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card surface-card-interactive p-4 flex items-center justify-between gap-3 group"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="surface-card surface-card-interactive p-4 flex items-center justify-between gap-3 group"
                >
                  {cardContent}
                </Link>
              )}
            </MotionItem>
          );
        })}
      </MotionStagger>
    </div>
  );
}
