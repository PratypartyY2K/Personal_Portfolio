import { SectionContainer } from "./section-container";

const skills = {
  "Systems & Core Languages": {
    description: "The foundation I use for performance-sensitive systems, APIs, and application logic.",
    items: ["C++", "Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  "Backend & Distributed Systems": {
    description: "The stack behind production services, concurrency-heavy systems, and networked applications.",
    items: ["gRPC", "Protobuf", "REST APIs", "AWS (EC2)", "Concurrency", "Distributed Systems", "Redis", "PostgreSQL", "MySQL"],
  },
  "Frameworks & Product Engineering": {
    description: "The frameworks I reach for when shipping end-to-end products with real users and operational constraints.",
    items: ["Ruby on Rails", "FastAPI", "Django", "React", "Next.js", "Vite", "PyQt6", "Supabase"],
  },
  "Frontend & UI": {
    description: "Enough frontend depth to build interfaces that feel intentional, clear, and usable.",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  "Delivery, Testing & Observability": {
    description: "The tooling I rely on to ship safely, monitor behavior, and improve reliability over time.",
    items: ["Git", "Linux", "Jenkins", "RSpec", "Selenium", "DataDog", "SonarQube", "Unit & Integration Testing", "Performance Optimization"],
  },
  "Data & Persistence": {
    description: "Storage and data tools used across product platforms, automation, and internal workflows.",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "BeautifulSoup"],
  },
};

export function SkillsSection() {
  const headingId = "skills-heading";
  return (
    <SectionContainer
      id="skills"
      ariaLabelledby={headingId}
      className="relative py-28 bg-white dark:bg-transparent"
    >
      <div className="absolute -top-20 left-0 right-0 h-32
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_75%)]
        blur-xl pointer-events-none"
      />

      <h2
        id={headingId}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-50"
      >
        Engineering Toolkit
      </h2>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90">
        The languages, frameworks, and delivery tools I use to build backend-heavy systems and full-stack products.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {["Backend-first", "Production-tested", "Systems-minded"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, group]) => (
          <div
            key={category}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/50 dark:border-slate-800/80 dark:bg-slate-900/60"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.10),_transparent_40%)]" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{category}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300/90">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50/95
                               px-3 py-1.5 text-xs sm:text-sm text-sky-700 shadow-[0_0_10px_rgba(14,165,233,0.08)]
                               transition-all hover:shadow-[0_0_14px_rgba(14,165,233,0.25)]
                               dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-sky-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-slate-600 dark:text-slate-300/90 italic">
        Strongest in backend engineering, distributed systems, and production-focused full-stack development.
      </p>
    </SectionContainer>
  );
}
