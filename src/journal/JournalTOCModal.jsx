import React, { useEffect, useRef } from "react";
import { chaptersData, chapterCategoryStyles } from "./data/journalData";

export default function JournalTOCModal({
  isOpen,
  onClose,
  currentFolioIndex,
  onSelectFolio,
  folioMap,
}) {
  const closeButtonRef = useRef(null);

  // Close on Escape or M key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Focus the close button when opened
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-pastel-ink/40 backdrop-blur-xs select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="toc-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-lg border-2 border-pastel-ink bg-pastel-paper p-5 sm:p-8 shadow-comic-lg text-pastel-ink overflow-hidden paper-corner-fold"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <header className="flex items-center justify-between border-b-2 border-pastel-ink/15 pb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span
              id="toc-modal-title"
              className="px-3 py-1 rounded bg-pastel-yellow border-2 border-pastel-ink font-hand text-base font-bold text-pastel-ink shadow-comic-sm"
            >
              ★ NOTEBOOK CHAPTER INDEX
            </span>
            <span className="font-comic text-xs text-pastel-inkMuted hidden sm:inline">
              jump directly to any spread
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close chapter index"
            className="px-3 py-1 rounded bg-white hover:bg-pastel-peachLight border-2 border-pastel-ink text-pastel-ink font-comic text-xs font-bold shadow-comic-sm hover:shadow-comic active:translate-y-0 active:shadow-comic-sm focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none transition-all cursor-pointer"
          >
            [CLOSE ✕]
          </button>
        </header>

        {/* Scrollable Chapter List */}
        <div className="mt-4 space-y-2.5 overflow-y-auto pr-1 journal-scroll">
          {/* Quick jump to Cover & TOC */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button
              type="button"
              onClick={() => {
                onSelectFolio(0);
                onClose();
              }}
              aria-label="Go to Cover and Binding"
              className={`p-2.5 rounded-md border-2 cursor-pointer font-comic text-xs flex justify-between items-center transition-all select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none ${
                currentFolioIndex === 0
                  ? "border-pastel-ink bg-pastel-yellow font-bold shadow-comic-sm text-pastel-ink"
                  : "border-pastel-ink/30 bg-white hover:border-pastel-ink hover:bg-pastel-yellowLight text-pastel-ink"
              }`}
            >
              <span>[00] COVER &amp; BINDING</span>
              <span className="font-bold" aria-hidden="true">➔</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectFolio(1);
                onClose();
              }}
              aria-label="Go to Table of Contents"
              className={`p-2.5 rounded-md border-2 cursor-pointer font-comic text-xs flex justify-between items-center transition-all select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none ${
                currentFolioIndex === 1
                  ? "border-pastel-ink bg-pastel-yellow font-bold shadow-comic-sm text-pastel-ink"
                  : "border-pastel-ink/30 bg-white hover:border-pastel-ink hover:bg-pastel-yellowLight text-pastel-ink"
              }`}
            >
              <span>[00] TABLE OF CONTENTS</span>
              <span className="font-bold" aria-hidden="true">➔</span>
            </button>
          </div>

          {/* All 10 Chapters */}
          {chaptersData.map((ch) => {
            const startingFolio = folioMap ? folioMap[ch.id] : 2;
            const totalPagesInChapter = ch.pages.length;
            const style = chapterCategoryStyles[ch.id] || {
              sectionType: "ENTRY",
              accentBg: "bg-pastel-blueLight",
              badgeBg: "bg-pastel-blue",
              badgeText: "text-white",
              hoverAccent: "group-hover:text-pastel-blueDark",
            };

            const isInsideChapter =
              currentFolioIndex >= startingFolio &&
              currentFolioIndex < startingFolio + totalPagesInChapter;

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => {
                  onSelectFolio(startingFolio);
                  onClose();
                }}
                aria-label={`Jump to Chapter ${ch.num}: ${ch.title} on page ${startingFolio + 1}`}
                className={`w-full text-left group flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-150 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none ${
                  isInsideChapter
                    ? "border-pastel-ink bg-pastel-yellowLight shadow-comic-sm font-semibold"
                    : "border-pastel-ink/20 bg-white hover:border-pastel-ink hover:shadow-comic-sm text-pastel-ink"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Category Accent Badge */}
                  <span
                    className={`w-7 h-7 rounded-full border border-pastel-ink ${style.badgeBg} ${style.badgeText} flex items-center justify-center font-comic font-bold text-xs shadow-comic-sm flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {ch.num}
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-editorial text-base sm:text-lg text-pastel-ink group-hover:text-pastel-blueDark">
                      {ch.title}
                    </span>
                    <span
                      className={`font-comic text-[10px] px-2 py-0.5 rounded border border-pastel-ink/60 ${style.accentBg} text-pastel-ink font-semibold uppercase`}
                    >
                      {style.sectionType}
                    </span>
                    <span className="hidden sm:inline-block font-hand text-sm text-pastel-inkMuted">
                      ({totalPagesInChapter} {totalPagesInChapter === 1 ? "page" : "pages"})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-comic text-xs">
                  {isInsideChapter ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-pastel-peach border border-pastel-ink text-pastel-ink text-[11px] font-bold uppercase tracking-wider shadow-comic-sm">
                      READING
                    </span>
                  ) : (
                    <span className="text-pastel-inkMuted group-hover:text-pastel-ink font-bold transition-colors">
                      p. {String(startingFolio + 1).padStart(2, "0")} ➔
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <footer className="mt-4 pt-3 border-t-2 border-pastel-ink/15 flex items-center justify-between font-comic text-xs text-pastel-inkMuted flex-shrink-0">
          <span className="font-hand text-base">Press [ESC] or [M] anytime to return</span>
          <span className="font-mono text-[11px]">[ 10 CHAPTERS ARCHITECTED ]</span>
        </footer>
      </div>
    </div>
  );
}
