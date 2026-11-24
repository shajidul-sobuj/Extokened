import { CollabSection } from "@/components/contact/CollabSection";
import { SocialHub } from "@/components/socials/SocialHub";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 space-y-8">
      <CollabSection />
      <div className="border-t border-white/5 pt-8">
        <SocialHub />
      </div>
    </div>
  );
}
