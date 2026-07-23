import localFont from "next/font/local";

/**
 * Display / body — Switzer (Fontshare, free for commercial use). A neo-grotesque
 * standing in for Aonik/Aeonik, which is a paid licence we don't hold. Swap the
 * src paths to drop in the real Aonik later.
 */
export const displaySans = localFont({
  src: [
    { path: "./fonts/Switzer-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Switzer-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Helvetica Neue", "Arial", "sans-serif"],
});

/**
 * Accent — Zodiak (Fontshare, free for commercial use). A high-contrast display
 * serif, used *only* in italic for emphasis words. The grotesque + didone-ish
 * serif pairing is what gives the site its editorial character.
 */
export const accentSerif = localFont({
  src: [
    { path: "./fonts/Zodiak-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Zodiak-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-zodiak",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
