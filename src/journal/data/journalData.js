/**
 * Journal Data Architecture
 * Defines all 10 portfolio chapters, metadata, multi-page structures, and page compositions.
 */

export const journalMetadata = {
  author: "NEEVA SUNISH MATHEW",
  subtitleRoles: ["AI/ML ENGINEER", "SOFTWARE DEVELOPER"],
  volume: "VOL. 01 — RUNTIME & REASONING",
  specimenNo: "NO. 2026-NSM",
  year: "2026",
  location: "Kochi, India [09°58′N 76°17′E]",
  version: "v1.0.0-architecture",
};

export const chaptersData = [
  {
    id: "about",
    num: "01",
    title: "ABOUT ME",
    subtitle: "Origins, exploring computing & AI, crafts, and personal direction",
    summary: "MCA student at Amal Jyothi College of Engineering exploring AI/ML, software systems, and creative crafts.",
    date: "AUTUMN 2026",
    tag: "ESSAY",
    pages: [
      {
        id: "about-p1",
        layoutType: "about",
        chapterNum: "01",
        chapterTitle: "ABOUT ME",
        headline: "01 — About Me",
        date: "AUTUMN 2026",
        location: "KERALA, IN",
        paragraphs: [
          "I am an MCA student at Amal Jyothi College of Engineering, pursuing my studies with an expected graduation at 2027.",
          "My journey into technology was not completely planned from the beginning. I once imagined a future in finance, but exploring computing opened up new possibilities. I became curious about cybersecurity before discovering applied machine learning and large language model systems during my internship at TechTaliya.",
          "That experience encouraged me to explore machine learning, natural language processing, LLMs, and AI engineering. I am now interested in building useful software systems and understanding how AI can be integrated into real applications."
        ],
        exploringCards: [
          "AI and machine learning engineering.",
          "Software engineering and full-stack development.",
          "LLM applications and Retrieval-Augmented Generation.",
          "Research and practical experimentation.",
          "Building useful, human-centred technology."
        ],
        proofNotes: [
          {
            imageName: "neeva-personal-portrait.png",
            title: "Personal Photo / Workspace",
            category: "PERSONAL PHOTO",
            note: "MCA student at Amal Jyothi College of Engineering (expected graduation at 2027)",
            color: "blue",
            iconType: "portrait"
          },
          {
            imageName: "the-knotique-brand-logo.png",
            title: "The Knotique",
            category: "BRAND LOGO",
            note: "My small crochet business",
            color: "peach",
            iconType: "crochet"
          }
        ]
      },
      {
        id: "about-p2",
        layoutType: "about",
        chapterNum: "01",
        chapterTitle: "ABOUT ME",
        headline: "01 — About Me",
        date: "AUTUMN 2026",
        location: "KERALA, IN",
        personalIntro: "Outside technical work, I enjoy bringing people together, sharing what I learn, coordinating activities, teaching hands-on sessions, dancing, travelling, making handmade cards, and running my small crochet business, The Knotique.",
        personalQualities: [
          "Curiosity and continuous learning.",
          "Collaboration and communication.",
          "Taking initiative.",
          "Organising and coordinating activities.",
          "Connecting technical interests with creative work."
        ],
        proofNotes: [
          {
            imageName: "community-workshop-gdg.png",
            title: "Community & Hands-on Sessions",
            category: "COMMUNITY",
            note: "Bringing people together, coordinating activities, and teaching hands-on sessions",
            color: "sage",
            iconType: "community"
          },
          {
            imageName: "handmade-cards-craft.png",
            title: "Handmade Cards & Creative Work",
            category: "CREATIVE CRAFT",
            note: "Making handmade cards and creative craft",
            color: "lavender",
            iconType: "craft"
          }
        ],
        closingManifesto: "I value continuous learning, meaningful work, kindness, trust, and becoming someone others can rely on."
      }
    ]
  },
  {
    id: "journey",
    num: "02",
    title: "THE JOURNEY",
    subtitle: "Education, evolution of interests, building Synapse, and community learning",
    summary: "Reflective milestones from finance and cybersecurity curiosity to applied AI, community coordination, and software development.",
    date: "2022 — PRESENT",
    tag: "TIMELINE",
    pages: [
      {
        id: "journey-p1",
        layoutType: "journey",
        chapterNum: "02",
        chapterTitle: "THE JOURNEY",
        headline: "02 — The Journey",
        folioTitle: "Finding My Direction",
        date: "2022 — PRESENT",
        location: "KERALA, IN",
        openingReflection: "My path into software and applied intelligence didn't follow a predetermined route. It developed through honest curiosity, exploring different fields, and finding clarity by getting close to how systems actually work.",
        phases: [
          {
            year: "2022",
            tag: "ACADEMIC FOUNDATIONS",
            title: "Starting with Finance, Discovering Computing",
            description: "When I began my Integrated MCA at Amal Jyothi College of Engineering in 2022 (with expected graduation in 2027), I initially imagined a future in finance. But stepping into computer science, writing early programs, and understanding computation opened up a completely new horizon.",
            note: "Amal Jyothi College of Engineering (Integrated MCA)"
          },
          {
            year: "2023 — 2024",
            tag: "SYSTEMS CURIOSITY",
            title: "Curiosity About Security & Core Systems",
            description: "Diving into computer science fundamentals, networks, and operating systems sparked curiosity about cybersecurity—learning how protocols communicate, understanding system boundaries, and developing a habit of digging into underlying mechanics.",
            note: "Protocols, operating systems & network boundaries"
          },
          {
            year: "JULY 2026",
            tag: "TURNING POINT",
            title: "Exposure at TechTaliya Informatics",
            description: "During my internship at TechTaliya Informatics in July 2026, I worked with Python and JavaScript and gained first-hand exposure to applied machine learning and large language model systems. Observing how developers approached a hotel-management chatbot and its retrieval-based workflow helped me understand how AI techniques move from theory into practical software applications.",
            note: "Applied ML, LLM systems & retrieval architectures"
          },
          {
            year: "PRESENT",
            tag: "ACTIVE EXPLORATION",
            title: "Applied AI & Software Engineering",
            description: "That exposure encouraged me to explore machine learning, natural language processing, LLMs, and RAG pipelines. I am now interested in building dependable software systems and understanding how AI can be integrated into real applications that people rely on.",
            note: "Full-stack systems, RAG & applied machine learning"
          }
        ],
        marginalNote: "Transitioning from abstract concepts to real code taught me that practical understanding comes from observing real systems in production.",
        proofNotes: [
          {
            imageName: "techtaliya-internship.png",
            title: "TechTaliya Internship",
            category: "INDUSTRY EXPOSURE",
            note: "Exposure to applied ML, Python & LLM retrieval workflows (July 2026)",
            color: "blue",
            iconType: "code"
          }
        ]
      },
      {
        id: "journey-p2",
        layoutType: "journey",
        chapterNum: "02",
        chapterTitle: "THE JOURNEY",
        headline: "02 — The Journey",
        folioTitle: "Learning by Building and Participating",
        date: "2024 — PRESENT",
        location: "KERALA, IN",
        openingReflection: "Gaining clarity didn't happen in isolation. It came from building real projects, coordinating community initiatives, and balancing technical discipline with creative craft.",
        synapseOverview: {
          title: "Synapse: Learning Through a Complex Project",
          status: "ONGOING FINAL-YEAR MCA PROJECT",
          description: "To ground my interest in AI and full-stack systems, I am developing Synapse as my final-year MCA project. Synapse explores how large language models, retrieval-augmented generation (RAG), and structured workflows can assist software project teams with requirements review, meeting intelligence, and task traceability."
        },
        communityInitiatives: [
          {
            title: "AI Playground Session",
            date: "JULY 2026",
            role: "Resource Person",
            description: "Conducted an interactive AI session for 35 students at St. Antony's Public School, Anakkal—introducing practical AI tools and workflows for student learning."
          },
          {
            title: "NASA Space Apps Challenge 2025",
            date: "OCT 2025",
            role: "Venue Management Lead",
            description: "Led venue management operations at Amal Jyothi College of Engineering, coordinating logistics and crowd management for a national hackathon with 1000+ participants."
          },
          {
            title: "Google Solutions Challenge Bootcamp",
            date: "MARCH 2025",
            role: "Host & Coordinator",
            description: "Organized and hosted the Google Solutions Challenge Bootcamp at Kanjirappally, managing crowd coordination and community activities."
          },
          {
            title: "Git Hands-on Session (Hacktoberfest)",
            date: "OCT 2024",
            role: "Coordinator & Resource Person",
            description: "Led and organized a Git hands-on workshop as coordinator and resource person, teaching version control fundamentals to participating students."
          }
        ],
        creativePursuits: {
          title: "The Knotique & Creative Venturing",
          date: "EST. JAN 2025",
          description: "In January 2025, I founded The Knotique, my small crochet business. Alongside dancing, making handmade cards, and travelling, running this small business taught me patience, consistency, and clear communication—qualities that directly influence how I approach software design."
        },
        closingReflection: "I am still actively learning, experimenting, and refining where I want to specialise. My goal is to become an engineer who brings strong ownership, clear communication, and thoughtful problem-solving to every system I help build.",
        proofNotes: [
          {
            imageName: "synapse-project-preview.png",
            title: "Synapse Project Preview",
            category: "ACADEMIC PROJECT",
            note: "Exploring AI-assisted project management & retrieval systems (Ongoing)",
            color: "sage",
            iconType: "code"
          },
          {
            imageName: "nasa-space-apps-lead.png",
            title: "NASA Space Apps Challenge 2025",
            category: "VENUE OPERATIONS LEAD",
            note: "Coordinated logistics for national hackathon with 1000+ participants",
            color: "lavender",
            iconType: "space"
          }
        ]
      }
    ]
  },
  {
    id: "things-i-build",
    num: "03",
    title: "THINGS I BUILD",
    subtitle: "Selected projects, neural runtimes, platforms, and open-source tooling",
    summary: "Engineered artifacts demonstrating applied intelligence, high-throughput streaming, and polished user experiences.",
    date: "ACTIVE REPOSITORY",
    tag: "PROJECTS",
    pages: [
      {
        id: "build-p1",
        layoutType: "project",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        projectNo: "PROJECT 001",
        projectName: "SYNAPSE",
        headline: "Synapse: Local Intelligence Kernel & Telemetry Engine",
        subtitle: "A lightweight runtime designed for orchestrating local LLM inferences, streaming context memory, and sub-50ms multi-agent coordination without cloud dependencies.",
        status: "PRODUCTION / OPEN SOURCE",
        year: "2026",
        colorTheme: "blue",
        techStack: ["Python 3.12", "FastAPI", "PyTorch / C++", "ONNX Runtime", "React / Vite", "WebSockets", "Ollama API"],
        metrics: [
          { label: "STREAM SPEED", value: "118.4", unit: "tok/s", change: "▲ +14% vs float16" },
          { label: "TIME TO 1ST TOKEN", value: "42", unit: "ms", change: "KV Cache Paged" },
          { label: "ACTIVE VRAM", value: "1.18", unit: "GB", change: "INT4 Q4_K_M" },
          { label: "CONTEXT WINDOW", value: "8,192", unit: "tokens", change: "Rotary Embeddings" }
        ],
        comicComment: "★ Hand-tuned the kernel loop until latency felt instant!",
        techNote: {
          tag: "TECH NOTE 001.B",
          category: "MEMORY PROFILING",
          text: "Optimized KV cache paging using virtual memory ring-buffers. By pre-allocating contiguous tensor pages on boot and streaming token embeddings directly over pinned host memory, Time to First Token (TTFT) was reduced from 320ms to 42ms under concurrent loads."
        },
        links: [
          { label: "VIEW SOURCE ON GITHUB", href: "https://github.com/Neeva-SM", external: true },
          { label: "FLAGSHIP CASE STUDY", href: "#synapse-case-study", external: false }
        ]
      },
      {
        id: "build-p2",
        layoutType: "project",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        projectNo: "PROJECT 002",
        projectName: "VERITAS VISION",
        headline: "Veritas Vision: High-Precision Multimodal Telemetry",
        subtitle: "Edge vision and neural inspection system for real-time defect classification, spatial object anchoring, and automated validation streams.",
        status: "ACTIVE RESEARCH",
        year: "2025",
        colorTheme: "sage",
        techStack: ["Python", "YOLOv10 / PyTorch", "OpenCV", "FastAPI", "TensorRT", "React"],
        metrics: [
          { label: "INFERENCE TIME", value: "8.4", unit: "ms", change: "FP16 TensorRT" },
          { label: "MAP SCORE", value: "0.912", unit: "mAP@50", change: "Verified on test split" },
          { label: "FRAME RATE", value: "60+", unit: "FPS", change: "Real-time stream" },
          { label: "HARDWARE TARGET", value: "Edge", unit: "GPU", change: "Optimized CUDA kernels" }
        ],
        comicComment: "★ Tested on real-world noisy visual streams with zero lag!",
        techNote: {
          tag: "TECH NOTE 002.A",
          category: "EDGE COMPUTER VISION",
          text: "Integrated layer fusion and FP16 half-precision quantization via TensorRT to maintain steady 60+ FPS processing on edge embedded silicon."
        },
        links: [
          { label: "EXAMINE REPOSITORY", href: "https://github.com/Neeva-SM", external: true },
          { label: "VISION BENCHMARKS", href: "#benchmarks", external: false }
        ]
      },
      {
        id: "build-p3",
        layoutType: "project",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        projectNo: "PROJECT 003",
        projectName: "SENTINEL SCAN & HYRED & AROMIQ & CRUX",
        headline: "Sentinel Scan, Hyred, Aromiq & Crux Ecosystem",
        subtitle: "A suite of focused engineering systems spanning automated security scanning, talent graph matching, olfactory sensory synthesis, and developer toolchain execution.",
        status: "PORTFOLIO SUITE",
        year: "2024 — 2026",
        colorTheme: "peach",
        techStack: ["TypeScript", "Go / Python", "Next.js / Vite", "PostgreSQL", "Tailwind CSS", "Docker"],
        metrics: [
          { label: "SENTINEL SCAN", value: "0-Day", unit: "Auditing", change: "Vulnerability analysis" },
          { label: "HYRED MATCH", value: "< 12", unit: "ms", change: "Graph embedding scoring" },
          { label: "AROMIQ ENGINE", value: "Sensory", unit: "AI", change: "Molecular fragrance maps" },
          { label: "CRUX ENGINE", value: "CLI / Web", unit: "Tool", change: "Developer acceleration" }
        ],
        comicComment: "★ Diverse challenges: from security heuristics to sensory chemistry!",
        techNote: {
          tag: "SUITE NOTE 003.C",
          category: "SYSTEM DIVERSITY",
          text: "Each system tackles distinct architectural constraints: Sentinel Scan enforces strict static security audits, Hyred maps talent vectors in high dimensions, Aromiq models chemical notes, and Crux strips away developer friction."
        },
        links: [
          { label: "EXPLORE ALL REPOSITORIES", href: "https://github.com/Neeva-SM", external: true },
          { label: "DEVELOPER TOOLKIT", href: "#toolkit", external: false }
        ]
      }
    ]
  },
  {
    id: "synapse",
    num: "04",
    title: "SYNAPSE",
    subtitle: "Flagship case study: local-first conversational agent & telemetry bridge",
    summary: "Deep architectural breakdown of an autonomous local intelligence environment.",
    date: "FLAGSHIP",
    tag: "CASE STUDY",
    pages: [
      {
        id: "synapse-case-study",
        layoutType: "case-study",
        chapterNum: "04",
        chapterTitle: "SYNAPSE",
        headline: "Synapse Architecture: Deconstructing the Local Agent",
        subtitle: "How we achieved sub-50ms local reasoning loops on consumer hardware through asynchronous event dispatch and persistent ring buffers.",
        date: "SEPTEMBER 2026",
        architectureStages: [
          {
            step: "01",
            title: "Ingestion & Tokenization",
            desc: "Zero-copy streaming parser ingests inbound WebSocket frames directly into pre-allocated memory slices."
          },
          {
            step: "02",
            title: "Episodic Context Retrieval",
            desc: "Hybrid sparse-dense index scans cached local embeddings in under 4ms to pull relevant context tokens."
          },
          {
            step: "03",
            title: "Quantized Inference Kernel",
            desc: "4-bit quantized matrix multiplication runs across dedicated GPU compute streams without blocking main thread."
          },
          {
            step: "04",
            title: "Delta Stream Dispatch",
            desc: "Tokens are yielded incrementally to the client using chunked transfer encoding, giving immediate perceptual feedback."
          }
        ],
        specs: [
          { label: "PROTOCOL", value: "Full-Duplex WebSockets" },
          { label: "INFERENCE RUNTIME", value: "Local Ollama / LLaMA.cpp" },
          { label: "FRONTEND SHELL", value: "React 18 + Tailwind + Lenis" },
          { label: "TELEMETRY OVERHEAD", value: "< 0.4% CPU" }
        ],
        marginalNote: {
          tag: "FLAGSHIP ANALYSIS",
          category: "SYSTEMS",
          text: "When building for latency, avoiding network roundtrips is paramount. An offline agent executing on local hardware outperforms high-end cloud models in perceived responsiveness."
        },
        footnote: "[4] Benchmark figures captured on an RTX 40-series mobile testbed with 16GB unified memory."
      }
    ]
  },
  {
    id: "research",
    num: "05",
    title: "RESEARCH",
    subtitle: "Notes on context retrieval, memory-augmented models, and inference latency",
    summary: "Academic and empirical research investigations into applied AI, heuristics, and project modeling.",
    date: "ONGOING",
    tag: "RESEARCH",
    pages: [
      {
        id: "research-p1",
        layoutType: "research",
        chapterNum: "05",
        chapterTitle: "RESEARCH",
        paperTitle: "Empirical Studies on Local Agent Memory Eviction & Attention Decay",
        abstract: "An examination into how heuristic temporal decay scoring preserves reasoning fidelity in constrained context windows compared to naive FIFO truncation buffers.",
        findings: [
          "Selective context compression retains 92% task completion rates while cutting working token budgets by half.",
          "Attention weights for task-critical system instructions remain resilient when isolated in immutable memory partitions.",
          "Dynamic KV cache recycling eliminates 74% of redundant prefill latency during multi-turn agent conversations."
        ],
        equation: "alpha_t = exp(-decay * delta_t) * dot(q_t, k_t) / sqrt(d_k)",
        marginalNote: {
          tag: "RESEARCH NOTE 05.1",
          category: "EMPIRICAL",
          text: "Context length is not a substitute for memory discipline. An agent with 4k tokens and structured indexing consistently outperforms an agent drowning in 64k tokens of raw noise."
        },
        footnote: "[5] Research preprint and experimental test suites available in the project lab archive."
      }
    ]
  },
  {
    id: "experience",
    num: "06",
    title: "EXPERIENCE",
    subtitle: "Internships, professional engagements, and shipped production code",
    summary: "Practical software engineering tenures, production responsibilities, and team collaboration.",
    date: "2023 — PRESENT",
    tag: "TRACK RECORD",
    pages: [
      {
        id: "experience-p1",
        layoutType: "timeline",
        chapterNum: "06",
        chapterTitle: "EXPERIENCE",
        headline: "Professional Tenures & Engineering Practice",
        date: "CHRONOLOGY // ROLES & RESPONSIBILITIES",
        entryNo: "RECORD 06.1",
        summary: "Practical software roles centered on backend reliability, AI integration, and performant user interfaces.",
        milestones: [
          {
            period: "2024 — 2025",
            role: "Software Engineering Intern / Applied ML",
            institution: "Technology Labs & Development Teams",
            description: "Developed and shipped modular backend microservices, optimized database query execution plans, and integrated automated testing workflows across production repositories.",
            tag: "INDUSTRY",
            details: ["FastAPI & Node services", "PostgreSQL tuning", "Automated CI/CD pipelines"]
          },
          {
            period: "2023 — 2024",
            role: "Technical Contributor & Open Source Developer",
            institution: "Community Collaborations",
            description: "Authored reusable components, refined developer documentation, and fixed runtime concurrency issues in distributed open-source tools.",
            tag: "CONTRIBUTIONS",
            details: ["Code review & refactoring", "WebSocket clients", "Documentation standards"]
          }
        ],
        marginalNote: {
          tag: "TENURE NOTE",
          category: "LEARNING",
          text: "Writing code that other developers can read and maintain under pressure is the hallmark of real craftsmanship."
        },
        footnote: "[6] Verifiable references and project recommendations available upon inquiry."
      }
    ]
  },
  {
    id: "toolkit",
    num: "07",
    title: "TOOLKIT",
    subtitle: "Core languages, hardware stacks, deep learning frameworks, and dev tools",
    summary: "Systematic index of technologies, languages, and runtime environments utilized in daily engineering.",
    date: "UPDATED 2026",
    tag: "INDEX",
    pages: [
      {
        id: "toolkit-p1",
        layoutType: "toolkit",
        chapterNum: "07",
        chapterTitle: "TOOLKIT",
        headline: "Engineered Technologies & Architectural Primitives",
        subtitle: "A curated catalogue of languages, libraries, and frameworks chosen for their speed, type safety, and operational resilience.",
        categories: [
          {
            name: "LANGUAGES & RUNTIMES",
            items: ["Python 3.x", "C / C++", "TypeScript", "JavaScript (ESNext)", "SQL", "HTML5 / CSS3"]
          },
          {
            name: "AI & MACHINE LEARNING",
            items: ["PyTorch", "ONNX Runtime", "Transformers", "Ollama API", "NumPy / SciPy", "FAISS / Vector Indexing"]
          },
          {
            name: "BACKEND & DISTRIBUTED",
            items: ["FastAPI", "Node.js / Express", "WebSockets / ASGI", "PostgreSQL", "MongoDB", "Redis"]
          },
          {
            name: "SYSTEMS & INFRASTRUCTURE",
            items: ["Linux / Bash", "Docker / Containers", "Git / GitHub Actions", "CUDA Primitives", "Vite / Modern Bundlers"]
          }
        ],
        marginalNote: {
          tag: "TOOLING NOTE",
          category: "DISCIPLINE",
          text: "Tools come and go; deep comprehension of algorithms, data layouts, and operating system mechanics remains permanent."
        },
        footnote: "[7] Technologies categorized by production usage and hands-on project implementations."
      }
    ]
  },
  {
    id: "field-notes",
    num: "08",
    title: "FIELD NOTES",
    subtitle: "Engineering observations, things learned, and technical experiments",
    summary: "Short essays and laboratory logs recorded during late-night debugging and system benchmarking.",
    date: "ACTIVE LOGS",
    tag: "JOURNAL",
    pages: [
      {
        id: "notes-p1",
        layoutType: "diary",
        chapterNum: "08",
        chapterTitle: "FIELD NOTES",
        headline: "On Small Models, Local Silicon, and the Fallacy of Scale",
        date: "2026.10.04 • 23:40 IST",
        entryNo: "LOG ENTRY #084",
        location: "LAB TESTBED",
        paragraphs: [
          "There is an uncommon clarity in running a 7B parameter model locally on your own silicon with no internet connection. When the API abstraction vanishes, you realize intelligence is not a distant, omniscient cloud oracle—it is matrix multiplications marching deterministically through transistors.",
          "Most modern AI systems are conceived under the premise of boundless compute and unmetered bandwidth. But true engineering resilience begins when you design for constraints: when memory bandwidth is the physical ceiling, when the network cannot be trusted, and when latency is felt directly at the human fingertips.",
          "When we prune redundant context windows dynamically rather than naively stuffing every conversation turn into a 128k prompt, we discover that smaller models can achieve remarkably crisp reasoning. The goal isn't to memorize the internet; the goal is to maintain a sharp, adaptive working memory."
        ],
        marginalNote: {
          tag: "MARGIN OBSERVATION",
          category: "BENCHMARK",
          text: "INT4 quantized weights retain ~96% empirical reasoning capacity while cutting VRAM footprint by over 65%. Measure your benchmarks locally before subscribing to conventional wisdom."
        },
        metadataItems: [
          { label: "LOG INDEX", value: "#084" },
          { label: "TARGET RUNTIME", value: "Arch Linux / RTX Silicon" },
          { label: "VERIFICATION", value: "Laboratory Verified", highlight: true }
        ],
        illustration: {
          figureTag: "FIG 8.1: FIELD SPECIMEN",
          caption: "Context retention decay formula & execution timeline.",
          type: "formula"
        },
        footnote: "[8] Recorded during late-night inference profiling sessions in Kochi."
      }
    ]
  },
  {
    id: "beyond-code",
    num: "09",
    title: "BEYOND CODE",
    subtitle: "Leadership, teaching, hackathons, events, and personal pursuits",
    summary: "The human dimension: mentoring, reading, analog interests, and creative endeavors outside the terminal.",
    date: "PERSPECTIVE",
    tag: "PERSONAL",
    pages: [
      {
        id: "beyond-p1",
        layoutType: "personal",
        chapterNum: "09",
        chapterTitle: "BEYOND CODE",
        headline: "The Mind Outside the Screen",
        subtitle: "Why an engineer's best ideas often emerge far away from the keyboard.",
        sections: [
          {
            title: "Leadership & Community Mentorship",
            content: "Organized technical workshops and pair-programming sessions for junior developers. There is no faster way to test your understanding of a complex topic than explaining it simply to a beginner."
          },
          {
            title: "Analog Craft & Reading",
            content: "Passionate about classic literature, audio electronics, and the tactile nature of physical notebooks. Engaging with physical media restores the cognitive stillness required for deep engineering focus."
          },
          {
            title: "Hackathons & Creative Prototyping",
            content: "Thrive in high-energy sprint environments where ideas must transform into working software within 36 hours. Constraints breed ingenious engineering solutions."
          }
        ],
        marginalNote: {
          tag: "PERSONAL NOTE",
          category: "PERSPECTIVE",
          text: "An engineer who only knows engineering will inevitably build sterile tools. Breadth of human curiosity enriches every line of code we write."
        },
        illustration: {
          figureTag: "PLATE 9.1: NOTEBOOK & COFFEE",
          caption: "Physical drafting notebook, fountain pen, and analog audio setup.",
          type: "analog"
        },
        footnote: "[9] Personal reflections recorded during weekend reading sessions."
      }
    ]
  },
  {
    id: "contact",
    num: "10",
    title: "CONTACT",
    subtitle: "Coordinates, channels for collaboration, and digital correspondence",
    summary: "How to initiate conversations regarding engineering roles, research collaboration, or technical discussions.",
    date: "TRANSMISSION",
    tag: "ENDPAGE",
    pages: [
      {
        id: "contact-p1",
        layoutType: "closing",
        chapterNum: "10",
        chapterTitle: "CONTACT",
        headline: "Transmission Coordinates & Dialogue",
        subtitle: "I am always open to thoughtful discussions regarding AI systems engineering, research collaborations, or production opportunities.",
        channels: [
          { label: "ELECTRONIC MAIL", value: "neevasunishmathew@gmail.com", href: "mailto:neevasunishmathew@gmail.com", note: "Primary channel for professional correspondence" },
          { label: "GITHUB REPOSITORY", value: "github.com/Neeva-SM", href: "https://github.com/Neeva-SM", note: "Source code, active experiments & contributions" },
          { label: "LINKEDIN NETWORK", value: "linkedin.com/in/neevasunishmathew", href: "https://linkedin.com/in/neevasunishmathew", note: "Professional track record & career network" },
          { label: "GEOGRAPHIC LOCATION", value: "Kochi, Kerala, India [UTC +05:30]", note: "Available for remote & hybrid engineering engagements" }
        ],
        marginalNote: {
          tag: "DISPATCH NOTE",
          category: "STATUS",
          text: "Inbox checked daily. High signal-to-noise inquiries regarding hard technical problems receive swift, thorough replies."
        },
        signoff: {
          statement: "Thank you for reading through this digital journal.",
          author: "NEEVA SUNISH MATHEW",
          edition: "EDITION 2026 // ALL RIGHTS RESERVED"
        },
        footnote: "[10] End of Volume 01. Journal continuously updated with new research and shipped systems."
      }
    ]
  }
];

