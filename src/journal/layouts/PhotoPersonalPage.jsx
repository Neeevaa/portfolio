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
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Personal Folio */}
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

        <div className="flex items-center gap-3 font-comic text-xs text-pastel-inkMuted">
          <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ PERSONAL SPECTRUM
          </span>
          <span>HUMAN PERSPECTIVE</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink font-comic text-xs font-bold uppercase tracking-wider text-pastel-peachDark shadow-comic-sm">
          HUMAN DIMENSION &amp; CREATIVE PURSUITS
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.1] text-pastel-ink">
          {headline}
        </h2>
        {subtitle && (
          <p className="max-w-3xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Content & Illustration Layout */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Personal Sections (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-lg border-2 border-pastel-ink ${sectionPastels[idx % sectionPastels.length]} space-y-2 shadow-comic hover:-translate-y-0.5 transition-all`}
            >
              <h3 className="font-editorial text-xl text-pastel-ink font-semibold flex items-center gap-2">
                <span>★</span>
                <span>{sec.title}</span>
              </h3>
              <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Illustration Plate & Marginalia (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
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
            <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic rotate-[1deg]">
              <div className="flex items-center justify-between font-comic text-xs font-bold text-pastel-ink uppercase mb-1">
                <span>{marginalNote.tag}</span>
                <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
              </div>
              <p className="font-hand text-lg text-pastel-ink leading-snug">
                &ldquo;{marginalNote.text}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            PERSONAL SPECTRUM // CH.{chapterNum}
          </div>
        </div>
      )}
    </div>
  );
}
