import AvokadoHomeLogo from '../../../public/icons/AvokadoHomeLogo';
import InstagramIcon from '../../../public/icons/Instagram';
import TwitterIcon from '../../../public/icons/Twitter';
import LinkedinIcon from '../../../public/icons/Linkedin';

export default function Footer() {
  return (
    <footer className="relative w-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 bg-[var(--background)] text-white overflow-hidden">
      {/* Gradient overlay that encroaches from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--background)] via-[var(--background)/80] to-transparent pointer-events-none z-10"></div>
      
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="relative z-20 flex flex-col space-y-12 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start text-left font-neueMontreal mb-8 sm:mb-0">
            <AvokadoHomeLogo />
            <p className="mt-3 font-light text-[13px] sm:text-[14px] md:text-[16px] leading-[140%] tracking-[0%] text-[#8D8D8D] max-w-xs">
              Creating at the frequency of thought
            </p>
          </div>
          
          {/* Navigation and Social Media - Better mobile layout */}
          <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-16 font-neueMontreal">
            {/* Navigate section */}
            <div className="w-full sm:w-auto">
              <h3 className="text-[#8D8D8D] uppercase mb-4 text-[13px] sm:text-[14px] md:text-[16px] font-light">NAVIGATE</h3>
              <ul className="space-y-3">
                <li className="text-[15px] sm:text-[16px] md:text-[16px]">
                  <a href="#" className="text-white font-neueMontreal underline decoration-dotted underline-offset-2 hover:text-white/80 transition-colors duration-200">
                    About Avokado
                  </a>
                </li>
                <li className="text-[15px] sm:text-[16px] md:text-[16px] mt-3">
                  <a href="#" className="text-white font-neueMontreal underline decoration-dotted underline-offset-2 hover:text-white/80 transition-colors duration-200">
                    Company Profile
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Media section */}
            <div className="w-full sm:w-auto">
              <h3 className="text-[#8D8D8D] uppercase mb-4 text-[13px] sm:text-[14px] md:text-[16px] font-light">SOCIAL MEDIA</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-[15px] sm:text-[16px] md:text-[16px]">
                  <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FFFD]" />
                  <a href="#" className="text-white font-neueMontreal underline decoration-dotted underline-offset-2 hover:text-white/80 transition-colors duration-200">
                    Instagram
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-[15px] sm:text-[16px] md:text-[16px] mt-3">
                  <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FFFD]" />
                  <a href="#" className="text-white font-neueMontreal underline decoration-dotted underline-offset-2 hover:text-white/80 transition-colors duration-200">
                    X (Formerly Twitter)
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-[15px] sm:text-[16px] md:text-[16px] mt-3">
                  <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8FFFD]" />
                  <a href="#" className="text-white font-neueMontreal underline decoration-dotted underline-offset-2 hover:text-white/80 transition-colors duration-200">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* AVOKADO Text */}
        <div className="pointer-events-none flex justify-center w-full mt-20 sm:mt-32 relative z-0">
          <h1
            className="font-neueMontreal font-bold text-[2.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] xl:text-[17rem] select-none w-full text-center bg-gradient-to-b from-[#F8FFFD33] to-[#11111100] bg-clip-text text-transparent"
            style={{
              userSelect: 'none',
              lineHeight: 0.9,
            }}
          >
            AVOKADO
          </h1>
        </div>
      </div>
    </footer>
  );
}