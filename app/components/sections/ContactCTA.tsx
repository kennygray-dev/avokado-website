"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GreenButton } from "../ui/Buttons";
import ContactForm from "../forms/ContactForm";
import StartProjectForm from "../forms/StartProjectForm";

interface ContactCTAProps {
  id?: string;
  openExternally?: boolean; // opens Contact form when true
}

export default function ContactCTA({ id, openExternally }: ContactCTAProps) {
  const [showContact, setShowContact] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact" || openExternally) {
      setShowContact(true);
    } else if (hash.startsWith("#project")) {
      setShowProjectForm(true);
    }
  }, [openExternally]);

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
    <div id={id} className="w-full min-h-screen bg-black transition-colors duration-300 overflow-x-hidden relative">
      <main className="w-full h-full relative">
        <div className="transition-all duration-300">
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
            <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
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
                    className="md:w-[100px] md:h-[20px]"
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