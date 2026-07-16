import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-[rgba(15,23,42,0.74)]">
      <div className="flex flex-col items-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-200/80 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/40">
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
          MSCS @ Penn State
          <span className="mt-1 block">Backend • Performance • Distributed Systems</span>
        </p>
      </div>
    </div>
  );
}
