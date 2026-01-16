"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GreenButton } from "./ui/Buttons";
import ContactForm from "./components/forms/ContactForm";
import StartProjectForm from "./components/forms/StartProjectForm";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    <div className="w-full min-h-screen md:h-screen bg-zinc-50 dark:bg-black transition-colors duration-300 flex items-center justify-center overflow-x-hidden">
      <main className="w-full h-full">
        <motion.div
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex h-full"
        >
          <section className="w-screen flex-shrink-0 min-h-screen md:h-full flex items-center justify-center py-8 md:py-0">
            <div className="mx-auto flex w-full max-w-7xl h-full flex-col md:flex-row items-center md:justify-between gap-6 md:gap-16 px-4 md:px-8 lg:px-16">
              {/* LEFT CONTENT */}
              <div className="flex flex-col w-full md:w-1/2 gap-3 md:gap-6 justify-start md:justify-center items-start pt-4 md:pt-0">
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
                <p className="text-sm md:text-lg text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                  LETS DO SOMETHING
                </p>
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-8xl font-bold text-black dark:text-zinc-50 leading-tight flex"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  {"CREATIVE.".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
                <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4 items-center">
                  {!showProjectForm && (
                    <GreenButton onClick={openProjectForm} className="h-12 md:h-16 w-36 md:w-40 text-xs md:text-base font-bold whitespace-nowrap">
                      Start a Project
                    </GreenButton>
                  )}
                  {!showContact && (
                    <button
                      onClick={openContact}
                      className="h-10 md:h-12 w-28 md:w-40 text-sm md:text-base rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-300 transition"
                    >
                      Contact Us
                    </button>
                  )}
                  <Link
                    href="/about"
                    className="h-10 md:h-12 px-4 md:px-6 text-sm md:text-base rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center hover:bg-black/5 dark:hover:bg-zinc-800 transition"
                  >
                    About Us
                  </Link>
                </div>
                <div className="flex gap-3 md:gap-4 mt-3 md:mt-6 text-zinc-600 dark:text-zinc-400">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white transition"
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
                    className="hover:text-black dark:hover:text-white transition"
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
                    className="hover:text-black dark:hover:text-white transition"
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
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full md:w-1/2 relative min-h-[50vh] md:h-[80vh] flex items-center justify-end">
                <motion.div
                  key={
                    showProjectForm
                      ? "projectForm"
                      : showContact
                      ? "form"
                      : "media"
                  }
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-end"
                >
                  {showProjectForm ? (
                    <StartProjectForm onClose={closeProjectForm} />
                  ) : showContact ? (
                    <ContactForm onClose={closeContact} />
                  ) : (
                    <div
                      className="relative w-full h-full rounded-[2rem] overflow-hidden group"
                      onMouseEnter={() => videoRef.current?.play()}
                      onMouseLeave={() => videoRef.current?.pause()}
                    >
                      <Image
                        src="/images/avokados.png"
                        alt="Avokado Visual"
                        fill
                        className="object-cover"
                        priority
                      />

                      <video
                        ref={videoRef}
                        src="/videos/avokado-vid.mp4"
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}