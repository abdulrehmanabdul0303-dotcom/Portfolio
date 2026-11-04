"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import HeroScene from "./3d/HeroScene";
import MagneticButton from "./MagneticButton";
import { profile, roles } from "@/data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="glow relative flex min-h-screen items-center px-4 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-electric">Hello, I&apos;m</p>
          <h1 className="mt-3 bg-gradient-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl">
            {profile.name}
          </h1>

          {/* Animated roles — cycles through the four real titles. */}
          <div className="mt-4 h-8 overflow-hidden" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-xl font-semibold text-white sm:text-2xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-4 max-w-xl leading-relaxed text-slate-300">{profile.tagline}</p>
          <p className="mt-3 text-sm text-slate-400">{profile.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">
              View Projects <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} variant="ghost">
              Hire Me
            </MagneticButton>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
          {/* No "Download Resume" button: no verified public resume file
              exists in this repository, so no download is offered. */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
