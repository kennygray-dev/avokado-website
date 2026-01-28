"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HamburgerMenuModal from "./components/modals/HambugerMenuModal";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { GreenButton } from "./components/ui/Buttons";
import AvokadoHomeLogo from "../public/icons/AvokadoHomeLogo";

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
          className={`pointer-events-auto flex items-center gap-4 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-xl bg-black/40 border border-white/10 max-w-[calc(100%-40px)] sm:max-w-[calc(100%-56px)] md:max-w-[calc(100%-72px)] ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          {/* Left Links */}
          <div className="flex gap-3 text-white items-center flex-grow">
            <a href="/">
              <AvokadoHomeLogo className="w-18 h-5.5 sm:w-20 sm:h-6 md:w-22 md:h-6.5" />
            </a>
            {/* Inline links hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-4 md:gap-5">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button className="text-sm sm:text-sm md:text-base">Services</button>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-full sm:w-[480px] md:w-[550px] bg-black/80 backdrop-blur-xl rounded-md shadow-lg p-5 text-white flex flex-wrap gap-x-5 gap-y-6"
                  >
                    <div className="w-1/3 min-w-[150px]">
                      <h3 className="font-medium mb-2 border-b border-white/20 pb-1 text-sm">Web Development</h3>
                      <ul className="flex flex-col gap-1.5">
                        <li><a href="/services/custom-websites" className="hover:underline text-xs">Custom Websites</a></li>
                        <li><a href="/services/ecommerce" className="hover:underline text-xs">E-Commerce Solutions</a></li>
                        <li><a href="/services/web-app" className="hover:underline text-xs">Web Applications</a></li>
                        <li><a href="/services/cms" className="hover:underline text-xs">Content Management</a></li>
                        <li><a href="/services/shopify" className="hover:underline text-xs">Shopify</a></li>
                        <li><a href="/services/webflow" className="hover:underline text-xs">Webflow</a></li>
                        <li><a href="/services/paystack" className="hover:underline text-xs">Paystack Integration</a></li>
                        <li><a href="/services/woocommerce" className="hover:underline text-xs">WooCommerce</a></li>
                      </ul>
                    </div>
                    <div className="w-1/3 min-w-[150px]">
                      <h3 className="font-medium mb-2 border-b border-white/20 pb-1 text-sm">Design</h3>
                      <ul className="flex flex-col gap-1.5">
                        <li><a href="/services/graphic-design" className="hover:underline text-xs">Graphic Design</a></li>
                        <li><a href="/services/ui-ux" className="hover:underline text-xs">UI/UX Design</a></li>
                        <li><a href="/services/branding" className="hover:underline text-xs">Brand Identity</a></li>
                      </ul>
                    </div>
                    <div className="w-1/3 min-w-[150px]">
                      <h3 className="font-medium mb-2 border-b border-white/20 pb-1 text-sm">Photography</h3>
                      <ul className="flex flex-col gap-1.5">
                        <li><a href="/services/photography" className="hover:underline text-xs">Photography</a></li>
                      </ul>
                    </div>
                    <div className="w-1/3 min-w-[150px]">
                      <h3 className="font-medium mb-2 border-b border-white/20 pb-1 text-sm">Videography</h3>
                      <ul className="flex flex-col gap-1.5">
                        <li><a href="/services/videography" className="hover:underline text-xs">Videography</a></li>
                      </ul>
                    </div>
                    <div className="w-1/3 min-w-[150px]">
                      <h3 className="font-medium mb-2 border-b border-white/20 pb-1 text-sm">Social Media</h3>
                      <ul className="flex flex-col gap-1.5">
                        <li><a href="/services/social-media" className="hover:underline text-xs">Social Media Management</a></li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>

              {pathname !== "/about" && <a href="/about" className="text-sm sm:text-sm md:text-base">About Us</a>}
              {!atContact && (
                <button onClick={scrollToContact} className="text-sm sm:text-sm md:text-base">Contact</button>
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex gap-3 items-center text-white">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-1.5 sm:p-2 md:p-2 rounded-full hover:bg-gray-800"
              aria-label="Open menu"
            >
              <Bars3BottomRightIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
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