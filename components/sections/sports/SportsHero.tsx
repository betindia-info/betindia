import Link from "next/link";
import { Activity, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { CTA_LINKS } from "@/lib/cta-links";
import type { PageHeroContent } from "@/lib/page-content";

const FEATURES = [
  { icon: Activity,    title: "Live Betting",      sub: "Real-time odds" },
  { icon: Zap,         title: "Fast Withdrawals",  sub: "Instant payouts" },
  { icon: ShieldCheck, title: "Secure Platform",   sub: "100% protected" },
  { icon: TrendingUp,  title: "Real-Time Markets", sub: "500+ markets" },
] as const;

const SAMPLE_ODDS = [
  { label: "India",     odds: "1.85", active: true },
  { label: "Draw",      odds: "3.40", active: false },
  { label: "Australia", odds: "2.10", active: false },
] as const;

const QUICK_MARKETS = ["Toss Winner", "Top Batsman", "Over/Under", "Top Bowler"] as const;

const DEFAULT_HERO_BG = "/betindia_front_banner.png";

const DEFAULT_CONTENT: PageHeroContent = {
  pageId: "sports",
  path: "/sports",
  name: "Sports Betting",
  eyebrow: "Live Sports Betting",
  title: "BET ON YOUR",
  highlightedTitle: "FAVORITE SPORTS",
  description:
    "Experience real-time sports betting with live markets, competitive odds, and fast withdrawals.",
  imageUrl: DEFAULT_HERO_BG,
  imageAlt: "Sports betting at BetIndia",
};

export default function SportsHero({ content = DEFAULT_CONTENT }: { content?: PageHeroContent }) {
  const heroImage = content.imageUrl?.trim() || DEFAULT_HERO_BG;

  return (
    <section
      className="relative overflow-hidden bg-black  bg-contain bg-right bg-no-repeat"
      style={{
        backgroundImage: ` url(${heroImage})`,
      }}
    >
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#FF6B00]/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-44 -right-24 h-[460px] w-[460px] rounded-full bg-[#138808]/10 blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* LEFT â€” Content */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {content.eyebrow}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {content.title} {content.highlightedTitle}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={CTA_LINKS.signup}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#FF6B00]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8A00] hover:shadow-[#FF6B00]/30 sm:w-auto"
            >
              Start Betting
              <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#live-matches"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B00] hover:bg-white/10 sm:w-auto"
            >
              View Live Matches
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 lg:justify-start">
            {FEATURES.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#FF6B00] backdrop-blur-md">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{title}</span>
                  <span className="block text-xs text-slate-400">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

     
      </div>
    </section>
  );
}


