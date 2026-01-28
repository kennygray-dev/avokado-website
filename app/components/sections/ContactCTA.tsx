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
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 gap-2 sm:gap-3 max-w-[1400px] mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
            >
              {/* All caps small text above main heading */}
              <motion.p
                className="uppercase tracking-[0.15em] font-neueMontreal text-white/90 text-center mb-2"
                style={{
                  fontSize: "clamp(12px, 1vw, 14px)",
                  lineHeight: "140%",
                  letterSpacing: "0.15em",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="font-medium">LET'S CREATE TOGETHER</span>
              </motion.p>

              {/* Main heading - ALL CAPS */}
              <motion.h1
                className="font-neueMontreal font-bold uppercase leading-[100%] tracking-[0.02em] flex justify-center text-white max-w-full break-words"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  textShadow: "0 0 24px rgba(255, 255, 255, 0.25)",
                  mixBlendMode: "difference",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                WORK WITH AVOKADO
              </motion.h1>

              {/* All caps small text below main heading */}
              <motion.p
                className="uppercase tracking-[0.15em] font-neueMontreal text-white/90 text-center mt-2 max-w-2xl"
                style={{
                  fontSize: "clamp(12px, 1vw, 14px)",
                  lineHeight: "160%",
                  letterSpacing: "0.15em",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                YOUR BRAND DESERVES MORE THAN JUST VISIBILITY.<br className="hidden sm:block" />
                <span className="font-medium">IT DESERVES IMPACT.</span>
              </motion.p>

              <motion.div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8 items-center justify-center">
                {!showProjectForm && (
                  <GreenButton
                    onClick={openProjectForm}
                    className="h-11 sm:h-12 md:h-14 px-6 sm:px-7 md:px-8 text-sm font-medium whitespace-nowrap rounded-full min-w-[150px] sm:min-w-[160px] flex items-center justify-center"
                  >
                    START A PROJECT
                  </GreenButton>
                )}
                {!showContact && (
                  <button
                    onClick={openContact}
                    className="h-11 sm:h-12 md:h-14 px-6 sm:px-7 md:px-8 text-sm rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 text-white uppercase tracking-[0.05em] min-w-[150px] sm:min-w-[160px] font-medium"
                  >
                    CONTACT US
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