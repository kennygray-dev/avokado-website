"use client";

import { useRouter } from "next/navigation";
import BackButton from "../ui/BackButton";
import { motion } from "framer-motion";

const AboutHero = () => (
  <div className="w-full flex flex-col items-center justify-center gap-6 py-12 px-8 md:px-0 max-w-3xl mx-auto text-center">
    <motion.h3
      className="text-4xl md:text-5xl font-bold"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Who We Are
    </motion.h3>
    <motion.p
      className="text-zinc-600 dark:text-zinc-400 mt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Avokado is a creative digital agency built for brands that want more than just content — they want connection. We believe creativity should feel effortless, intuitive, and alive.
    </motion.p>
  </div>
);

const ServiceSection = () => (
  <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-8 md:px-16 py-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <h3 className="text-2xl font-semibold">What We Do</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        We specialize in crafting compelling digital experiences that resonate with audiences. From concept to execution, our team works closely with clients to bring their stories to life through various creative disciplines.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-2xl font-semibold">Web Design & Development</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        Our web design and development services focus on creating intuitive, responsive, and visually stunning websites that engage users and drive results. We combine cutting-edge technology with creative design to build digital platforms that stand out.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <h3 className="text-2xl font-semibold">Branding</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        Branding is at the heart of what we do. We help brands define their identity, voice, and visual language to create memorable and meaningful connections with their audience.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold">Photography</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        Our photography services capture the essence of your brand through authentic and impactful imagery. Whether it’s product, lifestyle, or corporate photography, we tell your story through the lens.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h3 className="text-2xl font-semibold">Videography</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        Video content is a powerful tool for engagement. We produce high-quality videos that communicate your message effectively, from promotional clips to in-depth storytelling.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-2xl font-semibold">Social Media Management</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        We manage your social media presence to build community, foster engagement, and amplify your brand’s voice across platforms. Our strategies are tailored to meet your unique goals.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35 }}
    >
      <h3 className="text-2xl font-semibold">Digital Services</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1">
        Beyond creative content, we offer a range of digital services including SEO, analytics, and digital marketing to ensure your brand not only looks great but performs exceptionally in the digital landscape.
      </p>
    </motion.div>
  </div>
);

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-black flex flex-col items-center justify-start overflow-auto">
      <div className="fixed top-4 left-4 z-50">
        <BackButton />
      </div>
      <AboutHero />
      <ServiceSection />
    </div>
  );
}