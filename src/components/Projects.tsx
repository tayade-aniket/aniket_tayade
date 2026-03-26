"use client";

import { motion } from "framer-motion";
import { Eye, Code } from "lucide-react";

const projects = [
  {
    title: "Medical Report OCR using YOLO & Tesseract",
    description:
      "End-to-end Medical Report OCR system using YOLO for text detection and Tesseract for text extraction. Automatically converts lab reports into structured CSV/JSON data using Computer Vision & Deep Learning.",
    tags: ["YOLO", "Tesseract", "OpenCV", "Deep Learning", "Google Colab"],
    color: "#cfb584",
    github: "https://github.com/tayade-aniket/Medical-Report-OCR-YOLO-Tesseract",
    live: "https://github.com/tayade-aniket/Medical-Report-OCR-YOLO-Tesseract",
  },
  {
    title: "NEWS Research Analysis",
    description:
      "AI-Powered News Analysis Tool An interactive news research app using Groq LLM + LangChain + Streamlit. Features secure login, smart summaries, validation, query history, exports, and a custom Orange-White-Black UI.",
    tags: ["Groq LLM", "LangChain ", "Streamlit", "plotly", "python-dotenv"],
    color: "#7c3aed",
    github: "https://github.com/tayade-aniket/news_research_analysis",
    live: "https://github.com/tayade-aniket/news_research_analysis",
  },
  {
    title: "Job Market Analysis",
    description:
      "A comprehensive data analytics platform that analyzes job market trends and provides personalized job recommendations using real-time job posting data. The system helps job seekers identify high-demand roles, salary trends, and emerging opportunities.",
    tags: ["Python", "Scikit-learn", "NLTK", "Plotly", "Streamlit"],
    color: "#38bdf8",
    github: "https://github.com/tayade-aniket/job_market_analysis_NHIS",
    live: "https://github.com/tayade-aniket/job_market_analysis_NHIS",
  },
  {
    title: "Twitter Disaster Classification",
    description:
      "Built a machine-learning model to classify tweets as disaster or non-disaster. Preprocessed text (cleaning, tokenization, lemmatization), extracted features with TF-IDF/embeddings, and trained models like Logistic Regression and BERT, achieving strong accuracy and a simple web app for live predictions.",
    tags: ["Tokenization", "Lemmatization", "TF-IDF", "Logistic Regression", "BERT"],
    color: "#34d399",
    github: "https://github.com/tayade-aniket/twitter_disaster_classification_NHITS",
    live: "https://github.com/tayade-aniket/twitter_disaster_classification_NHITS",
  },
  {
    title: "Rossmann Store Sales Forecasting Analysis",
    description:
      "Comprehensive data science project focused on predicting sales for Rossmann stores using advanced machine learning techniques. The project demonstrates the complete data science workflow from exploratory data analysis to model deployment.",
    tags: ["Random Forest", "Gradient Boosting", "XGBoost Regressor", "Model Serialization"],
    color: "#fb923c",
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    title: "EDA for Real Estate Pricing",
    description:
      "This project explores real estate pricing data through detailed exploratory data analysis (EDA) to uncover key insights into how various factors influence home sale prices. Using visualization techniques and statistical methods, the analysis identifies correlations, trends over time, and the impact of quality and features on housing value.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    color: "#f472b6",
    github: "https://github.com/tayade-aniket/eda_for_real_estate_pricing-NHIS",
    live: "https://github.com/tayade-aniket/eda_for_real_estate_pricing-NHIS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(207,181,132,0.05)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-gold mb-2"
        >
          What I&apos;ve Built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 tracking-tight"
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
              className="glass rounded-2xl p-6 flex flex-col gap-4 group relative overflow-hidden h-[340px]"
              style={{ borderColor: `${proj.color}22` }}
            >
              {/* Top accent line */}
              <div
                className="h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ background: proj.color }}
              />

              <h3 className="text-xl font-bold" style={{ color: proj.color }}>
                {proj.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md border"
                    style={{
                      borderColor: `${proj.color}33`,
                      color: `${proj.color}cc`,
                      background: `${proj.color}11`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Overlay with links - visible on hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0"
              >
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all font-bold text-sm"
                >
                  <Code size={18} /> Github Link
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black hover:bg-white/80 transition-all font-bold text-sm"
                >
                  <Eye size={18} /> Live Link
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
