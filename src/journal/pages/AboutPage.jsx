import React from "react";

export default function AboutPage() {
  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text">
      {/* Chapter Tag & Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 dark:border-white/10 border-stone-300 gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-teal-400 dark:text-teal-400 font-semibold">
            CHAPTER 01
          </span>
          <span className="text-stone-600 dark:text-stone-600">/</span>
          <span className="font-mono text-xs tracking-widest uppercase text-stone-400 dark:text-stone-400 text-stone-600">
            ABOUT
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-stone-400 dark:text-stone-400 text-stone-500">
          <span>ENTRY: #001</span>
          <span>•</span>
          <span>DATE: OCT 2026</span>
          <span>•</span>
          <span>LOC: KOCHI, IN</span>
        </div>
      </div>

      {/* Main Editorial Content & Marginalia Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-stone-100 dark:text-stone-100 text-stone-900">
            Between Machine Learning &amp; Software Craft
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-stone-300 dark:text-stone-300 text-stone-700 leading-relaxed font-sans">
            <p className="first-letter:font-editorial first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-teal-400">
              I build software where machine intelligence meets deterministic engineering.
              For me, programming has never been merely about syntax or frameworks; it is an
              intimate process of constructing cognitive prosthetics—systems capable of
              evaluating hypotheses, holding context, and operating with tactile speed.
            </p>

            <p>
              My focus lives at the intersection of local language models, low-latency agent
              runtimes, and resilient full-stack architectures. While much of the modern AI
              discourse is obsessed with brute-force scale, I find deeper satisfaction in
              understanding what happens between the API abstraction and the bare metal—how
              memory flows through CUDA streams, how tokens are buffered, and how human intent is
              translated into reliable execution.
            </p>

            <p>
              When I am not training models or profiling token latency, you will find me dissecting
              open-source kernels, reading systems papers, or writing these field notes.
            </p>
          </div>

          {/* Inline Quote / Observation */}
          <div className="my-6 p-4 rounded-sm bg-stone-900/40 dark:bg-stone-900/60 border-l-2 border-teal-500/80 font-editorial text-lg italic text-stone-200 dark:text-stone-200 text-stone-800">
            &ldquo;Software that is fast, transparent, and resilient feels less like an application
            and more like a natural extension of thought.&rdquo;
          </div>
        </div>

        {/* Right Column: Marginalia, Metadata & Visual Placeholder (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Marginal Note 01.A */}
          <div className="p-4 rounded-sm border border-stone-800/80 dark:border-stone-800/80 border-stone-200 bg-stone-900/20 dark:bg-stone-900/30">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-teal-400 uppercase mb-2">
              <span>MARGINAL NOTE 01.A</span>
              <span>// HEURISTIC</span>
            </div>
            <p className="font-mono text-xs text-stone-400 dark:text-stone-400 text-stone-600 leading-relaxed">
              Always gravitate toward architectures with high interpretability and tangible speed.
              Premature abstraction is a debt repaid in late-night debugging.
            </p>
          </div>

          {/* Visual Sketch Placeholder */}
          <div className="border border-stone-800 dark:border-stone-800 border-stone-300 rounded-sm p-3 bg-stone-950/40">
            <div className="h-36 sm:h-40 rounded-sm bg-stone-900/80 border border-stone-800 flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Subtle grid pattern inside preview */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              {/* Schematic vector illustration */}
              <svg className="w-20 h-20 text-teal-400/50 group-hover:text-teal-400/80 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="32" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="16" strokeWidth="1.5" />
                <path d="M50 18 V34 M50 66 V82 M18 50 H34 M66 50 H82" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>

              <span className="font-mono text-[10px] tracking-widest uppercase text-stone-400 dark:text-stone-400 mt-2 z-10">
                [ FIG 1.1: ARCHITECTURE SKETCH ]
              </span>
            </div>
            <div className="mt-2 text-[11px] font-sans text-stone-500 italic text-center">
              Notebook sketch: agent state topology &amp; context caching.
            </div>
          </div>

          {/* Technical Metadata Badge */}
          <div className="font-mono text-[11px] space-y-2 p-3.5 border-t border-b border-white/5 dark:border-white/5 border-stone-200 text-stone-400">
            <div className="flex justify-between">
              <span className="text-stone-500">PRIMARY DISCIPLINE:</span>
              <span className="text-stone-300 font-medium">AI/ML &amp; Systems</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">EXPERTISE:</span>
              <span className="text-stone-300">Local LLMs, Agentic Loops</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">CODEBASE CADENCE:</span>
              <span className="text-teal-400">Continuous</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footnotes at Page Bottom */}
      <div className="mt-12 pt-6 border-t border-white/10 dark:border-white/10 border-stone-300 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[11px] text-stone-500 dark:text-stone-400">
        <div>
          [1] Notes transcribed directly from personal engineering journal, recorded Autumn 2026.
        </div>
        <div className="uppercase tracking-widest text-teal-400/80">
          END OF CHAPTER 01
        </div>
      </div>
    </div>
  );
}
