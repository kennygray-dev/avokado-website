

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
    className={`rounded-full bg-[#ccf17b] text-black flex items-center justify-center transition hover:scale-105 ${className ?? ""}`}
    aria-label={ariaLabel}
  >
    ✕
  </button>
);

export default CloseButton;