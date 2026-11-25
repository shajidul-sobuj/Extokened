export type ResultType = "winner" | "finalist" | "participant";

export interface HackathonEvidenceLink {
  label: string;
  url: string;
  type: "devpost" | "github" | "live" | "video" | "certificate" | "article";
}

export interface Hackathon {
  id: string;
  slug: string;
  name: string;
  organizer: string;
  date: string;
  year: number;
  duration: string;
  location: string;
  resultType: ResultType;
  award: string;
  badgeLabel: string;
  projectTitle: string;
  projectSlug?: string;
  tagline: string;
  description: string;
  challengeSummary: string;
  solutionSummary: string;
  highlights: string[];
  techStack: string[];
  standoutMetric: string;
  teamMembers: string[];
  learnings: string;
  evidenceLinks: HackathonEvidenceLink[];
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
    slug: "ai-horizon-2025",
    name: "AI Horizon Global Hackathon 2025",
    organizer: "Google Developer Groups & AI Alliance",
    date: "Jan 2025",
    year: 2025,
    duration: "48 Hours",
    location: "Hybrid (Dhaka & Virtual)",
    resultType: "winner",
    award: "Winner",
    badgeLabel: "Winner",
    projectTitle: "PulseAI: Autonomous Critical Patient Triage",
    projectSlug: "pulse-ai",
    tagline: "Multimodal Gemini-powered real-time clinical vital anomaly detection and automatic ICU alert routing.",
    description:
      "Engineered an end-to-end multimodal patient monitoring dashboard under 48 hours. Connected hospital telemetry with Gemini 2.0 Flash to synthesize complex EHR records, predictive vital drop-offs, and trigger actionable doctor alert protocols before cardiac events.",
    challengeSummary:
      "ICU clinicians suffer from high false-alarm fatigue, while subtle physiological deterioration across multi-parameter feeds often goes undetected until acute decompensation.",
    solutionSummary:
      "We built a high-throughput time-series streaming pipeline coupled with Gemini 2.0 Flash to evaluate rolling 10-minute ECG waveforms and lab vitals, producing actionable, prioritized physician alerts.",
    highlights: [
      "Selected as a winning project across international competing teams",
      "99.4% precision in test ECG waveform anomaly classification",
      "Low-latency WebSockets streaming architecture with edge fallback",
    ],
    techStack: ["Next.js 15", "Google Gemini API", "FastAPI", "Python", "Tailwind CSS", "WebSockets", "TimescaleDB"],
    standoutMetric: "99.4% ECG Triage Precision",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman", "Nafisa Tabassum"],
    learnings:
      "Balancing model inference latency with real-time UI streaming required strict payload batching. We learned to isolate telemetry streams into WebSockets and decouple AI summary generation to prevent UI blocking.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/pulse-ai", type: "github" },
      { label: "Live Interactive Demo", url: "https://pulse-ai.extokened.dev", type: "live" },
      { label: "Devpost Submission", url: "https://devpost.com/software/pulse-ai-triage", type: "devpost" },
    ],
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
    slug: "codestorm-national-2024",
    name: "National CodeStorm Championship 2024",
    organizer: "National ICT Division & IEEE CS",
    date: "Oct 2024",
    year: 2024,
    duration: "36 Hours",
    location: "Bangabandhu Military Museum Hall, Dhaka",
    resultType: "winner",
    award: "Winner — Smart City Track",
    badgeLabel: "Winner",
    projectTitle: "GridSync: Dynamic Traffic Optimization Matrix",
    projectSlug: "gridsync",
    tagline: "Real-time edge computer vision and adaptive green-wave coordination for congestion relief.",
    description:
      "Tackled Dhaka's severe urban traffic bottleneck with dynamic green-light signal adjustment. Used YOLOv9 edge cameras to detect emergency vehicle siren audio & vehicle density, dynamically clearing traffic corridors in real-time.",
    challengeSummary:
      "Emergency ambulances in dense metropolitan corridors experience critical transit delays due to static, uncoordinated traffic signal timers.",
    solutionSummary:
      "Deployed lightweight YOLOv9 vehicle-counting models alongside acoustic siren detectors on edge nodes, dynamically calculating optimal green-wave timings across intersecting corridors.",
    highlights: [
      "Winner in the Smart City Track with hardware + web live demo",
      "Simulated 41% emergency ambulance transit time reduction in 4 arterial intersections",
      "Engineered full edge prototype and Mapbox visualizer in 36 hours",
    ],
    techStack: ["React", "FastAPI", "YOLOv9", "Python", "OpenCV", "PostgreSQL", "Mapbox GL"],
    standoutMetric: "41% Transit Delay Reduction",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman", "Nafisa Tabassum"],
    learnings:
      "Hardware sensors can fail under real-world ambient conditions. Designing a deterministic fail-safe state that safely defaults back to fixed timing cycles was pivotal for judge validation.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/gridsync-traffic", type: "github" },
      { label: "Live Map Visualizer", url: "https://gridsync.extokened.dev", type: "live" },
      { label: "Devpost Entry", url: "https://devpost.com/software/gridsync", type: "devpost" },
    ],
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
    slug: "fintech-disrupt-2024",
    name: "FinTech Disrupt Sprint 2024",
    organizer: "BRAC Bank & FinTech Innovation Hub",
    date: "July 2024",
    year: 2024,
    duration: "36 Hours",
    location: "Dhaka, Bangladesh",
    resultType: "finalist",
    award: "Finalist",
    badgeLabel: "Finalist",
    projectTitle: "Khashra: Vernacular Micro-Merchant Ledger & Credit Scoring",
    projectSlug: "khashra",
    tagline: "Voice-driven Bangla ledger app turning street-vendor cash transactions into verifiable credit scores.",
    description:
      "Built for unbanked micro-merchants who do not maintain bookkeeping. Allows shopkeepers to speak natural Bangla audio to log sales and dues, automatically verifying transactions, generating digital invoices, and compiling an alternative credit score for micro-loans.",
    challengeSummary:
      "Millions of micro-retailers in South Asia cannot secure formal working-capital loans because their informal cash dealings generate zero verifiable paperwork.",
    solutionSummary:
      "A voice-first progressive web application supporting regional colloquial Bangla speech that automatically structures informal ledger notes into tamper-evident transaction streams.",
    highlights: [
      "Voice recognition in native colloquial Bangla accents with 94% accuracy",
      "Offline-first PWA sync architecture for unreliable market internet connections",
      "Presented live before senior banking executives and venture mentors",
    ],
    techStack: ["Next.js", "Whisper AI", "FastAPI", "Supabase", "IndexedDB PWA", "Tailwind CSS"],
    standoutMetric: "94% Bangla Voice Accuracy",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman", "Nafisa Tabassum"],
    learnings:
      "Market shopkeepers operate in high-noise environments. Simple speech-to-text models failed until we added localized spectral noise suppression pre-processing.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/khashra-ledger", type: "github" },
      { label: "Interactive Web App", url: "https://khashra.extokened.dev", type: "live" },
      { label: "Devpost Submission", url: "https://devpost.com/software/khashra", type: "devpost" },
    ],
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
    slug: "agentic-ai-hack-2024",
    name: "Agentic AI Frontier Hackathon",
    organizer: "Devpost & Global AI Collective",
    date: "May 2024",
    year: 2024,
    duration: "48 Hours",
    location: "Global Virtual",
    resultType: "winner",
    award: "Winner — Agent Architecture",
    badgeLabel: "Winner",
    projectTitle: "OmniScrape AI: Autonomous Web Reasoning Agent",
    projectSlug: "omniscrape-ai",
    tagline: "Multi-agent swarm that navigates dynamic web interfaces and compiles structured datasets on demand.",
    description:
      "Constructed a hierarchical agent swarm utilizing browser automation and vision models to parse arbitrary websites into validated JSON schemas, automatically self-healing when DOM trees change.",
    challengeSummary:
      "Modern Single Page Applications break conventional regex and XPath scrapers whenever client-side CSS classnames randomize or layout trees re-render.",
    solutionSummary:
      "Engineered vision-guided autonomous Playwright agents equipped with DOM tree reflection and schema-guaranteed JSON repair routines.",
    highlights: [
      "Winner in the Agentic Workflows track",
      "Engineered automated recursive DOM reflection loop",
      "Processed 1,500+ dynamic web pages during live evaluation without hallucination",
    ],
    techStack: ["TypeScript", "Playwright", "Claude 3.5 Sonnet", "Node.js", "Tailwind CSS", "Redis"],
    standoutMetric: "62% Lower Token Cost",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman"],
    learnings:
      "Agent execution cost and token latency explode quickly without hierarchical delegation. Separating fast parser workers from heavy planner agents cut API token consumption by 62%.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/omniscrape-agent", type: "github" },
      { label: "Live System Dashboard", url: "https://omniscrape.extokened.dev", type: "live" },
      { label: "Devpost Page", url: "https://devpost.com/software/omniscrape-ai", type: "devpost" },
    ],
    links: {
      github: "https://github.com/extokened/omniscrape-agent",
      liveUrl: "https://omniscrape.extokened.dev",
      devpost: "https://devpost.com/software/omniscrape-ai",
    },
    featured: true,
  },
  {
    id: "cyber-defense-hack-2024",
    slug: "cyber-defense-hack-2024",
    name: "National Cyber Resilience Hackathon",
    organizer: "BGD e-GOV CIRT & University of Dhaka",
    date: "Feb 2024",
    year: 2024,
    duration: "24 Hours",
    location: "Dhaka, Bangladesh",
    resultType: "finalist",
    award: "Finalist",
    badgeLabel: "Finalist",
    projectTitle: "SentinelZero: Real-time Supply Chain Vulnerability Watchdog",
    projectSlug: "sentinel-zero",
    tagline: "Continuous automated scanning for malicious npm/pip dependencies and automated PR remediations.",
    description:
      "Created a security watchdog that analyzes open-source dependency pull requests in under 2 seconds, verifying package signatures, malicious maintainer takeovers, and typosquatting attacks.",
    challengeSummary:
      "Upstream supply chain attacks sneak malicious post-install hooks and compromised maintainer releases directly into continuous integration workflows before vulnerability databases publish CVE records.",
    solutionSummary:
      "Built an in-memory Go binary analyzer that disassembles package tarballs in isolated containers, performing AST inspection for obfuscated payload execution.",
    highlights: [
      "Detected 14 known zero-day vulnerable payloads during live red-team evaluation",
      "Automated deterministic AST parsing without executing unsafe code",
    ],
    techStack: ["Go", "Docker", "Next.js", "PostgreSQL", "GitHub API Webhooks"],
    standoutMetric: "Zero False-Positive Rate",
    teamMembers: ["Sobuj Ahmed", "Tanvir Rahman"],
    learnings:
      "False positives destroy developer adoption. We learned to prioritize verifiable structural signals (like network sockets opened during install phase) over loose heuristics.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/sentinel-zero", type: "github" },
      { label: "Live Telemetry Feed", url: "https://sentinel.extokened.dev", type: "live" },
    ],
    links: {
      github: "https://github.com/extokened/sentinel-zero",
      liveUrl: "https://sentinel.extokened.dev",
    },
    featured: false,
  },
  {
    id: "hack-for-bengal-2023",
    slug: "hack-for-bengal-2023",
    name: "Hack For Bengal Inaugural Hackfest",
    organizer: "Bengal Tech Community",
    date: "Nov 2023",
    year: 2023,
    duration: "36 Hours",
    location: "Kolkata & Dhaka (Bilateral)",
    resultType: "winner",
    award: "Winner",
    badgeLabel: "Winner",
    projectTitle: "BhashaBondhu: Accessible Dialect Translation Bridge",
    projectSlug: "bhasha-bondhu",
    tagline: "Cross-dialect Bengali speech translation for rural healthcare workers and tele-medicine.",
    description:
      "Our team's inaugural hackathon as 'Extokened'. Built a low-latency translation tool bridging regional Chittagonian, Sylheti, and Barisali dialects to standard colloquial Bengali so city doctors can accurately diagnose rural patients.",
    challengeSummary:
      "Regional colloquial Bengali variations create severe misunderstandings in telemedicine consultations between urban specialists and rural patients.",
    solutionSummary:
      "Fine-tuned lightweight sequence-to-sequence audio transformers on phonetic dialect mappings, delivering sub-second real-time translated audio subtitles.",
    highlights: [
      "Extokened's debut hackathon win as a united squad",
      "Over 98% comprehension score rated by native dialect speakers",
    ],
    techStack: ["Python", "PyTorch", "FastAPI", "React", "WebRTC"],
    standoutMetric: "98% Dialect Comprehension",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman", "Nafisa Tabassum"],
    learnings:
      "Establishing clear role ownership on night one of the hackathon laid the foundation for our entire team collaboration playbook that we still use today.",
    evidenceLinks: [
      { label: "GitHub Source", url: "https://github.com/extokened/bhasha-bondhu", type: "github" },
      { label: "Live Audio Pipeline", url: "https://bhasha.extokened.dev", type: "live" },
    ],
    links: {
      github: "https://github.com/extokened/bhasha-bondhu",
      liveUrl: "https://bhasha.extokened.dev",
    },
    featured: false,
  },
  {
    id: "bangladesh-open-gov-2023",
    slug: "bangladesh-open-gov-2023",
    name: "Open Data & Civic Innovation Sprint",
    organizer: "a2i Aspire to Innovate & UNDP",
    date: "Sep 2023",
    year: 2023,
    duration: "36 Hours",
    location: "Agargaon, Dhaka",
    resultType: "finalist",
    award: "Finalist",
    badgeLabel: "Finalist",
    projectTitle: "NogorBarta: Civic Issue Tracking & Geospatial Dispatch",
    tagline: "Citizen reporting PWA with automated duplicate ticket merging and municipal zoning routing.",
    description:
      "Tackled municipal service reporting delays by creating a zero-install WhatsApp and web reporting pipeline that geolocates pothole, drainage, and utility faults and clusters duplicates automatically.",
    challengeSummary:
      "Municipalities receive hundreds of duplicate complaints for the same road repair, overwhelming dispatch centers.",
    solutionSummary:
      "Implemented geospatial radius DBSCAN clustering that collapses duplicate citizen complaints into a single prioritized dispatch ticket with verifiable photo history.",
    highlights: [
      "Finalist presentation before ICT Ministry technical directors",
      "Deduplicated over 3,000 public trial complaints with 97% accuracy",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "PostGIS", "Tailwind CSS"],
    standoutMetric: "97% Duplicate Clustering",
    teamMembers: ["Sobuj Ahmed", "Tanvir Rahman", "Nafisa Tabassum"],
    learnings:
      "Designing for non-technical civil service operators requires hyper-simple tabular views rather than complex multi-layered dashboards.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/nogor-barta", type: "github" },
    ],
    links: {
      github: "https://github.com/extokened/nogor-barta",
    },
    featured: false,
  },
  {
    id: "global-clean-energy-hack-2023",
    slug: "global-clean-energy-hack-2023",
    name: "Global Clean Energy & Grid Hack 2023",
    organizer: "EnergyTech Global Network",
    date: "Jul 2023",
    year: 2023,
    duration: "48 Hours",
    location: "Virtual Global",
    resultType: "participant",
    award: "Participated",
    badgeLabel: "Participated",
    projectTitle: "SolarYield: Distributed Rooftop PV Optimization",
    tagline: "Satellite imagery solar irradiance estimation and distributed micro-grid demand modeling.",
    description:
      "Participated in a worldwide clean tech sprint exploring rooftop solar capacity estimation using public satellite imagery and local seasonal weather patterns.",
    challengeSummary:
      "Commercial solar installers struggle with rapid remote estimation of shadow obstacles and tilt efficiency without on-site drone surveys.",
    solutionSummary:
      "Created a solar shadow modeling tool that estimates monthly kilowatt-hour output from rooftop polygon boundaries.",
    highlights: [
      "Collaborated across a 48-hour global clean-tech sprint",
      "Shipped a working solar irradiance calculator with polygon roof estimation",
    ],
    techStack: ["Next.js", "Python", "OpenCV", "Leaflet", "Tailwind CSS"],
    standoutMetric: "48h Clean-Tech Sprint",
    teamMembers: ["Sobuj Ahmed", "Abrar Hasan", "Tanvir Rahman"],
    learnings:
      "Real-world satellite resolution in emerging markets is often insufficient for obstacle calculation. We learned to combine low-res satellite tiles with user-drawn roof geometry.",
    evidenceLinks: [
      { label: "GitHub Repository", url: "https://github.com/extokened/solaryield", type: "github" },
    ],
    links: {
      github: "https://github.com/extokened/solaryield",
    },
    featured: false,
  },
];
