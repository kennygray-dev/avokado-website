"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GreenButton } from "./ui/Buttons";
import CloseButton from "./ui/CloseButton";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#contact") {
      setShowContact(true);
    }
  }, []);

  const openContact = () => {
    window.history.replaceState(null, "", "#contact");
    setShowContact(true);
  };

  const closeContact = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowContact(false);
  };

  return (
    <div className="w-full h-screen bg-zinc-50 dark:bg-black flex items-center justify-center overflow-hidden">
      <main className="w-full h-full bg-white dark:bg-black">
        <motion.div
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex h-full"
        >

          {/* ================= HERO SECTION ================= */}
          <section className="w-screen flex-shrink-0 h-full flex items-center justify-center">
            <div className="mx-auto flex w-full max-w-7xl h-full flex-col md:flex-row items-center justify-between gap-16 px-8 md:px-16">

              {/* LEFT CONTENT */}
              <div className="flex flex-col w-full md:w-1/2 gap-6 justify-center items-start">
                <Image
                  src="/avokado.svg"
                  alt="Avokado Logo"
                  width={100}
                  height={20}
                  className="dark:invert"
                  priority
                />

                <p className="text-lg text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                  LETS DO SOMETHING
                </p>

                {/* Animated Headline */}
                <motion.h1
                  className="text-6xl sm:text-8xl font-bold text-black dark:text-zinc-50 leading-tight flex"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  {"CREATIVE.".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  {!showContact && (
                    <GreenButton onClick={openContact}>
                      Contact Us
                    </GreenButton>
                  )}

                  <Link
                    href="/about"
                    className="h-12 px-6 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center hover:bg-black/5 dark:hover:bg-zinc-800 transition flex items-center justify-center"
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full md:w-1/2 relative h-[80vh] flex items-center justify-end">
                <motion.div
                  key={showContact ? "form" : playVideo ? "video" : "image"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-end"
                >
                  {!showContact && !playVideo ? (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayVideo(true)}
                    >
                      <Image
                        src="/images/avokados.png"
                        alt="Avokado Visual"
                        fill
                        className="object-contain rounded-[2rem]"
                        priority
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/40 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : !showContact && playVideo ? (
                    <video
                      src="/videos/avokado-vid.mp4"
                      autoPlay
                      muted
                      loop
                      controls
                      className="w-full h-full object-contain rounded-[2rem]"
                    />
                  ) : (
                    <>
                      {/* CLOSE BUTTON */}
                      <CloseButton
                        onClick={closeContact}
                        className="absolute -top-6 -right-6 w-14 h-14 text-xl font-bold"
                      />

                      {/* CONTACT FORM */}
                      <form className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-xl flex flex-col gap-4">
                        <input
                          type="text"
                          placeholder="Name"
                          className="rounded-xl border px-4 py-3 outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="rounded-xl border px-4 py-3 outline-none"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="rounded-xl border px-4 py-3 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          className="rounded-xl border px-4 py-3 outline-none"
                        />
                        <textarea
                          placeholder="Message"
                          rows={4}
                          className="rounded-xl border px-4 py-3 outline-none resize-none"
                        />
                        <button
                          type="submit"
                          className="mt-2 rounded-full bg-black text-white py-3 hover:bg-zinc-800 transition"
                        >
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </motion.div>
              </div>

            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
}