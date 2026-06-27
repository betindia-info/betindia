import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrivacyHero from "@/components/legal/PrivacyHero";
import InformationCollection from "@/components/legal/InformationCollection";
import DataUsage from "@/components/legal/DataUsage";
import CookiesSection from "@/components/legal/CookiesSection";
import SecuritySection from "@/components/legal/SecuritySection";
import UserRights from "@/components/legal/UserRights";
import PrivacyContact from "@/components/legal/PrivacyContact";
import { staticPageMetadata } from "@/lib/seo";

import { getPage } from "@/lib/cms";
import PrivacyPolicy from "@/data/privacy-policy";

export const metadata: Metadata = staticPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how BetIndia collects, uses, stores, and protects user information through our Privacy Policy and data protection practices.",
  path: "/privacy-policy",
  noIndex: false,
});

export const revalidate = 300;

export default async function PrivacyPolicyPage() {
  const page = await getPage("privacy-policy");
  const heroContent = page.hero || PrivacyPolicy.sections.hero;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B18]">
        <PrivacyHero content={heroContent} />
        <InformationCollection />
        <DataUsage />
        <CookiesSection />
        <SecuritySection />
        <UserRights />
        <PrivacyContact />
      </main>
      <Footer />
    </>
  );
}
