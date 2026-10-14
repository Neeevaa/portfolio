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
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Index Header */}
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
            ★ SYSTEM CATALOGUE
          </span>
          <span>CURATED TOOLKIT</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink font-comic text-xs font-bold uppercase tracking-wider text-pastel-sageDark shadow-comic-sm">
          ENGINEERING TOOLKIT &amp; PRIMITIVES
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

      {/* Toolkit Categories Grid (Comic Panels) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {categories.map((cat, idx) => {
          const style = categoryPastels[idx % categoryPastels.length];
          return (
            <div
              key={idx}
              className={`p-5 rounded-lg border-2 border-pastel-ink ${style.bg} shadow-comic hover:-translate-y-1 transition-all space-y-3`}
            >
              <div className="flex items-center justify-between border-b-2 border-pastel-ink/15 pb-2">
                <span className="font-comic text-sm font-bold text-pastel-ink tracking-wider">
                  ★ {cat.name}
                </span>
                <span className="font-mono text-xs font-bold text-pastel-inkMuted">
                  [0{idx + 1}]
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1 rounded-full bg-white border-1.5 border-pastel-ink font-comic text-xs font-bold text-pastel-ink shadow-comic-sm hover:scale-105 transition-transform"
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
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {marginalNote && (
          <div className="lg:col-span-8 p-5 rounded-lg border-2 border-pastel-ink bg-pastel-yellowLight font-comic text-xs text-pastel-ink shadow-comic space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
              <span>{marginalNote.tag}</span>
              <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-pastel-ink leading-relaxed">
              {marginalNote.text}
            </p>
          </div>
        )}

        <div className="lg:col-span-4 p-4 rounded-lg border-2 border-pastel-ink bg-white font-comic text-xs text-pastel-ink space-y-1 shadow-comic-sm">
          <div className="text-pastel-blueDark font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>✦</span>
            <span>EVALUATION CRITERIA</span>
          </div>
          <p className="text-pastel-inkMuted font-sans text-xs leading-relaxed">
            Selected for deterministic latency, ecosystem stability, and low runtime overhead.
          </p>
        </div>
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            INDEX SPECIMEN // CH.{chapterNum}
          </div>
        </div>
      )}
    </div>
  );
}
