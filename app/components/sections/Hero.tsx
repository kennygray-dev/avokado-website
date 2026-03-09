"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "AVOKADO";
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full relative flex items-center justify-center overflow-visible rounded-2xl min-h-[100vh] sm:min-h-screen"
    >
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
        style={{ filter: "brightness(0.5) blur(8px)" }}
      />

      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* AVOKADO Text - Better mobile scaling */}
        <motion.h1
          className="font-neueMontreal font-bold select-none w-full text-center text-white overflow-visible break-normal px-2"
          style={{
            fontSize: "clamp(3.5rem, 15vw, 17rem)",
            lineHeight: "0.85",
          }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </motion.section>
  );
}