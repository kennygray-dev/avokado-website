"use client";

/* ======================================================
   Imports
====================================================== */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/* ======================================================
   HamburgerMenuModal Component
====================================================== */
interface HamburgerMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenuModal({ isOpen, onClose }: HamburgerMenuModalProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 60 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.6 }}
            className="fixed bottom-4 right-4 z-[60] w-[60vw] h-[85vh] rounded-3xl bg-white/80 dark:bg-black/80 dark:border dark:border-zinc-700 backdrop-blur-xl shadow-2xl p-8 flex flex-col"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center rounded-full border border-zinc-400 dark:border-zinc-600 text-6xl font-thin transition"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              ×
            </motion.button>

            {/* Menu Links */}
            <motion.div
              className="mt-12 flex flex-col gap-10 font-light"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.08,
                  },
                },
                hidden: {},
              }}
            >
              {/* Our Services */}
              <motion.span
                className="relative text-8xl cursor-pointer font-light text-zinc-700 dark:text-white"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22, mass: 0.6 } },
                }}
              >
                Our Services.
              </motion.span>

              {/* Other links */}
              {pathname !== "/about" && (
                <motion.a
                  href="/about"
                  onClick={onClose}
                  className="relative text-8xl cursor-pointer font-light text-zinc-700 dark:text-white"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22, mass: 0.6 } },
                  }}
                >
                  About Us.
                </motion.a>
              )}
              {pathname !== "/" && (
                <motion.a
                  href="/#contact"
                  onClick={onClose}
                  className="relative text-8xl cursor-pointer font-light text-zinc-700 dark:text-white"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22, mass: 0.6 } },
                  }}
                >
                  Contact.
                </motion.a>
              )}
            </motion.div>

            {/* Footer */}
            <div className="mt-auto text-sm opacity-50">© Avokado</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}