"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Grain } from "../ui/Arcs";
import Button from "../ui/Button";
import ContactForm from "../forms/ContactForm";
import StartProjectForm from "../forms/StartProjectForm";

interface ContactCTAProps {
  id?: string;
  openExternally?: boolean;
}

export default function ContactCTA({ id, openExternally }: ContactCTAProps) {
  const [showContact, setShowContact] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact" || openExternally) setShowContact(true);
    else if (hash.startsWith("#project")) setShowProjectForm(true);
  }, [openExternally]);

  // Close on Escape — the modals previously trapped you until you found the X.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeContact();
      closeProjectForm();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openContact = () => {
    window.history.replaceState(null, "", "#contact");
    setShowContact(true);
    setShowProjectForm(false);
  };
  const closeContact = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowContact(false);
  };
  const openProjectForm = () => {
    window.history.replaceState(null, "", "#project");
    setShowProjectForm(true);
    setShowContact(false);
  };
  const closeProjectForm = () => {
    window.history.replaceState(null, "", window.location.pathname);
    setShowProjectForm(false);
  };

  return (
    <section id={id} className="on-dark relative w-full overflow-hidden">
      <Grain />

      <div className="relative z-10 mx-auto flex max-w-[1500px] flex-col px-6 py-(--spacing-section) sm:px-10 lg:px-14">
        {/* metadata frame */}
        <div className="flex items-start justify-between gap-6 border-b border-paper/15 pb-6">
          <span className="label !text-paper/50">Let&rsquo;s work together</span>
          <a
            href="mailto:avokado.ng@gmail.com"
            className="label !text-paper/70 transition-colors hover:!text-lime"
          >
            avokado.ng@gmail.com
          </a>
        </div>

        {/* oversized statement */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14 max-w-[15ch] font-[800] text-paper"
          style={{ fontSize: "var(--text-display)", lineHeight: 0.9 }}
        >
          Let&rsquo;s make something that{" "}
          <span className="ital font-normal text-lime">performs.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-md text-(length:--text-lead) leading-snug text-paper/60">
            Your brand deserves more than visibility.{" "}
            <span className="ital text-paper">It deserves impact.</span>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button onClick={openProjectForm} tone="lime">
              Start a project
            </Button>
            <Button onClick={openContact} variant="outline" arrow={false}>
              Contact us
            </Button>
          </div>
        </motion.div>
      </div>

      {showProjectForm && <StartProjectForm onClose={closeProjectForm} />}
      {showContact && <ContactForm onClose={closeContact} />}
    </section>
  );
}
