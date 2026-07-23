

"use client";

import React from "react";

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className,
  ariaLabel = "Close",
}) => (
  <button
    onClick={onClick}
    className={`rounded-none bg-lime text-ink flex items-center justify-center transition hover:scale-105 ${className ?? ""}`}
    aria-label={ariaLabel}
  >
    ✕
  </button>
);

export default CloseButton;