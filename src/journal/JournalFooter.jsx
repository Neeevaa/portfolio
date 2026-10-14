import React from "react";
import { chaptersData } from "./data/journalData";

export default function JournalFooter({
  currentFolio,
  folioIndex,
  totalFolios,
  folios,
  onPrev,
  onNext,
  onSelectFolio,
  folioMap,
}) {
  const prevFolio = folioIndex > 0 ? folios[folioIndex - 1] : null;
  const nextFolio = folioIndex < totalFolios - 1 ? folios[folioIndex + 1] : null;

  const getFolioShortName = (folio) => {
    if (!folio) return "";
    if (folio.type === "cover") return "COVER";
    if (folio.type === "toc") return "INDEX";
    return `CH.${folio.chapterNum}`;
  };

  return (
    <footer className="relative z-30 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-3.5 border-t-2 border-pastel-ink/15 bg-pastel-paperAlt/80 font-mono text-xs select-none gap-4">
      {/* Previous Page Button */}
      <button
        onClick={onPrev}
        disabled={folioIndex <= 0}
        className={`flex items-center gap-2 px-3 py-1.5 rounded border-1.5 transition-all font-comic text-xs uppercase font-bold ${
          folioIndex <= 0
            ? "border-transparent text-pastel-inkMuted/40 cursor-not-allowed"
            : "border-pastel-ink bg-white hover:bg-pastel-blueLight text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        }`}
      >
        <span>←</span>
        <span>PREV: {prevFolio ? getFolioShortName(prevFolio) : "START"}</span>
      </button>

      {/* Middle Chapter Scrubber Pills (Pastel Comic Stickers) */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full py-1">
        {/* Cover Pill */}
        <button
          onClick={() => onSelectFolio(0)}
          className={`px-2.5 py-1 rounded font-comic text-xs uppercase transition-all ${
            folioIndex === 0
              ? "bg-pastel-yellow border-1.5 border-pastel-ink text-pastel-ink font-bold shadow-comic-sm -translate-y-0.5"
              : "text-pastel-inkMuted hover:text-pastel-ink border border-transparent"
          }`}
        >
          CVR
        </button>

        {/* Index Pill */}
        <button
          onClick={() => onSelectFolio(1)}
          className={`px-2.5 py-1 rounded font-comic text-xs uppercase transition-all ${
            folioIndex === 1
              ? "bg-pastel-yellow border-1.5 border-pastel-ink text-pastel-ink font-bold shadow-comic-sm -translate-y-0.5"
              : "text-pastel-inkMuted hover:text-pastel-ink border border-transparent"
          }`}
        >
          TOC
        </button>

        {/* Chapters 01 - 10 */}
        {chaptersData.map((ch) => {
          const startingFolio = folioMap ? folioMap[ch.id] : 2;
          const isCurrentChapter =
            currentFolio && currentFolio.chapterId === ch.id;

          return (
            <button
              key={ch.id}
              onClick={() => onSelectFolio(startingFolio)}
              title={`${ch.num} — ${ch.title}`}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full font-comic text-xs flex items-center justify-center transition-all ${
                isCurrentChapter
                  ? "bg-pastel-peach border-1.5 border-pastel-ink text-pastel-ink font-bold shadow-comic-sm -translate-y-0.5 scale-105"
                  : "bg-white/80 hover:bg-pastel-blueLight border border-pastel-ink/30 text-pastel-inkMuted hover:text-pastel-ink"
              }`}
            >
              {ch.num}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        onClick={onNext}
        disabled={folioIndex >= totalFolios - 1}
        className={`flex items-center gap-2 px-3 py-1.5 rounded border-1.5 transition-all font-comic text-xs uppercase font-bold ${
          folioIndex >= totalFolios - 1
            ? "border-transparent text-pastel-inkMuted/40 cursor-not-allowed"
            : "border-pastel-ink bg-pastel-peach text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        }`}
      >
        <span>NEXT: {nextFolio ? getFolioShortName(nextFolio) : "FINIS"}</span>
        <span>→</span>
      </button>
    </footer>
  );
}
