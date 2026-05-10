import { useCallback, useRef } from "react";

/** Stylized Kerala silhouette (line art) — approximate shape for hero accent */
const KERALA_PATH =
  "M52 14 C68 42 74 76 66 114 C84 146 78 182 60 218 C52 236 36 246 24 238 C14 220 18 188 30 154 C22 120 16 82 28 52 C34 28 44 14 52 14 Z";

export default function HeroMapCard() {
  const cardRef = useRef(null);

  const snapBack = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition =
      "transform 520ms cubic-bezier(0.23, 1.02, 0.32, 1)";
    el.style.transform = "perspective(980px) rotateX(0deg) rotateY(0deg)";
  }, []);

  const handleMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 80ms linear";

    const r = el.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 2 - 1;
    const py = ((e.clientY - r.top) / r.height) * 2 - 1;
    const maxX = 12;
    const maxY = 14;
    const ry = px * maxY;
    const rx = -py * maxX;
    el.style.transform = `perspective(980px) rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg)`;
  }, []);

  return (
    <div
      ref={cardRef}
      className="model-orb hero-magnetic-card glass"
      role="presentation"
      onMouseMove={handleMove}
      onMouseLeave={snapBack}
      onBlur={snapBack}
    >
      <div className="hero-map-inner">
        <svg className="kerala-svg" viewBox="0 0 100 264" aria-hidden="true">
          <path className="kerala-path" d={KERALA_PATH} vectorEffect="nonScalingStroke" />
        </svg>

        <div className="map-pin map-pin-pulse" aria-hidden="true">
          <svg viewBox="0 0 24 36" width="42" height="62">
            <path
              fill="currentColor"
              fillOpacity={0.95}
              d="M12 2C7.58 2 4 5.62 4 10c0 6 8 17 8 17s8-11 8-17c0-4.38-3.58-8-8-8zm0 12a4 4 0 110-8 4 4 0 010 8z"
            />
          </svg>
        </div>

        <span className="hero-map-caption">Kerala-based</span>
      </div>
    </div>
  );
}
