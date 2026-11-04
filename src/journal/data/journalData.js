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
    subtitle: "Selected software projects, AI prototypes, and collaborative systems",
    summary: "Engineered artifacts exploring AI-assisted project management, misinformation analysis, career prep, restaurant workflows, and student portals.",
    date: "2024 — PRESENT",
    tag: "PROJECTS",
    pages: [
      {
        id: "build-p1",
        layoutType: "project",
        folioType: "workbench",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        folioLabel: "FOLIO 07 [1/3]",
        folioTitle: "The Workbench // Learning by Building",
        headline: "03 — Things I Build",
        date: "2024 — PRESENT",
        location: "KOCHI, IN",
        openingReflection: "To me, software projects are not mere resume checkboxes—they are working laboratory benches where I test ideas, learn how architectures behave under real constraints, and explore how artificial intelligence can genuinely assist people.",
        flagship: {
          id: "synapse",
          projectNo: "PROJECT 001",
          name: "Synapse",
          title: "Synapse — AI-Powered Project Management Platform",
          status: "IN PROGRESS // FINAL-YEAR INTEGRATED MCA",
          statusBadge: "FLAGSHIP PROJECT • FINAL-YEAR MCA",
          statusType: "sage",
          year: "2026",
          purpose: "An AI-assisted software project management platform intended to connect requirements, tasks, sprint planning, meetings, project documentation, and team coordination.",
          intendedValue: "Software teams spend considerable cognitive energy synchronizing requirements, sprint plans, and meeting action items. Synapse is designed to unify these fragmented stages into a coherent workflow where local AI assists in drafting and tracing tasks without sacrificing team privacy or developer agency.",
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "Python",
            "PostgreSQL",
            "SQLAlchemy",
            "Alembic",
            "Ollama / Qwen3-4B"
          ],
          modules: [
            {
              title: "Multi-Tenant & Security Core",
              desc: "Organization & project isolation, role-based access control (RBAC), JWT authentication with refresh tokens, email verification, and Google OAuth."
            },
            {
              title: "AI Requirement Review",
              desc: "Transforms raw specifications into structured user stories and tasks using Pydantic schemas and a human-in-the-loop Accept / Modify / Reject flow."
            },
            {
              title: "Meeting Intelligence",
              desc: "Ingests meeting notes and discussions to surface key decisions, blockers, and candidate sprint tasks."
            },
            {
              title: "Semantic Vector Search",
              desc: "Tenant-isolated knowledge retrieval using local embeddings (nomic-embed-text) and document chunking for contextual awareness."
            }
          ],
          imageName: "synapse-project-preview.png",
          repoUrl: "https://github.com/Neeevaa/Synapse",
          caseStudyFolioId: "synapse",
          caseStudyLabel: "READ CHAPTER 04 CASE STUDY",
          techNote: {
            tag: "TECH NOTE 03.1",
            category: "LOCAL LLM EXPERIMENTATION",
            text: "Rather than routing sensitive project requirements through cloud endpoints, Synapse explores local model execution with Ollama and Qwen3-4B. This keeps intellectual property private while investigating structured JSON generation under local compute constraints."
          }
        }
      },
      {
        id: "build-p2",
        layoutType: "project",
        folioType: "experiments",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        folioLabel: "FOLIO 08 [2/3]",
        folioTitle: "Experiments & Applications",
        headline: "03 — Things I Build",
        date: "2025 — 2026",
        location: "KERALA, IN",
        openingReflection: "Exploring how applied machine learning and structured web interfaces can assist readers in evaluating online claims and empower students preparing for engineering careers.",
        projects: [
          {
            id: "veritas-vision",
            projectNo: "PROJECT 002",
            name: "Veritas Vision",
            title: "Veritas Vision — AI Misinformation Analysis",
            status: "PROTOTYPE // APPLIED AI EXPLORATION",
            statusType: "lavender",
            year: "2025",
            badge: "AI PROTOTYPE • MISINFORMATION ANALYSIS",
            problemExplored: "Online readers encounter sensational or manipulated claims without immediate context, provenance tracing, or tools to evaluate rhetorical framing.",
            purpose: "An AI-assisted misinformation-analysis prototype that accepts text or a URL and generates a trustworthiness assessment, reasoning trace, and possible manipulation indicators.",
            aiDisclaimer: "Framing note: Outputs are generated as heuristic AI assessments to prompt critical reading—not as independently verified absolute truth or infallible verdicts.",
            description: "Built to analyze online content for misleading claims using Gemini models via Firebase Genkit. Evaluates context, reconstructs original sourcing, and surfaces manipulation tactics for reader awareness.",
            verifiedCapabilities: [
              "Trustworthiness Score (0–100) and structured reasoning report.",
              "Context tracing and manipulation indicator detection (e.g. misleading context).",
              "Typology Library educating users on recurring misinformation tactics.",
              "Responsive interface built with Tailwind CSS, React Hook Form, and Zod validation."
            ],
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase Genkit", "Gemini API", "Zod", "React Hook Form"],
            imageName: "veritas-vision-preview.png",
            repoUrl: null,
            repoLabel: "Private Prototype (Code Available Upon Request)"
          },
          {
            id: "hyred",
            projectNo: "PROJECT 003",
            name: "Hyred",
            title: "Hyred — Your Personal Career Prep Co-pilot",
            status: "CONCEPT PROTOTYPE // STUDENT COMPANION",
            statusType: "peach",
            year: "2025 — 2026",
            badge: "CAREER CO-PILOT • STUDENT COMPANION",
            problemExplored: "Students navigating campus placements often struggle with disjointed preparation, lack of structured assessment feedback, and unclear skill roadmaps.",
            purpose: "A career-preparation platform concept featuring assessments, coding practice, skill development, tool suggestions, and progress visualization.",
            description: "A student companion built to track engineering skill growth across data structures, aptitude, and communication with interactive progress charts and automated curriculum recommendations.",
            verifiedCapabilities: [
              "Personalized dashboards tracking skill domains and learning velocity.",
              "Targeted assessment modules across DSA, aptitude, and soft skills.",
              "AI-driven tool and technology suggestions tailored to target roles via Google Genkit.",
              "Performance telemetry and visual skill breakdowns rendered using Recharts."
            ],
            techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Genkit", "Firebase", "Recharts"],
            imageName: "hyred-preview.png",
            repoUrl: null,
            repoLabel: "Concept Prototype (College Project)"
          }
        ]
      },
      {
        id: "build-p3",
        layoutType: "project",
        folioType: "systems",
        chapterNum: "03",
        chapterTitle: "THINGS I BUILD",
        folioLabel: "FOLIO 09 [3/3]",
        folioTitle: "Systems & Collaboration",
        headline: "03 — Things I Build",
        date: "2024 — 2025",
        location: "KERALA, IN",
        openingReflection: "Real engineering involves learning how data flows through relational stores, respecting separation of concerns, and delivering dependable software collaboratively with peers.",
        projects: [
          {
            id: "aromiq",
            projectNo: "PROJECT 004",
            name: "Aromiq",
            title: "Aromiq — Restaurant Management Platform",
            status: "COURSEWORK PROJECT // FULL-STACK WEB",
            statusType: "sage",
            year: "2024",
            badge: "COURSEWORK SYSTEM • RESTAURANT WORKFLOWS",
            context: "Individual coursework project exploring digital ordering and restaurant workflows.",
            problemExplored: "Manual pen-and-paper restaurant operations lead to lost orders, inaccurate inventory updates, and delayed kitchen coordination during peak dining hours.",
            purpose: "A restaurant-management coursework project exploring digital ordering, inventory tracking, and restaurant workflows, including QR-based ordering.",
            description: "A full-stack web application enabling patrons to browse menus and place dining orders, while restaurant managers oversee stock levels, kitchen orders, and table statuses.",
            implementedVsPlanned: {
              implemented: "Relational MySQL database schema, dynamic menu browsing, cart order submission, and backend administrative order status tracking using PHP.",
              planned: "QR-code direct table scanning and automated payment gateway settlement (explored as architectural extensions)."
            },
            techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            imageName: "aromiq-preview.png",
            repoUrl: "https://github.com/Neeevaa/Aromiq-Restaurant-Manangement-System",
            repoLabel: "VIEW REPOSITORY ON GITHUB"
          },
          {
            id: "crux",
            projectNo: "PROJECT 005",
            name: "Crux",
            title: "Crux — College Club Portal",
            status: "COLLABORATIVE PROJECT // CAMPUS WEB",
            statusType: "blue",
            year: "2024",
            badge: "TEAM COLLABORATION • CAMPUS PORTAL",
            context: "Collaborative student club project built with peers for college club information and activities.",
            problemExplored: "College clubs need an accessible way for student leads to publish announcements and manage event schedules without writing custom code for every update.",
            purpose: "A collaborative WordPress-based project for college-club information and activities.",
            description: "A shared campus portal providing student club leads with an organized content management system to post activity bulletins, coordinate workshops, and communicate with members.",
            collaborationNote: "Built collaboratively as part of a student team. My contribution focused on structuring the site architecture, establishing content management workflows, and testing organizer permissions.",
            techStack: ["WordPress", "PHP", "CMS Architecture", "Bootstrap / CSS", "Team Collaboration"],
            imageName: "crux-preview.png",
            repoUrl: null,
            repoLabel: "Campus Club Portal (Collaborative Project)"
          }
        ],
        marginalNote: {
          tag: "ENGINEERING TAKEAWAY",
          category: "FOUNDATIONS & TEAMWORK",
          text: "Working across raw PHP/MySQL schemas and collaborative WordPress platforms taught me that user empathy, clear data contracts, and transparent team communication matter just as much as technical tooling."
        }
      }
    ]
  },
  {
    id: "synapse",
    num: "04",
    title: "SYNAPSE",
    subtitle: "AI-Powered Project Management Platform: Local Inference, Multi-Tenancy & Human Oversight",
    summary: "Deep architectural investigation of Synapse: unifying requirements, sprints, and meeting intelligence under local Ollama execution, 4GB VRAM constraints, and strict human review.",
    date: "FLAGSHIP",
    tag: "CASE STUDY",
    pages: [
      {
        id: "synapse-p1",
        layoutType: "case-study",
        folioType: "architecture",
        chapterNum: "04",
        chapterTitle: "SYNAPSE",
        folioLabel: "FOLIO 08",
        folioTitle: "Architecture & Foundations",
        date: "OCTOBER 2026",
        headline: "Deconstructing Synapse: Architecture of a Context-Aware Project Platform",
        subtitle: "A technical investigation into unifying requirements, sprint tasks, and meeting intelligence under local LLM inference, multi-tenant database isolation, and human oversight.",
        projectMeta: {
          status: "Ongoing Integrated MCA Final-Year Project",
          targetAudience: "Software engineering teams & technical leads",
          primaryEngine: "Local Ollama + Qwen3-4B-Instruct",
          hardwareTestbed: "Laptop GPU (4 GB VRAM) • Offline execution",
        },
        problemStatement: {
          paragraphs: [
            "Modern software engineering teams frequently suffer from severe context fragmentation: product specifications reside in static documents, user stories sit in backlog trackers, architectural trade-offs are discussed in meetings, and implementation commits live in git repositories. Critical constraints and non-functional requirements identified during scoping are easily lost before code is shipped.",
            "Synapse explores a unified platform approach where project requirements, sprints, and meeting records are connected through a shared knowledge base. Rather than blindly automating task generation, the system provides ambient review capabilities: retrieving historical context, identifying ambiguities, and recommending structured tasks that require human sign-off."
          ],
          goals: [
            { title: "Context Unification", desc: "Maintain living bidirectional traceability between requirements, sprint tasks, and meeting minutes." },
            { title: "Intellectual Property Privacy", desc: "Execute AI inference locally via Ollama to keep company requirements within organizational boundaries." },
            { title: "Human Agency & Governance", desc: "Treat AI output strictly as uncommitted proposals; require explicit Accept/Modify/Reject triage." },
            { title: "Zero Cloud Inference Cost", desc: "Operate fully on developer laptop hardware within a 4 GB VRAM constraint." }
          ]
        },
        architecturalTiers: [
          {
            tier: "TIER 01",
            name: "Client Presentation",
            description: "Component-driven interface built with Next.js App Router, React 18, and Tailwind CSS. Features modular sprint kanban, requirement version viewer, and triage modals.",
            components: "Next.js 14, TypeScript, Tailwind",
            status: "IMPLEMENTED"
          },
          {
            tier: "TIER 02",
            name: "API & Domain Services",
            description: "High-performance asynchronous backend exposing REST endpoints. Enforces JWT auth, refresh rotation, Google OAuth, and granular organization/project roles.",
            components: "FastAPI, Python, Pydantic",
            status: "IMPLEMENTED"
          },
          {
            tier: "TIER 03",
            name: "Data Persistence & Multi-Tenancy",
            description: "Relational persistence with strict company_id and project_id row-level query filtering. Tracks requirement versions, task states, and audit trails.",
            components: "PostgreSQL, SQLAlchemy, Alembic",
            status: "IMPLEMENTED"
          },
          {
            tier: "TIER 04",
            name: "Local AI Orchestration",
            description: "Local model execution via Ollama HTTP API with low temperature (0.2). Enforces Pydantic schema validation and quarantines unverified model outputs.",
            components: "Ollama, Qwen3-4B, Pydantic",
            status: "IMPLEMENTED"
          },
          {
            tier: "TIER 05",
            name: "Retrieval & Vector Knowledge",
            description: "Document chunking and 768-dimensional local vector generation. Uses tenant-filtered cosine similarity to supply relevant context for requirement reviews.",
            components: "nomic-embed-text, Cosine Sim",
            status: "IMPLEMENTED"
          },
          {
            tier: "TIER 06",
            name: "Verification & Automated Testing",
            description: "Comprehensive test harness covering unit, integration, and E2E browser flows. Validates multi-tenant isolation, role RBAC, and review workflows.",
            components: "pytest, Selenium WebDriver",
            status: "IMPLEMENTED"
          }
        ],
        specs: [
          { label: "FRONTEND FRAMEWORK", value: "Next.js App Router (TypeScript)", status: "IMPLEMENTED" },
          { label: "BACKEND API", value: "FastAPI + Python (Async)", status: "IMPLEMENTED" },
          { label: "DATA PERSISTENCE", value: "PostgreSQL + SQLAlchemy 2.0 + Alembic", status: "IMPLEMENTED" },
          { label: "AUTHENTICATION & RBAC", value: "JWT + Refresh Tokens + Google OAuth", status: "IMPLEMENTED" },
          { label: "LOCAL INFERENCE RUNTIME", value: "Ollama HTTP API (qwen3-4b-instruct-2507)", status: "IMPLEMENTED" },
          { label: "EMBEDDING MODEL", value: "nomic-embed-text (768-dim local vectors)", status: "IMPLEMENTED" },
          { label: "TENANT ISOLATION", value: "Row-level company_id + project_id filtering", status: "IMPLEMENTED" },
          { label: "HARDWARE TESTBED", value: "Laptop discrete GPU (4 GB VRAM)", status: "IMPLEMENTED" },
          { label: "VECTOR INDEX SCALING", value: "Native pgvector HNSW indexing", status: "PLANNED" }
        ],
        figurePlate: {
          src: "/assets/synapse-project-preview.png",
          alt: "Synapse project management interface and architecture overview",
          caption: "Figure 4.1: Synapse application dashboard & architecture decomposition across Next.js and FastAPI.",
          tag: "[ SPECIMEN 4.1 ]"
        },
        marginalNote: {
          tag: "SYSTEMS PERSPECTIVE",
          category: "ARCHITECTURAL INTEGRITY",
          text: "AI in software engineering is only as dependable as the boundary around it. Without strict tenant isolation, schema enforcement, and human triage, LLMs simply generate ungrounded technical debt."
        },
        footnote: "[1] Synapse is an active final-year Integrated MCA capstone project authored by Neeva Sunish Mathew."
      },
      {
        id: "synapse-p2",
        layoutType: "case-study",
        folioType: "pipeline",
        chapterNum: "04",
        chapterTitle: "SYNAPSE",
        folioLabel: "FOLIO 09",
        folioTitle: "The 7-Stage AI Review Workflow",
        date: "OCTOBER 2026",
        headline: "The 7-Stage AI Pipeline: Context Retrieval to Human-Verified Sprints",
        subtitle: "How Synapse orchestrates context collection, local structured reasoning, and human triage without letting AI output blindly mutate production state.",
        pipelineStages: [
          {
            step: "01",
            title: "Input Submission",
            description: "Author enters a requirement specification, user story, or meeting transcript with title, description, and acceptance criteria.",
            status: "IMPLEMENTED",
            highlight: false
          },
          {
            step: "02",
            title: "Multi-Query Retrieval",
            description: "System extracts multi-angle queries across requirement key, title, and acceptance criteria to search project knowledge chunks.",
            status: "IMPLEMENTED",
            highlight: false
          },
          {
            step: "03",
            title: "Context & Provenance",
            description: "Chunks filtered strictly by company_id and project_id. Sources prepended with metadata: [SOURCE: type | key | version].",
            status: "IMPLEMENTED",
            highlight: false
          },
          {
            step: "04",
            title: "Local Structured Inference",
            description: "Context and schema sent to local Ollama running Qwen3-4B with temperature 0.2 and format: 'json' for deterministic findings.",
            status: "IMPLEMENTED",
            highlight: false
          },
          {
            step: "05",
            title: "Schema Validation & Log",
            description: "FastAPI parses response into Pydantic models (ReviewOutputSchema). Raw payloads archived to DB for audit and research.",
            status: "IMPLEMENTED",
            highlight: false
          },
          {
            step: "06",
            title: "Human-in-the-Loop Triage",
            description: "Project Manager reviews findings. Must explicitly mark items as ACCEPTED, MODIFIED (customized), or FALSE POSITIVE.",
            status: "IMPLEMENTED",
            highlight: true
          },
          {
            step: "07",
            title: "Workflow Materialization",
            description: "Only approved items convert into active sprint tasks, acceptance criteria, or test cases with bidirectional traceability.",
            status: "IMPLEMENTED",
            highlight: false
          }
        ],
        figurePlate: {
          src: "/assets/synapse-architecture-workflow.png",
          alt: "Synapse 7-stage ML architecture workflow and retrieval execution trace",
          caption: "Figure 4.2: End-to-end dataflow from requirement submission through vector retrieval to Pydantic validation.",
          tag: "[ SPECIMEN 4.2 ]"
        },
        workflowWalkthrough: {
          sampleKey: "SPECIMEN: REQ-101",
          title: "Requirement Review in Action",
          rawInput: "User Password Authentication: The system shall allow users to authenticate using email and password.",
          findingDescription: "Flagged Missing Edge Case: Requirement lacks specification for brute-force rate limiting, failed attempt lockout thresholds, and session termination upon password reset.",
          severity: "HIGH",
          issueType: "MISSING_CRITERIA & AMBIGUITY",
          humanDecision: "ACCEPTED & MODIFIED",
          humanComment: "Valid security catch. Approved finding; modified lockout threshold from default 3 attempts to 5 attempts to align with organization policy.",
          downstreamTask: "TASK-204: Implement Redis Rate-Limiter & 5-Attempt Lockout Handler (Workstream: Backend, 5 pts)"
        },
        failureModes: [
          {
            risk: "HALLUCINATED DEPENDENCIES",
            mechanism: "Model assumes external third-party services that the organization does not utilize.",
            mitigation: "Authoritative context grounding forces citations; unverified claims are easily caught during PM triage."
          },
          {
            risk: "SCHEMA FORMATTING DRIFT",
            mechanism: "Small models occasionally omit mandatory JSON fields or format markdown code blocks.",
            mitigation: "Ollama JSON mode paired with Pydantic validation; errors trigger automated fallback logging."
          },
          {
            risk: "MULTI-TENANT LEAKAGE",
            mechanism: "Vector queries returning chunks from another company or unauthorized project.",
            mitigation: "Mandatory company_id and project_id filtering at the SQL query level prior to cosine scoring."
          }
        ],
        marginalNote: {
          tag: "HUMAN-IN-THE-LOOP",
          category: "GOVERNANCE",
          text: "Autonomy is dangerous when applied to software contracts. By restricting AI to the role of an analytical reviewer and requiring human sign-off, Synapse protects sprint integrity from model hallucination."
        },
        footnote: "[2] Workflow validated through automated pytest suites and Selenium WebDriver browser interaction tests."
      },
      {
        id: "synapse-p3",
        layoutType: "case-study",
        folioType: "decisions",
        chapterNum: "04",
        chapterTitle: "SYNAPSE",
        folioLabel: "FOLIO 10",
        folioTitle: "Constraints, Trade-offs & Future Work",
        date: "OCTOBER 2026",
        headline: "Engineering Under Real Constraints: 4 GB VRAM, Privacy & Honest Trade-offs",
        subtitle: "Evaluating the reality of local LLM inference on consumer laptop hardware, multi-tenant boundaries, and future research directions.",
        hardwareTelemetry: {
          metrics: [
            { label: "LOCAL GPU VRAM BUDGET", value: "4.0 GB", note: "Laptop discrete GPU testbed" },
            { label: "MODEL WEIGHTS ALLOCATION", value: "~2.8 GB", note: "Qwen3-4B under 4-bit quantization" },
            { label: "CONTEXT WINDOW BOUNDARY", value: "4,096 TOKENS", note: "Capped to prevent VRAM overflow" },
            { label: "CONCURRENCY MODEL", value: "SERIAL QUEUED", note: "Single-batch background queue" }
          ],
          observations: "Operating within 4 GB VRAM dictates conservative architectural boundaries. The quantized 4-bit model leaves approximately 1.2 GB of GPU memory for display buffers and KV-cache allocations. Prompts must be tightly budgeted: retrieval chunks are restricted to top-5 results (~300-500 tokens each) to avoid spilling into system RAM and causing latency thrashing. Parallel inference is avoided by queuing AI jobs sequentially through FastAPI background workers."
        },
        tradeoffs: [
          {
            decision: "Local Ollama vs. Cloud API",
            tag: "PRIVACY & COST",
            chosen: "Local Qwen3-4B execution via Ollama HTTP API.",
            tradeoff: "Guarantees total privacy of sensitive software specs and eliminates API costs; trade-off is reduced reasoning depth and slower generation compared to 70B+ cloud endpoints."
          },
          {
            decision: "Strict Schema vs. Freeform Output",
            tag: "API INTEGRITY",
            chosen: "Pydantic response models enforced via JSON format.",
            tradeoff: "Eliminates parsing crashes and guarantees typed database persistence; trade-off is schema rigidity, requiring careful prompt crafting for multi-faceted tasks."
          },
          {
            decision: "Row-Level Multi-Tenancy vs. Multi-DB",
            tag: "OPERATIONS",
            chosen: "Shared PostgreSQL schema with strict company_id filtering.",
            tradeoff: "Radically simplifies migrations and operational overhead on a single laptop; requires obsessive query-level filtering verified by dedicated cross-tenant test suites."
          },
          {
            decision: "In-Memory Cosine vs. External Vector DB",
            tag: "SIMPLICITY",
            chosen: "Python cosine similarity over tenant-filtered chunks with pgvector fallback.",
            tradeoff: "Avoids complex external infrastructure setup during local dev; adequate for hundreds of project chunks, but unviable for enterprise scale without native indexing."
          }
        ],
        figurePlate: {
          src: "/assets/synapse-terminal-execution.png",
          alt: "Terminal test execution showing pytest suite passing with multi-tenant isolation and security checks",
          caption: "Figure 4.3: Automated test execution verifying multi-tenant isolation, JWT auth, and Pydantic schema validation.",
          tag: "[ SPECIMEN 4.3 ]"
        },
        limitations: [
          {
            title: "Context Window & Retrieval Freshness",
            description: "Rapidly evolving requirements can lead to index staleness if re-chunking is delayed. The 4K context window requires strict chunk pruning.",
            status: "OBSERVED BEHAVIOR"
          },
          {
            title: "Nuance in Complex Architectural Scenarios",
            description: "While reliable for identifying missing edge cases and acceptance criteria, 4B parameter models can overlook subtle distributed systems race conditions.",
            status: "OBSERVED BEHAVIOR"
          },
          {
            title: "Empirical Baseline Evaluation",
            description: "Current validation relies on automated functional tests (pytest, Selenium). Quantitative benchmark scoring against human-annotated defect corpora is ongoing.",
            status: "ONGOING RESEARCH"
          }
        ],
        roadmap: [
          { title: "Native pgvector HNSW Indexing", desc: "Deploy native vector similarity indexing to handle larger corporate documentation bases." },
          { title: "Bidirectional Git Webhook Synchronization", desc: "Link commit hashes and pull requests directly to requirement keys and sprint tasks." },
          { title: "Knowledge Graph Entity Linking", desc: "Map cross-project dependencies and architectural interfaces across multiple software repositories." }
        ],
        marginalNote: {
          tag: "ENGINEERING REFLECTION",
          category: "DISCIPLINE",
          text: "Building within real hardware constraints forces architectural clarity. Designing for a 4GB GPU taught me more about memory budgeting, quantization, and defensive validation than an unlimited cloud budget ever could."
        },
        footnote: "[3] Case study verified against source repository under C:\\Projects\\Synapse with pytest and Selenium automation."
      }
    ]
  },
  {
    id: "research",
    num: "05",
    title: "RESEARCH",
    subtitle: "Synapse: Integrating LLMs and Multi-Agent Systems for Software Project Management",
    summary: "Extended literature review analyzing ~20 contemporary research papers on LLM4SE, multi-agent coordination, and a proposed empirical evaluation framework for full-lifecycle project assistance.",
    date: "ONGOING",
    tag: "RESEARCH",
    pages: [
      {
        id: "research-p1",
        layoutType: "research",
        folioType: "literature",
        chapterNum: "05",
        chapterTitle: "RESEARCH",
        folioLabel: "FOLIO 12",
        folioTitle: "Literature Map & Questions",
        date: "OCTOBER 2026",
        headline: "Synapse: Integrating LLMs & Multi-Agent Systems for Software Project Management",
        subtitle: "An extended literature analysis exploring how large language models transition from isolated code completion assistants to full-lifecycle project coordination partners.",
        paperMeta: {
          title: "Synapse: Integrating LLMs and Multi-Agent Systems for the Future of Software Project Management",
          author: "Neeva Sunish Mathew",
          institution: "Amal Jyothi College of Engineering Autonomous",
          surveyScope: "~20 Contemporary Papers (2023–2025)",
          status: "Literature Review Completed • Evaluation Proposed",
        },
        abstract: "Traditional software project management tools passively store records after team members type them in. Consequently, decisions made in meetings are forgotten, requirements drift away from implementation tasks, and documentation becomes obsolete. Recent research demonstrates that Large Language Models (LLMs) and Multi-Agent Systems (MAS) can assist with requirements engineering, task generation, and sprint coordination. However, existing studies remain siloed in isolated phases (e.g., only code synthesis or only test generation), and models frequently hallucinate or generate unsupported recommendations. This literature analysis synthesizes findings across nearly twenty recent papers to establish the theoretical foundations for Synapse: a unified, full-lifecycle platform that combines local quantized models, retrieval-augmented generation (RAG), and human-in-the-loop oversight.",
        motivation: "Software development context is chronically fragmented across isolated systems: product specifications in PRDs, user stories in Jira, architectural debates in meeting transcripts, and code in Git repositories. The TOIL of manual administrative synchronization consumes significant engineering energy and causes critical assumptions to be dropped between scoping and delivery.",
        researchQuestions: {
          central: "How can role-based LLM architectures and tenant-isolated Retrieval-Augmented Generation (RAG) be integrated into a unified project management platform to improve requirement quality, maintain decision traceability, and assist sprint planning without sacrificing developer agency or data privacy?",
          supporting: [
            {
              code: "RQ1",
              theme: "Context Grounding",
              question: "Does grounding requirement review in tenant-isolated knowledge chunks (RAG) significantly reduce hallucination and increase detection of omitted criteria compared to isolated prompting?",
              target: "Requirement Review Pipeline"
            },
            {
              code: "RQ2",
              theme: "Human Governance",
              question: "How does a mandatory human triage workflow (Accept/Modify/Reject) prevent flawed model proposals from mutating active project sprint state?",
              target: "Human-in-the-Loop Triage"
            },
            {
              code: "RQ3",
              theme: "Hardware Feasibility",
              question: "Can a quantized 4B-parameter local model running under a 4 GB VRAM constraint deliver actionable requirement and meeting insights on developer hardware?",
              target: "Local Ollama Testbed"
            }
          ]
        },
        literatureThemes: [
          {
            category: "LIFECYCLE SE",
            title: "LLMs in the Software Lifecycle",
            summary: "Surveys reveal models transitioning from standalone code autocompletion to multi-stage assistance across requirements, documentation, testing, and maintenance.",
            gap: "Research remains fragmented; full-lifecycle platforms connecting requirements to tasks are rare.",
            citations: "Hou et al. (2024), Fan et al. (2023), Brik (2024)"
          },
          {
            category: "MULTI-AGENT",
            title: "Role-Based Multi-Agent Systems",
            summary: "Assigning distinct professional identities (Product Owner, Architect, QA Lead) enables agents to collaborate on complex repository tasks and agile sprint simulations.",
            gap: "Lack of performance efficiency studies and unified evaluation standards across realistic codebases.",
            citations: "Cai et al. (2025), Liu et al. (2024), Cinkusz et al. (2025)"
          },
          {
            category: "RETRIEVAL",
            title: "Context-Aware Retrieval (RAG)",
            summary: "Mitigates context window limits and the 'Lost in the Middle' effect by chunking project artifacts and querying vector indices rather than overloading prompts.",
            gap: "Vector index staleness and chunk boundary truncation during fast-moving agile sprint changes.",
            citations: "Liu et al. (2024), Sarim et al. (2025), Devlin et al."
          },
          {
            category: "HUMAN-AI",
            title: "Human Oversight & Requirement Quality",
            summary: "Investigates evaluating requirement specifications against ISO/IEC/IEEE 29148 standards. Emphasizes that AI outputs must be verified by humans rather than blindly committed.",
            gap: "Absence of fine-grained interaction metrics measuring how developers adapt AI proposals in real teams.",
            citations: "Santana et al. (2025), Lubos et al. (2024)"
          },
          {
            category: "RELIABILITY",
            title: "Reliability, Hallucination & Benchmark Gaps",
            summary: "Empirical studies (SWE-bench, DevEval) demonstrate models fail when project circumstances change, hallucinating variable definitions and missing cross-file links.",
            gap: "Existing benchmarks use small toy examples (13-22 LOC) that fail to mirror enterprise repository complexity.",
            citations: "Jimenez et al. (2024), DevEval (2024)"
          }
        ],
        literatureMap: {
          stages: [
            {
              label: "INPUT STAGE",
              title: "Fragmented Project Artifacts",
              description: "PRDs, meeting transcripts, sprint backlog items, and architectural notes scattered across disconnected tools."
            },
            {
              label: "THEORETICAL CORE",
              title: "RAG + Role-Based Agents",
              description: "Tenant-isolated vector retrieval grounds local quantized models; role-based prompts structure domain analysis."
            },
            {
              label: "OUTPUT GOVERNANCE",
              title: "Traceable Human Review",
              description: "Actionable recommendations presented with source provenance; explicit Accept/Modify/Reject triage safeguards sprint state."
            }
          ]
        },
        marginalNote: {
          tag: "RESEARCH INQUIRY",
          category: "MOTIVATION",
          text: "What I am investigating is not whether an LLM can generate standalone code, but whether grounded project context can prevent the silent loss of intent between scoping meetings and sprint delivery."
        },
        footnote: "[1] Extended literature review conducted as part of the final-year Integrated MCA research curriculum at Amal Jyothi College of Engineering."
      },
      {
        id: "research-p2",
        layoutType: "research",
        folioType: "evaluation",
        chapterNum: "05",
        chapterTitle: "RESEARCH",
        folioLabel: "FOLIO 13",
        folioTitle: "Proposed Evaluation Framework",
        date: "OCTOBER 2026",
        headline: "Proposed Empirical Evaluation Framework: A Controlled Comparative Study",
        subtitle: "A formal methodology to evaluate RAG-assisted requirement review against baseline zero-shot prompting across grounding, issue detection, and human verification effort.",
        comparisonSetup: {
          baseline: {
            title: "Zero-Shot Requirement Analysis",
            description: "The model receives only the raw target requirement (title, description, acceptance criteria) and evaluates quality without external project context or vector retrieval."
          },
          proposed: {
            title: "Synapse RAG-Assisted Review",
            description: "The model receives the target requirement augmented with tenant-isolated knowledge chunks, meeting transcript excerpts, and authoritative source provenance tags."
          }
        },
        evaluationPipeline: [
          {
            stage: 1,
            title: "Curated Testbed",
            description: "Requirements corpus seeded with realistic ambiguities, omissions, and conflicts based on ISO/IEC/IEEE 29148 standards.",
            artifact: "Gold-standard requirements dataset"
          },
          {
            stage: 2,
            title: "Dual Inference",
            description: "Parallel execution across Condition A (LLM-only) and Condition B (RAG-assisted) using Qwen3-4B-Instruct with identical generation seeds.",
            artifact: "Structured JSON finding payloads"
          },
          {
            stage: 3,
            title: "Expert Review",
            description: "Independent software engineers and PMs evaluate flagged issues against ground-truth defect criteria via human triage interface.",
            artifact: "Triage audit log (Accept / Modify / Reject)"
          },
          {
            stage: 4,
            title: "Metric Scoring",
            description: "Quantitative and qualitative calculation of detection precision, citation grounding, false-positive frequency, and review time.",
            artifact: "Comparative evaluation report"
          }
        ],
        evaluationDimensions: [
          {
            name: "Defect Detection Sensitivity",
            description: "Proportion of seeded requirement ambiguities, missing error states, and unstated assumptions correctly identified.",
            measurement: "Recall against expert gold-standard defects",
            hypothesis: "RAG-assisted will detect cross-document omissions that isolated LLMs miss."
          },
          {
            name: "Grounding & Citation Fidelity",
            description: "Degree to which generated findings cite verifiable source chunks rather than hallucinating external architectural facts.",
            measurement: "Provenance check: % of claims linked to valid chunks",
            hypothesis: "Source tagging will eliminate ungrounded third-party library assumptions."
          },
          {
            name: "False-Positive Ratio",
            description: "Frequency of benign requirement statements incorrectly flagged as critical defects, introducing review fatigue.",
            measurement: "Triage rejection rate: # of False-Positive decisions",
            hypothesis: "Context grounding reduces hallucinated conflicts by clarifying existing constraints."
          },
          {
            name: "Actionability of Recommendations",
            description: "Ratio of recommended remediation tasks accepted into active sprints with minimal or no human editing.",
            measurement: "PM acceptance rate (% Accepted without edit)",
            hypothesis: "Structured task suggestions will closely mirror real engineering tickets."
          },
          {
            name: "Human Review Effort",
            description: "Time in minutes and cognitive load reported by human evaluators during the triage of flagged findings.",
            measurement: "Average inspection time per requirement review",
            hypothesis: "Clear provenance reduces human verification time compared to ungrounded claims."
          }
        ],
        experimentalControls: {
          hardware: "Local laptop GPU (4 GB VRAM) • Zero cloud API calls",
          model: "Qwen3-4B-Instruct (4-bit quantized, temp: 0.2)",
          standards: "ISO/IEC/IEEE 29148 Requirement Quality Characteristics",
          reviewers: "Independent software development practitioners"
        },
        marginalNote: {
          tag: "METHODOLOGICAL DISCIPLINE",
          category: "EVALUATION",
          text: "A metric that only measures how many tasks an AI creates misses the point. The true test of an engineering assistant is whether its findings are grounded in verified evidence and respect the reviewer's cognitive budget."
        },
        footnote: "[2] Evaluation protocol is actively proposed; empirical benchmarking and statistical scoring are pending formal execution."
      },
      {
        id: "research-p3",
        layoutType: "research",
        folioType: "log",
        chapterNum: "05",
        chapterTitle: "RESEARCH",
        folioLabel: "FOLIO 14",
        folioTitle: "Research Log & Next Steps",
        date: "OCTOBER 2026",
        headline: "Research Chronology, Honest Limitations & The Academic Roadmap",
        subtitle: "Documenting research milestones from preliminary literature analysis to system prototyping, current boundaries, and ongoing academic objectives.",
        currentProgress: {
          literatureSurvey: "Completed (~20 papers)",
          reviewPaper: "Drafted & Under Review",
          prototype: "Functional & Tested",
          empiricalComparison: "Protocol Proposed"
        },
        chronologicalLog: [
          {
            date: "JULY 2026",
            title: "Extended Literature Analysis Completed",
            summary: "Analyzed nearly twenty contemporary research studies on LLM4SE, multi-agent frameworks, and agile cognitive agents. Authored extended review paper establishing the theoretical foundation for Synapse.",
            status: "COMPLETED",
            evidence: "Literature Review.docx"
          },
          {
            date: "AUGUST 2026",
            title: "System Specification & Multi-Tenant Architecture",
            summary: "Formulated system design for full-lifecycle assistance. Designed PostgreSQL multi-tenant relational schema, Alembic migration paths, and FastAPI service contracts.",
            status: "COMPLETED",
            evidence: "SYSTEM SPECIFICATION.docx"
          },
          {
            date: "SEPTEMBER 2026",
            title: "Automated Testing & Exploratory Industry Survey",
            summary: "Constructed comprehensive pytest and Selenium test suites verifying requirement review and meeting modules. Discussed workflow needs with a software company in Kerala, validating tool fragmentation.",
            status: "COMPLETED",
            evidence: "testingreport-sem1.docx"
          },
          {
            date: "OCTOBER 2026",
            title: "Academic Research Paper Draft Authored",
            summary: "Drafted 'An LLM-Augmented Framework for Intelligent Software Project Management' synthesizing architecture, local Ollama integration, and the proposed comparative evaluation protocol.",
            status: "IN PROGRESS",
            evidence: "Synapse_Research_Paper.docx"
          }
        ],
        limitations: [
          {
            category: "MODEL CAPACITY",
            title: "Small Local Model Capability & Context Limits",
            description: "Operating a 4B parameter model locally within 4 GB VRAM preserves data privacy but bounds reasoning capacity and attention span. Detecting complex distributed systems concurrency hazards remains an open challenge.",
            challenge: "Quantifying performance trade-offs between local quantized 4B models and large cloud frontier models."
          },
          {
            category: "RETRIEVAL",
            title: "Retrieval Quality & Knowledge Freshness",
            description: "Software specifications evolve rapidly during active agile sprints. Outdated requirement chunks can pollute retrieval prompts if vector re-indexing is delayed or chunk boundaries split related constraints.",
            challenge: "Implementing real-time incremental vector index invalidation and boundary-aware re-chunking."
          },
          {
            category: "RELIABILITY",
            title: "Hallucination & Unsupported Recommendations",
            description: "Generative models can synthesize plausible but ungrounded dependencies or invent API contracts not present in the codebase. Strict source citation tags are required to prevent developer misdirection.",
            challenge: "Enforcing hard validation rules that reject any finding lacking demonstrable source chunk provenance."
          },
          {
            category: "BENCHMARKING",
            title: "Evaluation Reproducibility & Benchmark Scarcity",
            description: "Most established SE benchmarks evaluate isolated code generation or single-function bugs. Standardized, reproducible corpora for full-lifecycle requirement analysis and sprint coordination do not yet exist.",
            challenge: "Constructing and open-sourcing a curated, reproducible requirements defect benchmark."
          },
          {
            category: "GOVERNANCE",
            title: "Human Oversight & Engineering Accountability",
            description: "Autonomous task creation risks polluting project backlogs with low-priority or misaligned tickets. Developers must remain ultimate arbiters with low-friction triage interfaces.",
            challenge: "Designing workflow friction gates that prevent automated mutations without introducing reviewer fatigue."
          }
        ],
        nextSteps: [
          {
            stepNum: "01",
            title: "Refine Research Questions",
            description: "Formalize sub-questions regarding context grounding sensitivity, human triage friction, and local hardware feasibility.",
            deliverable: "Refined Research Question Specification"
          },
          {
            stepNum: "02",
            title: "Consolidate Literature Matrix",
            description: "Synthesize findings across ~20 surveyed papers into a comparative matrix contrasting LLM architectures, RAG methods, and SE workflows.",
            deliverable: "Thematic Literature Synthesis Matrix"
          },
          {
            stepNum: "03",
            title: "Finalize Evaluation Protocol",
            description: "Establish ISO/IEC/IEEE 29148 gold-standard requirement testbed and calibrate evaluation rubrics for human reviewers.",
            deliverable: "Controlled Experiment Protocol"
          },
          {
            stepNum: "04",
            title: "Run Controlled Comparison",
            description: "Execute Condition A (LLM-only) vs. Condition B (RAG-assisted) evaluation under identical seeds using local quantized Qwen3-4B.",
            deliverable: "Raw Inference & Finding Payload Logs"
          },
          {
            stepNum: "05",
            title: "Analyze Empirical Results",
            description: "Measure defect detection sensitivity, citation fidelity, false-positive ratio, and human reviewer inspection effort.",
            deliverable: "Comparative Benchmark Analysis Report"
          },
          {
            stepNum: "06",
            title: "Prepare Paper & Seminar Materials",
            description: "Synthesize empirical results into the final research manuscript for academic conference submission and departmental defense.",
            deliverable: "Final Research Paper & Presentation Slides"
          }
        ],
        marginalNote: {
          tag: "ACADEMIC HONESTY",
          category: "ETHICS",
          text: "Engineering rigor requires stating what is not yet measured. Building the system demonstrated technical feasibility; proving measurable utility requires the controlled empirical evaluation now underway."
        },
        footnote: "[3] Research roadmap aligned with the final-year MCA capstone milestones at Amal Jyothi College of Engineering."
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

