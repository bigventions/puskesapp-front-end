// Import Dependencies
import { useState } from "react";
import { SearchPatient } from "../../components/molecules/SearchPatient";
import { TextField } from "../../components/molecules/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main(
  {
    // Props
  },
) {
  // State
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  // Hooks

  // Methods

  // Event Handler

  // Return JSX

  return (
    <div className="relative flex flex-col h-full">
      <SearchPatient />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-4 my-2 border rounded-lg dark:bg-dark">
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            className="flex items-center justify-between w-full px-4 py-2 text-left text-white transition rounded-lg bg-primary hover:bg-primary-brighter dark:bg-dark dark:hover:bg-gray-800"
          >
            BIODATA PASIEN
            <FontAwesomeIcon icon={isOpen1 ? "caret-up" : "caret-down"} />
          </button>
          {isOpen1 && (
            <div className="p-4 shadow-md">
              <div className="grid grid-cols-5 gap-4">
                <TextField className="col-span-2" id="no_rm" label="NO RM" />
                <TextField id="tanggal_lahir" label="TANGGAL LAHIR" />
                <TextField id="agama" label="AGAMA" />
                <TextField id="jenis_kelamin" label="JENIS KELAMIN" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                <TextField className="col-span-2" id="nama" label="NAMA" />
                <TextField id="pendidikan" label="PENDIDIKAN" />
                <TextField id="pekerjaan" label="PEKERJAAN" />
                <TextField id="status_pernikahan" label="STATUS PERNIKAHAN" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                <TextField className="col-span-2" id="no_ktp" label="NO KTP" />
                <TextField id="kewarganegaraan" label="KEWARGANEGARAAN" />
                <TextField id="suku" label="SUKU" />
                <TextField id="status_keluarga" label="STATUS KELUARGA" />
              </div>
              <div className="grid grid-cols-11 gap-4">
                <TextField
                  className="col-span-3"
                  id="tempat_lahir"
                  label="TEMPAT LAHIR"
                />
                <TextField className="col-span-2" id="desa" label="DESA" />
                <TextField
                  className="col-span-2"
                  id="kecamatan"
                  label="KECAMATAN"
                />
                <TextField
                  className="col-span-2"
                  id="kabupaten"
                  label="KABUPATEN"
                />
                <TextField className="col-span-1" id="rt" label="RT" />
                <TextField className="col-span-1" id="rw" label="RW" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <TextField id="no_telepon" label="NO TELEPON" />
                <TextField id="email" label="EMAIL" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <TextField id="no_handphone" label="NO HANDPHONE" />
                <TextField id="alamat" label="ALAMAT" />
              </div>
            </div>
          )}
        </div>

        <div className="mx-4 my-2 border rounded-lg dark:bg-dark">
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className="flex items-center justify-between w-full px-4 py-2 text-left text-white transition rounded-lg bg-primary hover:bg-primary-brighter dark:bg-dark dark:hover:bg-gray-800"
          >
            ASURANSI
            <FontAwesomeIcon icon={isOpen2 ? "caret-up" : "caret-down"} />
          </button>
          {isOpen2 && (
            <div className="p-4 shadow-md">
              <div className="grid grid-cols-3 gap-4">
                <TextField id="nama_asuransi" label="NAMA ASURANSI" />
                <TextField id="no_asuransi" label="NO ASURANSI" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 z-10 flex justify-end p-4 mx-4 mb-2 bg-white border rounded-lg shadow-md">
        <button className="px-4 py-2 text-white rounded-lg bg-primary hover:bg-primary-brighter dark:bg-dark dark:hover:bg-gray-800">
          Daftar
        </button>
      </div>
    </div>
  );
}
