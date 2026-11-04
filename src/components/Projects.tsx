"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <p className="mt-3 text-slate-400">
          Screenshots: add one image per project under <code className="font-mono text-sm">public/projects/</code>{" "}
          and reference it here when you have a real screenshot — no stock mockups passed off as your work.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col p-6"
            >
              <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-violetGlow/40 font-mono text-sm text-slate-300">
                {project.title}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-violetGlow px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Github size={15} /> Repository
                  </a>
                )}
                {!project.demo && !project.repo && (
                  <span className="text-sm text-slate-400">Details on request — no live link yet.</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
