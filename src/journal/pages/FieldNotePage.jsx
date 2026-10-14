import React from "react";

export default function FieldNotePage() {
  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text">
      {/* Chapter Tag & Field Note Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 dark:border-white/10 border-stone-300 gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-teal-400 dark:text-teal-400 font-semibold">
            CHAPTER 08
          </span>
          <span className="text-stone-600 dark:text-stone-600">/</span>
          <span className="font-mono text-xs tracking-widest uppercase text-stone-400 dark:text-stone-400 text-stone-600">
            FIELD NOTES
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-stone-400 dark:text-stone-400 text-stone-500">
          <span className="text-teal-400">ENTRY: 001</span>
          <span>•</span>
          <span>TIMESTAMP: 23:40 IST</span>
          <span>•</span>
          <span>AUTUMN 2026</span>
        </div>
      </div>

      {/* Main Journal Note Typography */}
      <div className="mt-8 space-y-6">
        <div>
          <div className="font-mono text-xs tracking-[0.25em] text-teal-400 dark:text-teal-400 uppercase font-medium">
            FIELD NOTE / 001
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-stone-100 dark:text-stone-100 text-stone-900 mt-2">
            On Small Models, Local Silicon, and the Fallacy of Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2">
          {/* Main Journal Prose (8 cols) */}
          <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-stone-300 dark:text-stone-300 text-stone-700 leading-relaxed font-sans">
            <p className="first-letter:font-editorial first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-teal-400">
              There is an uncommon clarity in running a 7B parameter model locally on your own
              silicon with no internet connection. When the API abstraction vanishes, you realize
              intelligence is not a distant, omniscient cloud oracle—it is matrix multiplications
              marching deterministically through transistors.
            </p>

            <p>
              Most modern AI systems are conceived under the premise of boundless compute and
              unmetered bandwidth. But true engineering resilience begins when you design for
              constraints: when memory bandwidth is the physical ceiling, when the network cannot
              be trusted, and when latency is felt directly at the human fingertips.
            </p>

            {/* Code / Mathematical Formulation Block */}
            <div className="my-6 p-4 rounded-sm bg-stone-950/70 border border-stone-800 font-mono text-xs space-y-2 text-stone-300">
              <div className="flex justify-between text-[11px] text-stone-500 pb-2 border-b border-stone-800/80">
                <span>// HEURISTIC: CONTEXT WINDOW TEMPORAL DECAY</span>
                <span className="text-teal-400">MATH.EXP(-λΔT)</span>
              </div>
              <pre className="text-stone-200 overflow-x-auto py-1">
                <code>{`def compute_relevance(token, delta_t, decay_lambda=0.035):
    # Exponential decay preserves core anchor tokens while shedding buffer noise
    temporal_factor = math.exp(-decay_lambda * delta_t)
    return token.attention_weight * temporal_factor`}</code>
              </pre>
            </div>

            <p>
              When we prune redundant context windows dynamically rather than naively stuffing
              every conversation turn into a 128k prompt, we discover that smaller models can
              achieve remarkably crisp reasoning. The goal isn&apos;t to memorize the internet; the
              goal is to maintain a sharp, adaptive working memory.
            </p>
          </div>

          {/* Side Column: Journal Marginalia & Archival Stamp (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Field Observation Note */}
            <div className="p-4 rounded-sm border-l-2 border-teal-500/70 bg-stone-900/30 font-mono text-xs text-stone-400 dark:text-stone-400 text-stone-600 space-y-2">
              <div className="font-semibold text-teal-400 uppercase tracking-widest text-[10px]">
                // MARGIN OBSERVATION
              </div>
              <p className="leading-relaxed">
                INT4 quantized weights retain ~96% empirical reasoning capacity while cutting
                VRAM memory footprint by over 65%. Measure your benchmarks locally before
                subscribing to conventional wisdom.
              </p>
            </div>

            {/* Quick Context Tags */}
            <div className="p-4 rounded-sm border border-stone-800 bg-stone-900/20 font-mono text-[11px] space-y-2 text-stone-400">
              <div className="text-stone-500 text-[10px] tracking-wider uppercase">
                INDEXED UNDER:
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300">#local-inference</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300">#quantization</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300">#kv-cache</span>
                <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300">#agent-memory</span>
              </div>
            </div>

            {/* Physical Archival Stamp */}
            <div className="p-4 rounded-sm border border-dashed border-teal-500/40 text-center font-mono text-[11px] text-teal-400/90 tracking-widest space-y-1">
              <div>VERIFIED IN LAB</div>
              <div className="text-[10px] text-stone-400">NEEVA SUNISH MATHEW</div>
              <div className="text-[9px] text-stone-500">REF: ARCHIVAL LOG #084</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footnote Rule */}
      <div className="mt-12 pt-4 border-t border-white/10 dark:border-white/10 border-stone-300 flex justify-between font-mono text-[11px] text-stone-500">
        <div>RECORDED DURING LATE NIGHT INFERENCE PROFILING</div>
        <div>FOLIO 05 // END OF SAMPLE JOURNAL ENTRIES</div>
      </div>
    </div>
  );
}
