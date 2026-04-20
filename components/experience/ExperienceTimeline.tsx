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
    date: "Aug 2025 — May 2027",
    title: "The Pennsylvania State University — MS in Computer Science",
    location: "State College, PA",
    impactLines: [
      "GPA: 3.6 / 4.0",
      "Focus: Distributed systems, backend engineering, and systems architecture",
    ],
    highlights: [
      "Graduate coursework and project work centered on distributed systems, cloud computing, and scalable backend design.",
      "Built systems-heavy projects including a distributed MapReduce framework and a quorum-based key-value store.",
    ],
  },
  {
    date: "Jul 2019 — May 2023",
    title: "Vellore Institute of Technology — BTech in Computer Science and Engineering",
    location: "Vellore, India",
    impactLines: [
      "GPA: 3.5 / 4.0",
      "Focus: systems, networks, cryptography, and core computer science fundamentals",
    ],
    highlights: [
      "Built a capstone around selective region and partial face-image encryption.",
      "Coursework included algorithms, operating systems, database systems, computer networks, and data structures.",
    ],
  },
];

export const experienceTimelineItems: TimelineItem[] = [
  {
    date: "Aug 2025 — Present",
    title: "Penn State — Graduate Learning Assistant",
    location: "State College, PA",
    impactLine:
      "Improved algorithmic proficiency for 60+ students by facilitating weekly lab sessions and real-time debugging support in C++ and MATLAB.",
    highlights: [
      "Led guided problem-solving sessions that helped students debug faster and build stronger systems-programming intuition.",
      "Provided structured feedback during labs and office hours to improve student confidence and assignment quality.",
    ],
  },
  {
    date: "Jan 2023 — Jul 2025",
    title: "Enphase Energy — Software Engineer",
    location: "Bangalore, India",
    impactLine:
      "Reduced production integration failures by 25% by improving microservice reliability and applying TDD for systems serving 5,500+ daily users.",
    tech: ["Java", "Ruby on Rails", "PostgreSQL", "Jenkins", "SonarQube", "DataDog", "RSpec"],
    highlights: [
      "Optimized API performance and SQL query efficiency by fixing bottlenecks surfaced through DataDog monitoring, reducing database load.",
      "Decreased manual regression testing by 50% by integrating quality gates into Jenkins CI/CD and tightening engineering standards.",
      "Reduced onboarding ramp-up time by 65% by automating legacy workflows and mentoring new engineers on production systems.",
      "Contributed to global compliance features that helped support product expansion into European markets.",
    ],
  },
  {
    date: "Aug 2021 — Jan 2022",
    title: "Acies Consulting — Full-Stack Developer Intern",
    location: "Mumbai, India",
    impactLine:
      "Built workflow automation and data tooling that accelerated financial operations and improved backend interoperability.",
    tech: ["Django", "JavaScript", "AJAX", "Python", "MySQL", "PostgreSQL", "Redis", "BeautifulSoup"],
    highlights: [
      "Accelerated financial workflow setup from 3 days to 30 minutes by building interactive JavaScript and AJAX components for data operations.",
      "Architected pluggable backend connectors so users could route workloads across MySQL, PostgreSQL, and Redis targets.",
      "Automated stock-metric documentation with a Python and BeautifulSoup scraping pipeline for Yahoo Finance data.",
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
