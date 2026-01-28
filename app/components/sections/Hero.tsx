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
          className="mt-40 text-white [text-shadow:_0_0_24px_rgb(255_255_255_/_25%)] flex justify-center text-center whitespace-nowrap"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 800,
            fontStyle: "bold",
            fontSize: "clamp(60px, 18vw, 700px)", // smaller minimum for mobile, still large on big screens
            lineHeight: "1",
            letterSpacing: "-2px",
            overflow: "visible",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          AVOKADO
        </motion.h1>
      </div>
    </section>
  );
}
