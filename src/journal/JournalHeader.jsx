import React from "react";

export default function JournalHeader({
  currentFolio,
  folioIndex,
  totalFolios,
  onOpenToc,
}) {
  const getSectionTitle = () => {
    if (!currentFolio) return "VOLUME 2026";
    if (currentFolio.type === "cover") return "FRONT COVER & BINDING";
    if (currentFolio.type === "toc") return "TABLE OF CONTENTS";
    const subpageIndicator =
      currentFolio.totalInChapter > 1
        ? ` (${currentFolio.pageInChapter}/${currentFolio.totalInChapter})`
        : "";
    return `CH.${currentFolio.chapterNum} : ${currentFolio.chapterTitle}${subpageIndicator}`;
  };

  return (
    <header className="relative z-30 flex items-center justify-between px-6 sm:px-10 py-3.5 border-b-2 border-pastel-ink/15 bg-pastel-paperAlt/80 font-mono text-xs select-none">
      {/* Left: Author Name & Journal Volume */}
      <div className="flex items-center gap-3">
        <span className="font-comic font-bold text-base text-pastel-ink tracking-wide">
          NEEVA SUNISH MATHEW
        </span>
        <span className="hidden md:inline text-pastel-inkMuted">—</span>
        <span className="hidden md:inline font-hand text-base text-pastel-inkMuted">
          personal engineering journal
        </span>
      </div>

      {/* Center: Comic Chapter Indicator */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-yellowLight border border-pastel-ink/40 shadow-comic-sm font-comic text-xs text-pastel-ink font-semibold">
        <span className="text-pastel-peachDark">★</span>
        <span>{getSectionTitle()}</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4 mr-8 sm:mr-10">
        {/* Table of Contents Button */}
        <button
          onClick={onOpenToc}
          className="flex items-center gap-2 px-3 py-1 rounded bg-pastel-yellow border-1.5 border-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 text-pastel-ink font-comic text-xs uppercase font-bold transition-all cursor-pointer"
        >
          <span>INDEX</span>
          <span className="text-sm">☰</span>
        </button>

        {/* Folio Indicator */}
        <div className="px-2.5 py-0.5 rounded bg-white border border-pastel-ink/30 font-mono text-xs text-pastel-ink font-semibold shadow-comic-sm">
          <span className="text-pastel-inkMuted text-[10px] mr-1 hidden sm:inline">FOLIO</span>
          <span className="text-pastel-blueDark font-bold">
            {String(folioIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-pastel-inkMuted mx-1">/</span>
          <span>{String(totalFolios).padStart(2, "0")}</span>
        </div>
      </div>
    </header>
  );
}
