"use client";

import TextField from "./TextField";
import TextareaField from "./TextareaField";
import NumberField from "./NumberField";
import BooleanField from "./BooleanField";
import ListField from "./ListField";
import ObjectField from "./ObjectField";
import RepeaterField from "./RepeaterField";
import { detectType } from "./utils";

/**
 * The recursive dispatcher: picks a field component from the value's type.
 * Works for any JSON structure — no field names are hardcoded.
 */
export default function DynamicField({ label, value, onChange }) {
  const type = detectType(value);

  // ── Leaf fields (render their own label) ───────────────────────────────────
  if (type === "text" || type === "null")
    return <TextField label={label} value={value ?? ""} onChange={onChange} />;
  if (type === "textarea")
    return <TextareaField label={label} value={value} onChange={onChange} />;
  if (type === "number")
    return <NumberField label={label} value={value} onChange={onChange} />;
  if (type === "boolean")
    return <BooleanField label={label} value={value} onChange={onChange} />;
  if (type === "list")
    return <ListField label={label} value={value} onChange={onChange} />;

  // ── Composite fields (label header + nested editor) ────────────────────────
  if (type === "object")
    return (
      <div className="space-y-2">
        {label && <p className="text-sm font-semibold text-white">{label}</p>}
        <ObjectField value={value} onChange={onChange} />
      </div>
    );
  if (type === "repeater")
    return (
      <div className="space-y-2">
        {label && <p className="text-sm font-semibold text-white">{label}</p>}
        <RepeaterField value={value} onChange={onChange} />
      </div>
    );

  return <TextField label={label} value={value ?? ""} onChange={onChange} />;
}
