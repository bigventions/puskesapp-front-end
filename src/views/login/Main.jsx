// Import Dependencies

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login } from "../../stores/action/AuthActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoFull from "../../assets/images/puskesapp-white.png";

export default function Main() {
  // Props
  // State
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isHide, setIsOpen] = useState(false);

  // Hooks
  const dispatch = useDispatch();
  const hidePassword = () => {
    setIsOpen(!isHide);
  };

  // Methods
  const handleLogin = () => {
    try {
      if (form.username === "" || form.password === "") {
      } else {
        dispatch(login(form))
          .then((result) => {
            localStorage.setItem("accessToken", result.data.accessToken);
            localStorage.setItem("refreshToken", result.data.refreshToken);
          })
          .catch((error) => {
            console.error("Login gagal:", error);
          });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  // Event Handler
  const handleChangeForm = async (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // Return JSX
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1d3557] rounded-lg w-full max-w-6xl h-auto md:h-[80%] overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center p-6 md:p-10">
          <div className="self-start py-5">
            <img src={logoFull} alt="logo" className="w-42 md:w-40" />
          </div>
          <div className="w-full max-w-md">
            <iframe
              src="https://lottie.host/embed/ece81bb5-1e66-4b36-928f-9bf8e309156d/JFqiHfzFgm.lottie"
              className="w-full h-48 md:h-64"
              title="Animation"
            />
          </div>
          <p className="text-justify pt-5 text-white text-sm md:text-base">
            "Halaman login Puskesmas memungkinkan petugas dan staf untuk
            mengakses sistem manajemen data kesehatan dengan aman menggunakan
            username dan password. Desain responsif memastikan akses yang mudah
            di berbagai perangkat, sementara sistem keamanan yang terjamin
            menjaga data tetap aman. Setelah login, pengguna dapat mengelola
            data pasien, inventaris, dan layanan kesehatan dengan efisien."
          </p>
        </div>
        <div className="flex justify-center items-center bg-white drop-shadow-lg rounded-lg md:w-auto m-4 md:m-6 p-6 md:p-10">
          <div className="flex flex-col items-center w-full max-w-sm">
            <div className="py-5">
              <img src={logo} alt="logo" className="w-32 md:w-40" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mb-4">
              Masuk ke Akun Anda
            </h1>
            <div className="relative w-full mb-4">
              <FontAwesomeIcon
                icon="envelope"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={handleChangeForm}
                name="username"
                className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="relative w-full mb-4">
              <FontAwesomeIcon
                icon="lock"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChangeForm}
                name="password"
                className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={hidePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <FontAwesomeIcon icon="eye-slash" />
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#1d3557] text-white rounded-lg w-full px-4 py-2 my-3 hover:bg-[#2a4d7a] transition-colors"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
