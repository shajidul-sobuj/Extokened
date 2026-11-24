import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Trophy, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="studio-card p-8 sm:p-12 max-w-lg w-full text-center space-y-6">
        <div className="w-12 h-12 rounded-xl bg-[#151F2E] border border-[#253044] flex items-center justify-center mx-auto text-[#7C5CFF] font-mono font-bold text-lg">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            The page, case study, or resource you are looking for has moved or does not exist.
          </p>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-3 rounded-lg bg-[#080B12] border border-[#253044] hover:border-zinc-400 transition-colors flex items-center gap-2.5 text-xs font-medium text-white"
          >
            <ArrowLeft className="w-4 h-4 text-[#22D3C5]" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="p-3 rounded-lg bg-[#080B12] border border-[#253044] hover:border-zinc-400 transition-colors flex items-center gap-2.5 text-xs font-medium text-white"
          >
            <Layers className="w-4 h-4 text-[#7C5CFF]" />
            <span>Explore Projects</span>
          </Link>
          <Link
            href="/hackathons"
            className="p-3 rounded-lg bg-[#080B12] border border-[#253044] hover:border-zinc-400 transition-colors flex items-center gap-2.5 text-xs font-medium text-white"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Hackathon Record</span>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-lg bg-[#080B12] border border-[#253044] hover:border-zinc-400 transition-colors flex items-center gap-2.5 text-xs font-medium text-white"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
