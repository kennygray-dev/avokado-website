"use client";

import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html lang="en" className="transition-colors duration-300">
      <head>
        <title>Avokado</title>
        <meta name="description" content="Creative Agency" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}> 
        {/* Fixed ThemeToggle on all pages */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}