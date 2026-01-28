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
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[1400px] w-full overflow-hidden px-4">
        {/* Subtitle above AVOKADO - Better mobile arrangement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-4 sm:mb-6 max-w-xl px-2"
        >
          <p className="uppercase tracking-[0.15em] font-neueMontreal mb-2"
            style={{
              fontSize: "clamp(11px, 1.5vw, 14px)",
              lineHeight: "140%",
              letterSpacing: "0.15em",
            }}
          >
            EVERY BRAND HAS A STORY.
          </p>
          <p className="uppercase tracking-[0.15em] font-neueMontreal font-medium"
            style={{
              fontSize: "clamp(11px, 1.5vw, 14px)",
              lineHeight: "140%",
              letterSpacing: "0.15em",
            }}
          >
            WE HELP IT SHOW UP EVERYWHERE IT MATTERS.
          </p>
        </motion.div>

        {/* AVOKADO Text - Better mobile scaling */}
        <h1
          className="font-neueMontreal font-bold select-none w-full text-center text-white leading-[0.85] px-2"
          style={{
            fontSize: "clamp(3.5rem, 15vw, 17rem)",
          }}
        >
          AVOKADO
        </h1>

        {/* New text below AVOKADO - Better mobile line breaks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-white/90 font-neueMontreal uppercase tracking-[0.15em] max-w-2xl mt-4 sm:mt-6 md:mt-8 px-4"
          style={{
            fontSize: "clamp(11px, 1.5vw, 14px)",
            lineHeight: "160%",
            letterSpacing: "0.15em",
          }}
        >
          <p className="mb-2">
            WE'RE A DIGITAL CREATIVE AGENCY
          </p>
          <p className="mb-2">
            THAT BLENDS <span className="font-medium">STRATEGY, CREATIVITY,</span>
          </p>
          <p className="mb-2">
            <span className="font-medium">AND EXECUTION</span>—SO BRANDS
          </p>
          <p>
            DON'T JUST EXIST ONLINE, <span className="font-medium">THEY PERFORM.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}