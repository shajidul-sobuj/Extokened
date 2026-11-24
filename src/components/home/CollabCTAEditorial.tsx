import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Mail } from "lucide-react";

export function CollabCTAEditorial() {
  return (
    <section className="py-24 md:py-32 bg-[#111214] border-b border-[#292B2E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="eyebrow-label mx-auto">
          Collaborate &amp; Compete
        </span>

        <h2 className="font-section-title font-semibold text-[#F3F1EC] max-w-3xl mx-auto leading-tight">
          Have a challenge worth building? Let&apos;s build it together.
        </h2>

        <p className="text-base text-[#AAA9A3] max-w-xl mx-auto font-sans leading-relaxed">
          We welcome invitations from hackathon organizers, partners looking for prototype execution squads, and engineering collaborators.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary"
          >
            <span>Contact the team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="btn-secondary"
          >
            <Mail className="w-4 h-4 text-[#777873]" />
            <span>{siteConfig.contactEmail}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
