import Link from "next/link";
import { CTA_LINKS } from "@/lib/cta-links";
import { aboutUsContent } from "@/data/AboutUs";

export default function AboutHero({
  content,
}: {
  content?: Partial<typeof aboutUsContent.hero> | null;
}) {
  const data = { ...aboutUsContent.hero, ...(content ?? {}) };

  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#FF6B00]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#138808]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
          India&apos;s Trusted Online Sports Betting &{" "}
          <span className="bg-gradient-to-r from-[#FF6B00] to-[#138808] bg-clip-text text-transparent">
            Casino Platform
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {data.description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={CTA_LINKS.signup}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] sm:w-auto"
          >
            {data.primaryCta}
            <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/40 hover:bg-white/10 sm:w-auto"
          >
            {data.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
