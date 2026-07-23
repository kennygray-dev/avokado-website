import type { Metadata } from "next";
import Navbar from "./nav"; // global navbar
import { displaySans, accentSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avokado.ng"),
  title: {
    default: "Avokado — Creating at the frequency of thought",
    template: "%s — Avokado",
  },
  description:
    "Avokado is a creative agency building brands that look, feel, and perform better — branding, photography, videography, web and social.",
  keywords: [
    "creative agency",
    "branding",
    "photography",
    "videography",
    "web design",
    "social media",
  ],
  openGraph: {
    type: "website",
    siteName: "Avokado",
    title: "Avokado — Creating at the frequency of thought",
    description:
      "A creative agency building brands that look, feel, and perform better.",
    url: "https://www.avokado.ng",
    images: [{ url: "/images/avokado1.png", width: 1200, height: 630, alt: "Avokado" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avokado_ng",
    title: "Avokado — Creating at the frequency of thought",
    description:
      "A creative agency building brands that look, feel, and perform better.",
    images: ["/images/avokado1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0f3d2e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displaySans.variable} ${accentSerif.variable}`}>
      <body className="bg-paper text-body antialiased">
        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
