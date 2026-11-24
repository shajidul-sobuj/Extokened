"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    window.addEventListener("scroll", handleScroll);
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

  // Primary navigation links as defined in design spec
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-240 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2D221A]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Extokened Symbol + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0A24C]"
          >
            <div className="w-8 h-8 rounded-md bg-[#1D1510] border border-[#F0A24C]/40 flex items-center justify-center font-mono font-bold text-[#F0A24C] text-xs group-hover:border-[#F0A24C] group-hover:shadow-[0_0_12px_rgba(240,162,76,0.3)] transition-all">
              &lt;E/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-base tracking-tight text-white">
                Extokened
              </span>
              <span className="text-[10px] font-mono text-[#7D7D7D] uppercase tracking-wider">
                Tech Team
              </span>
            </div>
          </Link>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0A24C] ${
                    isActive
                      ? "text-[#F0A24C]"
                      : "text-[#ADADAD] hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F0A24C] rounded-full shadow-[0_0_8px_rgba(240,162,76,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Contact CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-amber-glass text-xs py-2 px-4 shadow-[0_0_20px_rgba(240,162,76,0.25)]"
            >
              <span>Contact the Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#1D1510] border border-[#2D221A] text-[#ADADAD] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0A24C]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0D0D0D] border-t border-[#2D221A] p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-[11px] font-mono text-[#7D7D7D] uppercase tracking-wider pb-2 border-b border-[#2D221A]">
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 text-lg font-medium border-b border-[#2D221A]/60 transition-colors ${
                    isActive ? "text-[#F0A24C]" : "text-[#FFFFFF] hover:text-[#F0A24C]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F0A24C] shadow-[0_0_8px_rgba(240,162,76,0.8)]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-amber-glass w-full py-3 text-sm justify-center"
            >
              <span>Contact the Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-[#7D7D7D]">
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
        </div>
      )}
    </header>
  );
}
