"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const ROTATING = ["Brand", "Build", "Film", "Grow"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-14">
      {/* Centered to the same max width as every other section, so the hero
          stops stretching edge-to-edge on wide screens. */}
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-between">
      {/* top metadata frame */}
      <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
        <div className="label max-w-[16ch] leading-relaxed sm:max-w-none">
          Avokado&reg; — Creative studio
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime [animation:avokado-breathe_2.4s_ease-in-out_infinite]" />
          <span className="label !text-carbon">Open for 2026 projects</span>
        </div>
      </div>

      {/* kinetic statement */}
      <div className="py-12">
        <motion.h1
          initial="hide"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="font-[800] text-carbon"
          style={{ fontSize: "var(--text-display)", lineHeight: 0.9 }}
        >
          {["A creative studio", "for brands that"].map((line) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                variants={{ hide: { y: "110%" }, show: { y: 0 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="flex items-baseline gap-[0.25em]"
              variants={{ hide: { y: "110%" }, show: { y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              want to
              <span className="relative inline-block align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING[i]}
                    initial={{ y: "60%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-60%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="ital inline-block text-leaf"
                    style={{ fontWeight: 500 }}
                  >
                    {ROTATING[i]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.span>
          </span>
        </motion.h1>
      </div>

      {/* bottom frame */}
      <div className="grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-md text-(length:--text-lead) leading-snug text-body">
          We design, build and grow brands that look sharp, feel human, and{" "}
          <span className="ital text-carbon">actually perform</span> online.
        </p>
        <Button href="/#contact" tone="dark" className="self-start md:justify-self-end">
          Start a project
        </Button>
      </div>
      </div>
    </section>
  );
}
