"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Image, Loader2, ChevronRight, FileImage } from "lucide-react";
import { getPages } from "@/lib/cms";
import { CMS_DATA } from "@/data";

type PageItem = {
  id: string;
  name: string;
  slug: string;
  defaultImage?: string;
};

export default function ImagesPageList() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const data = await getPages();
      
      const pageList = data.map((p) => {
        // Find default hero image from CMS_DATA
        const defaultPageData = CMS_DATA.find((item) => item.pageId === p.id);
        const defaultImage = defaultPageData?.sections?.hero?.imageUrl || "";

        return {
          id: p.id,
          name: p.name || p.id,
          slug: p.slug || "",
          defaultImage,
        };
      }).sort((a, b) => a.name.localeCompare(b.name));

      setPages(pageList);
      setLoading(false);
    }
    init();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
        <Loader2 size={18} className="animate-spin" />
        Loading pages…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Page Images</h1>
        <p className="mt-2 text-zinc-400">
          Manage the primary hero images and alt texts across the different pages of the website.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="border-b border-zinc-800 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <Image size={16} className="text-[#FF6B00]" />
            Website Pages primary images
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            Select a page below to update its hero image or upload a custom image.
          </p>
        </div>

        <ul className="divide-y divide-zinc-800">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={`/admin/images/${page.id}`}
                className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-zinc-800/60"
              >
                {page.defaultImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={page.defaultImage}
                    alt={page.name}
                    className="h-12 w-20 shrink-0 rounded-lg object-cover border border-zinc-800 group-hover:border-[#FF6B00]/40 transition"
                  />
                ) : (
                  <span className="grid h-12 w-20 shrink-0 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-600 group-hover:border-[#FF6B00]/40 transition">
                    <FileImage size={20} />
                  </span>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="block text-base font-semibold text-white group-hover:text-[#FF6B00] transition">
                      {page.name}
                    </span>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-500 uppercase font-mono">
                      {page.id}
                    </span>
                  </div>
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">
                    {page.slug || `/${page.id}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 transition group-hover:translate-x-1">
                    <ChevronRight size={18} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
