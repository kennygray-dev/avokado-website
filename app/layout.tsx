"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./nav"; // global navbar
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Avokado</title>
        <meta name="description" content="Creative Agency" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Apple Touch Icon for iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Optional: PNG fallback for older browsers */}
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#191919" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}