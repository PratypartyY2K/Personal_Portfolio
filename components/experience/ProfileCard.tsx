import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex flex-col items-center">
        <div className="relative h-40 w-40">
          <Image
            src="/pratyush_profile_glow.webp"
            alt="Portrait of Pratyush Kumar with a glowing halo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 160px, 280px"
            loading="lazy"
            quality={80}
          />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
          Pratyush Kumar
        </h3>

        <p className="mt-1 text-sm text-center text-slate-600 dark:text-slate-300">
          MSCS @ Penn State <br />
          Backend • Distributed Systems • Full Stack
        </p>

        <div className="mt-4 flex gap-4 text-sm">
          <a
            href="mailto:kinshuk048@gmail.com"
            className="text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/pratyushkumar123"
            className="text-sky-600 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
