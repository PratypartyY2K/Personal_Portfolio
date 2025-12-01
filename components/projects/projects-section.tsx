import { Github } from "lucide-react";

const projects = [
	{
		title: "Distributed Key–Value Store (ABD Protocol)",
		description:
			"A fault-tolerant key–value store implementing the ABD algorithm with strong consistency using quorum-based reads/writes, gRPC servers, and Protobuf message formats.",
		tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
		link: "https://github.com/PratypartyY2K/distributed-key-value-store",
	},
	{
		title: "Custom MapReduce Framework",
		description:
			"Designed a multi-threaded MapReduce engine supporting dynamic task assignment, worker threads, barriers, and performance benchmarking for large datasets.",
		tech: ["C++", "Concurrency", "MultiThreading", "Protobuf", "AWS EC2", "gRPC"],
		link: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
	},
	{
		title: "Clipboard Manager · Copy-Paste Tool",
		description:
			"A PyQt6-based clipboard history manager supporting multi-app copy tracking, searchable UI, and a clean, responsive layout for productivity workflows.",
		tech: ["Python", "PyQt6"],
		link: "https://github.com/PratypartyY2K/copy-paste-tool",
	},
	{
		title: "Vaccine Slot Monitoring App",
		description:
			"A utility app that periodically checks vaccination slot availability through the CoWIN API, alerts users in real-time, and provides clean UI-driven access to live data.",
		tech: ["Django", "Scikit-Learn", "Random Forest", "APIs"],
		link: "https://github.com/PratypartyY2K/Vaccine",
	},
];

export function ProjectsSection() {
	const headingId = "projects-heading";
	return (
		<section
			id="projects"
			aria-labelledby={headingId}
			className="relative py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
						>
							<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
								{project.title}
							</h3>

							<p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
								{project.description}
							</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<span
										key={t}
										className="rounded-md bg-slate-100 px-2 py-1 text-xs text-sky-600 dark:bg-slate-800 dark:text-sky-300"
									>
										{t}
									</span>
								))}
							</div>

							<a
								href={project.link}
								target="_blank"
								className="mt-6 inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
								rel="noreferrer"
							>
								<Github size={16} />
								View Project
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
