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
  Flame,
  Radio
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { playClick, playHover, playVictory } from "@/lib/sound";

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
    playClick();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playVictory();
    }, 600);
  };

  return (
    <section className="py-20 relative font-mono" id="collab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-400">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>DISPATCH & INVITATION PORTAL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Win Together? Let's Connect.
            </h2>

            <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
              Organizing an upcoming national or international hackathon? Need an elite squad to build an ambitious prototype? Or want to sponsor Extokened? We respond rapidly.
            </p>

            {/* Value cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#090C12] border border-white/10 hud-border">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Sub-12h Response SLA</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">
                    Our team monitors our war-room channels 24/7 during hackathon seasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#090C12] border border-white/10 hud-border">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Location & Readiness</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">
                    Headquartered in Dhaka, Bangladesh. Competing in worldwide hybrid arenas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#090C12] border border-white/10 hud-border">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Squad Inbox</h4>
                  <p className="text-xs text-cyan-400 mt-0.5 font-bold">
                    {siteConfig.contactEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#090C12] p-7 sm:p-9 border border-white/10 relative overflow-hidden hud-border shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    SIGNAL TRANSMITTED SUCCESSFULLY!
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you! Your hackathon invitation has been dispatched to the Extokened squad channel. We will reply within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      playClick();
                      setSubmitted(false);
                      setFormState({ name: "", email: "", inquiryType: "hackathon_invite", message: "" });
                    }}
                    onMouseEnter={playHover}
                    className="mt-4 px-5 py-2.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="font-display text-xl font-bold text-white">
                      Transmit Invitation or Collaboration Query
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 mt-1">
                      Direct line to Extokened team leads and operatives.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 block">
                        YOUR NAME / ENTITY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / GDG Hackfest"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#06080D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-zinc-300 block">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@entity.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#06080D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-300 block">
                      MISSION DIRECTIVE
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full bg-[#06080D] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    >
                      <option value="hackathon_invite">🏆 Invite Extokened to a Hackathon</option>
                      <option value="mvp_prototyping">⚡ Rapid 48h MVP / Prototyping Contract</option>
                      <option value="sponsorship">🤝 Team Sponsorship / Hardware Partner</option>
                      <option value="tech_collab">💡 Technical Collaboration / Mentorship</option>
                      <option value="other">💬 General Inquiry / Shoutout</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-300 block">
                      TRANSMISSION PAYLOAD
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify hackathon dates, problem tracks, or project requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#06080D] border border-white/10 rounded-lg p-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none font-mono"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={playHover}
                    className="w-full py-3.5 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-[#38BDF8] hover:from-[#38BDF8] hover:to-cyan-400 shadow-xl shadow-cyan-400/20 hover:shadow-cyan-400/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>TRANSMITTING PACKETS...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH SIGNAL TO EXTOKENED</span>
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
