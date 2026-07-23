"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectHighlights, projectCategories } from "@/app/data/projectHighlights";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  // null → the first visible row is open by default.
  const [openId, setOpenId] = useState<number | null>(null);

  const visible =
    filter === "All"
      ? projectHighlights
      : projectHighlights.filter((p) => p.categories.includes(filter));

  // Always keep one valid row open; fall back to the first visible.
  const effectiveOpen =
    openId != null && visible.some((p) => p.id === openId) ? openId : visible[0]?.id ?? null;

  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 px-6 py-(--spacing-section) sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label mb-4">Selected work / {String(visible.length).padStart(2, "0")}</p>
            <h2 style={{ fontSize: "var(--text-h1)" }}>
              The <span className="ital text-leaf">index.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => {
              const on = c === filter;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={on}
                  className={`rounded-none border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition ${
                    on ? "border-carbon bg-carbon text-paper" : "border-line text-body hover:border-carbon"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion index — hovering a row opens it and closes the rest; on
            mouse-out the first row re-opens. Tapping toggles on touch. */}
        <ul
          className="mt-12 border-t border-line"
          onMouseLeave={() => setOpenId(null)}
        >
          {visible.map((p, idx) => {
            const isOpen = p.id === effectiveOpen;
            return (
              <li
                key={p.id}
                className="group/row relative border-b border-line"
                onMouseEnter={() => setOpenId(p.id)}
              >
                {/* header (clips the oversized numeral) */}
                <div className="relative overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 select-none font-[800] leading-[0.7] tracking-[-0.05em] tabular-nums transition-colors duration-300 sm:-left-4"
                    style={{
                      fontSize: "clamp(4.5rem, 14vw, 11rem)",
                      color: isOpen ? "var(--color-leaf)" : "var(--color-carbon)",
                      opacity: isOpen ? 0.22 : 0.1,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? -1 : p.id)}
                    className="relative z-10 flex w-full items-center justify-between gap-4 py-7 pl-[26%] text-left sm:py-8 sm:pl-[22%]"
                  >
                    <span
                      className="font-[800] leading-none tracking-[-0.04em] transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.9rem, 5vw, 4rem)",
                        color: isOpen ? "var(--color-leaf)" : "var(--color-carbon)",
                      }}
                    >
                      {p.client}
                    </span>

                    <span className="flex items-center gap-6 sm:gap-10">
                      <span className="hidden text-sm tabular-nums text-muted md:block">{p.year}</span>
                      {/* +/− indicator */}
                      <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center border border-carbon/25 transition-colors group-hover/row:border-leaf">
                        <span className="absolute h-px w-3.5 bg-carbon" />
                        <span
                          className={`absolute h-3.5 w-px bg-carbon transition-transform duration-300 ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                </div>

                {/* expanded panel: image + info */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid items-center gap-8 pb-10 pl-[26%] sm:pl-[22%] md:grid-cols-[1fr_1.1fr] md:gap-12">
                        {/* details — left */}
                        <div className="flex flex-col gap-6">
                          <p className="max-w-md text-(length:--text-lead) leading-snug text-body">
                            {p.summary}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <div className="flex flex-wrap gap-2">
                              {p.services.map((s) => (
                                <span
                                  key={s}
                                  className="border border-line px-3 py-1 text-xs text-body"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center gap-2 self-start whitespace-nowrap font-medium text-carbon transition-colors hover:text-leaf"
                            >
                              View project
                              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                                &#8599;
                              </span>
                            </a>
                          ) : (
                            <span className="self-start whitespace-nowrap text-sm text-muted">
                              Under wraps
                            </span>
                          )}
                        </div>

                        {/* image — right, edges feathered so it melts into the page */}
                        <a
                          href={p.link ?? undefined}
                          target={p.link ? "_blank" : undefined}
                          rel={p.link ? "noopener noreferrer" : undefined}
                          className="relative block aspect-[16/10] w-full"
                          style={{
                            maskImage:
                              "radial-gradient(125% 115% at 50% 50%, #000 45%, transparent 88%)",
                            WebkitMaskImage:
                              "radial-gradient(125% 115% at 50% 50%, #000 45%, transparent 88%)",
                          }}
                        >
                          <Image
                            src={p.imageUrl}
                            alt={`${p.client} — project preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 45vw"
                            className="object-cover"
                          />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* ghosted client roll */}
        <div className="mt-24 border-t border-line pt-12">
          <p className="label mb-8">Trusted by</p>
          <ul className="flex flex-col leading-[0.95]">
            {projectHighlights.map((p, i) => (
              <li
                key={p.id}
                className="font-[800] tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(2rem, 6.5vw, 4.5rem)",
                  color:
                    i === projectHighlights.length - 1
                      ? "var(--color-carbon)"
                      : "color-mix(in srgb, var(--color-carbon) 15%, transparent)",
                }}
              >
                {p.client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
