import React, { useEffect, useRef } from "react";
import ColophonPage from "../pages/ColophonPage";

/**
 * JournalMobileView
 * A clean, natural vertical reading layout for mobile devices:
 * - Single-column flow where all folios stack downward and scroll smoothly
 * - Zero 3D page flips, no center spine, no horizontal swiping required
 * - Sticky navigation bar with quick chapter index and progress indicator
 */
export default function JournalMobileView({
  folios,
  renderFolio,
  onOpenToc,
  currentFolioIndex,
  onSelectFolio,
}) {
  const containerRef = useRef(null);

  // Smooth scroll to a target folio
  const scrollToFolio = (idx) => {
    const el = document.getElementById(`mobile-folio-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen journal-surface text-pastel-ink">
      {/* Sticky Mobile Reading Header */}
      <header className="sticky top-0 z-40 bg-pastel-paperAlt/95 backdrop-blur-sm border-b-2 border-pastel-ink/20 px-3 py-2 flex items-center justify-between shadow-comic-sm">
        <div className="flex items-center gap-2">
          <span className="font-comic font-bold text-sm tracking-wide text-pastel-ink">
            NEEVA SUNISH MATHEW
          </span>
          <span className="font-mono text-[10px] text-pastel-inkMuted uppercase">
            [ NOTEBOOK ]
          </span>
        </div>

        {/* Index Button */}
        <button
          type="button"
          onClick={onOpenToc}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-pastel-yellow border-1.5 border-pastel-ink shadow-comic-sm text-pastel-ink font-comic text-xs uppercase font-bold active:translate-y-0.5"
        >
          <span>INDEX</span>
          <span className="text-xs">☰</span>
        </button>
      </header>

      {/* Main Vertical Single-Column Page Flow */}
      <main ref={containerRef} className="w-full max-w-xl mx-auto px-3 sm:px-4 py-4 space-y-6">
        {/* Folios 00 to 19 */}
        {folios.map((folio) => {
          const isCover = folio.type === "cover";

          return (
            <article
              key={folio.folioIndex}
              id={`mobile-folio-${folio.folioIndex}`}
              className="rounded-lg border-2 border-pastel-ink shadow-comic overflow-hidden scroll-mt-14 bg-pastel-paper"
            >
              {/* Folio Mini Running Head for Mobile (except cover) */}
              {!isCover && (
                <div className="px-3 py-1.5 bg-pastel-paperAlt/80 border-b border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted select-none">
                  <span className="font-comic font-bold text-pastel-ink text-xs">
                    {folio.type === "toc"
                      ? "INDEX"
                      : `CH.${folio.chapterNum} : ${folio.chapterTitle}`}
                  </span>
                  <span className="font-semibold text-pastel-blueDark">
                    FOLIO {String(folio.folioIndex + 1).padStart(2, "0")} / {String(folios.length).padStart(2, "0")}
                  </span>
                </div>
              )}

              {/* Folio Body */}
              <div className="p-1">
                {renderFolio(folio)}
              </div>
            </article>
          );
        })}

        {/* Closing Colophon Card (Folio 20) */}
        <article
          id="mobile-folio-20"
          className="rounded-lg border-2 border-pastel-ink shadow-comic bg-pastel-paper overflow-hidden scroll-mt-14"
        >
          <div className="px-3 py-1.5 bg-pastel-paperAlt/80 border-b border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted select-none">
            <span className="font-comic font-bold text-pastel-ink text-xs">CLOSING COLOPHON</span>
            <span className="font-semibold text-pastel-peachDark">FINIS</span>
          </div>
          <div className="p-1">
            <ColophonPage
              onReturnCover={() => scrollToFolio(0)}
              onOpenIndex={onOpenToc}
            />
          </div>
        </article>

        {/* Mobile Reading Footer */}
        <footer className="pt-6 pb-12 text-center font-mono text-xs text-pastel-inkMuted space-y-2">
          <div>★ END OF PERSONAL DIGITAL JOURNAL ★</div>
          <div className="font-hand text-sm text-pastel-ink">
            Crafted with React, Tailwind CSS, &amp; Editorial Engineering
          </div>
          <button
            type="button"
            onClick={() => scrollToFolio(0)}
            className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold uppercase shadow-comic-sm"
          >
            <span>↺</span>
            <span>Return to Top (Cover)</span>
          </button>
        </footer>
      </main>
    </div>
  );
}

