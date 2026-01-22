import React from "react";
import Link from "next/link";

export default function DetailPengumuman({
  params,
}: {
  params: { id: string };
}) {
  // Catatan: Di dunia nyata, Anda akan mengambil data dari database berdasarkan params.id
  // Ini adalah data contoh untuk tampilan
  const pengumuman = {
    judul: "Pengumuman Pembagian Rapor Semester Ganjil",
    tanggal: "20 Januari 2026",
    kategori: "Akademik",
    isi: `Sehubungan dengan berakhirnya kegiatan belajar mengajar semester ganjil tahun ajaran 2025/2026, 
    kami mengundang seluruh orang tua/wali murid SD Negeri 1 Batu Rakit untuk hadir pada:
    
    Hari/Tanggal: Sabtu, 24 Januari 2026
    Waktu: 08.00 - 11.00 WITA
    Tempat: Ruang Kelas Masing-masing
    
    Demikian pengumuman ini kami sampaikan. Atas perhatian dan kehadirannya, kami ucapkan terima kasih.`,
    penulis: "Admin Sekolah",
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <Link
          href="/berita/inovasi"
          className="flex items-center text-blue-600 hover:text-blue-400 mb-8 cursor-pointer transition-colors text-"
        >
          <span className="mr-2">←</span> Kembali ke Daftar Pengumuman
        </Link>

        <article>
          <header className="mb-8">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
              {pengumuman.kategori}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">
              {pengumuman.judul}
            </h1>
            <div className="flex items-center text-gray-500 text-sm gap-4">
              <span>{pengumuman.tanggal}</span>
              <span>•</span>
              <span>Oleh: {pengumuman.penulis}</span>
            </div>
          </header>

          <div className="prose prose-green max-w-none">
            {/* Menggunakan whitespace-pre-line agar baris baru pada teks terbaca */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {pengumuman.isi}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 italic">
              *Harap membawa kartu identitas siswa saat pengambilan rapor.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
