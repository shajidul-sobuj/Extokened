export interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: string;
  description: string;
  badge?: string;
  color: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  slogan: string;
  tagline: string;
  description: string;
  status: {
    state: "available" | "hacking" | "mentoring";
    message: string;
    targetEvent?: string;
  };
  contactEmail: string;
  location: string;
  established: string;
  socials: Record<string, SocialLink>;
  stats: {
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
    subtext: string;
  }[];
  arsenal: {
    category: string;
    skills: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Extokened",
  shortName: "EXT",
  slogan: "We Hack. We Build. We Ship.",
  tagline: "Engineering the Uncharted — Beyond the Next Token.",
  description:
    "Extokened is an elite, permanent hackathon squad and engineering collective. We specialize in prototyping and shipping breakthrough AI, full-stack architectures, and web innovations under intense 24-48 hour hyper-sprints.",
  status: {
    state: "available",
    message: "Ready for Next Hackathon Challenge",
    targetEvent: "Global Hackathon Season 2025/2026",
  },
  contactEmail: "team@extokened.dev",
  location: "Dhaka & Global Remote",
  established: "2023",
  socials: {
    facebook: {
      name: "Facebook Page",
      url: "https://facebook.com/extokened",
      username: "@extokened",
      icon: "Facebook",
      description: "Official team updates, event moments, and hackathon highlights",
      badge: "Community Hub",
      color: "#1877F2",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/company/extokened",
      username: "company/extokened",
      icon: "Linkedin",
      description: "Professional milestones, technical articles, and team announcements",
      badge: "Professional Network",
      color: "#0A66C2",
    },
    github: {
      name: "GitHub Organization",
      url: "https://github.com/extokened",
      username: "extokened",
      icon: "Github",
      description: "Open-source hackathon boilerplates, project repos, and micro-tools",
      badge: "Source Code",
      color: "#F3F4F6",
    },
    discord: {
      name: "Discord HQ",
      url: "https://discord.gg/extokened",
      username: "Extokened HQ",
      icon: "MessageSquare",
      description: "Real-time brainstorming, community chats, and war-room sessions",
      badge: "War Room",
      color: "#5865F2",
    },
    devpost: {
      name: "Devpost Portfolio",
      url: "https://devpost.com/teams/extokened",
      username: "teams/extokened",
      icon: "Code",
      description: "Verified submissions, judge scoring, and hackathon awards",
      badge: "Verified Builds",
      color: "#003E54",
    },
    twitter: {
      name: "X / Twitter",
      url: "https://x.com/extokened",
      username: "@extokened",
      icon: "Twitter",
      description: "Live build-in-public threads during 48h hackathons",
      color: "#1DA1F2",
    },
  },
  stats: [
    {
      label: "Hackathons Competed",
      value: "18",
      suffix: "+",
      subtext: "National & Global Arenas",
    },
    {
      label: "Podium Finishes & Wins",
      value: "12",
      suffix: " 🏆",
      subtext: "Championships & Track Wins",
    },
    {
      label: "Production Prototypes",
      value: "26",
      suffix: "+",
      subtext: "Shipped in 24-48 Hours",
    },
    {
      label: "Lines of Clean Code",
      value: "150",
      suffix: "K+",
      subtext: "TypeScript, Python & Go",
    },
  ],
  arsenal: [
    {
      category: "Frontend & UI/UX",
      skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / WebGL", "shadcn/ui"],
    },
    {
      category: "AI, LLMs & Agents",
      skills: ["Google Gemini API", "OpenAI GPT-4o", "LangChain / LangGraph", "RAG Pipelines", "Hugging Face", "Vector DBs (Pinecone, Qdrant)"],
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Node.js / Express", "Go / Gin", "PostgreSQL", "Supabase", "Redis", "Docker & Kubernetes"],
    },
    {
      category: "Hackathon Secret Sauce",
      skills: ["Rapid 0-to-1 Architecture", "Pitch Deck Crafting", "High-Fidelity Prototyping", "Live Demo Reliability", "Team Chemistry"],
    },
  ],
};
