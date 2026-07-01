"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getSection, saveSection } from "@/lib/cms";
import { CMS_DATA } from "@/data";
import DynamicField from "../../../../component/cms/dynamic/DynamicField";
import { humanize } from "../../../../component/cms/dynamic/utils";

/**
 * Merge code defaults into the saved Firestore data so newly-added fields
 * (e.g. a card `image`) show up in the editor without a destructive re-sync.
 * Saved values always win; defaults only fill in missing keys — including keys
 * inside repeater/card items (arrays of objects use the first default item as
 * the shape template).
 */
function mergeDefaults(def, val) {
  if (Array.isArray(def)) {
    if (!Array.isArray(val)) return val ?? def;
    const template = def[0];
    return val.map((item) =>
      template && typeof template === "object" && item && typeof item === "object"
        ? mergeDefaults(template, item)
        : item
    );
  }
  if (def && typeof def === "object") {
    if (!val || typeof val !== "object") return val ?? def;
    const out = { ...def, ...val };
    for (const key of Object.keys(def)) {
      if (def[key] && typeof def[key] === "object") {
        out[key] = mergeDefaults(def[key], val[key]);
      }
    }
    return out;
  }
  return val === undefined ? def : val;
}

function formatLabel(id) {
  return id
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

export default function SectionEditor() {
  const { pageId, sectionId } = useParams();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!pageId || !sectionId) return;
    loadData();
  }, [pageId, sectionId]);

  async function loadData() {
    const data = await getSection(pageId, sectionId);
    const defaults =
      CMS_DATA.find((p) => p.pageId === pageId)?.sections?.[sectionId] ?? {};
    // Fill in any fields missing from the saved doc (e.g. new card images)
    // from code defaults, without overwriting saved content.
    setForm(mergeDefaults(defaults, data ?? {}));
    setLoading(false);
  }

  // Update one top-level key; DynamicField handles any nesting beneath it.
  function updateKey(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    await saveSection(pageId, sectionId, form);
    setSaving(false);
    alert("Saved!");
  }

  if (loading) {
    return <div className="p-10 text-white">Loading...</div>;
  }

  // Hide retired fields from the editor (e.g. the old hero "eyebrow").
  const HIDDEN_KEYS = ["eyebrow"];
  const keys = Object.keys(form).filter((k) => !HIDDEN_KEYS.includes(k));

  return (
    <div className="mx-auto max-w-3xl space-y-6 text-white">
      <Link
        href="/admin/content"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition hover:text-white"
      >
        <ChevronLeft size={16} />
        Back to Content
      </Link>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">
          {formatLabel(String(pageId))}
        </p>
        <h1 className="mt-1 text-3xl font-bold">{formatLabel(String(sectionId))}</h1>
        <p className="mt-2 text-sm text-zinc-400">Edit section fields and save changes.</p>
      </div>

      {keys.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
          This section has no data to edit yet.
        </div>
      ) : (
        <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {/* Fields are generated automatically from the section data — any
              JSON shape becomes an editable form, no config needed. */}
          {keys.map((key) => (
            <DynamicField
              key={key}
              label={humanize(key)}
              value={form[key]}
              onChange={(value) => updateKey(key, value)}
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
