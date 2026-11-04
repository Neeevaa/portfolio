import JournalFigurePlate from "../components/JournalFigurePlate";

/**
 * Chapter 04 — Synapse Technical Case Study Layout
 *
 * Renders the 3 in-depth engineering folios of the Synapse investigation:
 * - Folio 1 (folioType === "architecture"): System Overview, Multi-Tier Architecture & Tech Stack Matrix
 * - Folio 2 (folioType === "pipeline"): The 7-Stage AI Review Workflow & Human-in-the-Loop Triage
 * - Folio 3 (folioType === "decisions"): 4GB VRAM Hardware Constraints, Trade-Offs & Honest Limitations
 *
 * Adheres strictly to docs/DESIGN_STANDARDS.md:
 * - Editorial serif typography (Newsreader) for headlines
 * - Humanist sans (Plus Jakarta / Inter) for readable body paragraphs
 * - Monospace (JetBrains Mono) for specifications, telemetry, and status pills
 * - Cursive handwriting (Caveat / Patrick Hand) for marginalia thought bubbles
 * - Restrained palette: Dusty Blue, Sage, Peach, Butter Yellow, Lavender
 */

// Implementation status badge helper component
function StatusBadge({ status = "IMPLEMENTED" }) {
  const styles = {
    IMPLEMENTED: "bg-pastel-sageLight text-pastel-sageDark border-pastel-sageDark",
    "PARTIALLY IMPLEMENTED": "bg-pastel-blueLight text-pastel-blueDark border-pastel-blueDark",
    EXPERIMENTAL: "bg-pastel-lavenderLight text-pastel-lavenderDark border-pastel-lavenderDark",
    PLANNED: "bg-pastel-peachLight text-pastel-peachDark border-pastel-peachDark",
    UNVERIFIED: "bg-stone-200 text-stone-700 border-stone-400",
  };

  const badgeStyle = styles[status] || styles.IMPLEMENTED;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold tracking-wide uppercase shadow-xs ${badgeStyle}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}

