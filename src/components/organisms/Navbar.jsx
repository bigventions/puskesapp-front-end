import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@/assets/images/puskesapp-black.png";
import profil from "@/assets/images/user.jpeg";
import { DarkModeSwitch } from "../atoms/DarkModeSwitch";

export default function Navbar() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };
  return (
    <div className="flex justify-between items-center py-2 px-3 sticky top-0 bg-white text-sm font-medium z-40 shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" width={100} />
      </div>

      {/* Menu User */}
      <div className="flex items-center space-x-2 ">
        <DarkModeSwitch />
        <button
          onClick={() => toggleFullScreen()}
          className="px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-hoverDarkBg"
        >
          <FontAwesomeIcon icon={isFullScreen ? "compress" : "expand"} />
        </button>
        <button className="px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-hoverDarkBg">
          <FontAwesomeIcon icon="bell" />
        </button>
        <button className="flex items-center px-3 py-1 h-8 rounded-lg bg-lightBg text-black hover:bg-hoverLightBg hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-hoverDarkBg">
          <span>Dokter Umum</span>
          <FontAwesomeIcon className="pl-2" icon="caret-down" />
        </button>

        {/* Profil Button */}
        <button className="text-white">
          <img className="w-8 h-8 rounded-lg" src={profil} alt="user photo" />
        </button>
      </div>
    </div>
  );
}
