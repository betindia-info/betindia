export default function TextArea({
  label,
  value,
  onChange,
  rows = 5,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}