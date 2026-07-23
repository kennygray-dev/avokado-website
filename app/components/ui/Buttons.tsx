"use client";

import React from "react";

interface GreenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

/**
 * Form / in-modal primary action. Same fill-sweep language as the marketing
 * <Button>, but a plain <button> (no magnetic wrapper) so width/utility classes
 * apply directly — forms sometimes need a full-width submit.
 */
export const GreenButton: React.FC<GreenButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  disabled,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-none bg-carbon px-6
      font-medium text-paper
      disabled:cursor-not-allowed disabled:opacity-50
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf
      ${className ?? ""}`}
  >
    <span
      aria-hidden="true"
      className="absolute -inset-px translate-y-[101%] bg-lime transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-y-0 group-disabled:hidden"
    />
    <span className="relative z-10 transition-colors duration-300 group-hover:text-lime-ink">
      {children}
    </span>
  </button>
);
