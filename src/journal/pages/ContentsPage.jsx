import React from "react";
import { chaptersData, chapterCategoryStyles } from "../data/journalData";

export default function ContentsPage({ onSelectChapter, folioMap, currentFolioIndex }) {
  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-6 md:p-7 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-16 w-24 sm:w-32 h-5 washi-tape-yellow rotate-[1deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Chapter Index Header */}
      <header className="flex flex-wrap items-center justify-between border-b-2 border-pastel-ink/20 pb-2.5 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink shadow-comic-sm font-hand text-xs font-bold text-pastel-ink tracking-wide">
            <span>★ TABLE OF CONTENTS</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-pastel-ink mt-1">
            The Journal Index
          </h2>
        </div>

        <div className="font-hand text-xs sm:text-sm text-pastel-inkMuted flex items-center gap-1">
          <span>Select an entry to open its folio</span>
          <span className="font-bold text-pastel-ink" aria-hidden="true">➔</span>
        </div>
      </header>

      {/* Chapters Grid (Compact 2-Column Comic Panels) */}
      <main className="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5" role="list">
        {chaptersData.map((ch) => {
          const startingFolio = folioMap ? folioMap[ch.id] : 2;
          const totalPagesInChapter = ch.pages.length;
          const style = chapterCategoryStyles[ch.id] || {
            sectionType: "ENTRY",
            accentBg: "bg-pastel-blueLight",
            badgeBg: "bg-pastel-blue",
            badgeText: "text-white",
            hoverAccent: "group-hover:text-pastel-blueDark",
            tagLabel: ch.tag,
          };

          const isCurrentChapter =
            currentFolioIndex !== undefined &&
            currentFolioIndex >= startingFolio &&
            currentFolioIndex < startingFolio + totalPagesInChapter;

          return (
            <button
              key={ch.num}
              type="button"
              onClick={() => onSelectChapter(startingFolio)}
              aria-label={`Open Chapter ${ch.num}: ${ch.title} on folio ${startingFolio + 1}`}
              className={`w-full text-left group flex items-center justify-between p-2 sm:p-2.5 rounded-md border-1.5 sm:border-2 transition-all duration-150 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none ${
                isCurrentChapter
                  ? "border-pastel-ink bg-pastel-yellowLight shadow-comic -translate-y-0.5"
                  : "border-pastel-ink/80 bg-white shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                {/* Number Badge */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-pastel-ink ${style.badgeBg} ${style.badgeText} flex items-center justify-center font-comic font-bold text-xs flex-shrink-0 shadow-comic-sm`}
                  aria-hidden="true"
                >
                  {ch.num}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-editorial text-sm sm:text-base font-semibold text-pastel-ink group-hover:text-pastel-blueDark truncate transition-colors">
                      {ch.title}
                    </span>
                    <span
                      className={`font-comic text-[9px] px-1.5 py-0.2 rounded border border-pastel-ink/40 ${style.accentBg} text-pastel-ink font-bold uppercase tracking-wider hidden sm:inline`}
                    >
                      {style.sectionType}
                    </span>
                  </div>
                  <p className="text-[11px] text-pastel-inkMuted truncate font-sans">
                    {ch.subtitle || ch.summary}
                  </p>
                </div>
              </div>

              {/* Folio Indicator */}
              <div className="flex items-center gap-1 pl-1 flex-shrink-0 font-mono text-[11px] text-pastel-inkMuted font-semibold">
                <span>F.{String(startingFolio + 1).padStart(2, "0")}</span>
                <span className="text-pastel-peachDark font-bold group-hover:translate-x-0.5 transition-transform">➔</span>
              </div>
            </button>
          );
        })}
      </main>

      {/* Index Bottom Note */}
      <footer className="pt-2 border-t border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted">
        <div>FOLIO 01 • MASTER DIRECTORY</div>
        <div className="font-comic font-bold text-pastel-blueDark">10 RESEARCH &amp; CRAFT CHAPTERS</div>
      </footer>
    </div>
  );
}
