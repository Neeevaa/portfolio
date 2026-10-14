import React from "react";

export default function CoverPage({ onOpen }) {
  return (
    <div className="relative min-h-[580px] md:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 select-text bg-pastel-paper text-pastel-ink paper-corner-fold overflow-hidden">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-16 w-28 sm:w-36 h-6 washi-tape-peach rotate-[-1.5deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Wire Paper Clip Accent in Top Right */}
      <div
        className="paper-clip right-8 sm:right-16 top-[-10px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Issue Stamp & Academic Location Bar */}
      <header className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-pastel-ink/20 pb-5 pt-2">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Issue Stamp Badge */}
          <span className="px-3 py-1 rounded bg-pastel-yellow border-2 border-pastel-ink shadow-comic-sm font-hand text-base font-bold text-pastel-ink tracking-wide">
            ★ VOL. 01 — RUNTIME &amp; REASONING
          </span>
          <span className="hidden md:inline-block font-mono text-xs uppercase text-pastel-inkMuted tracking-wider">
            [ SPECIMEN NO. 2026-NSM ]
          </span>
        </div>

        <div className="font-mono text-xs tracking-wider uppercase text-pastel-inkMuted flex items-center gap-2">
          <span>KERALA, INDIA [09°58′N 76°17′E]</span>
          <span className="text-pastel-peachDark font-bold">•</span>
          <span>AUTUMN 2026</span>
        </div>
      </header>

      {/* Main Cover Body */}
      <main className="my-auto py-8 sm:py-12 text-left relative z-10">
        {/* Decorative Star Doodles (respects prefers-reduced-motion) */}
        <div
          className="absolute -top-6 right-4 sm:right-12 text-pastel-peach text-2xl font-hand animate-pulse motion-reduce:animate-none select-none pointer-events-none"
          aria-hidden="true"
        >
          ✦ ✧ ★
        </div>

        {/* Personal Journal Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded bg-pastel-blueLight border-2 border-pastel-ink shadow-comic-sm font-comic text-xs sm:text-sm tracking-wide text-pastel-ink">
          <span className="text-pastel-blueDark font-bold">✎</span>
          <span>PERSONAL DIGITAL JOURNAL &amp; ENGINEERING NOTEBOOK</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.92] text-pastel-ink">
          NEEVA<br />
          <span className="relative inline-block">
            SUNISH
            <svg
              className="absolute -bottom-2 left-0 w-full text-pastel-yellow"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span><br />
          MATHEW
        </h1>

        {/* Subtitle Chips (Curated Engineering Disciplines) */}
        <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 font-comic text-sm sm:text-base text-pastel-ink">
          <span className="px-3 py-1 rounded-full bg-pastel-sageLight border-2 border-pastel-ink shadow-comic-sm flex items-center gap-1.5">
            <span className="text-pastel-sageDark font-bold">❖</span>
            <span>SOFTWARE CRAFT</span>
          </span>
          <span className="text-pastel-inkMuted font-hand text-lg hidden sm:inline" aria-hidden="true">•</span>
          <span className="px-3 py-1 rounded-full bg-pastel-blueLight border-2 border-pastel-ink shadow-comic-sm flex items-center gap-1.5">
            <span className="text-pastel-blueDark font-bold">❖</span>
            <span>APPLIED AI / ML</span>
          </span>
          <span className="text-pastel-inkMuted font-hand text-lg hidden sm:inline" aria-hidden="true">•</span>
          <span className="px-3 py-1 rounded-full bg-pastel-lavenderLight border-2 border-pastel-ink shadow-comic-sm flex items-center gap-1.5">
            <span className="text-pastel-lavenderDark font-bold">❖</span>
            <span>SYSTEMS &amp; CLOUD</span>
          </span>
        </div>

        {/* Handwritten Philosophical / Curious Manifesto */}
        <p className="mt-5 font-hand text-lg sm:text-xl text-pastel-inkMuted max-w-xl leading-snug">
          &ldquo;A personal engineering notebook chronicling software craftsmanship, local machine intelligence, systems research, and creative experiments.&rdquo;
        </p>
      </main>

      {/* Bottom Metadata & Primary CTA Bar */}
      <footer className="relative z-10 pt-5 border-t-2 border-pastel-ink/20 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <div className="font-mono text-xs tracking-widest text-pastel-inkMuted uppercase">
            DIGITAL NOTEBOOK // EDITION 2026
          </div>
          <div className="font-hand text-base text-pastel-inkMuted mt-0.5">
            10 Chapters • Illustrated Systems • Technical Specimen Notes
          </div>
        </div>

        {/* Prominent, Accessible CTA */}
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open My Journal to Table of Contents"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-md bg-pastel-peach border-2 border-pastel-ink text-pastel-ink font-comic text-base tracking-wider uppercase font-bold shadow-comic hover:shadow-comic-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-comic-sm focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:ring-offset-2 focus-visible:ring-offset-pastel-paper focus-visible:outline-none transition-all duration-200 cursor-pointer select-none"
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
