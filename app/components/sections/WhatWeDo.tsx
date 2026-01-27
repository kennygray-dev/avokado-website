"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="w-full max-w-[1400px] mx-auto flex flex-col items-start justify-center bg-[var(--background)] relative overflow-hidden px-4 py-12 sm:py-16">
      <motion.h3
        className="text-left text-sm font-neueMontreal text-gray-400 sm:max-w-full break-words"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What We Do
      </motion.h3>

      <motion.h2
        className="text-left text-[50px] sm:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] sm:max-w-full break-words mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Creative <span className="text-[#8D8D8D]">Powerhouse</span>
      </motion.h2>

      <motion.p
        className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] leading-[100%] tracking-[0%] sm:max-w-full break-words mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Everything we do works together—because digital presence isn’t one piece, <br />
        it’s a system.
      </motion.p>
    </section>
  );
}