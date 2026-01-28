"use client";

export default function WhatWeDo() {
  return (
    <section className="w-full flex flex-col items-start justify-start bg-[var(--background)] relative overflow-hidden py-8 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start justify-start">
        <h3 className="text-left text-sm font-neueMontreal text-gray-400 break-words">
          What We Do
        </h3>

        <h2 className="text-left text-[50px] sm:text-[64px] md:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] break-words mt-2">
          Your Creative <span className="text-[#8D8D8D]">Powerhouse</span>
        </h2>

        <p className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] sm:text-[20px] md:text-[20px] leading-[100%] tracking-[0%] break-words mt-6">
          Everything we do works together—because digital presence isn’t one piece, it’s a system.
        </p>
      </div>
    </section>
  );
}