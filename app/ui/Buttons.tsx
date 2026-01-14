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
    className={`h-12 px-6 rounded-full bg-[#ccf17b] text-black hover:bg-[#b8e66c] transition ${className ?? ""}`}
  >
    {children}
  </button>
);
