"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.body.style.backgroundColor = next ? "#05070f" : "#f8fafc";
    document.body.style.color = next ? "#e2e8f0" : "#0f172a";
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
      >
        <a href="#home" className="font-mono text-lg font-bold text-white">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-violetGlow">.dev</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-white/15 p-2 text-slate-200 hover:bg-white/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full border border-white/15 p-2 text-slate-200 hover:bg-white/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
