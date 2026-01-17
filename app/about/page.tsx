"use client";

import { useRouter } from "next/navigation";
import BackButton from "../ui/BackButton";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import servicesAnimationData from "../../public/components/servicesAnimation.json";
import servicesAnimationDark from '../../public/components/servicesAnimationDark.json';

// About Hero with Animation
const AboutHero = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  return (
    <div className="w-full">
      {/* Top border line */}
      <div className="w-full h-screen flex justify-center items-center px-8 md:px-16">
        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row items-stretch justify-between gap-8 p-6 rounded-[2rem]">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6">
            <motion.h3
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-[#084734] dark:text-[#ccf17b]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Avokado is a creative digital agency built for brands that want more than just content — they want connection. We believe creativity should feel effortless, intuitive, and alive.
            </motion.p>
            <div className="flex gap-6 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.602.452 3.635 1.419 2.668 2.386 2.346 3.557 2.288 4.836.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.279.38 2.45 1.347 3.417.967.967 2.138 1.289 3.417 1.347C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.279-.058 2.45-.38 3.417-1.347.967-.967 1.289-2.138 1.347-3.417C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.058-1.279-.38-2.45-1.347-3.417-.967-.967-2.138-1.289-3.417-1.347C15.668.014 15.259 0 12 0z"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4V7h-4v17zM8.5 7h3.657v2.59h.051c.509-.965 1.754-1.983 3.612-1.983 3.863 0 4.577 2.54 4.577 5.845V24h-4v-5.845c0-1.394-.025-3.19-1.945-3.19-1.947 0-2.244 1.52-2.244 3.09V24h-4V7z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <button
                onClick={() => window.location.href = '/#project'}
                className="h-12 md:h-16 w-36 md:w-40 bg-[#ccf17b] text-black font-bold rounded-full hover:bg-[#b8e66c] transition"
              >
                Start a Project
              </button>
            </div>
          </div>

          {/* Right: Services Animation */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/2 h-full flex justify-center items-center"
            >
              <div className="w-full max-w-md  p-2 rounded-[2rem]">
                <Lottie
                  animationData={isDark ? servicesAnimationData : servicesAnimationDark}
                  loop={true}
                  autoplay={true}
                  style={{ width: '130%', height: '150%' }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Services Section
const ServiceSection = () => (
  <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-8 md:px-16 py-12">
    {/* Your existing motion divs for each service go here */}
  </div>
);

// About Page
export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 flex flex-col items-center justify-start overflow-auto">
      <div className="fixed top-3 left-22 z-50">
        <BackButton />
      </div>

      <AboutHero />

      <ServiceSection />

      {/* Brand Story Section */}
      <section className="w-full py-0 px-8 md:px-16">
        <div className="w-full max-w-7xl mx-auto p-8 md:p-12 flex flex-col gap-6 rounded-[1rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Brand Story</h2>
          <p className="text-lg md:text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed">
            Avokado was born from a simple idea — creativity should feel fresh, intentional, and unforgettable.<br />
            Just like its name, Avokado represents something wholesome, rich, and naturally appealing. We take the familiar (brands and businesses), add flavor (creativity), and serve it in a way that feels new yet effortless.<br />
            In a world where attention is the new currency, Avokado helps brands stand out with visuals that speak, stories that connect, and digital experiences that actually convert. We blend strategy with aesthetics, artistry with technology, and professionalism with personality.<br />
            We don’t just build brands; we cultivate them, growing their digital presence with design that feels modern, human, and culturally in-sync.
          </p>
        </div>
      </section>
    </div>
  );
}