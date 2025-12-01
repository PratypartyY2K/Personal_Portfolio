const items = [
  {
    date: "2025 — 2027",
    title: "MS in Computer Science · Penn State University, UP",
    description:
      "Graduate coursework in distributed systems, deep learning, and systems for large-scale compute. Building MapReduce engines, ABD-style key-value stores, and inference server research.",
    tech: ["C++", "gRPC", "Protobuf", "AWS EC2", "LLMs", "HPC"],
  },
  {
    date: "2023 — 2025",
    title: "Associate Software Engineer · Enphase Energy",
    description:
      "Built and maintained backend services in Ruby on Rails, improved QA automation coverage, enhanced CI/CD pipelines, contributed to microservices used by millions of devices globally.",
    tech: ["Ruby", "Rails", "MongoDB", "Selenium", "TestNG", "CI/CD"],
  },
  {
    date: "2021 — 2023",
    title: "Software Engineering Intern · Enphase & Acies",
    description:
      "Contributed to frontend and backend tasks, improved testing infrastructure, helped develop internal dashboards and automation tools.",
    tech: ["JavaScript", "React", "Jenkins", "Automation"],
  },
  {
    date: "2022",
    title: "Published Research · MTAP (Springer)",
    description:
      "Designed a partial face-image encryption scheme combining RSA, chaotic maps, and image processing for faster privacy-preserving communication.",
    tech: ["Python", "OpenCV", "Cryptography"],
  },
];

export function ExperienceTimeline() {
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
        </article>
      ))}
    </div>
  );
}