export default function TechnicalCaseStudyPage({ pageData }) {
  if (!pageData) return null;

  const {
    folioType = "architecture",
    chapterNum = "04",
    chapterTitle = "SYNAPSE",
    folioLabel = "FOLIO 08",
    folioTitle = "Architecture & Foundations",
    date = "OCTOBER 2026",
    headline,
    subtitle,
    projectMeta,
    problemStatement,
    architecturalTiers = [],
    specs = [],
    pipelineStages = [],
    workflowWalkthrough,
    failureModes = [],
    hardwareTelemetry,
    tradeoffs = [],
    limitations = [],
    roadmap = [],
    marginalNote,
    footnote,
    figurePlate,
  } = pageData;

  const washiColors = {
    architecture: "washi-tape-peach",
    pipeline: "washi-tape-blue",
    decisions: "washi-tape-sage",
  };

  const tapeClass = washiColors[folioType] || "washi-tape-peach";

  return (
    <div className="relative min-h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 select-text bg-pastel-paper text-pastel-ink paper-corner-fold">
      {/* Decorative Washi Tape across Top Header */}
      <div
        className="absolute -top-3 left-10 sm:left-18 w-24 sm:w-32 h-5 washi-tape-peach rotate-[-1deg] z-20 pointer-events-none"
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
          <span className="px-2.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
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
          <span className="px-2 py-0.5 rounded bg-pastel-peach border border-pastel-ink text-pastel-ink font-bold shadow-comic-sm">
            ★ FLAGSHIP CASE STUDY
          </span>
          <span className="font-mono text-xs">{date}</span>
        </div>
      </header>

      {/* ====================================================================
          FOLIO 1: Architecture, Problem & Multi-Tier System Decomposition
          ==================================================================== */}
      {folioType === "architecture" && (
        <article className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Headline & Abstract Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-yellow border border-pastel-ink font-comic text-xs font-bold tracking-wider text-pastel-ink shadow-comic-sm">
              <span>SYSTEM ARCHITECTURE &amp; DECOMPOSITION</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">FINAL-YEAR INTEGRATED MCA CAPSTONE</span>
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

          {/* Project Grounding Bar & Intended Users */}
          {projectMeta && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt font-mono text-xs shadow-comic-sm">
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">STATUS</span>
                <span className="font-bold text-pastel-ink">{projectMeta.status}</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">TARGET AUDIENCE</span>
                <span className="font-bold text-pastel-ink">{projectMeta.targetAudience}</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">PRIMARY REASONING ENGINE</span>
                <span className="font-bold text-pastel-ink">{projectMeta.primaryEngine}</span>
              </div>
              <div>
                <span className="text-pastel-inkMuted block text-[10px] uppercase">HARDWARE TESTBED</span>
                <span className="font-bold text-pastel-ink">{projectMeta.hardwareTestbed}</span>
              </div>
            </div>
          )}

          {/* Problem Statement & Motivation */}
          {problemStatement && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  1. The Engineering Problem &amp; Motivation
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 space-y-3.5 font-sans text-sm sm:text-[15px] leading-relaxed text-pastel-ink">
                  {problemStatement.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="lg:col-span-5 p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink">
                    <span>CORE DESIGN GOALS</span>
                    <span className="text-pastel-peachDark font-mono text-[10px]">[ ARCHITECTURAL CONTRACTS ]</span>
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs text-pastel-ink">
                    {problemStatement.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pastel-peachDark font-bold mt-0.5">✦</span>
                        <div>
                          <strong className="font-semibold text-pastel-ink">{goal.title}: </strong>
                          <span className="text-pastel-inkMuted">{goal.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* System Architecture Tiers */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/15 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-blueDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  2. Multi-Tier System Decomposition
                </h2>
              </div>
              <span className="font-mono text-xs text-pastel-inkMuted">
                [ 5 PRIMARY TIERS • STRICT TENANT BOUNDARIES ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {architecturalTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic hover:-translate-y-1 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink text-pastel-ink">
                        {tier.tier}
                      </span>
                      <StatusBadge status={tier.status} />
                    </div>

                    <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                      {tier.name}
                    </h3>

                    <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-pastel-ink/10 font-mono text-[11px] text-pastel-ink/80 flex items-center justify-between">
                    <span className="text-pastel-inkMuted">COMPONENTS:</span>
                    <span className="font-semibold text-pastel-ink truncate max-w-[170px]" title={tier.components}>
                      {tier.components}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specimen Plate & Verified Specifications Matrix */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Specimen Plate (5 cols) */}
            <div className="lg:col-span-5">
              {figurePlate && (
                <JournalFigurePlate
                  src={figurePlate.src}
                  alt={figurePlate.alt}
                  caption={figurePlate.caption}
                  tag={figurePlate.tag || "[ SPECIMEN 4.1 ]"}
                  tapeColor="peach"
                  aspectRatio="aspect-[16/10]"
                />
              )}
            </div>

            {/* Technical Specifications Matrix (7 cols) */}
            <div className="lg:col-span-7 p-6 rounded-lg border-2 border-pastel-ink bg-white font-sans shadow-comic space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                <span className="text-pastel-blueDark">VERIFIED SYSTEM SPECIFICATION MATRIX</span>
                <span className="font-mono text-pastel-inkMuted text-[10px]">VERIFIED IN SOURCE</span>
              </div>

              <div className="space-y-2">
                {specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-pastel-ink/10 text-xs gap-1"
                  >
                    <span className="font-mono text-pastel-inkMuted font-medium sm:w-1/3">
                      {item.label}
                    </span>
                    <div className="sm:w-2/3 flex items-center justify-between gap-2">
                      <span className="font-mono font-semibold text-pastel-ink">{item.value}</span>
                      {item.status && <StatusBadge status={item.status} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      )}

      {/* ====================================================================
          FOLIO 2: The 7-Stage AI Review Workflow & Human-in-the-Loop Triage
          ==================================================================== */}
      {folioType === "pipeline" && (
        <article className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Headline & Abstract Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-blueLight border border-pastel-ink font-comic text-xs font-bold tracking-wider text-pastel-ink shadow-comic-sm">
              <span>AI EXECUTION FLOW &amp; HUMAN OVERSIGHT</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">7-STAGE ORCHESTRATION PIPELINE</span>
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

          {/* 7-Stage Execution Pipeline Grid */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/15 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-blueDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  1. The 7 Sequential Workflow Stages
                </h2>
              </div>
              <span className="font-mono text-xs text-pastel-inkMuted">
                [ REQUIREMENT SUBMISSION ➔ HUMAN TRIAGE ➔ SPRINT TASK ]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 border-pastel-ink shadow-comic hover:-translate-y-1 transition-all space-y-2.5 flex flex-col justify-between ${
                    stage.highlight ? "bg-pastel-yellowLight" : "bg-white"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-white border border-pastel-ink font-mono text-xs font-bold text-pastel-ink">
                        STAGE {stage.step}
                      </span>
                      {idx < pipelineStages.length - 1 && (
                        <span className="hidden lg:block font-bold text-pastel-ink text-sm">➔</span>
                      )}
                    </div>

                    <h3 className="font-editorial text-base sm:text-lg font-bold text-pastel-ink leading-snug">
                      {stage.title}
                    </h3>

                    <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-pastel-ink/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-pastel-inkMuted uppercase">STATUS:</span>
                    <StatusBadge status={stage.status} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Concrete Specimen Walkthrough & Pipeline Diagram */}
          {workflowWalkthrough && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Architecture Diagram Plate (5 cols) */}
              <div className="lg:col-span-5">
                {figurePlate && (
                  <JournalFigurePlate
                    src={figurePlate.src}
                    alt={figurePlate.alt}
                    caption={figurePlate.caption}
                    tag={figurePlate.tag || "[ SPECIMEN 4.2 ]"}
                    tapeColor="blue"
                    aspectRatio="aspect-[16/10]"
                  />
                )}
              </div>

              {/* Requirement Review Specimen Walkthrough (7 cols) */}
              <div className="lg:col-span-7 p-6 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b-2 border-pastel-ink/15 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-mono text-xs font-bold text-pastel-ink">
                      {workflowWalkthrough.sampleKey}
                    </span>
                    <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                      {workflowWalkthrough.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-pastel-inkMuted">
                    [ VERIFIED TEST SPECIMEN ]
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded bg-pastel-paperAlt border border-pastel-ink/20 space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-pastel-inkMuted">
                      INPUT REQUIREMENT PAYLOAD:
                    </span>
                    <p className="font-sans text-pastel-ink">{workflowWalkthrough.rawInput}</p>
                  </div>

                  <div className="p-3 rounded bg-pastel-lavenderLight/50 border border-pastel-ink/30 space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-pastel-lavenderDark">
                      STRUCTURED FINDING (GENERATED BY QWEN3-4B):
                    </span>
                    <p className="font-mono text-[11px] text-pastel-ink">{workflowWalkthrough.findingDescription}</p>
                    <div className="flex items-center gap-2 pt-1 font-mono text-[10px]">
                      <span className="text-red-700 font-bold">SEVERITY: {workflowWalkthrough.severity}</span>
                      <span>•</span>
                      <span className="text-pastel-inkMuted">ISSUE TYPE: {workflowWalkthrough.issueType}</span>
                    </div>
                  </div>

                  {/* Human Triage Decision Box */}
                  <div className="p-3.5 rounded border-2 border-pastel-ink bg-pastel-yellowLight space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-comic text-xs font-bold text-pastel-ink uppercase">
                        HUMAN-IN-THE-LOOP TRIAGE (PM INTERVENTION)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-pastel-sageDark text-white font-mono text-[10px] font-bold">
                        ACTION: {workflowWalkthrough.humanDecision}
                      </span>
                    </div>
                    <p className="font-hand text-base text-pastel-ink leading-snug">
                      &ldquo;{workflowWalkthrough.humanComment}&rdquo;
                    </p>
                    <div className="font-mono text-[11px] text-pastel-inkMuted pt-1 border-t border-pastel-ink/15 flex items-center justify-between">
                      <span>DOWNSTREAM RESULT:</span>
                      <span className="font-bold text-pastel-ink">{workflowWalkthrough.downstreamTask}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Failure Mode Guardrails */}
          {failureModes.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark" />
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                  2. Defensive Guardrails &amp; Failure Mode Handling
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {failureModes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 border-pastel-ink bg-white font-sans shadow-comic space-y-2"
                  >
                    <div className="font-mono text-xs font-bold text-pastel-peachDark flex items-center gap-1.5 uppercase">
                      <span>⚠️</span>
                      <span>{item.risk}</span>
                    </div>
                    <p className="text-xs text-pastel-inkMuted leading-relaxed">
                      {item.mechanism}
                    </p>
                    <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[10px] text-pastel-sageDark font-semibold">
                      MITIGATION: {item.mitigation}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      )}

      {/* ====================================================================
          FOLIO 3: 4GB VRAM Hardware Constraints, Trade-Offs & Honest Limitations
          ==================================================================== */}
      {folioType === "decisions" && (
        <article className="my-auto py-2 space-y-3 sm:space-y-4">
          {/* Headline & Abstract Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-sageLight border border-pastel-ink font-comic text-xs font-bold tracking-wider text-pastel-ink shadow-comic-sm">
              <span>HARDWARE TELEMETRY &amp; ENGINEERING TRADE-OFFS</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">4 GB VRAM LAPTOP ENVIRONMENT</span>
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

          {/* Hardware Constraints & Telemetry Grid */}
          {hardwareTelemetry && (
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-pastel-ink/15 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pastel-peachDark" />
                  <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                    1. Hardware Constraints: The 4 GB VRAM Boundary
                  </h2>
                </div>
                <span className="font-mono text-xs text-pastel-inkMuted">
                  [ LOCAL INFERENCE BUDGET • NO CLOUD GPU EXPENSES ]
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hardwareTelemetry.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border-2 border-pastel-ink bg-white font-mono shadow-comic space-y-1.5"
                  >
                    <span className="text-[10px] text-pastel-inkMuted block uppercase">
                      {metric.label}
                    </span>
                    <div className="text-xl sm:text-2xl font-bold text-pastel-ink">
                      {metric.value}
                    </div>
                    <p className="text-[11px] font-sans text-pastel-inkMuted leading-snug">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt font-sans text-xs text-pastel-ink space-y-2">
                <strong className="font-bold text-pastel-ink font-mono text-[11px] uppercase block">
                  OBSERVED RUNTIME CONSTRAINTS &amp; EXECUTION STRATEGY:
                </strong>
                <p className="leading-relaxed text-pastel-ink/90">
                  {hardwareTelemetry.observations}
                </p>
              </div>
            </section>
          )}

          {/* Trade-Offs & Lessons Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-pastel-ink/15">
              <span className="w-2.5 h-2.5 rounded-full bg-pastel-sageDark" />
              <h2 className="font-editorial text-xl sm:text-2xl font-bold text-pastel-ink">
                2. Trade-offs &amp; Lessons Learned
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tradeoffs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3"
                >
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-pastel-ink/15">
                    <h3 className="font-editorial text-lg font-bold text-pastel-ink">
                      {item.decision}
                    </h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink font-bold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2 font-sans text-xs">
                    <div>
                      <strong className="text-pastel-sageDark font-semibold uppercase font-mono text-[10px] block">
                        THE CHOICE:
                      </strong>
                      <span className="text-pastel-ink">{item.chosen}</span>
                    </div>
                    <div>
                      <strong className="text-pastel-peachDark font-semibold uppercase font-mono text-[10px] block">
                        THE TRADEOFF / LESSON:
                      </strong>
                      <span className="text-pastel-inkMuted leading-relaxed">{item.tradeoff}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specimen Plate & Honest Limitations Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Terminal Test Verification Plate (5 cols) */}
            <div className="lg:col-span-5">
              {figurePlate && (
                <JournalFigurePlate
                  src={figurePlate.src}
                  alt={figurePlate.alt}
                  caption={figurePlate.caption}
                  tag={figurePlate.tag || "[ SPECIMEN 4.3 ]"}
                  tapeColor="sage"
                  aspectRatio="aspect-[16/10]"
                />
              )}
            </div>

            {/* Honest Limitations & Future Roadmap (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Limitations Panel */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3 font-sans">
                <div className="flex items-center justify-between pb-2 border-b-2 border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                  <span className="text-pastel-peachDark">HONEST SYSTEM LIMITATIONS</span>
                  <span className="font-mono text-pastel-inkMuted text-[10px]">CURRENT BOUNDARIES</span>
                </div>

                <div className="space-y-3 text-xs">
                  {limitations.map((lim, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between font-mono">
                        <strong className="font-bold text-pastel-ink">{lim.title}</strong>
                        <StatusBadge status={lim.status || "EXPERIMENTAL"} />
                      </div>
                      <p className="text-pastel-inkMuted leading-relaxed">{lim.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ongoing & Future Directions */}
              <div className="p-5 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt shadow-comic space-y-3 font-sans">
                <div className="flex items-center justify-between pb-2 border-b-2 border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                  <span className="text-pastel-blueDark">FUTURE DIRECTIONS &amp; RESEARCH ROADMAP</span>
                  <span className="font-mono text-pastel-inkMuted text-[10px]">NEXT ITERATIONS</span>
                </div>

                <ul className="space-y-2 text-xs">
                  {roadmap.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono text-pastel-blueDark font-bold">0{idx + 1}.</span>
                      <div>
                        <strong className="font-semibold text-pastel-ink">{item.title}: </strong>
                        <span className="text-pastel-inkMuted">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}

      {/* Marginalia Note as a Thought Box */}
      {marginalNote && (
        <aside
          className="mt-2 p-2.5 rounded-lg border border-pastel-ink bg-pastel-yellowLight shadow-comic-sm space-y-1 relative"
          aria-label="Marginalia note"
        >
          <div className="flex items-center gap-2 font-comic text-[11px] font-bold text-pastel-ink uppercase tracking-wider">
            <span>{marginalNote.tag}</span>
            <span className="text-pastel-peachDark">★ {marginalNote.category}</span>
          </div>
          <p className="font-hand text-sm sm:text-base text-pastel-ink leading-snug">
            &ldquo;{marginalNote.text}&rdquo;
          </p>
        </aside>
      )}

      {/* Chapter Folio Footer */}
      <footer className="mt-auto pt-2 border-t-2 border-pastel-ink/15 flex items-center justify-between font-mono text-[11px] text-pastel-inkMuted">
        <div>{footnote || `CASE STUDY SPECIMEN // CHAPTER ${chapterNum}`}</div>
        <div className="flex items-center gap-2 font-comic text-[11px] uppercase tracking-wider text-pastel-ink">
          <span>DIGITAL JOURNAL</span>
          <span>•</span>
          <span className="font-mono text-pastel-peachDark font-bold">{folioLabel}</span>
        </div>
      </footer>
    </div>
  );
}
