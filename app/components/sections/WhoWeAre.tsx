"use client";

import Spline from "@splinetool/react-spline";

export default function WhoWeAre() {
  const numLines = 5; // number of vertical lines
  const lines = Array.from({ length: numLines });

  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center">
      {/* Vertical lines spanning full viewport height */}
      {lines.map((_, i) => (
        <div
          key={i}
          className={`absolute top-0 bottom-0 w-px pointer-events-none bg-gradient-to-b from-transparent to-transparent ${
            i === Math.floor(numLines / 2) ? "via-gray-400/20" : "via-gray-400/50"
          }`}
          style={{ left: `${(i / (numLines - 1)) * 100}%` }}
        />
      ))}

      {/* Spline 3D plane */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[65%] max-w-[800px] h-auto">
        <Spline
          scene="https://prod.spline.design/1xCN1trQCEVcfGsw/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Text just below Spline with solid background */}
      <div className="relative z-10 w-full flex flex-col items-center mt-16">
        <div className="bg-[#0a0a0a] px-6 py-4 relative">
          {/* Top border with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/70 to-transparent" />

          <p
            className="text-center max-w-4xl"
            style={{
              fontFamily: "'Neue Montreal', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "35px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#8D8D8D",
            }}
          >
            We're a digital creative agency that blends strategy, creativity, and execution—so brands don't just exist online, they perform.
          </p>
        </div>

        {/* Start a Project Button */}
        <button className="mt-8 px-6 py-3 border border-gray-400 text-gray-200 hover:bg-gray-800 transition-all z-20">
          Start a Project
        </button>
      </div>
    </section>
  );
}