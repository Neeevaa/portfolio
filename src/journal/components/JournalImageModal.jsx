import React, { useEffect, useRef } from "react";
import { useImageModal } from "../context/ImageModalContext";

/**
 * JournalImageModal
 * A tactile, accessible lightbox modal for inspecting sticky-note images and figure plates.
 * Follows the physical journal & engineering notebook aesthetic:
 * - Ivory paper surface with ink outlines and hard comic drop shadow
 * - Decorative washi tape accent
 * - Caption, title, and metadata display
 * - Backdrop click, Escape key, and close button triggers
 * - Accessible dialog attributes and background scroll locking
 */
export default function JournalImageModal() {
  const { isOpen, imageData, closeModal } = useImageModal();
  const closeButtonRef = useRef(null);
  const modalContentRef = useRef(null);

  // Lock body scroll and handle Escape key while modal is active
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open for accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [isOpen, closeModal]);

  if (!isOpen || !imageData) return null;

  const {
    src,
    alt = "Portfolio image specimen",
    title,
    caption,
    note,
    category = "SPECIMEN LIGHTBOX",
    tag,
    tapeColor = "peach",
  } = imageData;

  const displayCaption = caption || note;
  const displayCategory = category || tag || "SPECIMEN LIGHTBOX";

  const tapeClasses = {
    yellow: "washi-tape-yellow",
    peach: "washi-tape-peach",
    blue: "washi-tape-blue",
    sage: "washi-tape-sage",
    lavender: "washi-tape-lavender",
  };

  const tapeClass = tapeClasses[tapeColor] || "washi-tape-peach";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-image-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#2D2A28]/70 backdrop-blur-[2px] transition-opacity duration-200 animate-fadeIn select-text"
      onClick={closeModal}
    >
      {/* Modal Dialog Content Container */}
      <div
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-lg border-2 border-pastel-ink bg-pastel-paper shadow-comic-lg overflow-hidden animate-modalPop transition-transform"
      >
        {/* Decorative Washi Tape Accent at Top */}
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-6 ${tapeClass} rotate-[-1deg] z-20 pointer-events-none`}
          aria-hidden="true"
        />

        {/* Modal Header Bar */}
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-pastel-ink/15 bg-pastel-paperAlt/60 gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="px-2 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pastel-ink shadow-comic-sm flex-shrink-0">
              ★ {displayCategory}
            </span>
            {title && (
              <h3
                id="journal-image-modal-title"
                className="font-editorial text-base sm:text-lg font-bold text-pastel-ink truncate"
              >
                {title}
              </h3>
            )}
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            aria-label="Close enlarged specimen modal"
            className="w-8 h-8 rounded border-2 border-pastel-ink bg-white hover:bg-pastel-peach text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 transition-all font-mono font-bold text-sm flex items-center justify-center cursor-pointer flex-shrink-0"
          >
            ✕
          </button>
        </header>

        {/* Scrollable Center Image Display Area */}
        <main className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-6 flex flex-col items-center justify-center bg-white/70">
          <div className="relative max-w-full rounded border-2 border-pastel-ink/30 bg-white p-2 shadow-comic flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-xs select-none"
              loading="eager"
            />
          </div>

          {/* Caption / Note Description Box */}
          {displayCaption && (
            <div className="mt-4 w-full max-w-2xl text-center space-y-1 px-2">
              <p className="font-hand text-base sm:text-lg text-pastel-ink leading-snug">
                &ldquo;{displayCaption}&rdquo;
              </p>
            </div>
          )}
        </main>

        {/* Modal Footer Controls & Hint */}
        <footer className="px-4 sm:px-6 py-2.5 border-t border-pastel-ink/15 bg-pastel-paperAlt/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-pastel-inkMuted gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pastel-sageDark" />
            <span className="text-[11px] truncate max-w-xs sm:max-w-md">
              {alt}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden sm:inline">Press [ ESC ] or click outside to dismiss</span>
            <button
              type="button"
              onClick={closeModal}
              className="px-2.5 py-1 rounded bg-pastel-yellowLight border border-pastel-ink/40 text-pastel-ink font-bold hover:bg-pastel-yellow transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

