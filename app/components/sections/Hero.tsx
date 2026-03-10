"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const text = "AVOKADO";
  const words = [
    { main: "Create", sub: "with" },
    { main: "Brand", sub: "with" },
    { main: "Build", sub: "with" },
    { main: "Design", sub: "with" },
    { main: "Grow", sub: "with" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
        style={{ filter: "brightness(0.5) blur(25px)" }}
      />

      {/* Dimmed Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* AVOKADO Text - Better mobile scaling */}
        <div className="flex flex-col items-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index].main + words[index].sub}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              <motion.span
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative px-3 py-1 rounded-full border border-[#CEF17B] text-[#CEF17B] font-[cursive]"
              >
                {words[index].main}
              </motion.span>
              {words[index].sub && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="text-white/50"
                >
                  {words[index].sub}
                </motion.span>
              )}
            </motion.div>
          </AnimatePresence>
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
      </div>
    </motion.section>
  );
}