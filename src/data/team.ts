export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  avatar: string;
  focusAreas: string[];
  skills: string[];
  superpower: string;
  hackathonFuel: string;
  stats: {
    hackathons: number;
    trophies: number;
    linesOfCode: string;
  };
  socials: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    discord?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "sobuj",
    slug: "sobuj",
    name: "Sobuj Ahmed",
    role: "Team Lead & Full-Stack Architect",
    badge: "Lead & Architect",
    bio: "Obsessed with taking high-complexity concepts from 0 to live production in under 36 hours. Bridges AI reasoning layers with resilient full-stack web architectures and seamless UX.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sobuj&backgroundColor=0d1117",
    focusAreas: ["System Architecture", "Full-Stack Web", "Hackathon Pitch Strategy"],
    skills: ["Next.js 15", "TypeScript", "FastAPI", "Gemini & LLM Pipelines", "PostgreSQL", "Docker"],
    superpower: "Architecting entire production DB schemas and API contracts in the first 2 hours of a hackathon.",
    hackathonFuel: "Cold Brew & Dark Chocolate",
    stats: {
      hackathons: 18,
      trophies: 12,
      linesOfCode: "65K+",
    },
    socials: {
      github: "https://github.com/sobuj",
      linkedin: "https://linkedin.com/in/sobuj",
      facebook: "https://facebook.com/sobuj",
      twitter: "https://x.com/sobuj",
      discord: "sobuj#0001",
    },
  },
  {
    id: "abrar-ai",
    slug: "abrar-ai",
    name: "Abrar Hasan",
    role: "AI & Machine Learning Specialist",
    badge: "AI & Neural Systems",
    bio: "Specializes in multimodal neural pipelines, autonomous agents, and fine-tuning lightweight models for edge inference under strict latency budgets.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Abrar&backgroundColor=0d1117",
    focusAreas: ["Generative AI", "Computer Vision", "Agentic Workflows"],
    skills: ["PyTorch", "Google Gemini API", "LangGraph", "Vector DBs", "YOLOv9", "Whisper AI"],
    superpower: "Prompt-engineering and fine-tuning an agent swarm that never hallucinates during the live judge demo.",
    hackathonFuel: "Espresso Shots & Energy Drink",
    stats: {
      hackathons: 15,
      trophies: 10,
      linesOfCode: "45K+",
    },
    socials: {
      github: "https://github.com/abrar-ai",
      linkedin: "https://linkedin.com/in/abrar-ai",
      facebook: "https://facebook.com/abrar.ai",
      discord: "abrar_ai",
    },
  },
  {
    id: "tanvir-sys",
    slug: "tanvir-sys",
    name: "Tanvir Rahman",
    role: "Backend & Systems Engineer",
    badge: "Distributed Systems",
    bio: "Hardens the core infrastructure. High-throughput WebSockets, distributed queues, eBPF telemetry, and sub-10ms query execution across PostgreSQL and Redis.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Tanvir&backgroundColor=0d1117",
    focusAreas: ["Distributed Systems", "Database Optimization", "Real-time Telemetry"],
    skills: ["Go (Golang)", "PostgreSQL / Timescale", "Redis", "Docker & Kubernetes", "WebSockets", "Linux Internals"],
    superpower: "Fixing race conditions and zero-downtime server scaling 15 minutes before the submission deadline.",
    hackathonFuel: "Black Coffee & Chai",
    stats: {
      hackathons: 16,
      trophies: 11,
      linesOfCode: "50K+",
    },
    socials: {
      github: "https://github.com/tanvir-sys",
      linkedin: "https://linkedin.com/in/tanvir-sys",
      facebook: "https://facebook.com/tanvir.sys",
      discord: "tanvir_core",
    },
  },
  {
    id: "nafisa-ui",
    slug: "nafisa-ui",
    name: "Nafisa Tabassum",
    role: "UI/UX Virtuoso & Creative Technologist",
    badge: "Interface & Experience",
    bio: "Transforms complex backend data pipelines into magnetic, intuitive, and award-winning user interfaces. Masters interactive animations, sound design, and micro-interactions.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nafisa&backgroundColor=0d1117",
    focusAreas: ["Design Systems", "Accessible Interfaces", "Motion & Interactive Experience"],
    skills: ["Figma to Code", "Tailwind CSS", "Framer Motion", "Three.js / WebGL", "WCAG a11y", "Design Systems"],
    superpower: "Crafting interfaces so visually striking that hackathon judges stop scrolling and award maximum UX points.",
    hackathonFuel: "Matcha Latte & Bubble Tea",
    stats: {
      hackathons: 14,
      trophies: 9,
      linesOfCode: "38K+",
    },
    socials: {
      github: "https://github.com/nafisa-ui",
      linkedin: "https://linkedin.com/in/nafisa-ui",
      facebook: "https://facebook.com/nafisa.ui",
      twitter: "https://x.com/nafisa_ui",
    },
  },
];
