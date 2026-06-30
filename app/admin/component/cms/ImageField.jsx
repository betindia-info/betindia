"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/storage";

export default function ImageField({
  label,
  value,
  onChange,
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const url = await uploadImage(file);
      if (!url) throw new Error("Upload returned no URL.");
      onChange(url);
    } catch (err) {
      // Surface the real reason (missing env, RLS policy, wrong bucket, …)
      console.error("Image upload failed:", err);
      setError(err?.message || "Upload failed. Check the console for details.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-300">
        {label}
      </label>

      {value && (
        <img
          src={value}
          alt={label}
          className="h-40 w-full rounded-lg object-cover border border-zinc-700"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="block w-full text-sm text-zinc-300"
      />

      {uploading && (
        <p className="text-sm text-blue-400">
          Uploading…
        </p>
      )}

      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300">
          {error}
        </p>
      )}

      {value && !uploading && !error && (
        <p className="truncate text-xs text-zinc-500" title={value}>
          Uploaded: {value}
        </p>
      )}
    </div>
  );
}
