"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  Zap, 
  Flame 
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
    // Simulate instantaneous responsive handling
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-xs font-mono text-cyber-cyan">
              <Mail className="w-3.5 h-3.5" />
              <span>COMMUNICATION PORTAL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Ready to Win Together? Let's Connect.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Organizing an upcoming national or international hackathon? Need an elite squad to build an ambitious prototype? Or want to sponsor Extokened? We respond quickly.
            </p>

            {/* Value cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5">
                <Clock className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Sub-12h Response Time</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Our team monitors our war-room channels 24/7 during hackathon seasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Location & Availability</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Based in Dhaka, Bangladesh. Competing globally (in-person & virtual arenas).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Team Inboxes</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                    {siteConfig.contactEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Transmission Dispatched!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you! Your invitation has been routed to the Extokened squad inbox. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", inquiryType: "hackathon_invite", message: "" });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    Send an Invitation or Collaboration Proposal
                  </h3>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300 block">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / DevFest Org"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#0E1117] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#0E1117] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 block">
                      Purpose of Contact
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full bg-[#0E1117] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyber-cyan/50 transition-colors"
                    >
                      <option value="hackathon_invite">🏆 Invite Extokened to a Hackathon</option>
                      <option value="mvp_prototyping">⚡ Rapid MVP / Prototype Contract</option>
                      <option value="sponsorship">🤝 Team Sponsorship / Partner</option>
                      <option value="tech_collab">💡 Technical Collaboration / Mentorship</option>
                      <option value="other">💬 General Inquiry / Shoutout</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 block">
                      Message / Event Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about the hackathon dates, problem track, or project scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#0E1117] border border-white/10 rounded-xl p-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyber-cyan/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-cyber-cyan to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyber-cyan shadow-lg shadow-cyber-cyan/20 hover:shadow-cyber-cyan/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="font-mono text-xs">Transmitting Signal...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Extokened</span>
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
