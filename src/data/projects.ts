export type ProjectStatus = "Shipped" | "Prototype" | "In Progress" | "Archived";
export type ProjectCategory = "AI & Agents" | "Full-Stack Web" | "Systems & DevTools" | "FinTech & Data";

export interface ProjectContributor {
  name: string;
  role: string;
  contribution: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  coverImage: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architectureNotes: string;
  challenges: string;
  learnings: string;
  outcome: string;
  contributors: ProjectContributor[];
  featured: boolean;
  publishedAt: string;
}

export const projects: Project[] = [
  {
    slug: "pulse-ai",
    title: "PulseAI",
    summary: "Autonomous multimodal clinical telemetry and critical vital anomaly triage for ICU wards.",
    description:
      "PulseAI connects hospital bedside sensor arrays with Gemini 2.0 to ingest continuous ECG waveforms, patient charts, and clinician notes in real-time. It detects early hemodynamic instability hours before conventional threshold alarms trigger, alerting on-duty physicians via prioritized clinical dispatch routes.",
    category: "AI & Agents",
    status: "Prototype",
    year: 2025,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    technologies: ["Next.js 15", "Google Gemini API", "FastAPI", "Python", "WebSockets", "TimescaleDB", "Tailwind CSS"],
    liveUrl: "https://pulse-ai.extokened.dev",
    sourceUrl: "https://github.com/extokened/pulse-ai",
    demoUrl: "https://youtube.com/watch?v=sample1",
    problem:
      "Hospital ICUs generate overwhelming quantities of sensor data, causing clinician alarm fatigue. Subtly deteriorating vital trends often go unnoticed until a patient suffers an acute cardiac or respiratory event, increasing mortality rates.",
    solution:
      "We engineered an end-to-end telemetry ingestion bridge that processes high-frequency vitals through a sliding-window feature extractor. These aggregated vectors feed a fine-tuned Gemini reasoning pipeline that outputs differential triage alerts, confidence scores, and recommended clinical interventions.",
    keyFeatures: [
      "Sub-200ms vital drop detection across 50Hz simulated sensor streams",
      "Multimodal patient chart synthesis correlating lab bloodwork with live vitals",
      "Automated clinical dispatch alerts with audible triage severity ranking",
      "Offline-first edge buffer to guarantee zero data loss during network hiccups",
    ],
    architectureNotes:
      "The system runs a decoupled architecture. High-frequency sensor streams push via WebSockets into an async Python ingestion service running on FastAPI. Ingested points write to TimescaleDB hyper-tables, while an anomaly detection worker issues structured prompts to the Gemini 2.0 API. The frontend is built on Next.js 15 App Router with real-time WebSocket client listeners.",
    challenges:
      "Balancing model inference latency against clinical accuracy during high-volume alert surges. We resolved this by implementing local edge filtering that only invokes deep LLM reasoning when vital variance exceeds statistical thresholds.",
    learnings:
      "Clinicians care far more about the explanation behind an alarm than a raw confidence score. Designing structured, readable triage justification cards doubled user trust during testing.",
    outcome:
      "Awarded Grand Champion (1st Place) out of 220+ global teams at the AI Horizon Global Hackathon 2025. Evaluated with 99.4% precision on standard synthetic ECG arrhythmia benchmarks.",
    contributors: [
      { name: "Sobuj Ahmed", role: "Full-Stack Architect", contribution: "Core WebSocket streaming pipeline, Next.js dashboard, and TimescaleDB data layer." },
      { name: "Abrar Hasan", role: "AI Specialist", contribution: "Gemini 2.0 prompt orchestration, multimodal ingestion, and validation benchmarks." },
      { name: "Tanvir Rahman", role: "Systems Engineer", contribution: "Async edge buffer, rate-limiting queues, and deployment infrastructure." },
      { name: "Nafisa Tabassum", role: "UI/UX Designer", contribution: "Clinical triage UI design, alert hierarchy, and accessibility audit." },
    ],
    featured: true,
    publishedAt: "2025-01-20",
  },
  {
    slug: "gridsync",
    title: "GridSync",
    summary: "Dynamic edge-vision traffic signal synchronization and emergency vehicle green-wave corridor.",
    description:
      "GridSync addresses severe urban traffic congestion through decentralized intersection cameras and adaptive signal timing. Using YOLOv9 edge vision, it detects emergency vehicle beacons and queue densities, dynamically clearing arterial corridors without central dispatch latency.",
    category: "Full-Stack Web",
    status: "Shipped",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&auto=format&fit=crop&q=80",
    technologies: ["React 19", "FastAPI", "YOLOv9", "OpenCV", "Mapbox GL", "PostgreSQL", "MQTT"],
    liveUrl: "https://gridsync.extokened.dev",
    sourceUrl: "https://github.com/extokened/gridsync-traffic",
    demoUrl: "https://youtube.com/watch?v=sample2",
    problem:
      "Urban traffic signals in developing metropolises rely on rigid static timers. Ambulances frequently remain stranded in deadlocks, losing critical minutes during patient transit.",
    solution:
      "GridSync connects lightweight camera sensors with an edge computer vision model that measures real-time lane density and listens for emergency vehicle sirens. It calculates the optimal signal duration and establishes a preemptive 'green wave' along the vehicle's trajectory.",
    keyFeatures: [
      "Real-time vehicle counting across 8 simultaneous traffic lanes",
      "Automated acoustic and visual emergency vehicle override triggers",
      "Interactive 3D intersection digital twin built with Mapbox GL",
      "Decentralized peer-to-peer intersection synchronization over MQTT",
    ],
    architectureNotes:
      "Edge devices run lightweight YOLOv9 model inference. Processed vehicle counts and siren signals publish to an MQTT broker. A central coordination backend aggregates intersection states and pushes signal overrides to physical controllers and the Next.js visualizer.",
    challenges:
      "Handling edge camera latency and video compression under constrained bandwidth conditions during intense field tests.",
    learnings:
      "Municipal transit systems require absolute fail-safe defaults. If edge compute loses connectivity, intersections must revert seamlessly to standard safety cycle timers.",
    outcome:
      "Won 1st Place (Smart City Track) at National CodeStorm 2024. Simulation tests verified a 41% emergency transit delay reduction along Dhaka arterial corridors.",
    contributors: [
      { name: "Sobuj Ahmed", role: "Full-Stack Lead", contribution: "Mapbox command center UI, real-time vehicle heatmap integration, and MQTT listeners." },
      { name: "Abrar Hasan", role: "Computer Vision", contribution: "YOLOv9 vehicle classification pipeline and siren audio frequency detection." },
      { name: "Tanvir Rahman", role: "Backend Architect", contribution: "P2P intersection sync protocol and PostgreSQL spatial indexing." },
      { name: "Nafisa Tabassum", role: "Product Designer", contribution: "Hardware enclosure prototyping and municipal command dashboard UX." },
    ],
    featured: true,
    publishedAt: "2024-10-15",
  },
  {
    slug: "khashra",
    title: "Khashra",
    summary: "Voice-first vernacular Bangla ledger and alternative credit scoring for unbanked micro-merchants.",
    description:
      "Khashra turns casual spoken Bangla transactions into structured bookkeeping records. Street merchants and small grocers simply speak their credit sales and customer dues into their phones; the platform logs the entry, sends customer SMS receipts, and builds a verified alternative credit profile.",
    category: "FinTech & Data",
    status: "Prototype",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    technologies: ["Next.js", "Whisper AI", "FastAPI", "Supabase", "IndexedDB PWA", "Tailwind CSS"],
    liveUrl: "https://khashra.extokened.dev",
    sourceUrl: "https://github.com/extokened/khashra-ledger",
    demoUrl: "https://youtube.com/watch?v=sample3",
    problem:
      "Over 70% of street vendors in Bangladesh operate entirely on paper or informal memory. Because they lack formal bookkeeping, commercial banks cannot verify their revenue, leaving them vulnerable to predatory loan sharks.",
    solution:
      "An offline-first voice ledger progressive web app (PWA). Shopkeepers speak naturally in colloquial Bangla: 'Rahim took 2 kg rice on credit, 160 taka.' Khashra parses the intent, logs the debit, and calculates an algorithmic creditworthiness rating over time.",
    keyFeatures: [
      "Vernacular Bangla speech recognition resilient to bustling bazaar background noise",
      "Automated SMS payment reminders dispatched in Bangla script",
      "Offline-first client architecture saving entries to IndexedDB when connectivity drops",
      "Exportable merchant credit report accepted by microfinance institutions",
    ],
    architectureNotes:
      "Audio inputs stream to a lightweight Whisper AI service hosted on FastAPI. Intent slot-filling extracts customer name, product, and monetary amounts. All transactions sync to Supabase when online, using a deterministic reconciliation engine.",
    challenges:
      "Processing colloquial regional dialects and noisy outdoor marketplace environments with standard STT models.",
    learnings:
      "Accessibility in financial products is cultural: text-heavy forms fail with non-literate merchants, whereas voice interfaces with audio confirmations achieved immediate adoption.",
    outcome:
      "Awarded 1st Runner Up (2nd Place) out of 85 teams at FinTech Disrupt Sprint 2024. Praised by banking executives for direct grassroots financial inclusion.",
    contributors: [
      { name: "Sobuj Ahmed", role: "Lead Architect", contribution: "Offline-first PWA sync architecture, IndexedDB cache, and Supabase security rules." },
      { name: "Abrar Hasan", role: "AI Engineer", contribution: "Whisper fine-tuning on regional Bangla marketplace audio and entity extraction." },
      { name: "Tanvir Rahman", role: "Backend Engineer", contribution: "SMS gateway integrations and alternative credit scoring algorithm." },
      { name: "Nafisa Tabassum", role: "UX Designer", contribution: "High-contrast visual design for direct sunlight use and voice feedback cues." },
    ],
    featured: true,
    publishedAt: "2024-07-28",
  },
  {
    slug: "tokenkit-cli",
    title: "TokenKit CLI",
    summary: "Production-ready 60-second hackathon boilerplate generator for rapid 0-to-1 prototype deployment.",
    description:
      "TokenKit is Extokened's internal battle-tested CLI utility. It provisions a full-stack Next.js, FastAPI, PostgreSQL, and Auth codebase in under 60 seconds, pre-configured with client SDKs for Google Gemini, OpenAI, and automated Vercel deployment hooks.",
    category: "Systems & DevTools",
    status: "Shipped",
    year: 2024,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    technologies: ["Go (Golang)", "Cobra", "Next.js 15", "TypeScript", "Docker", "Vercel API"],
    liveUrl: "https://tokenkit.extokened.dev",
    sourceUrl: "https://github.com/extokened/tokenkit-cli",
    problem:
      "Hackathon teams routinely waste the first 2–4 hours setting up TypeScript configs, Tailwind styles, Docker files, and API clients rather than validating the core problem statement.",
    solution:
      "A compiled binary CLI written in Go that interactively asks for feature flags and instantly clones, configures, and deploys a clean repository with zero configuration fatigue.",
    keyFeatures: [
      "Interactive terminal selection for AI providers, databases, and styling presets",
      "Automated repository initialization and secret key generation",
      "Integrated CI/CD workflow ready for Vercel and Railway deployments",
      "Over 800+ community developers actively utilizing the templates",
    ],
    architectureNotes:
      "Single static Go binary built with Cobra and Bubbletea. Embeds template files into Go runtime binaries for instant offline project generation without git clone network delays.",
    challenges:
      "Maintaining version compatibility across rapidly evolving Next.js and Tailwind releases.",
    learnings:
      "Developer tools must be fast and quiet: zero extraneous prompts and reliable exit codes make developers return repeatedly.",
    outcome:
      "Adopted by multiple university coding clubs. Saved an estimated cumulative 3,000+ developer hours during regional hackathon sprints.",
    contributors: [
      { name: "Tanvir Rahman", role: "Systems Lead", contribution: "Go CLI binary, Cobra command structure, and template compilation." },
      { name: "Sobuj Ahmed", role: "Full-Stack Architect", contribution: "Next.js 15 starter templates, API boilerplate, and deployment scripts." },
      { name: "Abrar Hasan", role: "AI Integrations", contribution: "Pre-wired Gemini and OpenAI client utilities." },
      { name: "Nafisa Tabassum", role: "Designer", contribution: "Terminal ASCII aesthetics and documentation portal." },
    ],
    featured: false,
    publishedAt: "2024-03-10",
  },
];
