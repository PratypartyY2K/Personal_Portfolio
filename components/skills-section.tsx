import { SectionContainer } from "./section-container";

const skills = {
  "Systems & Core Languages": ["C++", "Python", "Java", "TypeScript", "JavaScript", "SQL"],
  "Backend & Distributed Systems": [
    "gRPC",
    "Protobuf",
    "REST APIs",
    "AWS (EC2)",
    "Concurrency",
    "Distributed Systems",
    "Redis",
    "PostgreSQL",
    "MySQL",
  ],
  "Frameworks & Product Engineering": [
    "Ruby on Rails",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "Vite",
    "PyQt6",
    "Supabase",
  ],
  "Frontend & UI": [
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  "Delivery, Testing & Observability": [
    "Git",
    "Linux",
    "Jenkins",
    "RSpec",
    "Selenium",
    "DataDog",
    "SonarQube",
    "Unit & Integration Testing",
    "Performance Optimization",
  ],
  "Data & Persistence": [
    "PostgreSQL",
    "MySQL",
    "Redis",
    "MongoDB",
    "BeautifulSoup",
  ],
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

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
        The languages, frameworks, and delivery tools I use to build backend-heavy systems and full-stack products.
      </p>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="relative">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{category}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {list.map((skill) => (
                <div
                  key={skill}
                  className="rounded-md border border-slate-200 bg-slate-50
                             px-3 py-1 text-xs sm:text-sm xl:text-base text-sky-700 shadow-[0_0_10px_rgba(14,165,233,0.08)]
                             transition-all hover:shadow-[0_0_14px_rgba(14,165,233,0.25)]
                             dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-sky-200"
                >
                  {skill}
                </div>
              ))}
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
