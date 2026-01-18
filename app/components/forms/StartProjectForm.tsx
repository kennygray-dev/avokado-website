"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CloseButton from "../../ui/CloseButton";

interface StartProjectFormProps {
  onClose: () => void;
}

export default function StartProjectForm({ onClose }: StartProjectFormProps) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [showEmail, setShowEmail] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const toggleService = (service: string) => {
    setServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const formatServices = () => {
    if (services.length === 1) return services[0];
    if (services.length === 2) return `${services[0]} and ${services[1]}`;
    return `${services.slice(0, -1).join(", ")}, and ${services[services.length - 1]}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >

      {/* Step 0: Name & Email */}
      {step === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md md:max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-xl flex flex-col gap-6"
        >
          {/* Close Button */}
          <CloseButton onClick={onClose} className="absolute -top-16 -right-2 w-14 h-14 text-xl font-bold" />
          <div className="flex flex-col gap-2">
            <label className="text-zinc-700 dark:text-zinc-300">What's your name?</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && name.trim() && setShowEmail(true)}
              />
              {!showEmail && (
                <button
                  onClick={() => name.trim() && setShowEmail(true)}
                  className="h-12 w-12 rounded-full bg-[#ccf17b] flex items-center justify-center hover:bg-[#b8e66c] transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {showEmail && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
              <label className="text-zinc-700 dark:text-zinc-300">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-[2rem] border border-zinc-300 dark:border-zinc-700 px-6 py-4 outline-none bg-white dark:bg-zinc-900 text-black dark:text-white"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && isValidEmail(email) && setStep(1)}
              />
              {isValidEmail(email) && (
                <button
                  onClick={() => setStep(1)}
                  className="mt-4 w-full rounded-[2rem] bg-black text-white dark:bg-white dark:text-black py-4 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition font-semibold"
                >
                  Next
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Step 1: Services */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md md:max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-xl flex flex-col gap-6"
        >
          {/* Close Button */}
          <CloseButton onClick={onClose} className="absolute -top-16 -right-2 w-14 h-14 text-xl font-bold" />
          
          <label className="text-zinc-700 dark:text-zinc-300 text-lg font-medium">
            Hi, {name}, what services would you need?
          </label>
          <div className="flex flex-wrap gap-3">
            {["Web Development", "Web Design", "Photography", "Videography", "Editing", "Branding", "Social Media Management"].map(service => (
              <motion.button
                key={service}
                onClick={() => toggleService(service)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                  services.includes(service)
                    ? "bg-[#ccf17b] border-[#ccf17b] shadow-lg"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-[#ccf17b]/50"
                }`}
              >
                <span className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  services.includes(service) 
                    ? "text-black" 
                    : "text-zinc-700 dark:text-zinc-200"
                }`}>
                  {service}
                </span>
              </motion.button>
            ))}
          </div>
          {services.length > 0 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setStep(2)}
              className="mt-2 rounded-[2rem] bg-black text-white dark:bg-white dark:text-black py-4 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition font-semibold"
            >
              Next
            </motion.button>
          )}
          <button
            onClick={() => setStep(step - 1)}
            className="absolute -bottom-6 -left-6 w-14 h-14 bg-[#ccf17b] text-black rounded-full flex items-center justify-center hover:bg-[#b8e66c] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Step 2: Review */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md md:max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-xl flex flex-col gap-6"
        >
          {/* Close Button */}
          <CloseButton onClick={onClose} className="absolute -top-16 -right-2 w-14 h-14 text-xl font-bold" />
          

          <label className="text-zinc-700 dark:text-zinc-300 text-lg font-medium">
            Review Your Message
          </label>

          {/* Message Template */}
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="mb-4">Hi Avokado! 👋</p>
            <p className="mb-4">
              My name is <span className="font-semibold text-black dark:text-white cursor-pointer hover:text-[#ccf17b] transition" onClick={() => setStep(0)}>{name}</span> and I would like to work with you on {formatServices()}.
            </p>
            <p className="mb-4">
              I'm excited to discuss how we can bring this project to life together!
            </p>
            <p>
              You can reach me at <span className="font-semibold text-black dark:text-white cursor-pointer hover:text-[#ccf17b] transition" onClick={() => setStep(0)}>{email}</span>.
            </p>
            <p className="mt-6">Looking forward to hearing from you!</p>
            <p className="mt-2">Best regards,<br /><span className="font-semibold">{name}</span></p>
          </div>

          {/* Info text */}
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
            Click on any <span className="text-[#ccf17b] font-medium">highlighted text</span> to edit
          </p>

          {/* Submit Button */}
          <button
            onClick={() => {
              console.log({ name, email, services });
              // Here you would send the data to your backend
              onClose();
            }}
            className="rounded-[2rem] bg-black text-white dark:bg-white dark:text-black py-4 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition font-semibold"
          >
            Submit
          </button>
          <button
            onClick={() => setStep(step - 1)}
            className="absolute -bottom-6 -left-6 w-14 h-14 bg-[#ccf17b] text-black rounded-full flex items-center justify-center hover:bg-[#b8e66c] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}