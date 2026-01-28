"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const numLines = 5; // number of vertical lines
  const lines = Array.from({ length: numLines });

  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center">
      {/* Vertical lines spanning full viewport height */}
      {lines.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scaleY: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: i * 0.15 }}
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: `${(i / (numLines - 1)) * 100}%` }}
        >
          <div
            className={`h-full bg-gradient-to-b from-transparent to-transparent ${
              i === Math.floor(numLines / 2) ? "via-gray-400/30" : "via-gray-400/40"
            }`}
          />
        </motion.div>
      ))}

      {/* Spline 3D plane */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-[120%] max-w-[700px] h-[120%]">
        <Spline
          scene="https://prod.spline.design/1xCN1trQCEVcfGsw/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Vertical stripes centered vertically with fixed height */}
      {lines.map((_, i) => (
        <motion.div
          key={`stripe-${i}`}
          initial={{ opacity: 0, y: 50, scaleY: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: i * 0.15 }}
          className="absolute inset-y-0 flex items-center pointer-events-none"
          style={{ left: `${(i / (numLines - 1)) * 100}%` }}
        >
          <div
            className={`w-px h-[70%] bg-gradient-to-b from-transparent to-transparent ${
              i === Math.floor(numLines / 2) ? "via-gray-400/30" : "via-gray-400/40"
            }`}
          />
        </motion.div>
      ))}
    </section>
  );
}