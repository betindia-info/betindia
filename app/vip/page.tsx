import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VIPHero from "@/components/sections/vip/VIPHero";
import VIPBenefits from "@/components/sections/vip/VIPBenefits";
import VIPLevels from "@/components/sections/vip/VIPLevels";
import VIPManager from "@/components/sections/vip/VIPManager";
import VIPCTA from "@/components/sections/vip/VIPCTA";
import { staticPageMetadata } from "@/lib/seo";

import { getPage } from "@/lib/cms";
import VIPBenefitsData from "@/data/VIPBenefits";

export const metadata: Metadata = staticPageMetadata({
  title: "VIP Club",
  description:
    "Join the BetIndia VIP Club for exclusive rewards, faster withdrawals, higher limits, and a dedicated personal account manager.",
  path: "/vip",
});

export const revalidate = 300;

export default async function VIPPage() {
  const page = await getPage("vip-benefits");
  const heroContent = page.hero || VIPBenefitsData.sections.hero;

  return (
    <>
      <Header />
      <main>
        <VIPHero content={heroContent} />
        <VIPBenefits />
        <VIPLevels />
        <VIPManager />
        <VIPCTA />
      </main>
      <Footer />
    </>
  );
}
