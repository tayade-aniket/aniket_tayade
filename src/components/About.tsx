"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CardCanvas3D = dynamic(
  () => import("@/components/canvas/FloatingShapes").then((m) => ({ default: m.CardCanvas3D })),
  { ssr: false }
);

const roles = [
  { title: "AI Engineer", color: "#cfb584", desc: "Building production-grade ML pipelines and model serving systems." },
  { title: "MLOps Engineer", color: "#38bdf8", desc: "Deploying, monitoring, and scaling ML models in the cloud." },
  { title: "Data Scientist", color: "#34d399", desc: "Uncovering insights from complex datasets using statistical methods." },
  { title: "Python Instructor", color: "#a78bfa", desc: "Crafting powerful backend services and data processing workflows." },
];

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.04, y: -6 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group cursor-default"
      style={{ borderColor: `${role.color}22` }}
    >
      {/* 3D canvas top */}
      <div className="h-36 w-full">
        <CardCanvas3D color={role.color} />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3
          className="text-lg font-bold tracking-tight text-center"
          style={{ color: role.color }}
        >
          {role.title}
        </h3>
        <p className="text-xs text-white/40 text-center leading-relaxed">
          {role.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* background gradient accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,58,237,0.07)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-gold mb-2"
        >
          Introduction
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          About Me.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 max-w-2xl leading-relaxed text-base mb-10"
        >
          Developer turned AI Engineer, I design and implement intelligent systems that solve real-world problems.
          My expertise in mathematics and statistics fuels my passion for building ML solutions that are
          both powerful and production-ready — from LLM fine-tuning to full-scale MLOps pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <a
            href="/data_scientist_tayade_aniket.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-gold/30 text-gold font-bold hover:bg-gold hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(207,181,132,0.1)] hover:shadow-[0_0_30px_rgba(207,181,132,0.3)]"
          >
            <span className="text-xl">📄</span> Download Full Resume
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={role.title} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
