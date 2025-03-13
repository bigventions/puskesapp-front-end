// Import Dependencies

import { useState, useEffect } from "react";

export const Button = ({
  // Props
  className,
  text,
  type,
  frontIcon,
  onClick = () => {},
}) => {
  // State
  const [myClass, setClass] = useState("");

  // Hooks
  useEffect(() => {
    switch (type) {
      case "danger":
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white bg-danger",
        );
        break;
      case "primary":
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white",
        );
        break;
      default:
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white bg-primary hover:bg-hoverBgButton",
        );
        break;
    }
  }, [type]);

  // Methods

  // Event Handler

  // Return JSX
  return (
    <button
      type="button"
      disabled
      className={`${myClass} ${className}`}
      onClick={onClick}
    >
      <span className="flex">
        {frontIcon && <span className="mr-2">{frontIcon}</span>}
        {text || "Submit"}
      </span>
    </button>
  );
};
