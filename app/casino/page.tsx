import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CasinoHero from "@/components/sections/casino/CasinoHero";
import LiveCasino from "@/components/sections/casino/LiveCasino";
import SlotsSection from "@/components/sections/casino/SlotsSection";
import TeenPattiSection from "@/components/sections/casino/TeenPattiSection";
import AviatorSection from "@/components/sections/casino/AviatorSection";
import FeaturedGames from "@/components/sections/casino/FeaturedGames";
import CasinoCTA from "@/components/sections/casino/CasinoCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import casino, { casinoContent } from "@/data/casino";

export const metadata: Metadata = staticPageMetadata({
  title: "Online Casino",
  description:
    "Play premium casino games at BetIndia. Live dealers, slots, Teen Patti, Aviator, and 500+ games with fast withdrawals.",
  path: "/casino",
});

export const revalidate = 300;

export default async function CasinoPage() {
  const page = await getPage("casino");
  const heroContent = page.hero || casinoContent.hero;

  // Merge text-based section contents with fallback defaults
  const about = { ...casinoContent.about, ...(page.about ?? {}) };
  const whyChoose = { ...casinoContent.whyChoose, ...(page.whyChoose ?? {}) };
  const cricketId = { ...casinoContent.cricketId, ...(page.cricketId ?? {}) };
  const platform = { ...casinoContent.platform, ...(page.platform ?? {}) };
  const bestCasino = { ...casinoContent.bestCasino, ...(page.bestCasino ?? {}) };

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <CasinoHero content={heroContent} />

        {/* 2. About Section (Centered Title & Centered Text) */}
        <section className="relative overflow-hidden bg-[#050B18] PX-2 py-12 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {about.aboutTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 text-center">
              {about.aboutText}
            </p>
          </div>
        </section>

        {/* 3. Featured Games */}
        <FeaturedGames content={page.featured} />

        {/* 4. Live Casino */}
        <LiveCasino content={page.liveCasino} />

        {/* 5. Popular Slots */}
        <SlotsSection content={page.popularSlots} />

        {/* 6. Teen Patti */}
        <TeenPattiSection content={page.teenPatti} />

        {/* 7. Aviator */}
        <AviatorSection content={page.aviator} />

        {/* 8. Why Choose Section (Centered Title & Centered Text) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-12 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl lg:text-4xl">
                {whyChoose.whyChooseTitle}
              </h2>
              <div className="mx-auto mt-3.5 h-1 w-16 bg-gradient-to-r from-[#FF6B00] to-[#138808] rounded-full" />
            </div>
            <p className="mx-auto text-sm sm:text-base leading-relaxed text-slate-300 text-center whitespace-pre-line">
              {whyChoose.whyChooseText}
            </p>
          </div>
        </section>

        {/* 9. SEO Text Blocks (Editorial Split Stacks) */}
        <section className="relative overflow-hidden bg-[#050B18] px-4 py-16 sm:px-6 lg:px-8 border-t border-white/[0.04]">
          <div className="relative z-10 mx-auto max-w-7xl space-y-16">
            {/* Cricket ID */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{cricketId.cricketIdTitle}</h2>
                <div className="mt-4 h-1 w-16 bg-[#FF6B00] rounded-full" />
              </div>
              <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">{cricketId.cricketIdText}</div>
            </div>

            {/* Platform */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border-t border-white/[0.06] pt-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{platform.platformTitle}</h2>
                <div className="mt-4 h-1 w-16 bg-[#138808] rounded-full" />
              </div>
              <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">{platform.platformText}</div>
            </div>

            {/* Best Casino */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border-t border-white/[0.06] pt-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{bestCasino.bestCasinoTitle}</h2>
                <div className="mt-4 h-1 w-16 bg-[#FF6B00] rounded-full" />
              </div>
              <div className="lg:col-span-2 text-slate-400 text-sm leading-relaxed whitespace-pre-line">{bestCasino.bestCasinoText}</div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <CasinoCTA content={page.finalCta} />

        {/* 11. FAQ */}
        <FAQ content={page.faq} defaultContent={casinoContent.faq} />
      </main>
      <Footer />
    </>
  );
}
