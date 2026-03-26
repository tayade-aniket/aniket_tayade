"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-gold">Aniket</span> Tayade
        </div>
        <p className="text-sm text-white/25 text-center">
          Made with <span style={{ color: "red" }}>&hearts;</span> by Aniket Tayade © {new Date().getFullYear()} All rights reserved.
        </p>
        <ul className="flex gap-6 text-xs text-white/30 tracking-wider uppercase">
          {["About", "Work", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer >
  );
}
