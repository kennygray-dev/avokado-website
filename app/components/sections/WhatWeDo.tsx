"use client";
import { motion, Variants, Easing } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.1, 0.25, 1] as Easing, duration: 0.8 } },
  exit: { opacity: 0, y: 20, transition: { ease: [0.25, 0.1, 0.25, 1] as Easing, duration: 0.8 } },
};

function AnimatedWords({
  text,
  className,
  as = "div",
}: {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const MotionComponents: Record<string, any> = {
    div: motion.div,
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,
    p: motion.p,
    span: motion.span,
  };
  const Component = MotionComponents[as] || motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      exit="exit"
      variants={container}
    >
      {text.split(" ").map((wordText, index) => (
        <motion.span key={index} variants={word} className="inline-block mr-1">
          {wordText}
        </motion.span>
      ))}
    </Component>
  );
}

export default function WhatWeDo() {
  return (
    <section className="w-full max-w-[1400px] mx-auto flex flex-col items-start justify-center bg-[var(--background)] relative overflow-hidden px-4 py-12 sm:py-16">
      <AnimatedWords
        as="h3"
        className="text-left text-sm font-neueMontreal text-gray-400 sm:max-w-full break-words"
        text="What We Do"
      />

      {/* Because "Powerhouse" has different color, we handle this line manually */}
      <motion.h2
        className="text-left text-[50px] sm:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] sm:max-w-full break-words mt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        exit="exit"
        variants={container}
      >
        {"Your Creative "}
        <motion.span variants={word} className="inline-block text-[#8D8D8D]">
          Powerhouse
        </motion.span>
      </motion.h2>

      <motion.p
        className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] leading-[100%] tracking-[0%] sm:max-w-full break-words mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        exit="exit"
        variants={container}
      >
        {[
          "Everything",
          "we",
          "do",
          "works",
          "together—because",
          "digital",
          "presence",
          "isn’t",
          "one",
          "piece,",
          <br key="br" />,
          "it’s",
          "a",
          "system.",
        ].map((wordText, index) => (
          <motion.span key={index} variants={word} className="inline-block mr-1">
            {wordText}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}