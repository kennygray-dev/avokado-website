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
    <div id={id} className="w-full min-h-screen bg-[var(--background)] transition-colors duration-300 overflow-x-hidden relative">
      <main className="w-full h-full relative">
        <div className="transition-all duration-300">
          {/* Background image with padding and rounded corners */}
          <div className="absolute inset-0 m-2 sm:m-3 rounded-2xl overflow-hidden">
            <Image
              src="/images/avokado1.png"
              alt="Avokado Visual"
              fill
              className="object-cover w-full h-full rounded-2xl"
              priority
              quality={70}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="/images/avokados-blur.png"
            />
            <div className="absolute inset-0 bg-black/70 pointer-events-none rounded-2xl"></div>
          </div>

          {/* Overlay content centered */}
          <div className="relative w-full min-h-screen flex items-center justify-center py-24">
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 gap-4 sm:gap-6 max-w-[1400px] mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
            >
              <motion.h1
                className="font-neueMontreal font-bold text-[40px] sm:text-[52px] md:text-[64px] leading-[100%] tracking-[0%] flex justify-center mix-blend-difference text-white [text-shadow:_0_0_24px_rgb(255_255_255_/_25%)] max-w-full break-words"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Work with Avokado
              </motion.h1>
              <motion.p
                className="font-neueMontreal font-normal text-[20px] sm:text-[20px] md:text-[20px] leading-[100%] tracking-[0%] text-center text-white mt-4 sm:px-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Your brand deserves more than just visibility.<br />It deserves impact.
              </motion.p>
              <motion.div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4 items-center justify-center">
                {!showProjectForm && (
                  <GreenButton
                    onClick={openProjectForm}
                    className="h-10 sm:h-12 md:h-16 w-32 sm:w-36 md:w-40 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap"
                  >
                    Start a Project
                  </GreenButton>
                )}
                {!showContact && (
                  <button
                    onClick={openContact}
                    className="h-10 sm:h-12 px-4 md:px-6 text-xs sm:text-sm md:text-base rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-transform duration-300 text-white"
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