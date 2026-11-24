"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#08090E]/90 backdrop-blur-md border-b border-[#1E2337]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Extokened Symbol + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#252B44] to-[#0F1118] border border-[#8B9BF7]/35 flex items-center justify-center font-mono font-bold text-[#8B9BF7] text-xs group-hover:border-[#8B9BF7] group-hover:shadow-[0_0_14px_rgba(139,155,247,0.35)] transition-all">
              &lt;E/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base tracking-tight text-white group-hover:text-[#B8C0EC] transition-colors">
                Extokened
              </span>
              <span className="text-[10px] font-mono text-[#727896] uppercase tracking-wider">
                Tech Team
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation with Animated Indicator */}
          <nav className="hidden md:flex items-center gap-2">
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

          {/* Far Right: Contact CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-meadow-dark text-xs py-2 px-4 shadow-[0_0_20px_rgba(139,155,247,0.2)]"
            >
              <span>Contact the Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#151824] border border-[#1E2337] text-[#BAC0DC] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9BF7]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-20 bg-[#08090E]/98 backdrop-blur-xl border-t border-[#1E2337] p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="text-[11px] font-mono text-[#727896] uppercase tracking-wider pb-2 border-b border-[#1E2337]">
                Navigation
              </div>
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 text-lg font-medium border-b border-[#1E2337]/60 transition-colors ${
                      isActive ? "text-[#8B9BF7]" : "text-[#FFFFFF] hover:text-[#8B9BF7]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8B9BF7] shadow-[0_0_8px_rgba(139,155,247,0.8)]" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-8 space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-meadow-dark w-full py-3 text-sm justify-center"
              >
                <span>Contact the Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-[#727896]">
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
    </motion.header>
  );
}
