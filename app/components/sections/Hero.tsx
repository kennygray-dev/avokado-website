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
        {/* Subtitle above AVOKADO - ALL CAPS, SMALLER */}
        <p
          className="text-center text-white mb-3 sm:mb-4 uppercase tracking-[0.15em] max-w-2xl"
          style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(12px, 1vw, 14px)",
            lineHeight: "140%",
            letterSpacing: "0.15em",
          }}
        >
          EVERY BRAND HAS A STORY.<br />
          <span className="font-medium">WE HELP IT SHOW UP EVERYWHERE IT MATTERS.</span>
        </p>

        {/* AVOKADO Text */}
        <h1
          className="font-neueMontreal font-bold select-none w-full text-center text-white text-[3rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem] leading-[0.85]"
        >
          AVOKADO
        </h1>

        {/* New text below AVOKADO - ALL CAPS, SMALLER */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-white/90 font-neueMontreal uppercase tracking-[0.15em] max-w-3xl mt-3 sm:mt-4 md:mt-5 px-4"
          style={{
            fontSize: "clamp(12px, 1vw, 14px)",
            lineHeight: "160%",
            letterSpacing: "0.15em",
          }}
        >
          WE'RE A DIGITAL CREATIVE AGENCY THAT BLENDS<br className="hidden sm:block" />
          <span className="font-medium">STRATEGY, CREATIVITY, AND EXECUTION</span>—SO BRANDS<br className="hidden sm:block" />
          DON'T JUST EXIST ONLINE, <span className="font-medium">THEY PERFORM.</span>
        </motion.p>
      </div>
    </section>
  );
}