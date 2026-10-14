import React, { useState } from "react";

export default function ProjectShowcasePage({ pageData }) {
  const {
    chapterNum,
    chapterTitle,
    projectNo,
    projectName,
    headline,
    subtitle,
    status = "SHIPPED",
    year = "2026",
    techStack = [],
    metrics = [],
    comicComment,
    techNote,
    links = [],
  } = pageData;

  const [activeTab, setActiveTab] = useState("telemetry");

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text bg-pastel-paper text-pastel-ink">
      {/* Chapter Tag & Project Folio */}
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
          <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            {projectNo}
          </span>
          <span>STATUS: {status}</span>
          <span>•</span>
          <span>{year}</span>
        </div>
      </div>

      {/* Main Project Header */}
      <div className="mt-8 space-y-4">
        <div className="inline-block px-3 py-1 rounded bg-pastel-peachLight border border-pastel-ink font-comic text-sm font-bold tracking-wider text-pastel-peachDark shadow-comic-sm">
          ★ {projectName || projectNo}
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.1] text-pastel-ink">
          {headline}
        </h2>
        {subtitle && (
          <p className="max-w-3xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
            {subtitle}
          </p>
        )}

        {/* Tech Stack Sticker Pills */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white border-1.5 border-pastel-ink font-comic text-xs font-bold text-pastel-ink shadow-comic-sm hover:bg-pastel-yellowLight transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Illustrated Technical Console (Comic Diagnostic Panel) */}
      <div className="mt-8 rounded-lg border-2 border-pastel-ink bg-white overflow-hidden shadow-comic">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-pastel-paperAlt border-b-2 border-pastel-ink">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pastel-peach border border-pastel-ink"></span>
            <span className="w-3 h-3 rounded-full bg-pastel-yellow border border-pastel-ink"></span>
            <span className="w-3 h-3 rounded-full bg-pastel-sage border border-pastel-ink"></span>
            <span className="ml-3 font-comic text-xs font-bold text-pastel-ink tracking-wider">
              {projectNo.toLowerCase()} // diagnostic-console
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`font-comic text-xs px-2.5 py-0.5 rounded font-bold transition-all ${
                activeTab === "telemetry"
                  ? "bg-pastel-blue text-white border border-pastel-ink shadow-comic-sm"
                  : "text-pastel-inkMuted hover:text-pastel-ink"
              }`}
            >
              METRICS
            </button>
            <button
              onClick={() => setActiveTab("stream")}
              className={`font-comic text-xs px-2.5 py-0.5 rounded font-bold transition-all ${
                activeTab === "stream"
                  ? "bg-pastel-blue text-white border border-pastel-ink shadow-comic-sm"
                  : "text-pastel-inkMuted hover:text-pastel-ink"
              }`}
            >
              EXECUTION TRACE
            </button>
          </div>
        </div>

        {/* Dashboard Body with Pastel Stat Cards */}
        <div className="p-5 sm:p-6 space-y-6 bg-pastel-paper/40">
          {/* Key Metric Gauges */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {metrics.map((m, idx) => {
                const bgColors = ["bg-pastel-blueLight", "bg-pastel-lavenderLight", "bg-pastel-sageLight", "bg-pastel-yellowLight"];
                const cardBg = bgColors[idx % bgColors.length];

                return (
                  <div key={idx} className={`p-3.5 rounded-md border-2 border-pastel-ink ${cardBg} shadow-comic-sm`}>
                    <div className="font-comic text-[11px] font-bold text-pastel-inkMuted uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="mt-1 font-mono text-2xl sm:text-3xl text-pastel-ink font-semibold tracking-tight">
                      {m.value} <span className="text-xs font-mono font-normal text-pastel-inkMuted">{m.unit}</span>
                    </div>
                    {m.change && (
                      <div className="mt-1 font-hand text-sm font-bold text-pastel-ink">
                        {m.change}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Trace view */}
          <div className="p-4 rounded-md border-2 border-pastel-ink bg-white font-mono text-xs shadow-comic-sm">
            <div className="flex items-center justify-between text-[11px] text-pastel-inkMuted pb-2 border-b border-pastel-ink/20 mb-2">
              <span className="font-comic text-xs font-bold text-pastel-ink uppercase">
                REAL-TIME EXECUTION PIPELINE
              </span>
              <span className="font-hand text-sm font-bold text-pastel-sageDark">✓ Verified Stream</span>
            </div>
            <div className="space-y-2 text-pastel-ink text-xs font-sans">
              <div className="flex items-center gap-2">
                <span className="font-mono text-pastel-blueDark font-bold">0.00ms</span>
                <span className="text-pastel-inkMuted">➔</span>
                <span>Inbound frame parsed via ASGI WebSocket channel</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-pastel-blueDark font-bold">14.2ms</span>
                <span className="text-pastel-inkMuted">➔</span>
                <span>Context vector retrieval: top-3 chunks injected into memory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-pastel-blueDark font-bold">42.1ms</span>
                <span className="text-pastel-inkMuted">➔</span>
                <span className="font-semibold text-pastel-peachDark">First token emitted &amp; streamed to client</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-pastel-blueDark font-bold">280ms</span>
                <span className="text-pastel-inkMuted">➔</span>
                <span>Turn completed (32 tokens, 114 tok/s sustained)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Caption below visual */}
        <div className="px-4 py-2.5 bg-pastel-paperAlt border-t-2 border-pastel-ink text-xs font-hand flex justify-between items-center text-pastel-inkMuted">
          <span className="text-base text-pastel-ink">
            {comicComment || "★ Diagnostic telemetry snapshot from local execution run"}
          </span>
          <span className="font-comic font-bold text-pastel-blueDark uppercase">
            STATUS: PASS
          </span>
        </div>
      </div>

      {/* Technical Note Sticky Callout & Action Links */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Tech Note (8 cols) */}
        {techNote && (
          <div className="lg:col-span-8 p-5 rounded-md border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic relative">
            <div className="flex items-center gap-2 font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider mb-1.5">
              <span>{techNote.tag}</span>
              <span className="text-pastel-peachDark">★ {techNote.category}</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-pastel-ink leading-relaxed">
              {techNote.text}
            </p>
          </div>
        )}

        {/* Action Links (4 cols) */}
        {links.length > 0 && (
          <div className="lg:col-span-4 flex flex-col gap-2.5 font-comic text-xs">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="px-4 py-3 rounded-md border-2 border-pastel-ink bg-white hover:bg-pastel-peach hover:text-white shadow-comic-sm hover:shadow-comic hover:-translate-y-0.5 active:translate-y-0 text-pastel-ink font-bold transition-all flex items-center justify-between cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="text-sm font-bold">➔</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer rule */}
      <div className="mt-10 pt-4 border-t-2 border-pastel-ink/15 flex justify-between font-hand text-base text-pastel-inkMuted">
        <div>★ Illustrated project specimen // Recorded in personal engineering notebook</div>
        <div className="font-comic text-xs font-bold uppercase text-pastel-blueDark">FOLIO CH.{chapterNum}</div>
      </div>
    </div>
  );
}
