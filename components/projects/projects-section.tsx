import { Github } from "lucide-react";

const projects = [
	{
		title: "Custom MapReduce Framework",
		punchline: "High-performance data processing engine for parallel workloads.",
		bullets: [
			"Multi-threaded execution with dynamic task scheduling",
			"Worker pools, synchronization barriers, and throughput benchmarking",
			"Built to handle large datasets efficiently on EC2 clusters",
		],
		tech: ["C++", "Concurrency", "MultiThreading", "Protobuf", "AWS EC2", "gRPC"],
		link: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
	},
	{
		title: "Distributed Key-Value Store (ABD)",
		punchline: "Linearizable, fault-tolerant storage system built to survive node failures.",
		bullets: [
			"Quorum-based replicated KV store with strong consistency",
			"gRPC microservices, Protobuf APIs, C++ core engine",
			"Designed for correctness under failures and concurrent workloads",
		],
		tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
		link: "https://github.com/PratypartyY2K/distributed-key-value-store",
	},
	{
		title: "InstructBLIP / Vicuna System Pipeline",
		punchline: "Large-model fine-tuning and evaluation pipeline for multimodal LLM workloads.",
		bullets: [
			"Built and evaluated InstructBLIP/Vicuna pipelines for vision-language reasoning",
			"Implemented dataset preprocessing, training orchestration, and metric evaluation",
			"Explored performance, memory behavior, and model response quality",
		],
		tech: ["PyTorch", "Transformers", "Vicuna", "InstructBLIP"],
		link: "https://github.com/PratypartyY2K",
	},
	{
		title: "Clipboard Manager · Productivity Tool",
		punchline: "Desktop productivity tool to speed up real workflows.",
		bullets: [
			"Multi-app clipboard tracking with fast search",
			"Clean, responsive UI for power users",
			"Designed for daily personal productivity",
		],
		tech: ["Python", "PyQt6"],
		link: "https://github.com/PratypartyY2K/copy-paste-tool",
	},
	{
		title: "Vaccine Slot Monitoring App",
		punchline: "Real-time slot tracking system used during live public demand.",
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
			className="relative py-28 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-xl backdrop-blur-md transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70 md:p-8"
						>
							<div className="space-y-4">
								<h3 className="text-xl font-semibold text-slate-900 dark:text-white">
									{project.title}
								</h3>

								<p className="text-[13px] leading-6 text-slate-600 dark:text-slate-300">
									{project.punchline}
								</p>

								<ul className="space-y-2 text-[13px] leading-6 text-slate-600 dark:text-slate-300">
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
								className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
								rel="noreferrer"
							>
								<Github size={16} />
								View Project
							</a>

							<div className="mt-5 flex flex-wrap gap-2">
								{project.tech.map((t) => (
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
			</div>
		</section>
	);
}
