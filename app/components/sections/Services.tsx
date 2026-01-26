"use client";

import { motion } from "framer-motion";
import AvokadoLogo from "../../../public/icons/AvokadoLogo";

const services = [
  "Branding",
  "Photography",
  "Videography",
  "Website",
  "Social Media",
];

// Create alternating array: logo, text, logo, text...
const createMarqueeItems = () => {
  const items: Array<{ type: "logo" | "text"; content?: string }> = [];
  services.forEach((service) => {
    items.push({ type: "logo" });
    items.push({ type: "text", content: service });
  });
  return [...items, ...items]; // duplicate for seamless loop
};

export default function Services() {
  const marqueeItems = createMarqueeItems();

  return (
    <div className="w-full overflow-hidden py-6 relative">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {marqueeItems.concat(marqueeItems).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[150px] sm:min-w-[200px]"
            style={{ color: "#8D8D8D" }}
          >
            {item.type === "logo" ? (
              <AvokadoLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            ) : (
              <span className="font-aonik text-base sm:text-lg">{item.content}</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
