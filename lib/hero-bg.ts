import type { CSSProperties } from "react";

/**
 * Background style for a hero section when a CMS image (uploaded via
 * Admin → Page Images, stored as hero.imageUrl) is set.
 *
 * Returns `undefined` when there's no image, so the hero keeps its original
 * design untouched. When an image is present, it's shown full-bleed behind a
 * dark gradient overlay so the headline/text stay readable.
 */
export function heroBgStyle(imageUrl?: string): CSSProperties | undefined {
  const url = typeof imageUrl === "string" ? imageUrl.trim() : "";
  if (!url) return undefined;
  return {
    backgroundImage: `linear-gradient(rgba(5, 11, 24, 0.84), rgba(5, 11, 24, 0.94)), url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}
