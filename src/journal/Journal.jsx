import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import JournalHeader from "./JournalHeader";
import JournalFooter from "./JournalFooter";
import JournalRibbon from "./JournalRibbon";
import JournalTOCModal from "./JournalTOCModal";
import JournalImageModal from "./components/JournalImageModal";
import JournalMobileView from "./components/JournalMobileView";
import { ImageModalProvider, useImageModal } from "./context/ImageModalContext";

import CoverPage from "./pages/CoverPage";
import ContentsPage from "./pages/ContentsPage";
import ColophonPage from "./pages/ColophonPage";
import JournalPageRenderer from "./layouts/JournalPageRenderer";
import { chaptersData, buildFolioList } from "./data/journalData";

import "./journal.css";

const TOTAL_SPREADS = 11; // Spread 0 (Standalone Cover) through Spread 10 (Ch.10/Colophon)

/**
 * JournalBookInner
 * Core physical journal book engine:
 * - Mobile (< 768px): Vertical single-column flowing journal with natural scrolling
 * - Desktop (>= 768px):
 *   * Spread 0: Standalone full baby-blue front cover (no frontispiece)
 *   * Spreads 1-10: Open physical dual-page codex (TOC on left, About Me on right, etc.)
 *   * 3D page flip engine with right page flipping to the left side
 *   * 100dvh desktop viewport fitting without document vertical scrolling
 */
