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
  Sparkles,
  ExternalLink
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { name: "Overview", href: "/", icon: Terminal },
  { name: "Victories", href: "/hackathons", icon: Trophy, badge: "12 Wins" },
  { name: "Projects", href: "/projects", icon: Layers },
  { name: "The Squad", href: "/team", icon: Users },
  { name: "Socials", href: "/links", icon: Share2 },
  { name: "Collab", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090C]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/30 border border-cyber-cyan/40 flex items-center justify-center font-display font-black text-cyber-cyan text-lg shadow-lg shadow-cyber-cyan/10 group-hover:scale-105 transition-all duration-300">
              <span className="relative z-10">&lt;E/&gt;</span>
              <div className="absolute inset-0 rounded-xl bg-cyber-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                EXTOKENED
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                Hackathon Squad
              </span>
            </div>
          </Link>

          {/* Live Status Beacon (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{siteConfig.status.message}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0E1117]/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/40 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyber-cyan" : "text-zinc-400"}`} />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-cyber-gold/20 text-cyber-gold border border-cyber-gold/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-gradient-to-r from-cyber-cyan to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyber-cyan shadow-md shadow-cyber-cyan/20 hover:shadow-cyber-cyan/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invite to Hack</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{siteConfig.status.message}</span>
          </div>

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? "bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyber-gold/20 text-cyber-gold border border-cyber-gold/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-black bg-cyber-cyan shadow-lg shadow-cyber-cyan/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Invite Extokened to Hack</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
