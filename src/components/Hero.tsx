"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const NeuralNetCanvas3D = dynamic(
  () => import("@/components/canvas/FloatingShapes").then((m) => ({ default: m.NeuralNetCanvas3D })),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F7F4] via-[#F3F0EB] to-[#EDE9E0]"
    >
      {/* Subtle ambient light spots */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-[120px] -z-10 morph-blob" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-300/30 rounded-full blur-[100px] -z-10 morph-blob" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,_rgba(184,134,11,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-28 pb-16">
        {/* Text Side */}
        <div>
          {/* Gold accent bar */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block w-1 h-16 bg-[#B8860B] rounded-full" />
            <span className="text-xs tracking-[0.35em] uppercase text-[#B8860B] font-semibold">
              Machine Learning Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4 text-[#111827]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B8860B 0%, #D4A017 40%, #8B6914 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aniket
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl font-light text-[#6B7280] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            I build Intelligent Machines
          </motion.p>

          <motion.p
            className="text-base text-[#9CA3AF] max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Machine Learning Engineer specializing in scalable ML systems,
            LLM-powered applications, and transforming raw data into intelligent solutions.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a
              href="#work"
              className="px-7 py-3 rounded-xl bg-[#B8860B] text-white font-semibold text-sm tracking-wide hover:bg-[#9A7009] transition-colors duration-300 shadow-md shadow-[#B8860B]/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border-2 border-[#E5E7EB] text-[#374151] font-semibold text-sm tracking-wide hover:border-[#B8860B] hover:text-[#B8860B] transition-all duration-300 bg-white"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { num: "400+", label: "Students Taught" },
              { num: "6+", label: "ML Projects" },
              { num: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-[#B8860B]">{stat.num}</p>
                <p className="text-xs text-[#9CA3AF] tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Neural Network 3D Canvas */}
        <motion.div
          className="h-[460px] w-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <NeuralNetCanvas3D />
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-[#D1D5DB] flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-[#B8860B] rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
