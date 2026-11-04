"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

/**
 * Contact form with real validation. Submission opens the visitor's own
 * email app with a pre-filled message (mailto) — nothing is stored on
 * this site, and that is stated plainly under the form.
 */
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.trim().length < 10) next.message = "Please write at least 10 characters about your project.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`
    )}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const inputCls =
    "mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none focus:border-electric";

  return (
    <section id="contact" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="mt-3 max-w-xl text-slate-300">
          Have a website, app, SaaS idea, chatbot, or automation project? Tell me what you need —
          design, build, launch and follow-up, all in one place.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form onSubmit={submit} noValidate className="glass space-y-4 p-6">
            <div>
              <label htmlFor="contact-name" className="text-sm text-slate-300">Your name</label>
              <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              {errors.name && <p className="mt-1 text-sm text-rose-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm text-slate-300">Your email</label>
              <input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
              {errors.email && <p className="mt-1 text-sm text-rose-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm text-slate-300">Your project</label>
              <textarea id="contact-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={inputCls} />
              {errors.message && <p className="mt-1 text-sm text-rose-400">{errors.message}</p>}
            </div>
            <button type="submit" className="rounded-full bg-violetGlow px-6 py-3 font-semibold text-white hover:brightness-110">
              Send Message
            </button>
            {sent && (
              <p role="status" className="text-sm text-emerald-400">
                Your email app should now be open with the message ready — press Send there to deliver it.
              </p>
            )}
            <p className="text-xs text-slate-400">
              This form opens your email app. Nothing is stored on this website.
            </p>
          </form>

          <div className="glass space-y-4 p-6">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-white hover:text-electric">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-electric">
              <Github size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-electric">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
