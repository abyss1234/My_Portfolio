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
    items: ["Docker", "GitHub Actions", "Ubuntu", "Linux", "Vercel", "GitHub"],
  },
  {
    category: "AI / Computer Vision",
    items: ["OpenCV", "scikit-learn", "TensorFlow", "PyTorch", "Machine Learning", "Ollama"],
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
    title: "Intern",
    organization: "Priority Dynamics Sdn Bhd",
    period: "April 2026 - June 2026",
    description:
      "Built automation workflows for social media data collection and explored local-first agent workflows for prompt-driven automation.",
    highlights: [
      "Built Python automation workflows using APIs, Playwright, yt-dlp, and RapidAPI to reduce manual collection effort.",
      "Replaced selected browser-scraping workflows with API-based data ingestion to improve reliability and maintainability.",
      "Configured local-first OpenClaw agent workflows to test prompt-driven automation, tool execution, hooks, and scheduled jobs.",
      "Cleaned, structured, and organized collected data for internal analysis while keeping platform-specific details confidential.",
    ],
  },
  {
    title: "R&D Department Intern",
    organization: "LeadAlways Technology (M) Sdn Bhd",
    period: "April 2024 - December 2024",
    description:
      "Researched open-source AI frameworks and built functional proof-of-concept applications across backend services, automation, and computer vision.",
    highlights: [
      "Converted AI research into three proof-of-concept applications.",
      "Wrote, tested, and refined production code with FastAPI, Docker, MongoDB, and Ubuntu.",
      "Built an automated debt-reminder call platform using Asterisk PBX, Golang, Python, Azure Text to Speech, and WebSocket.",
      "Deployed computer-vision pipelines with Ultralytics YOLO, OCR, FastAPI, and DeepSORT for container and traffic analysis use cases.",
    ],
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
