"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Loader2, Save } from "lucide-react";
import { getSection, saveSection } from "@/lib/cms";
import { CMS_DATA } from "@/data";
import { revalidateSeo } from "../../seo/actions";
import ImageField from "../../../component/cms/ImageField";

function formatLabel(id: string) {
  return id
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

export default function PageImageEditor() {
  const { pageId } = useParams();
  const router = useRouter();

  const [heroData, setHeroData] = useState<Record<string, any>>({});
  const [pageName, setPageName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!pageId) return;

    async function loadData() {
      // Find the page in CMS_DATA to get defaults
      const defaultPage = CMS_DATA.find((p) => p.pageId === pageId);
      const defaultHero = defaultPage?.sections?.hero || {};
      setPageName(defaultPage?.name || formatLabel(String(pageId)));

      // Load Firestore hero section data
      const firestoreHero = await getSection(String(pageId), "hero");

      // Merge: fallback to defaults if not in firestore
      setHeroData({
        ...defaultHero,
        ...firestoreHero,
      });
      
      setLoading(false);
    }

    loadData();
  }, [pageId]);

  function handleImageChange(url: string) {
    setHeroData((prev) => ({
      ...prev,
      imageUrl: url,
    }));
  }

  function handleAltChange(alt: string) {
    setHeroData((prev) => ({
      ...prev,
      imageAlt: alt,
    }));
  }

  async function handleSave() {
    setSaving(true);
    const success = await saveSection(String(pageId), "hero", heroData);
    if (success) {
      // Refresh the live page so the new image appears immediately
      // instead of waiting for the ISR revalidate window.
      try {
        await revalidateSeo(String(pageId));
      } catch {
        // Non-fatal: the page will still refresh on its next revalidate.
      }
    }
    setSaving(false);

    if (success) {
      alert("Page Image Saved!");
      router.push("/admin/images");
    } else {
      alert("Failed to save Page Image.");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
        <Loader2 size={18} className="animate-spin" />
        Loading Page Image Data…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 text-white">
      <Link
        href="/admin/images"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition hover:text-white"
      >
        <ChevronLeft size={16} />
        Back to Page Images
      </Link>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">
          Page Images
        </p>
        <h1 className="mt-1 text-3xl font-bold">{pageName}</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Upload and configure the hero image and alt text for this page.
        </p>
      </div>

      <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        {/* Render Image upload component */}
        <ImageField
          label="Page Hero Image"
          value={heroData.imageUrl || ""}
          onChange={handleImageChange}
        />

        {/* Image Alt Text */}
        <div className="space-y-2">
          <label htmlFor="imageAlt" className="block text-sm font-semibold text-zinc-300">
            Image Alt Text
          </label>
          <input
            id="imageAlt"
            type="text"
            value={heroData.imageAlt || ""}
            onChange={(e) => handleAltChange(e.target.value)}
            placeholder="e.g. BetIndia sports betting platform on mobile and desktop"
            className="w-full rounded-lg border border-zinc-800 bg-[#030810] px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-[#FF6B00] focus:outline-none"
          />
          <p className="text-xs text-zinc-500">
            Describe the image for screen readers and search engines.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#FF8A00] disabled:opacity-60 cursor-pointer"
        >
          <Save size={16} />
          {saving ? "Saving Changes…" : "Save Page Image"}
        </button>
      </div>
    </div>
  );
}
