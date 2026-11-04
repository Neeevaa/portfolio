import React, { useState } from "react";
import { useImageModal } from "../context/ImageModalContext";

/**
 * Tactical Specimen Image component with PNG -> SVG -> Vector fallback
 * Shows clear placeholder instructions and filenames when assets are specimens.
 */
function ProjectSpecimenPlate({
  imageName = "placeholder.png",
  title = "Project Specimen",
  caption,
  tapeColor = "yellow",
  aspectRatio = "aspect-[16/10]",
  badge = "SPECIMEN",
  className = "",
}) {
  const [useSvg, setUseSvg] = useState(false);
  const [inlineFallback, setInlineFallback] = useState(false);
  const { openModal } = useImageModal();

  const tapeClasses = {
    yellow: "washi-tape-yellow",
    peach: "washi-tape-peach",
    blue: "washi-tape-blue",
    sage: "washi-tape-sage",
  };

  const pngSrc = `/assets/${imageName}`;
  const svgSrc = `/assets/${imageName.replace(/\.png$/, ".svg")}`;
  const currentSrc = useSvg ? svgSrc : pngSrc;

  const handleOpenModal = () => {
    if (inlineFallback) return;
    openModal({
      src: currentSrc,
      alt: title,
      title: title,
      caption: caption,
      category: badge,
      tapeColor: tapeColor,
    });
  };

  const handleImageError = () => {
    if (!useSvg) {
      setUseSvg(true);
    } else {
      setInlineFallback(true);
    }
  };

  return (
    <figure className={`relative rounded-md border-2 border-pastel-ink bg-white p-2.5 sm:p-3 shadow-comic select-none ${className}`}>
      {/* Decorative Washi Tape */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 rounded-xs ${
          tapeClasses[tapeColor] || "washi-tape-yellow"
        } rotate-[-1deg] z-20 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Frame Container */}
      <div
        onClick={!inlineFallback ? handleOpenModal : undefined}
        onKeyDown={!inlineFallback ? (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenModal();
          }
        } : undefined}
        tabIndex={!inlineFallback ? 0 : undefined}
        role={!inlineFallback ? "button" : undefined}
        aria-label={!inlineFallback ? `Click to enlarge: ${title}` : undefined}
        className={`relative w-full ${aspectRatio} rounded-sm overflow-hidden border border-pastel-ink/40 bg-pastel-paperAlt flex flex-col items-center justify-center group/projplate transition-colors ${
          !inlineFallback ? "cursor-zoom-in hover:border-pastel-ink" : ""
        }`}
      >
        {!inlineFallback ? (
          <>
            <img
              src={currentSrc}
              alt={title}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-300 group-hover/projplate:scale-[1.02]"
              loading="lazy"
            />
            {/* Click to expand pill badge */}
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/95 border border-pastel-ink text-pastel-ink font-mono text-[9px] font-bold shadow-comic-sm opacity-0 group-hover/projplate:opacity-100 transition-opacity flex items-center gap-1 select-none pointer-events-none">
              <span>🔍</span>
              <span>ENLARGE</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-pastel-ink/40 bg-white flex items-center justify-center text-pastel-inkMuted">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="px-2.5 py-1 rounded bg-white border border-pastel-ink/50 font-mono text-xs font-bold text-pastel-ink shadow-comic-sm">
              [ {imageName} ]
            </div>
            <p className="font-mono text-[10px] text-pastel-inkMuted uppercase tracking-wider">
              Drop screenshot in: /public/assets/{imageName}
            </p>
          </div>
        )}

        {/* Specimen Badge Stamp */}
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-white/95 border border-pastel-ink font-mono text-[10px] font-bold text-pastel-ink shadow-comic-sm">
          ★ {badge}
        </div>
      </div>

      {/* Caption if provided */}
      {caption && (
        <figcaption className="mt-2 text-center">
          <span className="font-hand text-sm text-pastel-inkMuted">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Chapter 03 — Things I Build
 * Layout handles the 3 distinct editorial spreads:
 * - Folio 1 (build-p1): The Workbench (Synapse flagship spread)
 * - Folio 2 (build-p2): Experiments & Applications (Veritas Vision & Hyred)
 * - Folio 3 (build-p3): Systems & Collaboration (Aromiq & Crux)
 */
export default function ProjectShowcasePage({ pageData, onSelectFolio, folioMap }) {
  if (!pageData) return null;

  const {
    id,
    folioType = "workbench",
    chapterNum = "03",
    chapterTitle = "THINGS I BUILD",
    folioLabel = "FOLIO 07",
    folioTitle = "The Workbench",
    date = "2024 — PRESENT",
    location = "KOCHI, IN",
    openingReflection,
    flagship,
    projects = [],
    marginalNote,
  } = pageData;

  // Jump handler to Chapter 04 (Synapse technical case study)
  const handleJumpToSynapseCaseStudy = () => {
    if (onSelectFolio && folioMap && folioMap["synapse"] !== undefined) {
      onSelectFolio(folioMap["synapse"]);
    }
  };

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-18 w-24 sm:w-32 h-5 washi-tape-blue rotate-[1deg] z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Header & Running Chapter Metadata Bar */}
      <header className="flex flex-wrap items-center justify-between pb-2.5 border-b-2 border-pastel-ink/15 gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted" aria-hidden="true">/</span>
          <span className="font-comic text-xs sm:text-sm font-bold tracking-wide uppercase text-pastel-ink">
            {chapterTitle}
          </span>
          <span className="px-2 py-0.5 rounded bg-white border border-pastel-ink/40 font-mono text-[10px] sm:text-[11px] text-pastel-inkMuted font-semibold">
            {folioLabel}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-pastel-inkMuted">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </header>

      {/* ========================================================
          FOLIO 1: The Workbench (Opening Spread & Synapse Flagship)
          ======================================================== */}
      {folioType === "workbench" && flagship && (
        <div className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Chapter Title & Opening Workbench Manifesto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="space-y-1">
                <span className="font-comic text-xs font-bold text-pastel-peachDark uppercase tracking-wider">
                  ★ SPREAD 1 • THE WORKBENCH
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
                  03 — Things I Build
                </h2>
                <div className="font-hand text-xl text-pastel-inkMuted">
                  {folioTitle}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic">
                <p className="font-sans text-base sm:text-lg text-pastel-ink/95 leading-relaxed">
                  {openingReflection}
                </p>
              </div>
            </div>

            {/* Quick Summary Pill Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 p-4 rounded-lg bg-white border-2 border-pastel-ink shadow-comic-sm">
              <div className="flex items-center justify-between border-b border-pastel-ink/20 pb-2">
                <span className="font-comic text-xs font-bold uppercase tracking-wider text-pastel-blueDark">
                  SHOWCASE INDEX
                </span>
                <span className="font-mono text-[11px] text-pastel-inkMuted">5 VERIFIED PROJECTS</span>
              </div>
              <ul className="space-y-1.5 font-sans text-xs text-pastel-ink">
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-pastel-peachDark">01. Synapse</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink/30">FLAGSHIP</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>02. Veritas Vision</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink/30">AI PROTOTYPE</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>03. Hyred</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-pastel-yellowLight border border-pastel-ink/30">CAREER CO-PILOT</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>04. Aromiq</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink/30">COURSEWORK</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>05. Crux</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink/30">COLLABORATION</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Flagship Feature Card: Synapse */}
          <div className="relative rounded-lg border-2 border-pastel-ink bg-white p-6 sm:p-8 shadow-comic-lg space-y-6">
            {/* Flagship Ribbon Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-pastel-ink/15">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded bg-pastel-peach border-2 border-pastel-ink font-comic text-xs font-bold text-pastel-ink shadow-comic-sm uppercase tracking-wide">
                  ★ {flagship.statusBadge}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink/50 font-mono text-[11px] font-bold text-pastel-sageDark">
                  STATUS: {flagship.status}
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-pastel-inkMuted">
                YEAR: {flagship.year}
              </span>
            </div>

            {/* Title & Purpose */}
            <div className="space-y-2">
              <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-pastel-ink leading-tight">
                {flagship.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-pastel-ink/90 leading-relaxed max-w-4xl">
                {flagship.purpose}
              </p>
              <p className="font-sans text-sm text-pastel-inkMuted leading-relaxed max-w-4xl">
                {flagship.intendedValue}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <div className="font-comic text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                VERIFIED TECH STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {flagship.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-pastel-paperAlt border-1.5 border-pastel-ink font-mono text-xs font-bold text-pastel-ink shadow-comic-sm hover:bg-pastel-yellowLight transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Flagship Visual Specimen & Modules Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              {/* Left: Genuine / Vector Specimen Plate (5 cols) */}
              <div className="lg:col-span-5">
                <ProjectSpecimenPlate
                  imageName={flagship.imageName}
                  title="Synapse Architecture & Preview"
                  caption="Figure 3.1: Synapse project interface & AI task generation module."
                  tapeColor="peach"
                  badge="FLAGSHIP SPECIMEN"
                />
              </div>

              {/* Right: Implemented & Explored Modules (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div className="font-comic text-xs font-bold uppercase tracking-wider text-pastel-inkMuted pb-1 border-b border-pastel-ink/20">
                  CORE MODULES &amp; EXPLORED CAPABILITIES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flagship.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-md border-2 border-pastel-ink bg-pastel-paperAlt/80 shadow-comic-sm space-y-1 hover:bg-white transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-pastel-peach border border-pastel-ink" />
                        <h4 className="font-comic text-xs font-bold text-pastel-ink uppercase tracking-wide">
                          {m.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-pastel-ink/85 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Note Callout & Action Buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              {/* Note (8 cols) */}
              <div className="lg:col-span-8 p-4 rounded-md border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic space-y-1">
                <div className="flex items-center gap-2 font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
                  <span>{flagship.techNote.tag}</span>
                  <span className="text-pastel-peachDark">★ {flagship.techNote.category}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-pastel-ink leading-relaxed">
                  {flagship.techNote.text}
                </p>
              </div>

              {/* Action Buttons (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-2.5 font-comic text-xs">
                {flagship.repoUrl && (
                  <a
                    href={flagship.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-md border-2 border-pastel-ink bg-white hover:bg-pastel-blueLight text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 font-bold transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span>VIEW REPOSITORY ON GITHUB</span>
                    <span className="text-sm font-bold">↗</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleJumpToSynapseCaseStudy}
                  className="px-4 py-3 rounded-md border-2 border-pastel-ink bg-pastel-peach hover:bg-pastel-peachDark hover:text-white text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 font-bold transition-all flex items-center justify-between cursor-pointer text-left"
                >
                  <span>{flagship.caseStudyLabel}</span>
                  <span className="text-sm font-bold">➔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          FOLIO 2: Experiments & Applications (Veritas Vision & Hyred)
          ======================================================== */}
      {folioType === "experiments" && projects.length >= 2 && (
        <div className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Section Header */}
          <div className="space-y-1 pb-4 border-b-2 border-pastel-ink/15">
            <span className="font-comic text-xs font-bold text-pastel-lavenderDark uppercase tracking-wider">
              ★ SPREAD 2 • EXPERIMENTS &amp; APPLICATIONS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
              03 — Things I Build
            </h2>
            <p className="font-sans text-base text-pastel-inkMuted leading-relaxed max-w-3xl">
              {openingReflection}
            </p>
          </div>

          {/* Two Distinct Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project 1: Veritas Vision */}
            {projects[0] && (
              <div className="relative rounded-lg border-2 border-pastel-ink bg-white p-5 sm:p-6 shadow-comic space-y-5">
                {/* Washi Tape Header */}
                <div
                  className="absolute -top-3 left-10 w-24 h-5 rounded-xs washi-tape-lavender rotate-[-1deg] z-20 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between pb-3 border-b border-pastel-ink/15 pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink font-comic text-xs font-bold text-pastel-lavenderDark uppercase">
                    ★ {projects[0].badge}
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted font-semibold">
                    {projects[0].projectNo}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-pastel-ink">
                    {projects[0].name}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-pastel-lavenderDark">
                    STATUS: {projects[0].status}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-pastel-ink/90 leading-relaxed pt-1">
                    {projects[0].purpose}
                  </p>
                </div>

                {/* Visual Specimen Plate */}
                <ProjectSpecimenPlate
                  imageName={projects[0].imageName}
                  title="Veritas Vision Prototype Preview"
                  caption="Figure 3.2: Misinformation assessment interface & typology explorer."
                  tapeColor="yellow"
                  badge="AI RESEARCH SPECIMEN"
                />

                {/* Important AI Credibility / Heuristic Disclaimer Alert */}
                <div className="p-3.5 rounded bg-pastel-lavenderLight border-1.5 border-pastel-ink shadow-comic-sm space-y-1">
                  <div className="flex items-center gap-1.5 font-comic text-[11px] font-bold text-pastel-lavenderDark uppercase">
                    <span>✦ CREDIBILITY NOTE</span>
                  </div>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    {projects[0].aiDisclaimer}
                  </p>
                </div>

                {/* Verified Capabilities Checklist */}
                <div className="space-y-2">
                  <div className="font-comic text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                    VERIFIED IMPLEMENTATION
                  </div>
                  <ul className="space-y-1.5 font-sans text-xs text-pastel-ink">
                    {projects[0].verifiedCapabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-pastel-lavenderDark mt-0.5">✓</span>
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-1 border-t border-pastel-ink/15">
                  <div className="font-comic text-[11px] font-bold uppercase tracking-wider text-pastel-inkMuted">
                    TECHNOLOGIES INVOLVED
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[0].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-pastel-paperAlt border border-pastel-ink/40 font-mono text-[11px] text-pastel-ink font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Note */}
                <div className="pt-2 border-t border-pastel-ink/15 font-mono text-[11px] text-pastel-inkMuted flex items-center justify-between">
                  <span>REPOSITORY:</span>
                  <span className="font-semibold text-pastel-ink">
                    {projects[0].repoLabel}
                  </span>
                </div>
              </div>
            )}

            {/* Project 2: Hyred */}
            {projects[1] && (
              <div className="relative rounded-lg border-2 border-pastel-ink bg-white p-5 sm:p-6 shadow-comic space-y-5">
                {/* Washi Tape Header */}
                <div
                  className="absolute -top-3 left-10 w-24 h-5 rounded-xs washi-tape-peach rotate-[1deg] z-20 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between pb-3 border-b border-pastel-ink/15 pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-pastel-peachLight border border-pastel-ink font-comic text-xs font-bold text-pastel-peachDark uppercase">
                    ★ {projects[1].badge}
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted font-semibold">
                    {projects[1].projectNo}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-pastel-ink">
                    {projects[1].name}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-pastel-peachDark">
                    STATUS: {projects[1].status}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-pastel-ink/90 leading-relaxed pt-1">
                    {projects[1].purpose}
                  </p>
                </div>

                {/* Visual Specimen Plate */}
                <ProjectSpecimenPlate
                  imageName={projects[1].imageName}
                  title="Hyred Platform Preview"
                  caption="Figure 3.3: Skill assessment dashboard & automated learning roadmaps."
                  tapeColor="peach"
                  badge="CAREER PROTOTYPE"
                />

                {/* Problem Explored Box */}
                <div className="p-3.5 rounded bg-pastel-peachLight border-1.5 border-pastel-ink shadow-comic-sm space-y-1">
                  <div className="flex items-center gap-1.5 font-comic text-[11px] font-bold text-pastel-peachDark uppercase">
                    <span>✦ PROBLEM EXPLORED</span>
                  </div>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    {projects[1].problemExplored}
                  </p>
                </div>

                {/* Verified Capabilities Checklist */}
                <div className="space-y-2">
                  <div className="font-comic text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                    VERIFIED IMPLEMENTATION
                  </div>
                  <ul className="space-y-1.5 font-sans text-xs text-pastel-ink">
                    {projects[1].verifiedCapabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-pastel-peachDark mt-0.5">✓</span>
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-1 border-t border-pastel-ink/15">
                  <div className="font-comic text-[11px] font-bold uppercase tracking-wider text-pastel-inkMuted">
                    TECHNOLOGIES INVOLVED
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[1].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-pastel-paperAlt border border-pastel-ink/40 font-mono text-[11px] text-pastel-ink font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Note */}
                <div className="pt-2 border-t border-pastel-ink/15 font-mono text-[11px] text-pastel-inkMuted flex items-center justify-between">
                  <span>REPOSITORY:</span>
                  <span className="font-semibold text-pastel-ink">
                    {projects[1].repoLabel}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          FOLIO 3: Systems & Collaboration (Aromiq & Crux)
          ======================================================== */}
      {folioType === "systems" && projects.length >= 2 && (
        <div className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Section Header */}
          <div className="space-y-1 pb-4 border-b-2 border-pastel-ink/15">
            <span className="font-comic text-xs font-bold text-pastel-sageDark uppercase tracking-wider">
              ★ SPREAD 3 • SYSTEMS &amp; COLLABORATION
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-[1.08] text-pastel-ink">
              03 — Things I Build
            </h2>
            <p className="font-sans text-base text-pastel-inkMuted leading-relaxed max-w-3xl">
              {openingReflection}
            </p>
          </div>

          {/* Two Distinct Systems Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Project 4: Aromiq */}
            {projects[0] && (
              <div className="relative rounded-lg border-2 border-pastel-ink bg-white p-5 sm:p-6 shadow-comic space-y-5">
                {/* Washi Tape Header */}
                <div
                  className="absolute -top-3 left-10 w-24 h-5 rounded-xs washi-tape-sage rotate-[-1deg] z-20 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between pb-3 border-b border-pastel-ink/15 pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink font-comic text-xs font-bold text-pastel-sageDark uppercase">
                    ★ {projects[0].badge}
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted font-semibold">
                    {projects[0].projectNo}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-pastel-ink">
                    {projects[0].name}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-pastel-sageDark">
                    STATUS: {projects[0].status}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-pastel-ink/90 leading-relaxed pt-1">
                    {projects[0].purpose}
                  </p>
                </div>

                {/* Visual Specimen Plate */}
                <ProjectSpecimenPlate
                  imageName={projects[0].imageName}
                  title="Aromiq Platform Preview"
                  caption="Figure 3.4: Restaurant menu, table ordering & MySQL backend schema."
                  tapeColor="sage"
                  badge="COURSEWORK SPECIMEN"
                />

                {/* Honest Distinction: Implemented vs Explored/Planned */}
                <div className="p-3.5 rounded bg-pastel-sageLight border-1.5 border-pastel-ink shadow-comic-sm space-y-2">
                  <div className="font-comic text-[11px] font-bold text-pastel-sageDark uppercase">
                    ✦ FEATURE ARCHITECTURE STATUS
                  </div>
                  <div className="space-y-1.5 font-sans text-xs text-pastel-ink">
                    <div>
                      <span className="font-bold text-pastel-sageDark">✓ Implemented: </span>
                      <span>{projects[0].implementedVsPlanned.implemented}</span>
                    </div>
                    <div>
                      <span className="font-bold text-pastel-inkMuted">✦ Explored / Planned: </span>
                      <span>{projects[0].implementedVsPlanned.planned}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-1 border-t border-pastel-ink/15">
                  <div className="font-comic text-[11px] font-bold uppercase tracking-wider text-pastel-inkMuted">
                    TECHNOLOGIES INVOLVED
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[0].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-pastel-paperAlt border border-pastel-ink/40 font-mono text-[11px] text-pastel-ink font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Repository Button */}
                {projects[0].repoUrl && (
                  <div className="pt-2 border-t border-pastel-ink/15">
                    <a
                      href={projects[0].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2.5 rounded-md border-2 border-pastel-ink bg-white hover:bg-pastel-sageLight text-pastel-ink shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 font-comic text-xs font-bold transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>{projects[0].repoLabel}</span>
                      <span className="font-bold text-sm">↗</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Project 5: Crux */}
            {projects[1] && (
              <div className="relative rounded-lg border-2 border-pastel-ink bg-white p-5 sm:p-6 shadow-comic space-y-5">
                {/* Washi Tape Header */}
                <div
                  className="absolute -top-3 left-10 w-24 h-5 rounded-xs washi-tape-blue rotate-[1deg] z-20 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between pb-3 border-b border-pastel-ink/15 pt-1">
                  <span className="px-2.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink font-comic text-xs font-bold text-pastel-blueDark uppercase">
                    ★ {projects[1].badge}
                  </span>
                  <span className="font-mono text-[11px] text-pastel-inkMuted font-semibold">
                    {projects[1].projectNo}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-pastel-ink">
                    {projects[1].name}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-pastel-blueDark">
                    STATUS: {projects[1].status}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-pastel-ink/90 leading-relaxed pt-1">
                    {projects[1].purpose}
                  </p>
                </div>

                {/* Visual Specimen Plate */}
                <ProjectSpecimenPlate
                  imageName={projects[1].imageName}
                  title="Crux College Club Portal Preview"
                  caption="Figure 3.5: Collaborative WordPress hub for campus club activities."
                  tapeColor="blue"
                  badge="COLLABORATION SPECIMEN"
                />

                {/* Team Collaboration & Personal Contribution Callout */}
                <div className="p-3.5 rounded bg-pastel-blueLight border-1.5 border-pastel-ink shadow-comic-sm space-y-1">
                  <div className="flex items-center gap-1.5 font-comic text-[11px] font-bold text-pastel-blueDark uppercase">
                    <span>✦ TEAM COLLABORATION &amp; SCOPE</span>
                  </div>
                  <p className="font-sans text-xs text-pastel-ink/90 leading-relaxed">
                    {projects[1].collaborationNote}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-1 border-t border-pastel-ink/15">
                  <div className="font-comic text-[11px] font-bold uppercase tracking-wider text-pastel-inkMuted">
                    TECHNOLOGIES INVOLVED
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {projects[1].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-pastel-paperAlt border border-pastel-ink/40 font-mono text-[11px] text-pastel-ink font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Note */}
                <div className="pt-2 border-t border-pastel-ink/15 font-mono text-[11px] text-pastel-inkMuted flex items-center justify-between">
                  <span>PROJECT TYPE:</span>
                  <span className="font-semibold text-pastel-ink">
                    {projects[1].repoLabel}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Marginal Note (Engineering Takeaway) */}
          {marginalNote && (
            <div className="p-4 rounded-md border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic space-y-1">
              <div className="flex items-center gap-2 font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
                <span>{marginalNote.tag}</span>
                <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-pastel-ink leading-relaxed">
                {marginalNote.text}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Running Footer Note */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-hand text-xs sm:text-sm text-pastel-inkMuted">
        <div>
          ★ Curated software projects // Recorded in personal engineering notebook
        </div>
        <div className="font-comic text-[11px] font-bold uppercase text-pastel-blueDark">
          CH.{chapterNum} // {folioLabel}
        </div>
      </footer>
    </div>
  );
}
