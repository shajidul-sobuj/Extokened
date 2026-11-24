"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function CollabSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
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
    <section className="py-20 relative" id="collab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/30 text-xs font-mono text-[#A78BFA]">
              <Mail className="w-3.5 h-3.5" />
              <span>Initiate Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s Build Something Impactful Together
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              Organizing an upcoming hackathon? Looking for an engineering squad to prototype an ambitious product? Or exploring partnership opportunities? Send us an inquiry.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#101724] border border-[#253044] hover:border-[#7C5CFF] group transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-[#22D3C5] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Direct Team Email</div>
                  <div className="text-sm font-semibold font-mono text-white group-hover:text-[#22D3C5] transition-colors">
                    {siteConfig.contactEmail}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101724] border border-[#253044]">
                <div className="w-10 h-10 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-zinc-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Response Turnaround</div>
                  <div className="text-sm font-semibold text-white">
                    Typically within 24–48 hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101724] border border-[#253044]">
                <div className="w-10 h-10 rounded-lg bg-[#151F2E] border border-[#253044] flex items-center justify-center text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Base Location</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="studio-card p-6 sm:p-8 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your note and will review it and reply back to <span className="text-white font-semibold">{formState.email}</span> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", inquiryType: "hackathon_invite", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg text-xs font-mono bg-[#151F2E] border border-[#253044] text-zinc-300 hover:text-white"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#253044] pb-4">
                    <h3 className="text-xl font-bold text-white">
                      Send a Direct Dispatch
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill out this brief form and our squad will get in touch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-zinc-300">
                        Your Name / Organization <span className="text-[#22D3C5]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan / HackFest 2026"
                        className="w-full bg-[#080B12] border border-[#253044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-zinc-300">
                        Email Address <span className="text-[#22D3C5]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full bg-[#080B12] border border-[#253044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiryType" className="text-xs font-medium text-zinc-300">
                      Nature of Inquiry
                    </label>
                    <select
                      id="inquiryType"
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full bg-[#080B12] border border-[#253044] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#7C5CFF] transition-colors"
                    >
                      <option value="hackathon_invite">Hackathon / Competition Invitation</option>
                      <option value="engineering_partner">Engineering / Prototype Collaboration</option>
                      <option value="sponsorship">Sponsorship / Equipment Support</option>
                      <option value="media_inquiry">Media / Community Feature</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-zinc-300">
                      Message / Brief <span className="text-[#22D3C5]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details on dates, project scope, technical expectations, or event logistics..."
                      className="w-full bg-[#080B12] border border-[#253044] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#7C5CFF] transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>
                      We respect your privacy. Inquiries are handled confidentially per our{" "}
                      <Link href="/privacy" className="text-zinc-300 underline hover:text-white">
                        privacy policy
                      </Link>.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg text-sm font-medium text-white bg-[#7C5CFF] hover:bg-[#6847ED] shadow-md shadow-[#7C5CFF]/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
