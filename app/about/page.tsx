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
      <div className="w-full min-h-screen flex justify-center items-center px-2 py-24 md:px-16">
        <div className="w-full h-full max-w-[80rem] mx-auto flex flex-col md:flex-row items-center justify-start md:justify-between gap-4 md:gap-8 p-4 md:p-6 rounded-[2rem]">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6 relative">
            <motion.h1
              className="text-5xl md:text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative inline-block text-black dark:text-zinc-100">
                <span className="relative z-20">Avokado</span>
                {/* Green scribble line */}
                <div className="relative z-10">
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-6 opacity-60"
                    viewBox="0 0 200 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'drop-shadow(0 0 2px rgba(156, 183, 133, 1))' }}
                  >
                    <path
                      d="M0 10 C20 15, 40 5, 60 10 S100 15, 120 10 S160 5, 180 10 S200 15, 220 10"
                      stroke="#CEF17B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      strokeDasharray="5 5"
                    />
                  </svg>
                </div>
              </span>
              <span className="text-zinc-500 dark:text-zinc-400"> built for brands that want more than just content — they want connection.</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-zinc-700 dark:text-zinc-100 leading-loose md:leading-loose"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe creativity should feel effortless, intuitive, and alive.
            </motion.p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"/>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.368 4.268 5.456v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
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
              <div className="w-full max-w-md p-0 rounded-[2rem]">
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
  <div className="w-full max-w-[90rem] mx-auto flex flex-col gap-6 px-4 md:px-16 py-12">
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
      {/* Brand Story Section */}
      <section className="w-full">
        <div className="w-full max-w-[80rem] mx-auto p-4 md:p-8 flex flex-col gap-4 md:gap-6 rounded-[1rem]">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">Brand Story</h2>
          <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 leading-loose md:leading-loose">
            Avokado was born from a simple idea — creativity should feel fresh, intentional, and unforgettable.<br />
            Just like its name, Avokado represents something wholesome, rich, and naturally appealing. We take the familiar (brands and businesses), add flavor (creativity), and serve it in a way that feels new yet effortless.<br />
            In a world where attention is the new currency, Avokado helps brands stand out with visuals that speak, stories that connect, and digital experiences that actually convert. We blend strategy with aesthetics, artistry with technology, and professionalism with personality.<br />
            We don’t just build brands; we cultivate them, growing their digital presence with design that feels modern, human, and culturally in-sync.
          </p>
        </div>
      </section>
      <ServiceSection />
    </div>
  );
}