"use client";

export default function TextareaField({ label, value, onChange }) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-300">{label}</label>
      )}
      <textarea
        rows={5}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
