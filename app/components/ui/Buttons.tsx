"use client";

import React from "react";

interface GreenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GreenButton: React.FC<GreenButtonProps> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center h-12 rounded-full
      bg-[#ccf17b] text-black
      transition-all duration-150 ease-out
      hover:-translate-y-[0.5px] hover:scale-[1.01]
      hover:shadow-sm hover:shadow-[#ccf17b]/30
      active:translate-y-0 active:scale-[0.97]
      ${className ?? ""}`}
  >
    {children}
  </button>
);
