import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Trophy, Mail } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <MotionReveal className="max-w-lg w-full">
        <div className="editorial-card meadow-card p-8 sm:p-12 w-full bg-[#0F1118] border border-[#1E2337] rounded-xl text-center space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="w-12 h-12 rounded-lg bg-[#151824] border border-[#1E2337] flex items-center justify-center mx-auto text-[#8B9BF7] font-mono font-bold text-lg shadow-[0_0_16px_rgba(139,155,247,0.2)]">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
              Page Not Located
            </h1>
            <p className="text-sm text-[#BAC0DC] leading-relaxed font-sans">
              The resource, case study, or page you requested does not exist or may have been reorganized.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              href="/"
              className="p-3 rounded-lg bg-[#08090E] border border-[#1E2337] hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
            >
              <ArrowLeft className="w-4 h-4 text-[#8B9BF7]" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/projects"
              className="p-3 rounded-lg bg-[#08090E] border border-[#1E2337] hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
            >
              <Layers className="w-4 h-4 text-[#BAC0DC]" />
              <span>Explore Projects</span>
            </Link>
            <Link
              href="/hackathons"
              className="p-3 rounded-lg bg-[#08090E] border border-[#1E2337] hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
            >
              <Trophy className="w-4 h-4 text-[#FFC857]" />
              <span>Hackathon Record</span>
            </Link>
            <Link
              href="/contact"
              className="p-3 rounded-lg bg-[#08090E] border border-[#1E2337] hover:border-[#8B9BF7]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
            >
              <Mail className="w-4 h-4 text-[#8B9BF7]" />
              <span>Contact Team</span>
            </Link>
          </div>
        </div>
      </MotionReveal>
    </div>
  );
}
