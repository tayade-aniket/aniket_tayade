"use client";

import { motion } from "framer-motion";
import { Eye, Code } from "lucide-react";

const projects = [
  {
    title: "Medical Report OCR using YOLO & Tesseract",
    description:
      "End-to-end Medical Report OCR system using YOLO for text detection and Tesseract for text extraction. Automatically converts lab reports into structured CSV/JSON data using Computer Vision & Deep Learning.",
    tags: ["YOLO", "Tesseract", "OpenCV", "Deep Learning", "Google Colab"],
    color: "#B8860B",
    bg: "#FEF9EC",
    github: "https://github.com/tayade-aniket/Medical-Report-OCR-YOLO-Tesseract",
    live: "https://github.com/tayade-aniket/Medical-Report-OCR-YOLO-Tesseract",
  },
  {
    title: "NEWS Research Analysis",
    description:
      "AI-Powered News Analysis Tool — an interactive news research app using Groq LLM + LangChain + Streamlit. Features smart summaries, validation, query history, exports, and a custom UI.",
    tags: ["Groq LLM", "LangChain", "Streamlit", "Plotly", "python-dotenv"],
    color: "#7C3AED",
    bg: "#F5F3FF",
    github: "https://github.com/tayade-aniket/news_research_analysis",
    live: "https://github.com/tayade-aniket/news_research_analysis",
  },
  {
    title: "Job Market Analysis",
    description:
      "A comprehensive data analytics platform that analyzes job market trends and provides personalized job recommendations using real-time job posting data.",
    tags: ["Python", "Scikit-learn", "NLTK", "Plotly", "Streamlit"],
    color: "#0284C7",
    bg: "#EFF6FF",
    github: "https://github.com/tayade-aniket/job_market_analysis_NHIS",
    live: "https://github.com/tayade-aniket/job_market_analysis_NHIS",
  },
  {
    title: "Twitter Disaster Classification",
    description:
      "Machine-learning model to classify tweets as disaster or non-disaster. Preprocessed text, extracted features with TF-IDF/embeddings, trained models including Logistic Regression and BERT.",
    tags: ["Tokenization", "Lemmatization", "TF-IDF", "Logistic Regression", "BERT"],
    color: "#059669",
    bg: "#ECFDF5",
    github: "https://github.com/tayade-aniket/twitter_disaster_classification_NHITS",
    live: "https://github.com/tayade-aniket/twitter_disaster_classification_NHITS",
  },
  {
    title: "Rossmann Store Sales Forecasting",
    description:
      "Comprehensive data science project predicting sales for Rossmann stores using advanced ML techniques — from exploratory data analysis to model deployment.",
    tags: ["Random Forest", "Gradient Boosting", "XGBoost Regressor", "Model Serialization"],
    color: "#EA580C",
    bg: "#FFF7ED",
    github: "https://github.com/tayade-aniket",
    live: "https://github.com/tayade-aniket",
  },
  {
    title: "EDA for Real Estate Pricing",
    description:
      "Explores real estate pricing data through detailed EDA to uncover key insights into how various factors influence home sale prices using visualization and statistical methods.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    color: "#DB2777",
    bg: "#FDF2F8",
    github: "https://github.com/tayade-aniket/eda_for_real_estate_pricing-NHIS",
    live: "https://github.com/tayade-aniket/eda_for_real_estate_pricing-NHIS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-[#F8F7F4]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(184,134,11,0.04)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#B8860B] font-semibold mb-2"
        >
          What I&apos;ve Built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight text-[#111827]"
        >
          Projects.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl flex flex-col gap-4 group relative overflow-hidden h-[340px] bg-white border border-[#E5E7EB]"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              {/* Top color bar — expands on hover */}
              <div
                className="h-1.5 w-12 rounded-b-none transition-all duration-500 group-hover:w-full flex-shrink-0"
                style={{ background: proj.color }}
              />

              <div className="px-6 pb-4 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-bold leading-snug" style={{ color: proj.color }}>
                  {proj.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-4">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md"
                      style={{
                        border: `1px solid ${proj.color}33`,
                        color: proj.color,
                        background: proj.bg,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay — dark, shows links */}
              <motion.div
                className="absolute inset-0 bg-[#111827]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0"
              >
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all font-bold text-sm"
                >
                  <Code size={16} /> GitHub
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#111827] hover:bg-[#F3F4F6] transition-all font-bold text-sm"
                >
                  <Eye size={16} /> Live Demo
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
