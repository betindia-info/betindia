"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getSection, saveSection } from "@/lib/cms";
import { blogContent } from "@/data/blog";
import DynamicField from "../../../component/cms/dynamic/DynamicField";
import { humanize } from "../../../component/cms/dynamic/utils";

const PAGE_ID = "blog";

function formatLabel(id: string) {
  return id
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

export default function BlogSectionEditor() {
  const { sectionId } = useParams<{ sectionId: string }>();

  const [form, setForm] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!sectionId) return;
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionId]);

  async function loadData() {
    const data = await getSection(PAGE_ID, sectionId);
    // Fall back to code defaults so the section is editable even before the
    // first CMS sync writes the Firestore document.
    const defaults = (blogContent as Record<string, Record<string, unknown>>)[sectionId];
    setForm(data || defaults || {});
    setLoading(false);
  }

  function updateKey(key: string, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    await saveSection(PAGE_ID, sectionId, form);
    setSaving(false);
    alert("Saved!");
  }

  if (loading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  const keys = Object.keys(form);

  return (
    <div className="mx-auto max-w-3xl space-y-6 text-white">
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition hover:text-white"
      >
        <ChevronLeft size={16} />
        Back to Blog
      </Link>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">Blog</p>
        <h1 className="mt-1 text-3xl font-bold">{formatLabel(String(sectionId))}</h1>
        <p className="mt-2 text-sm text-zinc-400">Edit section fields and save changes.</p>
      </div>

      {keys.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
          This section has no data to edit yet.
        </div>
      ) : (
        <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {keys.map((key) => (
            <DynamicField
              key={key}
              label={humanize(key)}
              value={form[key]}
              onChange={(value: unknown) => updateKey(key, value)}
            />
          ))}

          <button
            type="button"
            className="cursor-pointer rounded-lg border-2 bg-blue-600 px-4 py-2 text-white disabled:opacity-60"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
}
