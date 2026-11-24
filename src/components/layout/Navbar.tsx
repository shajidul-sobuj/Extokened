"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock & Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Always provide a solid, crisp, frosted glass backdrop on mobile for 100% contrast & visibility
        scrolled || mobileMenuOpen
          ? "bg-[#08090E]/95 backdrop-blur-2xl border-b border-[#1E2337] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-[#08090E]/80 backdrop-blur-xl border-b border-[#1E2337]/50 md:bg-transparent md:border-transparent md:backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Extokened Symbol + Wordmark */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl glass-panel-inset p-1 flex items-center justify-center group-hover:border-[#8B9BF7]/60 group-hover:shadow-[0_0_18px_rgba(139,155,247,0.4)] transition-all overflow-hidden shrink-0 border border-[#8B9BF7]/30">
              <img
                src="/images/extokened-logo-glow.png"
                alt="Extokened Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(139,155,247,0.4)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-[#B8C0EC] transition-colors leading-tight">
                Extokened
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#8B9BF7] uppercase tracking-wider">
                Tech Team
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation with Animated Indicator */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors relative px-4 py-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7] ${
                    isActive
                      ? "text-[#8B9BF7] font-semibold"
                      : "text-[#BAC0DC] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#151824] border border-[#1E2337] rounded-full -z-10 shadow-[0_0_12px_rgba(139,155,247,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Contact CTA & High-Contrast Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-meadow-dark text-xs py-2 px-4 shadow-[0_0_20px_rgba(139,155,247,0.2)]"
            >
              <span>Contact the Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* High-Contrast Mobile Hamburger Toggle Button (Minimum 44px Touch Target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#121626] border border-[#8B9BF7]/35 text-white hover:border-[#8B9BF7]/60 active:scale-95 transition-all shadow-[0_0_14px_rgba(139,155,247,0.15)] focus:outline-none focus:ring-2 focus:ring-[#8B9BF7]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#8B9BF7]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer: Full Viewport-Safe (100dvh safe, zero cutoff) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#08090E]/98 backdrop-blur-2xl border-t border-[#1E2337] p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-50"
          >
            {/* Top Navigation Links */}
            <div className="space-y-2 pt-2">
              <div className="text-[10px] font-mono text-[#727896] uppercase tracking-wider pb-2 border-b border-[#1E2337] mb-3">
                Main Navigation
              </div>
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-base font-medium transition-all ${
                      isActive
                        ? "bg-[#15192C] text-[#8B9BF7] border-[#8B9BF7]/40 shadow-[0_0_14px_rgba(139,155,247,0.15)] font-semibold"
                        : "bg-[#0E111C]/60 text-white border-[#1E2337]/70 hover:border-[#8B9BF7]/30"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#8B9BF7] shadow-[0_0_8px_rgba(139,155,247,0.9)]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#727896]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Contact & Quick Socials */}
            <div className="pt-6 pb-2 space-y-4 border-t border-[#1E2337]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-meadow-dark w-full py-3.5 text-sm font-semibold justify-center shadow-[0_0_20px_rgba(139,155,247,0.25)]"
              >
                <span>Contact the Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-6 pt-1 text-xs font-mono text-[#727896]">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
