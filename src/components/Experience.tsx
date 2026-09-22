"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Jr. Data Scientist",
    company: "NextHike IT Solutions",
    icon: "📊",
    iconBg: "#7C3AED",
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
    iconBg: "#059669",
    date: "2023 - 2025",
    points: [
      "Delivered structured training in Python programming and backend development to 400+ students, covering fundamentals to advanced concepts.",
      "Delivered practical training in Python and backend development, focusing on real-world applications.",
      "Built and demonstrated RESTful APIs using Django and FastAPI as part of hands-on learning modules.",
      "Guided students on industry best practices including Git version control, debugging, and code optimization.",
      "Provided foundational exposure to CI/CD concepts using GitHub Actions and Jenkins.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company: "Freelance & Independent Projects",
    icon: "💻",
    iconBg: "#0284C7",
    date: "2022 - 2023",
    points: [
      "Engineered high-performance, responsive web interfaces using React, Next.js, and modern CSS/Tailwind.",
      "Developed reusable UI component libraries and integrated RESTful APIs for seamless data interaction.",
      "Optimized web performance, client-side rendering, and asset delivery to ensure fast load times and accessibility.",
      "Collaborated with clients to convert Figma designs and wireframes into clean, production-ready code.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="relative py-24 overflow-hidden bg-[#F8F7F4]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(184,134,11,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-[#B8860B] font-semibold mb-2"
        >
          My Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight text-[#111827]"
        >
          Work Experience.
        </motion.h2>

        <VerticalTimeline lineColor="rgba(184,134,11,0.25)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                color: "#111827",
                padding: "1.5rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #E5E7EB" }}
              date={exp.date}
              dateClassName="text-[#9CA3AF] text-sm font-medium"
              iconStyle={{
                background: exp.iconBg,
                boxShadow: `0 0 0 4px rgba(255,255,255,0.9), 0 0 0 6px ${exp.iconBg}40, 0 4px 12px ${exp.iconBg}55`,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<span>{exp.icon}</span>}
            >
              <h3 className="text-lg font-bold mb-0.5 text-[#111827]">{exp.title}</h3>
              <p className="text-sm text-[#B8860B] font-semibold mb-3 mt-1">{exp.company}</p>
              <ul className="list-none space-y-2 mt-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#6B7280] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
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
