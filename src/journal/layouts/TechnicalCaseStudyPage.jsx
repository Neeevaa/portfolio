import React from "react";

export default function TechnicalCaseStudyPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    subtitle,
    date,
    architectureStages = [],
    specs = [],
    marginalNote,
    footnote,
  } = pageData;

  const stagePastels = [
    "bg-pastel-blueLight",
    "bg-pastel-lavenderLight",
    "bg-pastel-sageLight",
    "bg-pastel-peachLight",
  ];

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Flagship Folio */}
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
          <span className="px-2.5 py-0.5 rounded bg-pastel-peach border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ FLAGSHIP CASE STUDY
          </span>
          <span>{date}</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-1 rounded bg-pastel-yellow border border-pastel-ink font-comic text-sm font-bold tracking-wider text-pastel-ink shadow-comic-sm">
          SYNAPSE ARCHITECTURE BLUEPRINT
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

      {/* Multi-Stage Pipeline (Comic Strip Panels) */}
      <div className="mt-10">
        <div className="font-comic text-xs text-pastel-ink font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark"></span>
          <span>EXECUTION PIPELINE &amp; MEMORY FLOW</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {architectureStages.map((stage, idx) => (
            <div
              key={stage.step}
              className={`p-4 rounded-lg border-2 border-pastel-ink ${stagePastels[idx % stagePastels.length]} shadow-comic hover:-translate-y-1 transition-all space-y-2 relative`}
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-white border border-pastel-ink font-comic text-xs font-bold text-pastel-ink">
                  STAGE {stage.step}
                </span>
                {idx < architectureStages.length - 1 && (
                  <span className="hidden lg:block font-bold text-pastel-ink">➔</span>
                )}
              </div>
              <h3 className="font-editorial text-lg text-pastel-ink font-semibold">
                {stage.title}
              </h3>
              <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware & Systems Specifications Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Specs Table (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-lg border-2 border-pastel-ink bg-white font-comic text-xs shadow-comic space-y-3">
          <div className="text-pastel-blueDark font-bold tracking-wider text-xs pb-2 border-b-2 border-pastel-ink/15 uppercase flex justify-between">
            <span>KERNEL SPECIFICATION MATRIX</span>
            <span className="text-pastel-inkMuted">V0.9 RUNTIME</span>
          </div>
          {specs.map((item, idx) => (
            <div key={idx} className="flex justify-between py-1.5 border-b border-pastel-ink/10 text-pastel-ink text-xs font-sans">
              <span className="text-pastel-inkMuted">{item.label}:</span>
              <span className="font-mono font-semibold text-pastel-ink">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Marginalia Note as a Thought Box (5 cols) */}
        {marginalNote && (
          <div className="lg:col-span-5 p-5 rounded-lg border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic space-y-2 relative">
            <div className="flex items-center gap-2 font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
              <span>{marginalNote.tag}</span>
              <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
            </div>
            <p className="font-hand text-lg text-pastel-ink leading-snug">
              &ldquo;{marginalNote.text}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            CASE STUDY FOLIO // CH.{chapterNum}
          </div>
        </div>
      )}
    </div>
  );
}
