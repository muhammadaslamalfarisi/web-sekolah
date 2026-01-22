import React from "react";
import Link from "next/link";

export default function DetailInovasi({ params }: { params: { id: string } }) {
  const detailData = {
    "1": {
      judul: "E-Library SDN 1 Batu Rakit",
      tanggal: "19 Januari 2026",
      kategori: "Teknologi",
      isi: "E-Library merupakan platform digital yang kami kembangkan untuk memastikan literasi siswa tetap berjalan di era digital. Platform ini menyediakan lebih dari 500 judul buku cerita, buku pelajaran, dan ensiklopedia yang bisa diakses menggunakan akun NISN masing-masing siswa.",
      dampak:
        "Meningkatkan minat baca siswa sebesar 40% dalam satu semester terakhir.",
    },
  };

  const detail =
    detailData[params.id as keyof typeof detailData] || detailData["1"];

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <Link
        href="/berita/inovasi"
        className="flex items-center text-blue-600 hover:text-blue-400 mb-8 cursor-pointer transition-colors text-"
      >
        <span className="mr-2">←</span> Kembali ke Daftar Inovasi
      </Link>

      <article className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-">
        <header className="mb-8">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full uppercase text-">
            {detail.kategori}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 text-">
            {detail.judul}
          </h1>
          <p className="text-gray-400 mt-2 text-">{detail.tanggal}</p>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed text-">
          <p className="text-lg text-">{detail.isi}</p>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 text-">
            <h4 className="font-bold text-purple-900 mb-1 text-">
              Dampak Inovasi:
            </h4>
            <p className="text-">{detail.dampak}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
