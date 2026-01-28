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
    <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8">
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
            <div key={`set1-${index}`} className="flex items-center px-4 sm:px-8 md:px-12 flex-shrink-0">
              <AvokadoLogo 
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0" 
                filled={index === 0} // First logo (before "Branding") is filled
              />
              <span className="font-aonik text-sm sm:text-lg md:text-xl text-[#8D8D8D] whitespace-nowrap mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex flex-shrink-0">
          {services.map((service, index) => (
            <div key={`set2-${index}`} className="flex items-center px-4 sm:px-8 md:px-12 flex-shrink-0">
              <AvokadoLogo 
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0" 
                filled={index === 0} // This should also be filled when it's in the first position
              />
              <span className="font-aonik text-sm sm:text-lg md:text-xl text-[#8D8D8D] whitespace-nowrap mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>

        {/* Third duplicate set to ensure true seamless loop */}
        <div className="flex flex-shrink-0">
          {services.map((service, index) => (
            <div key={`set3-${index}`} className="flex items-center px-4 sm:px-8 md:px-12 flex-shrink-0">
              <AvokadoLogo 
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0" 
                filled={false}
              />
              <span className="font-aonik text-sm sm:text-lg md:text-xl text-[#8D8D8D] whitespace-nowrap mx-1.5 sm:mx-4 md:mx-6 flex-shrink-0">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}