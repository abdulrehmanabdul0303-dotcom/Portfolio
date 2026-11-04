import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — AI Automation Engineer & Full-Stack Developer`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — AI Automation Engineer & Full-Stack Developer`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
