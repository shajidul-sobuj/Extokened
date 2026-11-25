"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Mail } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function CollabCTAEditorial() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal duration={0.55} distance={18}>
          <div className="surface-card relative overflow-hidden px-6 py-14 sm:px-12 sm:py-16 lg:py-20 text-center">
            {/* Restrained Top Ambient Sheen */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] max-w-[120%] h-64 rounded-full blur-[90px] bg-[#8B9BF7]/15 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B9BF7]/45 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="eyebrow-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span>Collaborate With Extokened</span>
              </span>

              <h2 className="font-section-title font-bold text-white">
                Have a tough problem or{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  competition
                </span>{" "}
                ahead?
              </h2>

              <p className="text-sm sm:text-base text-[#CFD7F2] leading-[1.72]">
                We partner with hackathon organizers, sponsors, and technical teams to turn complex ideas into working, verifiable software on tight timelines.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <Link href="/contact" className="btn-primary py-3 px-6 text-sm group">
                  <span>Start a conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="btn-secondary py-3 px-5 text-sm"
                >
                  <Mail className="w-4 h-4 text-[#8B9BF7]" />
                  <span>{siteConfig.contactEmail}</span>
                </a>
              </div>

              <p className="text-xs font-mono text-[#7D87A6] pt-1">
                Direct team response within 24–48 hours • Zero intermediary fluff
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
