"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/storage";

export default function ImageField({
  label,
  value,
  onChange,
}) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadImage(file);
      onChange(url);
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
        className="block w-full text-sm text-zinc-300"
      />

      {uploading && (
        <p className="text-sm text-blue-400">
          Uploading...
        </p>
      )}
    </div>
  );
}