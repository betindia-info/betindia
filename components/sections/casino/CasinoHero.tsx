import Link from "next/link";
import { Gem, Users, Crown, Plane, Gamepad2, TrendingUp } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import type { PageHeroContent } from "@/lib/page-content";

const TRUST = [
  "500+ Casino Games",
  "Live Dealers",
  "Fast Withdrawals",
  "Secure Gaming",
] as const;

const PREVIEW_GAMES = [
  { icon: Gamepad2, label: "Live Blackjack",  badge: "LIVE",    accent: "#FF6B00" },
  { icon: TrendingUp, label: "Mega Fortune",  badge: "JACKPOT", accent: "#138808" },
  { icon: Plane,    label: "Aviator",         badge: "HOT",     accent: "#FF6B00" },
  { icon: Users,    label: "Teen Patti",      badge: "POPULAR", accent: "#138808" },
  { icon: Crown,    label: "Live Baccarat",   badge: "LIVE",    accent: "#FF6B00" },
  { icon: Gem,      label: "Golden Spin",     badge: "NEW",     accent: "#138808" },
] as const;

const DEFAULT_CONTENT: PageHeroContent = {
  pageId: "casino",
  path: "/casino",
  name: "Casino",
  eyebrow: "Premium Online Casino",
  title: "Spin Bigger.",
  highlightedTitle: "Win More.",
  description:
    "Experience world-class casino entertainment with premium slots, live dealers, Teen Patti, Aviator, and exciting table games. Fast withdrawals and luxury gameplay guaranteed.",
  imageUrl: "",
  imageAlt: "BetIndia online casino",
};

export default function CasinoHero({ content = DEFAULT_CONTENT }: { content?: PageHeroContent }) {
  return (
    <section
      className="relative overflow-hidden bg-[#050B18] bg-cover bg-center"
      style={content.imageUrl ? { backgroundImage: `linear-gradient(rgba(5, 11, 24, 0.82), rgba(5, 11, 24, 0.92)), url(${content.imageUrl})` } : undefined}
    >
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#FF6B00]/15 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 -right-24 h-[460px] w-[460px] rounded-full bg-[#138808]/12 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* LEFT â€” Content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF6B00]" />
            {content.eyebrow}
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {content.title}
            <br />
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#138808] bg-clip-text text-transparent">
              {content.highlightedTitle}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {content.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#featured-games"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/30 sm:w-auto"
            >
              Explore Games
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="#live-casino"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              Play Live Casino
            </Link>
          </div>

          {/* Trust points */}
          <ul className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            {TRUST.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-300 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT â€” Casino Games Preview */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[#FF6B00]/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
              {/* Header row */}
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Featured Games</p>
                <span className="rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-[10px] font-bold text-[#FF6B00]">
                  500+ Games
                </span>
              </div>

              {/* 2Ã—3 game grid */}
              <div className="grid grid-cols-3 gap-3">
                {PREVIEW_GAMES.map(({ icon: Icon, label, badge, accent }) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    {/* Gradient bg */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${accent}30 0%, transparent 70%)`,
                      }}
                    />
                    {/* Badge */}
                    <span
                      className="mb-2.5 inline-block rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                      style={{ color: accent, background: `${accent}18` }}
                    >
                      {badge}
                    </span>
                    {/* Icon */}
                    <div
                      className="mb-2 grid h-10 w-10 place-items-center rounded-xl border transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${accent}18`, borderColor: `${accent}30`, color: accent }}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                    {/* Label */}
                    <p className="text-[11px] font-bold leading-tight text-white">{label}</p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA row */}
              <div className="mt-5 border-t border-white/[0.06] pt-4">
                <Link
                  href={CTA_LINKS.signup}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#FF8A00] hover:shadow-lg hover:shadow-[#FF6B00]/25"
                >
                  Play Now â€” It&apos;s Free to Join
                </Link>
              </div>
              <p className="mt-3 text-center text-[10px] text-slate-600">
                18+ only Â· Play Responsibly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



