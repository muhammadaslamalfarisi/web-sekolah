import React from "react";

// Tambahkan import Link di bagian atas
import Link from "next/link";

// Data dummy untuk daftar pengumuman
const dataPengumuman = [
  {
    id: 1,
    tanggal: "20 Januari 2026",
    judul: "Pengumuman Pembagian Rapor Semester Ganjil",
    deskripsi:
      "Diberitahukan kepada seluruh wali murid bahwa pembagian rapor akan dilaksanakan pada hari Sabtu ini.",
    kategori: "Akademik",
  },
  {
    id: 2,
    tanggal: "18 Januari 2026",
    judul: "Persiapan Lomba Kebersihan Kelas",
    deskripsi:
      "Dalam rangka memperingati HUT Sekolah, seluruh siswa diharapkan berpartisipasi dalam menjaga kebersihan.",
    kategori: "Kegiatan",
  },
  {
    id: 3,
    tanggal: "15 Januari 2026",
    judul: "Jadwal Ekstrakurikuler Terbaru",
    deskripsi:
      "Informasi mengenai jadwal terbaru kegiatan ekstrakurikuler Pramuka dan Seni Tari.",
    kategori: "Info",
  },
];

export default function PengumumanPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Judul Halaman */}
      <div className="mb-12 border-l-4 border-green-600 pl-4">
        <h1 className="text-3xl font-bold text-gray-800">Pengumuman</h1>
        <p className="text-gray-500">
          Informasi terbaru seputar SD Negeri 1 Batu Rakit
        </p>
      </div>

      {/* Daftar Pengumuman */}
      <div className="grid gap-6">
        {dataPengumuman.map((item) => (
          <div
            key={item.id}
            className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {item.kategori}
                  </span>
                  <span className="text-sm text-gray-400">{item.tanggal}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {item.judul}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
              <div className="shrink-0">
                <Link href={`/berita/pengumuman/${item.id}`}>
                  <button className="w-full md:w-auto px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-400 transition-all cursor-pointer shadow-md">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
