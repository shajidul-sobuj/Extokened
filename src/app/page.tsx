import { HeroSection } from "@/components/hero/HeroSection";
import { HackathonHallOfFame } from "@/components/hackathons/HackathonHallOfFame";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { SquadSection } from "@/components/team/SquadSection";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { SocialHub } from "@/components/socials/SocialHub";
import { CollabSection } from "@/components/contact/CollabSection";

export default function HomePage() {
  return (
    <div className="relative space-y-12">
      <HeroSection />
      <HackathonHallOfFame />
      <ProjectGallery />
      <SquadSection />
      <InteractiveTerminal />
      <SocialHub />
      <CollabSection />
    </div>
  );
}
