"use client";

import ObjectField from "./ObjectField";
import { emptyLike } from "./utils";

// Renders an array of objects — each item is an editable nested card.
export default function RepeaterField({ value = [], onChange }) {
  function update(index, newItem) {
    const next = [...value];
    next[index] = newItem;
    onChange(next);
  }
  function add() {
    // New rows take the shape of the first existing item (or a blank object).
    onChange([...value, value.length ? emptyLike(value[0]) : {}]);
  }
  function remove(index) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      {value.map((item, index) => (
        <div key={index} className="space-y-3 rounded-lg border border-zinc-700 bg-zinc-900 p-4">
          <ObjectField value={item} onChange={(newItem) => update(index, newItem)} />
          <button
            type="button"
            onClick={() => remove(index)}
            className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        + Add Item
      </button>
    </div>
  );
}
