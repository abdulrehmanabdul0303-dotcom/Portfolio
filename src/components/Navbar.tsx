"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

/** Floating glass nav with active-section highlighting. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-lg shadow-black/40 backdrop-blur-xl"
      >
        <a href="#home" className="font-mono text-lg font-bold text-white">
          abdul<span className="text-electric">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === link.href
                    ? "bg-violetGlow/30 text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-violetGlow px-4 py-2 text-sm font-semibold text-white hover:brightness-110 sm:inline-block"
          >
            Hire Me
          </a>
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
        <ul className="mx-auto mt-2 max-w-5xl space-y-1 rounded-2xl border border-white/10 bg-ink/90 p-3 backdrop-blur-xl md:hidden">
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
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="block rounded-lg bg-violetGlow px-3 py-2 text-center font-semibold text-white"
            >
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
