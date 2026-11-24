"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { hackathons } from "@/data/hackathons";
import { projects } from "@/data/projects";
import { teamMembers } from "@/data/team";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-[#22D3C5] font-semibold">
            Extokened Interactive Console [Environment: Production]
          </div>
          <div className="text-zinc-400">
            Type <span className="text-white font-mono font-medium">help</span> to list commands or click suggested quick tags below.
          </div>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    if (!rawCmd) return;

    let outputNode: React.ReactNode = null;

    switch (rawCmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <div className="text-[#7C5CFF] font-semibold">AVAILABLE COMMANDS:</div>
            <div><span className="text-white font-semibold">hackathons</span> — List hackathon podiums &amp; achievements</div>
            <div><span className="text-white font-semibold">projects</span> — List shipped builds &amp; prototypes</div>
            <div><span className="text-white font-semibold">team</span> — Show core team roster &amp; specialties</div>
            <div><span className="text-white font-semibold">focus</span> — Display key engineering focus areas</div>
            <div><span className="text-white font-semibold">socials</span> — View official channels (GitHub, LinkedIn, Facebook)</div>
            <div><span className="text-white font-semibold">clear</span> — Reset console output</div>
          </div>
        );
        break;

      case "hackathons":
      case "wins":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-amber-300 font-semibold">🏆 HACKATHON RECORD:</div>
            {hackathons.map((h, i) => (
              <div key={i} className="pl-2 border-l border-amber-500/30 text-zinc-300">
                <span className="text-amber-300">[{h.badgeLabel}]</span>{" "}
                <span className="text-white font-semibold">{h.name}</span> ({h.date}) —{" "}
                <span className="text-zinc-400">{h.projectTitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-[#22D3C5] font-semibold">🚀 CURATED BUILDS:</div>
            {projects.slice(0, 4).map((p, i) => (
              <div key={i} className="pl-2 border-l border-[#22D3C5]/30 text-zinc-300">
                <span className="text-white font-semibold">{p.title}</span> ({p.category} • {p.status}) —{" "}
                <span className="text-zinc-400">{p.summary}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "team":
      case "squad":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-emerald-400 font-semibold">👥 CORE ENGINEERING ROSTER:</div>
            {teamMembers.map((m, i) => (
              <div key={i} className="pl-2 border-l border-emerald-500/30 text-zinc-300">
                <span className="text-white font-semibold">{m.name}</span> —{" "}
                <span className="text-emerald-300">{m.role}</span> ({m.badge})
              </div>
            ))}
          </div>
        );
        break;

      case "focus":
      case "stack":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-[#A78BFA] font-semibold">🛠️ DEMONSTRATED FOCUS AREAS:</div>
            {siteConfig.focusAreas.map((cat, i) => (
              <div key={i} className="text-zinc-300">
                <span className="text-white font-semibold">{cat.title}:</span>{" "}
                <span className="text-zinc-400">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "socials":
      case "channels":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-[#22D3C5] font-semibold">🌐 OFFICIAL CHANNELS:</div>
            <div>• GitHub: <span className="text-white">{siteConfig.socials.github.url}</span></div>
            <div>• LinkedIn: <span className="text-white">{siteConfig.socials.linkedin.url}</span></div>
            <div>• Facebook: <span className="text-white">{siteConfig.socials.facebook.url}</span></div>
            <div>• Email: <span className="text-white">{siteConfig.contactEmail}</span></div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-white underline">help</span> to view commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: outputNode }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="studio-card overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#080B12] border-b border-[#253044]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-zinc-400 ml-2">
                extokened-console — bash
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Interactive CLI</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs bg-[#080B12]/95 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-[#22D3C5] font-semibold">visitor@extokened:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Interactive Input Row */}
          <div className="px-4 py-3 bg-[#101724] border-t border-[#253044] flex items-center gap-2">
            <span className="text-xs font-mono text-[#22D3C5]">visitor@extokened:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help', 'hackathons', 'projects', 'team'..."
              className="flex-1 bg-transparent border-none text-xs font-mono text-white placeholder-zinc-500 focus:outline-none"
              aria-label="Terminal command input"
            />
            <button
              onClick={() => executeCommand(input)}
              className="p-1.5 rounded bg-[#151F2E] border border-[#253044] text-zinc-400 hover:text-white transition-colors"
              title="Run Command"
              aria-label="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Pill Shortcuts */}
          <div className="px-4 py-2.5 bg-[#080B12] border-t border-[#253044]/60 flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="text-zinc-500">Quick run:</span>
            {["hackathons", "projects", "team", "focus", "socials", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-[#151F2E] hover:bg-[#1f2d42] border border-[#253044] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
