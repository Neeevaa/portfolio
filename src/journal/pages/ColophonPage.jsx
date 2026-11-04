import React from "react";

/**
 * ColophonPage
 * The inside right page of Spread 10, closing the journal codex alongside Chapter 10 (Transmission/Contact).
 * Features archival colophon, typography notes, closing wax seal, and return controls.
 */
export default function ColophonPage({ onReturnCover, onOpenIndex }) {
  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-6 md:p-7 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-16 w-24 sm:w-32 h-5 washi-tape-peach rotate-[1.5deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Bar */}
      <header className="relative z-10 flex items-center justify-between border-b-2 border-pastel-ink/20 pb-2.5 pt-1">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink tracking-wide">
            ★ CLOSING COLOPHON
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] text-pastel-inkMuted uppercase tracking-wider hidden sm:inline">
            [ END OF CODEX // FOLIO 20 ]
          </span>
        </div>
        <div className="font-mono text-xs text-pastel-inkMuted">
          FINIS • 2026
        </div>
      </header>

      {/* Main Colophon Content */}
      <main className="my-auto py-2 relative z-10">
        <div className="comic-panel p-4 sm:p-5 bg-white/90 border-2 border-pastel-ink shadow-comic text-center space-y-2.5">
          <div className="font-editorial text-2xl sm:text-3xl font-bold text-pastel-ink tracking-tight">
            FINIS
          </div>
          <p className="font-hand text-sm sm:text-base text-pastel-ink max-w-md mx-auto leading-relaxed">
            &ldquo;Thank you for leafing through this engineering notebook. Every system, interface, and research pipeline documented here reflects deliberate craft and an ongoing inquiry into software intelligence.&rdquo;
          </p>

          <div className="w-12 h-0.5 bg-pastel-ink/20 mx-auto" />

          {/* Typography & Technology Credits */}
          <div className="text-left font-mono text-[10px] sm:text-[11px] text-pastel-inkMuted space-y-1 max-w-sm mx-auto bg-pastel-paperAlt p-2.5 rounded border border-pastel-ink/25">
            <div><strong className="text-pastel-ink">TYPESETTING:</strong> Playfair Editorial, Comic Ink &amp; JetBrains Mono</div>
            <div><strong className="text-pastel-ink">CHASSIS:</strong> React 18, Vite &amp; Tailwind CSS</div>
            <div><strong className="text-pastel-ink">PHYSICS:</strong> 3D Codex Page-Turn Engine with Real Center Spine</div>
            <div><strong className="text-pastel-ink">AUTHOR:</strong> Neeva Sunish Mathew • Kochi, Kerala</div>
          </div>

          {/* Archival Closing Seal */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-sageLight border border-pastel-ink shadow-comic-sm font-comic text-xs text-pastel-ink font-bold">
            <span className="text-pastel-sageDark">✔</span>
            <span>VERIFIED ARCHIVAL CODEX • AUTUMN 2026</span>
          </div>
        </div>
      </main>

      {/* Quick Navigation Footer */}
      <footer className="relative z-10 pt-2 border-t-2 border-pastel-ink/20 flex flex-wrap items-center justify-between gap-2">
        {onReturnCover && (
          <button
            type="button"
            onClick={onReturnCover}
            className="px-3 py-1.5 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold uppercase shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>↺</span>
            <span>Return to Front Cover</span>
          </button>
        )}
        {onOpenIndex && (
          <button
            type="button"
            onClick={onOpenIndex}
            className="px-3 py-1.5 rounded bg-white hover:bg-pastel-blueLight border border-pastel-ink font-comic text-xs font-bold uppercase shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1"
          >
            <span>☰</span>
            <span>Table of Contents</span>
          </button>
        )}
      </footer>
    </div>
  );
}
