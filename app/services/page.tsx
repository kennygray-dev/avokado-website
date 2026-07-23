import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups } from "../data/services";
import ServicesAccordion from "../components/sections/ServicesAccordion";
import Footer from "../components/sections/Footer";
import ContactCTA from "../components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, content, photography, video, social and web — the full range of what Avokado builds for brands.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="w-full px-6 pb-(--spacing-section) pt-36 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* metadata frame */}
          <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
            <span className="label">What we do</span>
            <span className="label">{String(serviceGroups.length).padStart(2, "0")} disciplines</span>
          </div>

          <h1 className="mt-12 max-w-[16ch] font-[800]" style={{ fontSize: "var(--text-display)", lineHeight: 0.9 }}>
            Everything a brand needs to{" "}
            <span className="ital font-normal text-leaf">perform.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-(length:--text-lead) leading-snug text-body">
            We work as one team across strategy, design, content and build — so the brand
            you launch is the same brand your audience meets six months later.
          </p>

          <div className="mt-20">
            <ServicesAccordion groups={serviceGroups} />
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-carbon underline underline-offset-4 transition-colors hover:text-leaf"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA id="contact" />
      <Footer />
    </>
  );
}
