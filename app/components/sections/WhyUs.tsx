"use client";
import { motion, Variants, Easing } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: [0.25, 0.1, 0.25, 1] as Easing, duration: 0.8 } },
  exit: { opacity: 0, y: 20, transition: { ease: [0.25, 0.1, 0.25, 1] as Easing, duration: 0.8 } },
};

function AnimatedWords({
  text,
  as: Component = "p",
  className,
}: {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const words = text.split(" ").map((wordText, index) => (
    <motion.span
      key={index}
      variants={word}
      className="inline-block mr-2 whitespace-nowrap"
      aria-hidden="true"
    >
      {wordText}
    </motion.span>
  ));
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
  const MotionComponent = MotionComponents[Component] || motion.div;

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.5 }}
      className={className}
    >
      {words}
    </MotionComponent>
  );
}

export default function WhyUs() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-start bg-[var(--background)] relative overflow-hidden px-4 sm:px-8 md:px-16">
      <div className="flex flex-col items-start justify-start w-full max-w-[1400px] mx-auto">
        <AnimatedWords
          as="h2"
          text="Why Avokado"
          className="text-left text-[50px] sm:text-[64px] md:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] break-words mt-2"
        />
        <AnimatedWords
          text="Some of what we have done"
          className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] sm:text-[20px] md:text-[20px] leading-[100%] tracking-[0%] break-words mt-6"
        />
      </div>
    </section>
  );
}
