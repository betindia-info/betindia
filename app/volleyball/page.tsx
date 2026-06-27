import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VolleyballHero from "@/components/sections/volleyball/VolleyballHero";
import VolleyballWhyChoose from "@/components/sections/volleyball/VolleyballWhyChoose";
import VolleyballPerfectChoice from "@/components/sections/volleyball/VolleyballPerfectChoice";
import LiveVolleyballBetting from "@/components/sections/volleyball/LiveVolleyballBetting";
import VolleyballTournaments from "@/components/sections/volleyball/VolleyballTournaments";
import VolleyballMarkets from "@/components/sections/volleyball/VolleyballMarkets";
import HowVolleyballBettingWorks from "@/components/sections/volleyball/HowVolleyballBettingWorks";
import VolleyballPremiumFeatures from "@/components/sections/volleyball/VolleyballPremiumFeatures";
import VolleyballTips from "@/components/sections/volleyball/VolleyballTips";
import VolleyballCTA from "@/components/sections/volleyball/VolleyballCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import { volleyballContent } from "@/data/volleyball";

export const metadata: Metadata = staticPageMetadata({
  title: "Volleyball Betting India",
  description:
    "Online volleyball betting on VNL, FIVB World Championships, Olympics, and live in-play markets. Competitive odds and fast withdrawals on BetIndia.",
  path: "/volleyball",
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

export default async function VolleyballPage() {
  const page = await getPage("volleyball");
  const heroContent = page.hero || volleyballContent.hero;

  return (
    <>
      <Header />
      <main>
        <VolleyballHero content={heroContent} />
        <CenteredSeoSection
          title={volleyballContent.intro.title}
          text={volleyballContent.intro.text}
          gradientWord="Indian"
        />
        <VolleyballWhyChoose />
        <CenteredSeoSection
          title={volleyballContent.growingFast.title}
          text={volleyballContent.growingFast.text}
          gradientWord="Fast"
        />
        <VolleyballPerfectChoice />
        <LiveVolleyballBetting />
        <VolleyballTournaments />
        <VolleyballMarkets />
        <HowVolleyballBettingWorks />
        <VolleyballPremiumFeatures />
        <VolleyballTips />
        <CenteredSeoSection
          title={volleyballContent.responsible.title}
          text={volleyballContent.responsible.text}
          gradientWord="Responsible"
        />
        <FAQ content={page.faq} defaultContent={volleyballContent.faq} />
        <VolleyballCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
