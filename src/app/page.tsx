import { HeroSection } from "@/components/hero/HeroSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { FeaturedProjectsEditorial } from "@/components/home/FeaturedProjectsEditorial";
import { HackathonHighlightEditorial } from "@/components/home/HackathonHighlightEditorial";
import { PhilosophyEditorial } from "@/components/home/PhilosophyEditorial";
import { TeamPreviewEditorial } from "@/components/home/TeamPreviewEditorial";
import { CollabCTAEditorial } from "@/components/home/CollabCTAEditorial";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <ProofStrip />
      <FeaturedProjectsEditorial />
      <HackathonHighlightEditorial />
      <PhilosophyEditorial />
      <TeamPreviewEditorial />
      <CollabCTAEditorial />
    </div>
  );
}
