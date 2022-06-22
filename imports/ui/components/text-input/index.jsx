import React from "react";

export const TextInput = ({ label, type, name, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
