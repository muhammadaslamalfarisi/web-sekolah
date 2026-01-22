import React from "react";
import Link from "next/link";

export default function DetailUndangan({ params }: { params: { id: string } }) {
  // Simulasi data detail (Bisa diganti dengan Fetch API nanti)
  const detailUndangan = {
    "1": {
      judul: "Undangan Rapat Komite Sekolah",
      tanggal: "21 Januari 2026",
      kategori: "Rapat Resmi",
      isi: `Kepada Yth. Bapak/Ibu Pengurus Komite Sekolah,
      
      Diharapkan kehadirannya dalam rapat rutin komite yang akan membahas mengenai:
      1. Evaluasi program kerja semester ganjil.
      2. Rencana anggaran renovasi fasilitas sekolah.
      3. Persiapan acara ulang tahun sekolah.
      
      Acara akan dilaksanakan pada:
      Hari/Tanggal: Rabu, 28 Januari 2026
      Waktu: 09.00 - Selesai
      Tempat: Aula Utama SDN 1 Batu Rakit
      
      Demikian undangan ini kami sampaikan, atas kehadirannya diucapkan terima kasih.`,
      ttd: "Kepala Sekolah SDN 1 Batu Rakit",
    },
  };

  const data =
    detailUndangan[params.id as keyof typeof detailUndangan] ||
    detailUndangan["1"];

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      {/* Tombol Kembali dengan Efek Tangan */}
      <Link
        href="/berita/undangan"
        className="flex items-center text-blue-600 hover:text-blue-400 mb-8 cursor-pointer font-medium transition-colors"
      >
        <span className="mr-2">←</span> Kembali ke Daftar Undangan
      </Link>

      <article className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <header className="mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
            {data.kategori}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            {data.judul}
          </h1>
          <p className="text-gray-400 mt-2 italic">{data.tanggal}</p>
        </header>

        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="text-lg leading-relaxed whitespace-pre-line bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
            {data.isi}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="font-semibold text-gray-800 underline">Hormat Kami,</p>
          <p className="text-gray-600 mt-1">{data.ttd}</p>
        </div>
      </article>
    </div>
  );
}
