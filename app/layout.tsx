"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <title>Avokado</title>
        <meta name="description" content="Creative Agency" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}> 
        {/* Fixed ThemeToggle on all pages */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <span className="font-normal text-sm cursor-pointer tracking-wide text-[#8FB850] dark:text-[#CEF17B]">
              OUR SERVICES
            </span>
            {showServices && (
              <div className="absolute right-0 mt-0 pt-2 w-[520px]">
                <div className="border border-black/10 dark:border-white/15 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-xl p-6">
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2 border-b border-black dark:border-white pb-1 inline-block">Web Development</p>
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
                      <p className="font-semibold mb-2 border-b border-black dark:border-white pb-1 inline-block">Design</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Branding</li>
                        <li>UI / UX Design</li>
                        <li>Web and App Design</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-black dark:border-white pb-1 inline-block">Photography</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Product Photography</li>
                        <li>Brand Shoots</li>
                        <li>Campaign Shoots</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-black dark:border-white pb-1 inline-block">Videography</p>
                      <ul className="space-y-1 text-zinc-600 dark:text-white">
                        <li>Brand Films</li>
                        <li>Social Media Content</li>
                        <li>Commercial Videos</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 border-b border-black dark:border-white pb-1 inline-block">Social Media</p>
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
              </div>
            )}
          </div>
          {pathname !== "/" && (
            <a
              href="/#contact"
              className="h-9 px-4 rounded-full bg-black text-white text-sm flex items-center justify-center hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-300"
            >
              Contact Us
            </a>
          )}
          {pathname !== "/about" && (
            <a
              href="/about"
              className="h-9 px-4 rounded-full border border-black/15 text-sm flex items-center justify-center hover:bg-black/5 transition dark:border-white/20 dark:hover:bg-white/10"
            >
              About Us
            </a>
          )}
          <ThemeToggle />
        </div>
        <main className="w-full h-full border-b-2 border-black dark:border-white">
          {children}
        </main>
      </body>
    </html>
  );
}