import { SectionContainer } from "./section-container";
import { Card } from "./ui/card";
import Link from "next/link";

const projects = [/* import from data file if you prefer */];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        Selected Projects
      </h2>
      <p className="mt-2 text-sm text-slate-300/90">
        Systems, infrastructure, and tools I’m proud of.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex h-full flex-col border border-slate-800/80 bg-slate-900/70 p-4"
          >
            <div className="flex-1">
              <h3 className="text-base font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">{project.role}</p>
              <p className="mt-3 text-sm text-slate-200/90">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-0.5 text-[11px] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <div className="mt-4 text-xs">
                <Link
                  href={project.link}
                  className="text-sky-300 hover:text-sky-200"
                >
                  View on GitHub →
                </Link>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
