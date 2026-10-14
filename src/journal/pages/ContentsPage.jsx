import React from "react";
import { chaptersData, chapterCategoryStyles } from "../data/journalData";

export default function ContentsPage({ onSelectChapter, folioMap, currentFolioIndex }) {
  return (
    <div className="relative min-h-[580px] md:min-h-[640px] p-6 sm:p-10 md:p-12 lg:p-14 select-text bg-pastel-paper text-pastel-ink paper-corner-fold overflow-hidden">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-12 sm:left-20 w-28 sm:w-36 h-6 washi-tape-yellow rotate-[1deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Chapter Index Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-pastel-ink/20 pb-5 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-yellow border-2 border-pastel-ink shadow-comic-sm font-hand text-sm font-bold text-pastel-ink tracking-wide">
            <span>★ TABLE OF CONTENTS</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-pastel-ink mt-2">
            The Journal Index
          </h2>
          <p className="mt-1 font-sans text-xs sm:text-sm text-pastel-inkMuted">
            Chronological field entries, built neural runtimes, empirical research, and personal observations.
          </p>
        </div>

        <div className="font-hand text-base sm:text-lg text-pastel-inkMuted flex items-center gap-1.5 self-start sm:self-end">
          <span>Select any entry to turn to its folio</span>
          <span className="font-bold text-pastel-ink" aria-hidden="true">➔</span>
        </div>
      </header>

      {/* Chapters Grid (Comic Panel Spreads) */}
      <main className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4.5" role="list">
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
              aria-label={`Open Chapter ${ch.num}: ${ch.title} on page ${startingFolio + 1}`}
              className={`w-full text-left group flex items-start justify-between p-4 sm:p-4.5 rounded-lg border-2 transition-all duration-200 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-pastel-paper ${
                isCurrentChapter
                  ? "border-pastel-ink bg-pastel-yellowLight shadow-comic translate-y-[-1px]"
                  : "border-pastel-ink bg-white shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              <div className="flex items-start gap-3.5 pr-2">
                {/* Number Badge with Category Accent */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-pastel-ink ${style.badgeBg} ${style.badgeText} flex items-center justify-center font-comic font-bold text-sm sm:text-base flex-shrink-0 shadow-comic-sm group-hover:rotate-6 transition-transform`}
                  aria-hidden="true"
                >
                  {ch.num}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-editorial text-lg sm:text-xl font-normal text-pastel-ink group-hover:text-pastel-blueDark transition-colors">
                      {ch.title}
                    </span>
                    {/* Section Type Tag */}
                    <span
                      className={`font-comic text-[10px] px-2 py-0.5 rounded border border-pastel-ink/60 ${style.accentBg} text-pastel-ink font-bold uppercase tracking-wider`}
                    >
                      {style.sectionType}
                    </span>
                    {totalPagesInChapter > 1 && (
                      <span className="font-hand text-sm text-pastel-inkMuted">
                        ({totalPagesInChapter} pages)
                      </span>
                    )}
                  </div>

                  {/* Concise Chapter Summary */}
                  <p className="text-xs sm:text-[13px] text-pastel-inkMuted line-clamp-2 font-sans leading-relaxed">
                    {ch.summary || ch.subtitle}
                  </p>
                </div>
              </div>

              {/* Page Number Jump Indicator */}
              <div className="flex items-center gap-1.5 pl-2 pt-1 flex-shrink-0">
                <span className="font-mono text-xs font-semibold text-pastel-inkMuted">
                  p. {String(startingFolio + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-pastel-ink group-hover:translate-x-1 transition-transform font-bold"
                  aria-hidden="true"
                >
                  ➔
                </span>
              </div>
            </button>
          );
        })}
      </main>

      {/* Footnote Bar with Curated Count */}
      <footer className="mt-8 pt-5 border-t-2 border-pastel-ink/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-pastel-inkMuted gap-2">
        <div className="font-hand text-base text-pastel-inkMuted">
          ★ All 10 chapters organized across software craft, local intelligence, and research logs.
        </div>
        <div className="tracking-widest uppercase">
          [ 10 CHAPTERS • {chaptersData.reduce((acc, c) => acc + c.pages.length, 0)} TOTAL PAGES ]
        </div>
      </footer>
    </div>
  );
}
