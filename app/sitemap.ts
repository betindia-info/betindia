import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllSlugs } from "@/lib/blog-data";

const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/",                    priority: 1.0,  changeFrequency: "weekly" },
  { path: "/cricket",             priority: 0.9,  changeFrequency: "daily"  },
  { path: "/live",                priority: 0.9,  changeFrequency: "always" },
  { path: "/casino",              priority: 0.9,  changeFrequency: "weekly" },
  { path: "/sports",              priority: 0.85, changeFrequency: "daily"  },
  { path: "/live-casino",         priority: 0.85, changeFrequency: "weekly" },
  { path: "/slots",               priority: 0.8,  changeFrequency: "weekly" },
  { path: "/table-games",         priority: 0.8,  changeFrequency: "weekly" },
  { path: "/football",            priority: 0.8,  changeFrequency: "daily"  },
  { path: "/tennis",              priority: 0.8,  changeFrequency: "daily"  },
  { path: "/badminton",           priority: 0.8,  changeFrequency: "daily"  },
  { path: "/volleyball",          priority: 0.8,  changeFrequency: "daily"  },
  { path: "/promotions",          priority: 0.85, changeFrequency: "weekly" },
  { path: "/vip",                 priority: 0.75, changeFrequency: "monthly"},
  { path: "/blog",                priority: 0.8,  changeFrequency: "weekly" },
  { path: "/about",               priority: 0.6,  changeFrequency: "monthly"},
  { path: "/contact",             priority: 0.6,  changeFrequency: "monthly"},
  { path: "/responsible-gaming",  priority: 0.55, changeFrequency: "monthly"},
  { path: "/privacy-policy",      priority: 0.4,  changeFrequency: "yearly" },
  { path: "/terms-and-conditions",priority: 0.4,  changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));

  const slugs = await getAllSlugs();
  const blogEntries = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
