import React from "react";

export default function JournalFigurePlate({
  src,
  alt = "Journal figure specimen",
  caption,
  tag = "[ DIARY SPECIMEN ]",
  type = "schematic",
  className = "",
  aspectRatio = "aspect-[4/3]",
  tapeColor = "yellow", // "yellow" | "blue" | "peach" | "sage"
}) {
  const getTapeClass = () => {
    switch (tapeColor) {
      case "blue":
        return "washi-tape-blue";
      case "peach":
        return "washi-tape-peach";
      case "sage":
        return "washi-tape-sage";
      default:
        return "washi-tape-yellow";
    }
  };

  return (
    <figure
      className={`relative rounded-md border-2 border-pastel-ink bg-white p-3 shadow-comic select-none group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-comic-lg ${className}`}
    >
      {/* Decorative Washi Tape at Top */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-xs ${getTapeClass()} rotate-[-1.5deg] z-20 pointer-events-none`}
      ></div>

      {/* Comic Frame Body */}
      <div
        className={`relative w-full ${aspectRatio} rounded-sm overflow-hidden border border-pastel-ink/40 bg-pastel-paperAlt flex flex-col items-center justify-center`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          /* Editorial Comic & Diary Illustration Placeholder */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            {/* Subtle background paper grid */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7ea8be_1.2px,transparent_1.2px)] [background-size:14px_14px]"></div>

            {/* Hand-drawn iconography for specimen types */}
            {type === "portrait" && (
              <div className="relative flex flex-col items-center justify-center text-pastel-ink/75 group-hover:text-pastel-ink transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-pastel-blue bg-pastel-blueLight/50 flex items-center justify-center shadow-comic-sm">
                  <svg className="w-10 h-10 text-pastel-blueDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="40" r="18" strokeWidth="2.5" />
                    <path d="M22 84 C26 62, 74 62, 78 84" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="43" cy="38" r="2.5" fill="currentColor" />
                    <circle cx="57" cy="38" r="2.5" fill="currentColor" />
                    <path d="M46 47 Q50 51 54 47" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="mt-2 font-hand text-sm font-semibold text-pastel-blueDark">
                  ★ Personal Illustrated Character
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-pastel-inkFaint">
                  [ Reserved for personal artwork ]
                </span>
              </div>
            )}

            {type === "schematic" && (
              <div className="relative flex flex-col items-center justify-center text-pastel-ink/70 group-hover:text-pastel-ink transition-colors">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-pastel-blueDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="30" strokeWidth="2" strokeDasharray="4 3" />
                  <circle cx="50" cy="50" r="14" strokeWidth="2" fill="white" />
                  <path d="M50 20 V36 M50 64 V80 M20 50 H36 M64 50 H80" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
                </svg>
                <span className="mt-1 font-hand text-sm font-semibold text-pastel-inkMuted">
                  System Architecture Sketch
                </span>
              </div>
            )}

            {type === "formula" && (
              <div className="relative flex flex-col items-center justify-center text-pastel-ink font-mono text-center">
                <div className="px-3 py-1.5 rounded bg-white border border-pastel-ink/40 shadow-comic-sm font-comic text-sm tracking-wide">
                  α<sub>t</sub> = e<sup>-λΔt</sup> · (q<sub>t</sub> ⊗ k<sub>t</sub>) / √d<sub>k</sub>
                </div>
                <span className="mt-2 font-hand text-sm font-semibold text-pastel-sageDark">
                  ✦ Temporal Attention Formulation
                </span>
              </div>
            )}

            {type === "analog" && (
              <div className="relative flex flex-col items-center justify-center text-pastel-ink/75 group-hover:text-pastel-ink transition-colors">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-pastel-peachDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <rect x="25" y="20" width="50" height="60" rx="4" strokeWidth="2" fill="white" />
                  <line x1="33" y1="32" x2="67" y2="32" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1="33" y1="42" x2="67" y2="42" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1="33" y1="52" x2="67" y2="52" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M60 62 L75 75 L70 80 L55 67 Z" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="mt-1 font-hand text-sm font-semibold text-pastel-peachDark">
                  Notebook &amp; Fountain Pen Study
                </span>
              </div>
            )}

            {/* Specimen Tag */}
            <span className="mt-2 font-mono text-[9px] tracking-widest uppercase text-pastel-inkFaint">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* Hand-lettered Caption Box */}
      {caption && (
        <figcaption className="mt-2 text-center">
          <span className="inline-block font-hand text-base text-pastel-inkMuted px-2 py-0.5 leading-snug">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
