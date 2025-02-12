import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-lightBg text-black dark:bg-darkBg dark:text-white">
      <div
        className={`flex flex-col h-screen ${
          isOpen ? "w-64" : "w-15"
        } transition-all duration-300 px-2 py-1`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center h-12 px-4 rounded-lg hover:bg-hoverLightBg hover:text-white dark:hover:bg-hoverDarkBg"
        >
          <FontAwesomeIcon icon="bars" size="sm" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col flex-grow gap-2 mt-4">
          {[
            { name: "Beranda", icon: "home", page: "/" },
            { name: "Dashboard", icon: "chart-line", page: "/dashboard" },
            { name: "Profile", icon: "kit-medical", page: "/" },
            { name: "Daftar", icon: "square-plus", page: "/admission" },
            { name: "Pelayanan", icon: "heart-pulse", page: "/" },
            { name: "Pengaturan", icon: "gear", page: "/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.page}
              className="flex items-center h-12 px-4 rounded-lg hover:bg-hoverLightBg hover:text-white dark:hover:bg-hoverDarkBg"
            >
              <FontAwesomeIcon icon={item.icon} size="sm" />
              {isOpen && <span className="ml-2">{item.name}</span>}
            </a>
          ))}
        </nav>

        {/* Exit Button - Selalu di bawah */}
        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center h-12 px-4 rounded-lg hover:bg-bgButtonDanger hover:text-white"
          >
            <FontAwesomeIcon icon="door-open" size="sm" />
            {isOpen && <span className="ml-2">Exit</span>}
          </a>
        </div>
      </div>
    </div>
  );
}
