// ============================================================
// EDIT ONLY THIS FILE to change your portfolio content.
// Facts below are real (from your CV/record). Items marked TODO
// are placeholders — replace them only with genuinely live links.
// Do NOT invent clients, testimonials, stats, or employment claims.
// ============================================================

export const profile = {
  name: "Abdul Rehman",
  title: "AI Automation & Full-Stack Developer",
  tagline:
    "I build complete digital products end to end — websites, apps, SaaS, AI chatbots and automation that stops businesses missing customers.",
  location: "Pakistan · Working worldwide, remotely",
  email: "abdulrehmanabdul0303@gmail.com",
  github: "https://github.com/abdulrehmanabdul0303-dotcom",
  githubUsername: "abdulrehmanabdul0303-dotcom",
  linkedin: "https://www.linkedin.com/in/abdul-rehman-8bba033b3/",
  instagram: "https://www.instagram.com/rhm.dev",
};

export const about = {
  bio: [
    "I am a full-stack and AI automation developer. My work is not just code — it is products ready for real customers: designed, built, launched, and followed up.",
    "I help small businesses and startups turn an idea into a working website, app, SaaS product, or chatbot — and automate the repetitive work that eats their day.",
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
  { title: "AI & LLM", items: ["RAG systems", "LangChain", "LangGraph", "Prompt engineering", "Embeddings", "TensorFlow", "PyTorch"] },
  { title: "Backend", items: ["Python", "FastAPI", "Node.js", "NestJS", "PostgreSQL"] },
  { title: "Frontend & Web", items: ["Websites", "Web apps", "Responsive design", "SEO", "GEO"] },
  { title: "Cloud & Tools", items: ["Docker", "AWS", "Git", "GitHub", "Linux", "VS Code"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string; // TODO: add only a genuinely live repo URL
};

export const projects: Project[] = [
  {
    title: "CSVUndo",
    description:
      "Free, private, in-browser tool that repairs Excel-damaged CSV files (scientific notation, lost leading zeros, garbled characters), plus clean, merge, split, join, validate and Shopify fixing. No signup — files never leave the browser.",
    tags: ["CSV tools", "Privacy-first", "Web app"],
    demo: "https://csvundo.com/",
  },
  {
    title: "Mizan ERP — Multi-tenant SaaS",
    description:
      "A complete multi-tenant ERP platform: organisations, users and business operations in one system.",
    tags: ["SaaS", "Multi-tenant", "Full-stack"],
    // TODO: add demo/repo only when a live link exists
  },
  {
    title: "RAG & Agentic AI Chatbot Platform",
    description:
      "An AI chatbot platform that answers from your own business information, with agentic workflows that take the next step — not just one reply.",
    tags: ["RAG", "AI chatbots", "Automation"],
    // TODO: add demo/repo only when a live link exists
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