function JournalBookInner() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [flipState, setFlipState] = useState({
    isFlipping: false,
    fromSpread: 0,
    toSpread: 0,
    direction: "forward",
  });

  const { isOpen: isImageModalOpen } = useImageModal();

  const spreadScrollRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  // Responsive breakpoint watcher
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Build flattened folio list and chapter lookup map
  const folios = useMemo(() => buildFolioList(chaptersData), []);
  const totalFolios = folios.length;

  const folioMap = useMemo(() => {
    const map = {};
    folios.forEach((f) => {
      if (f.type === "chapter-page" && !map[f.chapterId]) {
        map[f.chapterId] = f.folioIndex;
      }
    });
    return map;
  }, [folios]);

  // Derive active left and right folios for running headers/ribbon
  const currentLeftFolio = useMemo(() => {
    if (spreadIndex === 0) return null;
    const idx = spreadIndex * 2 - 1;
    return folios[idx] || null;
  }, [spreadIndex, folios]);

  const currentRightFolio = useMemo(() => {
    if (spreadIndex === 0) return folios[0];
    const idx = spreadIndex * 2;
    return folios[idx] || null;
  }, [spreadIndex, folios]);

  const activeFolioForRibbon = currentRightFolio || currentLeftFolio || folios[0];

  // Navigate to target spread with 3D turning leaf
  const goToSpread = useCallback((targetSpread) => {
    if (targetSpread === spreadIndex) return;
    if (targetSpread < 0 || targetSpread >= TOTAL_SPREADS) return;
    if (flipState.isFlipping) return;

    const newDirection = targetSpread > spreadIndex ? "forward" : "backward";
    const from = spreadIndex;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setSpreadIndex(targetSpread);

    if (prefersReducedMotion) {
      setFlipState({
        isFlipping: false,
        fromSpread: from,
        toSpread: targetSpread,
        direction: newDirection,
      });
    } else {
      setFlipState({
        isFlipping: true,
        fromSpread: from,
        toSpread: targetSpread,
        direction: newDirection,
      });
    }

    if (spreadScrollRef.current) spreadScrollRef.current.scrollTop = 0;
  }, [spreadIndex, flipState.isFlipping]);

  // Reset spread scroll to top whenever spread changes
  useEffect(() => {
    if (spreadScrollRef.current) {
      spreadScrollRef.current.scrollTop = 0;
    }
  }, [spreadIndex]);

  // Navigate by folio number (e.g. from TOC modal or shortcuts)
  const goToFolio = useCallback((targetFolioIndex) => {
    if (targetFolioIndex === 0) {
      goToSpread(0);
      return;
    }
    const targetSpread = Math.ceil(targetFolioIndex / 2);
    goToSpread(Math.min(targetSpread, TOTAL_SPREADS - 1));
  }, [goToSpread]);

  const handleNext = useCallback(() => {
    if (spreadIndex < TOTAL_SPREADS - 1) {
      goToSpread(spreadIndex + 1);
    }
  }, [spreadIndex, goToSpread]);

  const handlePrev = useCallback(() => {
    if (spreadIndex > 0) {
      goToSpread(spreadIndex - 1);
    }
  }, [spreadIndex, goToSpread]);

  // Settle 3D page-flip animation
  useEffect(() => {
    if (!flipState.isFlipping) return;

    const timer = setTimeout(() => {
      setFlipState((prev) => ({ ...prev, isFlipping: false }));
    }, 560);

    return () => clearTimeout(timer);
  }, [flipState.isFlipping]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isImageModalOpen || isTocOpen) return;

      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (
        activeTag === "input" ||
        activeTag === "textarea" ||
        document.activeElement?.isContentEditable
      ) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (
        e.key === "ArrowRight" ||
        (e.key === " " && spreadIndex === 0)
      ) {
        if (e.key === " ") e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "m" || e.key === "M") {
        setIsTocOpen((prev) => !prev);
      } else if (e.key === "0") {
        goToSpread(0); // Return to Cover
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [spreadIndex, handleNext, handlePrev, goToSpread, isImageModalOpen, isTocOpen]);

  // Touch Swipe Support on desktop touch devices
  const handleTouchStart = (e) => {
    if (isImageModalOpen || isTocOpen || isMobile) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isImageModalOpen || isTocOpen || isMobile) return;
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // Render specific folio content by folio object
  const renderFolio = (folio) => {
    if (!folio) return null;

    if (folio.type === "cover") {
      return (
        <CoverPage
          onOpen={() => {
            if (isMobile) {
              const el = document.getElementById("mobile-folio-1");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              goToSpread(1);
            }
          }}
        />
      );
    }

    if (folio.type === "toc") {
      return (
        <ContentsPage
          onSelectChapter={(targetFolio) => {
            if (isMobile) {
              const el = document.getElementById(`mobile-folio-${targetFolio}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              goToFolio(targetFolio);
            }
          }}
          folioMap={folioMap}
          currentFolioIndex={folio.folioIndex}
        />
      );
    }

    if (folio.type === "chapter-page") {
      return (
        <JournalPageRenderer
          pageData={folio.pageData}
          onSelectFolio={(targetFolio) => {
            if (isMobile) {
              const el = document.getElementById(`mobile-folio-${targetFolio}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
              goToFolio(targetFolio);
            }
          }}
          folioMap={folioMap}
        />
      );
    }

    return null;
  };

  // Render Left Page of a given spread
  const renderLeftSpreadPage = (sIdx) => {
    if (sIdx <= 0) return null;
    const folioIdx = sIdx * 2 - 1;
    if (folioIdx < totalFolios) {
      return renderFolio(folios[folioIdx]);
    }
    return null;
  };

  // Render Right Page of a given spread
  const renderRightSpreadPage = (sIdx) => {
    if (sIdx === 0) {
      return <CoverPage onOpen={() => goToSpread(1)} />;
    }
    const folioIdx = sIdx * 2;
    if (folioIdx < totalFolios) {
      return renderFolio(folios[folioIdx]);
    }
    return (
      <ColophonPage
        onReturnCover={() => goToSpread(0)}
        onOpenIndex={() => goToSpread(1)}
      />
    );
  };

  // On Mobile: Render vertical single-column layout
  if (isMobile) {
    return (
      <>
        <JournalMobileView
          folios={folios}
          renderFolio={renderFolio}
          onOpenToc={() => setIsTocOpen(true)}
          currentFolioIndex={spreadIndex * 2}
          onSelectFolio={(targetFolio) => {
            const el = document.getElementById(`mobile-folio-${targetFolio}`);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* TOC Modal for Mobile */}
        <JournalTOCModal
          isOpen={isTocOpen}
          onClose={() => setIsTocOpen(false)}
          currentFolioIndex={spreadIndex * 2}
          onSelectFolio={(targetFolio) => {
            setIsTocOpen(false);
            setTimeout(() => {
              const el = document.getElementById(`mobile-folio-${targetFolio}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 80);
          }}
          folioMap={folioMap}
        />

        {/* Reusable Image Specimen Lightbox Modal */}
        <JournalImageModal />
      </>
    );
  }

  // Desktop (>= 768px): Fit open book within desktop viewport
  return (
    <div className="h-[100dvh] w-screen journal-surface flex flex-col items-center justify-between p-1 sm:p-1.5 pb-1.5 overflow-hidden select-text">
      {/* Book Perspective Stage */}
      <div
        className={`flex-1 min-h-0 w-full flex flex-col items-center justify-center book-perspective-wrapper transition-all duration-300 ${
          spreadIndex === 0
            ? "max-w-[840px] h-full"
            : "max-w-[1920px] w-[99vw] h-full"
        }`}
      >
        {/* ========================================================
            CASE A: SPREAD 0 — STANDALONE FRONT COVER
            ======================================================== */}
        {spreadIndex === 0 ? (
          <div className="book-standalone-cover-shell relative flex-1 w-full h-full min-h-0 flex flex-col overflow-hidden">
            {/* Spine Hinge on the Left Edge of Closed Book */}
            <div className="book-closed-spine-left" aria-hidden="true" />
            <div className="book-pages-stack-right" aria-hidden="true" />

            {/* Running Book Header */}
            <JournalHeader
              currentFolio={folios[0]}
              rightFolio={folios[0]}
              spreadIndex={0}
              totalSpreads={TOTAL_SPREADS}
              totalFolios={totalFolios}
              onOpenToc={() => setIsTocOpen(true)}
            />

            {/* Standalone Cover Canvas */}
            <main className="relative flex-1 w-full h-full min-h-0 p-2 bg-pastel-paper overflow-hidden">
              <CoverPage onOpen={() => goToSpread(1)} />

              {/* Dynamic Contact Underlay Shadow during flip */}
              {flipState.isFlipping && (
                <div className="book-spread-underlay-right" aria-hidden="true" />
              )}
            </main>
          </div>
        ) : (
          /* ========================================================
             CASE B: SPREADS 1-10 — OPEN DUAL-PAGE BEIGE/IVORY CODEX
             ======================================================== */
          <div
            className="book-open-hardcover relative flex-1 w-full h-full min-h-0 flex flex-col overflow-hidden transition-all duration-300"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Stacked Edge Pages (Archival Depth) */}
            <div className="book-pages-stack-left hidden md:block" aria-hidden="true" />
            <div className="book-pages-stack-right hidden md:block" aria-hidden="true" />

            {/* Center Spine Hinge Valley & Binding Stitch */}
            <div className="book-spine-hinge hidden md:block" aria-hidden="true" />

            {/* Pastel Ribbon Bookmark */}
            <JournalRibbon
              currentFolio={activeFolioForRibbon}
              onToggleToc={() => setIsTocOpen(true)}
            />

            {/* Running Book Header */}
            <JournalHeader
              currentFolio={currentLeftFolio}
              rightFolio={currentRightFolio}
              spreadIndex={spreadIndex}
              totalSpreads={TOTAL_SPREADS}
              totalFolios={totalFolios}
              onOpenToc={() => setIsTocOpen(true)}
            />

            {/* Dual-Page Stage */}
            <main className="book-spread-stage relative flex-1 min-h-0 w-full h-full bg-pastel-paper overflow-hidden">
              {/* Single Unified Spread Scroll Container: Scrolls both left and right pages together in unison */}
              <div
                ref={spreadScrollRef}
                className="book-spread-scroll w-full h-full overflow-y-auto overflow-x-hidden select-text"
              >
                <div className="flex w-full min-h-full items-stretch relative">
                  {/* LEFT PAGE (50% width) */}
                  <div className="book-page-half-left hidden md:block relative w-1/2 min-h-full bg-pastel-paper">
                    {flipState.isFlipping && flipState.direction === "forward"
                      ? renderLeftSpreadPage(flipState.fromSpread)
                      : renderLeftSpreadPage(spreadIndex)}

                    {/* Inner Spine Gradient Shadow */}
                    <div className="book-page-spine-shadow-left" aria-hidden="true" />

                    {/* Underlay Shadow on Left during backward flip */}
                    {flipState.isFlipping && flipState.direction === "backward" && (
                      <div className="book-spread-underlay-left" aria-hidden="true" />
                    )}
                  </div>

                  {/* RIGHT PAGE (50% width) */}
                  <div className="book-page-half-right relative w-full md:w-1/2 min-h-full bg-pastel-paper">
                    {flipState.isFlipping && flipState.direction === "backward"
                      ? renderRightSpreadPage(flipState.fromSpread)
                      : renderRightSpreadPage(spreadIndex)}

                    {/* Inner Spine Gradient Shadow */}
                    <div className="book-page-spine-shadow-right hidden md:block" aria-hidden="true" />

                    {/* Underlay Shadow on Right during forward flip */}
                    {flipState.isFlipping && flipState.direction === "forward" && (
                      <div className="book-spread-underlay-right" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>

              {/* Center Spine Hinge Valley & Binding Stitch (Pinned Statically in Middle) */}
              <div className="book-spine-hinge hidden md:block pointer-events-none" aria-hidden="true" />

              {/* 3D TURNING LEAF: FORWARD (Right Page flips over to Left Side) */}
              {flipState.isFlipping && flipState.direction === "forward" && (
                <div className="book-leaf-forward hidden md:block" aria-hidden="true">
                  {/* Front Face: Outgoing Right Page */}
                  <div className="book-leaf-side book-leaf-side-front">
                    <div className="h-full overflow-hidden pointer-events-none select-none">
                      {renderRightSpreadPage(flipState.fromSpread)}
                    </div>
                    <div className="book-leaf-lighting" />
                  </div>

                  {/* Back Face: Incoming Left Page */}
                  <div className="book-leaf-side book-leaf-side-back">
                    <div className="h-full overflow-hidden pointer-events-none select-none">
                      {renderLeftSpreadPage(flipState.toSpread)}
                    </div>
                    <div className="book-leaf-lighting" />
                  </div>
                </div>
              )}

              {/* 3D TURNING LEAF: BACKWARD (Left Page flips over to Right Side) */}
              {flipState.isFlipping && flipState.direction === "backward" && (
                <div className="book-leaf-backward hidden md:block" aria-hidden="true">
                  {/* Front Face: Outgoing Left Page */}
                  <div className="book-leaf-side book-leaf-side-front">
                    <div className="h-full overflow-hidden pointer-events-none select-none">
                      {renderLeftSpreadPage(flipState.fromSpread)}
                    </div>
                    <div className="book-leaf-lighting" />
                  </div>

                  {/* Back Face: Incoming Right Page */}
                  <div className="book-leaf-side book-leaf-side-back">
                    <div className="h-full overflow-hidden pointer-events-none select-none">
                      {renderRightSpreadPage(flipState.toSpread)}
                    </div>
                    <div className="book-leaf-lighting" />
                  </div>
                </div>
              )}
            </main>
          </div>
        )}
      </div>

      {/* Sleek Floating Horizontal Capsule Dock (Inspired by Reference) */}
      <div className="w-full shrink-0 flex items-center justify-center pt-1 z-40">
        <JournalFooter
          currentFolio={currentLeftFolio}
          rightFolio={currentRightFolio}
          spreadIndex={spreadIndex}
          totalSpreads={TOTAL_SPREADS}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSpread={goToSpread}
          onSelectFolio={goToFolio}
          onOpenToc={() => setIsTocOpen(true)}
          folioMap={folioMap}
        />
      </div>

      {/* Fast Chapter Index Modal */}
      <JournalTOCModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        currentFolioIndex={spreadIndex * 2}
        onSelectFolio={goToFolio}
        folioMap={folioMap}
      />

      {/* Reusable Image Specimen Lightbox Modal */}
      <JournalImageModal />
    </div>
  );
}

export default function Journal() {
  return (
    <ImageModalProvider>
      <JournalBookInner />
    </ImageModalProvider>
  );
}
