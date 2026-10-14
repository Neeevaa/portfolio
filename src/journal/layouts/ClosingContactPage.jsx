import React from "react";

export default function ClosingContactPage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    headline,
    subtitle,
    channels = [],
    marginalNote,
    signoff,
    footnote,
  } = pageData;

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Contact Folio */}
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
            ★ CLOSING SPREAD
          </span>
          <span>TRANSMISSION TERMINAL</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold uppercase tracking-wider text-pastel-ink shadow-comic-sm">
          CHANNELS OF CORRESPONDENCE
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

      {/* Channels Grid & Signoff Layout */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Transmission Channels (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-lg border-2 border-pastel-ink bg-white hover:bg-pastel-yellowLight shadow-comic hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div>
                <div className="font-comic text-xs font-bold text-pastel-blueDark uppercase tracking-wider">
                  ★ {ch.label}
                </div>
                {ch.href ? (
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-editorial text-lg sm:text-xl text-pastel-ink group-hover:text-pastel-peachDark transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{ch.value}</span>
                    <span className="text-sm font-bold">➔</span>
                  </a>
                ) : (
                  <div className="font-editorial text-lg sm:text-xl text-pastel-ink">
                    {ch.value}
                  </div>
                )}
                <div className="text-xs font-hand text-pastel-inkMuted mt-0.5 text-base">
                  {ch.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marginalia & Diary Closing Stamp (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
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

          {/* Illustrated Closing Stamp */}
          {signoff && (
            <div className="p-6 rounded-lg border-2 border-dashed border-pastel-ink bg-pastel-peachLight shadow-comic text-center space-y-2 relative">
              <div className="font-hand text-lg text-pastel-ink font-semibold">
                {signoff.statement}
              </div>
              <div className="font-editorial text-2xl text-pastel-ink font-semibold">
                {signoff.author}
              </div>
              <div className="font-comic text-xs text-pastel-inkMuted font-bold uppercase tracking-wider">
                ★ {signoff.edition} ★
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footnote */}
      {footnote && (
        <div className="mt-12 pt-6 border-t-2 border-pastel-ink/15 flex flex-col sm:flex-row justify-between gap-4 font-hand text-base text-pastel-inkMuted">
          <div>{footnote}</div>
          <div className="font-comic text-xs uppercase tracking-widest text-pastel-peachDark font-bold">
            VOLUME 01 // END OF JOURNAL TRANSMISSION
          </div>
        </div>
      )}
    </div>
  );
}
