import React from "react";
import { Metadata } from "next";
import { CollabSection } from "@/components/contact/CollabSection";
import { SocialHub } from "@/components/socials/SocialHub";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Extokened",
  description:
    "Get in touch with Extokened for hackathon invitations, engineering partnerships, prototype sprints, and sponsorships.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 space-y-12">
      <CollabSection />
      <div className="border-t border-[#253044]/60 pt-12">
        <SocialHub />
      </div>
    </div>
  );
}
