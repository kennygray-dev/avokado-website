"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CloseButton from "../ui/CloseButton";
import { GreenButton } from "../ui/Buttons";
import { useEnquiry } from "./useEnquiry";

interface StartProjectFormProps {
  onClose: () => void;
}

const SERVICES = [
  "Web Development",
  "Web Design",
  "Photography",
  "Videography",
  "Editing",
  "Branding",
  "Social Media Management",
];

const FIELD =
  "w-full rounded-none border border-carbon/20 bg-paper px-5 py-3.5 text-body outline-none transition placeholder:text-muted focus:border-leaf focus:ring-2 focus:ring-leaf/30";

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function StartProjectForm({ onClose }: StartProjectFormProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const { status, error, submit } = useEnquiry("project");

  const toggleService = (service: string) =>
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );

  const canAdvance = step === 0 ? name.trim() && isValidEmail(email) : services.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Start a project with Avokado"
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
              <h2 className="mb-3 text-2xl font-bold">Thanks, {name.split(" ")[0]}.</h2>
              <p className="text-body">
                Your project brief is with us. We&rsquo;ll come back to you shortly.
              </p>
              <GreenButton className="mx-auto mt-8" onClick={onClose}>
                Close
              </GreenButton>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6">
              {/* Progress */}
              <div className="flex gap-2" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-none transition-colors ${
                      i <= step ? "bg-leaf" : "bg-carbon/15"
                    }`}
                  />
                ))}
              </div>

              {/* Values are carried in hidden inputs so the final submit sends
                  everything gathered across the three steps. */}
              <input type="hidden" name="name" value={name} />
              <input type="hidden" name="email" value={email} />
              <input type="hidden" name="services" value={services.join(", ")} />
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px]"
              />

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    className="flex flex-col gap-4"
                  >
                    <h2 className="text-2xl font-bold">Let&rsquo;s start a project</h2>
                    <label className="flex flex-col gap-2 text-sm text-body">
                      What&rsquo;s your name?
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={FIELD}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-body">
                      And your email?
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className={FIELD}
                      />
                    </label>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    className="flex flex-col gap-4"
                  >
                    <h2 className="text-2xl font-bold">
                      Hi {name.split(" ")[0]}, what do you need?
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => {
                        const active = services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggleService(service)}
                            className={`rounded-none border px-4 py-2 text-sm transition ${
                              active
                                ? "border-carbon bg-carbon text-paper"
                                : "border-carbon/20 text-body hover:border-leaf"
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    className="flex flex-col gap-4"
                  >
                    <h2 className="text-2xl font-bold">Tell us a little more</h2>
                    <label className="flex flex-col gap-2 text-sm text-body">
                      What are you building?
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="A sentence or two is plenty."
                        className="w-full resize-none rounded-none border border-carbon/20 bg-paper px-5 py-3.5 text-body outline-none transition placeholder:text-muted focus:border-leaf focus:ring-2 focus:ring-leaf/30"
                      />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between gap-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="text-sm text-muted underline underline-offset-4 hover:text-carbon"
                  >
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 2 ? (
                  <GreenButton
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canAdvance}
                  >
                    Continue
                  </GreenButton>
                ) : (
                  <GreenButton type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send brief"}
                  </GreenButton>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
