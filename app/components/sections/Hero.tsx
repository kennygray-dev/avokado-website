"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden p-4">
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
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Subtitle above AVOKADO */}
        <p
          className="text-center text-white mb-12"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Every brand has a story.<br />
          We help it show up everywhere it matters.
        </p>

        {/* Animated AVOKADO Text */}
        <motion.h1
          className="mt-4 text-white [text-shadow:_0_0_24px_rgb(255_255_255_/_25%)]"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 800,
            fontStyle: "bold",
            fontSize: "260px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {"AVOKADO".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
