"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceGroup } from "../../data/services";

/**
 * Oversized-numeral accordion. The numeral is a full-bleed background element
 * clipped by its row, so it reads as a graphic mark rather than a label — the
 * row content sits above it.
 */
export default function ServicesAccordion({ groups }: { groups: ServiceGroup[] }) {
  const [openId, setOpenId] = useState<string | null>(groups[0]?.id ?? null);

  return (
    <div className="flex flex-col border-b border-carbon/10">
      {groups.map((group, i) => {
        const open = openId === group.id;

        return (
          <section
            key={group.id}
            id={group.id}
            className="relative scroll-mt-28 overflow-hidden border-t border-carbon/10"
          >
            {/* The numeral. Sits behind everything, bleeds off the left edge,
                and lifts in weight when its row is open. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-bold leading-[0.72] tracking-tight transition-all duration-500 sm:-left-10"
              style={{
                fontSize: "clamp(7rem, 21vw, 19rem)",
                color: open ? "var(--color-leaf)" : "var(--color-carbon)",
                opacity: open ? 0.26 : 0.1,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <h2>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : group.id)}
                aria-expanded={open}
                aria-controls={`${group.id}-panel`}
                className="group relative z-10 flex w-full items-center justify-between gap-6 py-10 text-left sm:py-12 md:pl-[38%]"
              >
                <span className="text-(length:--text-h2) font-semibold leading-none text-carbon transition-colors group-hover:text-leaf">
                  {group.title}
                </span>

                {/* +/− affordance */}
                <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-none border border-carbon/25 transition-colors group-hover:border-leaf">
                  <span className="absolute h-px w-3.5 bg-carbon transition-colors group-hover:bg-leaf" />
                  <span
                    className={`absolute h-3.5 w-px bg-carbon transition-all duration-300 group-hover:bg-leaf ${
                      open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
                    }`}
                  />
                </span>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`${group.id}-panel`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 overflow-hidden"
                >
                  <div className="grid gap-8 pb-12 md:grid-cols-2 md:pl-[38%]">
                    <p className="max-w-md leading-relaxed text-body">{group.summary}</p>
                    <ul className="flex flex-wrap content-start gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-none border border-carbon/20 px-4 py-2 text-sm text-body"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        );
      })}
    </div>
  );
}
