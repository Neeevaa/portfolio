import React from "react";

export default function JournalRibbon({ currentFolio, onToggleToc }) {
  const getChapterLabel = () => {
    if (!currentFolio) return "BOOK";
    if (currentFolio.type === "cover") return "COVER";
    if (currentFolio.type === "toc") return "INDEX";
    return `CH.${currentFolio.chapterNum}`;
  };

  return (
    <button
      type="button"
      onClick={onToggleToc}
      aria-label="Open Table of Contents bookmark"
      title="Click to open Journal Index [M]"
      className="ribbon-bookmark-pastel group flex flex-col items-center justify-start pt-2 select-none focus-visible:ring-2 focus-visible:ring-pastel-ink focus-visible:outline-none"
    >
      <span className="font-comic text-[11px] font-bold text-white tracking-wide drop-shadow-xs">
        {getChapterLabel()}
      </span>
      <span className="text-[11px] text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
        ☰
      </span>
    </button>
  );
}
