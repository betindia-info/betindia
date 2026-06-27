import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CricketHero from "@/components/sections/cricket/CricketHero";
import CricketMarkets from "@/components/sections/cricket/CricketMarkets";
import LiveCricketMatches from "@/components/sections/LiveCricketMatches";
import WhyBetOnCricket from "@/components/sections/cricket/WhyBetOnCricket";
import CricketCTA from "@/components/sections/cricket/CricketCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import cricket, { cricketContent } from "@/data/cricket";

export const metadata: Metadata = staticPageMetadata({
  title: "Cricket Betting",
  description:
    "Ball-by-ball live odds on every IPL, T20, ODI, and Test match. 500+ markets including match winner, top batsman, session betting, and more.",
  path: "/cricket",
});

export const revalidate = 300;

export default async function CricketPage() {
  const page = await getPage("cricket");
  const heroContent = page.hero || cricketContent.hero;

  const seoBlocks = { ...cricketContent.seoBlocks, ...(page.seoBlocks ?? {}) };

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <CricketHero content={heroContent} />

        {/* 2. Cricket Betting in India (Centered Title & Centered Text) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {seoBlocks.cricketBettingTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-slate-300 text-center whitespace-pre-line">
              {seoBlocks.cricketBettingText}
            </p>
          </div>
        </section>

        {/* 3. Cricket Markets */}
        <CricketMarkets />

        {/* 4. Live Matches widget */}
        <div id="cricket-matches">
          <LiveCricketMatches />
        </div>

        {/* 5. Live Cricket Betting (2-Column Premium Split Layout) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#138808]" />
                  Live Betting
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {seoBlocks.liveCricketBettingTitle}
                </h2>
                <div className="mt-4 h-1 w-16 bg-[#138808] rounded-full" />
              </div>
              <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {seoBlocks.liveCricketBettingText}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Bet On Cricket */}
        <WhyBetOnCricket />

        {/* 7. Why Cricket Fans Choose BetIndia (2-Column Premium Split Layout) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                  Why BetIndia
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {seoBlocks.whyChooseTitle}
                </h2>
                <div className="mt-4 h-1 w-16 bg-[#FF6B00] rounded-full" />
              </div>
              <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                {seoBlocks.whyChooseText}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Cricket CTA */}
        <CricketCTA />

        {/* 9. Dynamic FAQ Block */}
        <FAQ content={page.faq} defaultContent={cricketContent.faq} />
      </main>
      <Footer />
    </>
  );
}
