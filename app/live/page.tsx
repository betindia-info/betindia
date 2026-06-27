import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveHero from "@/components/sections/live/LiveHero";
import LiveFeatures from "@/components/sections/live/LiveFeatures";
import LiveInPlayBetting from "@/components/sections/live/LiveInPlayBetting";
import LiveEventsPreview from "@/components/sections/live/LiveEventsPreview";
import HowLiveBettingWorks from "@/components/sections/live/HowLiveBettingWorks";
import PopularLiveMarkets from "@/components/sections/live/PopularLiveMarkets";
import WhyChooseLiveBetting from "@/components/sections/live/WhyChooseLiveBetting";
import LiveMarketsAvailable from "@/components/sections/live/LiveMarketsAvailable";
import LiveCTA from "@/components/sections/live/LiveCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { liveContent } from "@/data/live";

export const metadata: Metadata = staticPageMetadata({
  title: "Live Betting & In-Play Sports Betting",
  description:
    "Bet in real time on live cricket, football, tennis and more. Real-time odds, instant cashout, and exciting in-play betting opportunities.",
  path: "/live",
});

const ACCENT_COLORS = ["#FF6B00", "#138808"] as const;

export default function LivePage() {
  const seoSections = [
    {
      title: liveContent.seoBlocks.whyChooseTitle,
      text: liveContent.seoBlocks.whyChooseText,
    },
    {
      title: liveContent.seoBlocks.experienceTitle,
      text: liveContent.seoBlocks.experienceText,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <LiveHero />
        <LiveFeatures />
        <LiveInPlayBetting />
        <LiveEventsPreview />
        <HowLiveBettingWorks />
        <PopularLiveMarkets />
        <WhyChooseLiveBetting />
        <LiveMarketsAvailable />

        {/* SEO editorial blocks */}
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
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT_COLORS[index] }}
                    />
                    BetIndia
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {block.title}
                  </h2>
                  <div
                    className="mt-4 h-1 w-16 rounded-full"
                    style={{ backgroundColor: ACCENT_COLORS[index] }}
                  />
                </div>
                <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line sm:text-base">
                  {block.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQ content={liveContent.faq} defaultContent={liveContent.faq} />
        <LiveCTA />
      </main>
      <Footer />
    </>
  );
}
