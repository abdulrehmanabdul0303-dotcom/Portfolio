"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Heavy 3D code loads only in the browser, never on the server.
const NeuralCore = dynamic(() => import("./NeuralCore"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-slate-400">
      Loading 3D scene…
    </div>
  ),
});

/**
 * WebGL fallback: if the device cannot run WebGL, show a CSS glow orb
 * instead of a broken canvas. Keeps the hero beautiful on every device.
 */
export default function HeroScene() {
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok = Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
      setWebgl(ok);
    } catch {
      setWebgl(false);
    }
  }, []);

  if (!webgl) {
    return (
      <div
        aria-hidden="true"
        className="mx-auto h-72 w-72 rounded-full bg-gradient-to-br from-violetGlow via-electric to-cyanGlow opacity-70 blur-2xl"
      />
    );
  }

  return (
    <div className="h-[420px] w-full sm:h-[500px]">
      <NeuralCore />
    </div>
  );
}
