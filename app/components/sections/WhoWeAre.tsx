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
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[150%] max-w-[800px] h-[150%]">
        <Spline
          scene="https://prod.spline.design/1xCN1trQCEVcfGsw/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}