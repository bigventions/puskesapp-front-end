import { useState, useEffect, useId } from "react";
import logo from '../assets/images/puskesapp.png';
import profil from '../assets/images/user.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar () {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-[#c0c0c0] text-xs py-2 px-3 z-40">
      <div><img src={logo} alt="logo" width={70}></img></div>
      <div>
        <div className="flex">
          <button className="bg-[#182e34] border-gray-500 text-white h-8 rounded-full px-3 py-1 mx-1 hover:border-gray-800 hover:text-black">
            <FontAwesomeIcon icon="expand" />
          </button>
          <button className="bg-[#182e34] border-gray-500 text-white h-8 rounded-full px-3 py-1 mx-1 hover:border-gray-800 hover:text-black">
            <FontAwesomeIcon icon="bell" />
          </button>
          <button className="bg-[#182e34] border-gray-500 text-white h-8 rounded-full px-3 py-1 mx-1 hover:border-gray-800 hover:text-black">
            Dokter Umum<FontAwesomeIcon className="pl-3" icon="caret-down" />
          </button>
          <button className="text-sm px-3 font-medium text-white rounded-full md:me-0 dark:text-white" type="button">
            <img className="w-8 h-8 rounded-full" src={profil} alt="user photo" />
          </button>
        </div>
      </div>
    </div>
  )
}