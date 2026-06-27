import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TennisHero from "@/components/sections/tennis/TennisHero";
import LiveTennisMarkets from "@/components/sections/tennis/LiveTennisMarkets";
import TennisTournaments from "@/components/sections/tennis/TennisTournaments";
import TennisTips from "@/components/sections/tennis/TennisTips";
import TennisCTA from "@/components/sections/tennis/TennisCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import tennis, { tennisContent } from "@/data/tennis";

export const metadata: Metadata = staticPageMetadata({
  title: "Tennis Betting",
  description:
    "Live tennis betting on Grand Slams, ATP Tour, and WTA Tour. Competitive odds, in-play markets, and real-time match updates on BetIndia.",
  path: "/tennis",
});

export const revalidate = 300;

function CenteredSeoSection({
  title,
  text,
  gradientWord,
}: {
  title: string;
  text: string;
  gradientWord?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
          {gradientWord && title.includes(gradientWord) ? (
            <>
              {title.split(gradientWord)[0]}
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#138808] bg-clip-text text-transparent">
                {gradientWord}
              </span>
              {title.split(gradientWord)[1]}
            </>
          ) : (
            title
          )}
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#138808]" />
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 whitespace-pre-line sm:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}

export default async function TennisPage() {
  const page = await getPage("tennis");
  const heroContent = page.hero || tennisContent.hero;
  const seoBlocks = { ...tennisContent.seoBlocks, ...(page.seoBlocks ?? {}) };

  return (
    <>
      <Header />
      <main>
        <TennisHero content={heroContent} />
        <LiveTennisMarkets />
        <TennisTournaments />
        <CenteredSeoSection
          title={seoBlocks.whyChooseTitle}
          text={seoBlocks.whyChooseText}
          gradientWord="BetIndia"
        />
        <CenteredSeoSection
          title={seoBlocks.oddsTitle}
          text={seoBlocks.oddsText}
          gradientWord="Odds"
        />
        <TennisTips />
        <FAQ content={page.faq} defaultContent={tennisContent.faq} />
        <TennisCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
