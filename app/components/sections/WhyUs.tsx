"use client";

export default function WhyUs() {
  return (
    <section className="w-full min-h-screen flex flex-col items-start justify-start bg-[var(--background)] relative overflow-hidden px-4 sm:px-8 py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start justify-start relative min-h-[80vh]">
        {/* Header at top left */}
        <div className="w-full z-10">
          <h2 className="text-left text-[50px] sm:text-[64px] md:text-[80px] font-neueMontreal font-bold leading-[100%] tracking-[0%] break-words">
            Why <span className="text-[#8D8D8D]">Avokado</span>
          </h2>
          <p className="text-left max-w-2xl text-gray-400 font-neueMontreal font-normal text-[20px] sm:text-[20px] md:text-[20px] leading-[100%] tracking-[0%] break-words mt-6">
We believe creativity should serve a purpose. And digital should feel human.          </p>
        </div>

        {/* Multi-color neon logo - simpler implementation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[35vw] md:w-[25vw] lg:w-[20vw] max-w-[400px]">
            {/* Glowing container */}
            <div className="relative rounded-full p-8">
              {/* Multiple glow layers for neon effect */}
              <div className="absolute inset-0 rounded-full animate-pulse"
                   style={{
                     background: 'conic-gradient(from 0deg at 50% 50%, #8FB850, #6A994E, #386641, #8FB850)',
                     filter: 'blur(20px)',
                     opacity: 0.4
                   }}>
              </div>
              
              {/* Logo with CSS gradient fill */}
              <div className="relative">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 39 42" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_0_20px_rgba(143,184,80,0.6)]"
                >
                  <path 
                    d="M19.0752 0C29.61 7.98639e-05 38.1504 9.70561 38.1504 21.6777C38.1503 30.9919 32.9802 38.9328 25.7241 42C30.0628 39.7389 33.0078 35.3341 33.0078 30.2704C33.0078 22.9002 26.7696 16.9251 19.0746 16.9251C11.3796 16.9251 5.14137 22.9002 5.14137 30.2704C5.14142 35.332 8.08402 39.7351 12.4198 41.997C5.167 38.9278 9.36231e-05 30.9892 0 21.6777C0 9.70556 8.54032 0 19.0752 0Z" 
                    style={{
                      fill: 'url(#multi-neon-gradient)',
                    }}
                  />
                  <defs>
                    <linearGradient id="multi-neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8FB850" />
                      <stop offset="33%" stopColor="#6A994E" />
                      <stop offset="66%" stopColor="#386641" />
                      <stop offset="100%" stopColor="#8FB850" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Trust text at bottom right */}
        <div className="absolute bottom-0 right-0 max-w-sm md:max-w-md text-right z-10">
          <p className="text-white/70 font-neueMontreal font-light text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] tracking-[0%]">
            That's why brands trust Avokado—not just to create, 
            but to guide, build, and evolve their digital presence.
          </p>
        </div>
      </div>
    </section>
  );
}