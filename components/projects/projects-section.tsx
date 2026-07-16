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
			className="section-transition relative bg-gradient-to-b from-slate-100 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-24 md:py-28"
		>
			<div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 xl:px-8 2xl:px-10">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
				<p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
					Selected systems, products, and team collaborations I’ve built or contributed to.
				</p>

				<div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
					{featuredProjects.map((project) => (
						<article
							key={project.title}
							className="group accent-card-hover relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform transition-shadow duration-300 hover:-translate-y-2 dark:border-slate-800 sm:p-7 md:p-8"
							style={{
								backgroundImage: "var(--accent-panel-bg)",
							}}
						>
							<div
								className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
								style={{ backgroundImage: "var(--accent-panel-overlay)" }}
							/>

							<div className="relative space-y-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="accent-chip rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]">
										{project.label}
									</span>
								</div>

								<h3 className="max-w-xl text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl md:text-[1.75rem]">
									{project.title}
								</h3>

								<p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-[15px] md:leading-7">
									{project.punchline}
								</p>

								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{project.tech.slice(0, 4).map((t) => (
										<span
											key={t}
											className="accent-chip rounded-md border px-2 py-1 text-[11px] sm:text-xs"
										>
											{t}
										</span>
									))}
									{project.tech.length > 4 ? (
										<span className="rounded-md border border-slate-200/80 px-2 py-1 text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:text-xs">
											+{project.tech.length - 4}
										</span>
									) : null}
								</div>
							</div>

							<div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								{project.caseStudySlug ? (
									<Link
										href={`/projects/${project.caseStudySlug}`}
										className="accent-solid inline-flex w-fit items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
									>
										Read Case Study
										<ArrowUpRight size={16} />
									</Link>
								) : null}

								<a
									href={project.githubUrl}
									target="_blank"
									className="accent-outline inline-flex w-fit items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
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
							className="accent-card-hover relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900/70 sm:p-7"
						>
							<div className="space-y-3">
								<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
									{project.title}
								</h3>

								<p className="text-[13px] leading-6 text-slate-600 dark:text-slate-300">
									{project.punchline}
								</p>

								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{project.tech.slice(0, 3).map((t) => (
										<span
											key={t}
											className="accent-chip rounded-md border px-2 py-0.5 text-[11px] sm:py-1 sm:text-xs"
										>
											{t}
										</span>
									))}
									{project.tech.length > 3 ? (
										<span className="rounded-md border border-slate-200/80 px-2 py-0.5 text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400 sm:py-1 sm:text-xs">
											+{project.tech.length - 3}
										</span>
									) : null}
								</div>
							</div>

							<div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
								{project.caseStudySlug ? (
									<Link
										href={`/projects/${project.caseStudySlug}`}
										className="accent-solid inline-flex w-fit items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
									>
										Read Case Study
										<ArrowUpRight size={16} />
									</Link>
								) : null}

								<a
									href={project.githubUrl}
									target="_blank"
									className="accent-outline inline-flex w-fit items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
									rel="noreferrer"
								>
									<Github size={16} />
									View Repository
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
