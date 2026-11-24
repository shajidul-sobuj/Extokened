export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Agents" | "Full-Stack & Cloud" | "DevTools & Systems" | "Web3 & FinTech";
  hackathonOrigin: string;
  status: "Shipped & Live" | "Open Source" | "Battle-Tested Prototype" | "Active Research";
  description: string;
  architectureNotes: string;
  keyFeatures: string[];
  techStack: string[];
  links: {
    live?: string;
    github?: string;
    demoVideo?: string;
    docs?: string;
  };
  metrics?: {
    label: string;
    value: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "pulse-ai",
    title: "PulseAI",
    tagline: "Autonomous Multimodal ICU Triage & Critical Vital Prediction",
    category: "AI & Agents",
    hackathonOrigin: "AI Horizon Global Hackathon 2025 (Champion 🏆)",
    status: "Battle-Tested Prototype",
    description:
      "A real-time telemetry streaming application that leverages Gemini 2.0 to ingest raw hospital bedside vitals, waveform ECG sequences, and doctor voice memos to detect clinical emergencies before standard alarms trigger.",
    architectureNotes:
      "Decoupled edge WebSocket pipeline that ingests 50Hz sensor arrays, processes sliding-window statistical features, and sends structured payloads to a high-throughput reasoning agent.",
    keyFeatures: [
      "Sub-200ms vital drop detection",
      "Automatic audio synthesized doctor dispatch alerts",
      "Multimodal patient chart summarization with differential diagnoses",
      "HIPAA-compliant mock telemetry sandbox",
    ],
    techStack: ["Next.js 15", "Google Gemini API", "FastAPI", "WebSockets", "Tailwind CSS", "TimescaleDB"],
    links: {
      live: "https://pulse-ai.extokened.dev",
      github: "https://github.com/extokened/pulse-ai",
      demoVideo: "https://youtube.com/watch?v=sample1",
    },
    metrics: {
      label: "Accuracy",
      value: "99.4%",
    },
    featured: true,
  },
  {
    id: "gridsync",
    title: "GridSync",
    tagline: "Dynamic Edge-Vision Traffic Light Optimization & Green Wave Corridor",
    category: "Full-Stack & Cloud",
    hackathonOrigin: "National CodeStorm 2024 (Champion 🏆)",
    status: "Shipped & Live",
    description:
      "Hardware-software integrated municipal traffic control system that runs computer vision at road intersections to dynamically balance queue lengths and grant instant emergency vehicle right-of-way.",
    architectureNotes:
      "Edge YOLOv9 inference models linked via MQTT to a central Next.js geospatial command center with real-time Mapbox layers and live queue density heatmaps.",
    keyFeatures: [
      "Real-time vehicle counting across 8 lanes simultaneously",
      "Ambulance audio beacon automatic override trigger",
      "Interactive 3D intersection digital twin visualization",
      "Automated signal timing adjustment every 15 seconds",
    ],
    techStack: ["React 19", "FastAPI", "YOLOv9", "Mapbox GL", "Python", "MQTT", "PostgreSQL"],
    links: {
      live: "https://gridsync.extokened.dev",
      github: "https://github.com/extokened/gridsync-traffic",
      demoVideo: "https://youtube.com/watch?v=sample2",
    },
    metrics: {
      label: "Transit Cut",
      value: "41%",
    },
    featured: true,
  },
  {
    id: "omniscrape-ai",
    title: "OmniScrape Swarm",
    tagline: "Autonomous Self-Healing Web Navigation & Dynamic Extraction Swarm",
    category: "AI & Agents",
    hackathonOrigin: "Agentic AI Frontier Hackathon (Best Architecture ⚡)",
    status: "Open Source",
    description:
      "A fleet of autonomous agents that inspect raw browser DOM trees, handle complex paginations, click accordions, and compile structured datasets with zero hardcoded CSS selectors.",
    architectureNotes:
      "Tree-sitter DOM simplification pipeline reducing page tokens by 85% before feeding into LLM planning agents for deterministic tool calling.",
    keyFeatures: [
      "Zero-selector extraction based purely on visual and semantic queries",
      "Self-healing navigation when UI layouts are redesigned",
      "Built-in proxy rotation and rate-limit backoff engine",
      "Export to instant Postgres tables or OpenAPI specs",
    ],
    techStack: ["TypeScript", "Playwright", "Claude 3.5 Sonnet", "Node.js", "Redis", "Docker"],
    links: {
      live: "https://omniscrape.extokened.dev",
      github: "https://github.com/extokened/omniscrape-agent",
    },
    metrics: {
      label: "Tokens Cut",
      value: "85%",
    },
    featured: true,
  },
  {
    id: "khashra-ledger",
    title: "Khashra",
    tagline: "Vernacular Bangla Voice Ledger & Alternative Credit Scoring for Merchants",
    category: "Web3 & FinTech",
    hackathonOrigin: "FinTech Disrupt 2024 (1st Runner Up 🥈)",
    status: "Battle-Tested Prototype",
    description:
      "Voice-first mobile-friendly ledger that lets street vendors log credit sales and debts simply by speaking colloquial Bangla audio into their phone, generating verifiable credit histories.",
    architectureNotes:
      "Fine-tuned speech-to-text pipeline mapped to conversational financial intent slots, backed by an offline-first IndexedDB database that synchronizes when connectivity returns.",
    keyFeatures: [
      "Works in heavy market background noise",
      "Instant SMS debt reminders to customers in Bangla script",
      "Machine-learning based merchant default risk assessment",
      "100% offline-first functionality",
    ],
    techStack: ["Next.js", "Whisper AI", "Supabase", "FastAPI", "Tailwind CSS", "IndexedDB"],
    links: {
      live: "https://khashra.extokened.dev",
      github: "https://github.com/extokened/khashra-ledger",
      demoVideo: "https://youtube.com/watch?v=sample3",
    },
    metrics: {
      label: "Speech Acc",
      value: "94%",
    },
    featured: true,
  },
  {
    id: "tokenkit-cli",
    title: "TokenKit CLI",
    tagline: "The 60-Second Hackathon Project Scaffolding CLI for Rapid 0-to-1 Builds",
    category: "DevTools & Systems",
    hackathonOrigin: "Extokened Internal Arsenal & Open Source",
    status: "Open Source",
    description:
      "Our team's secret weapon. A battle-tested CLI tool that provisions a production-ready Next.js, FastAPI, Tailwind, Auth, and Database repo in under 60 seconds with pre-wired AI clients.",
    architectureNotes:
      "Modular generator engine written in Go with interactive fuzzy selection, instant GitHub repo generation, and automated Vercel/Railway pipeline setup.",
    keyFeatures: [
      "Pre-configured Gemini, OpenAI, and Anthropic client hooks",
      "Tailwind glassmorphic cyberpunk theme out of the box",
      "Instant deployment command with SSL and environment variables",
      "Used by 800+ developers in community hackathons",
    ],
    techStack: ["Go", "Cobra", "Next.js", "TypeScript", "Vercel API", "Docker"],
    links: {
      live: "https://tokenkit.extokened.dev",
      github: "https://github.com/extokened/tokenkit-cli",
    },
    metrics: {
      label: "Devs Using",
      value: "800+",
    },
    featured: false,
  },
  {
    id: "sentinel-zero",
    title: "SentinelZero",
    tagline: "Supply-Chain Malicious Package & Ast Zero-Day Detector",
    category: "DevTools & Systems",
    hackathonOrigin: "National Cyber Resilience Hackathon (Top 3 🛡️)",
    status: "Battle-Tested Prototype",
    description:
      "Real-time CI/CD bot that intercepts incoming package updates, runs dynamic sandbox analysis in micro-VMs, and flags obfuscated reverse-shells before code hits production.",
    architectureNotes:
      "Containerized Firecracker micro-VM isolation for detonating suspicious npm/pip release archives with eBPF kernel network monitoring.",
    keyFeatures: [
      "Sub-2s sandbox execution and network isolation",
      "Automated PR warning comments with CVE severity scores",
      "Detection of typosquatting and maintainer credential stuffing",
    ],
    techStack: ["Go", "eBPF", "Docker", "PostgreSQL", "Next.js", "GitHub Apps"],
    links: {
      github: "https://github.com/extokened/sentinel-zero",
    },
    featured: false,
  },
];
