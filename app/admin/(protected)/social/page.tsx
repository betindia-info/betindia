"use client";

import { useEffect, useState } from "react";
import { Share2, Loader2, Save, Plus, Trash2 } from "lucide-react";
import { getSection, saveSection } from "@/lib/cms";
import { DEFAULT_SOCIALS, SOCIAL_ICON_OPTIONS, type SocialLink } from "@/lib/social-links";
import { revalidateSocial } from "./actions";

export default function SocialLinksPage() {
  const [items, setItems] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getSection("settings", "social");
      const saved = Array.isArray(data?.items) ? (data.items as SocialLink[]) : null;
      setItems(saved && saved.length > 0 ? saved : DEFAULT_SOCIALS);
      setLoading(false);
    }
    load();
  }, []);

  function update(index: number, key: keyof SocialLink, value: string) {
    setItems((prev) => prev.map((it, i) => (i === index ? { ...it, [key]: value } : it)));
  }

  function addItem() {
    setItems((prev) => [...prev, { label: "", href: "", icon: "globe" }]);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSave() {
    setSaving(true);
    const cleaned = items
      .map((it) => ({ label: it.label.trim(), href: it.href.trim(), icon: it.icon }))
      .filter((it) => it.label || it.href);
    const success = await saveSection("settings", "social", { items: cleaned });
    if (success) {
      try {
        await revalidateSocial();
      } catch {
        // Non-fatal.
      }
    }
    setSaving(false);
    alert(success ? "Social links saved!" : "Failed to save social links.");
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-10 text-zinc-400">
        <Loader2 size={18} className="animate-spin" />
        Loading social links…
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 text-white">
      <div>
        <h1 className="text-3xl font-bold">Social Links</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Manage the social media links shown in the website footer. Changes apply across the whole site.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:grid-cols-[1fr_1.5fr_auto_auto] sm:items-end"
          >
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-400">Label</label>
              <input
                type="text"
                value={item.label}
                onChange={(e) => update(index, "label", e.target.value)}
                placeholder="Instagram"
                className="w-full rounded-lg border border-zinc-800 bg-[#030810] px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-[#FF6B00] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-400">Link (URL)</label>
              <input
                type="url"
                value={item.href}
                onChange={(e) => update(index, "href", e.target.value)}
                placeholder="https://instagram.com/betindia"
                className="w-full rounded-lg border border-zinc-800 bg-[#030810] px-3 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-[#FF6B00] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-zinc-400">Icon</label>
              <select
                value={item.icon}
                onChange={(e) => update(index, "icon", e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-[#030810] px-3 py-2.5 text-sm text-white focus:border-[#FF6B00] focus:outline-none"
              >
                {SOCIAL_ICON_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => removeItem(index)}
              aria-label="Remove link"
              className="grid h-10 w-10 place-items-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 transition hover:bg-red-500/20"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-[#FF6B00]/40 hover:text-white"
        >
          <Plus size={16} />
          Add Social Link
        </button>
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#FF8A00] disabled:opacity-60"
      >
        {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
        {saving ? "Saving…" : "Save Social Links"}
      </button>
    </div>
  );
}
