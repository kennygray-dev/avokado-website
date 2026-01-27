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
      <div className="relative z-10 flex flex-col items-center justify-center max-w-full overflow-hidden px-4">
        {/* Subtitle above AVOKADO */}
        <p
          className="text-center text-white mb-12 max-w-full"
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

        {/* Animated AVOKADO Text */}
        <motion.h1
          className="mt-4 text-white [text-shadow:_0_0_24px_rgb(255_255_255_/_25%)] flex flex-wrap justify-center text-center"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 800,
            fontStyle: "bold",
            fontSize: "clamp(120px, 20vw, 260px)",
            lineHeight: "100%",
            letterSpacing: "0%",
            overflow: "visible",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* "AVO" on top line always */}
          {"AVO".split("").map((letter, i) => (
            <motion.span
              key={`avo-${i}`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
          {/* Line break only on mobile */}
          <br className="block md:hidden" />
          {/* "KADO" white on desktop, gray on mobile */}
          {"KADO".split("").map((letter, i) => (
            <motion.span
              key={`kado-${i}`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-gray-300 md:text-white"
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
