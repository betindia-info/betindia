"use client";

import DynamicField from "./DynamicField";
import { humanize } from "./utils";

// Renders an object as a nested card — one DynamicField per key, recursively.
export default function ObjectField({ value = {}, onChange }) {
  function update(key, newValue) {
    onChange({ ...value, [key]: newValue });
  }

  return (
    <div className="space-y-4 rounded-lg border border-zinc-700 bg-zinc-900/40 p-4">
      {Object.entries(value).map(([key, fieldValue]) => (
        <DynamicField
          key={key}
          label={humanize(key)}
          value={fieldValue}
          onChange={(newValue) => update(key, newValue)}
        />
      ))}
    </div>
  );
}
