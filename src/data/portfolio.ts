// ============================================================
// EDIT ONLY THIS FILE to change portfolio content.
// Facts are from abdul's verified record. Add a repo/demo link
// only when it is genuinely live — never invent one.
// ============================================================

export const profile = {
  name: "Abdul Rehman",
  title: "AI Automation Engineer | Full-Stack Developer | SaaS Builder | AI Chatbot Developer",
  tagline:
    "I build complete digital products end to end — websites, apps, SaaS, AI chatbots and automation that stops businesses missing customers.",
  location: "Pakistan · Working worldwide, remotely",
  email: "abdulrehmanabdul0303@gmail.com",
  github: "https://github.com/abdulrehmanabdul0303-dotcom",
  githubUsername: "abdulrehmanabdul0303-dotcom",
  linkedin: "https://www.linkedin.com/in/abdul-rehman-8bba033b3/",
  instagram: "https://www.instagram.com/rhm.dev",
};

export const roles = [
  "AI Automation Engineer",
  "Full-Stack Developer",
  "SaaS Builder",
  "AI Chatbot Developer",
];

export const about = {
  bio: [
    "I am a full-stack and AI automation developer. My work is not just code — it is products ready for real customers: designed, built, launched, and followed up.",
    "I help small businesses and startups turn an idea into a working website, app, SaaS product, or chatbot — and automate the repetitive work that eats their day.",
  ],
  specializations: [
    {
      title: "AI & Automation",
      detail:
        "RAG chatbots, agentic workflows, and business automation that answers customers and follows up on leads.",
    },
    {
      title: "Full-Stack Development",
      detail:
        "Websites, web apps and SaaS platforms — from database and API to a polished, responsive interface.",
    },
    {
      title: "Career Focus",
      detail:
        "Products that launch, convert, and keep working — for clients worldwide, remotely.",
    },
  ],
  education: [
    { label: "BCS", detail: "COMSATS University, Vehari" },
    { label: "MS Cybersecurity (in progress)", detail: "ITU Lahore" },
  ],
  interests: [
    "AI chatbots & RAG systems",
    "SaaS products & MVPs",
    "Business process automation",
    "SEO & GEO visibility",
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "AI & LLM", items: ["Python", "LangChain", "LangGraph", "RAG", "TensorFlow", "PyTorch", "Prompt engineering"] },
  { title: "Backend", items: ["FastAPI", "Node.js", "NestJS", "PostgreSQL"] },
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Cloud & Tools", items: ["Docker", "AWS", "Git", "GitHub", "Linux"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string; // add only a genuinely live repo URL
};

export const projects: Project[] = [
  {
    title: "CSVUndo",
    description:
      "A privacy-first, browser-based CSV repair and processing tool: fixes Excel-damaged CSVs (scientific notation, lost leading zeros, garbled characters), plus clean, merge, split, join, validate and Shopify fixing. No signup — files never leave the browser.",
    tags: ["CSV tools", "Privacy-first", "Web app"],
    demo: "https://csvundo.com/",
  },
  {
    title: "Mizan ERP",
    description:
      "A multi-tenant SaaS business management system: organisations, users and business operations in one platform.",
    tags: ["SaaS", "Multi-tenant", "Full-stack"],
  },
  {
    title: "RAG & Agentic AI Chatbot Platform",
    description:
      "An AI knowledge chatbot with agentic workflows: answers from your own business information and takes the next step — not just one reply.",
    tags: ["RAG", "AI chatbots", "Automation"],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];
