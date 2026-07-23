"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant = "primary" | "outline" | "link";
type Tone = "dark" | "lime" | "onDark";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  tone?: Tone;
  arrow?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

// Idle surface + the panel that sweeps up on hover + the label colour it flips to.
const SOLID: Record<Tone, { base: string; sweep: string; hoverText: string }> = {
  // carbon button on a light section → lime sweep
  dark: { base: "bg-carbon text-paper", sweep: "bg-lime", hoverText: "group-hover:text-lime-ink" },
  // lime button (nav / dark surfaces) → carbon sweep
  lime: { base: "bg-lime text-lime-ink", sweep: "bg-carbon", hoverText: "group-hover:text-paper" },
  // used for outline-on-dark; base is transparent, handled below
  onDark: { base: "text-paper", sweep: "bg-paper", hoverText: "group-hover:text-ink" },
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  tone = "dark",
  arrow = true,
  magnetic = true,
  type = "button",
  disabled,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);
  const x = useSpring(mvx, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(mvy, { stiffness: 300, damping: 20, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mvx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    mvy.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    mvx.set(0);
    mvy.set(0);
  };

  const external = !!href && /^(https?:|mailto:|tel:)/.test(href);
  const Arrow = arrow ? (
    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      &#8599;
    </span>
  ) : null;

  // ---- editorial link variant: underline + sliding arrow, no fill ----
  if (variant === "link") {
    const linkInner = (
      <span className="group inline-flex items-center gap-1.5 text-carbon underline decoration-1 underline-offset-[6px] transition-colors hover:text-leaf hover:decoration-leaf">
        <span>{children}</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </span>
    );
    return href ? (
      <Link
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {linkInner}
      </Link>
    ) : (
      <button type={type} onClick={onClick} aria-label={ariaLabel} className={className}>
        {linkInner}
      </button>
    );
  }

  // ---- primary / outline: fill-sweep + magnetic ----
  const isOutline = variant === "outline";
  const t = SOLID[isOutline ? "onDark" : tone];
  const surface = isOutline ? "border border-paper/40 text-paper" : t.base;

  const inner = (
    <>
      {/* Panel sweeps up on hover. Sits 1px outside every edge (-inset-px) so no
          hairline of the base fill or border shows through mid-transition. */}
      <span
        aria-hidden="true"
        className={`absolute -inset-px translate-y-[101%] ${t.sweep} transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-y-0`}
      />
      <span className={`relative z-10 transition-colors duration-300 ${t.hoverText}`}>
        {children}
      </span>
      {Arrow && (
        <span className={`relative z-10 transition-colors duration-300 ${t.hoverText}`}>
          {Arrow}
        </span>
      )}
    </>
  );

  const classes = `group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-none px-6 font-medium ${surface} disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {inner}
        </Link>
      ) : (
        <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={classes}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