/**
 * Builds a flat list of all folios for linear book navigation
 */
export function buildFolioList(chapters) {
  const folios = [
    {
      folioIndex: 0,
      type: "cover",
      chapterId: "cover",
      chapterNum: "00",
      chapterTitle: "COVER",
      pageInChapter: 1,
      totalInChapter: 1,
      label: "COVER",
    },
    {
      folioIndex: 1,
      type: "toc",
      chapterId: "toc",
      chapterNum: "00",
      chapterTitle: "TABLE OF CONTENTS",
      pageInChapter: 1,
      totalInChapter: 1,
      label: "INDEX",
    }
  ];

  let currentFolio = 2;

  chapters.forEach((chapter) => {
    const totalPages = chapter.pages.length;
    chapter.pages.forEach((page, pageIdx) => {
      folios.push({
        folioIndex: currentFolio,
        type: "chapter-page",
        chapterId: chapter.id,
        chapterNum: chapter.num,
        chapterTitle: chapter.title,
        chapterSubtitle: chapter.subtitle,
        pageInChapter: pageIdx + 1,
        totalInChapter: totalPages,
        pageData: page,
        label: totalPages > 1 ? `CH.${chapter.num} [${pageIdx + 1}/${totalPages}]` : `CH.${chapter.num}`,
      });
      currentFolio++;
    });
  });

  return folios;
}

