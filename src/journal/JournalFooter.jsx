import React from "react";
import { chaptersData } from "./data/journalData";

export default function JournalFooter({
  currentFolio,
  rightFolio,
  spreadIndex,
  totalSpreads,
  onPrev,
  onNext,
  onSelectSpread,
  onSelectFolio,
  onOpenToc,
  folioMap,
}) {
  const getChapterSpread = (chapterId) => {
    const startingFolio = folioMap ? folioMap[chapterId] : 2;
    if (startingFolio === 0) return 0;
    return Math.ceil(startingFolio / 2);
  };

  return (
    <footer
      aria-label="Journal Navigation Dock"
      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-pastel-paperAlt/95 text-pastel-ink border-2 border-pastel-ink shadow-comic backdrop-blur-md select-none text-xs transition-all"
    >
      {/* 1. Monogram / Home Disc (Butter Yellow with Ink Border & Comic Shadow) */}
      <button
        type="button"
        onClick={() => onSelectSpread(0)}
        title="Cover Page — Neeva Sunish Mathew"
        className="w-7 h-7 min-w-[28px] rounded-full bg-pastel-yellow text-pastel-ink font-comic font-black text-[11px] flex items-center justify-center border-1.5 border-pastel-ink shadow-comic-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
      >
        NSM
      </button>

      {/* Divider */}
      <div className="w-px h-4 bg-pastel-ink/20 mx-0.5" aria-hidden="true" />

      {/* 2. TOC Grid Icon Button */}
      <button
        type="button"
        onClick={onOpenToc}
        title="Table of Contents (Index) [Key: M]"
        className={`p-1.5 rounded-full transition-all cursor-pointer ${
          spreadIndex === 1
            ? "bg-pastel-yellow text-pastel-ink border-1.5 border-pastel-ink shadow-comic-sm"
            : "text-pastel-ink hover:text-pastel-ink hover:bg-pastel-blueLight border border-transparent"
        }`}
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-4 bg-pastel-ink/20 mx-0.5" aria-hidden="true" />

      {/* 3. Prev Arrow */}
      <button
        type="button"
        onClick={onPrev}
        disabled={spreadIndex <= 0}
        title="Previous Spread [←]"
        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold transition-all ${
          spreadIndex <= 0
            ? "text-pastel-inkMuted/30 cursor-not-allowed"
            : "text-pastel-ink hover:bg-pastel-blueLight hover:border-pastel-ink/30 border border-transparent cursor-pointer active:scale-95"
        }`}
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* 4. Horizontal Chapter & Spread Pills */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5">
        {/* Cover Pill */}
        <button
          type="button"
          onClick={() => onSelectSpread(0)}
          className={`px-2 py-0.5 rounded-full font-comic text-[11px] uppercase transition-all cursor-pointer ${
            spreadIndex === 0
              ? "bg-pastel-yellow text-pastel-ink font-bold border-1.5 border-pastel-ink shadow-comic-sm"
              : "text-pastel-inkMuted hover:text-pastel-ink hover:bg-pastel-blueLight border border-transparent"
          }`}
        >
          CVR
        </button>

        {/* Index / TOC Pill */}
        <button
          type="button"
          onClick={() => onSelectSpread(1)}
          className={`px-2 py-0.5 rounded-full font-comic text-[11px] uppercase transition-all cursor-pointer ${
            spreadIndex === 1
              ? "bg-pastel-yellow text-pastel-ink font-bold border-1.5 border-pastel-ink shadow-comic-sm"
              : "text-pastel-inkMuted hover:text-pastel-ink hover:bg-pastel-blueLight border border-transparent"
          }`}
        >
          TOC
        </button>

        {/* Chapters 01 - 10 */}
        {chaptersData.map((ch) => {
          const targetSpread = getChapterSpread(ch.id);
          const isCurrentChapter =
            (currentFolio && currentFolio.chapterId === ch.id) ||
            (rightFolio && rightFolio.chapterId === ch.id);

          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => onSelectSpread(targetSpread)}
              title={`Chapter ${ch.num} — ${ch.title}`}
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full font-comic text-[11px] flex items-center justify-center transition-all cursor-pointer ${
                isCurrentChapter
                  ? "bg-pastel-blue text-white font-bold border-1.5 border-pastel-ink shadow-comic-sm scale-105"
                  : "text-pastel-inkMuted hover:text-pastel-ink hover:bg-pastel-blueLight border border-transparent"
              }`}
            >
              {ch.num}
            </button>
          );
        })}
      </div>

      {/* 5. Next Arrow */}
      <button
        type="button"
        onClick={onNext}
        disabled={spreadIndex >= totalSpreads - 1}
        title="Next Spread [→]"
        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold transition-all ${
          spreadIndex >= totalSpreads - 1
            ? "text-pastel-inkMuted/30 cursor-not-allowed"
            : "text-pastel-ink hover:bg-pastel-blueLight hover:border-pastel-ink/30 border border-transparent cursor-pointer active:scale-95"
        }`}
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Divider */}
      <div className="hidden md:block w-px h-4 bg-pastel-ink/20 mx-0.5" aria-hidden="true" />

      {/* 6. Spread Badge */}
      <div className="hidden md:flex items-center gap-1 text-[10px] font-mono font-bold text-pastel-ink bg-white/90 border-1.5 border-pastel-ink px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-comic-sm">
        <span>{spreadIndex === 0 ? "COVER" : `SPREAD ${String(spreadIndex).padStart(2, "0")} / ${String(totalSpreads - 1).padStart(2, "0")}`}</span>
      </div>
    </footer>
  );
}
