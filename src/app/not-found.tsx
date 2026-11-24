import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Trophy, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="warm-card p-8 sm:p-12 max-w-lg w-full bg-[#141210] border border-[#2D221A] rounded-xl text-center space-y-6">
        <div className="w-12 h-12 rounded-lg bg-[#1D1814] border border-[#2D221A] flex items-center justify-center mx-auto text-[#F0A24C] font-mono font-bold text-lg">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
            Page Not Located
          </h1>
          <p className="text-sm text-[#ADADAD] leading-relaxed font-sans">
            The resource, case study, or page you requested does not exist or may have been reorganized.
          </p>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-3 rounded-lg bg-[#0D0D0D] border border-[#2D221A] hover:border-[#F0A24C]/40 transition-colors flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
          >
            <ArrowLeft className="w-4 h-4 text-[#F0A24C]" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="p-3 rounded-lg bg-[#0D0D0D] border border-[#2D221A] hover:border-[#F0A24C]/40 transition-colors flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
          >
            <Layers className="w-4 h-4 text-[#ADADAD]" />
            <span>Explore Projects</span>
          </Link>
          <Link
            href="/hackathons"
            className="p-3 rounded-lg bg-[#0D0D0D] border border-[#2D221A] hover:border-[#F0A24C]/40 transition-colors flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
          >
            <Trophy className="w-4 h-4 text-[#F0A24C]" />
            <span>Hackathon Record</span>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-lg bg-[#0D0D0D] border border-[#2D221A] hover:border-[#F0A24C]/40 transition-colors flex items-center gap-2.5 text-xs font-medium text-[#FFFFFF]"
          >
            <Mail className="w-4 h-4 text-[#F0A24C]" />
            <span>Contact Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
