"use client";

/* ======================================================
   Imports
====================================================== */
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";
import ThemeToggle from "./ui/ThemeToggle";
import HamburgerMenuModal from "./components/modals/HambugerMenuModal";

/* ======================================================
   Font setup (CSS variables for global use)
====================================================== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ======================================================
   Root Layout
====================================================== */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  /* ---------------- UI State ---------------- */
  const [showServices, setShowServices] = useState(false); // Services dropdown
  const [scrolled, setScrolled] = useState(false); // Glass effect trigger
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger modal

  /* ---------------- Scroll listener ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Avokado</title>
        <meta name="description" content="Creative Agency" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        {/* ======================================================
            TOP NAVIGATION
            - Centered links
            - Right-aligned controls
        ======================================================= */}
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
          {/* Center navigation pill */}
          <div
            className={`pointer-events-auto flex items-center gap-12 rounded-full px-6 py-2 transition-all duration-300 ${
              scrolled
                ? "bg-white/60 dark:bg-black/35 backdrop-blur-xl border border-white/10 shadow-lg"
                : ""
            }`}
          >
            {/* ---------- OUR SERVICES (hover dropdown) ---------- */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <span className="text-sm tracking-wide cursor-pointer text-[#8FB850] dark:text-[#CEF17B]">
                OUR SERVICES
              </span>

              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 pt-2 w-[520px]"
                >
                  <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-6 text-sm opacity-90">
                      <div>
                        <p className="font-semibold border-b border-[#8FB850] pb-1 mb-2 inline-block">
                          Web Development
                        </p>
                        <ul className="space-y-1">
                          <li>Custom Development</li>
                          <li>Shopify</li>
                          <li>Webflow</li>
                          <li>Paystack Integration</li>
                          <li>WooCommerce</li>
                          <li>E‑commerce Websites</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold border-b border-[#8FB850] pb-1 mb-2 inline-block">
                          Design
                        </p>
                        <ul className="space-y-1">
                          <li>Branding</li>
                          <li>UI / UX Design</li>
                          <li>Web and App Design</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold border-b border-[#8FB850] pb-1 mb-2 inline-block">
                          Photography
                        </p>
                        <ul className="space-y-1">
                          <li>Product Photography</li>
                          <li>Brand Shoots</li>
                          <li>Campaign Shoots</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold border-b border-[#8FB850] pb-1 mb-2 inline-block">
                          Videography
                        </p>
                        <ul className="space-y-1">
                          <li>Brand Films</li>
                          <li>Social Media Content</li>
                          <li>Commercial Videos</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold border-b border-[#8FB850] pb-1 mb-2 inline-block">
                          Social Media
                        </p>
                        <ul className="space-y-1">
                          <li>Social Media Strategy</li>
                          <li>Content Creation</li>
                          <li>Campaign Management</li>
                          <li>Influencer Collaboration</li>
                          <li>Analytics & Reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ---------- About ---------- */}
            {pathname !== "/about" && (
              <a
                href="/about"
                className="hidden sm:block text-sm px-4 py-2 rounded-full border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                About Us
              </a>
            )}

            {/* ---------- Contact ---------- */}
            {pathname !== "/" && (
              <a
                href="/#contact"
                className="hidden sm:block text-sm px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black transition"
              >
                Contact Us
              </a>
            )}
          </div>
        </div>

        {/* ======================================================
            RIGHT CONTROLS (fixed to viewport edge)
        ======================================================= */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3 rounded-full px-3 py-2 bg-white/60 dark:bg-black/35 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg">
          {/* Aesthetic Hamburger Button */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="group relative h-10 w-10 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/15 shadow hover:scale-105 transition"
          >
            {/* Dot-based icon (modern, minimal) */}
            <span className="absolute inset-0 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-current group-hover:scale-125 transition" />
              <span className="h-1.5 w-1.5 rounded-full bg-current group-hover:scale-125 transition delay-75" />
              <span className="h-1.5 w-1.5 rounded-full bg-current group-hover:scale-125 transition delay-150" />
            </span>
          </button>

          {/* Light / Dark toggle */}
          <ThemeToggle />
        </div>

        {/* ======================================================
            HAMBURGER MENU MODAL
        ======================================================= */}
        <HamburgerMenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* ======================================================
            PAGE CONTENT
        ======================================================= */}
        <main className="w-full h-full border-b-2 border-black dark:border-white">
          {children}
        </main>
      </body>
    </html>
  );
}