import React from "react";
import ProofStickyNote from "../components/ProofStickyNote";

/**
 * AboutMePage
 * Specialized editorial layout for Chapter 01 — About Me.
 * Uses the exact authentic text provided without AI-generated text.
 * Features 4 SVG-illustrated transition cards (Finance, Computing & Security, Internship, Applied AI & Software)
 * and tactile sticky note image placeholders with explicit filenames.
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
            {isSecondPage ? "FOLIO 04 [2/2]" : "FOLIO 03 [1/2]"}
          </span>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-xs text-pastel-inkMuted">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </header>

      {/* ========================================================
          PAGE 1: Personal Introduction, Transition SVGs & Exploration
          ======================================================== */}
      {!isSecondPage && (
        <div className="mt-8 space-y-9">
          {/* Main Title & Personal Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Narrative with Exact User Text (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
                01 — About Me
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-pastel-ink/90 leading-relaxed font-sans">
                <p className="first-letter:font-editorial first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-pastel-peachDark">
                  I am an MCA student at Amal Jyothi College of Engineering, pursuing my studies with an expected graduation at 2027.
                </p>
                <p>
                  My journey into technology was not completely planned from the beginning. I once imagined a future in finance, but exploring computing opened up new possibilities. I became curious about cybersecurity before discovering applied machine learning and large language model systems during my internship at TechTaliya.
                </p>
                <p>
                  That experience encouraged me to explore machine learning, natural language processing, LLMs, and AI engineering. I am now interested in building useful software systems and understanding how AI can be integrated into real applications.
                </p>
              </div>
            </div>

            {/* Sticky Note Placeholder 1: Personal Photo / Workspace (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center pt-2">
              <ProofStickyNote
                imageName="neeva-personal-portrait.png"
                title="Personal Photo / Workspace"
                category="PERSONAL PHOTO"
                note="MCA student at Amal Jyothi College of Engineering (expected graduation at 2027)"
                color="blue"
                tapeColor="peach"
                rotation="1.2deg"
                iconType="portrait"
                withPaperClip={true}
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* ============================================================
              Transition Flow with 4 Dedicated SVGs (replacing text)
              1. Finance (Accounts SVG)
              2. Computing & Security (Security SVG)
              3. Internship (TechTaliya SVG)
              4. Applied AI & Software (AI/Software SVG)
              ============================================================ */}
          <div className="p-5 sm:p-6 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-4">
            <div className="pb-3 border-b-2 border-pastel-ink/10 flex items-center justify-between">
              <h3 className="font-editorial text-2xl sm:text-3xl text-pastel-ink font-semibold">
                My journey to what I am today
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1: Finance (Accounts SVG) */}
              <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic-sm hover:-translate-y-1 transition-transform space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-md bg-white border-2 border-pastel-ink flex items-center justify-center shadow-comic-sm">
                    {/* Accounts SVG */}
                    <svg className="w-8 h-8 text-pastel-yellowDark" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                      <rect x="8" y="6" width="32" height="36" rx="3" strokeWidth="2.5" fill="#fffcee" />
                      <line x1="14" y1="14" x2="34" y2="14" strokeWidth="2" strokeDasharray="2 2" stroke="#2D2A28" />
                      <line x1="14" y1="20" x2="28" y2="20" strokeWidth="2" stroke="#2D2A28" />
                      <rect x="14" y="26" width="4" height="10" fill="#f7df94" stroke="#2D2A28" strokeWidth="1.5" />
                      <rect x="22" y="22" width="4" height="14" fill="#f7df94" stroke="#2D2A28" strokeWidth="1.5" />
                      <rect x="30" y="18" width="4" height="18" fill="#f7df94" stroke="#2D2A28" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h4 className="font-editorial text-lg text-pastel-ink font-semibold">
                    Finance
                  </h4>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    I once imagined a future in finance, but exploring computing opened up new possibilities.
                  </p>
                </div>
                <div className="pt-2 border-t border-pastel-ink/15 font-hand text-xs text-pastel-inkMuted font-bold">
                  ★ Early path
                </div>
              </div>

              {/* Step 2: Computing & Security SVG */}
              <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-blueLight shadow-comic-sm hover:-translate-y-1 transition-transform space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-md bg-white border-2 border-pastel-ink flex items-center justify-center shadow-comic-sm">
                    {/* Computing & Security SVG */}
                    <svg className="w-8 h-8 text-pastel-blueDark" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                      <rect x="6" y="8" width="36" height="24" rx="2" strokeWidth="2.5" fill="#e9f1f5" />
                      <path d="M12 16 L17 20 L12 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="20" y1="24" x2="26" y2="24" strokeWidth="2" strokeLinecap="round" />
                      <path d="M34 20 C34 20, 39 21, 39 25 C39 30, 34 33, 34 33 C34 33, 29 30, 29 25 C29 21, 34 20, 34 20 Z" fill="#ffffff" strokeWidth="2" />
                      <circle cx="34" cy="26" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <h4 className="font-editorial text-lg text-pastel-ink font-semibold">
                    Computing &amp; Security
                  </h4>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    I became curious about cybersecurity before discovering applied machine learning and large language model systems.
                  </p>
                </div>
                <div className="pt-2 border-t border-pastel-ink/15 font-hand text-xs text-pastel-inkMuted font-bold">
                  ★ Systems curiosity
                </div>
              </div>

              {/* Step 3: Internship SVG */}
              <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-peachLight shadow-comic-sm hover:-translate-y-1 transition-transform space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-md bg-white border-2 border-pastel-ink flex items-center justify-center shadow-comic-sm">
                    {/* TechTaliya Internship SVG */}
                    <svg className="w-8 h-8 text-pastel-peachDark" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                      <rect x="8" y="14" width="32" height="26" rx="3" strokeWidth="2.5" fill="#fdf2f0" />
                      <path d="M18 14 V10 C18 8.5 19.5 7 21 7 H27 C28.5 7 30 8.5 30 10 V14" strokeWidth="2.5" />
                      <line x1="8" y1="23" x2="40" y2="23" strokeWidth="2" />
                      <rect x="21" y="20" width="6" height="6" rx="1" fill="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 className="font-editorial text-lg text-pastel-ink font-semibold">
                    TechTaliya Internship
                  </h4>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    Discovered applied machine learning and large language model systems during my internship at TechTaliya.
                  </p>
                </div>
                <div className="pt-2 border-t border-pastel-ink/15 font-hand text-xs text-pastel-inkMuted font-bold">
                  ★ Practical exposure
                </div>
              </div>

              {/* Step 4: Applied AI & Software SVG */}
              <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-sageLight shadow-comic-sm hover:-translate-y-1 transition-transform space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-md bg-white border-2 border-pastel-ink flex items-center justify-center shadow-comic-sm">
                    {/* Applied AI & Software SVG */}
                    <svg className="w-8 h-8 text-pastel-sageDark" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                      <circle cx="12" cy="14" r="4" fill="#eef4ef" strokeWidth="2" />
                      <circle cx="12" cy="34" r="4" fill="#eef4ef" strokeWidth="2" />
                      <circle cx="26" cy="24" r="4" fill="#ffffff" strokeWidth="2.5" />
                      <circle cx="38" cy="14" r="4" fill="#eef4ef" strokeWidth="2" />
                      <circle cx="38" cy="34" r="4" fill="#eef4ef" strokeWidth="2" />
                      <line x1="16" y1="16" x2="22" y2="22" strokeWidth="2" />
                      <line x1="16" y1="32" x2="22" y2="26" strokeWidth="2" />
                      <line x1="30" y1="22" x2="34" y2="16" strokeWidth="2" />
                      <line x1="30" y1="26" x2="34" y2="32" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 className="font-editorial text-lg text-pastel-ink font-semibold">
                    Applied AI &amp; Software
                  </h4>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    Exploring machine learning, NLP, LLMs, and AI engineering to build useful software systems.
                  </p>
                </div>
                <div className="pt-2 border-t border-pastel-ink/15 font-hand text-xs text-pastel-inkMuted font-bold">
                  ★ Active exploration
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Professional Direction + Sticky Note 2 (The Knotique) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Professional Direction (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-2xl text-pastel-ink font-semibold">
                  Areas I am Actively Exploring
                </h3>
              </div>

              <div className="space-y-2.5">
                {[
                  "AI and machine learning engineering.",
                  "Software engineering and full-stack development.",
                  "LLM applications and Retrieval-Augmented Generation.",
                  "Research and practical experimentation.",
                  "Building useful, human-centred technology.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md border-2 border-pastel-ink bg-white shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 transition-all flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-pastel-blueLight border border-pastel-ink flex items-center justify-center font-comic font-bold text-xs text-pastel-blueDark flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-sans text-sm text-pastel-ink font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Note Placeholder 2: The Knotique (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center pt-2">
              <ProofStickyNote
                imageName="the-knotique-brand-logo.png"
                title="The Knotique"
                category="CROCHET BUSINESS"
                note="My small crochet business"
                color="peach"
                tapeColor="yellow"
                rotation="-1.5deg"
                iconType="crochet"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          PAGE 2: Beyond the Screen, Personal Qualities & Values
          ======================================================== */}
      {isSecondPage && (
        <div className="mt-8 space-y-9">
          {/* Main Title & Outside Technical Work Paragraph */}
          <div className="space-y-4">
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
              01 — About Me
            </h2>
            <div className="p-5 sm:p-6 rounded-lg bg-pastel-peachLight border-2 border-pastel-ink shadow-comic">
              <p className="font-sans text-base sm:text-lg text-pastel-ink/95 leading-relaxed">
                Outside technical work, I enjoy bringing people together, sharing what I learn, coordinating activities, teaching hands-on sessions, dancing, travelling, making handmade cards, and running my small crochet business, The Knotique.
              </p>
            </div>
          </div>

          {/* Sticky Notes 3 & 4 + Personal Qualities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Personal Qualities (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-editorial text-2xl text-pastel-ink font-semibold">
                Qualities Demonstrated Through My Activities
              </h3>

              <div className="space-y-3">
                {[
                  "Curiosity and continuous learning.",
                  "Collaboration and communication.",
                  "Taking initiative.",
                  "Organising and coordinating activities.",
                  "Connecting technical interests with creative work.",
                ].map((quality, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 transition-all flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-pastel-sageLight border border-pastel-ink flex items-center justify-center font-comic font-bold text-xs text-pastel-sageDark flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-sans text-sm sm:text-base text-pastel-ink font-medium">
                      {quality}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sticky Note Placeholders 3 & 4 (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col items-center sm:items-end">
              {/* Sticky Note 3: Community Workshop */}
              <ProofStickyNote
                imageName="community-workshop-gdg.png"
                title="Community &amp; Hands-on Sessions"
                category="COMMUNITY"
                note="Bringing people together, coordinating activities, and teaching hands-on sessions"
                color="sage"
                tapeColor="yellow"
                rotation="1deg"
                iconType="community"
                className="w-full max-w-sm"
              />

              {/* Sticky Note 4: Handmade Cards & Creative Craft */}
              <ProofStickyNote
                imageName="handmade-cards-craft.png"
                title="Handmade Cards &amp; Creative Work"
                category="CREATIVE CRAFT"
                note="Making handmade cards and creative craft"
                color="lavender"
                tapeColor="sage"
                rotation="-1.2deg"
                iconType="craft"
                withPaperClip={true}
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Personal Values & Closing Statement */}
          <div className="p-6 sm:p-7 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic space-y-2">
            <div className="font-comic text-xs uppercase font-bold text-pastel-peachDark">
              ★ CORE VALUES
            </div>
            <p className="font-editorial text-2xl sm:text-3xl italic text-pastel-ink leading-relaxed">
              &ldquo;I value continuous learning, meaningful work, kindness, trust, and becoming someone others can rely on.&rdquo;
            </p>
          </div>
        </div>
      )}

      {/* Clean Bottom Progress Divider (without unwanted footnote text) */}
      <footer className="mt-10 pt-5 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-pastel-inkMuted gap-2">
        <div className="font-comic text-xs uppercase text-pastel-inkMuted font-bold">
          VOLUME 01 • CHAPTER 01
        </div>
        <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
          {isSecondPage ? "END OF CHAPTER 01 ➔ CH.02 THE JOURNEY" : "CH.01 [1/2] ➔ TURN TO FOLIO 04"}
        </div>
      </footer>
    </div>
  );
}
