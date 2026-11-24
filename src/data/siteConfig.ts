export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  principles: {
    title: string;
    description: string;
  }[];
  contactEmail: string;
  location: string;
  establishedYear: number;
  socials: Record<string, SocialLink>;
  navLinks: {
    name: string;
    href: string;
  }[];
  proofMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
  focusAreas: {
    title: string;
    description: string;
    skills: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Extokened",
  tagline: "We build. We compete. We create what's next.",
  positioning: "A builder-led technology team that learns, competes, collaborates, and ships practical products.",
  description:
    "Extokened is an independent technology and hackathon team. We design, prototype, and ship software solutions under pressure, exploring generative AI, resilient web architectures, and practical developer tools.",
  principles: [
    {
      title: "Build with purpose",
      description: "We tackle real, measurable friction points in healthcare, urban infrastructure, and vernacular commerce rather than speculative hype.",
    },
    {
      title: "Learn by competing",
      description: "Hackathons are our crucible. The intense 24–48 hour deadline forces clarity, rapid technical compromise, and ruthless prioritization.",
    },
    {
      title: "Ship as a team",
      description: "End-to-end ownership: we do not stop at pitch slides. Every project we present has real code, deployed endpoints, and live verified telemetry.",
    },
  ],
  contactEmail: "team@extokened.dev",
  location: "Dhaka, Bangladesh & Remote",
  establishedYear: 2023,
  socials: {
    github: {
      platform: "GitHub",
      url: "https://github.com/extokened",
      handle: "extokened",
      description: "Open-source repositories, project source code, and shared utilities.",
    },
    linkedin: {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/extokened",
      handle: "company/extokened",
      description: "Official team announcements, engineering case studies, and milestones.",
    },
    facebook: {
      platform: "Facebook",
      url: "https://facebook.com/extokened",
      handle: "@extokened",
      description: "Event moments, community updates, and hackathon highlights.",
    },
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  proofMetrics: [
    {
      label: "Projects Shipped",
      value: "26+",
      description: "Prototypes and production builds",
    },
    {
      label: "Hackathons Joined",
      value: "18",
      description: "National and global competitions",
    },
    {
      label: "Podiums & Awards",
      value: "12",
      description: "7 Winners, 5 Finalists & Special Tracks",
    },
    {
      label: "Active Contributors",
      value: "4",
      description: "Synchronized core engineering roster",
    },
  ],
  focusAreas: [
    {
      title: "Modern Web & Distributed Frontends",
      description: "High-performance Next.js architectures, accessible design systems, and responsive applications that load quickly across devices.",
      skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
    },
    {
      title: "Generative AI & Agent Workflows",
      description: "Connecting multimodal foundation models with real-world sensor streams, deterministic evaluation, and low-latency API pipelines.",
      skills: ["Google Gemini API", "OpenAI API", "LangGraph", "Vector Databases", "Whisper Audio"],
    },
    {
      title: "Backend Services & Concurrency",
      description: "Reliable API endpoints, real-time WebSockets, time-series telemetry databases, and containerized microservices.",
      skills: ["FastAPI", "Go (Golang)", "PostgreSQL", "Supabase", "Redis", "Docker"],
    },
    {
      title: "Applied Computer Vision & Systems",
      description: "Edge machine learning inference, spatial data mapping, and real-time hardware-software integrations.",
      skills: ["YOLOv9", "OpenCV", "Mapbox GL", "MQTT", "Python"],
    },
  ],
};
