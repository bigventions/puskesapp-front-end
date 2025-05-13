// Import Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../../components/atoms/Input";
import { SearchPatient } from "../../components/molecules/SearchPatient";
import { useState } from "react";
import { DdlField } from "../../components/molecules/DdlField";

// Example Data
const patients = [
  {
    noRM: "1234567",
    nama: "Amel",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Feb 2025",
    infoPelayanan: ["K3", "Rajal", "Poli Umum"],
    statusPasien: "Terdaftar",
    statusWarna: "blue",
  },
  {
    noRM: "1234567",
    nama: "Thomas Alva Edison",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Mar 2025",
    infoPelayanan: ["LK", "Rajal", "Poli Umum"],
    statusPasien: "Diperiksa Dokter",
    statusWarna: "green",
  },
  {
    noRM: "1234567",
    nama: "Thomas Alva Edison",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Mar 2025",
    infoPelayanan: ["LK", "Rajal", "Poli Umum"],
    statusPasien: "Diperiksa Dokter",
    statusWarna: "green",
  },
  {
    noRM: "1234567",
    nama: "Thomas Alva Edison",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Mar 2025",
    infoPelayanan: ["LK", "Rajal", "Poli Umum"],
    statusPasien: "Diperiksa Dokter",
    statusWarna: "green",
  },
  {
    noRM: "1234567",
    nama: "Thomas Alva Edison",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Mar 2025",
    infoPelayanan: ["LK", "Rajal", "Poli Umum"],
    statusPasien: "Diperiksa Dokter",
    statusWarna: "green",
  },
  {
    noRM: "1234567",
    nama: "Thomas Alva Edison",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Mar 2025",
    infoPelayanan: ["LK", "Rajal", "Poli Umum"],
    statusPasien: "Diperiksa Dokter",
    statusWarna: "green",
  },
  {
    noRM: "1234567",
    nama: "Amel",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Feb 2025",
    infoPelayanan: ["K3", "Rajal", "Poli Umum"],
    statusPasien: "Terdaftar",
    statusWarna: "blue",
  },
  {
    noRM: "1234567",
    nama: "Amel",
    nik: "1234567890123456",
    bpjs: "1234567890123",
    tanggalLahir: "01 Jan 1977",
    tanggalDaftar: "22 Feb 2025",
    infoPelayanan: ["K3", "Rajal", "Poli Umum"],
    statusPasien: "Terdaftar",
    statusWarna: "blue",
  },
  // Tambahkan lainnya
];

export default function Main(
  {
    // Props
  },
) {
  // State
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = Math.ceil(patients.length / rowsPerPage);
  // const [filteredPatientVisit, setFilteredPatientVisit] = useState([]);

  // Hooks

  // Methods
  const searchPatients = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    // if (value === "") {
    //   setFilteredPatientVisit([]); // kosongkan hasil pencarian saat input kosong
    // } else {
    //   setFilteredPatientVisit(
    //     patientsData.filter((patient) =>
    //       patient.name.toLowerCase().includes(value),
    //     ),
    //   );
    // }
  };

  // Event Handler

  // Return JSX

  return (
    <div className="flex flex-col h-full">
      <SearchPatient />

      <div className="p-4 mx-4 border rounded-lg shadow-md dark:bg-dark">
        <div className="grid grid-cols-4 gap-2 my-2">
          <div className="relative col-span-3">
            <input
              type="text"
              value={query}
              onChange={searchPatients}
              className="w-full px-4 py-2 text-[#9CA3AF] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-dark"
              placeholder="Cari Kunjungan Pasien"
            ></input>
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]">
              <FontAwesomeIcon icon="search" />
            </div>
          </div>
          <Input type="date" />
        </div>
        <div className="grid grid-cols-4 gap-2 my-2">
          <DdlField placeholder="Filter Klaster" />
          <DdlField placeholder="Filter Unit Pelayanan" />
          <DdlField placeholder="Filter Poli" />
          <DdlField placeholder="Filter Status Pasien" />
        </div>
      </div>

      <div className="flex-1 p-4 mx-4 my-2 overflow-hidden border rounded-lg shadow-md dark:bg-dark">
        <div className="h-full overflow-y-auto">
          {" "}
          {/* Ubah max-height sesuai kebutuhan */}
          <table className="w-full text-sm text-left border-collapse">
            <thead className="sticky top-0 z-10 text-xs text-white bg-primary dark:bg-black dark:text-white">
              <tr className="rounded-lg">
                <th className="p-4">No. RM</th>
                <th className="p-4">Nama Lengkap</th>
                <th className="p-4">NIK</th>
                <th className="p-4">No. BPJS</th>
                <th className="p-4">Tanggal Lahir</th>
                <th className="p-4">Tanggal Daftar</th>
                <th className="p-4">Info Pelayanan</th>
                <th className="p-4">Status Pasien</th>
              </tr>
            </thead>
            <tbody className="text-black dark:text-white">
              {patients.map((p, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 dark:hover:bg-dark"
                >
                  <td className="p-4">{p.noRM}</td>
                  <td className="p-4">{p.nama}</td>
                  <td className="p-4">{p.nik}</td>
                  <td className="p-4">{p.bpjs}</td>
                  <td className="p-4">{p.tanggalLahir}</td>
                  <td className="p-4">{p.tanggalDaftar}</td>
                  <td className="p-4 space-x-1">
                    {p.infoPelayanan.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-semibold text-white rounded
                      ${p.statusWarna === "blue" ? "bg-blue-500" : ""}
                      ${p.statusWarna === "orange" ? "bg-orange-400" : ""}
                      ${p.statusWarna === "green" ? "bg-green-500" : ""}
                    `}
                    >
                      {p.statusPasien}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sticky bottom-0 z-10 flex items-center justify-between p-4 mx-4 mb-2 border-t rounded-lg shadow-md">
        {/* Dropdown Per Halaman */}
        <div className="flex items-center space-x-2">
          <select
            className="px-3 py-2 text-sm border rounded-md"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {[10, 20, 30, 50].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-700">Per Halaman</span>
        </div>

        {/* Pagination */}
        <div className="flex items-center space-x-1">
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            &lt;
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded ${
                page === currentPage
                  ? "bg-primary dark:bg-dark text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
