"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Code2, Briefcase } from "lucide-react";
import { SiKaggle } from "react-icons/si";

const socials = [
  { icon: Code2, label: "GitHub", href: "https://github.com/tayade-aniket" },
  { icon: Briefcase, label: "LinkedIn", href: "https://in.linkedin.com/in/aniket-g-tayade" },
  { icon: SiKaggle, label: "Kaggle", href: "https://www.kaggle.com/annitayade" },
  { icon: Mail, label: "Email", href: "mailto:tayadeanni@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Updated Submit Logic (Resend-ready)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(56,189,248,0.05)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">
          Get In Touch
        </motion.p>

        <motion.h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Contact.
        </motion.h2>

        <motion.p className="text-white/40 mb-14 max-w-lg">
          Whether you have a project in mind, a job opportunity, or just want to talk AI —
          my inbox is always open.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 flex flex-col gap-5"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
                <span className="text-5xl">✉️</span>
                <h3 className="text-xl font-bold text-gold">Message Sent!</h3>
                <p className="text-sm text-white/40">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/50 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition text-white placeholder-white/20"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/50 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition text-white placeholder-white/20"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-white/50 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition resize-none text-white placeholder-white/20"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="mt-2 py-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 text-sm font-semibold tracking-wide disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </motion.button>
              </>
            )}
          </motion.form>

          {/* SOCIAL LINKS */}
          <motion.div className="flex flex-col justify-center gap-6">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-5 rounded-2xl px-6 py-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20">
                  <s.icon size={18} className="text-gold" />
                </div>
                <span className="text-sm font-medium text-white/70">
                  {s.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}