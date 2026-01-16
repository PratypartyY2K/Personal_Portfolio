import { Github } from "lucide-react";

const projects = [
	{
		title: "Custom MapReduce Framework",
		punchline: "High-throughput MapReduce engine for large, parallel workloads.",
		bullets: [
			"Dynamic scheduling with multi-threaded execution",
			"Worker pools, barriers, and throughput benchmarks",
			"Scaled across large datasets on EC2 clusters",
		],
		tech: ["C++", "Concurrency", "MultiThreading", "Protobuf", "AWS EC2", "gRPC"],
		link: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
	},
	{
		title: "Distributed Key-Value Store (ABD)",
		punchline: "Linearizable KV store engineered for node failures.",
		bullets: [
			"Quorum replication with strong consistency",
			"gRPC services, Protobuf APIs, C++ core",
			"Correctness under failures and concurrent workloads",
		],
		tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
		link: "https://github.com/PratypartyY2K/distributed-key-value-store",
	},
	{
		title: "InstructBLIP / Vicuna System Pipeline",
		punchline: "Multimodal LLM training and evaluation pipeline.",
		bullets: [
			"InstructBLIP/Vicuna workflows for vision-language reasoning",
			"Data prep, training orchestration, and metrics",
			"Benchmarked performance, memory, and response quality",
		],
		tech: ["PyTorch", "Transformers", "Vicuna", "InstructBLIP"],
		link: "https://github.com/PratypartyY2K",
	},
	{
		title: "Clipboard Manager · Productivity Tool",
		punchline: "Desktop clipboard manager built for speed.",
		bullets: [
			"Multi-app tracking with fast search",
			"Clean, responsive UI for power users",
			"Tuned for daily productivity",
		],
		tech: ["Python", "PyQt6"],
		link: "https://github.com/PratypartyY2K/copy-paste-tool",
	},
	{
		title: "Vaccine Slot Monitoring App",
		punchline: "Real-time vaccine slot tracking during peak demand.",
		bullets: [
			"Periodic API polling with instant alerts",
			"ML-driven availability prediction",
			"Django backend with clean UI",
		],
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
			className="relative border-t border-slate-200/70 py-32 sm:py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
				<p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
					Systems and products I’ve built end-to-end.
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
