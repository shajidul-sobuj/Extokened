import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export function CollabCTAEditorial() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#08090E] border-b border-[#1E2337] overflow-hidden">
      {/* Background Twilight Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B9BF7]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Pill */}
        <div className="inline-flex justify-center">
          <div className="pill-lavender">
            <Sparkles className="w-3.5 h-3.5 text-[#8B9BF7]" />
            <span>Ship Your Idea</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.15]">
          Your next breakthrough starts now.
        </h2>

        {/* Body */}
        <p className="text-base sm:text-lg text-[#BAC0DC] max-w-2xl mx-auto font-sans leading-relaxed">
          Describe it, shape it into working systems and code, ship it to production. Extokened is an independent engineering team turning tough problems into finished products.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-meadow-dark"
          >
            <span>Get started now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="btn-meadow-secondary"
          >
            <Mail className="w-4 h-4 text-[#727896]" />
            <span>{siteConfig.contactEmail}</span>
          </a>
        </div>

        <p className="text-xs font-mono text-[#727896] pt-2">
          Zero fluff • Rapid 24–48h sprint cadence • Production ready
        </p>
      </div>
    </section>
  );
}
