import React, { useState, useEffect, useMemo, useRef } from "react";
import JournalHeader from "./JournalHeader";
import JournalFooter from "./JournalFooter";
import JournalRibbon from "./JournalRibbon";
import JournalTOCModal from "./JournalTOCModal";

import CoverPage from "./pages/CoverPage";
import ContentsPage from "./pages/ContentsPage";
import JournalPageRenderer from "./layouts/JournalPageRenderer";
import { chaptersData, buildFolioList } from "./data/journalData";

import "./journal.css";

export default function Journal() {
  const [folioIndex, setFolioIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [isTocOpen, setIsTocOpen] = useState(false);

  const pageContainerRef = useRef(null);
  const touchStartXRef = useRef(null);

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

  const currentFolio = folios[folioIndex] || folios[0];

  // Navigate to target folio
  const goToFolio = (targetIndex) => {
    if (targetIndex === folioIndex) return;
    if (targetIndex >= 0 && targetIndex < totalFolios) {
      setDirection(targetIndex > folioIndex ? "forward" : "backward");
      setFolioIndex(targetIndex);
      if (pageContainerRef.current) {
        pageContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (folioIndex < totalFolios - 1) {
      setDirection("forward");
      setFolioIndex((prev) => prev + 1);
      if (pageContainerRef.current) {
        pageContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    if (folioIndex > 0) {
      setDirection("backward");
      setFolioIndex((prev) => prev - 1);
      if (pageContainerRef.current) {
        pageContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid firing while typing in an input or editable element
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
        e.key === "ArrowDown" ||
        (e.key === " " && folioIndex === 0)
      ) {
        if (e.key === " ") e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrev();
      } else if (e.key === "m" || e.key === "M") {
        setIsTocOpen((prev) => !prev);
      } else if (e.key === "0") {
        goToFolio(0); // Return to Cover
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [folioIndex, totalFolios]);

  // Touch Swipe Support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped Left -> go next
        handleNext();
      } else {
        // Swiped Right -> go prev
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Render current folio content
  const renderFolioContent = () => {
    if (!currentFolio) return null;

    if (currentFolio.type === "cover") {
      return <CoverPage onOpen={handleNext} />;
    }

    if (currentFolio.type === "toc") {
      return (
        <ContentsPage
          onSelectChapter={(targetFolio) => goToFolio(targetFolio)}
          folioMap={folioMap}
          currentFolioIndex={folioIndex}
        />
      );
    }

    if (currentFolio.type === "chapter-page") {
      return <JournalPageRenderer pageData={currentFolio.pageData} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen journal-surface flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12">
      {/* Main Comic Diary Book Shell */}
      <div
        className="relative w-full max-w-6xl my-auto rounded-lg overflow-hidden journal-diary-book transition-all duration-300"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Archival Spine Gutter Line */}
        <div className="journal-gutter-pastel hidden md:block"></div>

        {/* Pastel Ribbon Bookmark */}
        <JournalRibbon
          currentFolio={currentFolio}
          onToggleToc={() => setIsTocOpen(true)}
        />

        {/* Running Book Header */}
        <JournalHeader
          currentFolio={currentFolio}
          folioIndex={folioIndex}
          totalFolios={totalFolios}
          onOpenToc={() => setIsTocOpen(true)}
        />

        {/* Scrollable Page Body with Dynamic Transition */}
        <main
          ref={pageContainerRef}
          className="journal-scroll relative min-h-[580px] max-h-[82vh] overflow-y-auto overflow-x-hidden bg-pastel-paper"
        >
          <div
            key={folioIndex}
            className={
              direction === "forward" ? "page-slide-forward" : "page-slide-backward"
            }
          >
            {renderFolioContent()}
          </div>
        </main>

        {/* Book Footer Folio Navigation */}
        <JournalFooter
          currentFolio={currentFolio}
          folioIndex={folioIndex}
          totalFolios={totalFolios}
          folios={folios}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectFolio={goToFolio}
          folioMap={folioMap}
        />
      </div>

      {/* Subtle Keyboard / Navigation Hint Below Book */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 font-comic text-xs text-pastel-inkMuted select-none">
        <span>Use [ ← / → ] keys to turn pages</span>
        <span>•</span>
        <span>Press [ M ] or [ ESC ] for Chapter Index</span>
        <span>•</span>
        <span>Swipe on mobile devices</span>
      </div>

      {/* Fast Chapter Index Modal */}
      <JournalTOCModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        currentFolioIndex={folioIndex}
        onSelectFolio={goToFolio}
        folioMap={folioMap}
      />
    </div>
  );
}
