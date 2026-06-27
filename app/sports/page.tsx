import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SportsHero from "@/components/sections/sports/SportsHero";
import LiveMatches from "@/components/sections/sports/LiveMatches";
import PopularSports from "@/components/sections/sports/PopularSports";
import BettingMarkets from "@/components/sections/sports/BettingMarkets";
import SportsCTA from "@/components/sections/sports/SportsCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import sports, { sportsContent } from "@/data/sports";

export const metadata: Metadata = staticPageMetadata({
  title: "Sports Betting",
  description:
    "Live sports betting with real-time odds on cricket, football, tennis and 50+ sports. Fast withdrawals, secure payments.",
  path: "/sports",
});

export const revalidate = 300;

// Accent colors alternate per block, same as the original hardcoded sequence
const ACCENT_COLORS = ["#138808", "#FF6B00", "#138808", "#FF6B00"] as const;

export default async function SportsPage() {
  const page = await getPage("sports");
  const heroContent = {
    pageId: "sports",
    path: "/sports",
    name: "Sports Betting",
    ...sportsContent.hero,
    ...(page.hero ?? {}),
  };

  // Merge sections with fallbacks
  const whyBet = { ...sportsContent.whyBet, ...(page.whyBet ?? {}) };
  const whyBetItems = whyBet.items && whyBet.items.length > 0 ? whyBet.items : sportsContent.whyBet.items;

  const liveCricket = { ...sportsContent.liveCricket, ...(page.liveCricket ?? {}) };
  const seoBlocks = { ...sportsContent.seoBlocks, ...(page.seoBlocks ?? {}) };

  const seoSections = [
    {
      title: seoBlocks.liveCricketBettingTitle,
      text: seoBlocks.liveCricketBettingText,
    },
    {
      title: seoBlocks.sportsbookTitle,
      text: seoBlocks.sportsbookText,
    },
    {
      title: seoBlocks.availableMarketsTitle,
      text: seoBlocks.availableMarketsText,
    },
    {
      title: seoBlocks.whyChooseTitle,
      text: seoBlocks.whyChooseText,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <SportsHero content={heroContent} />

        {/* 2. Why Bet with Us? */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#138808]/7 blur-2xl" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {whyBet.title}
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyBetItems.map((item: { title: string; description: string }) => (
                <div key={item.title} className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/40">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Live Cricket Betting (Centered Title & Centered Text) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {liveCricket.title}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 text-center">
              {liveCricket.text}
            </p>
          </div>
        </section>

        {/* 4. Live Matches Dashboard */}
        <LiveMatches />

        {/* 5. Explore Popular Sports */}
        <PopularSports content={page.popularSports} />

        {/* 6. Popular Betting Markets */}
        <BettingMarkets content={page.bettingMarkets} />

        {/* SEO Text Blocks (Editorial Split Stacks) — generated from seoSections */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-7xl space-y-16">
            {seoSections.map((block, index) => (
              <div
                key={block.title}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-3 ${
                  index > 0 ? "border-t border-white/[0.06] pt-12" : ""
                }`}
              >
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {block.title}
                  </h2>
                  <div
                    className="mt-4 h-1 w-16 rounded-full"
                    style={{ backgroundColor: ACCENT_COLORS[index] }}
                  />
                </div>
                <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {block.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. FAQ Accordions */}
        <FAQ content={page.faq} defaultContent={sportsContent.faq} />

        {/* 12. Final CTA Section */}
        <SportsCTA content={page.finalCta} />
      </main>
      <Footer />
    </>
  );
}