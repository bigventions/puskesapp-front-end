import { useState, useEffect, useId } from "react";
import logoFull from '../assets/images/puskesapp-white.png'
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login () {
  const [isHide, setIsOpen] = useState(false);

  const hidePassword = () => {
    setIsOpen(!isHide);
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1d3557] rounded-lg w-full max-w-6xl h-auto md:h-[80%] overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center p-6 md:p-10">
          <div className="self-start py-5">
            <img src={logoFull} alt="logo" className="w-42 md:w-40" />
          </div>
          <div className="w-full max-w-md">
            <iframe src="https://lottie.host/embed/ece81bb5-1e66-4b36-928f-9bf8e309156d/JFqiHfzFgm.lottie" className="w-full h-48 md:h-64" title="Animation"></iframe>
          </div>
          <p className="text-justify pt-5 text-white text-sm md:text-base">"Halaman login Puskesmas memungkinkan petugas dan staf untuk mengakses sistem manajemen data kesehatan dengan aman menggunakan username dan password. Desain responsif memastikan akses yang mudah di berbagai perangkat, sementara sistem keamanan yang terjamin menjaga data tetap aman. Setelah login, pengguna dapat mengelola data pasien, inventaris, dan layanan kesehatan dengan efisien."</p>
        </div>
        <div className="flex justify-center items-center bg-white drop-shadow-lg rounded-lg w-full md:w-auto m-4 md:m-6 p-6 md:p-10">
          <div className="flex flex-col items-center w-full max-w-sm">
            <div className="py-5">
              <img src={logo} alt="logo" className="w-32 md:w-40" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mb-4">Masuk ke Akun Anda</h1>
            <div className="relative w-full mb-4">
              <FontAwesomeIcon icon="envelope" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="text" placeholder="Username" className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"/>
            </div>
            <div className="relative w-full mb-4">
              <FontAwesomeIcon icon="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="password" placeholder="Password" className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none" />
              <button onClick={hidePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" >
                <FontAwesomeIcon icon="eye-slash" />
              </button>
            </div>
            <button onClick={hidePassword} className="bg-[#1d3557] text-white rounded-lg w-full px-4 py-2 my-3 hover:bg-[#2a4d7a] transition-colors">Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}