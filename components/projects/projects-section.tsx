import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { projectCards } from "@/lib/projects";

const featuredProjects = projectCards.filter((project) => project.featured);
const supportingProjects = projectCards.filter((project) => !project.featured);

export function ProjectsSection() {
	const headingId = "projects-heading";
	return (
		<section
			id="projects"
			aria-labelledby={headingId}
			className="relative border-t border-slate-200/70 py-20 sm:py-24 md:py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		>
			<div className="mx-auto max-w-[90rem] px-4 sm:px-6 xl:px-8 2xl:px-10">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
				<p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
					Selected systems, products, and team collaborations I’ve built or contributed to.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
					{featuredProjects.map((project) => (
						<article
							key={project.title}
							className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,249,255,0.96))] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_28px_80px_rgba(14,165,233,0.14)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(12,18,31,0.98))] sm:p-8 md:p-9"
						>
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_45%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

							<div className="relative space-y-4 sm:space-y-5">
								<div className="flex flex-wrap items-center gap-3">
									<span className="rounded-full border border-sky-300/60 bg-sky-100/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
										{project.label}
									</span>
								</div>

								<h3 className="max-w-xl text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl md:text-[1.75rem]">
									{project.title}
								</h3>

								<p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-[15px] md:leading-7">
									{project.punchline}
								</p>

								<p className="rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 text-[13px] font-medium leading-6 text-slate-700 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/40 dark:text-slate-200">
									{project.proof}
								</p>

								<ul className="hidden space-y-2 text-[13px] leading-6 text-slate-600 dark:text-slate-300 md:block md:text-[14px]">
									{project.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-2">
											<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/80" aria-hidden />
											<span>{bullet}</span>
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{project.tech.map((t) => (
										<span
											key={t}
											className="rounded-md bg-slate-100 px-2 py-1 text-[11px] text-sky-700 dark:bg-slate-800 dark:text-sky-200 sm:text-xs"
										>
											{t}
										</span>
									))}
								</div>
							</div>

							<div className="relative mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
								{project.caseStudySlug ? (
									<Link
										href={`/projects/${project.caseStudySlug}`}
										className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:bg-sky-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-fit sm:justify-start"
									>
										Read Case Study
										<ArrowUpRight size={16} />
									</Link>
								) : null}

								<a
									href={project.githubUrl}
									target="_blank"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-sky-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-800 sm:w-fit sm:justify-start"
									rel="noreferrer"
								>
									<Github size={16} />
									View Repository
								</a>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 flex items-center gap-4 sm:mt-14">
					<div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
					<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
						More Projects
					</p>
					<div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
				</div>

				<div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
					{supportingProjects.map((project) => (
						<article
							key={project.title}
							className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-7"
						>
							<div className="space-y-4">
								<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
									{project.title}
								</h3>

								<p className="text-[13px] leading-6 text-slate-600 dark:text-slate-300">
									{project.punchline}
								</p>

								<p className="rounded-xl bg-slate-100/80 px-3 py-3 text-[12px] leading-6 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
									{project.proof}
								</p>

								<ul className="hidden space-y-2 text-[13px] leading-6 text-slate-600 dark:text-slate-300 sm:block">
									{project.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-2">
											<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/80" aria-hidden />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
								{project.caseStudySlug ? (
									<Link
										href={`/projects/${project.caseStudySlug}`}
										className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-fit sm:justify-start"
									>
										Read Case Study
										<ArrowUpRight size={16} />
									</Link>
								) : null}

								<a
									href={project.githubUrl}
									target="_blank"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-sky-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-800 sm:w-fit sm:justify-start"
									rel="noreferrer"
								>
									<Github size={16} />
									View Repository
								</a>
							</div>

							<div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
								{project.tech.map((t) => (
									<span
										key={t}
										className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-sky-700 dark:bg-slate-800 dark:text-sky-200 sm:py-1 sm:text-xs"
									>
										{t}
									</span>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
