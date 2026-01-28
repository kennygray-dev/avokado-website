"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
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
    { label: "Home", href: "/", show: true },
    { label: "Our Services", href: "#services", show: true },
    { label: "Contact", href: "#contact", show: true },
    { label: "About Us", href: "/about", show: pathname !== "/about" },
    { label: "Projects", href: "#projects", show: true },
    { label: "Why Avokado", href: "#why-us", show: true },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", icon: InstagramIcon },
    { label: "X (Twitter)", href: "#", icon: TwitterIcon },
    { label: "LinkedIn", href: "#", icon: LinkedinIcon },
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 25,
              mass: 0.8 
            }}
            className="fixed top-0 right-0 bottom-0 z-[101] w-full sm:w-[480px] bg-gradient-to-b from-[#111111] to-[#191919] border-l border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8FB850] via-[#6A994E] to-transparent" />
            
            {/* Header */}
            <div className="relative p-8 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-white font-neueMontreal text-2xl font-light tracking-wide">
                  Menu
                </div>
                <motion.button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </motion.button>
              </div>
              <p className="text-white/40 font-neueMontreal text-sm mt-2">
                Navigation
              </p>
            </div>

            {/* Menu Links */}
            <div className="p-8 overflow-y-auto h-[calc(100vh-200px)]">
              <div className="space-y-1">
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
                      <div className="flex items-center justify-between">
                        <span className="font-neueMontreal text-3xl sm:text-4xl text-white group-hover:text-[#8FB850] transition-colors duration-300 font-light">
                          {item.label}
                        </span>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#8FB850]" />
                        </motion.div>
                      </div>
                      <div className="mt-2 pl-1">
                        <span className="font-neueMontreal text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300">
                          {item.href.startsWith("#") ? "Scroll to section" : "Navigate to page"}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="font-neueMontreal text-white text-sm font-light">
                    © {currentYear} Avokado
                  </div>
                  <div className="font-neueMontreal text-white/40 text-xs mt-1">
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
                        className="p-3 hover:bg-white/5 rounded-full transition-all duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-6 h-6 text-white/70 hover:text-white transition-colors duration-200" />
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