/**
 * Visual section categorization styles for Table of Contents & Navigation
 * Distinguishes Technical, Research, Personal/Milestone, and Creative/Correspondence sections
 * using canonical design tokens from docs/DESIGN_STANDARDS.md.
 */
export const chapterCategoryStyles = {
  about: {
    sectionType: "PERSONAL",
    accentBg: "bg-pastel-yellowLight",
    accentBorder: "border-pastel-yellowDark",
    badgeBg: "bg-pastel-yellow",
    badgeText: "text-pastel-ink",
    hoverAccent: "group-hover:text-pastel-peachDark",
    tagLabel: "ESSAY",
  },
  journey: {
    sectionType: "MILESTONES",
    accentBg: "bg-pastel-yellowLight",
    accentBorder: "border-pastel-yellowDark",
    badgeBg: "bg-pastel-yellow",
    badgeText: "text-pastel-ink",
    hoverAccent: "group-hover:text-pastel-blueDark",
    tagLabel: "TIMELINE",
  },
  "things-i-build": {
    sectionType: "TECHNICAL",
    accentBg: "bg-pastel-blueLight",
    accentBorder: "border-pastel-blue",
    badgeBg: "bg-pastel-blue",
    badgeText: "text-white",
    hoverAccent: "group-hover:text-pastel-blueDark",
    tagLabel: "PROJECTS",
  },
  synapse: {
    sectionType: "FLAGSHIP",
    accentBg: "bg-pastel-blueLight",
    accentBorder: "border-pastel-blueDark",
    badgeBg: "bg-pastel-peach",
    badgeText: "text-pastel-ink",
    hoverAccent: "group-hover:text-pastel-peachDark",
    tagLabel: "CASE STUDY",
  },
  research: {
    sectionType: "RESEARCH",
    accentBg: "bg-pastel-lavenderLight",
    accentBorder: "border-pastel-lavender",
    badgeBg: "bg-pastel-lavenderDark",
    badgeText: "text-white",
    hoverAccent: "group-hover:text-pastel-lavenderDark",
    tagLabel: "RESEARCH",
  },
  experience: {
    sectionType: "TRACK RECORD",
    accentBg: "bg-pastel-sageLight",
    accentBorder: "border-pastel-sage",
    badgeBg: "bg-pastel-sageDark",
    badgeText: "text-white",
    hoverAccent: "group-hover:text-pastel-sageDark",
    tagLabel: "CAREER",
  },
  toolkit: {
    sectionType: "TECHNICAL",
    accentBg: "bg-pastel-blueLight",
    accentBorder: "border-pastel-blue",
    badgeBg: "bg-pastel-blue",
    badgeText: "text-white",
    hoverAccent: "group-hover:text-pastel-blueDark",
    tagLabel: "INDEX",
  },
  "field-notes": {
    sectionType: "TECHNICAL",
    accentBg: "bg-pastel-sageLight",
    accentBorder: "border-pastel-sage",
    badgeBg: "bg-pastel-sage",
    badgeText: "text-white",
    hoverAccent: "group-hover:text-pastel-sageDark",
    tagLabel: "JOURNAL",
  },
  "beyond-code": {
    sectionType: "CREATIVE",
    accentBg: "bg-pastel-peachLight",
    accentBorder: "border-pastel-peach",
    badgeBg: "bg-pastel-peach",
    badgeText: "text-pastel-ink",
    hoverAccent: "group-hover:text-pastel-peachDark",
    tagLabel: "ANALOG",
  },
  contact: {
    sectionType: "CORRESPONDENCE",
    accentBg: "bg-pastel-peachLight",
    accentBorder: "border-pastel-peachDark",
    badgeBg: "bg-pastel-yellow",
    badgeText: "text-pastel-ink",
    hoverAccent: "group-hover:text-pastel-peachDark",
    tagLabel: "CONTACT",
  },
};

