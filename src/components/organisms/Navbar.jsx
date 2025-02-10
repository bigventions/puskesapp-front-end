import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@/assets/images/puskesapp-black.png";
import profil from "@/assets/images/user.jpeg";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-white text-xs py-2 px-3 z-40 shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" width={100} />
      </div>

      {/* Menu User */}
      <div className="flex items-center space-x-2">
        <button className="bg-[#1d3557] text-white h-8 rounded-lg px-3 py-1 hover:bg-[#2a4d7a] hover:border-gray-800">
          <FontAwesomeIcon icon="expand" />
        </button>
        <button className="bg-[#1d3557] text-white h-8 rounded-lg px-3 py-1 hover:bg-[#2a4d7a] hover:border-gray-800">
          <FontAwesomeIcon icon="bell" />
        </button>
        <button className="bg-[#1d3557] text-white h-8 rounded-lg px-3 py-1 hover:bg-[#2a4d7a] hover:border-gray-800 flex items-center">
          <span>Dokter Umum</span>
          <FontAwesomeIcon className="pl-2" icon="caret-down" />
        </button>

        {/* Profil Button */}
        <button className="text-sm text-white">
          <img className="w-8 h-8 rounded-lg" src={profil} alt="user photo" />
        </button>
      </div>
    </div>
  );
}
