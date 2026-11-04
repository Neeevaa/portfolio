import React from "react";
import JournalFigurePlate from "../components/JournalFigurePlate";

export default function PhotoPersonalPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    subtitle,
    sections = [],
    illustration,
    marginalNote,
    footnote,
  } = pageData;

  const sectionPastels = [
    "bg-pastel-blueLight",
    "bg-pastel-lavenderLight",
    "bg-pastel-sageLight",
  ];

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Chapter Tag & Personal Folio */}
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

        <div className="flex items-center gap-2 font-comic text-[10px] sm:text-xs text-pastel-inkMuted">
          <span className="px-2 py-0.5 rounded bg-pastel-yellow border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ PERSONAL SPECTRUM
          </span>
          <span className="hidden sm:inline">HUMAN PERSPECTIVE</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="my-auto py-2 space-y-2.5">
        <div className="space-y-1">
          <div className="inline-block px-2.5 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink font-comic text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pastel-peachDark shadow-comic-sm">
            HUMAN DIMENSION &amp; CREATIVE PURSUITS
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-normal leading-tight text-pastel-ink">
            {headline}
          </h2>
          {subtitle && (
            <p className="max-w-3xl text-xs sm:text-sm text-pastel-ink/85 leading-relaxed font-sans font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content & Illustration Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Personal Sections (7 cols) */}
          <div className="md:col-span-7 space-y-2">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg border border-pastel-ink ${sectionPastels[idx % sectionPastels.length]} space-y-1 shadow-comic-sm`}
              >
                <h3 className="font-editorial text-base text-pastel-ink font-semibold flex items-center gap-1.5">
                  <span>★</span>
                  <span>{sec.title}</span>
                </h3>
                <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Illustration Plate & Marginalia (5 cols) */}
          <div className="md:col-span-5 space-y-2.5">
            {illustration && (
              <JournalFigurePlate
                tag={illustration.figureTag}
                caption={illustration.caption}
                type={illustration.type || "analog"}
                src={illustration.src}
                tapeColor="peach"
              />
            )}

            {marginalNote && (
              <div className="p-2.5 rounded-lg border border-pastel-ink bg-pastel-yellowLight shadow-comic-sm">
                <div className="flex items-center justify-between font-comic text-[10px] font-bold text-pastel-ink uppercase mb-0.5">
                  <span>{marginalNote.tag}</span>
                  <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
                </div>
                <p className="font-hand text-xs sm:text-sm text-pastel-ink leading-snug">
                  &ldquo;{marginalNote.text}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footnote */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-hand text-xs sm:text-sm text-pastel-inkMuted">
        <div>{footnote || "Human dimension and creative pursuits"}</div>
        <div className="font-comic text-[10px] sm:text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
          PERSONAL SPECTRUM // CH.{chapterNum}
        </div>
      </footer>
    </div>
  );
}
