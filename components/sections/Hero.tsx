import Link from "next/link";
import HeroImage from "@/components/sections/HeroImage";
import { CTA_LINKS } from "@/lib/cta-links";
import { homeContent } from "@/data/home";

export default function Hero({content,}: {
  content?: Partial<typeof homeContent.hero> | null;
})
 {
  // Per-field fallback to the defaults in data/home.js so the hero renders
  // identically even when content is missing or only partially set.
  const data = { ...homeContent.hero, ...(content ?? {}) };
  return (
    <section className="relative overflow-hidden bg-[#050B18]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#FF6B00]/15 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-44 -right-24 h-[460px] w-[460px] rounded-full bg-[#138808]/15 blur-2xl"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-[58px] sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-[86px]">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {data.eyebrow}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
            {data.title} {data.highlightedTitle}
          </p>

        

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.sports}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00] sm:w-auto"
            >
              {data.ctaPrimary}
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href={CTA_LINKS.casino}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00] sm:w-auto"
            >
              {data.ctaSecondary}
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {data.features.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#FF6B00] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#FF6B00]" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.title}</span>
                  <span className="block text-xs text-slate-400">{item.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <HeroImage imageUrl={data.imageUrl} imageAlt={data.imageAlt} />
        </div>
      </div>

      <div className="relative z-10 border-y border-[#138808]/30 bg-[#081425]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#081425] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#081425] to-transparent" />

        <div className="mx-auto flex max-w-7xl snap-x gap-3 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.categories.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex flex-none snap-start items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
