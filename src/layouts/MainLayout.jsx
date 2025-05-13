// Import Dependencies

import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/organisms/Navbar";
import { Sidebar } from "@/components/organisms/Sidebar";

export default function MainLayout(
  {
    // Props
  },
) {
  // State

  // Hooks

  // Methods

  // Event Handler

  // Return JSX
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar className="h-16" />
      <div className="flex flex-row flex-1 h-0">
        <div className="flex flex-col justify-center">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
