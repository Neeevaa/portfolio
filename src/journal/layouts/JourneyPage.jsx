import React from "react";
import ProofStickyNote from "../components/ProofStickyNote";

/**
 * JourneyPage
 * Layout for Chapter 02 — The Journey.
 * Folio A (journey-p1): Finding My Direction (Evolution from finance & security to applied AI at TechTaliya)
 * Folio B (journey-p2): Learning by Building and Participating (Synapse project, community coordination, The Knotique, growth mindset)
 */
export default function JourneyPage({ pageData, onSelectFolio, folioMap }) {
  const {
    id,
    chapterNum = "02",
    chapterTitle = "THE JOURNEY",
    date = "2022 — PRESENT",
    location = "KERALA, IN",
  } = pageData || {};

  const isSecondPage = id === "journey-p2";

  // Handle jump to Chapter 04 (Synapse) if available
  const handleJumpToSynapse = () => {
    if (onSelectFolio && folioMap && folioMap["synapse"] !== undefined) {
      onSelectFolio(folioMap["synapse"]);
    }
  };

  return (
    <div className="relative min-h-[580px] md:min-h-[640px] p-6 sm:p-10 md:p-12 lg:p-14 select-text bg-pastel-paper text-pastel-ink paper-corner-fold overflow-hidden">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-14 sm:left-24 w-28 sm:w-36 h-6 washi-tape-yellow rotate-[1deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Header & Running Chapter Metadata Bar */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b-2 border-pastel-ink/15 gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted" aria-hidden="true">/</span>
          <span className="font-comic text-sm font-bold tracking-wide uppercase text-pastel-ink">
            {chapterTitle}
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-pastel-ink/40 font-mono text-[11px] text-pastel-inkMuted font-semibold">
            {isSecondPage ? "FOLIO 06 [2/2]" : "FOLIO 05 [1/2]"}
          </span>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs text-pastel-inkMuted">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </header>

      {/* ========================================================
          FOLIO A: Finding My Direction
          ======================================================== */}
      {!isSecondPage && (
        <div className="mt-8 space-y-9">
          {/* Main Title & Opening Reflection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="font-comic text-xs font-bold text-pastel-peachDark uppercase tracking-wider">
                  ★ FOLIO A • EVOLUTION OF INTERESTS
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
                  02 — The Journey
                </h2>
                <div className="font-hand text-xl text-pastel-inkMuted">
                  Finding My Direction
                </div>
              </div>

              <div className="p-5 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic">
                <p className="font-sans text-base sm:text-lg text-pastel-ink/95 leading-relaxed">
                  My path into software and applied intelligence didn&apos;t follow a predetermined route. It developed through honest curiosity, exploring different fields, and finding clarity by getting close to how systems actually work.
                </p>
              </div>
            </div>

            {/* Right: Sticky Note Specimen (TechTaliya Internship) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center pt-2">
              <ProofStickyNote
                imageName="techtaliya-internship.png"
                title="TechTaliya Internship"
                category="INDUSTRY EXPOSURE"
                note="Exposure to applied ML, Python & LLM retrieval workflows (July 2026)"
                color="blue"
                tapeColor="peach"
                rotation="1.2deg"
                iconType="code"
                withPaperClip={true}
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Chronological Journey Map — 4 Grounded Phases */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/10 gap-2">
              <h3 className="font-editorial text-2xl sm:text-3xl text-pastel-ink font-semibold">
                Milestones in Perspective
              </h3>
              <span className="font-mono text-xs text-pastel-inkMuted uppercase tracking-wider font-semibold">
                [ 2022 ➔ PRESENT ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phase 1: Finance Foundations to Computing */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic hover:-translate-y-0.5 transition-all space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold text-pastel-ink">
                    2022
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted uppercase">
                    ACADEMIC FOUNDATIONS
                  </span>
                </div>
                <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                  Starting with Finance, Discovering Computing
                </h4>
                <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                  When I began my Integrated MCA at Amal Jyothi College of Engineering in 2022 (with expected graduation in 2027), I initially imagined a future in finance. But stepping into computer science, writing early programs, and understanding computation opened up a completely new horizon.
                </p>
                <div className="pt-2 border-t border-pastel-ink/10 font-hand text-xs text-pastel-inkMuted font-bold">
                  ✎ Amal Jyothi College of Engineering (Integrated MCA)
                </div>
              </div>

              {/* Phase 2: Core Systems & Cybersecurity */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic hover:-translate-y-0.5 transition-all space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-pastel-blueLight border border-pastel-ink font-comic text-xs font-bold text-pastel-blueDark">
                    2023 — 2024
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted uppercase">
                    SYSTEMS CURIOSITY
                  </span>
                </div>
                <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                  Curiosity About Security &amp; Core Systems
                </h4>
                <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                  Diving into computer science fundamentals, networks, and operating systems sparked curiosity about cybersecurity—learning how protocols communicate, understanding system boundaries, and developing a habit of digging into underlying mechanics.
                </p>
                <div className="pt-2 border-t border-pastel-ink/10 font-hand text-xs text-pastel-inkMuted font-bold">
                  ✎ Protocols, operating systems &amp; network boundaries
                </div>
              </div>

              {/* Phase 3: TechTaliya Internship */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-peachLight border-pastel-ink shadow-comic hover:-translate-y-0.5 transition-all space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-pastel-peach border border-pastel-ink font-comic text-xs font-bold text-pastel-ink">
                    JULY 2026
                  </span>
                  <span className="font-mono text-[11px] text-pastel-peachDark font-bold uppercase">
                    TURNING POINT
                  </span>
                </div>
                <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                  Exposure at TechTaliya Informatics
                </h4>
                <p className="font-sans text-sm text-pastel-ink/95 leading-relaxed">
                  During my internship at TechTaliya Informatics in July 2026, I worked with Python and JavaScript and gained first-hand exposure to applied machine learning and large language model systems. Observing how developers approached a hotel-management chatbot and its retrieval-based workflow helped me understand how AI techniques move from theory into practical software applications.
                </p>
                <div className="pt-2 border-t border-pastel-ink/10 font-hand text-xs text-pastel-inkMuted font-bold">
                  ✎ Applied ML, LLM systems &amp; retrieval architectures
                </div>
              </div>

              {/* Phase 4: Applied AI & Software Systems */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-sageLight border-pastel-ink shadow-comic hover:-translate-y-0.5 transition-all space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-pastel-ink font-comic text-xs font-bold text-pastel-sageDark">
                    PRESENT
                  </span>
                  <span className="font-mono text-[11px] text-pastel-sageDark font-bold uppercase">
                    ACTIVE EXPLORATION
                  </span>
                </div>
                <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                  Applied AI &amp; Software Engineering
                </h4>
                <p className="font-sans text-sm text-pastel-ink/95 leading-relaxed">
                  That exposure encouraged me to explore machine learning, natural language processing, LLMs, and RAG pipelines. I am now interested in building dependable software systems and understanding how AI can be integrated into real applications that people rely on.
                </p>
                <div className="pt-2 border-t border-pastel-ink/10 font-hand text-xs text-pastel-inkMuted font-bold">
                  ✎ Full-stack systems, RAG &amp; applied machine learning
                </div>
              </div>
            </div>
          </div>

          {/* Marginal Reflection Note */}
          <div className="p-5 sm:p-6 rounded-lg border-2 border-pastel-ink bg-white shadow-comic flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-comic text-xs font-bold text-pastel-peachDark uppercase">
                ★ JOURNAL MARGIN NOTE
              </span>
              <p className="font-hand text-lg sm:text-xl text-pastel-ink leading-snug">
                &ldquo;Transitioning from abstract concepts to real code taught me that practical understanding comes from observing real systems in production.&rdquo;
              </p>
            </div>
            <div className="font-mono text-xs text-pastel-inkMuted whitespace-nowrap self-start sm:self-center">
              [ REFLECTION // 02.1 ]
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          FOLIO B: Learning by Building and Participating
          ======================================================== */}
      {isSecondPage && (
        <div className="mt-8 space-y-9">
          {/* Main Title & Opening Reflection */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-comic text-xs font-bold text-pastel-sageDark uppercase tracking-wider">
                ★ FOLIO B • ACTION &amp; COMMUNITY
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
                02 — The Journey
              </h2>
              <div className="font-hand text-xl text-pastel-inkMuted">
                Learning by Building and Participating
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-lg bg-pastel-peachLight border-2 border-pastel-ink shadow-comic">
              <p className="font-sans text-base sm:text-lg text-pastel-ink/95 leading-relaxed">
                Gaining clarity didn&apos;t happen in isolation. It came from building real projects, coordinating community initiatives, and balancing technical discipline with creative craft.
              </p>
            </div>
          </div>

          {/* Section 1: Substantial Project (Synapse) + Sticky Note 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Project Context (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink font-comic text-xs font-bold text-pastel-sageDark uppercase">
                    FINAL-YEAR MCA PROJECT
                  </span>
                  <span className="font-mono text-xs text-pastel-inkMuted font-semibold">
                    ONGOING
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-pastel-ink">
                  Synapse: Learning Through a Complex Project
                </h3>

                <p className="font-sans text-sm sm:text-base text-pastel-ink/90 leading-relaxed">
                  To ground my interest in AI and full-stack systems, I am developing Synapse as my final-year MCA project. Synapse explores how large language models, retrieval-augmented generation (RAG), and structured workflows can assist software project teams with requirements review, meeting intelligence, and task traceability.
                </p>

                <p className="font-sans text-sm text-pastel-inkMuted leading-relaxed">
                  Building Synapse has provided hands-on experience in full-stack architecture with Next.js, FastAPI, PostgreSQL, and local model orchestration, reinforcing the importance of clean API design and human-in-the-loop workflows.
                </p>

                <div className="pt-3 border-t border-pastel-ink/15 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleJumpToSynapse}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-pastel-yellow hover:bg-pastel-yellowLight border border-pastel-ink text-pastel-ink font-comic text-xs font-bold shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>READ SYNAPSE CASE STUDY IN CHAPTER 04</span>
                    <span>➔</span>
                  </button>
                  <span className="font-mono text-xs text-pastel-inkMuted">
                    [ CHAPTER 04 PREVIEW ]
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Sticky Note 1 (Synapse Project Preview) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center pt-2">
              <ProofStickyNote
                imageName="synapse-project-preview.png"
                title="Synapse Project Preview"
                category="ACADEMIC PROJECT"
                note="Exploring AI-assisted project management & retrieval systems (Ongoing)"
                color="sage"
                tapeColor="yellow"
                rotation="-1.2deg"
                iconType="code"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Section 2: Community Involvement & Event Coordination + Sticky Note 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Community Initiatives (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-editorial text-2xl text-pastel-ink font-semibold">
                Community Involvement &amp; Hands-on Learning
              </h3>

              <div className="space-y-3">
                {/* AI Playground */}
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic-sm hover:-translate-y-0.5 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg font-semibold text-pastel-ink">
                      AI Playground Session
                    </span>
                    <span className="font-mono text-xs text-pastel-inkMuted font-bold">
                      JULY 2026
                    </span>
                  </div>
                  <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                    Conducted an interactive AI session for 35 students at St. Antony&apos;s Public School, Anakkal—introducing practical AI tools and workflows for student learning.
                  </p>
                </div>

                {/* NASA Space Apps */}
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic-sm hover:-translate-y-0.5 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg font-semibold text-pastel-ink">
                      NASA Space Apps Challenge 2025
                    </span>
                    <span className="font-mono text-xs text-pastel-inkMuted font-bold">
                      OCT 2025
                    </span>
                  </div>
                  <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                    Led venue management operations at Amal Jyothi College of Engineering, coordinating logistics and crowd management for a national hackathon with 1000+ participants.
                  </p>
                </div>

                {/* GDG & Solutions Challenge Bootcamp */}
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic-sm hover:-translate-y-0.5 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg font-semibold text-pastel-ink">
                      Google Solutions Challenge Bootcamp
                    </span>
                    <span className="font-mono text-xs text-pastel-inkMuted font-bold">
                      MARCH 2025
                    </span>
                  </div>
                  <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                    Organized and hosted the Google Solutions Challenge Bootcamp at Kanjirappally, managing crowd coordination and community activities.
                  </p>
                </div>

                {/* Git Hands-on Workshop */}
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic-sm hover:-translate-y-0.5 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-lg font-semibold text-pastel-ink">
                      Git Hands-on Session (Hacktoberfest)
                    </span>
                    <span className="font-mono text-xs text-pastel-inkMuted font-bold">
                      OCT 2024
                    </span>
                  </div>
                  <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                    Led and organized a Git hands-on workshop as coordinator and resource person, teaching version control fundamentals to participating students.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Sticky Note 2 (NASA Space Apps Lead) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center pt-2">
              <ProofStickyNote
                imageName="nasa-space-apps-lead.png"
                title="Hands-on session on Git and GitHub"
                category="Hacktoberfest 2024"
                note="Led and organized a Git hands-on session as coordinator for the members of GDG on Campus AJCE"
                color="lavender"
                tapeColor="blue"
                rotation="1.5deg"
                iconType="space"
                withPaperClip={true}
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Section 3: Creative Balance & Closing Reflection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* The Knotique & Creative Pursuits (6 cols) */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-lg border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-comic text-xs font-bold text-pastel-peachDark uppercase">
                  ★ CREATIVE PERSPECTIVE
                </span>
                <span className="font-mono text-xs text-pastel-inkMuted font-bold">
                  EST. JAN 2025
                </span>
              </div>
              <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                The Knotique &amp; Creative Venturing
              </h4>
              <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                In January 2025, I founded <em>The Knotique</em>, my small crochet business. Alongside dancing, making handmade cards, and travelling, running this small business taught me patience, consistency, and clear communication—qualities that directly influence how I approach software design.
              </p>
            </div>

            {/* Closing Reflection / Engineering Philosophy (6 cols) */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-lg border-2 border-pastel-ink bg-pastel-blueLight shadow-comic space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="font-comic text-xs font-bold text-pastel-blueDark uppercase">
                  ★ LOOKING FORWARD
                </div>
                <h4 className="font-editorial text-xl font-semibold text-pastel-ink">
                  The Engineer I am Working Towards Becoming
                </h4>
                <p className="font-sans text-sm text-pastel-ink/95 leading-relaxed">
                  I am still actively learning, experimenting, and refining where I want to specialise. My goal is to become an engineer who brings strong ownership, clear communication, and thoughtful problem-solving to every system I help build.
                </p>
              </div>
              <div className="pt-2 border-t border-pastel-ink/15 font-hand text-base text-pastel-ink font-semibold">
                &ldquo;Curiosity, ownership, and dependable execution.&rdquo;
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Progress Divider */}
      <footer className="mt-10 pt-5 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-pastel-inkMuted gap-2">
        <div className="font-comic text-xs uppercase text-pastel-inkMuted font-bold">
          VOLUME 01 • CHAPTER 02
        </div>
        <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
          {isSecondPage ? "END OF CHAPTER 02 ➔ CH.03 THINGS I BUILD" : "CH.02 [1/2] ➔ TURN TO FOLIO 06"}
        </div>
      </footer>
    </div>
  );
}
