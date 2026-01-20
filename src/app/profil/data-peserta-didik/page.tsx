import React from "react";

const DataPesertaDidik = () => {
  // Data siswa sesuai screenshot kodingan Anda
  const dataSiswa = [
    { kelas: "Kelas 1", lakiLaki: 13, perempuan: 7 },
    { kelas: "Kelas 2", lakiLaki: 12, perempuan: 18 },
    { kelas: "Kelas 3", lakiLaki: 16, perempuan: 17 },
    { kelas: "Kelas 4", lakiLaki: 20, perempuan: 23 },
    { kelas: "Kelas 5", lakiLaki: 22, perempuan: 13 },
    { kelas: "Kelas 6", lakiLaki: 11, perempuan: 16 },
  ];

  // 1. Menghitung Total Keseluruhan (Kolom) secara otomatis
  const totalLakiLaki = dataSiswa.reduce((acc, curr) => acc + curr.lakiLaki, 0);
  const totalPerempuan = dataSiswa.reduce(
    (acc, curr) => acc + curr.perempuan,
    0,
  );
  const totalSeluruh = totalLakiLaki + totalPerempuan;

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase text-gray-800">
          DATA PESERTA DIDIK
        </h1>
        <p className="text-gray-600">
          SD Negeri 1 Batu Rakit - Tahun Ajaran 2025/2026
        </p>
      </div>

      <div className="w-full overflow-x-auto shadow-2xl rounded-xl border border-gray-100 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-sm">
              <th className="py-4 px-6 text-left font-bold uppercase border-b">
                KELAS
              </th>
              <th className="py-4 px-6 text-center font-bold uppercase border-b">
                LAKI-LAKI
              </th>
              <th className="py-4 px-6 text-center font-bold uppercase border-b">
                PEREMPUAN
              </th>
              <th className="py-4 px-6 text-center font-bold uppercase border-b">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dataSiswa.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition-colors"
              >
                <td className="py-4 px-6 font-semibold">{item.kelas}</td>
                <td className="py-4 px-6 text-center">{item.lakiLaki}</td>
                <td className="py-4 px-6 text-center">{item.perempuan}</td>
                {/* 2. Menjumlahkan Total PER KELAS secara otomatis */}
                <td className="py-4 px-6 text-center font-bold">
                  {item.lakiLaki + item.perempuan}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100 font-black">
            <tr>
              <td className="py-4 px-6 text-left uppercase">
                TOTAL KESELURUHAN
              </td>
              <td className="py-4 px-6 text-center">{totalLakiLaki}</td>
              <td className="py-4 px-6 text-center">{totalPerempuan}</td>
              <td className="py-4 px-6 text-center text-blue-700 text-xl">
                {totalSeluruh}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DataPesertaDidik;
