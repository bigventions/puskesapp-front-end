import { useState, useEffect, useId } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import Dropdown from "../components/dropDown";

export default function Home () {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  )
}