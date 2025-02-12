import { useState, useEffect } from "react";

export const Button = ({ children, type, className, onClick = () => {} }) => {
  const [myClass, setClass] = useState("");

  useEffect(() => {
    switch (type) {
      case "danger":
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white bg-bgButtonDanger",
        );
        break;
      case "primary":
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white",
        );
        break;
      default:
        setClass(
          "cursor-pointer py-2.5 px-5 text-sm font-medium rounded-lg text-white bg-bgButtonPrimary hover:bg-hoverBgButton",
        );
        break;
    }
  }, [type]);

  return (
    <button
      type="button"
      disabled
      className={`${myClass} ${className}`}
      onClick={onClick}
    >
      {children || "Submit"}
    </button>
  );
};
