import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Trophy, Mail } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <MotionReveal className="max-w-lg w-full">
        <div className="surface-card p-8 sm:p-10 w-full text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#131726] border border-[#8B9BF7]/30 flex items-center justify-center mx-auto text-[#A5B2FF] font-mono font-bold text-lg">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Page Not Located
            </h1>
            <p className="text-sm sm:text-base text-[#CFD7F2] leading-relaxed">
              The resource, case study, or page you requested does not exist or may have been moved.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              href="/"
              className="p-3.5 rounded-xl bg-[#0B0E17] border border-white/[0.08] hover:border-[#8B9BF7]/45 transition-colors flex items-center gap-2.5 text-sm font-medium text-white"
            >
              <ArrowLeft className="w-4 h-4 text-[#8B9BF7]" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/projects"
              className="p-3.5 rounded-xl bg-[#0B0E17] border border-white/[0.08] hover:border-[#8B9BF7]/45 transition-colors flex items-center gap-2.5 text-sm font-medium text-white"
            >
              <Layers className="w-4 h-4 text-[#B4BDD8]" />
              <span>Explore Projects</span>
            </Link>
            <Link
              href="/hackathons"
              className="p-3.5 rounded-xl bg-[#0B0E17] border border-white/[0.08] hover:border-[#8B9BF7]/45 transition-colors flex items-center gap-2.5 text-sm font-medium text-white"
            >
              <Trophy className="w-4 h-4 text-[#F5C451]" />
              <span>Hackathon Record</span>
            </Link>
            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-[#0B0E17] border border-white/[0.08] hover:border-[#8B9BF7]/45 transition-colors flex items-center gap-2.5 text-sm font-medium text-white"
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
