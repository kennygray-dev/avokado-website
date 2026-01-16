"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { GreenButton } from "./Buttons";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const router = useRouter();

  return (
    <GreenButton
      onClick={() => router.push("/")}
      className={`h-19 w-19 rounded-full flex items-center justify-center ${className ?? ""}`}
    >
      <ArrowLeftIcon className="w-20 h-20" />
    </GreenButton>
  );
};

export default BackButton;
