import React, { useState } from "react";

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("telemetry");

  const techStack = [
    "Python 3.12",
    "FastAPI",
    "PyTorch / C++",
    "ONNX Runtime",
    "React / Vite",
    "WebSockets",
    "Ollama API",
  ];

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-14 select-text">
      {/* Chapter Tag & Project Folio */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 dark:border-white/10 border-stone-300 gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-teal-400 dark:text-teal-400 font-semibold">
            CHAPTER 03
          </span>
          <span className="text-stone-600 dark:text-stone-600">/</span>
          <span className="font-mono text-xs tracking-widest uppercase text-stone-400 dark:text-stone-400 text-stone-600">
            THINGS I BUILD
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-stone-400 dark:text-stone-400 text-stone-500">
          <span className="px-2 py-0.5 rounded-sm bg-teal-950/40 text-teal-300 border border-teal-500/30">
            SPECIMEN: 001
          </span>
          <span>STATUS: SHIPPED</span>
          <span>•</span>
          <span>2026</span>
        </div>
      </div>

      {/* Main Project Header */}
      <div className="mt-8 space-y-4">
        <div className="font-mono text-xs tracking-[0.25em] text-teal-400 dark:text-teal-400 uppercase font-medium">
          PROJECT 001
        </div>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.1] text-stone-100 dark:text-stone-100 text-stone-900">
          Synapse: Local Intelligence Kernel &amp; Agent Runtime
        </h2>
        <p className="max-w-3xl text-sm sm:text-base text-stone-300 dark:text-stone-300 text-stone-700 leading-relaxed font-sans">
          A lightweight telemetry engine and execution layer designed for local LLM inference,
          streaming context memory, and sub-50ms multi-agent coordination without external cloud dependencies.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-sm bg-stone-900/60 dark:bg-stone-900/70 border border-stone-800 dark:border-stone-800 border-stone-300 font-mono text-xs text-stone-300 dark:text-stone-300 text-stone-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Large Visual Placeholder (Realistic Project Telemetry / UI Mockup) */}
      <div className="mt-8 rounded-sm border border-stone-800 dark:border-stone-800 border-stone-300 bg-stone-950/80 overflow-hidden shadow-2xl">
        {/* Mock Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900/90 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-3 font-mono text-[11px] text-stone-400 tracking-wider">
              synapse-telemetry-console // [live-feed]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                activeTab === "telemetry"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              METRICS
            </button>
            <button
              onClick={() => setActiveTab("stream")}
              className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                activeTab === "stream"
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              TRACE
            </button>
          </div>
        </div>

        {/* Mock Dashboard Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Key Metric Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 rounded-sm bg-stone-900/60 border border-stone-800">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                STREAM SPEED
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl text-teal-400 font-semibold">
                118.4 <span className="text-xs text-stone-400">tok/s</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-emerald-400">
                ▲ +14% vs float16
              </div>
            </div>

            <div className="p-3 rounded-sm bg-stone-900/60 border border-stone-800">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                TIME TO 1ST TOKEN
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl text-stone-200 font-semibold">
                42 <span className="text-xs text-stone-400">ms</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-teal-400">
                KV Cache Paged
              </div>
            </div>

            <div className="p-3 rounded-sm bg-stone-900/60 border border-stone-800">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                ACTIVE VRAM
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl text-stone-200 font-semibold">
                1.18 <span className="text-xs text-stone-400">GB</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-stone-400">
                INT4 Q4_K_M
              </div>
            </div>

            <div className="p-3 rounded-sm bg-stone-900/60 border border-stone-800">
              <div className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                CONTEXT WINDOW
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl text-stone-200 font-semibold">
                8,192 <span className="text-xs text-stone-400">tokens</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-amber-400">
                Rotary Embeddings
              </div>
            </div>
          </div>

          {/* Graphical Pipeline Simulation */}
          <div className="p-3.5 rounded-sm bg-stone-900/40 border border-stone-800/80 font-mono text-xs">
            <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
              <span className="text-teal-400 font-medium">PIPELINE EXECUTION TRACE</span>
              <span className="text-stone-500">SESSION: #SYN-8492</span>
            </div>
            <div className="space-y-1.5 text-stone-300 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-teal-400">0.00ms</span>
                <span className="text-stone-500">→</span>
                <span>User query ingestion via WebSocket frame</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400">12.4ms</span>
                <span className="text-stone-500">→</span>
                <span>Vector memory retrieval: top-k (3 chunks, cos_sim &gt; 0.88)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400">42.1ms</span>
                <span className="text-stone-500">→</span>
                <span className="text-emerald-400">First token emitted: &quot;Architecture&quot;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400">310ms</span>
                <span className="text-stone-500">→</span>
                <span>Stream completed (36 tokens total, 116 tok/s sustained)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Caption below screenshot visual */}
        <div className="px-4 py-2 bg-stone-900/40 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex justify-between items-center">
          <span>Figure 3.1: Live kernel telemetry output and pipeline diagnostics</span>
          <span className="text-teal-400/80">LATENCY PROFILE: PASS</span>
        </div>
      </div>

      {/* Small Technical Note & Action links */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Technical Note Callout (8 cols) */}
        <div className="lg:col-span-8 p-4 rounded-sm border-l-2 border-teal-500 bg-stone-900/30 dark:bg-stone-900/40 font-mono text-xs text-stone-300 dark:text-stone-300 text-stone-700 space-y-1.5">
          <div className="flex items-center gap-2 text-teal-400 font-semibold tracking-wider text-[11px] uppercase">
            <span>TECH NOTE 001.B</span>
            <span>// MEMORY PROFILING</span>
          </div>
          <p className="leading-relaxed">
            Optimized KV cache paging using virtual memory ring-buffers. By pre-allocating
            contiguous tensor pages on boot and streaming token embeddings directly over
            pinned host memory, Time to First Token (TTFT) was reduced from 320ms to 42ms under concurrent loads.
          </p>
        </div>

        {/* Project Links (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs">
          <a
            href="#view-repo"
            onClick={(e) => e.preventDefault()}
            className="px-3.5 py-2.5 rounded-sm border border-stone-700 hover:border-teal-400/60 bg-stone-900/20 text-stone-200 hover:text-teal-300 transition-colors flex items-center justify-between"
          >
            <span>VIEW SOURCE ON GITHUB</span>
            <span className="text-teal-400">↗</span>
          </a>
          <a
            href="#benchmarks"
            onClick={(e) => e.preventDefault()}
            className="px-3.5 py-2.5 rounded-sm border border-stone-700/60 hover:border-teal-400/60 bg-stone-900/10 text-stone-300 hover:text-teal-300 transition-colors flex items-center justify-between"
          >
            <span>LIVE EXPERIMENT SPECS</span>
            <span className="text-teal-400">↗</span>
          </a>
        </div>
      </div>

      {/* Footer rule */}
      <div className="mt-10 pt-4 border-t border-white/10 dark:border-white/10 border-stone-300 flex justify-between font-mono text-[11px] text-stone-500">
        <div>PROTOTYPE SPECIMEN // PROOF OF TECHNICAL JOURNAL CONCEPT</div>
        <div>FOLIO 04</div>
      </div>
    </div>
  );
}
