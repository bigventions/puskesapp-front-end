import { useState, useEffect, useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`bg-[#1d3557] h-full px-2 py-1 ${isOpen ? "w-64" : "w-15"} transition-all duration-300`}>
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="bg-[#1d3557] flex items-center text-white h-12 px-4 rounded-lg hover:bg-[#2a4d7a] hover:border-gray-800">
          <FontAwesomeIcon icon="bars" size="md" />
        </button>

        {/* Navigation Links */}
        <nav className="mt-8">
          {[
            { name: "Beranda", icon: "home", link: "#" },
            { name: "Dashboard", icon: "chart-line", link: "#" },
            { name: "Profile", icon: "kit-medical", link: "#" },
            { name: "Daftar", icon: "square-plus", link: "#" },
            { name: "Pelayanan", icon: "heart-pulse", link: "#" },
            { name: "Pengaturan", icon: "gear", link: "#" },
          ].map((item, index) => (
            <a key={index} href={item.link} className="bg-[#1d3557] flex items-center text-white h-12 px-4 space-x-2 rounded-lg hover:bg-[#2a4d7a] hover:border-gray-800 transition">
              <FontAwesomeIcon icon={item.icon} size="md" />
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Exit */}
        <a href="#" className="bg-[#1d3557] flex items-center text-white h-12 px-4 space-x-2 mt-[270px] rounded-lg hover:bg-[#a63946] transition">
          <FontAwesomeIcon icon="door-open" size="md" />
          <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Exit</span>
        </a>
      </div>
    </div>
  );
};