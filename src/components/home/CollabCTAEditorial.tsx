import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export function CollabCTAEditorial() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#2D221A] overflow-hidden">
      {/* Background Amber Atmospheric Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#F0A24C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#F0A24C]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (CTA Content) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill */}
            <div className="pill-amber">
              <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
              <span>Ship Your Idea</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[1.12]">
              Your next breakthrough <br className="hidden sm:inline" />
              starts now.
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#ADADAD] max-w-xl font-sans leading-relaxed">
              Describe it, shape it into working systems and code, ship it to production. Extokened is an independent engineering team turning tough problems into finished products.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-amber-glass"
              >
                <span>Get started now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="btn-secondary"
              >
                <Mail className="w-4 h-4 text-[#7D7D7D]" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>

            <p className="text-xs font-mono text-[#7D7D7D] pt-1">
              Zero fluff • Rapid 24–48h sprint cadence • Production ready
            </p>
          </div>

          {/* Right Column (Tilted 3D Editor Panel Glowing Amber) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] transition-transform duration-500 hover:scale-[1.02]">
              {/* Amber rim glow halo around editor */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#F0A24C]/20 via-[#F0A24C]/10 to-transparent blur-xl opacity-70 pointer-events-none" />
              
              <Image
                src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5bc1d856-0342-40d4-b7ca-c490ac20624a.png"
                alt="Extokened 3D Perspective Editor Panel glowing amber"
                width={912}
                height={700}
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(240,162,76,0.18)] rounded-xl relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
