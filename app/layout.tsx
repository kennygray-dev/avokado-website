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