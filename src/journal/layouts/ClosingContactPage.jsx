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
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Chapter Tag & Contact Folio */}
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
          <span className="px-2 py-0.5 rounded bg-pastel-peach border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ CLOSING SPREAD
          </span>
          <span className="hidden sm:inline">TRANSMISSION TERMINAL</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="my-auto py-2 space-y-2.5">
        <div className="space-y-1">
          <div className="inline-block px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-comic text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pastel-ink shadow-comic-sm">
            CHANNELS OF CORRESPONDENCE
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

        {/* Channels Grid & Signoff Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Transmission Channels (7 cols) */}
          <div className="md:col-span-7 space-y-2">
            {channels.map((ch, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 rounded-lg border border-pastel-ink bg-white hover:bg-pastel-yellowLight shadow-comic-sm hover:-translate-y-0.5 transition-all flex items-center justify-between gap-2 group"
              >
                <div>
                  <div className="font-comic text-[10px] sm:text-xs font-bold text-pastel-blueDark uppercase tracking-wider">
                    ★ {ch.label}
                  </div>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-editorial text-sm sm:text-base text-pastel-ink group-hover:text-pastel-peachDark transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>{ch.value}</span>
                      <span className="text-xs font-bold">➔</span>
                    </a>
                  ) : (
                    <div className="font-editorial text-sm sm:text-base text-pastel-ink font-semibold">
                      {ch.value}
                    </div>
                  )}
                  <div className="text-[11px] font-hand text-pastel-inkMuted">
                    {ch.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marginalia & Diary Closing Stamp (5 cols) */}
          <div className="md:col-span-5 space-y-2">
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

            {/* Illustrated Closing Stamp */}
            {signoff && (
              <div className="p-2.5 rounded-lg border-2 border-dashed border-pastel-ink bg-pastel-peachLight shadow-comic-sm text-center space-y-1">
                <div className="font-hand text-xs sm:text-sm text-pastel-ink font-semibold">
                  {signoff.statement}
                </div>
                <div className="font-editorial text-lg text-pastel-ink font-semibold">
                  {signoff.author}
                </div>
                <div className="font-comic text-[10px] text-pastel-inkMuted font-bold uppercase tracking-wider">
                  ★ {signoff.edition} ★
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footnote */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-hand text-xs sm:text-sm text-pastel-inkMuted">
        <div>{footnote || "Transmission open for collaboration"}</div>
        <div className="font-comic text-[10px] sm:text-xs uppercase tracking-widest text-pastel-peachDark font-bold">
          VOLUME 01 // END OF TRANSMISSION
        </div>
      </footer>
    </div>
  );
}
