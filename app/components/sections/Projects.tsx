"use client";

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-start px-4 sm:px-8 md:px-16 bg-[var(--background)]">
      <div className="max-w-[1400px] flex flex-col items-start justify-start">
        <h2 className="font-neueMontreal font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-left">
          Project <span style={{ color: '#8D8D8D' }}>Highlights</span>
        </h2>
        <p className="font-neueMontreal font-normal text-lg sm:text-xl md:text-2xl text-gray-400 mt-4 leading-snug text-left">
          Some of what we have done
        </p>
      </div>
    </section>
  );
}