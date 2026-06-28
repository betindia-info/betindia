import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VIPHero from "@/components/sections/vip/VIPHero";
import VIPBenefits from "@/components/sections/vip/VIPBenefits";
import VIPLevels from "@/components/sections/vip/VIPLevels";
import VIPManager from "@/components/sections/vip/VIPManager";
import VIPCTA from "@/components/sections/vip/VIPCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import VIPBenefitsData, { vipBenefitsContent } from "@/data/VIPBenefits";

export const metadata: Metadata = staticPageMetadata({
  title: "VIP Program India",
  absoluteTitle: "VIP Program India | Casino VIP Membership, Rewards & Exclusive Benefits | BetIndia",
  description:
    "Join the BetIndia VIP Program and enjoy exclusive VIP rewards, faster withdrawals, dedicated account managers, higher betting limits, personalized promotions, and premium gaming benefits for loyal players.",
  path: "/vip",
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

export default async function VIPPage() {
  const page = await getPage("vip-benefits");
  const heroContent = page.hero || VIPBenefitsData.sections.hero;
  const seoBlocks = { ...vipBenefitsContent.seoBlocks, ...(page.seoBlocks ?? {}) };

  return (
    <>
      <Header />
      <main>
        <VIPHero content={heroContent} />
        <VIPBenefits />
        <VIPLevels />
        <VIPManager />
        <CenteredSeoSection
          title={seoBlocks.whyJoinTitle}
          text={seoBlocks.whyJoinText}
          gradientWord="VIP Program"
        />
        <CenteredSeoSection
          title={seoBlocks.premiumRewardsTitle}
          text={seoBlocks.premiumRewardsText}
          gradientWord="VIP Rewards"
        />
        <CenteredSeoSection
          title={seoBlocks.exclusiveMembershipTitle}
          text={seoBlocks.exclusiveMembershipText}
          gradientWord="VIP Membership"
        />
        <FAQ content={page.faq} defaultContent={vipBenefitsContent.faq} />
        <VIPCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
