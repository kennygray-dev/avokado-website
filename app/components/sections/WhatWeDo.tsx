"use client";

export default function WhatWeDo() {
  return (
    <section className="w-full max-w-[1400px] mx-auto flex flex-col items-start justify-center bg-[var(--background)] relative overflow-hidden px-4 sm:px-8 py-12 sm:py-16">
      <h3 className="text-left text-sm font-neueMontreal text-gray-400 break-words">
        What We Do
      </h3>

      <h2 className="text-left text-[50px] sm:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] break-words mt-2">
        Your Creative <span className="text-[#8D8D8D]">Powerhouse</span>
      </h2>

      <p className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] leading-[100%] tracking-[0%] break-words mt-6">
        Everything we do works together—because digital presence isn’t one piece, it’s a system.
      </p>
    </section>
  );
}