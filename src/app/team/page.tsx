"use client";

import React from "react";
import { teamMembers } from "@/data/team";
import { MemberCard } from "@/components/team/MemberCard";
import { 
  Users, 
  Flame, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Terminal, 
  CheckCircle2,
  Cpu 
} from "lucide-react";
import { playHover, playClick } from "@/lib/sound";

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400">
          <Users className="w-3.5 h-3.5" />
          <span>SQUADRON DOSSIER // CLEARANCE: ALPHA-01</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
          The Engineers Behind Extokened
        </h1>
        <p className="font-sans text-zinc-400 text-base leading-relaxed">
          We operate as a synchronized unit. Four specialists across AI, full-stack architecture, distributed systems, and creative design united by one philosophy: Build fast, build right, and deliver stage-worthy software under pressure.
        </p>
      </div>

      {/* Team Roster Grid with Classified Operative Dossiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Origin Story Section */}
      <div className="mt-20 rounded-2xl bg-[#090C12] p-8 sm:p-10 border border-white/10 relative overflow-hidden hud-border shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-cyan-400 uppercase tracking-wider font-bold">
            <Terminal className="w-4 h-4" />
            <span>The Origin Story</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            Why We Call Ourselves "Extokened"
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
            In modern generative computing, every word, concept, and thought is broken into <span className="text-cyan-400 font-mono font-bold">tokens</span>. Large Language Models operate by predicting the single *next token*.
          </p>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            As a hackathon team, we refuse to operate linearly or predictably. We believe in <span className="text-white font-semibold">"Extracted Tokens"</span> and <span className="text-white font-semibold">"Beyond the Next Token"</span> — leaping ahead of obvious solutions to build audacious, production-grade applications that surprise judges and redefine hackathon standards.
          </p>
        </div>
      </div>

      {/* The 48-Hour Playbook */}
      <div className="mt-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>OUR BATTLE-TESTED FORMULA</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
            The Extokened 48-Hour Hackathon Playbook
          </h2>
          <p className="font-sans text-zinc-400 text-sm">
            How we consistently deliver championship-level prototypes within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div 
            onMouseEnter={playHover}
            className="rounded-xl p-6 bg-[#090C12] border border-white/10 space-y-3 hud-border hover:border-cyan-400/40 transition-colors"
          >
            <div className="text-xs text-cyan-400 font-bold">HOURS 00 — 04</div>
            <h3 className="font-display font-bold text-lg text-white">Architecture & Schema Lock</h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              We define database schemas, OpenAPI contracts, and user flows before writing a single line of business logic. Zero refactoring later.
            </p>
          </div>

          <div 
            onMouseEnter={playHover}
            className="rounded-xl p-6 bg-[#090C12] border border-white/10 space-y-3 hud-border hover:border-emerald-400/40 transition-colors"
          >
            <div className="text-xs text-emerald-400 font-bold">HOURS 04 — 24</div>
            <h3 className="font-display font-bold text-lg text-white">The Engineering Blitz</h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Parallel execution: ML pipelines fine-tuned, backend APIs containerized, and high-fidelity UI components styled simultaneously.
            </p>
          </div>

          <div 
            onMouseEnter={playHover}
            className="rounded-xl p-6 bg-[#090C12] border border-white/10 space-y-3 hud-border hover:border-purple-400/40 transition-colors"
          >
            <div className="text-xs text-purple-400 font-bold">HOURS 24 — 38</div>
            <h3 className="font-display font-bold text-lg text-white">Integration & Edge Cases</h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Connecting front to back over WebSockets, ingesting telemetry, and stress-testing offline fallbacks. Every button works.
            </p>
          </div>

          <div 
            onMouseEnter={playHover}
            className="rounded-xl p-6 bg-[#090C12] border border-white/10 space-y-3 hud-border hover:border-amber-400/40 transition-colors"
          >
            <div className="text-xs text-amber-400 font-bold">HOURS 38 — 48</div>
            <h3 className="font-display font-bold text-lg text-white">The Live Pitch Polish</h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Rehearsing the 3-minute pitch, crafting interactive judge sandboxes, and eliminating stage latency. 100% live demo confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
