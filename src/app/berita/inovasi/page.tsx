import React from "react";
import Link from "next/link";

const dataInovasi = [
  {
    id: 1,
    tanggal: "19 Januari 2026",
    judul: "E-Library SDN 1 Batu Rakit",
    deskripsi:
      "Transformasi perpustakaan fisik ke digital untuk memudahkan akses bacaan siswa dari rumah.",
  },
  {
    id: 2,
    tanggal: "15 Januari 2026",
    judul: "Pupuk Organik Cair dari Limbah Kantin",
    deskripsi:
      "Inovasi siswa kelas 5 dalam mengolah limbah organik menjadi nutrisi tanaman sekolah.",
  },
];

export default function InovasiPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-12 border-l-4 border-purple-600 pl-4">
        <h1 className="text-3xl font-bold text-gray-800 text-">Inovasi</h1>
        <p className="text-gray-500 text-">
          Karya dan terobosan baru dari SDN 1 Batu Rakit
        </p>
      </div>

      <div className="grid gap-6">
        {dataInovasi.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-purple-200 transition-all text-"
          >
            <span className="text-sm text-gray-400 text-">{item.tanggal}</span>
            <h2 className="text-xl font-semibold text-gray-800 mt-2 text-">
              {item.judul}
            </h2>
            <p className="text-gray-600 mt-2 mb-4 text-">{item.deskripsi}</p>
            <Link href={`/berita/inovasi/${item.id}`}>
              <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-400 transition-colors duration-200 cursor-pointer shadow-sm text-">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
