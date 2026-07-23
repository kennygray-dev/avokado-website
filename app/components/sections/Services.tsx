"use client";

const DISCIPLINES = [
  "Brand Identity",
  "Visual Production",
  "Digital Marketing",
  "Web & Digital",
  "AI Creative",
];

// Two identical passes; the -50% translate loops seamlessly.
const ROW = [...DISCIPLINES, ...DISCIPLINES];

export default function Services() {
  return (
    <section className="w-full py-8 sm:py-10">
      {/* Centered to the site's max width and faded out at both edges, so the
          row feeds in and out of nothing rather than hitting the screen edge. */}
      <div
        className="mx-auto w-full max-w-[1500px] overflow-hidden px-6 sm:px-10 lg:px-14"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max [animation:avokado-marquee_36s_linear_infinite]">
          {ROW.map((d, i) => (
            <div key={i} className="flex flex-shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
              <span
                className="font-[600] tracking-[-0.03em] text-carbon"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                {d}
              </span>
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-lime" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
