// Import Dependencies

import { useId } from "react";
import Input from "../atoms/Input";

export const TextField = ({
  // Props
  disabled,
  id,
  label,
  label2 = "",
  label3 = "",
  max = "",
  placeholder,
  type,
  value,
  onChange = () => {},
}) => {
  // State
  const generatedId = useId();
  const myId = id || generatedId;
  const handleChange = (e) => {
    let nv = e.target.value;
    onChange(nv);
  };

  // Hooks

  // Methods

  // Event Hanlder

  // Return JSX
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <label
          htmlFor={myId}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label || "Label"}
        </label>
        <p className="text-sm text-gray-500 dark:text-gray-900">{label3}</p>
      </div>
      <Input
        type={type}
        id={myId}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        max={max}
      />
      <p className="mt-2 text-sm text-gray-500">{label2}</p>
    </div>
  );
};
