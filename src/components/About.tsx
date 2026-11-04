"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Biography + specializations */}
          <div className="space-y-6">
            <div className="glass space-y-4 p-6 leading-relaxed text-slate-300">
              {about.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {about.specializations.map((spec) => (
                <motion.article
                  key={spec.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-5"
                >
                  <Sparkles className="text-electric" size={20} />
                  <h3 className="mt-2 font-semibold text-white">{spec.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{spec.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Timeline: education + interests */}
          <div className="space-y-6">
            <div className="glass p-6">
              <h3 className="flex items-center gap-2 font-semibold text-white">
                <GraduationCap size={20} className="text-electric" /> Education Timeline
              </h3>
              <ol className="mt-4 space-y-4 border-l border-white/15 pl-5">
                {about.education.map((item) => (
                  <li key={item.label} className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-electric" />
                    <strong className="text-white">{item.label}</strong>
                    <p className="text-slate-300">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass p-6">
              <h3 className="font-semibold text-white">Career interests</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-300"
                  >
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
