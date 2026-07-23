import AvokadoLogo from "../../../public/icons/AvokadoLogo";

/**
 * The animated brand mark: the logo crescent held inside slowly counter-rotating
 * arcs drawn from the same curve. Replaces the Spline scene — a few KB of SVG
 * instead of a 6.8MB WebGL runtime, with no third-party watermark.
 *
 * All motion is CSS keyframes (see globals.css), so it stops automatically for
 * anyone with prefers-reduced-motion.
 */

type CrescentMarkProps = {
  className?: string;
};

export default function CrescentMark({ className = "" }: CrescentMarkProps) {
  return (
    <div aria-hidden="true" className={`relative aspect-square ${className}`}>
      {/* Soft halo — the deck's marks always sit on a bloom, never a hard edge. */}
      <div
        className="absolute inset-[12%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-leaf) 0%, transparent 70%)",
          animation: "avokado-breathe 9s ease-in-out infinite",
        }}
      />

      {/* Orbiting arcs. Each is an open circle, so the gap reads as a crescent
          sweep rather than a closed ring. */}
      <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 h-full w-full">
        <g style={{ transformOrigin: "center", animation: "avokado-spin 32s linear infinite" }}>
          <circle
            cx="100"
            cy="100"
            r="94"
            stroke="var(--color-carbon)"
            strokeWidth="0.75"
            strokeOpacity="0.28"
            strokeLinecap="round"
            strokeDasharray="150 440"
          />
        </g>

        <g
          style={{
            transformOrigin: "center",
            animation: "avokado-spin-reverse 22s linear infinite",
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="76"
            stroke="var(--color-leaf)"
            strokeWidth="1.25"
            strokeOpacity="0.75"
            strokeLinecap="round"
            strokeDasharray="120 358"
          />
        </g>

        <g style={{ transformOrigin: "center", animation: "avokado-spin 16s linear infinite" }}>
          <circle
            cx="100"
            cy="100"
            r="58"
            stroke="var(--color-carbon)"
            strokeWidth="0.75"
            strokeOpacity="0.35"
            strokeLinecap="round"
            strokeDasharray="60 305"
          />
        </g>
      </svg>

      {/* The mark itself, drifting just enough to feel alive. */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "avokado-drift 7s ease-in-out infinite" }}
      >
        <AvokadoLogo className="h-[34%] w-auto text-carbon" filled />
      </div>
    </div>
  );
}
