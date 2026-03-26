"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "AI Engineer",
    company: "SyntexHub",
    icon: "🤖",
    iconBg: "#cfb584",
    date: "2026 - Present",
    points: [
      "Contributed to the development and deployment of LLM-powered applications using OpenAI APIs, LangChain, and vector databases.",
      "Built and optimized ML pipelines for NLP tasks such as text classification, named entity recognition (NER), and summarization.",
      "Developed Retrieval-Augmented Generation (RAG) pipelines for knowledge-based query systems.",
      "Reduced model inference latency by up to 3× using quantization and ONNX Runtime optimization.",
    ],
  },
  {
    title: "Jr. Data Scientist Intern",
    company: "NextHike IT Solutions",
    icon: "📊",
    iconBg: "#7c3aed",
    date: "2025 – 2026",
    points: [
      "Developed computer vision models for object detection and image segmentation using PyTorch.",
      "Assisted in building MLOps workflows using MLflow and Docker for experiment tracking and model versioning.",
      "Optimized model training workflows and improved overall pipeline efficiency through data preprocessing and hyperparameter tuning.",
      "Collaborated with product teams to translate business requirements into data-driven ML solutions.",
    ],
  },
  {
    title: "Python Instructor",
    company: "Vision Computer Academy",
    icon: "🐍",
    iconBg: "#34d399",
    date: "2023 - 2025",
    points: [
      "Delivered structured training in Python programming and backend development to 400+ students, covering fundamentals to advanced concepts.",
      "Delivered practical training in Python and backend development, focusing on real-world applications.",
      "Built and demonstrated RESTful APIs using Django and FastAPI as part of hands-on learning modules.",
      "Guided students on industry best practices including Git version control, debugging, and code optimization.",
      "Provided foundational exposure to CI/CD concepts using GitHub Actions and Jenkins."
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(207,181,132,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-gold mb-2"
        >
          My Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight"
        >
          Work Experience.
        </motion.h2>

        <VerticalTimeline lineColor="rgba(207,181,132,0.2)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: `7px solid rgba(255,255,255,0.05)` }}
              date={exp.date}
              dateClassName="text-white/40 text-sm"
              iconStyle={{
                background: exp.iconBg,
                boxShadow: `0 0 0 4px rgba(255,255,255,0.08), 0 0 20px ${exp.iconBg}55`,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<span>{exp.icon}</span>}
            >
              <h3 className="text-lg font-bold mb-0.5">{exp.title}</h3>
              <p className="text-sm text-white/40 mb-3 mt-1">{exp.company}</p>
              <ul className="list-none space-y-2 mt-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
