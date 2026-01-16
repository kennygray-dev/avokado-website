"use client";

import { useEffect, useState } from "react";

// Heroicons SVG components
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");

  // Initialize from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark" || saved === "system") {
      setTheme(saved);
    }
  }, []);

  const applyTheme = (newTheme: "system" | "light" | "dark") => {
    const html = document.documentElement;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      html.classList.remove("dark");
    } else if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      // System
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => applyTheme("system")}
        title="System mode"
        className={`h-10 w-10 flex items-center justify-center rounded-full transition-colors ${
          theme === "system"
            ? "bg-[#ccf17b] text-black"
            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
        }`}
      >
        <ComputerIcon />
      </button>

      <button
        onClick={() => applyTheme("light")}
        title="Light mode"
        className={`h-10 w-10 flex items-center justify-center rounded-full transition-colors ${
          theme === "light"
            ? "bg-[#ccf17b] text-black"
            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
        }`}
      >
        <SunIcon />
      </button>

      <button
        onClick={() => applyTheme("dark")}
        title="Dark mode"
        className={`h-10 w-10 flex items-center justify-center rounded-full transition-colors ${
          theme === "dark"
            ? "bg-[#ccf17b] text-black"
            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
        }`}
      >
        <MoonIcon />
      </button>
    </div>
  );
}