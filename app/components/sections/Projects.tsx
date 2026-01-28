"use client";

import { motion, Variants, Easing, HTMLMotionProps, motion as motionFactory } from "framer-motion";

const easing: Easing = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 20, transition: { ease: easing, duration: 0.8 } },
  visible: { opacity: 1, y: 0, transition: { ease: easing, duration: 0.8 } },
  exit: { opacity: 0, y: 20, transition: { ease: easing, duration: 0.8 } },
};

type AnimatedWordsProps<T extends keyof JSX.IntrinsicElements> = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: T;
} & Omit<HTMLMotionProps<T>, "initial" | "animate" | "exit" | "variants">;

function AnimatedWords<T extends keyof JSX.IntrinsicElements = "div">({
  text,
  className,
  style,
  as,
  ...rest
}: AnimatedWordsProps<T>) {
  const Component = motionFactory[as || "div"] as React.ComponentType<any>;
  const words = text.split(" ").map((wordText, index) => (
    <motion.span key={index} variants={word} className="inline-block mr-1" aria-hidden="true">
      {wordText}
    </motion.span>
  ));
  return (
    <Component
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.5 }}
      {...rest}
    >
      {words}
    </Component>
  );
}

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-start px-4 sm:px-8 md:px-16 bg-[var(--background)]">
      <div className="max-w-[1400px] flex flex-col items-start justify-start">
        <h2 className="font-neueMontreal font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-left">
          <AnimatedWords text="Project" as="span" className="inline-block" />
          <span style={{ color: '#8D8D8D' }}>
            <AnimatedWords text="Highlights" as="span" className="inline-block" />
          </span>
        </h2>
        <p className="font-neueMontreal font-normal text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 leading-snug text-left">
          <AnimatedWords text="Some of what we have done" as="span" />
        </p>
      </div>
    </section>
  );
}