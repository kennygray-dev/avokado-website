"use client";

import { motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";
import { GreenButton } from "../ui/Buttons";
import { useEnquiry } from "./useEnquiry";

interface ContactFormProps {
  onClose: () => void;
}

const FIELD =
  "w-full rounded-none border border-carbon/20 bg-paper px-5 py-3.5 text-body outline-none transition placeholder:text-muted focus:border-leaf focus:ring-2 focus:ring-leaf/30";

export default function ContactForm({ onClose }: ContactFormProps) {
  const { status, error, submit } = useEnquiry("contact");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact Avokado"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-lg"
      >
        <CloseButton
          onClick={onClose}
          className="absolute -top-14 right-0 h-12 w-12 text-xl font-bold"
        />

        <div className="on-light rounded-none bg-paper p-6 shadow-xl sm:p-8">
          {status === "sent" ? (
            <div className="py-8 text-center">
              <h2 className="mb-3 text-2xl font-bold">Message sent.</h2>
              <p className="text-body">
                Thanks for reaching out — we&rsquo;ll be in touch shortly.
              </p>
              <GreenButton className="mx-auto mt-8" onClick={onClose}>
                Close
              </GreenButton>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Get in touch</h2>

              {/* Honeypot — hidden from users, catches naive bots. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px]"
              />

              <input name="name" required placeholder="Name" className={FIELD} />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className={FIELD}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className={FIELD}
              />
              <input name="subject" placeholder="Subject" className={FIELD} />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className={`${FIELD} resize-none`}
              />

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <GreenButton type="submit" disabled={status === "sending"} className="mt-2">
                {status === "sending" ? "Sending…" : "Send message"}
              </GreenButton>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
