"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  FolderOpen,
  Layers,
  Loader2,
  Pencil,
} from "lucide-react";
import { getPages, getSections } from "@/lib/cms";
import { cmsConfig } from "@/lib/cmsConfig";
import { CMS_DATA } from "@/data";

type PageItem = {
  id: string;
  name: string;
  slug: string;
};

type SectionItem = {
  id: string;
  label: string;
  editable: boolean;
  fieldCount: number;
};

function formatLabel(id: string) {
  return id
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function buildPageList(firestorePages: Array<{ id: string; name?: string; slug?: string }>): PageItem[] {
  const map = new Map<string, PageItem>();

  for (const page of CMS_DATA) {
    map.set(page.pageId, { id: page.pageId, name: page.name, slug: page.slug });
  }

  for (const page of firestorePages) {
    const existing = map.get(page.id);
    map.set(page.id, {
      id: page.id,
      name: page.name || existing?.name || formatLabel(page.id),
      slug: page.slug || existing?.slug || "",
    });
  }

  for (const pageId of Object.keys(cmsConfig)) {
    if (!map.has(pageId)) {
      map.set(pageId, { id: pageId, name: formatLabel(pageId), slug: "" });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

async function loadSectionsForPage(pageId: string): Promise<SectionItem[]> {
  const configKeys = Object.keys(cmsConfig[pageId] || {});
  const firestoreSections = await getSections(pageId);
  const firestoreKeys = firestoreSections.map((s) => s.id);
  const allKeys = [...new Set([...configKeys, ...firestoreKeys])].sort();

  return allKeys.map((id) => {
    const fields = cmsConfig[pageId]?.[id];
    const fieldCount = Array.isArray(fields) ? fields.length : 0;
    return {
      id,
      label: formatLabel(id),
      editable: fieldCount > 0,
      fieldCount,
    };
  });
}

export default function ContentTree() {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPageId, setExpandedPageId] = useState<string | null>(null);
  const [sectionsByPage, setSectionsByPage] = useState<Record<string, SectionItem[]>>({});
  const [loadingSections, setLoadingSections] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      const data = await getPages();
      setPages(buildPageList(data));
      setLoading(false);
    }
    init();
  }, []);

  async function togglePage(pageId: string) {
    if (expandedPageId === pageId) {
      setExpandedPageId(null);
      return;
    }

    setExpandedPageId(pageId);

    if (sectionsByPage[pageId]) return;

    setLoadingSections(pageId);
    const sections = await loadSectionsForPage(pageId);
    setSectionsByPage((prev) => ({ ...prev, [pageId]: sections }));
    setLoadingSections(null);
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
        <Loader2 size={18} className="animate-spin" />
        Loading pages…
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-center text-zinc-400">
        No pages found. Use Sync CMS on the dashboard to seed content.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
      <div className="border-b border-zinc-800 px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <FolderOpen size={16} className="text-[#FF6B00]" />
          Pages &amp; Sections
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Click a page to expand its sections, then choose a section to edit.
        </p>
      </div>

      <ul className="divide-y divide-zinc-800">
        {pages.map((page) => {
          const isExpanded = expandedPageId === page.id;
          const sections = sectionsByPage[page.id] ?? [];
          const isLoadingSections = loadingSections === page.id;

          return (
            <li key={page.id}>
              <button
                type="button"
                onClick={() => togglePage(page.id)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-zinc-800/60"
              >
                <span className="text-zinc-500">
                  {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#FF6B00]/20 bg-[#FF6B00]/10 text-[#FF6B00]">
                  <FileText size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-white">{page.name}</span>
                  <span className="mt-0.5 block truncate text-xs text-zinc-500">
                    {page.slug || `/admin/content/${page.id}`}
                    {sections.length > 0 && ` · ${sections.length} section${sections.length === 1 ? "" : "s"}`}
                  </span>
                </span>
                <span className="hidden rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400 sm:inline">
                  {page.id}
                </span>
              </button>

              {isExpanded && (
                <div className="border-t border-zinc-800/80 bg-[#030810]/60 px-5 py-3">
                  {isLoadingSections ? (
                    <div className="flex items-center gap-2 py-4 pl-10 text-sm text-zinc-500">
                      <Loader2 size={14} className="animate-spin" />
                      Loading sections…
                    </div>
                  ) : sections.length === 0 ? (
                    <p className="py-4 pl-10 text-sm text-zinc-500">No sections found for this page.</p>
                  ) : (
                    <ul className="space-y-1 pl-10">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <Link
                            href={`/admin/content/${page.id}/${section.id}`}
                            className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-3 transition hover:border-zinc-700 hover:bg-zinc-800/80"
                          >
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-400 group-hover:border-[#FF6B00]/30 group-hover:text-[#FF6B00]">
                              <Layers size={14} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium text-zinc-200 group-hover:text-white">
                                {section.label}
                              </span>
                              <span className="mt-0.5 block text-xs text-zinc-500">
                                {section.editable
                                  ? `${section.fieldCount} editable field${section.fieldCount === 1 ? "" : "s"}`
                                  : "View only — no CMS fields configured"}
                              </span>
                            </span>
                            <span className="flex items-center gap-1 text-xs font-semibold text-[#FF6B00] opacity-0 transition group-hover:opacity-100">
                              <Pencil size={12} />
                              Edit
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-2 pl-10">
                    <Link
                      href={`/admin/content/${page.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 transition hover:text-zinc-300"
                    >
                      View all sections page
                      <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
