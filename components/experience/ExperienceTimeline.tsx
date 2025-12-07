export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tech?: string[];
  coursework?: string[];
  highlights?: string[];
}

export const educationTimelineItems: TimelineItem[] = [
  {
    date: "2025 — 2027",
    title: "MS in Computer Science · Penn State University, UP",
    description:
      "Graduate coursework in operating systems and design, computer vision and language, and computer architecture. Building MapReduce engines, ABD-style key-value stores, and inference server research.",
    coursework: [
      "Operating Systems and Design",
      "Computer Vision and Language",
      "Fundamentals of Computer Architecture",
    ],
  },
  {
    date: "2019 - 2023",
    title:
      "B.Tech in Computer Science & Engineering · Vellore Institute of Technology, India",
    description:
      "Undergraduate coursework in algorithms, systems, networks, and cryptography. Completed a capstone project on partial face-image encryption using RSA, chaotic maps, and image processing.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture & Organization",
      "Database Management Systems",
      "Computer Networks & Network Security",
      "Java Programming",
      "Object-Oriented Programming",
    ],
  },
];

export const experienceTimelineItems: TimelineItem[] = [
  {
    date: "Aug 2025 — Dec 2025",
    title: "Graduate Learning Assistant · Penn State University",
    description:
      "Provided lab instruction, debugging help, and formative feedback for undergraduate C++ coursework.",
    highlights: [
      "Mentored 38 students in C++ problem solving and debugging, improving assignment clarity and code structure and increasing the average score by 25%.",
      "Conducted lab sessions and provided descriptive grading feedback that increased understanding of evaluation criteria.",
    ],
  },
  {
    date: "Jan 2023 — Jul 2025",
    title:
      "Software Engineer (previously Software Engineering Intern) · Enphase Energy — Bangalore, India",
    description:
      "Worked on backend services and QA automation for energy device cloud services. Focused on reliability, testing, and CI automation for distributed microservices.",
    tech: ["Rails", "MySQL", "MongoDB", "Selenium", "Python", "Jenkins", "REST APIs", "DataDog", "Postman"],
    highlights: [
      "Developed and scaled RESTful Rails services for ~5,000 DAUs, improving data consistency and reducing integration failures by 25%.",
      "Architected a Selenium-based UI regression suite, cutting manual QA effort by 50% and significantly accelerating release cycles.",
      "Automated TestRail reporting using Python & API integrations, slashing stakeholder reporting time by 90%+ (1 hour → <5 mins)",
      "Engineered API contract and reliability tests for distributed microservices, reducing production failure incidents by 20%.",
      "Mentored 4 new engineers, creating labs that reduced onboarding ramp-up time from 4 weeks to ~10 days.",
    ],
  },
  {
    date: "Aug 2021 — Jan 2022",
    title: "Full Stack Developer Intern · Acies Consulting LLP — Mumbai, India",
    description:
      "Built client-facing full-stack applications and data ingestion tools focused on reliability and performance.",
    tech: ["JavaScript", "Django", "MySQL", "PostgreSQL", "Redis"],
    highlights: [
      "Optimized a stateless Django backend with dynamic connection routing for MySQL, PostgreSQL, Redis, and Parquet, enabling flexible storage configurations for diverse client needs.",
      "Built an automated financial data ingestion pipeline using the Yahoo Finance API, accelerating reporting cycles and cutting manual data preparation by ~20%.",
    ],
  },
];

interface TimelineListProps {
  items: TimelineItem[];
}

export function TimelineList({ items }: TimelineListProps) {
  return (
    <div className="space-y-10">
      {items.map((item) => (
        <article
          key={item.title}
          className="relative border-l border-slate-200 pl-6 transition hover:border-sky-200 dark:border-slate-700 dark:hover:border-sky-500/40"
        >
          <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_3px_rgba(56,189,248,0.5)]" />

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.date}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">{item.description}</p>

          {item.highlights && item.highlights.length > 0 ? (
            <ul className="mt-3 space-y-2 ml-3 list-none">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                  <p className="text-sm text-slate-700 dark:text-slate-200">{h}</p>
                </li>
              ))}
            </ul>
          ) : null}

          {item.tech && item.tech.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-sky-700 dark:bg-slate-800 dark:text-sky-200"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {item.coursework && item.coursework.length > 0 ? (
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Coursework</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
