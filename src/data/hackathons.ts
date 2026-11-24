export type AwardType = "champion" | "runner_up" | "special_track" | "finalist";

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  year: number;
  duration: string;
  location: string;
  award: string;
  awardType: AwardType;
  badgeLabel: string;
  projectTitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  standoutMetric: string;
  links: {
    devpost?: string;
    github?: string;
    liveUrl?: string;
    demoVideo?: string;
    pitchDeck?: string;
  };
  featured: boolean;
  coverImage?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "ai-horizon-2025",
    name: "AI Horizon Global Hackathon 2025",
    organizer: "Google Developer Groups & AI Alliance",
    date: "Jan 2025",
    year: 2025,
    duration: "48 Hours",
    location: "Hybrid (Dhaka & Virtual)",
    award: "Grand Champion (1st Place)",
    awardType: "champion",
    badgeLabel: "🏆 Grand Champion",
    projectTitle: "PulseAI: Autonomous Critical Patient Triage",
    tagline: "Multimodal Gemini-powered real-time clinical vital anomaly detection and automatic ICU alert routing.",
    description:
      "Engineered an end-to-end multimodal patient monitoring dashboard under 48 hours. Connected hospital telemetry with Gemini 2.0 Flash to synthesize complex EHR records, predictive vital drop-offs, and trigger actionable doctor alert protocols before cardiac events.",
    highlights: [
      "Ranked #1 out of 220+ international competing teams",
      "99.4% precision in test ECG waveform anomaly classification",
      "Zero-latency WebSockets streaming architecture with edge fallback",
    ],
    techStack: ["Next.js 15", "Google Gemini API", "FastAPI", "Python", "Tailwind CSS", "WebSockets", "TimescaleDB"],
    standoutMetric: "1st Place of 220+ Teams",
    links: {
      github: "https://github.com/extokened/pulse-ai",
      liveUrl: "https://pulse-ai.extokened.dev",
      demoVideo: "https://youtube.com/watch?v=sample1",
      devpost: "https://devpost.com/software/pulse-ai-triage",
    },
    featured: true,
  },
  {
    id: "codestorm-national-2024",
    name: "National CodeStorm Championship 2024",
    organizer: "National ICT Division & IEEE CS",
    date: "Oct 2024",
    year: 2024,
    duration: "36 Hours",
    location: "Bangabandhu Military Museum Hall, Dhaka",
    award: "Champion — Smart City Track",
    awardType: "champion",
    badgeLabel: "🏆 1st in Smart City Track",
    projectTitle: "GridSync: Dynamic Traffic Optimization Matrix",
    tagline: "Real-time edge computer vision and adaptive green-wave coordination for congestion relief.",
    description:
      "Tackled Dhaka's severe urban traffic bottleneck with dynamic green-light signal adjustment. Used YOLOv9 edge cameras to detect emergency vehicle siren audio & vehicle density, dynamically clearing traffic corridors in real-time.",
    highlights: [
      "Awarded Best Engineering Feat by Department of ICT judges",
      "Simulated 41% emergency ambulance transit time reduction in 4 arterial intersections",
      "Engineered full hardware prototype + web visualization in 36h",
    ],
    techStack: ["React", "FastAPI", "YOLOv9", "Python", "OpenCV", "PostgreSQL", "Mapbox GL"],
    standoutMetric: "41% Transit Delay Reduction",
    links: {
      github: "https://github.com/extokened/gridsync-traffic",
      liveUrl: "https://gridsync.extokened.dev",
      demoVideo: "https://youtube.com/watch?v=sample2",
      devpost: "https://devpost.com/software/gridsync",
    },
    featured: true,
  },
  {
    id: "fintech-disrupt-2024",
    name: "FinTech Disrupt Sprint 2024",
    organizer: "BRAC Bank & FinTech Innovation Hub",
    date: "July 2024",
    year: 2024,
    duration: "36 Hours",
    location: "Dhaka, Bangladesh",
    award: "1st Runner Up (2nd Place)",
    awardType: "runner_up",
    badgeLabel: "🥈 1st Runner Up",
    projectTitle: "Khashra: Vernacular Micro-Merchant Ledger & Credit Scoring",
    tagline: "Voice-driven Bangla ledger app turning street-vendor cash transactions into verifiable credit scores.",
    description:
      "Built for unbanked micro-merchants who do not maintain bookkeeping. Allows shopkeepers to speak natural Bangla audio to log sales and dues, automatically verifying transactions, generating digital invoices, and compiling an alternative credit score for micro-loans.",
    highlights: [
      "Voice recognition in native colloquial Bangla accents with 94% accuracy",
      "Offline-first PWA sync architecture for unreliable market internet connections",
      "Pitched to senior banking executives and venture partners",
    ],
    techStack: ["Next.js", "Whisper AI", "FastAPI", "Supabase", "IndexedDB PWA", "Tailwind CSS"],
    standoutMetric: "Top 2 out of 85 FinTech Teams",
    links: {
      github: "https://github.com/extokened/khashra-ledger",
      liveUrl: "https://khashra.extokened.dev",
      demoVideo: "https://youtube.com/watch?v=sample3",
      devpost: "https://devpost.com/software/khashra",
    },
    featured: true,
  },
  {
    id: "agentic-ai-hack-2024",
    name: "Agentic AI Frontier Hackathon",
    organizer: "Devpost & Global AI Collective",
    date: "May 2024",
    year: 2024,
    duration: "48 Hours",
    location: "Global Virtual",
    award: "Best Autonomous Agent Architecture",
    awardType: "special_track",
    badgeLabel: "⚡ Best Agent Architecture",
    projectTitle: "OmniScrape AI: Autonomous Web Reasoning Agent",
    tagline: "Multi-agent swarm that navigates dynamic web interfaces, handles CAPTCHAs, and compiles structured datasets on demand.",
    description:
      "Constructed a hierarchical agent swarm utilizing browser automation and vision models to parse arbitrary websites into validated JSON schemas, automatically self-healing when DOM trees change.",
    highlights: [
      "Top-scoring submission in the Agentic Workflows track",
      "Engineered automated recursive DOM reflection loop",
      "Processed 1500+ dynamic web pages during live judging evaluation without hallucination",
    ],
    techStack: ["TypeScript", "Playwright", "Claude 3.5 Sonnet", "Node.js", "Tailwind CSS", "Redis"],
    standoutMetric: "Best Architecture Award",
    links: {
      github: "https://github.com/extokened/omniscrape-agent",
      liveUrl: "https://omniscrape.extokened.dev",
      devpost: "https://devpost.com/software/omniscrape-ai",
    },
    featured: true,
  },
  {
    id: "cyber-defense-hack-2024",
    name: "National Cyber Resilience Hackathon",
    organizer: "BGD e-GOV CIRT & University of Dhaka",
    date: "Feb 2024",
    year: 2024,
    duration: "24 Hours",
    location: "Dhaka, Bangladesh",
    award: "Top 3 Finalist & Special Security Commendation",
    awardType: "runner_up",
    badgeLabel: "🛡️ Top 3 & Security Honors",
    projectTitle: "SentinelZero: Real-time Supply Chain Vulnerability Watchdog",
    tagline: "Continuous automated scanning for malicious npm/pip dependencies and automated PR remediations.",
    description:
      "Created a security watchdog that analyzes open-source dependency pull requests in under 2 seconds, verifying package signatures, malicious maintainer takeovers, and typosquatting attacks.",
    highlights: [
      "Detected 14 known zero-day vulnerable payloads during live red-team shootout",
      "Automated deterministic AST parsing without executing unsafe code",
    ],
    techStack: ["Go", "Docker", "Next.js", "PostgreSQL", "GitHub API Webhooks"],
    standoutMetric: "Zero False-Positive Rate",
    links: {
      github: "https://github.com/extokened/sentinel-zero",
      liveUrl: "https://sentinel.extokened.dev",
    },
    featured: false,
  },
  {
    id: "hack-for-bengal-2023",
    name: "Hack For Bengal Inaugural Hackfest",
    organizer: "Bengal Tech Community",
    date: "Nov 2023",
    year: 2023,
    duration: "36 Hours",
    location: "Kolkata & Dhaka (Bilateral)",
    award: "Grand Champion (1st Place)",
    awardType: "champion",
    badgeLabel: "🏆 Grand Champion",
    projectTitle: "BhashaBondhu: Accessible Dialect Translation Bridge",
    tagline: "Cross-dialect Bengali speech translation for rural healthcare workers and tele-medicine.",
    description:
      "Our team's inaugural hackathon as 'Extokened'. Built a low-latency translation tool bridging regional Chittagonian, Sylheti, and Barisali dialects to standard colloquial Bengali so city doctors can accurately diagnose rural patients.",
    highlights: [
      "Extokened's first championship trophy as a united squad",
      "Over 98% comprehension score rated by native dialect speakers",
    ],
    techStack: ["Python", "PyTorch", "FastAPI", "React", "WebRTC"],
    standoutMetric: "Team Debut Championship",
    links: {
      github: "https://github.com/extokened/bhasha-bondhu",
      liveUrl: "https://bhasha.extokened.dev",
    },
    featured: false,
  },
];
