"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

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
          ? "bg-[#080B12]/92 backdrop-blur-md border-b border-[#253044]/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/50 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-md bg-[#101724] border border-[#253044] flex items-center justify-center font-display font-bold text-white text-sm shadow-sm group-hover:border-[#7C5CFF] group-hover:text-[#22D3C5] transition-all">
              <span className="relative z-10 font-mono tracking-tighter">&lt;E/&gt;</span>
              <div className="absolute inset-0 rounded-md bg-[#7C5CFF]/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-white transition-colors">
                  Extokened
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#151F2E] text-zinc-400 border border-[#253044]">
                  Tech Team
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101724]/80 backdrop-blur-md border border-[#253044] rounded-full px-3 py-1 shadow-inner">
            {siteConfig.navLinks.map((item) => {
              const isActive = item.href === "/" 
                ? pathname === "/" 
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "text-white bg-[#151F2E] border border-[#253044] shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Collaborate & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] border border-[#7C5CFF]/60 shadow-md shadow-[#7C5CFF]/20 hover:shadow-[#7C5CFF]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/50"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#101724] border border-[#253044] text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/50"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B12]/98 backdrop-blur-2xl border-b border-[#253044] px-4 pt-4 pb-6 space-y-2 mt-2 animate-in fade-in duration-150">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-3 pb-2 border-b border-[#253044]">
            Navigation
          </div>

          {siteConfig.navLinks.map((item) => {
            const isActive = item.href === "/" 
              ? pathname === "/" 
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#151F2E] text-white border border-[#253044]"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#22D3C5]" />}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#253044]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] shadow-md shadow-[#7C5CFF]/20"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
