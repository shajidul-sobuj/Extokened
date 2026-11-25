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
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Body scroll lock & Escape handler while mobile drawer is open
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#07080D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
            : "bg-[#07080D]/55 backdrop-blur-md border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px] gap-4">
            {/* Left: Brand Identity */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0F1322] border border-[#8B9BF7]/25 p-1.5 flex items-center justify-center group-hover:border-[#8B9BF7]/55 transition-colors overflow-hidden shrink-0">
                <img
                  src="/images/extokened-logo-glow.png"
                  alt="Extokened"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-[15px] sm:text-base tracking-tight text-white leading-none">
                  Extokened
                </span>
                <span className="text-[10px] font-mono text-[#8B9BF7] uppercase tracking-[0.12em] mt-1 leading-none">
                  Engineering Squad
                </span>
              </div>
            </Link>

            {/* Center: Floating Precision Navigation Rail */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#0D1019]/85 border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
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
                        : "text-[#9BA5C4] hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-[#192038] border border-[#8B9BF7]/30 shadow-[0_0_16px_rgba(139,155,247,0.18)]"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right: Primary Contact CTA & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
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
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#101424] border border-white/[0.12] text-white hover:border-[#8B9BF7]/50 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
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
      </header>

      {/* Mobile Navigation Drawer rendered as sibling (avoids backdrop-filter fixed containment bug) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-16 sm:top-[72px] bottom-0 z-40 bg-[#07080D]/98 backdrop-blur-2xl border-t border-white/[0.08] overflow-y-auto"
          >
            <div className="min-h-full px-5 py-6 flex flex-col justify-between gap-8 max-w-lg mx-auto">
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-[0.12em] pb-2.5 border-b border-white/[0.08] mb-3">
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
                          ? "bg-[#151B30] text-white border-[#8B9BF7]/40"
                          : "bg-[#0D1019]/80 text-[#B4BDD8] border-white/[0.07] hover:text-white hover:border-white/[0.16]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-[#8B9BF7]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#636D8E]" />
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

                <div className="flex items-center justify-center gap-6 text-xs font-mono text-[#7D87A6]">
                  <a
                    href={siteConfig.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <span className="text-white/15">•</span>
                  <a
                    href={siteConfig.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-white/15">•</span>
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
