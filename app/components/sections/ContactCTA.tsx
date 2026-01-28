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
          {/* Background image with thin white border around image on mobile */}
          <div className="absolute inset-0 m-2 sm:m-3 rounded-2xl overflow-hidden border border-white/20 sm:border-0">
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
          <div className="relative w-full min-h-screen flex items-center justify-center py-16 sm:py-24">
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 gap-3 sm:gap-4 max-w-[1400px] mx-auto w-full"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
            >
              {/* All caps small text above main heading */}
              <motion.div
                className="uppercase tracking-[0.15em] font-neueMontreal text-white/90 text-center mb-4 sm:mb-6"
                style={{
                  fontSize: "clamp(11px, 1.2vw, 14px)",
                  lineHeight: "140%",
                  letterSpacing: "0.15em",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="font-medium">LET'S CREATE TOGETHER</p>
              </motion.div>

              {/* Main heading - ALL CAPS */}
              <motion.h1
                className="font-neueMontreal font-bold uppercase leading-[90%] sm:leading-[100%] text-white w-full break-words px-2 sm:px-0"
                style={{
                  fontSize: "clamp(2.2rem, 9vw, 5rem)",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                  mixBlendMode: "difference",
                  letterSpacing: "0.02em",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="block sm:hidden">
                  WORK<br />WITH<br />AVOKADO
                </span>
                <span className="hidden sm:block">
                  WORK WITH AVOKADO
                </span>
              </motion.h1>

              {/* All caps small text below main heading */}
              <motion.div
                className="uppercase tracking-[0.15em] font-neueMontreal text-white/90 text-center mt-4 sm:mt-6 max-w-xl px-2 sm:px-0"
                style={{
                  fontSize: "clamp(11px, 1.2vw, 14px)",
                  lineHeight: "160%",
                  letterSpacing: "0.15em",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="hidden sm:block">
                  <p>YOUR BRAND DESERVES MORE THAN JUST VISIBILITY.</p>
                  <p className="font-medium mt-1">IT DESERVES IMPACT.</p>
                </div>
                <div className="sm:hidden">
                  <p>YOUR BRAND DESERVES</p>
                  <p>MORE THAN JUST VISIBILITY.</p>
                  <p className="font-medium mt-2">IT DESERVES IMPACT.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 items-center justify-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {!showProjectForm && (
                  <GreenButton
                    onClick={openProjectForm}
                    className="h-12 sm:h-12 md:h-14 px-8 sm:px-7 md:px-8 text-sm font-medium whitespace-nowrap rounded-full min-w-[180px] sm:min-w-[150px] flex items-center justify-center"
                  >
                    START A PROJECT
                  </GreenButton>
                )}
                {!showContact && (
                  <button
                    onClick={openContact}
                    className="h-12 sm:h-12 md:h-14 px-8 sm:px-7 md:px-8 text-sm rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 text-white uppercase tracking-[0.05em] min-w-[180px] sm:min-w-[150px] font-medium"
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