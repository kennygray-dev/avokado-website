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

export default function Services() {
  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Moves from right to left
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {/* First set */}
        <div className="flex">
          {services.map((service, index) => (
            <div key={`set1-${index}`} className="flex items-center px-6 sm:px-16">
              <AvokadoLogo 
                className="w-8 h-8 sm:w-12 sm:h-12 mx-2 sm:mx-6" 
                filled={index === 0} // First logo (before "Branding") is filled
              />
              <span className="font-aonik text-lg sm:text-2xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6">
                {service}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex">
          {services.map((service, index) => (
            <div key={`set2-${index}`} className="flex items-center px-6 sm:px-16">
              <AvokadoLogo 
                className="w-8 h-8 sm:w-12 sm:h-12 mx-2 sm:mx-6" 
                filled={false} // Only first instance should be filled
              />
              <span className="font-aonik text-lg sm:text-2xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}