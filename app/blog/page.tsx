import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogSearch from "@/components/sections/blog/BlogSearch";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import LatestArticles from "@/components/sections/blog/LatestArticles";
import NewsletterCTA from "@/components/sections/blog/NewsletterCTA";
import type { Article } from "@/components/sections/LatestArticles";
import { getAllPosts, getFeaturedPost } from "@/lib/blog-data";
import { staticPageMetadata } from "@/lib/seo";
import { getPageContent } from "@/lib/page-content";

export const metadata: Metadata = staticPageMetadata({
  title: "Blog",
  description:
    "Expert betting guides, IPL cricket tips, casino strategies, Aviator insights, and the latest gaming trends from the BetIndia team.",
  path: "/blog",
});

// Posts come from Firestore; revalidate the listing periodically.
export const revalidate = 300;

export default async function BlogPage() {
  const [posts, featured, heroContent] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
    getPageContent("blog", {
      path: "/blog",
      name: "Blog",
      eyebrow: "BetIndia Blog",
      title: "Betting Guides, Casino Tips",
      highlightedTitle: "& Winning Strategies",
      description:
        "Stay informed with expert insights, sports betting guides, casino strategies, Aviator tips, and the latest gaming trends from the BetIndia team.",
      imageUrl: "",
      imageAlt: "BetIndia blog",
    }),
  ]);

  const articles: Article[] = posts.map((p) => ({
    slug: p.slug,
    category: p.category,
    accent: p.accent,
    title: p.title,
    excerpt: p.excerpt,
    readTime: p.readTime,
    placeholderIcon: p.icon,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050B18] text-white">
        <BlogHero content={heroContent} />
        <BlogSearch />
        {featured && <FeaturedArticle post={featured} />}
        <LatestArticles articles={articles} />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
