"use client";

import { motion } from "framer-motion";

const VALUES = ["Creativity", "Trust", "Innovation", "Intentionality", "Collaboration"];

export default function WhoWeAre() {
  return (
    <section id="about" className="w-full px-6 py-(--spacing-section) sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="label mb-10">Our philosophy</p>

        {/* Big editorial statement — the serif italics carry the character. */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[20ch] font-[800] text-carbon"
          style={{ fontSize: "var(--text-h1)", lineHeight: 0.98 }}
        >
          We see design as the balance between what makes{" "}
          <span className="ital font-normal text-leaf">sense</span> and what makes you{" "}
          <span className="ital font-normal text-leaf">feel.</span>
        </motion.h2>

        <div className="mt-16 grid gap-12 border-t border-line pt-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <div className="flex flex-col gap-6 text-(length:--text-lead) leading-relaxed text-body">
            <p>
              Avokado began with a simple realization: the creative world was full of noise,
              but short on meaning. Brands were posting endlessly, yet rarely connecting.
            </p>
            <p>
              What started as a passion for photography, videography, and digital
              storytelling has grown into a full creative studio serving clients who want
              their brand to look, feel, and perform better.
            </p>
          </div>

          <div>
            <p className="label mb-8">What we hold to</p>
            <ul className="flex flex-col">
              {VALUES.map((v, i) => (
                <li
                  key={v}
                  className="flex items-baseline gap-4 border-b border-line py-4 last:border-0"
                >
                  <span className="label !text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-[700] tracking-[-0.03em] text-carbon"
                    style={{ fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)" }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
