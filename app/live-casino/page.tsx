import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveCasinoHero from "@/components/sections/live-casino/LiveCasinoHero";
import LiveDealerGames from "@/components/sections/live-casino/LiveDealerGames";
import WhyLiveCasino from "@/components/sections/live-casino/WhyLiveCasino";
import FeaturedTables from "@/components/sections/live-casino/FeaturedTables";
import LiveCasinoCTA from "@/components/sections/live-casino/LiveCasinoCTA";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata({
  title: "Live Casino",
  description:
    "Play Live Roulette, Blackjack, Baccarat, Teen Patti Live, Andar Bahar Live, Aviator, Crazy Time, and more on BetIndia's premium live casino platform.",
  path: "/live-casino",
});

export default function LiveCasinoPage() {
  return (
    <>
      <Header />
      <main>
        <LiveCasinoHero />
        <LiveDealerGames />
        <WhyLiveCasino />
        <FeaturedTables />
        <LiveCasinoCTA />
      </main>
      <Footer />
    </>
  );
}
