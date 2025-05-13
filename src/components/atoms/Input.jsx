// Import Dependencies

export const Input = ({
  // Props
  disabled = false,
  id = "",
  max = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange = () => {},
  onKeyDown = () => {},
}) => {
  // State

  // Hooks

  // Methods

  // Event Handler

  // Return JSX
  return (
    <input
      type={type}
      id={id}
      className="bg-gray-50 border border-gray-300 text-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required=""
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      max={max}
      disabled={disabled}
    />
  );
};
