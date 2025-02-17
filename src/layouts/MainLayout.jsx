import { Outlet } from "react-router-dom";
import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex flex-cols">
      <Sidebar />
      <div className="dark:bg-darkMainBg h-screen w-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
