import AvokadoHomeLogo from '../../../public/icons/AvokadoHomeLogo';
import { CameraIcon, XMarkIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="relative w-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 bg-[var(--background)] text-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="relative z-10 flex flex-col space-y-6 sm:flex-row sm:justify-between sm:items-start sm:space-y-0">
          <div className="flex flex-col items-start text-left sm:items-start sm:text-left font-neueMontreal">
            <AvokadoHomeLogo />
            <p className="mt-2 font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[0%] text-[#8D8D8D] whitespace-nowrap break-words">
              Creating at the frequency of thought
            </p>
          </div>
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-16 font-neueMontreal text-left sm:text-left">
            <div>
              <h3 className="text-[#8D8D8D] uppercase mb-2 text-[16px] sm:text-[20px] md:text-[22px]">NAVIGATE</h3>
              <ul className="space-y-1">
                <li className="text-[14px] sm:text-[16px] md:text-[16px]">
                  <a href="#" className="text-white font-neueMontreal">About Avokado</a>
                </li>
                <li className="text-[14px] sm:text-[16px] md:text-[16px]">
                  <a href="#" className="text-white font-neueMontreal">Company Profile</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#8D8D8D] uppercase mb-2 text-[16px] sm:text-[20px] md:text-[22px]">SOCIAL MEDIA</h3>
              <ul className="space-y-1">
                <li className="flex items-center space-x-2 text-[14px] sm:text-[16px] md:text-[16px]">
                  <CameraIcon className="w-4 h-4 text-gray-500" />
                  <a href="#" className="text-white font-neueMontreal">Instagram</a>
                </li>
                <li className="flex items-center space-x-2 text-[14px] sm:text-[16px] md:text-[16px]">
                  <XMarkIcon className="w-4 h-4 text-gray-500" />
                  <a href="#" className="text-white font-neueMontreal">X (Formerlly Twitter)</a>
                </li>
                <li className="flex items-center space-x-2 text-[14px] sm:text-[16px] md:text-[16px]">
                  <BuildingOfficeIcon className="w-4 h-4 text-gray-500" />
                  <a href="#" className="text-white font-neueMontreal">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pointer-events-none flex justify-center w-full mt-8">
          <h1
            className="font-neueMontreal font-bold text-[4rem] sm:text-[12rem] md:text-[17rem] select-none w-full text-center bg-gradient-to-b from-[#F8FFFD33] to-[#11111100] bg-clip-text text-transparent"
            style={{
              userSelect: 'none',
              zIndex: 0,
              lineHeight: 1,
            }}
          >
            AVOKADO
          </h1>
        </div>
      </div>
    </footer>
  );
}