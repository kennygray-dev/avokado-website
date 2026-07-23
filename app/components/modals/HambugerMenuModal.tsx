"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import InstagramIcon from "@/public/icons/Instagram";
import TwitterIcon from "@/public/icons/Twitter";
import LinkedinIcon from "@/public/icons/Linkedin";

interface HamburgerMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenuModal({ isOpen, onClose }: HamburgerMenuModalProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { label: "Our Services", href: "/services", show: pathname !== "/services" },
    { label: "About Us", href: "/about", show: pathname !== "/about" },
    { label: "Projects", href: "/#projects", show: true },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/avokado_ng/", icon: InstagramIcon },
    { label: "X (Twitter)", href: "https://x.com/avokado_ng/", icon: TwitterIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/avokado-ng/", icon: LinkedinIcon },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: 0.35,
              ease: "easeOut"
            }}
            className="fixed inset-0 z-[101] w-full h-full bg-ink shadow-2xl overflow-hidden"
          >
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime via-leaf to-transparent" />
            
            {/* Header */}
            <div className="relative p-8 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-white font-sans text-2xl font-light tracking-wide">
                  Menu
                </div>
                <motion.button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-3 rounded-none bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </motion.button>
              </div>
              <p className="text-white/40 font-sans text-sm mt-2">
                Navigation
              </p>
            </div>

            {/* Menu Links */}
            <div className="p-8 overflow-y-auto h-[calc(100vh-200px)] flex flex-col justify-center items-center">
              <div className="space-y-1 w-full max-w-3xl text-center">
                {menuItems.filter(item => item.show).map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="block group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.05 * index,
                      duration: 0.3,
                      ease: "easeOut" 
                    }}
                  >
                    <div className="py-6 border-b border-white/5 group-hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center justify-center">
                        <span className="font-sans text-5xl sm:text-6xl lg:text-7xl text-white group-hover:text-lime transition-colors duration-300 font-light">
                          {item.label}
                        </span>
                      </div>
                      <div className="mt-2 pl-1">
                        <span className="font-sans text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300">
                          {item.href.startsWith("#") ? "Scroll to section" : "Navigate to page"}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-10 flex justify-end">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-lime text-ink font-sans text-lg sm:text-xl font-medium hover:opacity-90 transition-all duration-200"
                >
                  Let&rsquo;s talk
                  <ArrowUpRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 to-transparent">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="font-sans text-white text-sm font-light">
                    © {currentYear} Avokado
                  </div>
                  <div className="font-sans text-white/40 text-xs mt-1">
                    Creating at the frequency of thought
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 hover:bg-white/5 rounded-none transition-all duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-10 h-10 text-white/80 hover:text-white transition-colors duration-200" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}