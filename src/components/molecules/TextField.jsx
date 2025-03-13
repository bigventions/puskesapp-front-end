// Import Dependencies

import { useId } from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { Text } from "../atoms/Text";

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
        <Label id={myId}>{label || "Label"}</Label>
        <Text className="text-sm text-gray-500 dark:text-gray-900">{label3}</Text>
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
        <Text className="mt-2 text-sm text-gray-500 dark:text-gray-900">{label2}</Text>
    </div>
  );
};
