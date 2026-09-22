"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].label.toLowerCase());
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3.5 border-b border-[#E5E7EB] shadow-sm shadow-black/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] inline-block group-hover:scale-125 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-[#B8860B]">Aniket</span>
          <span className="text-xl font-bold tracking-tight text-[#111827]">Tayade</span>
        </a>

        {/* Desktop Nav — morphing dark pill indicator */}
        <ul className="hidden md:flex items-center gap-0.5 bg-[#F3F4F6] p-1.5 rounded-full border border-[#E5E7EB]">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.label)}
                  className={`relative z-10 block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="navbarMorphPill"
                    className="absolute inset-0 bg-[#111827] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="p-2 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] hover:text-[#B8860B] transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-b border-[#E5E7EB] px-6 py-4"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.label;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => { setActiveSection(item.label); setMobileMenuOpen(false); }}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#111827] text-white font-bold"
                          : "text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
