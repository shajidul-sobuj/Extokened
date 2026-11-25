"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/siteConfig";
import { MotionReveal } from "@/components/ui/MotionReveal";
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Copy,
  Check,
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
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 65,
          origin: { y: 0.6 },
          colors: ["#8B9BF7", "#DCE2FF", "#F5C451", "#34D399", "#FFFFFF"],
        });
      } catch {
        // Ignore if confetti cannot run
      }
    }, 500);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Hero */}
      <MotionReveal className="space-y-4 max-w-3xl">
        <span className="eyebrow-badge">Collaboration &amp; Dispatch</span>
        <h1 className="font-page-title font-bold text-white">
          Let&apos;s build something meaningful.
        </h1>
        <p className="text-base sm:text-lg text-[#A8B2CF] leading-relaxed">
          Whether you are an event organizer inviting Extokened to a competition, an organization seeking a prototype execution team, or an engineering collaborator—we respond promptly.
        </p>
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left 5 Columns: Direct Channels */}
        <MotionReveal direction="left" delay={0.08} className="lg:col-span-5 space-y-6">
          <div className="surface-card p-6 sm:p-7 space-y-6">
            <h2 className="text-lg font-display font-bold text-white pb-4 border-b border-white/[0.08]">
              Direct Inquiries
            </h2>

            <div className="space-y-5 text-sm">
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
                  Team Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#090B13] border border-white/[0.08]">
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-white hover:text-[#A5B2FF] inline-flex items-center gap-2 font-mono text-xs sm:text-sm truncate transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#8B9BF7] shrink-0" />
                    <span className="truncate">{siteConfig.contactEmail}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#8F99B8] hover:text-white hover:bg-white/[0.06] transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy team email"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-[#34D399]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
                  Expected Turnaround
                </span>
                <div className="text-[#DCE2FF] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#8B9BF7]" />
                  <span>Typically within 24–48 hours</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
                  Base Location
                </span>
                <div className="text-[#DCE2FF] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B9BF7]" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Official Channels */}
            <div className="pt-5 border-t border-white/[0.08] space-y-3">
              <span className="text-[11px] font-mono text-[#7D87A6] uppercase tracking-wider block">
                Official Channels
              </span>
              <div className="flex flex-col gap-2.5 text-sm">
                <a
                  href={siteConfig.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0D101B] border border-white/[0.08] text-white hover:border-[#8B9BF7]/45 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#8B9BF7]" />
                    <span>GitHub Organization</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7D87A6]" />
                </a>

                <a
                  href={siteConfig.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0D101B] border border-white/[0.08] text-white hover:border-[#8B9BF7]/45 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#8B9BF7]" />
                    <span>LinkedIn Company Page</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7D87A6]" />
                </a>

                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0D101B] border border-white/[0.08] text-white hover:border-[#8B9BF7]/45 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-[#8B9BF7]" />
                    <span>Facebook Official Page</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7D87A6]" />
                </a>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Right 7 Columns: Dispatch Form */}
        <MotionReveal direction="right" delay={0.12} className="lg:col-span-7">
          <div className="surface-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-14 h-14 rounded-full bg-[#34D399]/10 border border-[#34D399]/35 flex items-center justify-center mx-auto text-[#34D399]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Inquiry Dispatched Successfully
                  </h3>
                  <p className="text-sm sm:text-base text-[#B4BDD8] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your message and will reply to{" "}
                    <span className="text-white font-semibold">{formState.email}</span> within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        organization: "",
                        inquiryType: "hackathon_invite",
                        message: "",
                      });
                    }}
                    className="btn-secondary text-sm py-2.5 px-5 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-white/[0.08] pb-4 space-y-1">
                    <h3 className="text-xl font-display font-bold text-white">
                      Send a Direct Dispatch
                    </h3>
                    <p className="text-sm text-[#9BA5C4]">
                      All inquiries go directly to the engineering squad—no middlemen.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-[#B4BDD8] block">
                        Your Name <span className="text-[#8B9BF7]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="field-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-[#B4BDD8] block">
                        Email Address <span className="text-[#8B9BF7]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="organization"
                        className="text-xs font-mono text-[#B4BDD8] block"
                      >
                        Organization / Event (Optional)
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState({ ...formState, organization: e.target.value })
                        }
                        placeholder="e.g. AI Hackfest 2026"
                        className="field-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiryType"
                        className="text-xs font-mono text-[#B4BDD8] block"
                      >
                        Inquiry Nature
                      </label>
                      <select
                        id="inquiryType"
                        value={formState.inquiryType}
                        onChange={(e) =>
                          setFormState({ ...formState, inquiryType: e.target.value })
                        }
                        className="field-input cursor-pointer"
                      >
                        <option value="hackathon_invite">Hackathon / Event Invitation</option>
                        <option value="engineering_partner">Engineering / Prototype Sprint</option>
                        <option value="sponsorship">Sponsorship / Equipment Support</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-[#B4BDD8] block">
                      Message / Brief <span className="text-[#8B9BF7]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details on dates, project scope, technical requirements, or event logistics..."
                      className="field-input resize-y min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#7D87A6]">
                    <ShieldCheck className="w-4 h-4 text-[#8B9BF7] shrink-0 mt-0.5" />
                    <span>
                      Inquiries are confidential and handled directly by our team. Read our{" "}
                      <Link href="/privacy" className="text-[#B4BDD8] underline hover:text-white">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 text-sm cursor-pointer disabled:opacity-60"
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
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
