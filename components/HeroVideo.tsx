"use client";

/**
 * Cinematic loop — Runway-style.
 * Theme: AI tailored to you, like a custom suit.
 *
 * Composition layers (back → front):
 *   1. Animated mesh gradient (bordeaux blobs drifting)
 *   2. Pulsing dot grid — "data" texture
 *   3. Neural connection lines that fade in/out
 *   4. Suit silhouette (lapels) drawing with stroke-dash cycle
 *   5. Floating bordeaux particles
 *   6. Cinematic vignette + frame corner marks + status bar
 */
export function HeroVideo() {
  // Dot grid for data texture
  const dotCols = 40;
  const dotRows = 22;
  const dots: { x: number; y: number; i: number }[] = [];
  for (let r = 0; r < dotRows; r++) {
    for (let c = 0; c < dotCols; c++) {
      dots.push({ x: c * 30 + 15, y: r * 27 + 14, i: r * dotCols + c });
    }
  }

  // Floating particles
  const particles = Array.from({ length: 32 }, (_, i) => ({
    cx: ((i * 173) % 1180) + 10,
    cy: ((i * 91) % 580) + 10,
    delay: (i * 0.27) % 8,
    duration: 12 + (i % 5) * 2,
    r: 1.2 + (i % 3) * 0.4,
  }));

  // Neural connections — random pairs
  const connections = [
    { x1: 100, y1: 120, x2: 480, y2: 320, d: 0 },
    { x1: 850, y1: 180, x2: 1080, y2: 420, d: 1.4 },
    { x1: 200, y1: 460, x2: 580, y2: 90, d: 2.8 },
    { x1: 920, y1: 510, x2: 540, y2: 220, d: 4.2 },
    { x1: 60, y1: 320, x2: 380, y2: 80, d: 5.6 },
    { x1: 730, y1: 60, x2: 1020, y2: 280, d: 7.0 },
  ];

  return (
    <div className="hero-video-frame" aria-hidden="true">
      {/* Animated mesh background */}
      <div className="hero-mesh">
        <div className="hero-mesh-blob b1" />
        <div className="hero-mesh-blob b2" />
        <div className="hero-mesh-blob b3" />
      </div>

      {/* SVG composition */}
      <svg
        className="hv-svg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hvSuit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(245,239,230,0.85)" />
            <stop offset="100%" stopColor="rgba(122,43,61,0.7)" />
          </linearGradient>
          <linearGradient id="hvLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(122,43,61,0)" />
            <stop offset="50%" stopColor="rgba(122,43,61,0.7)" />
            <stop offset="100%" stopColor="rgba(122,43,61,0)" />
          </linearGradient>
          <radialGradient id="hvHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(122,43,61,0.5)" />
            <stop offset="100%" stopColor="rgba(122,43,61,0)" />
          </radialGradient>
        </defs>

        {/* Soft halo behind suit */}
        <ellipse
          cx="600"
          cy="320"
          rx="260"
          ry="200"
          fill="url(#hvHalo)"
          className="hv-halo"
        />

        {/* Pulsing dot grid */}
        <g className="hv-grid">
          {dots.map((d) => (
            <circle
              key={d.i}
              cx={d.x}
              cy={d.y}
              r="0.9"
              fill="rgba(245,239,230,0.22)"
              className="hv-dot"
              style={{ animationDelay: `${(d.i * 0.04) % 6}s` }}
            />
          ))}
        </g>

        {/* Neural connections */}
        <g className="hv-network">
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke="url(#hvLine)"
              strokeWidth="0.7"
              className="hv-link"
              style={{ animationDelay: `${c.d}s` }}
            />
          ))}
        </g>

        {/* Suit silhouette — central focal */}
        <g transform="translate(600, 320)" className="hv-suit">
          {/* Outer lapel V (jacket) */}
          <path
            d="M -150,-160 L -10,-70 L 0,-50 L 10,-70 L 150,-160 L 130,200 L 0,260 L -130,200 Z"
            fill="none"
            stroke="url(#hvSuit)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hv-draw hv-draw-1"
          />
          {/* Inner lapel — left */}
          <path
            d="M -150,-130 L -60,30 L -130,200"
            fill="none"
            stroke="rgba(245,239,230,0.45)"
            strokeWidth="0.9"
            strokeLinecap="round"
            className="hv-draw hv-draw-2"
          />
          {/* Inner lapel — right */}
          <path
            d="M 150,-130 L 60,30 L 130,200"
            fill="none"
            stroke="rgba(245,239,230,0.45)"
            strokeWidth="0.9"
            strokeLinecap="round"
            className="hv-draw hv-draw-2"
          />
          {/* Centre seam */}
          <line
            x1="0"
            y1="-50"
            x2="0"
            y2="260"
            stroke="rgba(122,43,61,0.6)"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            className="hv-seam"
          />
          {/* Tie pin / center button */}
          <circle
            cx="0"
            cy="60"
            r="3"
            fill="rgba(245,239,230,0.7)"
            className="hv-pin"
          />
        </g>

        {/* Floating particles */}
        <g className="hv-particles">
          {particles.map((p, i) => (
            <circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="rgba(122,43,61,0.7)"
              className="hv-particle"
              style={{
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Cinematic vignette */}
      <div className="hv-vignette" />

      {/* Frame corner marks — cinematic registration */}
      <span className="hv-mark tl" />
      <span className="hv-mark tr" />
      <span className="hv-mark bl" />
      <span className="hv-mark br" />

      {/* Bottom info strip */}
      <div className="hv-info">
        <span className="hv-info-dot" />
        <span>AI · Tailored to you</span>
        <span className="hv-info-time">SUITS AI / 01</span>
      </div>
    </div>
  );
}
