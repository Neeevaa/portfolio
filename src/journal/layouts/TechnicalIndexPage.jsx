import React from "react";

export default function TechnicalIndexPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    subtitle,
    categories = [],
    marginalNote,
    footnote,
  } = pageData;

  const categoryPastels = [
    { bg: "bg-pastel-blueLight", header: "text-pastel-blueDark" },
    { bg: "bg-pastel-lavenderLight", header: "text-pastel-lavenderDark" },
    { bg: "bg-pastel-sageLight", header: "text-pastel-sageDark" },
    { bg: "bg-pastel-peachLight", header: "text-pastel-peachDark" },
  ];

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Chapter Tag & Index Header */}
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
            ★ SYSTEM CATALOGUE
          </span>
          <span className="hidden sm:inline">CURATED TOOLKIT</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="my-auto py-2 space-y-2.5">
        <div className="space-y-1">
          <div className="inline-block px-2.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink font-comic text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pastel-sageDark shadow-comic-sm">
            ENGINEERING TOOLKIT &amp; PRIMITIVES
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

        {/* Toolkit Categories Grid (Comic Panels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {categories.map((cat, idx) => {
            const style = categoryPastels[idx % categoryPastels.length];
            return (
              <div
                key={idx}
                className={`p-2.5 rounded-lg border border-pastel-ink ${style.bg} shadow-comic-sm space-y-1.5`}
              >
                <div className="flex items-center justify-between border-b border-pastel-ink/15 pb-1">
                  <span className="font-comic text-xs font-bold text-pastel-ink tracking-wider">
                    ★ {cat.name}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-pastel-inkMuted">
                    [0{idx + 1}]
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-2 py-0.5 rounded-full bg-white border border-pastel-ink font-comic text-[11px] font-bold text-pastel-ink shadow-comic-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Marginalia & Standards */}
        {marginalNote && (
          <div className="p-2.5 rounded-lg border border-pastel-ink bg-pastel-yellowLight font-comic text-xs text-pastel-ink shadow-comic-sm space-y-1">
            <div className="flex items-center gap-2 font-bold text-[10px] sm:text-xs uppercase tracking-wider">
              <span>{marginalNote.tag}</span>
              <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
            </div>
            <p className="font-sans text-xs text-pastel-ink leading-relaxed">
              {marginalNote.text}
            </p>
          </div>
        )}
      </div>

      {/* Footnote */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-hand text-xs sm:text-sm text-pastel-inkMuted">
        <div>{footnote || "Curated toolchain and runtime primitives"}</div>
        <div className="font-comic text-[10px] sm:text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
          INDEX SPECIMEN // CH.{chapterNum}
        </div>
      </footer>
    </div>
  );
}
