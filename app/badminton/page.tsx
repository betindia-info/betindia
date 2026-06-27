import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BadmintonHero from "@/components/sections/badminton/BadmintonHero";
import BadmintonWhyChoose from "@/components/sections/badminton/BadmintonWhyChoose";
import LiveBadmintonBetting from "@/components/sections/badminton/LiveBadmintonBetting";
import BadmintonTournaments from "@/components/sections/badminton/BadmintonTournaments";
import BadmintonMarkets from "@/components/sections/badminton/BadmintonMarkets";
import HowBadmintonBettingWorks from "@/components/sections/badminton/HowBadmintonBettingWorks";
import BadmintonPremiumFeatures from "@/components/sections/badminton/BadmintonPremiumFeatures";
import BadmintonTips from "@/components/sections/badminton/BadmintonTips";
import BadmintonCTA from "@/components/sections/badminton/BadmintonCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import { badmintonContent } from "@/data/badminton";

export const metadata: Metadata = staticPageMetadata({
  title: "Badminton Betting India",
  description:
    "Online badminton betting on BWF tournaments, India Open, All England, and live in-play markets. Competitive odds and fast withdrawals on BetIndia.",
  path: "/badminton",
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
        <p className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-slate-300 sm:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}

export default async function BadmintonPage() {
  const page = await getPage("badminton");
  const heroContent = page.hero || badmintonContent.hero;

  return (
    <>
      <Header />
      <main>
        <BadmintonHero content={heroContent} />
        <CenteredSeoSection
          title={badmintonContent.intro.title}
          text={badmintonContent.intro.text}
          gradientWord="India"
        />
        <BadmintonWhyChoose />
        <LiveBadmintonBetting />
        <BadmintonTournaments />
        <BadmintonMarkets />
        <HowBadmintonBettingWorks />
        <BadmintonPremiumFeatures />
        <BadmintonTips />
        <CenteredSeoSection
          title={badmintonContent.responsible.title}
          text={badmintonContent.responsible.text}
          gradientWord="Responsible"
        />
        <FAQ content={page.faq} defaultContent={badmintonContent.faq} />
        <BadmintonCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
