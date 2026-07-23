import type { Metadata } from "next";
import Footer from "../components/sections/Footer";
import ContactCTA from "../components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Avokado began with a simple realization: the creative world was full of noise, but short on meaning. Our story, mission and values.",
};

const VALUES = [
  { title: "Creativity", body: "Ideas first. Craft is how we get them across, never the other way round." },
  { title: "Trust", body: "Brands hand us their identity. We treat that as the responsibility it is." },
  { title: "Innovation", body: "We don't chase trends — we create work that outlives them." },
  { title: "Intentionality", body: "Every decision should explain itself. Nothing is there by accident." },
  { title: "Collaboration", body: "The best work happens with clients in the room, not at the end of a handover." },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full px-6 pb-(--spacing-section) pt-36 sm:px-10 lg:px-14">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-20">
          {/* metadata frame + statement */}
          <div>
            <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
              <span className="label">Creative studio</span>
              <span className="label">Est. 2024</span>
            </div>
            <h1 className="mt-12 max-w-[18ch] font-[800]" style={{ fontSize: "var(--text-h1)", lineHeight: 0.98 }}>
              We build brands that are{" "}
              <span className="ital font-normal text-leaf">bold, clear, memorable</span> — and
              unmistakably human.
            </h1>
          </div>

          {/* story */}
          <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-[0.4fr_1fr] md:gap-20">
            <p className="label">The origin</p>
            <div className="flex max-w-3xl flex-col gap-6 text-(length:--text-lead) leading-relaxed text-body">
              <p>
                Avokado began with a simple realization: the creative world was full of
                noise, but short on meaning. Brands were posting endlessly, yet rarely
                connecting. There was talent everywhere, but intention was missing.
              </p>
              <p>
                What started as a passion for photography, videography, and digital
                storytelling has grown into a full creative studio serving clients who want
                their brand to look, feel, and perform better. We blend strategy with
                aesthetics, artistry with technology, and professionalism with personality.
              </p>
            </div>
          </div>

          {/* mission / vision */}
          <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-2 md:gap-20">
            <div>
              <p className="label mb-5">Mission</p>
              <p className="text-(length:--text-lead) leading-relaxed text-carbon">
                To become the most intuitive, innovative, and influential creative studio —
                shaping how brands tell their stories, one idea at the speed of thought.
              </p>
            </div>
            <div>
              <p className="label mb-5">Vision</p>
              <p className="text-(length:--text-lead) leading-relaxed text-carbon">
                Visually compelling, emotionally engaging, strategically sound creative
                work that helps brands connect, grow, and thrive in an ever-changing
                digital world.
              </p>
            </div>
          </div>

          {/* values as an index */}
          <div className="border-t border-line pt-14">
            <p className="label mb-10">What we hold to</p>
            <ul className="flex flex-col">
              {VALUES.map((v, i) => (
                <li
                  key={v.title}
                  className="grid gap-4 border-b border-line py-8 last:border-0 md:grid-cols-[3rem_1fr_1.4fr] md:items-baseline md:gap-8"
                >
                  <span className="label !text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h2
                    className="font-[800] tracking-[-0.04em] text-carbon"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                  >
                    {v.title}
                  </h2>
                  <p className="max-w-md leading-relaxed text-body">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA id="contact" />
      <Footer />
    </>
  );
}
