"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    color: "#B8860B",
    bg: "#FEF9EC",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-Learn", level: 92 },
      { name: "Hugging Face", level: 88 },
      { name: "LangChain", level: 85 },
      { name: "OpenAI API", level: 90 },
    ],
  },
  {
    title: "Languages",
    color: "#7C3AED",
    bg: "#F5F3FF",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 88 },
      { name: "Bash", level: 75 },
    ],
  },
  {
    title: "MLOps & Cloud",
    color: "#0284C7",
    bg: "#EFF6FF",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "CI/CD", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Streamlit deployment", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "MLflow", level: 86 },
      { name: "Airflow", level: 80 },
    ],
  },
  {
    title: "Data & Viz",
    color: "#059669",
    bg: "#ECFDF5",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 93 },
      { name: "Spark", level: 78 },
      { name: "Tableau", level: 80 },
      { name: "Plotly", level: 85 },
    ],
  },
];

function SkillBar({
  name, level, color, delay,
}: {
  name: string; level: number; color: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-[#374151] font-medium">{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-[#F3F4F6]">
        <motion.div
          className="h-2 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88 0%, ${color} 100%)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.03)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#B8860B] font-semibold mb-2"
        >
          What I Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight text-[#111827]"
        >
          Skills &amp; Technologies.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl p-6 border border-[#E5E7EB] bg-white"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
            >
              {/* Category header with tinted icon bar */}
              <div
                className="w-full h-1 rounded-full mb-4"
                style={{ background: cat.color }}
              />
              <h3 className="text-sm font-bold mb-5 uppercase tracking-wider" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={ci * 0.1 + si * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
