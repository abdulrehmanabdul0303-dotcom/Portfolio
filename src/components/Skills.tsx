"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Monitor, Server } from "lucide-react";
import TiltCard from "./TiltCard";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, typeof Brain> = {
  "AI & LLM": Brain,
  Backend: Server,
  Frontend: Monitor,
  "Cloud & Tools": Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Skills &amp; Technologies</h2>
        <p className="mt-3 text-slate-400">
          Hover a card to tilt it. Every skill below is one abdul actually works with.
        </p>
        {/* Bento-style grid: AI card spans two columns on large screens. */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.title] ?? Brain;
            const wide = group.title === "AI & LLM" ? "lg:col-span-2" : "";
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={wide}
              >
                <TiltCard className="glass h-full p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-white">
                    <Icon size={20} className="text-electric" /> {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        title={item}
                        className="cursor-default rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:bg-violetGlow/30 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
