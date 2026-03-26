"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    color: "#cfb584",
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
    color: "#a78bfa",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 88 },
      { name: "Bash", level: 75 },
    ],
  },
  {
    title: "MLOps & Cloud",
    color: "#38bdf8",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS SageMaker", level: 80 },
      { name: "MLflow", level: 88 },
      { name: "Airflow", level: 78 },
    ],
  },
  {
    title: "Data & Viz",
    color: "#34d399",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 93 },
      { name: "Spark", level: 78 },
      { name: "Tableau", level: 80 },
      { name: "Plotly", level: 85 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-white/70">{name}</span>
        <span className="text-sm font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-white/5">
        <motion.div
          className="h-1.5 rounded-full"
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
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.06)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-gold mb-2"
        >
          What I Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight"
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
              className="glass rounded-2xl p-6"
              style={{ borderColor: `${cat.color}22` }}
            >
              <h3 className="text-base font-bold mb-5" style={{ color: cat.color }}>
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
