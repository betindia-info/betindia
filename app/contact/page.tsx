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
    title: "Contact BetIndia Customer Support",
    description:
      "Contact BetIndia customer support 24/7 for help with accounts, sports betting, casino games, deposits, withdrawals, and promotions.",
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
