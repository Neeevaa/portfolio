import React from "react";

/**
 * Chapter 05 — Research Notebook Layout
 *
 * Renders the 3 in-depth research-notebook spreads:
 * - Folio 12 (folioType === "literature"): Research Question, Central Motivation & 5-Theme Literature Map
 * - Folio 13 (folioType === "evaluation"): Proposed Empirical Evaluation Framework (LLM-Only vs RAG-Assisted)
 * - Folio 14 (folioType === "log"): Chronological Research Log, Honest Limitations & Academic Roadmap
 *
 * Adheres strictly to docs/DESIGN_STANDARDS.md:
 * - Editorial serif typography (Newsreader) for paper and section headlines
 * - Humanist sans (Plus Jakarta / Inter) for readable body paragraphs
 * - Monospace (JetBrains Mono) for research questions, formulas, status badges, and citations
 * - Cursive handwriting (Caveat / Patrick Hand) for marginalia inquiry bubbles
 * - Restrained palette: Lavender (research accent), Dusty Blue (technical tags), Sage (verified status), Peach (callout badges)
 */

function ResearchBadge({ status = "PROPOSED" }) {
  const styles = {
    PROPOSED: "bg-pastel-peachLight text-pastel-peachDark border-pastel-peachDark",
    "IN PROGRESS": "bg-pastel-blueLight text-pastel-blueDark border-pastel-blueDark",
    COMPLETED: "bg-pastel-sageLight text-pastel-sageDark border-pastel-sageDark",
    LITERATURE: "bg-pastel-lavenderLight text-pastel-lavenderDark border-pastel-lavenderDark",
    OBSERVED: "bg-stone-200 text-stone-700 border-stone-400",
  };

  const badgeStyle = styles[status] || styles.PROPOSED;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold tracking-wide uppercase shadow-xs ${badgeStyle}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}

