"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Strategy-led",
    body: "We start with why, not what. Every visual decision traces back to a business one.",
  },
  {
    title: "Craft under one roof",
    body: "Brand, photography, film, and build live in the same studio — so nothing gets lost in translation.",
  },
  {
    title: "Culturally fluent",
    body: "Work that feels local and reads world-class. Rooted in where you are, built for where you're going.",
  },
  {
    title: "Built to perform",
    body: "We measure creativity by what it moves — reach, trust, and the decisions people actually make.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full px-6 py-(--spacing-section) sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* metadata frame */}
        <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
          <span className="label">Why Avokado</span>
          <span className="label">The difference</span>
        </div>

        {/* statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-14 max-w-[20ch] font-[800]"
          style={{ fontSize: "var(--text-h1)", lineHeight: 0.96 }}
        >
          Creativity should serve a{" "}
          <span className="ital font-normal text-leaf">purpose.</span> Digital should feel{" "}
          <span className="ital font-normal text-leaf">human.</span>
        </motion.h2>

        {/* reasons as an editorial index */}
        <ul className="mt-16 grid border-t border-line md:grid-cols-2">
          {REASONS.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="border-b border-line py-8 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-12 md:[&:nth-child(even)]:pl-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="label !text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-[800] tracking-[-0.04em] text-carbon"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
                >
                  {r.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md pl-8 leading-relaxed text-body">{r.body}</p>
            </motion.li>
          ))}
        </ul>

        {/* mission pull-quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl text-(length:--text-h2) leading-tight text-carbon"
        >
          <span className="ital font-normal text-leaf">To become</span> the most intuitive,
          innovative, and influential creative studio — shaping how brands tell their
          stories, one idea at the speed of thought.
        </motion.p>
      </div>
    </section>
  );
}
