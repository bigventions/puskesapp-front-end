// Import Dependencies

import { Link } from "react-router-dom";
import {
  Home,
  LineChart,
  User,
  PlusSquare,
  HeartPulse,
  Settings,
} from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
  // State
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = [
    { name: "Beranda", icon: <Home size={14} />, page: "/" },
    { name: "Dashboard", icon: <LineChart size={14} />, page: "/dashboard" },
    { name: "Profile", icon: <User size={14} />, page: "/" },
    { name: "Pendaftaran", icon: <PlusSquare size={14} />, page: "/admission" },
    { name: "Pelayanan", icon: <HeartPulse size={14} />, page: "/" },
    { name: "Pengaturan", icon: <Settings size={14} />, page: "/" },
  ];

  // Hooks

  // Methods
  const handleHover = (index) => {
    setActiveIndex(index);
  };
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Event Hanlder

  // Return JSX
  return (
    <div>
      <nav className="flex flex-col h-full rounded-lg bg-lightBg text-black mx-2 dark:bg-darkBg dark:text-white items-center flex-grow gap-2 p-2 w-14">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center relative"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Link with only icon visible initially */}
            <Link
              to={item.page}
              className="flex items-center h-12 px-4 rounded-lg hover:bg-hoverLightBg hover:text-black dark:hover:bg-darkBg"
            >
              <span>{item.icon}</span>

              {/* Title appears next to icon only if it's the active item */}
              <span
                className={`ml-4 text-sm bg-hoverLightBg text-white dark:bg-darkBg dark:text-white dark:hover:bg-darkBg rounded-lg w-[150px] absolute px-2 py-2 left-full z-40 duration-300 opacity-0 ${activeIndex === index ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"}`}
              >
                {item.name}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