export default function ResearchNotebookPage({ pageData }) {
  if (!pageData) return null;

  const {
    folioType = "literature",
    chapterNum = "05",
    chapterTitle = "RESEARCH",
    folioLabel = "FOLIO 12",
    folioTitle = "Literature Map & Questions",
    date = "OCTOBER 2026",
    headline,
    subtitle,
    paperMeta,
    abstract,
    motivation,
    researchQuestions,
    literatureThemes = [],
    literatureMap,
    comparisonSetup,
    evaluationPipeline = [],
    evaluationDimensions = [],
    experimentalControls,
    currentProgress,
    chronologicalLog = [],
    limitations = [],
    nextSteps = [],
    marginalNote,
    footnote,
  } = pageData;

  const washiTapes = {
    literature: "washi-tape-lavender",
    evaluation: "washi-tape-blue",
    log: "washi-tape-sage",
  };

  const tapeClass = washiTapes[folioType] || "washi-tape-lavender";

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className={`absolute -top-3 left-10 sm:left-18 w-24 sm:w-32 h-5 ${tapeClass} rotate-[-1deg] z-20 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Wire Paper Clip Accent */}
      <div
        className="paper-clip right-6 sm:right-12 top-[-10px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Header & Running Chapter Metadata Bar */}
      <header className="flex flex-wrap items-center justify-between pb-2.5 border-b-2 border-pastel-ink/15 gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
            CHAPTER {chapterNum}
          </span>
          <span className="text-pastel-inkMuted" aria-hidden="true">/</span>
          <span className="font-comic text-xs sm:text-sm font-bold tracking-wide uppercase text-pastel-ink">
            {chapterTitle}
          </span>
          <span className="text-pastel-inkMuted hidden md:inline" aria-hidden="true">•</span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase text-pastel-inkMuted hidden md:inline">
            [ {folioLabel}: {folioTitle} ]
          </span>
        </div>

        <div className="flex items-center gap-2 font-comic text-[10px] sm:text-xs text-pastel-inkMuted">
          <span className="px-2 py-0.5 rounded bg-pastel-lavender border border-pastel-ink text-white font-bold shadow-comic-sm">
            ★ EMPIRICAL RESEARCH LOG
          </span>
          <span className="font-mono text-xs">{date}</span>
        </div>
      </header>

      {/* ====================================================================
          FOLIO 12: Research Question, Central Motivation & 5-Theme Literature Map
          ==================================================================== */}
      {folioType === "literature" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Paper Title & Abstract Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold tracking-wider text-pastel-ink shadow-comic-sm">
              <span>LITERATURE REVIEW &amp; THEORETICAL FOUNDATION</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">LLM4SE &amp; MULTI-AGENT SYSTEMS</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Academic Paper Metadata Bar */}
          {paperMeta && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt font-mono text-xs shadow-comic-sm">
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">WORKING TITLE</span>
                <span className="font-bold text-pastel-ink truncate block" title={paperMeta.title}>
                  {paperMeta.title}
                </span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">AUTHOR &amp; AFFILIATION</span>
                <span className="font-bold text-pastel-ink block">{paperMeta.author}</span>
                <span className="text-pastel-inkMuted text-[10px]">{paperMeta.institution}</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">SURVEY SCOPE</span>
                <span className="font-bold text-pastel-ink block">{paperMeta.surveyScope}</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">RESEARCH STATUS</span>
                <span className="font-bold text-pastel-peachDark block">{paperMeta.status}</span>
              </div>
            </div>
          )}

          {/* Abstract Panel */}
          {abstract && (
            <div className="p-5 rounded-lg bg-pastel-yellowLight border-2 border-pastel-ink shadow-comic space-y-2">
              <div className="flex items-center justify-between font-comic text-xs font-bold text-pastel-peachDark uppercase tracking-wider pb-1 border-b border-pastel-ink/15">
                <span>★ ABSTRACT &amp; PROBLEM STATEMENT</span>
                <span className="font-mono text-pastel-inkMuted text-[10px]">[ LITERATURE REVIEW SUMMARY ]</span>
              </div>
              <p className="font-sans text-sm sm:text-[15px] text-pastel-ink leading-relaxed">
                {abstract}
              </p>
            </div>
          )}

          {/* Motivation & Core Research Questions */}
          {researchQuestions && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-lavenderDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  1. Research Questions &amp; Context Motivation
                </h2>
              </div>

              {motivation && (
                <p className="font-sans text-sm text-pastel-ink/90 leading-relaxed">
                  {motivation}
                </p>
              )}

              {/* Central Research Question Callout */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink text-pastel-ink uppercase">
                    CENTRAL RESEARCH QUESTION (CRQ)
                  </span>
                  <ResearchBadge status="PROPOSED" />
                </div>
                <p className="font-editorial text-lg sm:text-xl font-normal text-pastel-ink leading-snug">
                  &ldquo;{researchQuestions.central}&rdquo;
                </p>
              </div>

              {/* Supporting Sub-Questions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {researchQuestions.supporting.map((rq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt font-sans shadow-comic space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-pastel-lavenderDark">
                          {rq.code}
                        </span>
                        <ResearchBadge status="PROPOSED" />
                      </div>
                      <h3 className="font-bold text-xs uppercase tracking-wider text-pastel-ink">
                        {rq.theme}
                      </h3>
                      <p className="text-xs text-pastel-inkMuted leading-relaxed">
                        {rq.question}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[10px] text-pastel-inkMuted">
                      TARGET: {rq.target}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5 Literature Themes Grid */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/15 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-blueDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  2. Literature Themes: The 5 Research Clusters
                </h2>
              </div>
              <span className="font-mono text-xs text-pastel-inkMuted">
                [ SYNTHESIS OF ~20 CONTEMPORARY PAPERS (2023–2025) ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {literatureThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic hover:-translate-y-1 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink text-pastel-ink">
                        THEME 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] text-pastel-inkMuted uppercase">
                        {theme.category}
                      </span>
                    </div>

                    <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                      {theme.title}
                    </h3>

                    <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                      {theme.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-pastel-ink/10 space-y-1.5 font-mono text-[11px]">
                    <div className="text-pastel-peachDark font-semibold">
                      KEY GAP: <span className="font-normal text-pastel-ink">{theme.gap}</span>
                    </div>
                    <div className="text-pastel-inkMuted text-[10px]">
                      SOURCES: {theme.citations}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visual Literature Convergence Map */}
          {literatureMap && (
            <section className="p-6 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt shadow-comic space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                <span className="text-pastel-lavenderDark">THEORETICAL CONVERGENCE DIAGRAM</span>
                <span className="font-mono text-pastel-inkMuted text-[10px]">SYSTEM SYNTHESIS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {literatureMap.stages.map((stg, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md border-2 border-pastel-ink bg-white shadow-comic-sm space-y-2 relative"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-pastel-ink">{stg.label}</span>
                      <span className="text-pastel-lavenderDark font-bold">0{idx + 1}</span>
                    </div>
                    <h4 className="font-editorial text-base font-bold text-pastel-ink">
                      {stg.title}
                    </h4>
                    <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                      {stg.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      )}

      {/* ====================================================================
          FOLIO 13: Proposed Empirical Evaluation Framework
          ==================================================================== */}
      {folioType === "evaluation" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Header & Protocol Disclaimer */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-peachLight border border-pastel-peachDark font-comic text-xs font-bold tracking-wider text-pastel-peachDark shadow-comic-sm">
              <span>★ PROPOSED EVALUATION FRAMEWORK</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">CONTROLLED EXPERIMENT PROTOCOL</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Explicit Notice: Proposed, Not Completed */}
          <div className="p-4 rounded-lg border-2 border-dashed border-pastel-peachDark bg-pastel-peachLight/40 font-sans text-xs text-pastel-ink space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-pastel-peachDark uppercase">
              <span>⚠️</span>
              <span>METHODOLOGICAL HONESTY &amp; STATUS DISCLOSURE</span>
            </div>
            <p className="leading-relaxed text-pastel-ink/90">
              The framework below outlines the <strong>proposed empirical evaluation methodology</strong> for Synapse. No completed benchmark scores, precision figures, or sample distributions are claimed here; the experiment protocol is documented to communicate research design rigor and evaluation criteria.
            </p>
          </div>

          {/* Proposed Comparison: Condition A vs Condition B */}
          {comparisonSetup && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-blueDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  1. The Proposed Comparative Conditions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Condition A: Baseline */}
                <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-pastel-ink/15">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-200 border border-stone-400 text-stone-800">
                      CONDITION A (BASELINE)
                    </span>
                    <span className="font-mono text-[10px] text-pastel-inkMuted uppercase">LLM-ONLY</span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                    {comparisonSetup.baseline.title}
                  </h3>
                  <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                    {comparisonSetup.baseline.description}
                  </p>
                  <ul className="space-y-1.5 font-mono text-[11px] text-pastel-ink pt-2 border-t border-pastel-ink/10">
                    <li>• Context: <strong>Target requirement text only</strong></li>
                    <li>• Retrieval: <strong>None (Zero-shot evaluation)</strong></li>
                    <li>• Model: <strong>Qwen3-4B-Instruct (local, temp: 0.2)</strong></li>
                  </ul>
                </div>

                {/* Condition B: Proposed RAG-Assisted */}
                <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-yellowLight shadow-comic space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-pastel-ink/15">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-pastel-sageLight border border-pastel-sageDark text-pastel-sageDark">
                      CONDITION B (PROPOSED)
                    </span>
                    <span className="font-mono text-[10px] text-pastel-sageDark uppercase font-bold">RAG-ASSISTED</span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                    {comparisonSetup.proposed.title}
                  </h3>
                  <p className="font-sans text-xs text-pastel-ink leading-relaxed">
                    {comparisonSetup.proposed.description}
                  </p>
                  <ul className="space-y-1.5 font-mono text-[11px] text-pastel-ink pt-2 border-t border-pastel-ink/15">
                    <li>• Context: <strong>Requirement + Tenant knowledge chunks</strong></li>
                    <li>• Retrieval: <strong>nomic-embed-text (top-5, similarity &gt; 0.0)</strong></li>
                    <li>• Provenance: <strong>[SOURCE: type | key | version] tags</strong></li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* 4-Stage Evaluation Pipeline Flow */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/15 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  2. Proposed Evaluation Execution Pipeline
                </h2>
              </div>
              <span className="font-mono text-xs text-pastel-inkMuted">
                [ TESTBED ➔ DUAL INFERENCE ➔ HUMAN TRIAGE ➔ METRICS ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {evaluationPipeline.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-2 border-pastel-ink bg-white font-sans shadow-comic space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink text-pastel-ink">
                        STAGE 0{step.stage}
                      </span>
                      {idx < evaluationPipeline.length - 1 && (
                        <span className="hidden lg:block font-bold text-pastel-ink text-sm">➔</span>
                      )}
                    </div>
                    <h3 className="font-editorial text-base font-bold text-pastel-ink">
                      {step.title}
                    </h3>
                    <p className="text-xs text-pastel-inkMuted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[10px] text-pastel-inkMuted">
                    ARTIFACT: {step.artifact}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5 Proposed Evaluation Dimensions Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
              <span className="w-2.5 h-2.5 rounded-full bg-pastel-sageDark" />
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                3. Candidate Evaluation Dimensions (Proposed Measures)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {evaluationDimensions.map((dim, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-pastel-blueDark">
                        DIMENSION 0{idx + 1}
                      </span>
                      <ResearchBadge status="PROPOSED" />
                    </div>

                    <h3 className="font-editorial text-base sm:text-lg font-bold text-pastel-ink">
                      {dim.name}
                    </h3>

                    <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                      {dim.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-pastel-ink/10 space-y-1 font-mono text-[11px]">
                    <div className="text-pastel-ink font-semibold">
                      MEASUREMENT: <span className="font-normal text-pastel-inkMuted">{dim.measurement}</span>
                    </div>
                    <div className="text-pastel-peachDark text-[10px]">
                      HYPOTHESIS: {dim.hypothesis}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experimental Controls & Hardware Setup */}
          {experimentalControls && (
            <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt font-mono text-xs shadow-comic space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                <span className="text-pastel-ink">CONTROLLED EXPERIMENT PARAMETERS</span>
                <span className="text-pastel-inkMuted">[ REPRODUCIBILITY SPECS ]</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-pastel-ink">
                <div>
                  <span className="text-pastel-inkMuted block text-[10px] uppercase">TESTBED HARDWARE</span>
                  <span className="font-bold">{experimentalControls.hardware}</span>
                </div>
                <div>
                  <span className="text-pastel-inkMuted block text-[10px] uppercase">LOCAL MODEL &amp; TEMP</span>
                  <span className="font-bold">{experimentalControls.model}</span>
                </div>
                <div>
                  <span className="text-pastel-inkMuted block text-[10px] uppercase">EVALUATION REFERENCE</span>
                  <span className="font-bold">{experimentalControls.standards}</span>
                </div>
                <div>
                  <span className="text-pastel-inkMuted block text-[10px] uppercase">HUMAN REVIEWERS</span>
                  <span className="font-bold">{experimentalControls.reviewers}</span>
                </div>
              </div>
            </div>
          )}
        </article>
      )}

      {/* ====================================================================
          FOLIO 14: Research Log, Limitations & Next Steps
          ==================================================================== */}
      {folioType === "log" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Header & Abstract */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-sageLight border border-pastel-sageDark font-comic text-xs font-bold tracking-wider text-pastel-sageDark shadow-comic-sm">
              <span>RESEARCH CHRONOLOGY &amp; OPEN QUESTIONS</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">ACADEMIC MILESTONES &amp; ROADMAP</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-base sm:text-lg text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Current Progress Summary Bar */}
          {currentProgress && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-lg border-2 border-pastel-ink bg-white font-mono text-xs shadow-comic">
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">LITERATURE SURVEY</span>
                <span className="font-bold text-pastel-sageDark">COMPLETED (~20 PAPERS)</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">REVIEW PAPER DRAFT</span>
                <span className="font-bold text-pastel-blueDark">AUTHORED &amp; IN REVIEW</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">SYSTEM PROTOTYPE</span>
                <span className="font-bold text-pastel-sageDark">FUNCTIONAL &amp; TESTED</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">EMPIRICAL COMPARISON</span>
                <span className="font-bold text-pastel-peachDark">PROTOCOL PROPOSED</span>
              </div>
            </div>
          )}

          {/* Chronological Research Log */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
              <span className="w-2.5 h-2.5 rounded-full bg-pastel-lavenderDark" />
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                1. Chronological Research Log Entries
              </h2>
            </div>

            <div className="space-y-3">
              {chronologicalLog.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3 font-sans"
                >
                  <div className="space-y-1 sm:w-3/4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-pastel-lavenderLight border border-pastel-ink text-pastel-ink">
                        {entry.date}
                      </span>
                      <h3 className="font-editorial text-base sm:text-lg font-bold text-pastel-ink">
                        {entry.title}
                      </h3>
                    </div>
                    <p className="text-xs text-pastel-inkMuted leading-relaxed pt-1">
                      {entry.summary}
                    </p>
                  </div>

                  <div className="sm:w-1/4 sm:text-right font-mono text-[11px] space-y-1">
                    <ResearchBadge status={entry.status} />
                    <div className="text-pastel-inkMuted text-[10px] pt-1">
                      DOC: {entry.evidence}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honest Limitations & Open Research Questions Grid */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
              <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark" />
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                2. Honest Limitations &amp; Open Research Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {limitations.map((lim, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-2.5 font-sans"
                >
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-pastel-ink/15">
                    <h3 className="font-editorial text-base sm:text-lg font-bold text-pastel-ink">
                      {lim.title}
                    </h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-100 border border-pastel-ink text-pastel-inkMuted font-bold">
                      {lim.category}
                    </span>
                  </div>
                  <p className="text-xs text-pastel-inkMuted leading-relaxed">
                    {lim.description}
                  </p>
                  <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[11px] text-pastel-peachDark font-semibold">
                    OPEN CHALLENGE: {lim.challenge}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps: Academic Roadmap */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
              <span className="w-2.5 h-2.5 rounded-full bg-pastel-sageDark" />
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                3. Next Research Steps &amp; Academic Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
              {nextSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt shadow-comic space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-pastel-sageDark">STEP 0{idx + 1}</span>
                      <ResearchBadge status="FUTURE WORK" />
                    </div>
                    <h3 className="font-editorial text-base font-bold text-pastel-ink">
                      {step.title}
                    </h3>
                    <p className="text-xs text-pastel-inkMuted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[10px] text-pastel-inkMuted">
                    DELIVERABLE: {step.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      )}

      {/* Marginalia Note as a Thought Box */}
      {marginalNote && (
        <aside
          className="mt-2 p-2.5 rounded-lg border border-pastel-ink bg-pastel-lavenderLight/50 shadow-comic-sm space-y-1 relative"
          aria-label="Marginalia note"
        >
          <div className="flex items-center gap-2 font-comic text-[11px] font-bold text-pastel-ink uppercase tracking-wider">
            <span>{marginalNote.tag}</span>
            <span className="text-pastel-lavenderDark">★ {marginalNote.category}</span>
          </div>
          <p className="font-hand text-sm sm:text-base text-pastel-ink leading-snug">
            &ldquo;{marginalNote.text}&rdquo;
          </p>
        </aside>
      )}

      {/* Chapter Folio Footer */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted">
        <div>{footnote || `RESEARCH NOTEBOOK SPECIMEN // CHAPTER ${chapterNum}`}</div>
        <div className="flex items-center gap-2 font-comic text-[11px] uppercase tracking-wider text-pastel-ink">
          <span>DIGITAL JOURNAL</span>
          <span>•</span>
          <span className="font-mono text-pastel-lavenderDark font-bold">{folioLabel}</span>
        </div>
      </footer>
    </div>
  );
}
