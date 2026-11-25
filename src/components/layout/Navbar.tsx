"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Team", href: "/team" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Floating Luxury Glass Island Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <header
          className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled || mobileMenuOpen
              ? "bg-[#090C18]/85 backdrop-blur-2xl border border-white/[0.14] shadow-[0_16px_48px_-14px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.14)]"
              : "bg-[#0B0F1E]/55 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_36px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]"
          }`}
        >
          <div className="px-3.5 sm:px-5">
            <div className="flex items-center justify-between h-14 sm:h-[62px] gap-4">
              {/* Left: Brand Identity */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 group shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#101528]/90 border border-[#8B9BF7]/30 p-1.5 flex items-center justify-center group-hover:border-[#A5B2FF]/65 group-hover:shadow-[0_0_16px_rgba(139,155,247,0.35)] transition-all overflow-hidden shrink-0">
                  <img
                    src="/images/extokened-logo-glow.png"
                    alt="Extokened"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[15px] sm:text-base tracking-tight text-white leading-none">
                    Extokened
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A5B2FF] uppercase tracking-[0.14em] mt-1 leading-none">
                    Engineering Squad
                  </span>
                </div>
              </Link>

              {/* Center: Sculpted Desktop Navigation */}
              <nav
                aria-label="Primary Navigation"
                className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]"
              >
                {navItems.map((item) => {
                  const active = isRouteActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-3.5 lg:px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7] ${
                        active
                          ? "text-white"
                          : "text-[#B8C2E0] hover:text-white"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/[0.18] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_18px_rgba(139,155,247,0.22)]"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Right: High-Contrast Luminous CTA & Mobile Menu Toggle */}
              <div className="flex items-center gap-2.5 shrink-0">
                <Link
                  href="/contact"
                  className="hidden sm:inline-flex btn-primary py-2 px-4 text-xs sm:text-[13px] group"
                >
                  <span>Let&apos;s Collaborate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.14] text-white hover:border-[#A5B2FF]/55 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation-drawer"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-[#A5B2FF]" />
                  ) : (
                    <Menu className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Sibling Mobile Navigation Drawer (Zero backdrop-filter fixed containment bug) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden fixed inset-0 z-40 pt-24 pb-8 px-4 bg-[#07080F]/96 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="min-h-full flex flex-col justify-between gap-8 max-w-md mx-auto">
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-[0.14em] pb-2.5 border-b border-white/[0.08] mb-3">
                  Navigation
                </div>
                {navItems.map((item) => {
                  const active = isRouteActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl border text-[15px] font-medium transition-all ${
                        active
                          ? "bg-[#151B34] text-white border-[#8B9BF7]/45 shadow-[0_0_18px_rgba(139,155,247,0.16)]"
                          : "bg-[#0D101D]/80 text-[#B8C2E0] border-white/[0.08] hover:text-white hover:border-white/[0.16]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-[#A5B2FF]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#6B7596]" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full py-3.5 text-sm justify-center"
                >
                  <span>Let&apos;s Collaborate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center gap-6 text-xs font-mono text-[#8F99B8]">
                  <a
                    href={siteConfig.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href={siteConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-white/20">•</span>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
