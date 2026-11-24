"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Trophy, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Zap, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal as TerminalIcon,
  Activity,
  Flame
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { GlitchText } from "@/components/ui/GlitchText";
import { playHover, playClick, playVictory, playGlitch } from "@/lib/sound";
import confetti from "canvas-confetti";

export function HeroSection() {
  // 48H Sprint Simulator State
  const [simState, setSimState] = useState<"idle" | "running" | "completed">("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [simProgress, setSimProgress] = useState(0);
  const [simLog, setSimLog] = useState("Awaiting command. Ready to simulate 48-hour hackathon assault.");

  const sprintPhases = [
    { hour: "04H", title: "Architecture & Schema Lock", detail: "OpenAPI schema, TimescaleDB, and prompt contracts frozen." },
    { hour: "24H", title: "Multimodal AI Blitz", detail: "Fine-tuning Gemini 2.0 Flash pipeline, containerizing FastAPI." },
    { hour: "36H", title: "Concurrency Integration", detail: "WebSockets telemetry streaming, offline IndexedDB cache synced." },
    { hour: "48H", title: "Stage Pitch & Champion Trophy!", detail: "Live judge demonstration flawless. Grand Champion awarded!" },
  ];

  const runSimulation = () => {
    if (simState === "running") return;
    setSimState("running");
    playClick();
    setCurrentStep(0);
    setSimProgress(10);
    setSimLog("T-00:00: Hackathon problem prompt announced. Initializing Extokened war-room...");

    // Step 1
    setTimeout(() => {
      setCurrentStep(1);
      setSimProgress(35);
      playGlitch();
      setSimLog("T-04:00: Database schemas locked. Zero-latency WebSocket pipeline mapped.");
    }, 1800);

    // Step 2
    setTimeout(() => {
      setCurrentStep(2);
      setSimProgress(65);
      playGlitch();
      setSimLog("T-24:00: Deep night sprint. Gemini agent swarm inference verified at 120ms latency.");
    }, 3800);

    // Step 3
    setTimeout(() => {
      setCurrentStep(3);
      setSimProgress(88);
      playGlitch();
      setSimLog("T-36:00: Edge UI rendered. Live sensor telemetry feeding charts. Zero mockups.");
    }, 5600);

    // Step 4 - Victory!
    setTimeout(() => {
      setCurrentStep(4);
      setSimProgress(100);
      setSimState("completed");
      setSimLog("T-48:00: JUDGES VERDICT ANNOUNCED: 1ST PLACE GRAND CHAMPION! 🏆");
      playVictory();
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00F5FF", "#FFB800", "#9945FF", "#00FF66"],
      });
    }, 7400);
  };

  const resetSimulation = () => {
    playClick();
    setSimState("idle");
    setCurrentStep(0);
    setSimProgress(0);
    setSimLog("Simulator reset. Ready for next sprint run.");
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Telemetry Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-400 border-b border-white/10 pb-3 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">[COORD: 23.8103° N, 90.4125° E]</span>
            <span className="text-zinc-600">//</span>
            <span>SQUAD_REF: EXT-ALPHA</span>
            <span className="text-zinc-600">//</span>
            <span className="text-emerald-400">OPERATIONAL</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>RADAR: 0 ACTIVE CHALLENGES</span>
            </span>
          </div>
        </div>

        {/* Asymmetric Command Deck Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Wing: Kinetic Typography & Manifesto (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Squad Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-400 font-bold">EXTOKENED LABS</span>
              <span className="text-zinc-500">//</span>
              <span>HACKATHON TASK FORCE</span>
            </div>

            {/* Kinetic Decrypted Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
                WE HACK. WE BUILD. <br />
                <span className="cyber-gradient-text">
                  <GlitchText text="WE SHIP BEYOND LIMITS." triggerOnHover autoDecrypt />
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed pt-2">
                We are <span className="text-white font-semibold">Extokened</span> — a permanent hackathon squad engineered for velocity. We turn ambitious multimodal AI, distributed systems, and product ideas into championship-winning production software in 24–48 hours.
              </p>
            </div>

            {/* Tactical Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/hackathons"
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  playVictory();
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-mono font-bold text-black bg-gradient-to-r from-cyan-400 to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyan-400 shadow-xl shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Trophy className="w-4 h-4 text-black" />
                <span>EXPLORE 12+ VICTORIES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-mono font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>INSPECT ARSENAL & BUILDS</span>
              </Link>
            </div>

            {/* Micro badges */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Fake Mockups</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Multimodal AI Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Live Working Demos</span>
              </div>
            </div>
          </div>

          {/* Right Wing: Interactive 48-Hour Sprint Simulator Widget (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#090C12] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl shadow-cyan-500/10 overflow-hidden hud-border">
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] text-zinc-600">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-zinc-600">+</div>

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white">48H_SPRINT_SIMULATOR</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                  simState === "completed" 
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : simState === "running"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse"
                    : "bg-white/5 text-zinc-400"
                }`}>
                  {simState === "completed" ? "🏆 VICTORY" : simState === "running" ? "SPRINTING..." : "STANDBY"}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="py-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Sprint Elapsed Time</span>
                  <span className="text-cyan-400 font-bold">{simProgress}% ({(simProgress * 0.48).toFixed(1)}h / 48h)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 transition-all duration-500"
                    style={{ width: `${simProgress}%` }}
                  />
                </div>
              </div>

              {/* Sprint Phases Step Breakdown */}
              <div className="space-y-2 py-2">
                {sprintPhases.map((phase, idx) => {
                  const isDone = currentStep > idx;
                  const isCurrent = currentStep === idx && simState === "running";
                  return (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-lg border text-xs flex items-start gap-3 transition-colors ${
                        isDone
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : isCurrent
                          ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 animate-pulse"
                          : "bg-white/5 border-white/5 text-zinc-500"
                      }`}
                    >
                      <span className="font-bold text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 shrink-0">
                        {phase.hour}
                      </span>
                      <div className="space-y-0.5">
                        <div className="font-bold text-white text-[11px]">{phase.title}</div>
                        <div className="text-[10px] opacity-75">{phase.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Terminal Log Stream */}
              <div className="mt-3 p-3 rounded-lg bg-black/80 border border-white/10 text-[11px] font-mono text-zinc-300 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>WAR_ROOM_TELEMETRY_LOG</span>
                </div>
                <div className="text-cyan-300 truncate">&gt; {simLog}</div>
              </div>

              {/* Simulator Action Trigger */}
              <div className="pt-4 flex items-center gap-3">
                {simState !== "completed" ? (
                  <button
                    onClick={runSimulation}
                    disabled={simState === "running"}
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>{simState === "running" ? "EXECUTING SPRINT..." : "SIMULATE 48H SPRINT"}</span>
                  </button>
                ) : (
                  <button
                    onClick={resetSimulation}
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RESET SIMULATION</span>
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Combat Gauges Ticker */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={playHover}
              className="relative p-5 rounded-xl bg-[#090C12] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group hud-border"
            >
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-white mt-1 group-hover:text-cyan-400 transition-colors flex items-baseline">
                <span>{stat.value}</span>
                {stat.suffix && <span className="text-xl sm:text-2xl text-cyan-400 ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
