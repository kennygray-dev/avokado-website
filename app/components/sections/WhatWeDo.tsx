"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { GreenButton } from "../ui/Buttons";

export default function WhatWeDo() {
  return (
    <section className="w-full flex flex-col items-start justify-start bg-[var(--background)] relative overflow-hidden py-16 px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start justify-start">

        <h2 className="text-left text-[70px] sm:text-[88px] md:text-[88px] font-neueMontreal font-bold leading-[110%] tracking-[0%] break-words mt-4">
          Your Creative <span className="text-[#8D8D8D]">Powerhouse</span>
        </h2>

        <p className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[140%] tracking-[0%] break-words mt-8">
          We’re a digital creative agency that blends strategy, creativity, and execution so brands don’t just exist online, they perform.
        </p>
        {/* Three connected boxes row */}
        <div className="mt-12 flex w-full max-w-[1400px] mx-auto gap-4">
          {/* Box 1 */}
          <div className="flex-1 relative text-white p-10 flex flex-col items-start justify-start border-r border-gray-700">
            <span className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#8FB850] text-white font-bold text-sm">01</span>
            <span className="text-lg font-semibold mb-2">Digital Strategy & Branding Direction</span>
            <p className="text-gray-400 text-sm">
              Crafting clear brand strategies and direction to elevate your digital presence and market impact.
            </p>
          </div>
          {/* Box 2 */}
          <div className="flex-1 relative text-white p-10 flex flex-col items-start justify-start border-r border-gray-700">
            <span className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#8FB850] text-white font-bold text-sm">02</span>
            <span className="text-lg font-semibold mb-2">Content Creation</span>
            <p className="text-gray-400 text-sm">
              Producing high-quality content including visuals, videos, and copy to engage and captivate audiences.
            </p>
          </div>
          {/* Box 3 */}
          <div className="flex-1 relative text-white p-10 flex flex-col items-start justify-start">
            <span className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#8FB850] text-white font-bold text-sm">03</span>
            <span className="text-lg font-semibold mb-2">Web Digital Experience</span>
            <p className="text-gray-400 text-sm">
              Designing and developing responsive, intuitive web experiences that drive engagement and conversions.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-end">
        <GreenButton
          className="inline-flex items-center gap-2 px-6 py-3"
          onClick={() => {
            window.open('https://calendly.com/avokado-ng/', '_blank');
          }}
        >
          Book a free call
          <ArrowUpRightIcon className="w-4 h-4" />
        </GreenButton>
      </div>
    </section>
  );
}