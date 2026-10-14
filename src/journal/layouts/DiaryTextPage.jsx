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
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Diary Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-pastel-ink/15 gap-3">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted">/</span>
          <span className="font-comic text-sm font-bold tracking-wide uppercase text-pastel-inkMuted">
            {chapterTitle}
          </span>
        </div>

        <div className="flex items-center gap-3 font-hand text-base sm:text-lg text-pastel-inkMuted">
          {entryNo && <span className="font-semibold text-pastel-ink">{entryNo}</span>}
          {entryNo && date && <span>•</span>}
          {date && <span>{date}</span>}
          {location && <span>•</span>}
          {location && <span>{location}</span>}
        </div>
      </div>

      {/* Main Editorial Content & Marginalia Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main Prose (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-pastel-ink">
            {headline}
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-pastel-ink/90 leading-relaxed font-sans font-normal">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:font-editorial first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-pastel-peachDark"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Quotation as a Comic Speech Box */}
          {quote && (
            <div className="my-6 p-4 sm:p-5 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic relative">
              <span className="absolute -top-3 left-6 px-2 py-0.5 rounded bg-white border border-pastel-ink font-hand text-xs font-bold text-pastel-ink">
                ★ CORE OBSERVATION
              </span>
              <p className="font-editorial text-lg sm:text-xl italic text-pastel-ink mt-1">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Marginalia & Visual Illustration Plate (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Handwritten Sticky Note / Marginal Note */}
          {marginalNote && (
            <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic rotate-[0.8deg] relative">
              <div className="flex items-center justify-between font-comic text-xs font-bold text-pastel-ink uppercase mb-1">
                <span>{marginalNote.tag}</span>
                <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
              </div>
              <p className="font-hand text-lg text-pastel-ink leading-snug">
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
            <div className="p-4 rounded-md border-2 border-pastel-ink bg-white shadow-comic-sm font-comic text-xs space-y-2 text-pastel-ink">
              <div className="font-bold border-b border-pastel-ink/20 pb-1 text-pastel-blueDark uppercase tracking-wider">
                // ENGINEERING SPECIFICATIONS
              </div>
              {metadataItems.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-2 pt-0.5">
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
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            CH.{chapterNum} // FOLIO PAGE
          </div>
        </div>
      )}
    </div>
  );
}
