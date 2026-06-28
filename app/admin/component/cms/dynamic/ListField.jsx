"use client";

// Editable list for an array of primitives (strings / numbers).
export default function ListField({ label, value = [], onChange }) {
  function update(index, newValue) {
    const next = [...value];
    next[index] = newValue;
    onChange(next);
  }
  function add() {
    onChange([...value, ""]);
  }
  function remove(index) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-3">
      {label && <h3 className="text-sm font-semibold text-white">{label}</h3>}

      {value.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white"
            value={item ?? ""}
            onChange={(e) => update(index, e.target.value)}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded bg-red-600 px-3 text-white hover:bg-red-700"
          >
            ×
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="rounded bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
      >
        + Add
      </button>
    </div>
  );
}
