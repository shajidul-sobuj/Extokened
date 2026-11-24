import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Trophy, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="editorial-card p-8 sm:p-12 max-w-lg w-full bg-[#111214] border border-[#292B2E] text-center space-y-6">
        <div className="w-12 h-12 rounded-md bg-[#191B1F] border border-[#292B2E] flex items-center justify-center mx-auto text-[#C6F36A] font-mono font-bold text-lg">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#F3F1EC] tracking-tight">
            Page Not Located
          </h1>
          <p className="text-sm text-[#AAA9A3] leading-relaxed font-sans">
            The resource, case study, or page you requested does not exist or may have been reorganized.
          </p>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-3 rounded-md bg-[#0A0A0B] border border-[#292B2E] hover:border-[#414449] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#F3F1EC]"
          >
            <ArrowLeft className="w-4 h-4 text-[#C6F36A]" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="p-3 rounded-md bg-[#0A0A0B] border border-[#292B2E] hover:border-[#414449] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#F3F1EC]"
          >
            <Layers className="w-4 h-4 text-[#AAA9A3]" />
            <span>Explore Projects</span>
          </Link>
          <Link
            href="/hackathons"
            className="p-3 rounded-md bg-[#0A0A0B] border border-[#292B2E] hover:border-[#414449] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#F3F1EC]"
          >
            <Trophy className="w-4 h-4 text-[#E8B86D]" />
            <span>Hackathon Record</span>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-md bg-[#0A0A0B] border border-[#292B2E] hover:border-[#414449] transition-colors flex items-center gap-2.5 text-xs font-medium text-[#F3F1EC]"
          >
            <Mail className="w-4 h-4 text-[#74C69D]" />
            <span>Contact Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
