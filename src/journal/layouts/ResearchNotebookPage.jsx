import React from "react";

export default function ResearchNotebookPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    paperTitle,
    abstract,
    findings = [],
    equation,
    marginalNote,
    footnote,
  } = pageData;

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Research Folio */}
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
          <span className="px-2.5 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ EMPIRICAL NOTEBOOK
          </span>
          <span>RESEARCH LOG</span>
        </div>
      </div>

      {/* Main Research Headline & Abstract */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold uppercase tracking-wider text-pastel-ink shadow-comic-sm">
          APPLIED RESEARCH LOG // NOTEBOOK 05
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.1] text-pastel-ink">
          {paperTitle}
        </h2>

        {/* Abstract Box */}
        <div className="p-5 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic space-y-2">
          <div className="font-comic text-xs font-bold text-pastel-peachDark uppercase tracking-wider">
            ★ ABSTRACT &amp; PROBLEM FORMULATION
          </div>
          <p className="font-sans text-sm sm:text-base text-pastel-ink/90 leading-relaxed">
            {abstract}
          </p>
        </div>
      </div>

      {/* Findings & Equation Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Findings List (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          <h3 className="font-editorial text-2xl text-pastel-ink font-semibold flex items-center gap-2">
            <span>Key Empirical Observations</span>
            <span className="text-base font-hand text-pastel-inkMuted">(field test results)</span>
          </h3>

          <div className="space-y-3">
            {findings.map((finding, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-md border-2 border-pastel-ink bg-white shadow-comic-sm hover:shadow-comic transition-all"
              >
                <span className="w-7 h-7 rounded-full bg-pastel-blueLight border border-pastel-ink flex items-center justify-center font-comic font-bold text-xs text-pastel-ink flex-shrink-0">
                  0{idx + 1}
                </span>
                <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed pt-0.5">
                  {finding}
                </p>
              </div>
            ))}
          </div>

          {/* Mathematical Formulation */}
          {equation && (
            <div className="p-4 rounded-md border-2 border-pastel-ink bg-white shadow-comic space-y-2">
              <div className="flex justify-between font-comic text-xs font-bold text-pastel-inkMuted uppercase">
                <span>MATHEMATICAL HEURISTIC</span>
                <span className="text-pastel-blueDark">ATTENTION SCALING</span>
              </div>
              <div className="py-2 font-mono text-sm sm:text-base text-pastel-ink tracking-wide overflow-x-auto bg-pastel-paperAlt/60 px-3 py-2 rounded border border-pastel-ink/20">
                <code>{equation}</code>
              </div>
            </div>
          )}
        </div>

        {/* Marginalia (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {marginalNote && (
            <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-peachLight shadow-comic rotate-[-1deg]">
              <div className="flex items-center justify-between font-comic text-xs font-bold text-pastel-ink uppercase mb-1">
                <span>{marginalNote.tag}</span>
                <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
              </div>
              <p className="font-hand text-lg text-pastel-ink leading-snug">
                &ldquo;{marginalNote.text}&rdquo;
              </p>
            </div>
          )}

          <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white font-comic text-xs text-pastel-ink space-y-1.5 shadow-comic-sm">
            <div className="text-pastel-sageDark font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>✦</span>
              <span>EXPERIMENTAL SETUP</span>
            </div>
            <p className="text-pastel-inkMuted font-sans text-xs leading-relaxed">
              Tested on synthesized multi-turn conversation traces across 1,000 synthetic reasoning benchmarks.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            RESEARCH LOG // CH.{chapterNum}
          </div>
        </div>
      )}
    </div>
  );
}
