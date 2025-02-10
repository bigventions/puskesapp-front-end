import { useId } from "react";
import { Input } from "../atoms/Input";

export const TextField = ({
  id,
  label,
  label2 = "",
  label3 = "",
  type,
  placeholder,
  disabled,
  value,
  onChange = () => {},
  max = "",
}) => {
  const generatedId = useId();
  const myId = id || generatedId;
  const handleChange = (e) => {
    let nv = e.target.value;
    onChange(nv);
  };
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
