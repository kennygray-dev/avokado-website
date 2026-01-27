"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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
            className="fixed inset-0 z-[50] bg-white/30 backdrop-blur-3xl"
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
            className="fixed bottom-4 right-4 z-[60] w-full h-[80vh] sm:w-[60vw] sm:h-[85vh] rounded-3xl bg-white/60 backdrop-blur-3xl border border-white/20 shadow-xl p-4 sm:p-8 flex flex-col"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-white/30 text-4xl sm:text-6xl font-thin transition"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              ×
            </motion.button>

            {/* Scrollable Menu Links Container */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent smooth-scroll">
              <motion.div
                className="mt-12 flex flex-col gap-6 sm:gap-10 font-light text-black"
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
                  className="relative text-4xl sm:text-8xl cursor-pointer font-light"
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
                    className="relative text-4xl sm:text-8xl cursor-pointer font-light"
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22, mass: 0.6 } },
                    }}
                  >
                    About Us.
                  </motion.a>
                )}
                <motion.a
                  href="/#contact"
                  onClick={onClose}
                  className="relative text-4xl sm:text-8xl cursor-pointer font-light"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22, mass: 0.6 } },
                  }}
                >
                  Contact.
                </motion.a>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="mt-auto text-sm opacity-50 text-black">© Avokado</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}