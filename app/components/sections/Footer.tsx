"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AvokadoHomeLogo from "../../../public/icons/AvokadoHomeLogo";
import InstagramIcon from "../../../public/icons/Instagram";
import TwitterIcon from "../../../public/icons/Twitter";
import LinkedinIcon from "../../../public/icons/Linkedin";
import { Grain } from "../ui/Arcs";

const NAVIGATE = [
  { label: "About Avokado", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#projects" },
];

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/avokado_ng/",
    Icon: InstagramIcon,
  },
  { label: "X (formerly Twitter)", href: "https://x.com/avokado_ng/", Icon: TwitterIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/avokado-ng/",
    Icon: LinkedinIcon,
  },
];

const linkClass =
  "text-paper underline decoration-dotted underline-offset-4 transition-colors hover:text-lime";

export default function Footer() {
  return (
    <footer className="on-dark relative w-full overflow-hidden px-6 pb-10 pt-16 sm:px-10 lg:px-14">
      <Grain opacity={0.05} />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        {/* metadata frame */}
        <div className="flex flex-col justify-between gap-10 border-b border-paper/15 pb-14 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" aria-label="Avokado home">
              <AvokadoHomeLogo className="h-7 w-auto" />
            </Link>
            <p className="mt-5 text-(length:--text-lead) leading-snug text-paper/70">
              A creative studio building brands that look, feel, and{" "}
              <span className="ital text-paper">perform.</span>
            </p>
            <a
              href="mailto:avokado.ng@gmail.com"
              className="mt-6 inline-block text-lime underline decoration-1 underline-offset-4 transition-opacity hover:opacity-80"
            >
              avokado.ng@gmail.com
            </a>
          </div>

          <div className="flex gap-14 sm:gap-20">
            <div>
              <h3 className="label !text-paper/45 mb-5">Navigate</h3>
              <ul className="space-y-3">
                {NAVIGATE.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label !text-paper/45 mb-5">Social</h3>
              <ul className="space-y-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-paper/60" />
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* oversized wordmark, baseline-cropped */}
        <div className="pointer-events-none mt-12 flex w-full justify-center overflow-hidden">
          <motion.p
            className="w-full select-none text-center font-[800] leading-[0.78] tracking-[-0.04em]"
            style={{
              fontSize: "var(--text-mega)",
              color: "color-mix(in srgb, var(--color-paper) 9%, transparent)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Avokado
            <span style={{ color: "color-mix(in srgb, var(--color-lime) 22%, transparent)" }}>
              &reg;
            </span>
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/15 pt-6 sm:flex-row sm:items-center">
          <p className="label !text-paper/40">
            &copy; {new Date().getFullYear()} Avokado &amp; Co Limited
          </p>
          <p className="label !text-paper/40">Creating at the frequency of thought</p>
        </div>
      </div>
    </footer>
  );
}
