"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ParticleBackground = dynamic(
  () => import("@/components/canvas/ParticleBackground"),
  { ssr: false }
);

const HeroCanvas3D = dynamic(
  () => import("@/components/canvas/FloatingShapes").then((m) => ({ default: m.HeroCanvas3D })),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Dark radial gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,_rgba(207,181,132,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-12">
        {/* Text */}
        <div>
          {/* Vertical accent line */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block w-1 h-16 bg-gold rounded-full" />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Aniket</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl font-light text-white/60 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            I build Intelligent Machines
          </motion.p>

          <motion.p
            className="text-base text-white/40 max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            AI Engineer specializing in building scalable ML systems, LLM-powered applications,
            and transforming raw data into intelligent solutions.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 text-sm font-semibold tracking-wide"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 text-sm font-semibold tracking-wide border border-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <motion.div
          className="h-[420px] w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroCanvas3D />
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-gold rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
