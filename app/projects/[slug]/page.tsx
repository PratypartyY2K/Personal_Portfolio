import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { caseStudies, caseStudyMap, type ProjectSlug } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyMap[slug as ProjectSlug];

  if (!project) {
    return {
      title: "Project Not Found | Pratyush Kumar",
    };
  }

  return {
    title: `${project.title} | Pratyush Kumar`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudyMap[slug as ProjectSlug];

  if (!project) notFound();

  return (
    <main className="site-grid min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-[90rem] px-4 pb-20 pt-24 sm:px-6 xl:px-8 2xl:px-10">
        <div className="max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-200"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            {project.eyebrow}
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300/90 sm:text-lg">
            {project.summary}
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300/90 sm:text-base">
            {project.whyItMatters}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-sky-500 text-slate-950 hover:bg-sky-400 sm:w-auto"
            >
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} />
                View Repository
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-full border-slate-200 bg-white/85 text-slate-900 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800 sm:w-auto"
            >
              <Link href="/#contact">
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {project.impact.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)]">
          <section className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/68 sm:p-8">
            <h2 className="text-2xl font-semibold">What I built</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300/90">
              {project.role}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-medium text-sky-700 dark:border-slate-700 dark:bg-slate-950/40 dark:text-sky-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {project.architecture.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-4 text-sm leading-7 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/68 sm:p-8">
            <h2 className="text-2xl font-semibold">Results</h2>
            <div className="mt-6 space-y-4">
              {project.results.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-4 text-sm leading-7 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/68 sm:p-8">
          <h2 className="text-2xl font-semibold">Hard problems</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {project.hardProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-800/80 dark:bg-slate-950/30"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300/90">
                  {problem.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/68 sm:p-8">
            <h2 className="text-2xl font-semibold">Reliability and verification</h2>
            <div className="mt-6 space-y-4">
              {project.reliability.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-4 text-sm leading-7 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/68 sm:p-8">
            <h2 className="text-2xl font-semibold">Tradeoffs and lessons</h2>
            <div className="mt-6 space-y-4">
              {project.tradeoffs.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-4 text-sm leading-7 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
