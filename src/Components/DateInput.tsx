import React from "react";
type TypeDataInput = React.ComponentProps<"input"> & {
  label: string;
};
export function DateInput({ label, ...props }: TypeDataInput) {
  return (
    <div>
      <label htmlFor={label} style={labelStyle}>
        {label}
      </label>
      <input
        id={label}
        name={label}
        type="date"
        style={inputStyle}
        {...props}
      />
    </div>
  );
}
const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};
const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};
