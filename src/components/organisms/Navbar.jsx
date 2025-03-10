// Import Dependencies

import { useState } from "react";
import { DarkModeSwitch } from "../atoms/DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "@/stores/action/AuthActions.js";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/puskesapp-black.png";
import profil from "@/assets/images/user.jpeg";

export const Navbar = () => {
  // State
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Methods
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  // Event Hanlder

  // Return JSX
  return (
    <div className="flex justify-between items-center py-2 px-3 sticky top-0 bg-white text-sm font-medium z-40 shadow-md transition-all duration-300">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" width={100} />
      </div>

      {/* Menu User */}
      <div className="flex items-center space-x-2">
        <DarkModeSwitch />
        <button
          onClick={() => toggleFullScreen()}
          className="px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:text-black"
        >
          <FontAwesomeIcon icon={isFullScreen ? "compress" : "expand"} />
        </button>
        <button className="px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:text-black">
          <FontAwesomeIcon icon="bell" />
        </button>
        <button className="flex items-center px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:text-black">
          <span>Dokter Umum</span>
          <FontAwesomeIcon className="pl-2" icon="caret-down" />
        </button>

        <div className="relative">
          {/* Profile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <img className="w-8 h-8 rounded-lg" src={profil} alt="user photo" />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <nav className="py-2">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sign Out
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
