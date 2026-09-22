"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CardCanvas3D = dynamic(
  () => import("@/components/canvas/FloatingShapes").then((m) => ({ default: m.CardCanvas3D })),
  { ssr: false }
);

const roles = [
  { title: "Machine Learning Engineer", color: "#B8860B", bg: "#FEF9EC", desc: "Building production-grade ML pipelines and model serving systems." },
  { title: "Front-End Web Developer", color: "#0284C7", bg: "#EFF6FF", desc: "Crafting responsive, dynamic user interfaces with Next.js, React, and modern CSS." },
  { title: "Data Scientist", color: "#059669", bg: "#ECFDF5", desc: "Uncovering insights from complex datasets using statistical methods." },
  { title: "Python Instructor", color: "#7C3AED", bg: "#F5F3FF", desc: "Teaching Python programming, backend services, and data processing workflows." },
];

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="rounded-2xl overflow-hidden flex flex-col cursor-default border border-[#E5E7EB] bg-white"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
    >
      {/* Colored canvas top */}
      <div className="h-36 w-full" style={{ background: role.bg }}>
        <CardCanvas3D color={role.color} />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3
          className="text-sm font-bold tracking-tight text-center"
          style={{ color: role.color }}
        >
          {role.title}
        </h3>
        <p className="text-xs text-[#9CA3AF] text-center leading-relaxed">
          {role.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      {/* Subtle background tint */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,134,11,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-[#B8860B] font-semibold mb-2"
        >
          Introduction
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#111827]"
        >
          About Me.
        </motion.h2>

        {/* Bio */}
        <div className="max-w-3xl mb-10 space-y-4 leading-relaxed text-base">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6B7280]"
          >
            I&apos;m a Machine Learning Engineer who enjoys turning messy data and half-formed ideas into things that actually work. My journey started with software development and teaching, and eventually led me into Data Science, Machine Learning, and Generative AI. Today, I work with Python, ML models, LLMs, RAG, and AI applications—basically, I spend a good amount of time teaching machines what to do and an even greater amount of time figuring out why they suddenly decided not to.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-[#6B7280]"
          >
            I like building practical AI solutions rather than chasing buzzwords. I&apos;m especially interested in projects where AI can solve a real problem, simplify something complicated, or save someone a few hours of repetitive work. Outside of coding, I enjoy exploring new technology and experimenting with ideas that occasionally become projects—and occasionally become another folder on my laptop called{" "}
            <code className="bg-[#111827] text-[#B8860B] px-1.5 py-0.5 rounded text-sm font-mono">
              final_final_v2
            </code>.
          </motion.p>
        </div>

        {/* Resume button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-16"
        >
          <a
            href="/ml_enigneer_aniket_tayade_resume.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#B8860B] text-[#B8860B] font-bold hover:bg-[#B8860B] hover:text-white transition-all duration-300 shadow-sm"
          >
            <span className="text-xl">📄</span> Download Full Resume
          </a>
        </motion.div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={role.title} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
