import type { Metadata } from "next";

// ─── Site constants ───────────────────────────────────────────────────────────

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://betindia.co";

export const SITE_CONFIG = {
  name: "BetIndia",
  url: SITE_URL,
  description:
    "India's most trusted sports betting and casino platform. Live cricket betting, IPL odds, casino games, Aviator and more.",
  logo: "/logo/betindialogo.png",
  // Replace with a proper 1200×630 OG image when assets are ready
  ogImage: "/logo/betindialogo.png",
  twitterHandle: "@BetIndia",
  locale: "en_IN",
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

// ─── Static page metadata factory ─────────────────────────────────────────────
// Generates canonical + OG + Twitter for any static page.
// Pass `absoluteTitle` to bypass the layout template (e.g. homepage).

export function staticPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  absoluteTitle?: string;
}): Metadata {
  const url = canonicalUrl(path);
  const ogTitle = absoluteTitle ?? `${title} | ${SITE_CONFIG.name}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}
