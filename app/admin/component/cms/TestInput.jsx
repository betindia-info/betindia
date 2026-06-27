export default function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}