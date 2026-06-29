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
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/cms";
import { blogContent } from "@/data/blog";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    pageId: "blog",
    title: "Blog",
    description:
      "Expert betting guides, IPL cricket tips, casino strategies, Aviator insights, and the latest gaming trends from the BetIndia team.",
    path: "/blog",
  });
}

// Posts come from Firestore; revalidate the listing periodically.
export const revalidate = 300;

export default async function BlogPage() {
  const [posts, featured, page] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
    getPage("blog"),
  ]);

  // CMS content with fallback to code defaults (Firestore may be empty).
  const heroContent = page.hero || blogContent.hero;
  const featuredPosts = { ...blogContent.featuredPosts, ...(page.featuredPosts ?? {}) };
  const categories = { ...blogContent.categories, ...(page.categories ?? {}) };
  const newsletter = { ...blogContent.newsletter, ...(page.newsletter ?? {}) };

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
        <BlogSearch content={categories} />
        {featured && <FeaturedArticle post={featured} />}
        <LatestArticles articles={articles} content={featuredPosts} />
        <NewsletterCTA content={newsletter} />
      </main>
      <Footer />
    </>
  );
}
