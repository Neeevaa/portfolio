import React from "react";

export default function TimelineJourneyPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    date,
    entryNo,
    summary,
    milestones = [],
    marginalNote,
    footnote,
  } = pageData;

  const milestonePastels = [
    "bg-pastel-blueLight",
    "bg-pastel-lavenderLight",
    "bg-pastel-sageLight",
  ];

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Chronology Header */}
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
          <span>{date}</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="mt-8 space-y-4">
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.1] text-pastel-ink">
          {headline}
        </h2>
        {summary && (
          <p className="max-w-3xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
            {summary}
          </p>
        )}
      </div>

      {/* Chronological Milestone Entries (Comic Diary Timeline) */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Milestones Flow (8 cols) */}
        <div className="lg:col-span-8 space-y-6 relative pl-6 border-l-2 border-dashed border-pastel-ink/30">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Chronological Comic Pin */}
              <span className="absolute -left-[33px] top-3 w-4 h-4 rounded-full bg-pastel-yellow border-2 border-pastel-ink shadow-comic-sm group-hover:scale-125 transition-transform"></span>

              <div
                className={`p-5 rounded-lg border-2 border-pastel-ink ${milestonePastels[idx % milestonePastels.length]} shadow-comic hover:-translate-y-0.5 transition-all`}
              >
                <div className="flex flex-wrap items-center gap-2.5 mb-2 font-comic text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-white border border-pastel-ink font-bold text-pastel-ink shadow-comic-sm">
                    {m.period}
                  </span>
                  {m.tag && (
                    <span className="px-2 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink font-bold text-pastel-peachDark text-[10px] uppercase">
                      ★ {m.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl text-pastel-ink font-semibold">
                  {m.role}
                </h3>
                <div className="font-comic text-xs font-bold text-pastel-inkMuted mb-2">
                  {m.institution}
                </div>

                <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                  {m.description}
                </p>

                {m.details && m.details.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.details.map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/90 border border-pastel-ink/40 font-comic text-xs text-pastel-ink"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Marginal Note & Verification (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
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

          <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white font-comic text-xs text-pastel-ink space-y-1.5 shadow-comic-sm">
            <div className="text-pastel-blueDark font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>✓</span>
              <span>VERIFIED MILESTONES</span>
            </div>
            <p className="text-pastel-inkMuted font-sans text-xs leading-relaxed">
              Academic credentials, project repos, and milestone dates cross-verified with institutional records.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-blueDark font-bold">
            CHRONOLOGY // CH.{chapterNum}
          </div>
        </div>
      )}
    </div>
  );
}
