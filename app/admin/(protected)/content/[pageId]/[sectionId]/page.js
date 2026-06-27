"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getSection, saveSection } from "@/lib/cms";
import { cmsConfig } from "@/lib/cmsConfig";
import RepeaterField from "../../../../component/cms/Repeaterfield";

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

  const fields = cmsConfig?.[pageId]?.[sectionId] || [];

  useEffect(() => {
    if (!pageId || !sectionId) return;
    loadData();
  }, [pageId, sectionId]);

  async function loadData() {
    const data = await getSection(pageId, sectionId);
    setForm(data || {});
    setLoading(false);
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

      {fields.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
          No editable fields are configured for this section in <code className="text-zinc-300">cmsConfig</code>.
        </div>
      ) : (
        <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-medium text-gray-300">{field.label}</label>

              {field.type === "text" && (
                <input
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
                  value={form[field.name] || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [field.name]: e.target.value,
                    })
                  }
                />
              )}

              {field.type === "repeater" && (
                <RepeaterField
                  field={field}
                  value={form[field.name] || []}
                  onChange={(newValue) =>
                    setForm({
                      ...form,
                      [field.name]: newValue,
                    })
                  }
                />
              )}

              {field.type === "textarea" && (
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
                  value={form[field.name] || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [field.name]: e.target.value,
                    })
                  }
                />
              )}
            </div>
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