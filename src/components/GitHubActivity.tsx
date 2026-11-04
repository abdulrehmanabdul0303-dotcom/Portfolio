import Image from "next/image";
import { profile } from "@/data/portfolio";

/**
 * Live GitHub widgets (same services as the profile README).
 * They render your real public activity — nothing is faked here.
 * If a widget service is down, that card simply shows blank until it recovers.
 */
export default function GitHubActivity() {
  const user = profile.githubUsername;
  return (
    <section id="github" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">GitHub Activity</h2>
        <p className="mt-3 text-slate-400">
          Live from <a href={profile.github} className="text-cyanGlow underline" target="_blank" rel="noreferrer">github.com/{user}</a> — public repositories and activity only.
        </p>
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
        <p className="mt-6 text-sm text-slate-400">
          Recent activity and the full repository list live on your GitHub profile itself — this section links
          there rather than copying a snapshot that would go stale.
        </p>
      </div>
    </section>
  );
}
