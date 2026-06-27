"use client";

export default function RepeaterField({
  field,
  value = [],
  onChange,
}) {
  function updateItem(index, key, newValue) {
    const updated = [...value];
    updated[index] = {
      ...updated[index],
      [key]: newValue,
    };

    onChange(updated);
  }

  function addItem() {
    const newItem = {};

    field.fields.forEach((f) => {
      newItem[f.name] = "";
    });

    onChange([...value, newItem]);
  }

  function removeItem(index) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">
        {field.label}
      </h3>

      {value.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-4"
        >
          {field.fields.map((subField) => (
            <div key={subField.name}>
              <label className="mb-2 block text-sm text-zinc-300">
                {subField.label}
              </label>

              {subField.type === "text" ? (
                <input
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                  value={item[subField.name] || ""}
                  onChange={(e) =>
                    updateItem(
                      index,
                      subField.name,
                      e.target.value
                    )
                  }
                />
              ) : (
                <textarea
                  rows={4}
                  className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white"
                  value={item[subField.name] || ""}
                  onChange={(e) =>
                    updateItem(
                      index,
                      subField.name,
                      e.target.value
                    )
                  }
                />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => removeItem(index)}
            className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        + Add Item
      </button>
    </div>
  );
}