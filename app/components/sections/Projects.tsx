"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectHighlights } from "@/app/data/projectHighlights";
import { GreenButton } from "../ui/Buttons";
import { useRouter } from 'next/navigation';
import { ArrowUpRightIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const router = useRouter();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-4 sm:px-8 bg-white text-black"
    >
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-[80px] sm:text-[105px] font-bold font-neueMontreal tracking-tight text-black">
      Project <span className="text-black">Highlights</span>
    </h2>
    <div className="w-full h-[1px] bg-gray-900 my-6"></div>

    <div className="flex flex-col gap-12 mt-16">
      {projectHighlights.map((project, index) => (
        <div key={project.id} className="flex flex-col gap-6">
          <div className="flex items-center mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full relative rounded-3xl"
          >
            <div className="bg-transparent rounded-3xl flex flex-col md:flex-row gap-10 relative z-10 py-8 text-black">

              <div className="flex flex-col gap-6 md:max-w-[50%]">
                <div className="flex flex-col gap-2">
                  <span className="text-xl text-gray-500 font-neueMontreal font-semibold">Services</span>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-700 font-neueMontreal">
                    {project.services?.map((service, index) => (
                      <span key={index} className="border border-gray-300 rounded-full px-3 py-1 inline-block">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl text-gray-500 font-neueMontreal font-semibold">Year</span>
                  <span>{project.year}</span>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <h3 className="text-4xl sm:text-5xl font-semibold font-neueMontreal leading-snug text-black">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>

              <div className="w-full md:w-[50%] flex flex-col justify-between">
                <div className="relative w-full aspect-[16/10] p-4">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover rounded-none"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-800" />
                  )}

                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gray-400 pointer-events-none"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gray-400 pointer-events-none"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gray-400 pointer-events-none"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gray-400 pointer-events-none"></div>
                </div>

                <div className="flex justify-end mt-4">
                  <GreenButton
                    className={`px-6 py-2 text-sm font-medium border ${project.link ? 'border-[#8FB850] text-[#8FB850] bg-[#8FB850] cursor-pointer' : 'border-gray-900 opacity-50 cursor-not-allowed text-gray-500'} inline-flex items-center gap-2`}
                    onClick={() => {
                      if (project.link) {
                        window.open(project.link, "_blank");
                      }
                    }}
                  >
                    {project.linkLabel}
                    {project.link ? (
                      <ArrowUpRightIcon className="w-4 h-4" />
                    ) : (
                      <LockClosedIcon className="w-4 h-4" />
                    )}
                  </GreenButton>
                </div>
              </div>

            </div>
          </motion.div>
          {index !== projectHighlights.length - 1 && (
            <div className="w-full h-[0.5px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 my-8"></div>
          )}
        </div>
      ))}
    </div>

  </div>
</motion.section>
  );
}