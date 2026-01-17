"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";
import ThemeToggle from "./ui/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <title>Avokado</title>
        <meta name="description" content="Creative Agency" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}>
        {/* Fixed ThemeToggle + Nav */}
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 transition-all duration-300 ${scrolled ? "rounded-full px-4 py-2 bg-white/60 dark:bg-black/50 backdrop-blur-md shadow-lg" : ""}`}>
          {/* OUR SERVICES hover for top nav */}
          <div className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
            <span className="font-normal text-sm cursor-pointer tracking-wide text-[#8FB850] dark:text-[#CEF17B]">OUR SERVICES</span>
            {showServices && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute right-0 mt-0 pt-2 w-[520px]">
                <div className="border border-black/10 dark:border-white/15 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-xl p-6">
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2 border-b border-[#8FB850] dark:border-[#CEF17B] pb-1 inline-block">Web Development</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Custom Development</li>
                        <li>Shopify</li>
                        <li>Webflow</li>
                        <li>Paystack Integration</li>
                        <li>WooCommerce</li>
                        <li>E‑commerce Websites</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-[#8FB850] dark:border-[#CEF17B] pb-1 inline-block">Design</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Branding</li>
                        <li>UI / UX Design</li>
                        <li>Web and App Design</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-[#8FB850] dark:border-[#CEF17B] pb-1 inline-block">Photography</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Product Photography</li>
                        <li>Brand Shoots</li>
                        <li>Campaign Shoots</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-[#8FB850] dark:border-[#CEF17B] pb-1 inline-block">Videography</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Brand Films</li>
                        <li>Social Media Content</li>
                        <li>Commercial Videos</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-[#8FB850] dark:border-[#CEF17B] pb-1 inline-block">Social Media</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
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

          {pathname !== "/" && (
            <a href="/#contact" className="h-9 px-4 rounded-full bg-black text-white text-sm flex items-center justify-center hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-300">
              Contact Us
            </a>
          )}
          {pathname !== "/about" && (
            <a href="/about" className="h-9 px-4 rounded-full border border-black/15 text-sm flex items-center justify-center hover:bg-black/5 transition dark:border-white/20 dark:hover:bg-white/10">
              About Us
            </a>
          )}

          {/* Hamburger button */}
          <button onClick={() => setMenuOpen(true)} className="relative h-9 w-9 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition" aria-label="Open menu">
            <span className="absolute h-[2px] w-4 bg-current -translate-y-1.5"></span>
            <span className="absolute h-[2px] w-4 bg-current"></span>
            <span className="absolute h-[2px] w-4 bg-current translate-y-1.5"></span>
          </button>

          <ThemeToggle />
        </div>

        {/* Hamburger menu modal */}
        {menuOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95, x: 100, y: 100 }} animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} exit={{ opacity: 0, scale: 0.95, x: 100, y: 100 }} transition={{ duration: 0.4, ease: "easeOut" }} className="fixed bottom-4 right-4 z-[60] w-[90vw] h-[85vh] rounded-3xl bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-2xl p-8 flex flex-col">
            {/* Close button */}
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-8xl font-thin text-black dark:text-white hover:rotate-6 hover:scale-110 transition-transform">×</button>

            {/* Menu Content */}
            <div className="mt-12 flex flex-col gap-8 text-5xl font-extrabold">
              <div className="relative w-fit cursor-pointer">
                <span onClick={() => setShowServices(!showServices)} className="text-8xl font-extrabold hover:underline hover:underline-offset-8 hover:decoration-[#8FB850] hover:decoration-1 transition">
                  OUR SERVICES
                </span>
                {showServices && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="absolute left-0 top-full mt-4 text-3xl font-bold opacity-95">
                    Web · Design · Photo · Video · Social
                  </motion.div>
                )}
              </div>

              {pathname !== "/about" && (
                <a href="/about" onClick={() => setMenuOpen(false)} className="text-6xl font-extrabold hover:underline hover:underline-offset-8 hover:decoration-[#8FB850] hover:decoration-1 transition">
                  About Us
                </a>
              )}

              {pathname !== "/" && (
                <a href="/#contact" onClick={() => setMenuOpen(false)} className="text-6xl font-extrabold hover:underline hover:underline-offset-8 hover:decoration-[#8FB850] hover:decoration-1 transition">
                  Contact
                </a>
              )}
            </div>

            {/* Footer */}
            <div className="mt-auto text-sm opacity-50">© Avokado</div>
          </motion.div>
        )}

        <main className="w-full h-full border-b-2 border-black dark:border-white">
          {children}
        </main>
      </body>
    </html>
  );
}