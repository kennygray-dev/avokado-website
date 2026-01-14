"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { GreenButton } from "./Buttons";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const router = useRouter();

  return (
    <GreenButton
      onClick={() => router.back()}
      className={`flex items-center justify-center ${className ?? ""}`}
    >
      {/* Icon8 left arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </GreenButton>
  );
};

export default BackButton;
