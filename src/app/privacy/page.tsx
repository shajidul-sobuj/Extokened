import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Extokened",
  description:
    "Privacy policy and data handling statement for Extokened website visitors and inquiries.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#A8B2CF] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <MotionReveal className="space-y-4 border-b border-white/[0.08] pb-8">
        <span className="eyebrow-badge">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8B9BF7]" />
          <span>Data Handling &amp; Privacy</span>
        </span>
        <h1 className="font-page-title font-bold text-white">
          Privacy{" "}
          <span className="font-hero-serif text-[1.14em] bg-gradient-to-r from-[#A9B7FF] via-[#F0F4FF] to-[#F7CA63] bg-clip-text text-transparent">
            Policy
          </span>
        </h1>
        <p className="text-xs font-mono text-[#7D87A6]">Last updated: November 24, 2026</p>
      </MotionReveal>

      <MotionReveal
        delay={0.08}
        className="space-y-9 text-sm sm:text-[15px] text-[#B4BDD8] leading-[1.8]"
      >
        <section className="space-y-3">
          <h2 className="text-lg font-display font-bold text-white">1. Overview</h2>
          <p>
            Extokened (&quot;we&quot;, &quot;our&quot;, &quot;team&quot;) operates as an independent technology and hackathon team based in Dhaka, Bangladesh. This Privacy Policy outlines how we treat information collected through our official website (
            <span className="text-white font-mono">extokened.dev</span>).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display font-bold text-white">
            2. Information We Collect
          </h2>
          <p>
            We collect personal information solely when you voluntarily submit it via our contact or collaboration inquiry forms, or when you email us directly at{" "}
            <span className="text-white font-mono">{siteConfig.contactEmail}</span>. This information includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your name and organizational affiliation (if provided)</li>
            <li>Your email address</li>
            <li>
              Inquiry type (hackathon invitation, engineering collaboration, sponsorship, general inquiry)
            </li>
            <li>Message contents and technical scope details you provide</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display font-bold text-white">
            3. How We Use Your Information
          </h2>
          <p>Any information submitted is used exclusively to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respond directly to your hackathon invitation, partnership request, or inquiry</li>
            <li>Coordinate technical requirements or scheduling for hackathons and prototype sprints</li>
          </ul>
          <p className="pt-1">
            <strong className="text-white font-semibold">
              We do not sell, rent, monetize, or share your contact information with any third parties or marketing lists.
            </strong>{" "}
            We do not run automated marketing newsletters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display font-bold text-white">
            4. Cookies and Analytics
          </h2>
          <p>
            Our website is designed to be lightweight, privacy-preserving, and fast. We do not use intrusive third-party cross-site advertising trackers or profiling cookies. Standard server logs may record anonymized request counts and response status codes strictly for uptime and security monitoring.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display font-bold text-white">5. External Links</h2>
          <p>
            Our website links to official team platforms and external services (including GitHub, LinkedIn, Facebook, and Devpost). We encourage you to review the privacy policies of those respective platforms when navigating to them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-display font-bold text-white">
            6. Contacting the Team
          </h2>
          <p>
            If you have questions regarding this privacy statement or wish to request the deletion of any communication history you have shared with us, please reach out directly:
          </p>
          <div className="surface-card p-4 inline-flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#8B9BF7]" />
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-white font-mono text-sm hover:text-[#A5B2FF] hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </section>
      </MotionReveal>
    </div>
  );
}
