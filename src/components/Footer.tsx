import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.name} — Websites · Apps · SaaS · Bots · Automation · SEO
      </p>
      <p className="mt-1">
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline hover:text-white">
          GitHub
        </a>{" "}
        ·{" "}
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
