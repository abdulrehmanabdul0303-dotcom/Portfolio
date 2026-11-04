"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

/**
 * Contact form note: this form builds a pre-filled email in the visitor's
 * own mail app (mailto). It does NOT send mail by itself and stores nothing.
 * For a real backend form, add a form service or API route later.
 */
export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${name || "a visitor"}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form
            className="glass space-y-4 p-6"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div>
              <label htmlFor="contact-name" className="text-sm text-slate-300">Your name</label>
              <input
                id="contact-name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-violetGlow"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm text-slate-300">Your project</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-violetGlow"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-violetGlow px-6 py-3 font-semibold text-white hover:brightness-110"
            >
              Send via email
            </button>
          </form>

          <div className="glass space-y-4 p-6">
            <p className="leading-relaxed text-slate-300">
              Have a website, app, SaaS idea, chatbot, or automation project? Tell me what you need — design,
              build, launch and follow-up, all in one place.
            </p>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-white hover:text-cyanGlow">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyanGlow">
              <Github size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyanGlow">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
