"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Code2, Briefcase } from "lucide-react";
import { SiKaggle } from "react-icons/si";

const socials = [
  { icon: Code2, label: "GitHub", sub: "github.com/tayade-aniket", href: "https://github.com/tayade-aniket" },
  { icon: Briefcase, label: "LinkedIn", sub: "in/aniket-g-tayade", href: "https://in.linkedin.com/in/aniket-g-tayade" },
  { icon: SiKaggle, label: "Kaggle", sub: "kaggle.com/annitayade", href: "https://www.kaggle.com/annitayade" },
  { icon: Mail, label: "Email", sub: "tayadeanni@gmail.com", href: "mailto:tayadeanni@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(184,134,11,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#B8860B] font-semibold mb-2"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#111827]"
        >
          Contact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#6B7280] mb-14 max-w-lg leading-relaxed"
        >
          Whether you have a project in mind, a job opportunity, or just want to talk AI —
          my inbox is always open.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 flex flex-col gap-5 border border-[#E5E7EB] bg-white"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
                <span className="text-5xl">✉️</span>
                <h3 className="text-xl font-bold text-[#B8860B]">Message Sent!</h3>
                <p className="text-sm text-[#9CA3AF]">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#374151] font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition text-[#111827] placeholder-[#9CA3AF]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#374151] font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition text-[#111827] placeholder-[#9CA3AF]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#374151] font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition resize-none text-[#111827] placeholder-[#9CA3AF]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="mt-2 py-3 rounded-xl bg-[#B8860B] text-white font-semibold text-sm tracking-wide hover:bg-[#9A7009] transition-colors duration-300 disabled:opacity-50 shadow-md shadow-[#B8860B]/20"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </motion.button>
              </>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl px-6 py-4 border border-[#E5E7EB] bg-white hover:border-[#B8860B]/40 hover:shadow-md transition-all duration-300 group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#F5EDD0] flex items-center justify-center border border-[#B8860B]/20 group-hover:bg-[#B8860B] transition-colors duration-300 flex-shrink-0">
                  <s.icon size={18} className="text-[#B8860B] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111827]">{s.label}</p>
                  <p className="text-xs text-[#9CA3AF]">{s.sub}</p>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}