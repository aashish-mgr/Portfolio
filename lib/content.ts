export const hero = {
  name: "Aashish Magar",
  tagline: "Full-Stack Developer",
  intro:
    "Nepal-based MERN full-stack developer . I spend my days building web apps with the MERN stack .",
};

export const socials = {
  email: "aashishmagar647@gmail.com",
  github: "https://github.com/aashish-mgr",
  linkedin: "https://www.linkedin.com/in/aashish-mgr/",
};

export const stack = {
  dev: [
    { name: "MongoDB", note: "schemas · aggregation pipelines" },
    { name: "PostgreSQL", note: "schemas · queries · joins"},
    { name: "Express", note: "REST APIs · middleware" },
    { name: "React", note: "components · hooks · state" },
    { name: "Node.js", note: "server logic · background jobs" },
    { name: "Next.js", note: "SSR · SSG · ISR · API routes"},
  ]
};

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
  accent: "gold" | "teal";
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Finance Management System",
    category: "Full-stack web application",
    description:
      "A finance management system that allows users to track their income, expenses, and savings. It provides features such as budget planning, financial goal setting, and visual reports to help users manage their finances effectively.",
    tags: ["PostgreSql", "Express", "React"],
    live: "",
    github: "https://github.com/aashish-mgr/FMS-backend",
    accent: "gold",
    image: "/fms.png",
  },
  {
    title: "E-commerce",
    category: "Web app with React and Node.js",
    description:
      "A full-stack e-commerce web application built with React, Node.js, Express, and PostgreSql. It features user authentication, product listings, shopping cart functionality, and order management.",
tags: ["React", "Node.js", "Express", "PostgreSQL"],
    live: "#",
    github: "https://github.com/aashish-mgr/E-commerce_backend",
    accent: "teal",
    image: "/ecom.png",
  },
  {
    title: "Job Portal",
    category: "Web application for job seekers and employers",
    description:
      "A job portal that connects job seekers with employers. It allows users to create profiles, search for job listings, and apply for positions. Employers can post job openings, review applications, and manage their hiring process.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    live: "",
    github: "https://github.com/aashish-mgr/jobportal",
    accent: "teal",
    image: "/jobportal.png"
  },
];


