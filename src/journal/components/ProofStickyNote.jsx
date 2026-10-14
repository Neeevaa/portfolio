import React, { useState } from "react";

/**
 * ProofStickyNote
 * A tactile vector-illustrated sticky note component providing visual proof slots.
 * Features washi tape, wire paper clip option, ink outlines, hard comic shadows, and clear placeholder instructions.
 */
export default function ProofStickyNote({
  imageName = "placeholder.png",
  title = "Proof Specimen",
  category = "PORTFOLIO PROOF",
  note = "",
  color = "yellow", // "yellow" | "peach" | "sage" | "blue" | "lavender"
  tapeColor = "peach",
  rotation = "-1deg",
  className = "",
  aspectRatio = "aspect-[4/3]",
  iconType = "crochet", // "crochet" | "portrait" | "community" | "craft"
  withPaperClip = false,
}) {
  const [useSvgFallback, setUseSvgFallback] = useState(false);
  const [inlineFallback, setInlineFallback] = useState(false);

  // Background tint classes
  const colorClasses = {
    yellow: "bg-pastel-yellowLight border-pastel-ink",
    peach: "bg-pastel-peachLight border-pastel-ink",
    sage: "bg-pastel-sageLight border-pastel-ink",
    blue: "bg-pastel-blueLight border-pastel-ink",
    lavender: "bg-pastel-lavenderLight border-pastel-ink",
  };

  const tapeClasses = {
    yellow: "washi-tape-yellow",
    peach: "washi-tape-peach",
    blue: "washi-tape-blue",
    sage: "washi-tape-sage",
  };

  const badgeColors = {
    yellow: "bg-pastel-yellow text-pastel-ink",
    peach: "bg-pastel-peach text-pastel-ink",
    sage: "bg-pastel-sageDark text-white",
    blue: "bg-pastel-blueDark text-white",
    lavender: "bg-pastel-lavenderDark text-white",
  };

  const pngSrc = `/assets/${imageName}`;
  const svgSrc = `/assets/${imageName.replace(/\.png$/, ".svg")}`;

  const currentSrc = useSvgFallback ? svgSrc : pngSrc;

  const handleImageError = () => {
    if (!useSvgFallback) {
      // Try SVG vector placeholder next
      setUseSvgFallback(true);
    } else {
      // Both failed, use pure inline SVG illustration
      setInlineFallback(true);
    }
  };

  // Inline fallback illustration
  const renderVectorIllustration = () => {
    switch (iconType) {
      case "crochet":
        return (
          <svg className="w-16 h-16 text-pastel-peachDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="48" cy="52" r="28" strokeWidth="2.5" fill="#fdf2f0" />
            <path d="M28 42 C38 32, 58 32, 68 42" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M24 54 C34 46, 62 46, 72 54" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M30 66 C40 74, 56 74, 66 66" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="78" y1="18" x2="42" y2="82" stroke="#2D2A28" strokeWidth="3" strokeLinecap="round" />
            <path d="M78 18 Q84 14 84 20 Q84 24 80 24" stroke="#2D2A28" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        );
      case "portrait":
        return (
          <svg className="w-16 h-16 text-pastel-blueDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="40" r="18" strokeWidth="2.5" fill="#e9f1f5" />
            <path d="M22 84 C26 62, 74 62, 78 84" strokeWidth="2.5" strokeLinecap="round" fill="#e9f1f5" />
            <circle cx="43" cy="38" r="2.5" fill="currentColor" />
            <circle cx="57" cy="38" r="2.5" fill="currentColor" />
            <path d="M46 47 Q50 51 54 47" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "community":
        return (
          <svg className="w-16 h-16 text-pastel-sageDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="34" cy="38" r="12" strokeWidth="2" fill="#eef4ef" />
            <path d="M16 72 C18 56, 50 56, 52 72" strokeWidth="2" strokeLinecap="round" fill="#eef4ef" />
            <circle cx="66" cy="38" r="12" strokeWidth="2" fill="#eef4ef" />
            <path d="M48 72 C50 56, 82 56, 84 72" strokeWidth="2" strokeLinecap="round" fill="#eef4ef" />
            <circle cx="50" cy="32" r="14" strokeWidth="2.5" fill="white" />
            <path d="M28 80 C32 60, 68 60, 72 80" strokeWidth="2.5" strokeLinecap="round" fill="white" />
          </svg>
        );
      case "code":
        return (
          <svg className="w-16 h-16 text-pastel-blueDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="18" y="22" width="64" height="56" rx="4" strokeWidth="2.5" fill="#f0f6fa" />
            <path d="M18 36 H82" strokeWidth="2" />
            <circle cx="28" cy="29" r="2" fill="currentColor" />
            <circle cx="36" cy="29" r="2" fill="currentColor" />
            <circle cx="44" cy="29" r="2" fill="currentColor" />
            <path d="M38 48 L28 58 L38 68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62 48 L72 58 L62 68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="53" y1="46" x2="47" y2="70" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "space":
        return (
          <svg className="w-16 h-16 text-pastel-lavenderDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="24" strokeWidth="2.5" fill="#f2eff6" />
            <ellipse cx="50" cy="50" rx="38" ry="10" stroke="#2D2A28" strokeWidth="2" strokeDasharray="3 3" transform="rotate(-20 50 50)" />
            <circle cx="30" cy="30" r="2" fill="#f7df94" stroke="#2D2A28" strokeWidth="1" />
            <circle cx="72" cy="70" r="2" fill="#f7df94" stroke="#2D2A28" strokeWidth="1" />
          </svg>
        );
      case "craft":
      default:
        return (
          <svg className="w-16 h-16 text-pastel-lavenderDark" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="24" y="24" width="52" height="56" rx="4" strokeWidth="2.5" fill="#f2eff6" />
            <line x1="34" y1="38" x2="66" y2="38" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="34" y1="48" x2="66" y2="48" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M50 56 L62 70 H38 Z" fill="#a799b7" opacity="0.6" strokeWidth="1.5" />
            <circle cx="50" cy="54" r="5" fill="#f7df94" stroke="#2D2A28" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <figure
      style={{ transform: `rotate(${rotation})` }}
      className={`relative p-3.5 sm:p-4 rounded-lg border-2 shadow-comic transition-all duration-200 hover:rotate-0 hover:-translate-y-1 hover:shadow-comic-lg ${
        colorClasses[color] || colorClasses.yellow
      } ${className}`}
    >
      {/* Decorative Washi Tape Header */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 rounded-xs ${
          tapeClasses[tapeColor] || "washi-tape-peach"
        } rotate-[-1deg] z-20 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Optional Wire Paper Clip */}
      {withPaperClip && (
        <div className="paper-clip right-3 top-[-8px] pointer-events-none z-30" aria-hidden="true" />
      )}

      {/* Top Category Label */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-pastel-ink/20">
        <span
          className={`px-2 py-0.5 rounded font-comic text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
            badgeColors[color] || "bg-pastel-yellow text-pastel-ink"
          }`}
        >
          ★ {category}
        </span>
      </div>

      {/* Image Preview & Placeholder Container */}
      <div
        className={`relative w-full ${aspectRatio} rounded border-2 border-dashed border-pastel-ink/40 bg-white/95 overflow-hidden flex flex-col items-center justify-center p-2 text-center`}
      >
        {!inlineFallback ? (
          <img
            src={currentSrc}
            alt={title}
            onError={handleImageError}
            className="w-full h-full object-cover rounded-xs"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-1.5 select-none">
            {renderVectorIllustration()}
            <div className="px-2 py-1 rounded bg-pastel-paperAlt border border-pastel-ink/40 font-mono text-[11px] sm:text-xs font-bold text-pastel-ink shadow-comic-sm">
              [ {imageName} ]
            </div>
            <p className="font-mono text-[9px] sm:text-[10px] text-pastel-inkMuted uppercase tracking-wider">
              Drop image in: /public/assets/{imageName}
            </p>
          </div>
        )}
      </div>

      {/* Sticky Note Description & Handwritten Note */}
      <figcaption className="mt-2.5 space-y-1 text-left">
        <h4 className="font-editorial text-base sm:text-lg font-semibold text-pastel-ink leading-tight">
          {title}
        </h4>
        {note && (
          <p className="font-hand text-sm sm:text-base text-pastel-inkMuted leading-snug">
            &ldquo;{note}&rdquo;
          </p>
        )}
      </figcaption>
    </figure>
  );
}
