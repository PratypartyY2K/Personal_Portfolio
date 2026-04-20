import { Github } from "lucide-react";

const projects = [
	{
		title: "Distributed MapReduce Framework",
		punchline: "C++ MapReduce engine deployed on EC2 with custom shuffle and performance tuning.",
		bullets: [
			"Built a distributed execution pipeline with mapper coordination, reducer services, and HDFS-backed output handling",
			"Implemented custom TCP shuffle with Protobuf serialization, bounded buffers, and optional barrier-based backpressure",
			"Ran AWS experiments across mapper counts, thread counts, and buffer sizes to isolate a reducer lock bottleneck",
		],
		tech: ["C++", "gRPC", "Protobuf", "Concurrency", "AWS EC2", "HDFS"],
		link: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
	},
	{
		title: "Distributed Key-Value Store (ABD)",
		punchline: "Quorum-based key-value store comparing linearizable ABD against a blocking baseline.",
		bullets: [
			"Implemented ABD read and write flows with timestamped values, majority quorums, and write-back for linearizable reads",
			"Built replica and client services in C++ with gRPC and Protobuf plus a threaded load generator for mixed workloads",
			"Automated crash experiments across 1, 3, and 5 replicas on EC2 and recorded p50, p95, and p99 latency under failure",
		],
		tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
		link: "https://github.com/PratypartyY2K/distributed-key-value-store",
	},
	{
		title: "App-Aware Clipboard Manager",
		punchline: "Privacy-first macOS clipboard manager designed around correctness instead of feature bloat.",
		bullets: [
			"Built event-driven clipboard capture in PyQt6 with source-app attribution, dedupe logic, and protections against feedback loops",
			"Added secret-safe defaults, token heuristics, per-app history, and optional SQLite persistence with WAL mode",
			"Structured the app for testing with CI, coverage reporting, and deterministic UI actions while history updates in real time",
		],
		tech: ["Python", "PyQt6", "SQLite", "pytest", "GitHub Actions"],
		link: "https://github.com/PratypartyY2K/app-aware-clipboard",
	},
	{
		title: "Waste Management Route Optimizer",
		punchline: "Team-built waste operations platform with a FastAPI backend and a React + Vite frontend.",
		bullets: [
			"Contributed to a shared full-stack codebase that separates operational APIs in FastAPI from the TypeScript UI built with React and Vite",
			"Implemented Supabase authentication and authorization integration with FastAPI, including bearer-token verification, user role upserts, and protected backend routes",
			"Built frontend auth flow pieces for login, signup, session hydration, and role-aware routing so Supabase sessions worked cleanly across the app",
		],
		tech: ["FastAPI", "React", "Vite", "Supabase", "TypeScript", "Python"],
		link: "https://github.com/Demonico/dsd-feb-26-cohort",
	},
	{
		title: "Risk-Based Vaccination Prioritization",
		punchline: "ML-assisted triage system aimed at improving fairness and consistency in vaccine allocation.",
		bullets: [
			"Built a prioritization workflow around a Random Forest model to rank vaccine eligibility with more consistency than manual review",
			"Focused on transparent decision support and reduced subjective bias in high-demand allocation scenarios",
			"Shipped the project as a working web application backed by Python-based data and application logic",
		],
		tech: ["Python", "Machine Learning", "Random Forest", "Web App"],
		link: "https://github.com/PratypartyY2K/Vaccine",
	},
];

export function ProjectsSection() {
	const headingId = "projects-heading";
	return (
		<section
			id="projects"
			aria-labelledby={headingId}
			className="relative border-t border-slate-200/70 py-32 sm:py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
				<p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
					Selected systems, products, and team collaborations I’ve built or contributed to.
				</p>

				<div className="mt-12 grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70 md:p-8"
						>
							<div className="space-y-4">
								<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
									{project.title}
								</h3>

								<p className="text-[13px] leading-6 md:leading-5 text-slate-600 dark:text-slate-300">
									{project.punchline}
								</p>

								<ul className="space-y-2 text-[13px] leading-6 md:leading-5 text-slate-600 dark:text-slate-300">
									{project.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-2">
											<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500/80" aria-hidden />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>

							<a
								href={project.link}
								target="_blank"
								className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-fit sm:justify-start"
								rel="noreferrer"
							>
								<Github size={16} />
								See How It Works
							</a>

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
