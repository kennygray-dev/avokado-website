"use client";

import { motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
          <div className="relative w-full h-auto bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 shadow-xl flex flex-col gap-4">
            <CloseButton
              onClick={onClose}
              className="absolute -top-12 right-4 sm:-top-16 sm:right-6 w-14 h-14 text-xl font-bold"
            />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 sm:px-6 md:px-6 py-3 sm:py-4 md:py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:bg-white dark:focus:bg-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 sm:px-6 md:px-6 py-3 sm:py-4 md:py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:bg-white dark:focus:bg-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 sm:px-6 md:px-6 py-3 sm:py-4 md:py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:bg-white dark:focus:bg-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 sm:px-6 md:px-6 py-3 sm:py-4 md:py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:bg-white dark:focus:bg-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 sm:px-6 md:px-6 py-3 sm:py-4 md:py-4 outline-none resize-none bg-white dark:bg-zinc-900 text-black dark:text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:bg-white dark:focus:bg-zinc-800"
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded-xl bg-black text-white dark:bg-white dark:text-black py-3 sm:py-4 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}