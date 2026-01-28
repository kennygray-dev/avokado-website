"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-[90vh] md:min-h-screen relative flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="/images/hero-blur.png"
      />

      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[1400px] overflow-hidden px-4">
        {/* Subtitle above AVOKADO */}
        <p
          className="text-center text-white mb-6 max-w-full"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            wordWrap: "break-word",
          }}
        >
          Every brand has a story.<br />
          We help it show up everywhere it matters.
        </p>

        {/* AVOKADO Text */}
        <h1
          className="mt-20 font-neueMontreal font-bold select-none w-full text-center text-white text-[3rem] sm:text-[7rem] md:text-[9rem] lg:text-[17rem]"
        >
          AVOKADO
        </h1>
      </div>
    </section>
  );
}