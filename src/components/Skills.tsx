"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Skills &amp; Technologies</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass p-6"
            >
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:bg-violetGlow/30 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
