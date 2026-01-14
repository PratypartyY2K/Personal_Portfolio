export interface TimelineItem {
  date: string;
  title: string;
  location?: string;
  impactLine?: string;
  impactLines?: string[];
  description?: string;
  tech?: string[];
  highlights?: string[];
}

export const educationTimelineItems: TimelineItem[] = [
  {
    date: "2025 — 2027",
    title: "Penn State University — MS in Computer Science",
    location: "University Park",
    impactLines: [
      "Focus: Distributed Systems, Backend Engineering & Systems Architecture",
      "GPA: 3.6 / 4.0",
    ],
    highlights: [
      "MapReduce engines",
      "KV-store & inference server research",
      "Systems & architecture coursework",
    ],
  },
  {
    date: "2019 — 2023",
    title: "Vellore Institute of Technology — B.Tech CSE",
    location: "India",
    impactLines: ["Focus: Systems, Networks, Cryptography & Data Structures"],
    highlights: [
      "Partial face-image encryption capstone",
      "Algorithms, OS, DBMS, Networks",
    ],
  },
];

export const experienceTimelineItems: TimelineItem[] = [
  {
    date: "Aug 2025 — Dec 2025",
    title: "Penn State — Graduate Learning Assistant",
    impactLine:
      "Mentored 38 students in C++ and systems coursework, raising class averages by 25%.",
    highlights: [
      "Improved debugging outcomes by leading lab sessions and guided problem solving.",
      "Clarified grading expectations with structured, actionable feedback.",
    ],
  },
  {
    date: "Jan 2023 — Jul 2025",
    title: "Enphase Energy — Software Engineer",
    location: "Bangalore, India",
    impactLine:
      "Built backend services serving 5,000+ daily users and improved data consistency by 25%.",
    tech: ["Rails", "PostgreSQL", "Jenkins", "Selenium", "Python", "REST APIs"],
    highlights: [
      "Increased release velocity by cutting manual QA 50% with Selenium regression pipelines.",
      "Shrank TestRail reporting from 1 hr → <5 mins via Python + API automation.",
      "Cut onboarding ramp-up from 4 weeks → 10 days by mentoring 4 engineers.",
      "Improved service reliability by designing RESTful Rails microservices for cloud systems.",
    ],
  },
  {
    date: "Aug 2021 — Jan 2022",
    title: "Acies Consulting — Full-Stack Developer Intern",
    location: "Mumbai, India",
    impactLine:
      "Built production data ingestion pipelines and performance-critical web apps.",
    tech: ["Django", "MySQL", "PostgreSQL", "Redis", "Parquet"],
    highlights: [
      "Reduced manual data prep 20%+ with automated financial ingestion pipelines.",
      "Enabled flexible storage routing by designing stateless Django backends across MySQL/Postgres/Redis/Parquet.",
    ],
  },
];

interface TimelineListProps {
  items: TimelineItem[];
}

export function TimelineList({ items }: TimelineListProps) {
  return (
    <div className="space-y-12">
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
          {item.location ? (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.location}</p>
          ) : null}

          {item.impactLine ? (
            <p className="mt-3 text-[13px] font-semibold leading-6 text-slate-700 dark:text-slate-200">
              {item.impactLine}
            </p>
          ) : null}

          {item.impactLines && item.impactLines.length ? (
            <p className="mt-3 text-[13px] font-semibold leading-6 text-slate-700 dark:text-slate-200">
              {item.impactLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}

          {item.description ? (
            <p className="mt-3 text-[13px] leading-6 text-slate-600 dark:text-slate-300/90">
              {item.description}
            </p>
          ) : null}

          {item.highlights && item.highlights.length > 0 ? (
            <ul className="mt-4 space-y-2 ml-3 list-none">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                  <p className="text-[13px] leading-6 text-slate-700 dark:text-slate-200">{h}</p>
                </li>
              ))}
            </ul>
          ) : null}

          {item.tech && item.tech.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
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
        </article>
      ))}
    </div>
  );
}
