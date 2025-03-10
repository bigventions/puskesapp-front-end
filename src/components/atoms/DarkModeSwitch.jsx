// Import Dependencies

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  // State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light",
  );

  // Hooks
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  // Methods

  // Event Handler

  // Return JSX
  return (
    <div className="flex items-center space-x-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition-all duration-300">
          <div
            className={`absolute top-[2px] left-[2px] flex items-center justify-center h-5 w-5 rounded-full bg-white transition-all duration-300
              ${darkMode ? "translate-x-full text-yellow-500" : "text-yellow-500"}
            `}
          >
            {darkMode ? <Moon size={14} /> : <Sun size={14} />}
          </div>
        </div>
      </label>
    </div>
  );
};
