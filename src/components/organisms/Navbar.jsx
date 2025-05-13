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
    <div className="sticky top-0 z-40 flex items-center justify-between px-3 py-2 text-sm font-medium transition-all duration-300 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" width={100} />
      </div>

      {/* Menu User */}
      <div className="flex items-center space-x-2">
        <DarkModeSwitch />
        <div className="flex items-center justify-between space-x-2 border rounded-full">
          <button
            onClick={() => toggleFullScreen()}
            className="h-8 px-3 py-1 text-black bg-white rounded-full hover:bg-primary-brighter hover:text-white dark:hover:bg-dark dark:hover:text-white"
          >
            <FontAwesomeIcon icon={isFullScreen ? "compress" : "expand"} />
          </button>
          <button className="h-8 px-3 py-1 text-black bg-white rounded-full hover:bg-primary-brighter hover:text-white dark:hover:bg-dark dark:hover:text-white">
            <FontAwesomeIcon icon="bell" />
          </button>
          <button className="flex items-center h-8 px-3 py-1 text-black bg-white rounded-full hover:bg-primary-brighter hover:text-white dark:hover:bg-dark dark:hover:text-white">
            <span>Dokter Umum</span>
            <FontAwesomeIcon className="pl-2" icon="caret-down" />
          </button>
          <h1 className="text-slate-500">Dr.Eggy Atma Riansyah</h1>

          <div className="relative flex items-center">
            {/* Profile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={profil}
                alt="user photo"
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 w-48 mt-2 overflow-hidden rounded-lg shadow-lg bg-primary -bottom-16 dark:bg-dark">
                <nav className="py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-left text-white dark:text-white hover:bg-primary-brighter dark:hover:bg-dark"
                  >
                    Sign Out
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
