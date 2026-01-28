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
    <div className="w-full overflow-hidden py-10 sm:py-12">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }} // Only move -50% since we have 2 identical sets
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
          repeatType: "loop", // Ensure it loops correctly
        }}
      >
        {/* First set */}
        <div className="flex flex-shrink-0">
          {services.map((service, index) => (
            <div key={`set1-${index}`} className="flex items-center px-6 sm:px-16 flex-shrink-0">
              <AvokadoLogo 
                className="w-6 h-6 sm:w-10 sm:h-10 mx-2 sm:mx-6 flex-shrink-0" 
                filled={index === 0} // First logo (before "Branding") is filled
              />
              <span className="font-aonik text-base sm:text-xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex flex-shrink-0">
          {services.map((service, index) => (
            <div key={`set2-${index}`} className="flex items-center px-6 sm:px-16 flex-shrink-0">
              <AvokadoLogo 
                className="w-6 h-6 sm:w-10 sm:h-10 mx-2 sm:mx-6 flex-shrink-0" 
                filled={index === 0} // This should also be filled when it's in the first position
              />
              <span className="font-aonik text-base sm:text-xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Third duplicate set to ensure true seamless loop */}
        <div className="flex flex-shrink-0">
          {services.map((service, index) => (
            <div key={`set3-${index}`} className="flex items-center px-6 sm:px-16 flex-shrink-0">
              <AvokadoLogo 
                className="w-6 h-6 sm:w-10 sm:h-10 mx-2 sm:mx-6 flex-shrink-0" 
                filled={false}
              />
              <span className="font-aonik text-base sm:text-xl text-[#8D8D8D] whitespace-nowrap mx-2 sm:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}