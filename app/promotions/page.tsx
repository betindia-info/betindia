import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromotionsHero from "@/components/sections/promotions/PromotionsHero";
import FeaturedPromotions from "@/components/sections/promotions/FeaturedPromotions";
import WhyJoinBetIndia from "@/components/sections/promotions/WhyJoinBetIndia";
import PromotionsCTA from "@/components/sections/promotions/PromotionsCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import Promotions, { promotionsContent } from "@/data/promotions";

export const metadata: Metadata = staticPageMetadata({
  title: "Promotions & Bonuses",
  description:
    "Unlock exclusive bonuses, cashback offers, VIP rewards and referral benefits at BetIndia. India's most rewarding sportsbook.",
  path: "/promotions",
});

export const revalidate = 300;

export default async function PromotionsPage() {
  const page = await getPage("promotions");
  const heroContent = page.hero || promotionsContent.hero;

  const seoBlocks = { ...promotionsContent.seoBlocks, ...(page.seoBlocks ?? {}) };

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <PromotionsHero content={heroContent} />

        {/* 2. Active Promotions Grid */}
        <FeaturedPromotions content={page.featured} />

        {/* 3. Centered Info Block 1: Online Casino Bonuses & Sports Betting Promotions */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {seoBlocks.bonusesTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-slate-300 text-center whitespace-pre-line">
              {seoBlocks.bonusesText}
            </p>
          </div>
        </section>

        {/* 4. Centered Info Block 2: Online Casino Promotions in India */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {seoBlocks.casinoPromotionsTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-slate-300 text-center whitespace-pre-line">
              {seoBlocks.casinoPromotionsText}
            </p>
          </div>
        </section>

        {/* 5. Why Players Choose BetIndia Features */}
        <WhyJoinBetIndia content={page.whyJoin} />

        {/* 6. Centered Info Block 3: Why Our Bonuses Stand Out */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {seoBlocks.whyStandOutTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-slate-300 text-center whitespace-pre-line">
              {seoBlocks.whyStandOutText}
            </p>
          </div>
        </section>

        {/* 7. FAQs */}
        <FAQ content={page.faq} defaultContent={promotionsContent.faq} />

        {/* 8. Final CTA */}
        <PromotionsCTA content={page.finalCta} />
      </main>
      <Footer />
    </>
  );
}
