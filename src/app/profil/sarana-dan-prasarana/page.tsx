import React from "react";

const SaranaPrasarana = () => {
  // Data fasilitas sekolah
  const fasilitas = [
    {
      nama: "Ruang Kelas",
      jumlah: "6 Ruang",
      deskripsi:
        "Ruang belajar yang nyaman dilengkapi dengan papan tulis dan meja kursi standar.",
    },
    {
      nama: "Perpustakaan",
      jumlah: "1 Unit",
      deskripsi:
        "Koleksi buku lengkap untuk mendukung minat baca dan literasi siswa.",
    },
    {
      nama: "Laboratorium Komputer",
      jumlah: "1 Unit",
      deskripsi:
        "Dilengkapi dengan perangkat komputer untuk menunjang pembelajaran IT.",
    },
    {
      nama: "Lapangan Olahraga",
      jumlah: "1 Unit",
      deskripsi:
        "Area luas untuk kegiatan olahraga seperti senam, bola voli, dan upacara.",
    },
    {
      nama: "Unit Kesehatan Sekolah (UKS)",
      jumlah: "1 Unit",
      deskripsi:
        "Fasilitas kesehatan dasar untuk penanganan pertama siswa yang sakit.",
    },
    {
      nama: "Mushola",
      jumlah: "1 Unit",
      deskripsi:
        "Tempat ibadah untuk mendukung kegiatan keagamaan siswa dan guru.",
    },
  ];

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 uppercase">
          Sarana dan Prasarana
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SD Negeri 1 Batu Rakit terus berupaya menyediakan fasilitas terbaik
          untuk menunjang kegiatan belajar mengajar dan kreativitas siswa.
        </p>
      </div>

      {/* Grid Fasilitas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fasilitas.map((item, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-blue-600 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800">{item.nama}</h2>
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                {item.jumlah}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>

      {/* Bagian Tambahan (Opsional) */}
      <div className="mt-16 bg-gray-50 p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Rencana Pengembangan
        </h2>
        <p className="text-center text-gray-700 italic">
          "Dalam tahun ajaran ini, sekolah merencanakan penambahan taman baca di
          sudut kelas dan pengadaan alat peraga IPA yang lebih modern."
        </p>
      </div>
    </div>
  );
};

export default SaranaPrasarana;
