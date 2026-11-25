"use client";

import React from "react";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { ArrowRight } from "lucide-react";
import { MemberCard } from "@/components/team/MemberCard";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/ui/MotionReveal";

export function TeamPreviewEditorial() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Unified Editorial Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-white/[0.1]">
            <div className="space-y-3 max-w-2xl">
              <span className="eyebrow-badge">Squad Roster</span>
              <h2 className="font-section-title font-bold text-white">
                The Builders Behind{" "}
                <span className="font-hero-serif text-[1.15em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
                  Extokened
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-[#C8D0EC] leading-[1.68] max-w-xl">
                A synchronized permanent unit of four specialists—complementary domain mastery, shared accountability, and zero role confusion.
              </p>
            </div>

            <Link
              href="/team"
              className="btn-secondary py-2 px-4 text-xs sm:text-[13px] shrink-0 group self-start md:self-auto"
            >
              <span>Full team capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </MotionReveal>

        {/* Spacious 2×2 Interactive Spotlight Roster (Zero Cramped Badges or Uneven Alignment) */}
        <MotionStagger
          stagger={0.09}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {teamMembers.map((member, idx) => (
            <MotionItem key={member.slug} className="h-full" distance={22}>
              <MemberCard member={member} index={idx} variant="home" />
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
