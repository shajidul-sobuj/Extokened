"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";
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
          <div className="text-cyber-cyan font-bold">
            ⚡ EXTOKENED PROTOCOL v2.4 // HACKATHON COMBAT OS
          </div>
          <div className="text-zinc-400">
            Type <span className="text-white font-semibold">help</span> to view available system commands or click suggested pills below.
          </div>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
            <div className="text-cyber-cyan">AVAILABLE COMMANDS:</div>
            <div><span className="text-white font-semibold">wins</span> — Display 12+ hackathon trophies & victories</div>
            <div><span className="text-white font-semibold">projects</span> — List flagship prototypes & live links</div>
            <div><span className="text-white font-semibold">squad</span> — Show Extokened core team roster & superpowers</div>
            <div><span className="text-white font-semibold">stack</span> — Print battle-tested tech arsenal</div>
            <div><span className="text-white font-semibold">socials</span> — Facebook, LinkedIn, GitHub & Discord links</div>
            <div><span className="text-white font-semibold">whoami</span> — Identity scanner</div>
            <div><span className="text-white font-semibold">clear</span> — Clear terminal output</div>
          </div>
        );
        break;

      case "wins":
      case "trophies":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-amber-400 font-bold">🏆 HALL OF FAME VICTORIES:</div>
            {hackathons.map((h, i) => (
              <div key={i} className="pl-2 border-l border-amber-500/30 text-zinc-300">
                <span className="text-amber-300">[{h.badgeLabel}]</span>{" "}
                <span className="text-white font-bold">{h.name}</span> ({h.date}) —{" "}
                <span className="text-zinc-400">{h.projectTitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-cyber-cyan font-bold">🚀 FLAGSHIP PROTOTYPES:</div>
            {projects.slice(0, 4).map((p, i) => (
              <div key={i} className="pl-2 border-l border-cyber-cyan/30 text-zinc-300">
                <span className="text-white font-bold">{p.title}</span> ({p.category}) —{" "}
                <span className="text-zinc-400">{p.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "squad":
      case "team":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-emerald-400 font-bold">⚡ EXTOKENED CORE OPERATIVES:</div>
            {teamMembers.map((m, i) => (
              <div key={i} className="pl-2 border-l border-emerald-500/30 text-zinc-300">
                <span className="text-white font-bold">{m.name}</span> —{" "}
                <span className="text-emerald-300">{m.role}</span> ({m.badge})
              </div>
            ))}
          </div>
        );
        break;

      case "stack":
      case "arsenal":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-cyber-purple font-bold">🛠️ WEAPONS OF CHOICE:</div>
            {siteConfig.arsenal.map((cat, i) => (
              <div key={i} className="text-zinc-300">
                <span className="text-white font-semibold">{cat.category}:</span>{" "}
                <span className="text-zinc-400">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "socials":
      case "links":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-blue-400 font-bold">🌐 SOCIAL MATRIX:</div>
            <div>• Facebook Page: <span className="text-white">{siteConfig.socials.facebook.url}</span></div>
            <div>• LinkedIn: <span className="text-white">{siteConfig.socials.linkedin.url}</span></div>
            <div>• GitHub: <span className="text-white">{siteConfig.socials.github.url}</span></div>
            <div>• Discord: <span className="text-white">{siteConfig.socials.discord.url}</span></div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-xs font-mono text-zinc-300">
            Detected: Guest Hacker // Welcome to Extokened HQ. Have a hackathon you want us to enter?
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            Command not recognized: "{rawCmd}". Type <span className="text-white">help</span> for command list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput("");
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Terminal Frame */}
        <div className="rounded-2xl bg-[#080A0F] border border-white/10 shadow-2xl overflow-hidden font-mono">
          {/* Top Title Bar */}
          <div className="bg-[#0E1117] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-zinc-400 font-mono ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>extokened-cli ~ guest@war-room</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded hover:bg-white/5 transition-colors"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className={`p-4 sm:p-5 overflow-y-auto space-y-4 cursor-text transition-all duration-300 ${
              isExpanded ? "max-h-[480px]" : "max-h-[280px]"
            }`}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="text-cyber-cyan">&gt;</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion Pills */}
          <div className="px-4 py-2 bg-[#0A0D12] border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Quick:</span>
            {["wins", "projects", "squad", "stack", "socials"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded text-[11px] bg-white/5 hover:bg-cyber-cyan/20 hover:text-cyber-cyan text-zinc-400 border border-white/5 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Interactive Command Input */}
          <form onSubmit={handleSubmit} className="px-4 py-3 bg-[#0B0E14] border-t border-white/10 flex items-center gap-3">
            <span className="text-cyber-cyan text-sm font-bold">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type command (e.g. wins, projects, squad)..."
              className="w-full bg-transparent text-white text-xs font-mono focus:outline-none placeholder-zinc-600"
            />
            <button
              type="submit"
              className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Execute"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
