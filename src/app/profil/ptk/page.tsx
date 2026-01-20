import React from "react";

const DataPTK = () => {
  // Data sesuai screenshot daftar PTK Anda
  const daftarPTK = [
    { nama: "RADEN IRAWANGSA, S.Pd", jabatan: "Kepala Sekolah", jk: "L" },
    { nama: "BAIQ YULI ISDAENI, S.Pd", jabatan: "Guru Kelas I", jk: "P" },
    { nama: "NURUL HIDAYAH, S.Pd", jabatan: "Guru Kelas II", jk: "P" },
    { nama: "ARI HINDARTI M, S.Pd", jabatan: "Guru Kelas III", jk: "P" },
    { nama: "SABARIAH, S.Pd", jabatan: "Guru Kelas IV.A", jk: "P" },
    { nama: "RATNINGSIH, S.Pd", jabatan: "Guru Kelas IV.B", jk: "P" },
    { nama: "AGUS FEBRIAWAN, S.Pd", jabatan: "Guru Kelas V.A", jk: "L" },
    { nama: "RAMDAN, S.Pd", jabatan: "Guru Kelas V.B", jk: "L" },
    { nama: "ISNAN SATRIAWAN, S.Pd", jabatan: "Guru Kelas VI", jk: "L" },
    { nama: "FAIZUL WATHONI, S.Pd", jabatan: "Guru Agama Islam", jk: "L" },
    {
      nama: "FITRIATUL KHAERANI, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      jk: "P",
    },
    { nama: "MUHAMMAD ASLAM ALFARISI", jabatan: "Operator Sekolah", jk: "L" },
    { nama: "MERTANEP", jabatan: "Penjaga Sekolah", jk: "L" },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase text-gray-800">
          DATA PENDIDIK & TENAGA KEPENDIDIKAN
        </h1>
        <p className="text-gray-600 italic">SD Negeri 1 Batu Rakit</p>
      </div>

      {/* Kontainer Tabel Full Width */}
      <div className="w-full overflow-x-auto shadow-2xl rounded-xl border border-gray-100 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-4 px-6 text-left font-bold uppercase text-sm">
                NO
              </th>
              <th className="py-4 px-6 text-left font-bold uppercase text-sm">
                NAMA LENGKAP
              </th>
              <th className="py-4 px-6 text-left font-bold uppercase text-sm">
                JABATAN
              </th>
              <th className="py-4 px-6 text-center font-bold uppercase text-sm">
                L/P
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {daftarPTK.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition-colors"
              >
                <td className="py-4 px-6 font-medium">{index + 1}</td>
                <td className="py-4 px-6 font-bold uppercase">{item.nama}</td>
                <td className="py-4 px-6">{item.jabatan}</td>
                <td className="py-4 px-6 text-center font-semibold">
                  {item.jk}
                </td>
              </tr>
            ))}
          </tbody>
          {/* Baris Total Keseluruhan telah dihapus sesuai permintaan */}
        </table>
      </div>
    </div>
  );
};

export default DataPTK;
