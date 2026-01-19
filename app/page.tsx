"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GreenButton } from "./ui/Buttons";
import ContactForm from "./components/forms/ContactForm";
import StartProjectForm from "./components/forms/StartProjectForm";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      setShowContact(true);
    } else if (hash.startsWith("#project")) {
      setShowProjectForm(true);
    }
  }, []);

  const openContact = () => {
    window.history.replaceState(null, "", "#contact");
    setShowContact(true);
    setShowProjectForm(false);
  };

  const closeContact = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowContact(false);
  };

  const openProjectForm = () => {
    window.history.replaceState(null, "", "#project");
    setShowProjectForm(true);
    setShowContact(false);
  };

  const closeProjectForm = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowProjectForm(false);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 overflow-x-hidden relative">
      <main className="w-full h-full relative">
        <div className={`transition-all duration-300 ${showProjectForm || showContact ? "blur-lg" : ""}`}>
          {/* Fullscreen background image with overlay */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/images/avokado1.png"
              alt="Avokado Visual"
              fill
              className="object-cover w-full h-full"
              priority
              quality={70}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="/images/avokados-blur.png"
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-black/70 pointer-events-none"></div>
          </div>

          {/* Overlay content centered */}
          <div className="relative w-full min-h-screen flex items-center justify-center py-24">
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-16 gap-4 sm:gap-6 max-w-full mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
            >
              <motion.div>
                <button
                  onClick={() => {
                    window.history.replaceState(null, "", window.location.pathname);
                    setShowContact(false);
                    setShowProjectForm(false);
                  }}
                  className="hover:opacity-80 transition"
                >
                  <Image
                    src="/avokado.svg"
                    alt="Avokado Logo"
                    width={80}
                    height={16}
                    className="dark:invert md:w-[100px] md:h-[20px]"
                    priority
                  />
                </button>
              </motion.div>
              <motion.h1
                className="font-aonik text-[20vw] sm:text-[18vw] md:text-[16vw] leading-[0.92] font-bold tracking-tight flex justify-center mix-blend-difference text-white [text-shadow:_0_0_24px_rgb(255_255_255_/_25%)]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {"AVOKADO".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4 items-center justify-center">
                {!showProjectForm && (
                  <GreenButton
                    onClick={openProjectForm}
                    className="h-12 md:h-16 w-36 md:w-40 text-xs md:text-base font-bold whitespace-nowrap"
                  >
                    Start a Project
                  </GreenButton>
                )}
                {!showContact && (
                  <button
                    onClick={openContact}
                    className="h-10 md:h-12 px-4 md:px-6 text-sm md:text-base rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-transform duration-300 text-white"
                  >
                    Contact Us
                  </button>
                )}
              </motion.div>
              <motion.div className="flex gap-3 md:gap-4 mt-3 md:mt-6 text-zinc-100 dark:text-zinc-300 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.75h-9A2.25 2.25 0 005.25 6v12A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18V6a2.25 2.25 0 00-2.25-2.25z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 10.5v6m3-6v6m-3-8.25h.008M14.25 10.5c.828 0 1.5.672 1.5 1.5v4.5"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.473 0 2.777.009 3.753.055 2.31.106 3.484 1.28 3.59 3.59.046.976.055 1.28.055 3.753s-.009 2.777-.055 3.753c-.106 2.31-1.28 3.484-3.59 3.59-.976.046-1.28.055-3.753.055s-2.777-.009-3.753-.055c-2.31-.106-3.484-1.28-3.59-3.59C4.509 14.777 4.5 14.473 4.5 12s.009-2.777.055-3.753c.106-2.31 1.28-3.484 3.59-3.59C9.223 3.009 9.527 3 12 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.69.11 1.02A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Forms positioned centered on screen */}
        {showProjectForm && (
          <div className="fixed inset-0 z-30 flex items-center justify-center">
            <StartProjectForm onClose={closeProjectForm} />
          </div>
        )}
        {showContact && (
          <div className="fixed inset-0 z-30 flex items-center justify-center">
            <ContactForm onClose={closeContact} />
          </div>
        )}
      </main>
    </div>
  );
}