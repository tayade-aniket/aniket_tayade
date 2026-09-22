"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold tracking-tight flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#B8860B] inline-block" />
          <span className="text-[#B8860B]">Aniket</span>
          <span className="text-[#111827]">Tayade</span>
        </div>
        <p className="text-sm text-[#9CA3AF] text-center">
          Made with <span style={{ color: "#B8860B" }}>♥</span> by Aniket Tayade © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="flex gap-6 text-xs text-[#9CA3AF] tracking-wider uppercase">
          {["About", "Work", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#B8860B] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
