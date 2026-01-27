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
    <div className="w-full overflow-hidden py-16 sm:py-20">
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
                className="w-6 h-6 sm:w-10 sm:h-10 mx-2 sm:mx-6" 
                filled={index === 0} // First logo (before "Branding") is filled
              />
              <span className="font-aonik text-base sm:text-xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6">
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
                className="w-6 h-6 sm:w-10 sm:h-10 mx-2 sm:mx-6" 
                filled={false} // Only first instance should be filled
              />
              <span className="font-aonik text-base sm:text-xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}