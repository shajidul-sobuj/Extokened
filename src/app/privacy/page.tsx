import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, ShieldCheck, Mail, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Extokened",
  description: "Privacy policy and data handling statement for Extokened website visitors and inquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-[#253044] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101724] border border-[#253044] text-xs font-mono text-[#22D3C5]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Handling &amp; Privacy Statement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-zinc-500">
          Last updated: November 24, 2026
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm text-zinc-300 leading-relaxed font-sans">
        
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            1. Overview
          </h2>
          <p>
            Extokened (&quot;we&quot;, &quot;our&quot;, &quot;team&quot;) operates as an independent technology and hackathon team based in Dhaka, Bangladesh. This Privacy Policy outlines how we treat information collected through our official website (<span className="text-zinc-200 font-mono">extokened.dev</span>).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            2. Information We Collect
          </h2>
          <p>
            We collect personal information solely when you voluntarily submit it via our contact or collaboration inquiry forms, or when you email us directly at <span className="text-white font-mono">{siteConfig.contactEmail}</span>. This information includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>Your name and organizational affiliation</li>
            <li>Your email address</li>
            <li>Inquiry type (hackathon invitation, engineering collaboration, sponsorship, general inquiry)</li>
            <li>Message contents and technical scope details you provide</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            3. How We Use Your Information
          </h2>
          <p>
            Any information submitted is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>Respond directly to your hackathon invitation, partnership request, or inquiry</li>
            <li>Coordinate technical requirements or scheduling for hackathons and prototype sprints</li>
          </ul>
          <p className="pt-1">
            <strong className="text-white">We do not sell, rent, monetize, or share your contact information with any third parties or marketing lists.</strong> We do not run automated marketing newsletters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            4. Cookies and Analytics
          </h2>
          <p>
            Our website is designed to be lightweight, privacy-preserving, and fast. We do not use intrusive third-party cross-site advertising trackers or profiling cookies. Standard server logs may record anonymized request counts and response status codes strictly for uptime and security monitoring.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            5. External Links
          </h2>
          <p>
            Our website links to official team platforms and external services (including GitHub, LinkedIn, Facebook, and Devpost). We encourage you to review the privacy policies of those respective platforms when navigating to them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            6. Contacting the Team
          </h2>
          <p>
            If you have questions regarding this privacy statement or wish to request the deletion of any communication history you have shared with us, please reach out directly:
          </p>
          <div className="studio-card p-4 inline-flex items-center gap-3 mt-2">
            <Mail className="w-4 h-4 text-[#22D3C5]" />
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-white font-mono hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </section>

      </div>

    </div>
  );
}
