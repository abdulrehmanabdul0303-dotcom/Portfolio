"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Star } from "lucide-react";
import { profile } from "@/data/portfolio";

type GitHubUser = {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

/**
 * Live GitHub data via the public, unauthenticated API.
 * If GitHub rate-limits or the network fails, the section shows a clear
 * message and a link to the profile instead of fake numbers.
 */
export default function GitHubActivity() {
  const user = profile.githubUsername;
  const [data, setData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch(`https://api.github.com/users/${user}`).then((r) => {
        if (!r.ok) throw new Error("user fetch failed");
        return r.json();
      }),
      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`).then((r) => {
        if (!r.ok) throw new Error("repos fetch failed");
        return r.json();
      }),
    ])
      .then(([u, r]) => {
        if (cancelled) return;
        setData(u);
        setRepos(r);
        setStatus("ok");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  return (
    <section id="github" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">GitHub</h2>

        {status === "loading" && (
          <p className="mt-6 text-slate-400">Loading live GitHub data…</p>
        )}

        {status === "error" && (
          <div className="glass mt-6 p-6">
            <p className="text-slate-300">
              Live GitHub data could not be loaded right now (GitHub may be
              rate-limiting public requests). View the profile directly instead:
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-violetGlow px-5 py-2.5 font-semibold text-white hover:brightness-110"
            >
              <Github size={18} /> View GitHub Profile
            </a>
          </div>
        )}

        {status === "ok" && data && (
          <>
            <div className="glass mt-6 flex flex-wrap items-center gap-5 p-6">
              <Image
                src={data.avatar_url}
                alt="Abdul Rehman GitHub avatar"
                width={72}
                height={72}
                unoptimized
                className="rounded-full border border-white/15"
              />
              <div className="flex flex-wrap gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">{data.public_repos}</p>
                  <p className="text-xs text-slate-400">Public repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{data.followers}</p>
                  <p className="text-xs text-slate-400">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{data.following}</p>
                  <p className="text-xs text-slate-400">Following</p>
                </div>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
              >
                <Github size={18} /> Profile
              </a>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <li key={repo.id} className="glass p-5">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:text-electric"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="mt-1 text-sm text-slate-300">{repo.description}</p>
                  )}
                  <p className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star size={13} /> {repo.stargazers_count}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass p-4">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=radical&hide_border=true`}
              alt="GitHub statistics"
              width={480}
              height={190}
              unoptimized
              className="w-full"
            />
          </div>
          <div className="glass p-4">
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=radical&hide_border=true`}
              alt="Top programming languages"
              width={480}
              height={190}
              unoptimized
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
