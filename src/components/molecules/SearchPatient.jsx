// Import Dependencies

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Example Data
const patientsData = [
  {
    id: 1,
    rm_no: 32193201,
    name: "Danu",
    age: 12,
    months: 10,
    days: 12,
    gender: "Laki-laki",
    birth_date: "10 Jan 2013",
    phone: "+628432432423",
  },
  {
    id: 2,
    rm_no: 32193210,
    name: "Amelia",
    age: 12,
    months: 10,
    days: 12,
    gender: "Perempuan",
    birth_date: "10 Jan 2013",
    phone: "+628432432423",
  },
];

export const SearchPatient = () => {
  // State
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [query, setQuery] = useState("");

  // Hooks

  // Methods
  const searchPatients = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredPatients(
      patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(value),
      ),
    );
  };

  // Event Handler

  // Return JSX
  return (
    <div className="relative w-full mx-auto p-4 mt-5">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={searchPatients}
          className="w-full px-4 py-2 text-[#9CA3AF] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Cari Data Pasien (No RM, Nama Lengkap, NIK, atau No BPJS)"
        ></input>
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]">
          <FontAwesomeIcon icon="search" />
        </div>
      </div>

      {filteredPatients.length > 0 && (
        <ul className="left-0 w-full m bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredPatients.map((patient) => (
            <li
              key={patient.id}
              className="w-full p-3 border-b hover:bg-gray-100"
            >
              <div className="flex items-center">
                <strong>{patient.name}</strong>
                <span className="pl-2 block text-sm text-[#9CA3AF] font-semibold">
                  {patient.age} TAHUN {patient.months} BULAN {patient.days} HARI
                </span>
              </div>
              <div className="flex items-center">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full bg-[#E5FFF8] text-[#79D7BE]`}
                >
                  {patient.rm_no}
                </span>
                <span
                  className={`inline-block mx-2 px-2 py-1 text-xs font-semibold rounded-full ${patient.gender === "Laki-laki" ? "bg-[#E5F5FF] text-[#40A2E3]" : "bg-[#FFF8F8] text-[#F9A8D4]"}`}
                >
                  {patient.gender}
                </span>
                <p className="text-sm text-[#9CA3AF]">
                  Lahir pada{" "}
                  <span className="font-semibold">{patient.birth_date}</span>.
                  No. HP: <span className="font-semibold">{patient.phone}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
