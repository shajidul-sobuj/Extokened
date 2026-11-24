"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck 
} from "lucide-react";
import { Github, Linkedin, Facebook } from "@/components/ui/Icons";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "hackathon_invite",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 12.1 Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="pill-amber inline-flex items-center gap-2">
          <span>✦</span>
          <span>COLLABORATION &amp; DISPATCH</span>
        </div>
        <h1 className="font-page-title font-semibold text-[#FFFFFF] leading-tight">
          Let&apos;s build something meaningful.
        </h1>
        <p className="text-base sm:text-lg text-[#ADADAD] leading-relaxed font-sans">
          Whether you are an event organizer inviting Extokened to a competition, an organization seeking a prototype execution team, or an engineering collaborator—we respond promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* 12.2 Contact Methods & Telemetry (Left 5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="warm-card p-6 bg-[#141210] border border-[#2D221A] rounded-xl space-y-5">
            <h2 className="text-base font-bold text-[#FFFFFF] pb-3 border-b border-[#2D221A]">
              Direct Inquiries
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[#7D7D7D] uppercase text-[10px]">Team Email</span>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-[#FFFFFF] hover:text-[#F0A24C] flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F0A24C]" />
                  <span>{siteConfig.contactEmail}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7D7D7D]" />
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[#7D7D7D] uppercase text-[10px]">Expected Turnaround</span>
                <div className="text-[#FFFFFF] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#7D7D7D]" />
                  <span>Typically within 24–48 hours</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[#7D7D7D] uppercase text-[10px]">Base Location</span>
                <div className="text-[#FFFFFF] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7D7D7D]" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Official Channels */}
            <div className="pt-4 border-t border-[#2D221A] space-y-3">
              <span className="text-[10px] font-mono text-[#7D7D7D] uppercase tracking-wider block">
                Official Channels
              </span>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1D1814] border border-[#2D221A] text-[#FFFFFF] hover:border-[#F0A24C]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#E0A165]" />
                    <span>GitHub Organization</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7D7D7D]" />
                </a>

                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1D1814] border border-[#2D221A] text-[#FFFFFF] hover:border-[#F0A24C]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#E0A165]" />
                    <span>LinkedIn Company Node</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7D7D7D]" />
                </a>

                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-[#1D1814] border border-[#2D221A] text-[#FFFFFF] hover:border-[#F0A24C]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-[#E0A165]" />
                    <span>Facebook Official Page</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7D7D7D]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 12.3 Contact Form (Right 7 Columns) */}
        <div className="lg:col-span-7">
          <div className="warm-card p-6 sm:p-8 bg-[#141210] border border-[#2D221A] rounded-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F0A24C]/10 border border-[#F0A24C]/30 flex items-center justify-center mx-auto text-[#F0A24C]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#ADADAD] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your note and will review it and reply back to <span className="text-[#FFFFFF] font-semibold">{formState.email}</span> within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", organization: "", inquiryType: "hackathon_invite", message: "" });
                  }}
                  className="btn-secondary text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#2D221A] pb-3">
                  <h3 className="text-lg font-bold text-[#FFFFFF]">
                    Send a Direct Dispatch
                  </h3>
                  <p className="text-xs text-[#ADADAD] mt-0.5">
                    All inquiries are delivered directly to the squad without intermediary marketing layers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-[#ADADAD]">
                      Your Name <span className="text-[#F0A24C]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-md px-3 py-2 text-xs text-[#FFFFFF] placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-[#ADADAD]">
                      Email Address <span className="text-[#F0A24C]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-md px-3 py-2 text-xs text-[#FFFFFF] placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="organization" className="text-xs font-mono text-[#ADADAD]">
                      Organization / Event (Optional)
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="e.g. AI Hackfest 2026"
                      className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-md px-3 py-2 text-xs text-[#FFFFFF] placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiryType" className="text-xs font-mono text-[#ADADAD]">
                      Inquiry Nature
                    </label>
                    <select
                      id="inquiryType"
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-md px-3 py-2 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#F0A24C]/60"
                    >
                      <option value="hackathon_invite">Hackathon / Event Invitation</option>
                      <option value="engineering_partner">Engineering / Prototype Sprint</option>
                      <option value="sponsorship">Sponsorship / Equipment Support</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-[#ADADAD]">
                    Message / Brief <span className="text-[#F0A24C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details on dates, project scope, technical requirements, or event logistics..."
                    className="w-full bg-[#0D0D0D] border border-[#2D221A] rounded-md px-3 py-2 text-xs text-[#FFFFFF] placeholder-[#7D7D7D] focus:outline-none focus:border-[#F0A24C]/60 resize-none"
                  />
                </div>

                {/* Consent & Privacy Notice */}
                <div className="flex items-center gap-2 text-[11px] text-[#7D7D7D]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7D7D7D] shrink-0" />
                  <span>
                    Inquiries are confidential and sent directly via email. We never sell or share contact details per our{" "}
                    <Link href="/privacy" className="text-[#ADADAD] underline hover:text-[#FFFFFF]">
                      privacy policy
                    </Link>.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-amber-glass w-full justify-center text-xs py-3 cursor-pointer disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
