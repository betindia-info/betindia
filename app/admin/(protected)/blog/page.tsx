"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Newspaper, Layers, Loader2, ChevronRight, Pencil } from "lucide-react";
import { getSections } from "@/lib/cms";
import { cmsConfig } from "@/lib/cmsConfig";

const PAGE_ID = "blog";

function formatLabel(id: string) {
  return id
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

type SectionItem = {
  id: string;
  label: string;
  fieldCount: number;
};

export default function BlogAdminPage() {
  const [sections, setSections] = useState<SectionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const config = (cmsConfig as Record<string, Record<string, unknown[]>>)[PAGE_ID] || {};
      const configKeys = Object.keys(config);
      const firestoreKeys = (await getSections(PAGE_ID)).map((s) => s.id);
      // Preserve the cmsConfig order, then append any extra Firestore-only sections.
      const orderedKeys = [
        ...configKeys,
        ...firestoreKeys.filter((k) => !configKeys.includes(k)),
      ];
      setSections(
        orderedKeys.map((id) => ({
          id,
          label: formatLabel(id),
          fieldCount: Array.isArray(config[id]) ? config[id].length : 0,
        }))
      );
      setLoading(false);
    }
    init();
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <p className="mt-2 text-zinc-400">
          Manage the sections of the blog page — hero, featured posts, categories, newsletter and SEO.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="border-b border-zinc-800 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <Newspaper size={16} className="text-[#FF6B00]" />
            Blog Page Sections
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            Choose a section to edit. Changes appear on the public blog page immediately.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center gap-3 px-6 py-10 text-zinc-400">
            <Loader2 size={18} className="animate-spin" />
            Loading sections…
          </div>
        ) : (
          <ul className="divide-y divide-zinc-800">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/admin/blog/${section.id}`}
                  className="group flex items-center gap-3 px-5 py-4 transition hover:bg-zinc-800/60"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 group-hover:border-[#FF6B00]/30 group-hover:text-[#FF6B00]">
                    <Layers size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">{section.label}</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">
                      {section.fieldCount > 0
                        ? `${section.fieldCount} editable field${section.fieldCount === 1 ? "" : "s"}`
                        : "No CMS fields configured"}
                    </span>
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#FF6B00]">
                    <Pencil size={12} />
                    Edit
                    <ChevronRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
