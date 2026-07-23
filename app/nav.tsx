"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenuModal from "./components/modals/HambugerMenuModal";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import AvokadoHomeLogo from "../public/icons/AvokadoHomeLogo";
import Button from "./components/ui/Button";
import { serviceGroups } from "./data/services";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // The bar has no background of its own at any scroll position, so contrast has
  // to come from the type. Work out whether a dark section is currently sitting
  // under the bar and flip the palette to match.
  useEffect(() => {
    const check = () => {
      const midline = (headerRef.current?.offsetHeight ?? 80) / 2;
      const dark = Array.from(document.querySelectorAll(".on-dark")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= midline && r.bottom >= midline;
      });
      setOverDark(dark);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  useEffect(() => {
    // Get out of the way while reading down the page; come back the moment the
    // user starts heading back up. The 6px threshold stops trackpad jitter and
    // scroll bounce from flickering the bar.
    const onScroll = () => {
      const y = window.scrollY;

      if (y <= 80) {
        setHidden(false);
      } else {
        if (y > lastY.current + 6) setHidden(true);
        else if (y < lastY.current - 6) setHidden(false);
      }

      lastY.current = y;
    };

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never leave the bar hidden behind an open menu or dropdown.
  useEffect(() => {
    if (menuOpen || showServices) setHidden(false);
  }, [menuOpen, showServices]);

  const goToContact = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#contact");
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[100] bg-transparent transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${overDark ? "text-paper" : "text-carbon"}`}
      >
        <div className="flex h-20 items-center justify-between px-6 sm:h-24 sm:px-10 lg:px-14">
          {/* Wordmark carries the brand name now that the headline no longer
              spells it out. */}
          <Link href="/" aria-label="Avokado home" className="flex-shrink-0">
            <AvokadoHomeLogo className="h-6 w-auto sm:h-7" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link
                href="/services"
                className="text-sm opacity-80 transition hover:opacity-100 hover:text-leaf"
              >
                Services
              </Link>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-1/2 top-full w-[min(92vw,40rem)] -translate-x-1/2 pt-5"
                  >
                    <div className="border border-paper/10 bg-ink/95 p-7 shadow-2xl backdrop-blur-xl">
                      <div className="mb-6 flex items-center justify-between border-b border-paper/12 pb-3">
                        <span className="label !text-paper/45">All services</span>
                        <span className="label !text-paper/45 tabular-nums">
                          {String(serviceGroups.length).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3">
                        {serviceGroups.map((group, i) => (
                          <Link
                            key={group.id}
                            href={`/services#${group.id}`}
                            className="group block"
                          >
                            <div className="flex items-baseline gap-2">
                              <span className="label !text-paper/35 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-base font-medium text-paper transition-colors group-hover:text-lime">
                                {group.title}
                              </span>
                            </div>
                            <p className="mt-1.5 pl-7 text-xs leading-relaxed text-paper/40">
                              {group.items.slice(0, 3).join(" · ")}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-sm opacity-80 transition hover:opacity-100 hover:text-leaf"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm opacity-80 transition hover:opacity-100 hover:text-leaf"
            >
              Work
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={goToContact}
              tone="lime"
              className="hidden text-sm sm:inline-block"
            >
              Get in touch
            </Button>

            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-none p-2 transition hover:opacity-70 md:hidden"
              aria-label="Open menu"
            >
              <Bars3BottomRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <HamburgerMenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
