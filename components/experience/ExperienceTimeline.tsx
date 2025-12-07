export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tech?: string[];
  coursework?: string[];
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
    date: "2023 — 2025",
    title:
      "Associate Software Engineer (previously Software Engineering Intern) · Enphase Energy",
    description:
      "Built and maintained backend services in Ruby on Rails, improved QA automation coverage, enhanced CI/CD pipelines, contributed to microservices used by millions of devices globally.",
    tech: [
      "Rails",
      "MySQL",
      "MongoDB",
      "Selenium",
      "TestNG",
      "Java",
      "Jenkins",
      "REST APIs",
    ],
  },
  {
    date: "2021 — 2022",
    title: "Full Stack Developer Intern · Acies Consulting LLP",
    description:
      "Developed full-stack web applications for clients using JavaScript, Node.js, and relational databases. Implemented responsive UI components and optimized backend services for performance.",
    tech: ["JavaScript", "MySQL", "PostgreSQL", "jQuery", "Bootstrap"],
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

          {item.tech?.length ? (
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

          {item.coursework?.length ? (
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
