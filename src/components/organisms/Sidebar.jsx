import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-[#1d3557] h-screen flex flex-col ${
          isOpen ? "w-64" : "w-15"
        } transition-all duration-300 px-2 py-1`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-white h-12 px-4 hover:bg-[#2a4d7a]"
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
              className="flex items-center text-white h-12 px-4 rounded-lg hover:bg-[#2a4d7a]"
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
            className="flex items-center text-white h-12 px-4 hover:bg-[#a63946]"
          >
            <FontAwesomeIcon icon="door-open" size="sm" />
            {isOpen && <span className="ml-2">Exit</span>}
          </a>
        </div>
      </div>
    </div>
  );
}
