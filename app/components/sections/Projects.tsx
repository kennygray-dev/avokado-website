"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectHighlights } from "@/app/data/projectHighlights";
import { GreenButton } from "../ui/Buttons";
import { useRouter } from 'next/navigation';

export default function Projects() {
  const router = useRouter();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-4 sm:px-8"
    >
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-[50px] sm:text-[64px] font-bold font-neueMontreal">
      Project <span className="text-[#8D8D8D]">Highlights</span>
    </h2>

    <div className="flex flex-col gap-12 mt-16">
      {projectHighlights.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full p-[1px] bg-gradient-to-r from-[#393939] via-[#B2B2B2] to-[#282828] rounded-3xl cursor-pointer"
          onClick={() => router.push(`/projects/${project.id}`)}
        >
          <div className="bg-[#191919] rounded-3xl p-8 flex flex-col md:flex-row gap-10">

            <div className="flex flex-col gap-6 md:max-w-[50%] p-4 sm:p-6 md:p-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400 font-neueMontreal">Services</span>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 font-neueMontreal">
                  {project.services?.map((service, index) => (
                    <span key={index} className="border border-neutral-700 rounded-full px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400 font-neueMontreal">Year</span>
                <span>{project.year}</span>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <h3 className="text-3xl font-semibold font-neueMontreal">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col justify-between">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 rounded-xl" />
                )}
              </div>

              <div className="flex justify-end mt-4">
                <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                  <GreenButton className="px-6 py-2 text-sm font-medium">
                    {project.linkLabel}
                  </GreenButton>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      ))}
    </div>

  </div>
</motion.section>
  );
}