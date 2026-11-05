import React from "react";
import ProofStickyNote from "../components/ProofStickyNote";

/**
 * Chapter 06 — Experience & Community Layout
 *
 * Renders the 3 rich community & experience folios:
 * - Folio 15 (folioType === "professional"): Professional Experience (TechTaliya & INCIAL)
 * - Folio 16 (folioType === "leadership"): Leadership & Event Operations (NASA Space Apps, GDG, MuLearn)
 * - Folio 17 (folioType === "outreach"): Teaching, Student Outreach & Community Reflection
 *
 * Adheres strictly to docs/DESIGN_STANDARDS.md:
 * - Editorial serif typography (Newsreader) for section headlines
 * - Humanist sans (Plus Jakarta / Inter) for readable body descriptions
 * - Monospace (JetBrains Mono) for dates, metadata, and badge tokens
 * - Cursive handwriting (Caveat / Patrick Hand) for marginalia thought notes
 * - Color accents: Dusty Blue (technical tenures), Sage (verified community), Peach (leadership highlights), Lavender (reflections)
 */

export default function ExperienceCommunityPage({ pageData }) {
  if (!pageData) return null;

  const {
    folioType = "professional",
    chapterNum = "06",
    chapterTitle = "EXPERIENCE & COMMUNITY",
    folioLabel = "FOLIO 15",
    folioTitle = "Professional Experience",
    headline,
    subtitle,
    date = "2024 — PRESENT",
    roles = [],
    leadRoles = [],
    otherContributions = [],
    flagshipOutreach,
    communityMemberships = [],
    craftOutreach,
    closingReflection,
    marginalNote,
    footnote,
  } = pageData;

  const washiTapes = {
    professional: "washi-tape-blue",
    leadership: "washi-tape-peach",
    outreach: "washi-tape-sage",
  };

  const tapeClass = washiTapes[folioType] || "washi-tape-sage";

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
          <span className="px-2.5 py-0.5 rounded bg-pastel-sageLight border border-pastel-ink shadow-comic-sm font-comic text-xs font-bold text-pastel-ink uppercase tracking-wider">
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
          <span className="px-2 py-0.5 rounded bg-pastel-sage border border-pastel-ink text-white font-bold shadow-comic-sm">
            ★ VERIFIED RECORD
          </span>
          <span className="font-mono text-xs">{date}</span>
        </div>
      </header>

      {/* ====================================================================
          FOLIO 15: Professional Experience (TechTaliya & INCIAL)
          ==================================================================== */}
      {folioType === "professional" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Section Headline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-blueLight border border-pastel-ink font-comic text-xs font-bold tracking-wider text-pastel-ink shadow-comic-sm">
              <span>INDUSTRY TENURES &amp; WORKFLOWS</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">APPLIED ML &amp; INCUBATOR OPS</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-sm sm:text-base text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Experience Cards Grid */}
          <div className="space-y-4">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-4 font-sans"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-pastel-ink/10">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-mono text-[11px] font-bold text-pastel-ink">
                        {role.tenure}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-blueDark font-mono text-[10px] font-bold text-pastel-blueDark uppercase">
                        {role.mode}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-pastel-sageLight border border-pastel-sageDark font-mono text-[10px] font-bold text-pastel-sageDark uppercase">
                        {role.badge}
                      </span>
                    </div>

                    <h2 className="font-editorial text-2xl font-bold text-pastel-ink pt-1">
                      {role.company}
                    </h2>

                    <div className="font-comic text-sm font-bold text-pastel-peachDark flex items-center gap-1.5">
                      <span>ROLE:</span>
                      <span className="text-pastel-ink">{role.officialTitle}</span>
                      <span className="text-pastel-inkMuted">•</span>
                      <span className="text-pastel-inkMuted font-mono text-xs">{role.location}</span>
                    </div>
                  </div>

                  {/* Proof Sticky Note preview if available */}
                  {role.proofSpecimen && (
                    <div className="shrink-0 flex items-center justify-start sm:justify-end">
                      <ProofStickyNote
                        imageName={role.proofSpecimen.imageName}
                        title={role.proofSpecimen.title}
                        category={role.proofSpecimen.category}
                        note={role.proofSpecimen.note}
                        color="blue"
                        tapeColor="peach"
                        rotation="1.2deg"
                        iconType="code"
                        withPaperClip={true}
                        className="w-48 sm:w-56"
                      />
                    </div>
                  )}
                </div>

                {/* Overview statement */}
                <p className="text-sm text-pastel-ink leading-relaxed">
                  {role.overview}
                </p>

                {/* Detailed responsibilities list */}
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                    [ KEY CONTRIBUTIONS &amp; HANDS-ON WORK ]
                  </h3>
                  <ul className="space-y-1.5 font-sans text-xs text-pastel-ink/90">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-pastel-blueDark font-bold mt-0.5">✔</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Takeaway Callout */}
                {role.learningTakeaway && (
                  <div className="p-3 rounded bg-pastel-paperAlt border-1.5 border-pastel-ink/30 font-sans text-xs text-pastel-ink flex items-start gap-2">
                    <span className="font-comic font-bold text-pastel-peachDark text-sm">💡</span>
                    <p className="leading-relaxed">
                      <strong>Takeaway:</strong> {role.learningTakeaway}
                    </p>
                  </div>
                )}

                {/* Skills tags */}
                {role.skills && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-pastel-ink/10 font-mono text-[11px]">
                    <span className="text-pastel-inkMuted text-[10px] uppercase font-bold mr-1">
                      TECH &amp; TOOLS:
                    </span>
                    {role.skills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-pastel-paperAlt border border-pastel-ink/30 text-pastel-ink"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      )}

      {/* ====================================================================
          FOLIO 16: Leadership & Event Operations (NASA Space Apps, GDG, MuLearn)
          ==================================================================== */}
      {folioType === "leadership" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Section Headline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-peachLight border border-pastel-peachDark font-comic text-xs font-bold tracking-wider text-pastel-peachDark shadow-comic-sm">
              <span>★ EVENT OPERATIONS &amp; TECHNICAL LEADERSHIP</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">COORDINATION AT SCALE</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-sm sm:text-base text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Primary Lead Roles */}
          <div className="space-y-4">
            {leadRoles.map((lead, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3 font-sans"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b-2 border-pastel-ink/10">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {lead.period && (
                        <span className="px-2.5 py-0.5 rounded bg-pastel-peach border border-pastel-ink font-mono text-[11px] font-bold text-pastel-ink">
                          {lead.period}
                        </span>
                      )}
                      {lead.scale && (
                        <span className="px-2 py-0.5 rounded bg-pastel-yellowLight border border-pastel-ink font-mono text-[10px] font-bold text-pastel-ink">
                          {lead.scale}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-pastel-sageLight border border-pastel-sageDark font-mono text-[10px] font-bold text-pastel-sageDark uppercase">
                        {lead.badge}
                      </span>
                    </div>

                    <h2 className="font-editorial text-2xl font-bold text-pastel-ink pt-1">
                      {lead.event}
                    </h2>

                    {lead.role && (
                      <div className="font-comic text-sm font-bold text-pastel-peachDark">
                        ROLE: <span className="text-pastel-ink">{lead.role}</span>
                        <span className="text-pastel-inkMuted mx-1.5">•</span>
                        <span className="text-pastel-inkMuted font-mono text-xs">{lead.institution}</span>
                      </div>
                    )}
                  </div>

                  {/* Proof Sticky Note preview if available */}
                  {lead.proofSpecimen && (
                    <div className="shrink-0 flex items-center justify-start sm:justify-end">
                      <ProofStickyNote
                        imageName={lead.proofSpecimen.imageName}
                        title={lead.proofSpecimen.title}
                        category={lead.proofSpecimen.category}
                        note={lead.proofSpecimen.note}
                        color="peach"
                        tapeColor="blue"
                        rotation="-1deg"
                        iconType="community"
                        withPaperClip={true}
                        className="w-48 sm:w-56"
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm text-pastel-ink leading-relaxed">
                  {lead.summary}
                </p>

                {/* Sub-Roles if multi-tenure (e.g. GDG Event Manager + Cloud Facilitator) */}
                {lead.subRoles && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {lead.subRoles.map((sr, srIdx) => (
                      <div
                        key={srIdx}
                        className="p-3.5 rounded-md border-1.5 border-pastel-ink bg-pastel-paperAlt space-y-1.5 shadow-comic-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-editorial text-base font-bold text-pastel-ink">
                            {sr.title}
                          </span>
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-pastel-ink/30 text-pastel-inkMuted">
                            {sr.dates}
                          </span>
                        </div>
                        <p className="text-xs text-pastel-ink/85 leading-relaxed font-sans">
                          {sr.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights if single major event (e.g. NASA Space Apps) */}
                {lead.highlights && (
                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                      [ OPERATIONS &amp; COORDINATION DUTIES ]
                    </h3>
                    <ul className="space-y-1 font-sans text-xs text-pastel-ink/90">
                      {lead.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2">
                          <span className="text-pastel-peachDark font-bold mt-0.5">★</span>
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Other Contributions Matrix */}
          {otherContributions.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 pb-1.5 border-b-2 border-pastel-ink/15">
                <span className="w-2.5 h-2.5 rounded-full bg-pastel-blueDark" />
                <h3 className="font-editorial text-xl font-bold text-pastel-ink">
                  Additional Community Contributions &amp; Workshops
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {otherContributions.map((contrib, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-md border-2 border-pastel-ink bg-white shadow-comic space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink text-pastel-blueDark font-bold">
                          {contrib.period}
                        </span>
                        <span className="text-pastel-inkMuted font-semibold">CONTRIB 0{cIdx + 1}</span>
                      </div>
                      <h4 className="font-editorial text-base font-bold text-pastel-ink pt-1">
                        {contrib.title}
                      </h4>
                      <p className="font-sans text-xs text-pastel-inkMuted leading-relaxed">
                        {contrib.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-pastel-ink/10 font-mono text-[10px] text-pastel-peachDark font-semibold">
                      SCOPE: {contrib.scope}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      )}

      {/* ====================================================================
          FOLIO 17: Teaching, Outreach & Community Reflection
          ==================================================================== */}
      {folioType === "outreach" && (
        <article className="flex-1 py-2 space-y-4">
          {/* Section Headline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pastel-sageLight border border-pastel-sageDark font-comic text-xs font-bold tracking-wider text-pastel-sageDark shadow-comic-sm">
              <span>★ COMMUNITY TEACHING &amp; NETWORKS</span>
              <span className="text-pastel-inkMuted">•</span>
              <span className="font-mono text-[11px] font-semibold">OUTREACH &amp; REFLECTION</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-pastel-ink">
              {headline}
            </h1>

            {subtitle && (
              <p className="max-w-4xl text-sm sm:text-base text-pastel-ink/85 leading-relaxed font-sans font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Flagship Outreach: AI Playground Session */}
          {flagshipOutreach && (
            <div className="p-5 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-3 font-sans">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-2.5 border-b-2 border-pastel-ink/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-pastel-yellow border border-pastel-ink font-mono text-[11px] font-bold text-pastel-ink">
                      {flagshipOutreach.date}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-pastel-sageLight border border-pastel-sageDark font-mono text-[10px] font-bold text-pastel-sageDark">
                      {flagshipOutreach.audience}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-pastel-blueLight border border-pastel-blueDark font-mono text-[10px] font-bold text-pastel-blueDark uppercase">
                      {flagshipOutreach.badge}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl font-bold text-pastel-ink pt-1">
                    {flagshipOutreach.title}
                  </h2>

                  <div className="font-comic text-sm font-bold text-pastel-peachDark">
                    VENUE: <span className="text-pastel-ink">{flagshipOutreach.venue}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-pastel-ink leading-relaxed">
                {flagshipOutreach.narrative}
              </p>

              {/* Key Activities */}
              <div className="space-y-1.5 pt-1">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-pastel-inkMuted">
                  [ WORKSHOP HIGHLIGHTS &amp; CURRICULUM ]
                </h3>
                <ul className="space-y-1 font-sans text-xs text-pastel-ink/90">
                  {flagshipOutreach.keyActivities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-pastel-sageDark font-bold mt-0.5">✔</span>
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Banner */}
              <div className="p-3 rounded bg-pastel-sageLight/50 border-1.5 border-pastel-sageDark/40 font-sans text-xs text-pastel-ink flex items-start gap-2">
                <span className="font-comic font-bold text-pastel-sageDark text-sm">🌱</span>
                <p className="leading-relaxed">
                  <strong>Session Impact:</strong> {flagshipOutreach.impact}
                </p>
              </div>
            </div>
          )}

          {/* Active Community Memberships & Creative Craft Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Community Memberships */}
            <div className="p-4 rounded-lg border-2 border-pastel-ink bg-pastel-paperAlt shadow-comic space-y-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-pastel-ink/15 font-comic text-xs font-bold text-pastel-ink uppercase">
                <span className="text-pastel-blueDark">DEVELOPER &amp; INCLUSION COMMUNITIES</span>
                <span className="font-mono text-pastel-inkMuted text-[10px]">[ MEMBERSHIPS ]</span>
              </div>

              <div className="space-y-2">
                {communityMemberships.map((comm, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded border border-pastel-ink/20 bg-white space-y-1 font-sans"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-editorial text-sm font-bold text-pastel-ink">
                        {comm.name}
                      </h4>
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-pastel-blueLight border border-pastel-ink/30 text-pastel-blueDark font-semibold">
                        {comm.role}
                      </span>
                    </div>
                    <p className="text-[11px] text-pastel-inkMuted leading-relaxed">
                      {comm.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Craft & Closing Reflection */}
            <div className="space-y-3 flex flex-col justify-between">
              {/* Creative Craft */}
              {craftOutreach && (
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-pastel-peachLight/40 shadow-comic space-y-2 font-sans">
                  <div className="flex items-center justify-between font-comic text-xs font-bold text-pastel-peachDark uppercase">
                    <span>CREATIVE CRAFT &amp; WORKSHOPS</span>
                    <span className="font-mono text-[10px] text-pastel-inkMuted">{craftOutreach.linkText}</span>
                  </div>
                  <h4 className="font-editorial text-base font-bold text-pastel-ink">
                    {craftOutreach.title}
                  </h4>
                  <p className="text-xs text-pastel-ink leading-relaxed">
                    {craftOutreach.summary}
                  </p>
                </div>
              )}

              {/* Closing Reflection */}
              {closingReflection && (
                <div className="p-4 rounded-lg border-2 border-pastel-ink bg-white shadow-comic space-y-2 font-sans">
                  <div className="flex items-center gap-1.5 font-comic text-xs font-bold text-pastel-sageDark uppercase">
                    <span>★ REFLECTION</span>
                    <span className="text-pastel-inkMuted">•</span>
                    <span className="text-pastel-ink">{closingReflection.title}</span>
                  </div>
                  <p className="font-editorial text-sm text-pastel-ink leading-relaxed italic">
                    &ldquo;{closingReflection.text}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
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
        <div>{footnote || `COMMUNITY & EXPERIENCE RECORD // CHAPTER ${chapterNum}`}</div>
        <div className="flex items-center gap-2 font-comic text-[11px] uppercase tracking-wider text-pastel-ink">
          <span>DIGITAL JOURNAL</span>
          <span>•</span>
          <span className="font-mono text-pastel-sageDark font-bold">{folioLabel}</span>
        </div>
      </footer>
    </div>
  );
}

