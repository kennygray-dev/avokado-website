"use client";

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-start justify-start bg-[var(--background)] relative overflow-hidden px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start justify-start">
        <h2 className="text-left text-[50px] sm:text-[64px] md:text-[64px] font-neueMontreal font-bold leading-[100%] tracking-[0%] break-words mt-2">
          Project <span className="text-[#8D8D8D]">Highlights</span>
        </h2>
        <p className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] sm:text-[20px] md:text-[20px] leading-[100%] tracking-[0%] break-words mt-6">
          Some of what we have done
        </p>
      </div>
    </section>
  );
}