"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-violetGlow to-cyanGlow"
    />
  );
}
