import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import CustomerSupportServices from "@/components/sections/contact/CustomerSupportServices";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import ContactUs, { contactUsContent } from "@/data/ContactUs";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    pageId: "contact-us",
    title: "Contact BetIndia",
    absoluteTitle: "Contact BetIndia | 24/7 Customer Support & Help",
    description:
      "Contact BetIndia for 24/7 customer support with sports betting, live betting, online casino games, deposits, withdrawals, account assistance, and technical enquiries.",
    path: "/contact",
  });
}

export const revalidate = 300;

export default async function ContactPage() {
  const page = await getPage("contact-us");
  const heroContent = page.hero || contactUsContent.hero;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B18] text-white">
        <ContactHero content={heroContent} />
        <ContactForm />
        <CustomerSupportServices />
        <FAQ content={page.faq} defaultContent={contactUsContent.faq} />
        <ContactCTA content={page.cta} />
      </main>
      <Footer />
    </>
  );
}
