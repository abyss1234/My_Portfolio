export const profile = {
  name: "Ng Boon Bin",
  role: "Fresh Computer Science Graduate",
  headline:
    "Motivated Computer Science graduate seeking an entry-level technology role.",
  summary:
    "I am open to opportunities in software development, backend systems, web applications, networking, automation, and AI-enabled products, where I can contribute practical skills while continuing to grow across the software development lifecycle.",
  email: "nboonbin@gmail.com",
  github: "https://github.com/abyss1234",
  linkedin: "https://linkedin.com/in/boonbin-ng",
  location: "Selangor, Malaysia",
  resume: "/NgBoonBin-CV-Resume.pdf",
  avatar: "/avatar.jpg",
};

export const contactForm = {
  web3FormsAccessKey: "6831791c-6291-4ef3-9ada-7fd9ecc81d41",
  subject: "New portfolio message from Ng Boon Bin website",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "HTML/CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Web",
    items: ["FastAPI", "JavaFX", "Next.js", "React", "Astro", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["REST APIs", "Prisma", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Platforms",
    items: ["Docker", "GitHub Actions", "Ubuntu", "Linux", "Vercel"],
  },
  {
    category: "AI / Computer Vision",
    items: ["OpenCV", "Machine Learning", "Ollama"],
  },
  {
    category: "Automation & Integration",
    items: ["OpenClaw", "Playwright", "MacroDroid", "Asterisk PBX"],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem-solving", "Adaptability"],
  },
];

export const experiences = [
  {
    title: "Automation Intern",
    organization: "Priority Dynamics Sdn Bhd",
    period: "April 2026 - June 2026",
    description:
      "Developed data-collection and local-first agent workflows to reduce repetitive manual work.",
    highlights: [
      "Built Python automation using APIs, Playwright, yt-dlp, and RapidAPI.",
      "Improved workflow reliability by replacing selected browser-scraping processes with API-based ingestion.",
    ],
    technologies: ["Python", "APIs", "Playwright", "RapidAPI", "yt-dlp", "OpenClaw"],
  },
  {
    title: "R&D Department Intern",
    organization: "LeadAlways Technology (M) Sdn Bhd",
    period: "April 2024 - December 2024",
    description:
      "Turned AI research into working proof-of-concept applications for automation, backend systems, and computer vision.",
    highlights: [
      "Developed backend and automation prototypes using FastAPI, Docker, MongoDB, Golang, Python, and Asterisk PBX.",
      "Built computer-vision pipelines using YOLO, OCR, FastAPI, and DeepSORT.",
    ],
    technologies: ["Python", "FastAPI", "Docker", "MongoDB", "YOLO", "Asterisk PBX"],
  },
];

export const projects = [
  {
    name: "Simple Finance",
    type: "Full-stack case study",
    description:
      "A personal finance app that helps users record, organize, and analyze income and expenses, with an automatic phone transaction import workflow.",
    problem:
      "Manual expense tracking is easy to forget, especially for small daily transactions. This project reduces friction by combining a web dashboard with phone-side automation through MacroDroid.",
    role:
      "I built the project end to end, from database schema and API routes to dashboard UI, transaction forms, chart analysis, login flow, and phone import endpoint.",
    features: [
      "Create, edit, delete, and categorize income and expense transactions.",
      "Dashboard summaries and chart-based analysis for spending patterns.",
      "MacroDroid API endpoint for automatic transaction records from phone activity.",
      "Simple login, session handling, and API key protection for imports.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Chart.js", "MacroDroid"],
    learned: [
      "How to connect frontend workflows with database-backed API routes.",
      "How to design practical automation around a real personal problem.",
      "How to improve a project through debugging, iteration, and clearer user flows.",
    ],
    demoUrl: "https://my-finance-7zjcgnwrz-bins-projects-e8ada7fd.vercel.app/analysis",
    githubUrl: "https://github.com/abyss1234/my_finance",
    screenshots: [
      {
        src: "/simple-finance-login.png",
        alt: "Simple Finance login screen",
        label: "Login",
      },
      {
        src: "/simple-finance-dashboard.png",
        alt: "Simple Finance dashboard screen",
        label: "Dashboard",
      },
      {
        src: "/simple-finance-transactions.png",
        alt: "Simple Finance transactions screen",
        label: "Transactions",
      },
      {
        src: "/simple-finance-analysis.png",
        alt: "Simple Finance analysis screen",
        label: "Analysis",
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Taylors University",
  graduation: "2025",
  cgpa: "3.37 / 4.0",
};
