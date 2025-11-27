import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur w-full max-w-xs mx-auto">
      <div className="flex flex-col items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-700/80 shadow-md">
          <Image
            src="/pratyush_profile_glow.webp"
            alt="Pratyush Kumar"
            fill
            className="object-cover"
            />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white">
          Pratyush Kumar
        </h3>

        <p className="mt-1 text-sm text-slate-300 text-center">
          MSCS @ Penn State<br />
          Backend • Distributed Systems • Full Stack
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href="mailto:your-email"
            className="text-sky-300 text-sm hover:text-sky-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-sky-300 text-sm hover:text-sky-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
