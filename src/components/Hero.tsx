"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const roles = ["Full-Stack Developer", "AI Automation Developer", "SaaS Builder", "Chatbot Developer"];

export default function Hero() {
  return (
    <section id="home" className="glow flex min-h-screen items-center px-4 pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-cyanGlow">Hello, I&apos;m</p>
          <h1 className="mt-3 bg-gradient-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{profile.title}</p>
          <p className="mt-3 flex flex-wrap gap-2 text-sm text-slate-400">
            {roles.map((role) => (
              <span key={role} className="rounded-full border border-white/15 px-3 py-1">
                {role}
              </span>
            ))}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">{profile.tagline}</p>
          <p className="mt-3 text-sm text-slate-400">{profile.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violetGlow px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass p-6 text-center"
        >
          {/* Replace the initials block with your photo when ready. */}
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-violetGlow to-cyanGlow text-5xl font-extrabold text-white">
            AR
          </div>
          <p className="mt-5 font-mono text-sm text-slate-300">Websites · Apps · SaaS · Bots · SEO</p>
          <p className="mt-2 text-sm text-slate-400">
            End-to-end builds — design, development, launch, follow-up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
