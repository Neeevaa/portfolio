import React from "react";
import ProofStickyNote from "../components/ProofStickyNote";

/**
 * AboutMePage
 * Specialized editorial layout for Chapter 01 — About Me.
 * Preserves authentic text across two balanced folio spreads:
 * - Page 1 (about-p1): Origins, computing journey, 4 transition cards, and profile specimen.
 * - Page 2 (about-p2): Outside technical work, creative craft (The Knotique), personal qualities, and core values.
 */
export default function AboutMePage({ pageData }) {
  const {
    id,
    chapterNum = "01",
    chapterTitle = "ABOUT ME",
    date = "AUTUMN 2026",
    location = "KERALA, IN",
  } = pageData;

  const isSecondPage = id === "about-p2";

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-18 w-24 sm:w-32 h-5 washi-tape-yellow rotate-[1deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Header & Running Chapter Metadata Bar */}
      <header className="flex flex-wrap items-center justify-between pb-2.5 border-b-2 border-pastel-ink/15 gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-pastel-yellow border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted" aria-hidden="true">/</span>
          <span className="font-comic text-xs sm:text-sm font-bold tracking-wide uppercase text-pastel-ink">
            {chapterTitle}
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-pastel-ink/40 font-mono text-[10px] sm:text-[11px] text-pastel-inkMuted font-semibold">
            {isSecondPage ? "FOLIO 03 [2/2]" : "FOLIO 02 [1/2]"}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-pastel-inkMuted">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </header>

      {/* ========================================================
          PAGE 1: Personal Introduction & Transition Flow
          ======================================================== */}
      {!isSecondPage && (
        <main className="my-auto py-2 space-y-3 sm:space-y-3.5">
          {/* Main Title & Personal Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Narrative (7 cols) */}
            <div className="md:col-span-7 space-y-2">
              <h2 className="font-editorial text-2xl sm:text-3xl font-normal leading-tight text-pastel-ink">
                01 — About Me
              </h2>

              <div className="space-y-1.5 text-xs sm:text-sm text-pastel-ink/90 leading-relaxed font-sans">
                <p>
                  I’m someone who enjoys understanding how things work, figuring out how separate pieces fit together, and turning ideas into something useful. My interests sit at the intersection of software engineering, emerging AI technologies, and the human experiences that give technology its purpose.
                </p>
                <p>
                  I like learning by experimenting, asking questions, and working through problems I don’t fully understand yet. I’m interested not just in what a system can do, but also in how it works and where it could be made more useful.
                </p>
              </div>
            </div>

            {/* Profile Sticky Note (5 cols) */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <ProofStickyNote
                imageName="neeva-personal-portrait.png"
                title="Hi! I'm Neeva Sunish Mathew"
                category="Profile"
                note="MCA student at Amal Jyothi College of Engineering. Looking for opportunities in AI, software engineering, and systems craft."
                color="blue"
                tapeColor="peach"
                rotation="1deg"
                iconType="portrait"
                withPaperClip={true}
                className="w-full max-w-[240px] sm:max-w-[260px]"
              />
            </div>
          </div>

          {/* Transition Flow with 4 Cards */}
          <div className="p-2.5 sm:p-3 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-2">
            <div className="flex items-center justify-between border-b border-pastel-ink/10 pb-1.5">
              <h3 className="font-editorial text-sm sm:text-base text-pastel-ink font-semibold">
                My journey to what I am today
              </h3>
              <span className="font-mono text-[10px] text-pastel-inkMuted uppercase">4 EVOLUTIONARY PHASES</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {/* Step 1: Finance */}
              <div className="p-2 rounded border border-pastel-ink bg-pastel-yellowLight shadow-comic-sm flex flex-col justify-between">
                <div>
                  <div className="font-comic font-bold text-xs text-pastel-ink flex items-center gap-1">
                    <span>❖</span> Finance
                  </div>
                  <p className="font-sans text-[11px] text-pastel-ink/90 leading-snug mt-0.5">
                    I once imagined a future in finance, but exploring computing opened up new possibilities.
                  </p>
                </div>
                <div className="pt-1 mt-1 border-t border-pastel-ink/10 font-hand text-[10px] text-pastel-inkMuted font-bold">
                  Early path
                </div>
              </div>

              {/* Step 2: Computing & Security */}
              <div className="p-2 rounded border border-pastel-ink bg-pastel-blueLight shadow-comic-sm flex flex-col justify-between">
                <div>
                  <div className="font-comic font-bold text-xs text-pastel-ink flex items-center gap-1">
                    <span>❖</span> Computing &amp; Security
                  </div>
                  <p className="font-sans text-[11px] text-pastel-ink/90 leading-snug mt-0.5">
                    Curiosity in cybersecurity led to understanding network primitives and software foundations.
                  </p>
                </div>
                <div className="pt-1 mt-1 border-t border-pastel-ink/10 font-hand text-[10px] text-pastel-inkMuted font-bold">
                  Systems curiosity
                </div>
              </div>

              {/* Step 3: Internship */}
              <div className="p-2 rounded border border-pastel-ink bg-pastel-peachLight shadow-comic-sm flex flex-col justify-between">
                <div>
                  <div className="font-comic font-bold text-xs text-pastel-ink flex items-center gap-1">
                    <span>❖</span> TechTaliya Internship
                  </div>
                  <p className="font-sans text-[11px] text-pastel-ink/90 leading-snug mt-0.5">
                    Discovered applied machine learning and LLM agent architectures during industry internship.
                  </p>
                </div>
                <div className="pt-1 mt-1 border-t border-pastel-ink/10 font-hand text-[10px] text-pastel-inkMuted font-bold">
                  Practical exposure
                </div>
              </div>

              {/* Step 4: Applied AI & Software */}
              <div className="p-2 rounded border border-pastel-ink bg-pastel-sageLight shadow-comic-sm flex flex-col justify-between">
                <div>
                  <div className="font-comic font-bold text-xs text-pastel-ink flex items-center gap-1">
                    <span>❖</span> Applied AI &amp; Software
                  </div>
                  <p className="font-sans text-[11px] text-pastel-ink/90 leading-snug mt-0.5">
                    Exploring ML, NLP, and agentic workflows to build reliable, human-centred software systems.
                  </p>
                </div>
                <div className="pt-1 mt-1 border-t border-pastel-ink/10 font-hand text-[10px] text-pastel-inkMuted font-bold">
                  Active exploration
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================
          PAGE 2: Beyond the Screen, Qualities, Craft & Values
          ======================================================== */}
      {isSecondPage && (
        <main className="my-auto py-2 space-y-3 sm:space-y-3.5">
          {/* Main Title & Outside Technical Work Paragraph */}
          <div className="space-y-1.5">
            <h2 className="font-editorial text-2xl sm:text-3xl font-normal leading-tight text-pastel-ink">
              01 — Beyond the Screen
            </h2>
            <div className="p-2.5 sm:p-3 rounded-lg bg-pastel-peachLight border-2 border-pastel-ink shadow-comic">
              <p className="font-sans text-xs sm:text-sm text-pastel-ink/95 leading-relaxed">
                Outside technical work, I enjoy bringing people together, sharing what I learn, coordinating activities, teaching hands-on sessions, dancing, travelling, making handmade cards, and running my small crochet business, <strong>The Knotique</strong>.
              </p>
            </div>
          </div>

          {/* Qualities & Sticky Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Qualities List (7 cols) */}
            <div className="md:col-span-7 space-y-1.5">
              <div className="font-editorial text-sm sm:text-base text-pastel-ink font-semibold">
                Qualities &amp; Areas I Am Actively Exploring
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {[
                  "AI and machine learning engineering.",
                  "Full-stack and systems development.",
                  "LLM applications & contextual RAG.",
                  "Collaboration, initiative & organizing.",
                  "Connecting technical work with creative craft.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-1.5 px-2 rounded border border-pastel-ink bg-white shadow-comic-sm flex items-center gap-1.5"
                  >
                    <span className="w-4 h-4 rounded-full bg-pastel-sageLight border border-pastel-ink flex items-center justify-center font-comic font-bold text-[10px] text-pastel-sageDark flex-shrink-0">
                      ✓
                    </span>
                    <span className="font-sans text-[11px] text-pastel-ink font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Notes (5 cols) */}
            <div className="md:col-span-5 flex justify-center md:justify-end gap-2">
              <ProofStickyNote
                imageName="the-knotique-brand-logo.png"
                title="The Knotique"
                category="CROCHET"
                note="My small crochet business"
                color="peach"
                tapeColor="yellow"
                rotation="-1deg"
                iconType="crochet"
                className="w-full max-w-[170px]"
              />
              <ProofStickyNote
                imageName="community-workshop-gdg.png"
                title="Community Sessions"
                category="LEADERSHIP"
                note="Teaching hands-on sessions & organizing"
                color="sage"
                tapeColor="peach"
                rotation="1.2deg"
                iconType="community"
                className="w-full max-w-[170px] hidden sm:block"
              />
            </div>
          </div>

          {/* Core Values Quote */}
          <div className="p-2.5 sm:p-3 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic space-y-1">
            <div className="font-comic text-[10px] uppercase font-bold text-pastel-peachDark">
              ★ CORE VALUES
            </div>
            <p className="font-editorial text-base sm:text-lg italic text-pastel-ink leading-snug">
              &ldquo;I value continuous learning, meaningful work, kindness, trust, and becoming someone others can rely on.&rdquo;
            </p>
          </div>
        </main>
      )}

      {/* Progress Footer */}
      <footer className="pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted">
        <div className="font-comic uppercase text-pastel-inkMuted font-bold">
          VOLUME 01 • CHAPTER 01
        </div>
        <div className="font-comic uppercase tracking-wider text-pastel-blueDark font-bold">
          {isSecondPage ? "END OF CHAPTER 01 ➔ CH.02 THE JOURNEY" : "CH.01 [1/2] ➔ TURN TO FOLIO 03"}
        </div>
      </footer>
    </div>
  );
}
