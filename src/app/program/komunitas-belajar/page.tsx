import React from "react";

export default function KomunitasBelajarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Komunitas Belajar
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wadah kolaborasi guru dan tenaga kependidikan SD Negeri 1 Batu Rakit
            untuk meningkatkan kualitas pembelajaran secara berkelanjutan.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid gap-8">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              Visi & Misi
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Komunitas belajar kami bertujuan untuk menciptakan lingkungan
              sekolah yang reflektif, inovatif, dan berpusat pada perkembangan
              peserta didik. Melalui berbagi praktik baik (best practices), kami
              memastikan setiap guru memiliki dukungan untuk berkembang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Kegiatan Rutin</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Diskusi Kurikulum Merdeka</li>
                <li>Workshop Media Pembelajaran</li>
                <li>Evaluasi Hasil Belajar Siswa</li>
                <li>Sharing Session Antar Guru</li>
              </ul>
            </div>

            <div className="bg-white border p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Jadwal Pertemuan</h3>
              <p className="text-slate-600">
                Setiap hari Sabtu pada minggu ke-2 dan ke-4 setiap bulannya.
              </p>
              <p className="mt-4 font-medium text-green-600 italic">
                "Belajar Bersama, Tumbuh Bersama."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
