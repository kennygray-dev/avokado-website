/**
 * The brand's crescent motif, lifted from the logo mark and used throughout
 * "Avokado Branding.pdf" as thin arcs bleeding off the page corners.
 * Purely decorative — hidden from assistive tech.
 */

type ArcsProps = {
  /** Which corner the arcs bleed from. */
  corner?: "tl" | "tr" | "bl" | "br";
  className?: string;
  /** Stroke colour. Neutral by default — the hero passes lime explicitly. */
  stroke?: string;
};

export function Arcs({ corner = "tr", className = "", stroke = "var(--color-paper)" }: ArcsProps) {
  const rotation = { tl: 180, tr: 270, bl: 90, br: 0 }[corner];
  const position = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  }[corner];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute ${position} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      fill="none"
    >
      <circle cx="400" cy="0" r="250" stroke={stroke} strokeWidth="1.5" opacity="0.55" />
      <circle cx="400" cy="0" r="330" stroke={stroke} strokeWidth="1.5" opacity="0.32" />
      <circle cx="400" cy="0" r="395" stroke={stroke} strokeWidth="1.5" opacity="0.18" />
    </svg>
  );
}

/**
 * The soft organic blob that sits behind headings on light pages in the deck.
 */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-paper-2 ${className}`}
    />
  );
}

/**
 * Subtle film grain. The deck's dark pages are textured, never flat black.
 */
export function Grain({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
