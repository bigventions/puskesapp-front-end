import { useState } from "react";
import { Home, User, Settings, Menu } from "lucide-react";

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 pt-8 ${isOpen ? "w-64" : "w-20"} transition-all duration-300`}>
        {/* Toggle Button */}
        <div className="flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          {[
            { name: "Home", icon: <Home size={24} />, link: "#" },
            { name: "Profile", icon: <User size={24} />, link: "#" },
            { name: "Settings", icon: <Settings size={24} />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg transition"
            >
              {item.icon}
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};