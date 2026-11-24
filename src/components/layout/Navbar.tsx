"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Trophy, 
  Terminal, 
  Users, 
  Layers, 
  Share2, 
  Mail, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Clock, 
  Sparkles,
  Zap
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { isSoundEnabled, toggleSound, subscribeSound, playHover, playClick } from "@/lib/sound";

const navItems = [
  { index: "01", name: "OVERVIEW", href: "/", icon: Terminal },
  { index: "02", name: "VICTORIES", href: "/hackathons", icon: Trophy, badge: "12🏆" },
  { index: "03", name: "BUILDS", href: "/projects", icon: Layers },
  { index: "04", name: "SQUAD", href: "/team", icon: Users },
  { index: "05", name: "MATRIX", href: "/links", icon: Share2 },
  { index: "06", name: "DISPATCH", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const unsub = subscribeSound(setSoundOn);

    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, "0");
      const minutes = String(now.getUTCMinutes()).padStart(2, "0");
      const seconds = String(now.getUTCSeconds()).padStart(2, "0");
      setUtcTime(`UTC ${hours}:${minutes}:${seconds}`);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      unsub();
      clearInterval(clockInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAudioToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#050608]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Wing: Monogram & System Status */}
          <Link
            href="/"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9 rounded-lg bg-[#0E1117] border border-cyan-500/40 flex items-center justify-center font-display font-black text-cyan-400 text-xs shadow-md shadow-cyan-500/15 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
              <span className="relative z-10">&lt;E/&gt;</span>
              <div className="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  EXTOKENED
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  v2.4
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold uppercase tracking-wider">
                  BATTLE_READY
                </span>
              </div>
            </div>
          </Link>

          {/* Center Wing: Monospaced Nav Capsule */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B0E14]/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className={`relative flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "text-black bg-cyan-400 font-bold shadow-md shadow-cyan-400/25"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`text-[10px] opacity-60 ${isActive ? "text-black" : "text-cyan-400"}`}>
                    {item.index}//
                  </span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                      isActive ? "bg-black text-amber-300" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Wing: Clock, Audio Toggle, Tactical CTA */}
          <div className="flex items-center gap-3">
            {/* Live UTC Clock */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{utcTime || "UTC 00:00:00"}</span>
            </div>

            {/* Audio FX Equalizer Button */}
            <button
              onClick={handleAudioToggle}
              title={soundOn ? "Mute Cyber Audio FX" : "Enable Cyber Audio FX"}
              className={`p-2 rounded-lg border text-xs flex items-center gap-2 transition-all duration-200 ${
                soundOn
                  ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-sm shadow-cyan-500/20"
                  : "bg-white/5 border-white/10 text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <div className="hidden sm:flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-3 bg-cyan-400 animate-[bounce_1s_infinite_100ms]" />
                    <span className="w-0.5 h-2 bg-cyan-400 animate-[bounce_1s_infinite_300ms]" />
                    <span className="w-0.5 h-3.5 bg-cyan-400 animate-[bounce_1s_infinite_200ms]" />
                  </div>
                </>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Tactical Invite CTA */}
            <Link
              href="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold text-black bg-gradient-to-r from-cyan-400 to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyan-400 shadow-lg shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-black" />
              <span>INVITE_TO_HACK</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050608]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between px-3 py-2 mb-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM: BATTLE_READY</span>
            </span>
            <span>{utcTime}</span>
          </div>

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-mono font-bold ${
                  isActive
                    ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/20"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.index} // {item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono font-bold text-black bg-cyan-400 shadow-lg shadow-cyan-400/20"
            >
              <Zap className="w-4 h-4" />
              <span>INVITE EXTOKENED TO HACK</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
