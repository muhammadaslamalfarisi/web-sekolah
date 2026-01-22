import React from "react";
import Link from "next/link";

const dataUndangan = [
  {
    id: "1",
    tanggal: "21 Januari 2026",
    judul: "Undangan Rapat Komite Sekolah",
    deskripsi:
      "Mengundang seluruh pengurus komite untuk membahas program kerja tahunan dan rencana renovasi perpustakaan.",
  },
  {
    id: "2",
    tanggal: "25 Januari 2026",
    judul: "Undangan Sosialisasi PPDB 2026",
    deskripsi:
      "Sosialisasi tata cara pendaftaran siswa baru tahun ajaran 2026/2027 bagi masyarakat sekitar.",
  },
];

export default function UndanganPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Judul Halaman */}
      <div className="mb-12 border-l-4 border-blue-600 pl-4">
        <h1 className="text-3xl font-bold text-gray-800">Undangan</h1>
        <p className="text-gray-500">
          Daftar undangan resmi kegiatan sekolah SD Negeri 1 Batu Rakit
        </p>
      </div>

      {/* List Kartu Undangan */}
      <div className="grid gap-6">
        {dataUndangan.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-sm text-gray-400 font-medium">
              {item.tanggal}
            </span>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              {item.judul}
            </h2>
            <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
              {item.deskripsi}
            </p>

            <Link href={`/berita/undangan/${item.id}`}>
              <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-400 transition-colors duration-200 cursor-pointer shadow-sm active:scale-95">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
