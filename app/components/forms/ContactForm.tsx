"use client";

import { motion } from "framer-motion";
import CloseButton from "../../ui/CloseButton";

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="relative w-full max-w-md md:max-w-lg">
        <CloseButton
          onClick={onClose}
          className="absolute -top-10 -right-10 w-14 h-14 text-xl font-bold"
        />
        <div className="w-full h-auto bg-white dark:bg-zinc-900 rounded-[2.5rem] p-6 md:p-8 shadow-xl flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white focus:bg-white dark:focus:bg-zinc-800"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white focus:bg-white dark:focus:bg-zinc-800"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white focus:bg-white dark:focus:bg-zinc-800"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white focus:bg-white dark:focus:bg-zinc-800"
          />
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none resize-none bg-white dark:bg-zinc-900 text-black dark:text-white focus:bg-white dark:focus:bg-zinc-800"
          />
        </div>
          <button
            type="submit"
            className="mt-4 rounded-[2rem] bg-black text-white dark:bg-white dark:text-black py-4 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition font-semibold"
          >
            Send Message
          </button>
        </div>
      </div>
    </motion.div>
  );
}