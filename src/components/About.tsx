"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="glass space-y-4 p-6 leading-relaxed text-slate-300">
            {about.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <div className="space-y-6">
            <div className="glass p-6">
              <h3 className="font-semibold text-white">Education</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                {about.education.map((item) => (
                  <li key={item.label}>
                    <strong className="text-white">{item.label}</strong> — {item.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-6">
              <h3 className="font-semibold text-white">Career interests</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
