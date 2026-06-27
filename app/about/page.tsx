import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import WhatWeOffer from "@/components/sections/about/WhatWeOffer";
import WhyChooseAbout from "@/components/sections/about/WhyChooseAbout";
import AboutCTA from "@/components/sections/about/AboutCTA";
import FAQ from "@/components/sections/FAQ";
import { staticPageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import AboutUs, { aboutUsContent } from "@/data/AboutUs";

export const metadata: Metadata = staticPageMetadata({
  title: "About BetIndia",
  description:
    "Learn about BetIndia — India's trusted online sports betting and casino platform. Live sports, casino games, secure payments, and premium gaming for players across India.",
  path: "/about",
});

export const revalidate = 300;

export default async function AboutPage() {
  const page = await getPage("about-us");
  const heroContent = page.hero || aboutUsContent.hero;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B18] text-white">
        <AboutHero content={heroContent} />
        <AboutIntro />
        <WhatWeOffer />
        <WhyChooseAbout />
        <FAQ content={page.faq} defaultContent={aboutUsContent.faq} />
        <AboutCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
