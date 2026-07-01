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
    <section className="relative overflow-hidden bg-[#050B18] min-h-[400px] md:min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-[58px] sm:px-6 lg:px-8 lg:py-[86px]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-3xl">

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)]">
            {content.title} {content.highlightedTitle}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
            {content.description}
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
        </div>
      </div>
    </section>
  );
}


