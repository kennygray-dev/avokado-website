"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HamburgerMenuModal from "./components/modals/HambugerMenuModal";
import { HomeIcon } from "@heroicons/react/24/solid";
import { GreenButton } from "./components/ui/Buttons";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setAtContact(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-4 inset-x-0 z-[100] flex justify-center pointer-events-none">
        {/* Glasmorphic pill around actual items */}
        <div
          className={`pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-xl bg-black/40 border border-white/10 max-w-[calc(100%-64px)] ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          {/* Left Links */}
          <div className="flex gap-4 text-white items-center flex-grow">
            {pathname !== "/" && (
              <GreenButton
                onClick={() => router.push("/")}
                className="h-12 w-12 rounded-full flex items-center justify-center"
              >
                <HomeIcon className="w-6 h-6" />
              </GreenButton>
            )}
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button>Services</button>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-black/80 backdrop-blur-lg rounded-md shadow-lg p-6 text-white flex flex-wrap gap-x-6 gap-y-8"
                  style={{ maxWidth: '600px' }}
                >
                  <div className="w-1/3 min-w-[180px]">
                    <h3 className="font-medium mb-2 border-b border-white/20 pb-1">Web Development</h3>
                    <ul className="flex flex-col gap-2">
                      <li><a href="/services/custom-websites" className="hover:underline">Custom Websites</a></li>
                      <li><a href="/services/ecommerce" className="hover:underline">E-Commerce Solutions</a></li>
                      <li><a href="/services/web-app" className="hover:underline">Web Applications</a></li>
                      <li><a href="/services/cms" className="hover:underline">Content Management</a></li>
                      <li><a href="/services/shopify" className="hover:underline">Shopify</a></li>
                      <li><a href="/services/webflow" className="hover:underline">Webflow</a></li>
                      <li><a href="/services/paystack" className="hover:underline">Paystack Integration</a></li>
                      <li><a href="/services/woocommerce" className="hover:underline">WooCommerce</a></li>
                    </ul>
                  </div>
                  <div className="w-1/3 min-w-[180px]">
                    <h3 className="font-medium mb-2 border-b border-white/20 pb-1">Design</h3>
                    <ul className="flex flex-col gap-2">
                      <li><a href="/services/graphic-design" className="hover:underline">Graphic Design</a></li>
                      <li><a href="/services/ui-ux" className="hover:underline">UI/UX Design</a></li>
                      <li><a href="/services/branding" className="hover:underline">Brand Identity</a></li>
                    </ul>
                  </div>
                  <div className="w-1/3 min-w-[180px]">
                    <h3 className="font-medium mb-2 border-b border-white/20 pb-1">Photography</h3>
                    <ul className="flex flex-col gap-2">
                      <li><a href="/services/photography" className="hover:underline">Photography</a></li>
                    </ul>
                  </div>
                  <div className="w-1/3 min-w-[180px]">
                    <h3 className="font-medium mb-2 border-b border-white/20 pb-1">Videography</h3>
                    <ul className="flex flex-col gap-2">
                      <li><a href="/services/videography" className="hover:underline">Videography</a></li>
                    </ul>
                  </div>
                  <div className="w-1/3 min-w-[180px]">
                    <h3 className="font-medium mb-2 border-b border-white/20 pb-1">Social Media</h3>
                    <ul className="flex flex-col gap-2">
                      <li><a href="/services/social-media" className="hover:underline">Social Media Management</a></li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {pathname !== "/about" && <a href="/about">About Us</a>}
            {!atContact && (
              <button onClick={scrollToContact}>Contact</button>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex gap-4 items-center text-white">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-full hover:bg-gray-800"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Modal */}
      <HamburgerMenuModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}