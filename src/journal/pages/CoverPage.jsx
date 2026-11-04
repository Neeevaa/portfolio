import React from "react";

export default function CoverPage({ onOpen }) {
  return (
    <div className="relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-10 select-text bg-pastel-paper text-pastel-ink paper-corner-fold overflow-hidden border-2 border-pastel-ink rounded-lg shadow-comic">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-8 sm:left-14 w-28 sm:w-36 h-5 washi-tape-peach rotate-[-1.5deg] z-20 pointer-events-none opacity-90"
        aria-hidden="true"
      />

      {/* Wire Paper Clip Accent in Top Right */}
      <div
        className="paper-clip right-6 sm:right-12 top-[-10px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Bookplate Corner Brackets */}
      <div className="absolute top-2 left-2 text-[10px] text-pastel-ink/40 font-mono select-none pointer-events-none">┌</div>
      <div className="absolute top-2 right-2 text-[10px] text-pastel-ink/40 font-mono select-none pointer-events-none">┐</div>
      <div className="absolute bottom-2 left-2 text-[10px] text-pastel-ink/40 font-mono select-none pointer-events-none">└</div>
      <div className="absolute bottom-2 right-2 text-[10px] text-pastel-ink/40 font-mono select-none pointer-events-none">┘</div>

      {/* Top Issue Stamp & Academic Location Bar */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b-2 border-pastel-ink/20 pb-2.5 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          {/* Issue Stamp Badge */}
          <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink shadow-comic-sm font-hand text-xs sm:text-sm font-bold text-pastel-ink tracking-wide">
            ★ VOL. 01 — RUNTIME &amp; REASONING
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] sm:text-[11px] uppercase text-pastel-inkMuted tracking-wider">
            [ SPECIMEN NO. 2026-NSM ]
          </span>
        </div>

        <div className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-pastel-inkMuted flex items-center gap-2">
          <span>KERALA, INDIA [09°58′N]</span>
          <span className="text-pastel-peachDark font-bold">•</span>
          <span>AUTUMN 2026</span>
        </div>
      </header>

      {/* Main Cover Body */}
      <main className="my-auto py-2 sm:py-4 text-left relative z-10">
        {/* Subtle Decorative Star Doodles */}
        <div
          className="absolute -top-4 right-2 sm:right-6 text-pastel-peach text-lg font-hand animate-pulse motion-reduce:animate-none select-none pointer-events-none"
          aria-hidden="true"
        >
          ✦ ✧ ★
        </div>

        {/* Personal Journal Badge */}
        <div className="inline-flex items-center gap-2 mb-2.5 px-3 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink shadow-comic-sm font-comic text-xs tracking-wide text-pastel-ink">
          <span className="text-pastel-blueDark font-bold">✎</span>
          <span>PERSONAL DIGITAL JOURNAL &amp; ENGINEERING NOTEBOOK</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[0.94] text-pastel-ink">
          NEEVA<br />
          SUNISH<br />
          <span className="relative inline-block pb-3 sm:pb-4">
            MATHEW
            <svg
              className="absolute bottom-0 left-0 w-full text-pastel-yellow pointer-events-none"
              height="12"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 2,7 Q 50,1 98,7"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle Chips (Curated Engineering Disciplines) */}
        <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-2 font-comic text-xs sm:text-sm text-pastel-ink">
          <span className="px-2.5 py-0.5 rounded-full bg-pastel-sageLight border border-pastel-ink shadow-comic-sm flex items-center gap-1">
            <span className="text-pastel-sageDark font-bold">❖</span>
            <span>SOFTWARE CRAFT</span>
          </span>
          <span className="text-pastel-inkMuted font-hand text-sm hidden sm:inline" aria-hidden="true">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-pastel-blueLight border border-pastel-ink shadow-comic-sm flex items-center gap-1">
            <span className="text-pastel-blueDark font-bold">❖</span>
            <span>APPLIED AI / ML</span>
          </span>
          <span className="text-pastel-inkMuted font-hand text-sm hidden sm:inline" aria-hidden="true">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-pastel-lavenderLight border border-pastel-ink shadow-comic-sm flex items-center gap-1">
            <span className="text-pastel-lavenderDark font-bold">❖</span>
            <span>SYSTEMS &amp; CLOUD</span>
          </span>
        </div>

        {/* Handwritten Philosophical Manifesto */}
        <p className="mt-3 sm:mt-3.5 font-hand text-base sm:text-lg text-pastel-inkMuted max-w-xl leading-snug">
          &ldquo;A personal engineering notebook chronicling software craftsmanship, local machine intelligence, systems research, and creative experiments.&rdquo;
        </p>
      </main>

      {/* Bottom Metadata & Primary CTA Bar */}
      <footer className="relative z-10 pt-2.5 border-t-2 border-pastel-ink/20 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-mono text-[10px] sm:text-xs tracking-widest text-pastel-inkMuted uppercase">
            DIGITAL NOTEBOOK // EDITION 2026
          </div>
          <div className="font-hand text-xs sm:text-sm text-pastel-inkMuted">
            10 Chapters • Illustrated Systems • Technical Specimen Notes
          </div>
        </div>

        {/* Prominent, Accessible CTA */}
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open My Journal to Table of Contents"
          className="group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-pastel-peach border-2 border-pastel-ink text-pastel-ink font-comic text-sm tracking-wider uppercase font-bold shadow-comic hover:shadow-comic-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-comic-sm focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:ring-offset-2 focus-visible:ring-offset-pastel-paper focus-visible:outline-none transition-all duration-200 cursor-pointer select-none"
        >
          <span>OPEN MY JOURNAL</span>
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-bold"
            aria-hidden="true"
          >
            ➔
          </span>
        </button>
      </footer>
    </div>
  );
}
