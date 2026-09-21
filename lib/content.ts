export const hero = {
  name: "Aashu Lopchan",
  tagline: "Aspiring Data Analyst · Full-Stack Developer",
  intro:
    "Nepal-based MERN full-stack developer and self-taught analyst. I spend my days building web apps with the MERN stack and my nights cleaning data in Excel, SQL and Python, on the way to a role in data analysis or data science.",
};

export const socials = {
  email: "aashu.lopchan@example.com",
  github: "https://github.com/aashulopchan",
  linkedin: "https://www.linkedin.com/in/aashulopchan",
};

export const stack = {
  data: [
    { name: "Excel", note: "pivot tables · formulas · dashboards" },
    { name: "SQL", note: "joins · CTEs · window functions" },
    { name: "Python", note: "cleaning · scripting · automation" },
    { name: "pandas", note: "transform · group · aggregate" },
  ],
  dev: [
    { name: "MongoDB", note: "schemas · aggregation pipelines" },
    { name: "Express", note: "REST APIs · middleware" },
    { name: "React", note: "components · hooks · state" },
    { name: "Node.js", note: "server logic · background jobs" },
  ],
};

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
  accent: "gold" | "teal";
}

export const projects: Project[] = [
  {
    title: "Sales Trend Dashboard",
    category: "Data & visualization",
    description:
      "Cleaned three years of store-level sales data in pandas, ran the analysis in SQL, and shipped a dashboard that surfaces monthly trends, top products and regional outliers for a small retail team.",
    tags: ["Excel", "SQL", "pandas"],
    live: "https://sales-trend-dashboard.vercel.app",
    github: "https://github.com/aashulopchan/sales-trend-dashboard",
    accent: "teal",
  },
  {
    title: "Task Tracker App",
    category: "Full-stack MERN",
    description:
      "A kanban-style task tracker built on the MERN stack, with drag-and-drop boards, auth and real-time sync. Exercise in clean schemas on the backend and predictable state on the front.",
    tags: ["MongoDB", "Express", "React"],
    live: "https://task-tracker-app.vercel.app",
    github: "https://github.com/aashulopchan/task-tracker-app",
    accent: "gold",
  },
  {
    title: "InsightBoard",
    category: "Analytics for web apps",
    description:
      "A project that brings both sides together: a Python/pandas pipeline that ingests app logs, an Express API that serves the aggregations, and a React board that charts them. Event analytics without a black box.",
    tags: ["pandas", "MongoDB", "Express"],
    live: "https://insightboard.vercel.app",
    github: "https://github.com/aashulopchan/insightboard",
    accent: "teal",
  },
];

export const heroChartData = [
  { month: "Apr", hours: 34 },
  { month: "May", hours: 28 },
  { month: "Jun", hours: 32 },
  { month: "Jul", hours: 41 },
  { month: "Aug", hours: 47 },
  { month: "Sep", hours: 52 },
  { month: "Oct", hours: 58 },
];