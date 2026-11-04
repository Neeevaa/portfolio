import React from "react";
import JournalFigurePlate from "../components/JournalFigurePlate";

export default function DiaryTextPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    date,
    entryNo,
    location,
    paragraphs = [],
    quote,
    marginalNote,
    metadataItems = [],
    illustration,
    footnote,
  } = pageData;

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Chapter Tag & Diary Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between pb-2.5 border-b-2 border-pastel-ink/15 gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted">/</span>
          <span className="font-comic text-xs sm:text-sm font-bold tracking-wide uppercase text-pastel-inkMuted">
            {chapterTitle}
          </span>
        </div>

        <div className="flex items-center gap-2 font-hand text-xs sm:text-sm text-pastel-inkMuted">
          {entryNo && <span className="font-semibold text-pastel-ink">{entryNo}</span>}
          {entryNo && date && <span>•</span>}
          {date && <span>{date}</span>}
          {location && <span>•</span>}
          {location && <span>{location}</span>}
        </div>
      </div>

      {/* Main Editorial Content & Marginalia Layout */}
      <div className="my-auto py-2 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start">
        {/* Main Prose (8 cols) */}
        <div className="md:col-span-8 space-y-2 sm:space-y-2.5">
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal leading-tight text-pastel-ink">
            {headline}
          </h2>

          <div className="space-y-2 text-xs sm:text-sm text-pastel-ink/90 leading-relaxed font-sans font-normal">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:font-editorial first-letter:text-3xl first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-pastel-peachDark"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Quotation as a Comic Speech Box */}
          {quote && (
            <div className="p-2 sm:p-2.5 rounded-lg bg-pastel-yellowLight border border-pastel-ink shadow-comic-sm relative">
              <span className="text-[10px] uppercase font-bold text-pastel-peachDark block">
                ★ CORE OBSERVATION
              </span>
              <p className="font-editorial text-xs sm:text-sm italic text-pastel-ink mt-0.5">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Marginalia & Visual Illustration Plate (4 cols) */}
        <div className="md:col-span-4 space-y-2.5">
          {/* Handwritten Sticky Note / Marginal Note */}
          {marginalNote && (
            <div className="p-2.5 rounded-md border border-pastel-ink bg-pastel-yellowLight shadow-comic-sm rotate-[0.8deg] relative">
              <div className="flex items-center justify-between font-comic text-[10px] font-bold text-pastel-ink uppercase mb-0.5">
                <span>{marginalNote.tag}</span>
                <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
              </div>
              <p className="font-hand text-xs sm:text-sm text-pastel-ink leading-snug">
                {marginalNote.text}
              </p>
            </div>
          )}

          {/* Illustration / Portrait Placeholder Plate */}
          {illustration && (
            <JournalFigurePlate
              tag={illustration.figureTag}
              caption={illustration.caption}
              type={illustration.type || "schematic"}
              src={illustration.src}
              tapeColor="yellow"
            />
          )}

          {/* Metadata items as clean comic specs */}
          {metadataItems.length > 0 && (
            <div className="p-2.5 rounded-md border border-pastel-ink bg-white shadow-comic-xs font-comic text-[11px] space-y-1 text-pastel-ink">
              <div className="font-bold border-b border-pastel-ink/20 pb-0.5 text-pastel-blueDark uppercase tracking-wider text-[10px]">
                // SPECIFICATIONS
              </div>
              {metadataItems.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-1.5 pt-0.5">
                  <span className="text-pastel-inkMuted">{item.label}:</span>
                  <span className={item.highlight ? "text-pastel-peachDark font-bold" : "text-pastel-ink font-semibold"}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footnotes at Page Bottom */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-hand text-xs sm:text-sm text-pastel-inkMuted">
        <div>{footnote || "Observations from personal software notebook"}</div>
        <div className="font-comic text-[10px] sm:text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
          CH.{chapterNum} // FOLIO PAGE
        </div>
      </footer>
    </div>
  );
}
