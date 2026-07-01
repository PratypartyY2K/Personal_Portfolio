export type ProjectSlug =
  | "mapreduce-framework"
  | "fairshare"
  | "holocron-timeline-engine";

export interface ProjectCardData {
  title: string;
  featured?: boolean;
  label?: string;
  punchline: string;
  proof: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  caseStudySlug?: ProjectSlug;
}

export interface ProjectCaseStudy {
  slug: ProjectSlug;
  title: string;
  eyebrow: string;
  summary: string;
  whyItMatters: string;
  role: string;
  stack: string[];
  impact: Array<{ label: string; value: string }>;
  architecture: string[];
  hardProblems: Array<{ title: string; detail: string }>;
  results: string[];
  reliability: string[];
  tradeoffs: string[];
  githubUrl: string;
}

export const projectCards: ProjectCardData[] = [
  {
    featured: true,
    label: "Featured System",
    title: "Distributed MapReduce Framework",
    punchline: "C++ MapReduce engine deployed on EC2 with custom shuffle and performance tuning.",
    proof: "Identified and explained the reducer lock bottleneck behind major non-barrier slowdowns during AWS performance sweeps.",
    bullets: [
      "Built a distributed execution pipeline with mapper coordination, reducer services, and HDFS-backed output handling",
      "Implemented custom TCP shuffle with Protobuf serialization, bounded buffers, and optional barrier-based backpressure",
      "Ran AWS experiments across mapper counts, thread counts, and buffer sizes to isolate a reducer lock bottleneck",
    ],
    tech: ["C++", "gRPC", "Protobuf", "Concurrency", "AWS EC2", "HDFS"],
    githubUrl: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
    caseStudySlug: "mapreduce-framework",
  },
  {
    featured: true,
    label: "Featured Product",
    title: "FairShare",
    punchline: "Ledger-first expense tracker built for explainable balances, deterministic money handling, and safe retries.",
    proof: "Designed the system around persisted ledger effects, event history, and idempotent settlement confirmation instead of opaque balance calculators.",
    bullets: [
      "Built a Spring Boot backend and Next.js frontend for groups, expenses, ledgers, settlements, and history views",
      "Implemented equal, exact, percentage, and share-based splits with stable leftover-cent assignment and scale-2 money rules",
      "Added idempotent expense creation and settlement confirmation so retries cannot double-apply financially sensitive writes",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Ledger Design"],
    githubUrl: "https://github.com/PratypartyY2K/faireshare-mono-repo",
    caseStudySlug: "fairshare",
  },
  {
    title: "Holocron Timeline Engine",
    punchline: "Graph-backed timeline system for causal traversal, break simulation, and world-state reconstruction.",
    proof: "Structured the backend around Neo4j traversals, chronology normalization, and request-scoped simulation logic instead of a shared in-memory graph.",
    bullets: [
      "Built a FastAPI backend, Next.js frontend, and Neo4j graph store to model events, entities, and causal dependencies",
      "Implemented what-if break simulation that propagates invalidation through downstream dependencies in topological order",
      "Reconstructed pre-event world state by replaying curated mutation history with checkpoints to reduce repeated replay cost",
    ],
    tech: ["FastAPI", "Next.js", "Neo4j", "Python", "TypeScript", "Graph Traversal"],
    githubUrl: "https://github.com/PratypartyY2K/Holocron-Timeline-Engine",
    caseStudySlug: "holocron-timeline-engine",
  },
  {
    title: "Distributed Key-Value Store (ABD)",
    punchline: "Quorum-based key-value store comparing linearizable ABD against a blocking baseline.",
    proof: "Benchmarked crash scenarios across 1, 3, and 5 replicas with latency instrumentation for concurrent workloads.",
    bullets: [
      "Implemented ABD read and write flows with timestamped values, majority quorums, and write-back for linearizable reads",
      "Built replica and client services in C++ with gRPC and Protobuf plus a threaded load generator for mixed workloads",
      "Automated crash experiments across 1, 3, and 5 replicas on EC2 and recorded p50, p95, and p99 latency under failure",
    ],
    tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
    githubUrl: "https://github.com/PratypartyY2K/distributed-key-value-store",
  },
  {
    title: "App-Aware Clipboard Manager",
    punchline: "Privacy-first macOS clipboard manager designed around correctness instead of feature bloat.",
    proof: "Focused on deterministic clipboard capture, app attribution, and privacy controls rather than superficial UI features.",
    bullets: [
      "Built event-driven clipboard capture in PyQt6 with source-app attribution, dedupe logic, and protections against feedback loops",
      "Added secret-safe defaults, token heuristics, per-app history, and optional SQLite persistence with WAL mode",
      "Structured the app for testing with CI, coverage reporting, and deterministic UI actions while history updates in real time",
    ],
    tech: ["Python", "PyQt6", "SQLite", "pytest", "GitHub Actions"],
    githubUrl: "https://github.com/PratypartyY2K/app-aware-clipboard",
  },
];

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "mapreduce-framework",
    title: "Distributed MapReduce Framework",
    eyebrow: "Case Study · Systems Performance",
    summary:
      "A distributed MapReduce framework in C/C++ that runs across EC2 instances with gRPC control, Protobuf-based shuffle records, and HDFS-backed output.",
    whyItMatters:
      "This is the clearest example of how I debug systems: measure first, find the actual bottleneck, and then change the design instead of guessing.",
    role: "Designed and implemented the framework end to end as part of graduate systems work, including evaluation across multiple cluster and buffer configurations.",
    stack: ["C++", "gRPC", "Protobuf", "AWS EC2", "HDFS", "pthreads"],
    impact: [
      { label: "Throughput", value: "7x improvement after isolating reducer lock contention" },
      { label: "Deployment", value: "Distributed across EC2 mapper, reducer, and master nodes" },
      { label: "Key insight", value: "More mapper concurrency slowed the job once the reducer became the bottleneck" },
    ],
    architecture: [
      "A master node coordinates workers and reducer instances over gRPC and loads runtime cluster configuration.",
      "Mapper workers run multi-threaded map logic, batch intermediate records, and stream them to the reducer over custom TCP shuffle channels.",
      "The reducer merges intermediate streams, invokes user-defined reduce functions, and writes final output to HDFS.",
    ],
    hardProblems: [
      {
        title: "Reducer lock contention in non-barrier mode",
        detail:
          "The reducer held the same mutex used by producer RPC handlers while parsing batches and calling reduce logic. That serialized the entire pipeline and made non-barrier mode dramatically slower on large runs.",
      },
      {
        title: "Scaling mapper count without overloading the reducer",
        detail:
          "Increasing mapper units from 1 to 4 increased shuffle pressure, socket activity, and reducer-side contention. The evaluation showed the reducer, not the mappers, was the real throughput limit.",
      },
      {
        title: "Buffer sizing and burst behavior",
        detail:
          "Larger buffers reduced flush frequency but also made the system burstier. Moderate buffer sizes delivered steadier flow once reducer lock scope and backpressure behavior were accounted for.",
      },
    ],
    results: [
      "Identified that barrier-off runs could become 6–7x slower than barrier-on runs because the reducer serialized producer progress behind a shared lock.",
      "Found that adding more mapper units did not improve throughput once the single reducer saturated, which changed how I thought about scaling the system.",
      "Narrowed the best-performing configuration toward balanced mapper parallelism and moderate shuffle batch sizes instead of maxing out every concurrency knob.",
    ],
    reliability: [
      "Ran repeated evaluation sweeps across mapper counts, thread counts, buffer sizes, and barrier modes to compare means and variance rather than trusting one-off timings.",
      "Used bounded buffers and producer-consumer synchronization to avoid unbounded memory growth during shuffle pressure.",
      "Documented a concrete reducer-side fix: copy under lock, unlock, then parse and reduce outside the critical section.",
    ],
    tradeoffs: [
      "A single reducer simplified ordering and implementation, but it became the dominant scalability limit.",
      "TCP shuffle reduced overhead for bulk data transfer, but required explicit backpressure and concurrency management.",
      "Barrier mode improved stability under pressure, but reduced overlap between mappers and the reducer.",
    ],
    githubUrl: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
  },
  {
    slug: "fairshare",
    title: "FairShare",
    eyebrow: "Case Study · Backend Product Design",
    summary:
      "A ledger-first expense tracker that prioritizes explainable balances, deterministic money handling, and safe retries for financially sensitive writes.",
    whyItMatters:
      "Most expense apps stop at balances. I wanted a system that could explain every balance, preserve history, and avoid corrupting money movement when clients retry requests.",
    role: "Built the product architecture across a Spring Boot backend and Next.js frontend, with the backend centered on ledger effects, settlement flows, and explainability.",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Next.js", "TypeScript"],
    impact: [
      { label: "Money handling", value: "Deterministic scale-2 rounding with stable leftover-cent assignment" },
      { label: "Safety", value: "Idempotent expense creation and settlement confirmation" },
      { label: "Auditability", value: "Expense lifecycle events and confirmed transfers retained for explanation and history" },
    ],
    architecture: [
      "The backend stores groups, expenses, participant shares, ledger entries, confirmed transfers, and a thin event trail rather than treating balances as mutable standalone values.",
      "The frontend handles group workflows, ledger views, and history screens while the backend owns accounting correctness, transactional writes, and explanation endpoints.",
      "Schema changes flow through Flyway and the local system runs against PostgreSQL, with H2 used for automated tests.",
    ],
    hardProblems: [
      {
        title: "Deterministic rounding and leftover cents",
        detail:
          "Equal, percentage, and share-based splits all leave residue at scale 2. The system normalizes amounts, makes rounding explicit, and assigns leftover cents in a stable order so retries and updates do not reshuffle money between users.",
      },
      {
        title: "Safe retries on financially sensitive writes",
        detail:
          "Settlement confirmation and expense creation needed idempotency because duplicate writes immediately corrupt balances. I added explicit idempotency keys and confirmation IDs only where the correctness risk justified the complexity.",
      },
      {
        title: "Editing expenses without ledger drift",
        detail:
          "Expense updates recalculate target shares, compute deltas against prior state, and adjust ledger effects transactionally. The service takes a pessimistic lock on the expense row to serialize concurrent edits safely.",
      },
    ],
    results: [
      "Built a balance model that can answer not just 'who owes whom' but also 'why does this number exist?' by tracing expenses and transfers behind each user position.",
      "Kept the event history narrow enough to stay debuggable without committing the system to full event sourcing complexity.",
      "Verified the financially sensitive paths with integration tests around settlement confirmation, events, pagination, and auth policy.",
    ],
    reliability: [
      "Used Flyway migrations with Hibernate validation so schema drift fails fast rather than being silently patched at startup.",
      "Backed the main correctness paths with backend tests, including settlement confirmation, events and transfers, and pagination behavior.",
      "Chose a monolithic backend intentionally to keep accounting consistency inside straightforward transactions rather than spreading it across services too early.",
    ],
    tradeoffs: [
      "A monolith reduced domain isolation but simplified correctness for tightly coupled accounting logic.",
      "The system records event history for auditability, but stops short of full event sourcing to avoid unnecessary replay complexity.",
      "Caching was intentionally skipped in v1 to avoid invalidation bugs around edits, voids, and transfers before read latency became a proven issue.",
    ],
    githubUrl: "https://github.com/PratypartyY2K/faireshare-mono-repo",
  },
  {
    slug: "holocron-timeline-engine",
    title: "Holocron Timeline Engine",
    eyebrow: "Case Study · Graph Systems",
    summary:
      "A graph-backed timeline system that models events and causal dependencies in Neo4j, then supports traversal-heavy reads, break simulation, and world-state reconstruction.",
    whyItMatters:
      "This project let me work on a class of system that standard CRUD apps rarely touch: graph traversal, mutation replay, and simulation logic over request-scoped subgraphs.",
    role: "Built the full stack across a Next.js frontend, FastAPI backend, and Neo4j graph store, including traversal, validation, simulation, and replay logic.",
    stack: ["FastAPI", "Python", "Neo4j", "Next.js", "TypeScript", "Docker"],
    impact: [
      { label: "Core model", value: "Events as nodes, causal links as edges, state change represented through mutation relationships" },
      { label: "Simulation", value: "What-if break propagation through downstream dependencies in topological order" },
      { label: "Replay", value: "Universe state rebuilt from baseline state plus ordered prior mutations" },
    ],
    architecture: [
      "The frontend is a thin client over REST endpoints that render timelines, graph views, and simulation states.",
      "The FastAPI backend owns chronology normalization, traversal rules, break simulation, relationship validation, and world-state replay.",
      "Neo4j is the source of truth; the backend stays stateless with respect to graph topology and performs request-scoped traversal and simulation work.",
    ],
    hardProblems: [
      {
        title: "Chronology normalization across BBY/ABY boundaries",
        detail:
          "The backend stores chronology as signed integers with an internal zero so filtering, sorting, interval math, and replay can all work on a continuous numeric axis.",
      },
      {
        title: "Break simulation over downstream causal graphs",
        detail:
          "The simulation service computes a topological order over the downstream subgraph, then marks events as invalidated or unresolved based on surviving dependencies.",
      },
      {
        title: "State reconstruction without snapshotting every node",
        detail:
          "Instead of storing full snapshots on graph nodes, the system replays curated state mutations in chronology order and uses checkpoints to reduce repeated replay cost.",
      },
    ],
    results: [
      "Built a system that can answer dependency questions such as what must happen before an event and what breaks if one event is removed.",
      "Separated stateless read paths from ingestion and backfill jobs, which kept request handling simpler while preserving graph integrity.",
      "Used validation rules to reject invalid or contradictory relationships before they entered the graph.",
    ],
    reliability: [
      "Relationship writes validate endpoint existence, chronology rules, cycle constraints, and duplicate edges before persisting changes.",
      "Universe-state reads use checkpoints plus a database-derived version token to avoid stale reuse after graph writes.",
      "The project includes unit tests around the simulation path and CLI workflows for transform, ingest, audit, and mutation backfill.",
    ],
    tradeoffs: [
      "Neo4j made traversal-heavy reads natural, but deep graph queries and large payloads remain the main performance bottlenecks.",
      "Checkpointed in-process state is a simpler middle ground than pushing the system toward shared cache infrastructure too early.",
      "The frontend intentionally stays thin; most complexity is concentrated in the backend engine and repository layers.",
    ],
    githubUrl: "https://github.com/PratypartyY2K/Holocron-Timeline-Engine",
  },
];

export const caseStudyMap = Object.fromEntries(
  caseStudies.map((project) => [project.slug, project])
) as Record<ProjectSlug, ProjectCaseStudy>;
