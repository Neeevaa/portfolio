import React from "react";

export default function JournalHeader({
  currentFolio,
  rightFolio,
  spreadIndex,
  totalSpreads,
  totalFolios,
  onOpenToc,
}) {
  const getSectionTitle = () => {
    if (spreadIndex === 0) return "FRONT COVER // VOLUME 01";
    if (spreadIndex === 1) return "TABLE OF CONTENTS & CHAPTER 01";
    if (!currentFolio) return "VOLUME 2026";
    if (currentFolio.chapterTitle) {
      const leftTitle = `CH.${currentFolio.chapterNum} : ${currentFolio.chapterTitle}`;
      if (rightFolio && rightFolio.chapterNum && rightFolio.chapterNum !== currentFolio.chapterNum) {
        return `${leftTitle} / CH.${rightFolio.chapterNum} : ${rightFolio.chapterTitle}`;
      }
      return leftTitle;
    }
    return "ARCHIVAL CODEX 2026";
  };

  const getFolioIndicator = () => {
    if (spreadIndex === 0) {
      return (
        <span className="text-pastel-blueDark font-bold">
          FRONT COVER
        </span>
      );
    }
    const leftNum = currentFolio ? String(currentFolio.folioIndex + 1).padStart(2, "0") : "01";
    const rightNum = rightFolio ? String(rightFolio.folioIndex + 1).padStart(2, "0") : "END";
    return (
      <>
        <span className="text-pastel-inkMuted text-[10px] mr-1 hidden sm:inline">FOLIOS</span>
        <span className="text-pastel-blueDark font-bold">{leftNum}</span>
        <span className="text-pastel-inkMuted mx-0.5">–</span>
        <span className="text-pastel-blueDark font-bold">{rightNum}</span>
        <span className="text-pastel-inkMuted mx-1">/</span>
        <span>{String(totalFolios).padStart(2, "0")}</span>
      </>
    );
  };

  return (
    <header className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-2 border-b-2 border-pastel-ink/15 bg-pastel-paperAlt/90 font-mono text-xs select-none">
      {/* Left: Author Name & Journal Volume */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="font-comic font-bold text-sm sm:text-base text-pastel-ink tracking-wide">
          NEEVA SUNISH MATHEW
        </span>
        <span className="hidden md:inline text-pastel-inkMuted">—</span>
        <span className="hidden md:inline font-hand text-sm text-pastel-inkMuted">
          personal engineering journal
        </span>
      </div>

      {/* Center: Comic Chapter Indicator */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-0.5 rounded-full bg-pastel-yellowLight border border-pastel-ink/40 shadow-comic-sm font-comic text-xs text-pastel-ink font-semibold">
        <span className="text-pastel-peachDark">★</span>
        <span className="truncate max-w-md">{getSectionTitle()}</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3 mr-6 sm:mr-8">
        {/* Table of Contents Button */}
        <button
          type="button"
          onClick={onOpenToc}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-pastel-yellow border-1.5 border-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 text-pastel-ink font-comic text-xs uppercase font-bold transition-all cursor-pointer"
        >
          <span>INDEX</span>
          <span className="text-xs">☰</span>
        </button>

        {/* Folio Indicator */}
        <div className="px-2 py-0.5 rounded bg-white border border-pastel-ink/30 font-mono text-xs text-pastel-ink font-semibold shadow-comic-sm">
          {getFolioIndicator()}
        </div>
      </div>
    </header>
  );
}
