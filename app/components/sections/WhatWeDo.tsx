"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const CAPABILITIES = [
  {
    title: "Strategy & Direction",
    body: "Clear brand strategy and creative direction that elevate your presence and sharpen your position in the market.",
  },
  {
    title: "Content & Production",
    body: "High-quality visuals, video, and copy — photographed, filmed, and written to engage the audience you actually want.",
  },
  {
    title: "Web & Digital",
    body: "Responsive, intuitive web experiences designed and built to move people from a first look to a real decision.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full px-6 py-(--spacing-section) sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* metadata frame */}
        <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
          <span className="label">Capabilities</span>
          <span className="label">03</span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end md:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[14ch] font-[800]"
            style={{ fontSize: "var(--text-h1)", lineHeight: 0.94 }}
          >
            Your creative <span className="ital font-normal text-leaf">powerhouse.</span>
          </motion.h2>
          <p className="max-w-md text-(length:--text-lead) leading-snug text-body">
            One studio across strategy, design, content and build — so brands don&rsquo;t
            just exist online, they <span className="ital text-carbon">perform</span>.
          </p>
        </div>

        {/* capabilities as an editorial index */}
        <ul className="mt-16 border-t border-line">
          {CAPABILITIES.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[3rem_1fr_1.4fr] md:items-baseline md:gap-8"
            >
              <span className="label !text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-[800] tracking-[-0.04em] text-carbon"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                {item.title}
              </h3>
              <p className="max-w-md leading-relaxed text-body">{item.body}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Button href="/services" variant="link">
            See all services
          </Button>
          <Button href="https://calendly.com/avokado-ng/" tone="dark">
            Book a free call
          </Button>
        </div>
      </div>
    </section>
  );
}
